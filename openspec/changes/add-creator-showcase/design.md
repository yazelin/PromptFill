## Context

PromptFill already supports special template filters such as 社群. The creator showcase should reuse the existing tag/filter path instead of introducing a second template storage system. The main new concern is connecting a playable template to the project it represents.

## Goals / Non-Goals

- Goals: make the creator collection discoverable, preserve the playful fill-in flow, and provide a non-intrusive path to related projects.
- Goals: support incremental addition of projects without changing the category implementation each time.
- Non-Goals: replace the upstream PromptFill architecture, merge upstream data wholesale, or remove existing ordinary templates.
- Non-Goals: embed third-party project pages or add an advertising network.

## Decisions

- Decision: use the reserved internal tag `我的作品` and display it as a dedicated crown-style filter before ordinary content tags.
- Decision: make `我的作品` the only crown-style showcase category; remove the `多奇` category from the navigation and from the showcase rules.
- Decision: render the filter even when the current data set has zero showcase templates, so the category is part of the product navigation rather than a hidden conditional feature.
- Decision: store optional project metadata on a template as `showcase: { label, url, cta }`. Templates without this field behave exactly as before.
- Decision: render the CTA in the template preview as an external link with `target="_blank"` and `rel="noopener noreferrer"`.
- Decision: add projects through the existing merged system-template data path, preserving the current Traditional Chinese data format and user customization merge behavior.

## Risks / Trade-offs

- A large showcase collection can distract from the core PromptFill workflow → cap the first batch and use concise descriptions.
- External links can become stale → keep URLs in template data and make later link audits straightforward.
- A reserved tag could be assigned accidentally → keep it outside the ordinary editable tag list and assign it explicitly in system data.

## Migration Plan

1. Add the reserved tag and UI behavior without changing existing template IDs.
2. Remove the `多奇` special-category UI and migrate any legacy `多奇` tag according to the final data decision.
3. Add a small first batch of creator templates with validated URLs.
4. Run build and browser checks for filtering, crown rendering, CTA opening, and legacy template behavior.
5. Add later projects as additive data-only changes.

## Open Questions

- Which first projects should be included in the initial batch and which should remain ordinary links only.
