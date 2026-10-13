# AlTamimi Logistics

Next.js static bilingual corporate website. Run `npm run dev` for development; `npm run build` exports the complete site to `out/`.

## Content and launch notes

- English and Arabic: `/en/` and `/ar/`; all six main pages and two service detail pages are localized.
- Inquiry form uses native validation and opens a populated email draft. There is no configured submission backend and no false delivery confirmation.
- No approved articles have been supplied. Insights displays an editorial empty state.
- The header uses a temporary typographic brand treatment inspired by the supplied purple identity. The supplied inline T.C.E. bitmap was not available as a filesystem asset; replace this treatment with the approved logo file before public launch.
- Photography is temporary Unsplash imagery, not company-owned facilities or a representation of Aqaba. Assets: https://unsplash.com/photos/1578575437130-527eed3abbec (image source https://images.unsplash.com/photo-1578575437130-527eed3abbec) and https://images.unsplash.com/photo-1494412519320-aa613dfb7738. Unsplash license: https://unsplash.com/license. Replace with approved Jordan/company photography.
- Fonts: DM Sans and Noto Sans Arabic, served locally from Google Fonts releases. Retain their SIL Open Font License notices.
- Contact phone/email are from the supplied draft. Unverified English street address, biographies, regulatory claims, client logos and future services are omitted.
- Sitemap/canonical URLs use the generated private review-site origin. Update when deploying to the company domain.
- Public launch still requires company content/logo approval and a reviewed privacy policy if a server form or analytics are added. No tracking scripts are installed.
