## 1. Creator showcase category

- [x] 1.1 Add the reserved `我的作品` tag and Traditional Chinese / English labels as the only crown-style showcase category.
- [x] 1.2 Render the crown-style filter button permanently in the template sidebar.
- [x] 1.3 Remove the obsolete `多奇` category/filter and preserve the existing 社群、普通標籤 behavior.
- [x] 1.4 Show the crown marker in template list rows and the active template preview.

## 2. Project promotion metadata

- [x] 2.1 Define and document optional `showcase.label`, `showcase.url`, and `showcase.cta` template fields.
- [x] 2.2 Render a concise project CTA when showcase metadata exists.
- [x] 2.3 Add safe external-link attributes and accessible labels.

## 3. Initial creator templates

- [x] 3.1 Add the first curated templates for Comic Studio, Neko-Tensei, LINE sticker creation, and LINE Chat Maker.
- [x] 3.2 Add selected supporting tools such as 圖個清白 and Cast Lock only when the template has a meaningful play flow.
- [x] 3.3 Validate each project URL, migrate any legacy `多奇` tag, and preserve existing template/user data through the merge path.

## 4. Verification

- [x] 4.1 Run OpenSpec strict validation.
- [x] 4.2 Run the production build.
- [x] 4.3 Verify the generated app bundle contains the new category, creator metadata, safe CTA path, and legacy-tag migration logic; inspect the existing category and footer paths.
- [x] 4.4 Preserve the existing GitHub Pages workflow, custom footer, and branding; deployment remains a separate publish step.
