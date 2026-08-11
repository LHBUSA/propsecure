const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 500) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

function slackText(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  let input;
  try {
    input = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ ok: false, error: "Invalid request." });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(input.website)) {
    return res.status(200).json({ ok: true });
  }

  const lead = {
    name: clean(input.name, 120),
    email: clean(input.email, 180).toLowerCase(),
    company: clean(input.company, 180),
    useCase: clean(input.useCase, 180),
    portfolioSize: clean(input.portfolioSize, 100),
    notes: clean(input.notes, 1200),
    source: clean(input.source, 80) || "PropSecure website",
    pageUrl: clean(input.pageUrl, 500),
  };

  if (!EMAIL_PATTERN.test(lead.email)) {
    return res.status(422).json({ ok: false, error: "Enter a valid work email." });
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured.");
    return res.status(503).json({
      ok: false,
      error: "Lead notifications are not configured yet.",
    });
  }

  const fields = [
    ["Name", lead.name || "Not provided"],
    ["Email", lead.email],
    ["Company", lead.company || "Not provided"],
    ["Use case", lead.useCase || "General waitlist"],
    ["Portfolio / volume", lead.portfolioSize || "Not provided"],
    ["Source", lead.source],
  ];

  const payload = {
    text: `New PropSecure lead: ${lead.email}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🛡️ New PropSecure lead",
          emoji: true,
        },
      },
      {
        type: "section",
        fields: fields.map(([label, value]) => ({
          type: "mrkdwn",
          text: `*${label}*\n${slackText(value)}`,
        })),
      },
      ...(lead.notes
        ? [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Notes*\n${slackText(lead.notes)}`,
              },
            },
          ]
        : []),
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `${lead.pageUrl ? `Submitted from ${slackText(lead.pageUrl)} • ` : ""}${new Date().toISOString()}`,
          },
        ],
      },
    ],
  };

  try {
    const slackResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!slackResponse.ok) {
      const responseText = await slackResponse.text();
      throw new Error(`Slack returned ${slackResponse.status}: ${responseText}`);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("PropSecure Slack notification failed", error);
    return res.status(502).json({
      ok: false,
      error: "We couldn't submit that right now. Please try again.",
    });
  }
};
