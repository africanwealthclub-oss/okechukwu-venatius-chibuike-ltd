# OVC Website Preview — Plan

## Approved scope

Create a lightweight Next.js website preview for Okechukwu Venatius Chibuike Ltd. covering Home, About, Services, Projects and Contact. Preserve the supplied logo exactly, keep project-photo areas explicitly marked as placeholders, and use only business facts and service details supplied by the user.

## Current implementation

- Next.js App Router with TypeScript, React and Tailwind CSS; responsive shared header/footer and five public routes.
- Brand palette: navy `#10264A`, gold `#D9A62E`, and white; clear focus styles and reduced-motion support.
- Services come from shared typed data. No invented project details, company history, credentials, address, email or social accounts.
- The quote form validates in the browser and shows an explicit preview-only confirmation. It does not transmit or save personal details. There is no API, backend, database, authentication or email integration, as requested for this preview.
- The original OVC logo is used without edits. Since no client project photographs were supplied, project imagery remains clearly identified placeholder artwork.
- Phone links use the supplied display numbers and their normalized international `tel:` targets. WhatsApp is omitted until confirmed.
- Sitemap, robots rules, route metadata, responsive styles and project README are included. No deployment is requested.

## Run and verify

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

The project is prepared for a separate private GitHub repository.
