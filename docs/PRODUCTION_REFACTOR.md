# RapidResume Production Refactor

## Architecture design

- Frontend keeps a single normalized resume document in React context.
- Builder UX follows four explicit steps: `details -> preview -> template -> download`.
- Validation runs against the normalized schema before preview progression and again before PDF export.
- PDF service receives the normalized payload directly and re-validates it server-side.
- Templates render from a shared view model so optional or missing sections are safely omitted instead of breaking layout.

## UX improvements

- One guided builder route replaces the fragmented template/headings/form flow.
- Local storage persistence preserves privacy and avoids account creation.
- Live preview uses the same schema as download, so users see a stable representation before export.
- Template selection is constrained to five production templates that are actually supported by the backend.

## Template strategy

- `classic`: ATS-first single column.
- `modern`: balanced two-column layout.
- `executive`: leadership-oriented hierarchy.
- `minimal`: editorial, whitespace-led design.
- `creative`: tasteful high-contrast design.

## Suggested folder structure

```text
src/
  context/
    resumecontext.jsx
  lib/
    resumeSchema.js
    resumeTemplates.js
  pages/
    BuilderPage.jsx
    BuilderPage.css
  utils/
    api.js
```

## Best practices

- Normalize user input once, then reuse it everywhere.
- Keep validation rules close to the schema, not scattered across UI components.
- Treat templates as pure renderers of safe view data.
- Make unsupported templates impossible to select.
- Preserve the privacy-first model by storing drafts only in browser storage and generating PDFs without accounts or a database.
