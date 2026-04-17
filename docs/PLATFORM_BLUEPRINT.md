# RapidResume Platform Blueprint

## Folder Structure

```text
src/
  App.js
  index.css
  context/
    resumecontext.jsx
  design/
    tokens.json
  lib/
    exportResumePdf.js
    pdfTemplates.jsx
    resumeSchema.js
    resumeTemplateEngine.jsx
    resumeValidation.js
    sampleResume.js
  pages/
    BuilderStudio.jsx
    BuilderStudio.css
```

## Product Flow

1. `Essentials`
   Capture only the minimum required profile and one experience entry.
2. `Instant Preview`
   Show a real rendered resume immediately.
3. `Expand Details`
   Add optional sections with collapsible editors.
4. `Choose Template`
   Compare five real mini-rendered templates.
5. `Download`
   Export a client-side PDF from the same normalized schema.

## Design System

- Brand backbone: deep teal with slate neutrals
- Typography: `IBM Plex Sans` for UI and most templates, `Cormorant Garamond` only for the editorial template
- Layout rhythm: 8px spacing grid
- Trust language is embedded directly in the builder instead of only on marketing screens

## Resume Schema

The canonical resume model lives in `src/lib/resumeSchema.js`.

- `profile`
- `experience`
- `education`
- `skills`
- `projects`
- `certifications`
- `languages`

Key behaviors:

- sanitizes unknown or missing fields
- preserves flexibility for optional sections
- guarantees array-safe rendering
- computes completion and section health
- generates export-safe payloads

## Template Engine

Templates are React components in `src/lib/resumeTemplateEngine.jsx`.

- `classic`
- `modern`
- `executive`
- `minimal`
- `creative`

Shared primitives:

- `ResumeSection`
- `ExperienceItems`
- `EducationItems`
- `ProjectItems`
- `TagList`
- `SummaryBlock`

This keeps preview and export behavior aligned and prevents Handlebars drift.

## Validation Layer

`src/lib/resumeValidation.js` adds quality analysis on top of required-field validation.

Checks include:

- weak or overly short summary
- summary too long for recruiter scanning
- missing or inconsistent dates
- bullets without measurable impact
- bullets that are too long
- too many or duplicate skills
- invalid project URLs

## PDF Export

Client-side export is handled by:

- `src/lib/exportResumePdf.js`
- `src/lib/pdfTemplates.jsx`

This keeps the privacy-first promise intact because resume data does not need to be sent to a backend to generate the file.
