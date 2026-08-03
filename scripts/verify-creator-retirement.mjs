import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {
  RETIRED_CREATOR_TEMPLATE_IDS,
  retireCreatorTemplates,
} from '../src/data/retiredCreatorTemplates.js';

const creatorTemplate = {
  id: RETIRED_CREATOR_TEMPLATE_IDS[0],
  tags: ['我的作品', '創意'],
  content: 'retired creator prompt',
};
const ordinaryTemplate = {
  id: 'tpl_default',
  tags: ['創意'],
  content: 'ordinary prompt',
};
const result = retireCreatorTemplates([creatorTemplate, ordinaryTemplate]);

assert.deepEqual(result.retiredTemplates, [creatorTemplate]);
assert.deepEqual(result.activeTemplates, [ordinaryTemplate]);

const initDataSource = await fs.readFile('src/data/initData.js', 'utf8');
assert.doesNotMatch(initDataSource, /CREATOR_SHOWCASE_TEMPLATES/);

console.log(`Verified ${RETIRED_CREATOR_TEMPLATE_IDS.length} retired creator template IDs.`);
