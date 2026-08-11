# PropSecure landing page

A self-contained, responsive landing page for `propsecure.proptechusa.ai` with:

- a premium red, white, and blue PropSecure design;
- a responsive parcel-security dashboard concept;
- waitlist and detailed early-access forms;
- secure Slack lead delivery through a Vercel serverless function;
- source, company, use case, volume, notes, page URL, and submission time in each Slack alert;
- a honeypot field for basic bot filtering.

## Deploy to Vercel

1. Put every file in this folder at the root of a GitHub repository.
2. Import that repository into Vercel as a new project.
3. Leave the framework preset as **Other**. No build command or output directory is required.
4. Deploy.

## Connect the forms to Slack

The Slack webhook stays on the server and is never exposed in `index.html`.

1. In Slack, create an **Incoming Webhook** and choose the channel that should receive PropSecure leads.
2. Copy the webhook URL.
3. In Vercel, open **Project Settings → Environment Variables**.
4. Add a variable named `SLACK_WEBHOOK_URL` and paste the webhook URL as its value.
5. Enable it for Production and Preview, save it, then redeploy.

Each submission will arrive as a formatted `New PropSecure lead` message in the selected Slack channel.

## Connect the custom domain

1. In Vercel, open **Project Settings → Domains**.
2. Add `propsecure.proptechusa.ai`.
3. Add the DNS record Vercel gives you wherever `proptechusa.ai` DNS is managed.
4. After DNS verifies, make `propsecure.proptechusa.ai` the production domain.

## Files

- `index.html` — the complete page, styles, graphics, responsive layout, and browser interactions.
- `api/waitlist.js` — validates leads and forwards them to Slack.
- `favicon.svg` — PropSecure shield favicon.
- `vercel.json` — Vercel function and security-header configuration.
- `.env.example` — environment-variable name only; never commit a real webhook URL.

## Important

Do not paste the real Slack webhook into `index.html`, GitHub, or any public file. Store it only in Vercel's environment variables.
