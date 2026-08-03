import assert from 'node:assert/strict';
import {
  CREATOR_SHOWCASE_TEMPLATES,
  LEGACY_CREATOR_TEMPLATE_IDS,
  migrateLegacyCreatorTemplate,
} from '../src/data/creatorShowcaseData.js';

assert.equal(CREATOR_SHOWCASE_TEMPLATES.length, 13);
assert.equal(
  CREATOR_SHOWCASE_TEMPLATES.filter((template) => template.tags.includes('我的作品')).length,
  CREATOR_SHOWCASE_TEMPLATES.length
);
assert.equal(
  CREATOR_SHOWCASE_TEMPLATES.filter((template) => LEGACY_CREATOR_TEMPLATE_IDS.includes(template.id)).length,
  0
);

for (const template of CREATOR_SHOWCASE_TEMPLATES) {
  assert.ok(template.content['zh-tw'].length > 100, `${template.id} prompt is too short`);
  assert.ok(template.source?.repository, `${template.id} is missing source.repository`);
  assert.ok(template.source?.file, `${template.id} is missing source.file`);
  assert.ok(template.source?.function || template.source?.section, `${template.id} is missing source locator`);
  assert.match(template.source.url, /^https:\/\/github\.com\/yazelin\//);
}

const migrated = migrateLegacyCreatorTemplate({
  id: LEGACY_CREATOR_TEMPLATE_IDS[0],
  tags: ['我的作品', '人物'],
  showcase: { url: 'https://example.com' },
  source: { repository: 'legacy' },
  content: 'legacy prompt',
});

assert.deepEqual(migrated.tags, ['人物']);
assert.equal(migrated.showcase, undefined);
assert.equal(migrated.source, undefined);

console.log(`Verified ${CREATOR_SHOWCASE_TEMPLATES.length} source-backed creator templates.`);
