# Change: Add creator showcase template collection

## Why

PromptFill can be more than a prompt utility: its fill-in interaction can let visitors play with Yaze's creative projects and then continue into the related repository or product. The existing special-tag implementation provides a natural foundation, but the creator collection should be public, easy to discover, and clearly distinct from ordinary community templates.

## What Changes

- Add a dedicated `我的作品` showcase tag with a crown-style filter button that is always visible in the template sidebar.
- Retire the `多奇` special category and use `我的作品` as the only crown-style showcase category.
- Mark creator showcase templates with the crown in the template list and template preview.
- Allow showcase templates to carry optional project metadata and render a clear external-project CTA after the user starts playing with the template.
- Add creator templates incrementally for Comic Studio, Neko-Tensei, LINE sticker creation, image tools, and other selected Yaze projects.
- Keep existing official, 社群, and ordinary templates working. Existing templates are not removed solely because the category changes; any legacy `多奇` tag is migrated or cleared during data cleanup.

## Impact

- Affected specs: `template-tabs`
- Affected code: `src/data/templates.js`, `src/components/TemplatesSidebar.jsx`, `src/components/TemplatePreview.jsx`, `src/constants/styles.js`, `src/constants/translations.js`, and the template data merge path.
- Data migration: additive only; existing user templates and selections remain intact.
- External links: all project CTAs open in a new tab with safe link attributes and use the configured project URL from template metadata.
