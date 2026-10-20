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
- `/admin` — Unlinked demo dashboard, with `/admin/projects`, `/admin/services` and `/admin/enquiries` sample pages
- `/sitemap.xml` and `/robots.txt` — metadata routes

The route declaration is in [`public/manus-routes.json`](public/manus-routes.json).

## Preview-only behavior

The contact form validates its fields in the browser and then displays a preview confirmation. It does **not** send or store the enquiry. There is no API, database, authentication, email integration or customer-data storage. Use the listed phone numbers or email address for real enquiries.
The `/admin` area is an illustrative, read-only UI demo with fictional activity and enquiry examples. It is not authenticated, does not connect to or change live data, and must not be used for real administration without implementing access control and a backend.

The supplied master logo is stored at `public/brand/ovc-master-logo.png` and must remain unchanged. Supplied project photos and a video are stored under `public/images/projects/`; captions stay neutral because project names, locations and completion details were not provided.

The site uses only the business name, motto, service scope and quality/customer-satisfaction emphasis supplied in the brief. No project names, locations, history, credentials, warranties or performance claims have been invented. Verify all copy, contact details and final project images with OVC before production.
