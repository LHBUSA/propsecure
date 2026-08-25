# PropSecure landing page

A self-contained, responsive enterprise site for `propsecure.proptechusa.ai` with:

- a premium red, white, and blue PropSecure design;
- a responsive property change-intelligence and event-routing experience;
- current 225M+ identity and four-market PropData positioning;
- global identity, jurisdiction-scoped surveillance, and governed delivery architecture;
- direct “Book an Integration” conversion paths to Calendly;
- an enterprise integration brief form for lower-friction leads;
- secure Slack lead delivery through a Vercel serverless function;
- source, company, use case, volume, notes, page URL, and submission time in each Slack alert;
- a honeypot field, origin checks, payload limits, and request timeouts;
- complete JSON-LD, social metadata, favicon/PWA assets, robots, and sitemap discovery files.

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

Each submission will arrive as a formatted `New PropSecure integration lead` message in the selected Slack channel.

## Connect the custom domain

1. In Vercel, open **Project Settings → Domains**.
2. Add `propsecure.proptechusa.ai`.
3. Add the DNS record Vercel gives you wherever `proptechusa.ai` DNS is managed.
4. After DNS verifies, make `propsecure.proptechusa.ai` the production domain.

## Files

- `index.html` — the complete page, styles, graphics, responsive layout, and browser interactions.
- `api/waitlist.js` — validates leads and forwards them to Slack.
- `favicon.svg`, `favicon.ico`, and PNG icons — the complete PropSecure browser and device icon set.
- `og-image.png` — the 1200×630 social share image.
- `site.webmanifest`, `robots.txt`, and `sitemap.xml` — PWA and search discovery assets.
- `vercel.json` — Vercel function and security-header configuration.
- `env.example` — environment-variable name only; never commit a real webhook URL.

## Important

Do not paste the real Slack webhook into `index.html`, GitHub, or any public file. Store it only in Vercel's environment variables.
