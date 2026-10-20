# Okechukwu Venatius Chibuike Ltd. — Website Preview

A responsive, front-end preview site for OVC’s construction and architectural-finishing services. Built with Next.js App Router, React, TypeScript, Tailwind CSS and Lucide icons.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Quality checks: `npm run typecheck` and `npm run build`.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/projects` — Projects / portfolio preview
- `/contact` — Contact details and preview-only enquiry form
- `/sitemap.xml` and `/robots.txt` — metadata routes

The route declaration is in [`public/manus-routes.json`](public/manus-routes.json).

## Preview-only behavior

The contact form validates its fields in the browser and then displays a preview confirmation. It does **not** send or store the enquiry. There is no API, database, authentication, email integration or customer-data storage. Use the listed phone numbers or email address for real enquiries.

The supplied master logo is stored at `public/brand/ovc-master-logo.png` and must remain unchanged. No client project photographs were supplied, so the project page uses explicit placeholders rather than representing stock images as OVC work.

The site uses only the business name, motto, service scope and quality/customer-satisfaction emphasis supplied in the brief. No project names, locations, history, credentials, warranties or performance claims have been invented. Verify all copy, contact details and final project images with OVC before production.
