/**
 * 初始化資料匯出
 * 合併 上上游 + 多奇 + 社群 範本/詞庫
 *
 * App.jsx 應從此檔案 import，而非直接從各資料檔
 */

// 上上游資料 (TanShilongMario)
import {
  INITIAL_TEMPLATES_CONFIG as UPSTREAM_TEMPLATES,
  TEMPLATE_TAGS,
  SYSTEM_DATA_VERSION
} from './templates';

import {
  INITIAL_BANKS as UPSTREAM_BANKS,
  INITIAL_DEFAULTS,
  INITIAL_CATEGORIES as UPSTREAM_CATEGORIES
} from './banks';

// 多奇資料 (保哥)
import {
  DOGGY_TEMPLATES,
  DOGGY_BANKS,
  DOGGY_CATEGORIES
} from './doggyData';

// 社群資料
import {
  COMMUNITY_TEMPLATES,
  COMMUNITY_BANKS,
  COMMUNITY_CATEGORIES
} from './communityData';

/**
 * 合併後的範本配置
 * 順序：上上游 → 多奇 → 社群
 */
export const INITIAL_TEMPLATES_CONFIG = [
  ...UPSTREAM_TEMPLATES,
  ...DOGGY_TEMPLATES,
  ...COMMUNITY_TEMPLATES
];

/**
 * 合併後的詞庫
 * 後面的會覆蓋同名的前面詞庫
 */
export const INITIAL_BANKS = {
  ...UPSTREAM_BANKS,
  ...DOGGY_BANKS,
  ...COMMUNITY_BANKS
};

/**
 * 合併後的分類
 */
export const INITIAL_CATEGORIES = {
  ...UPSTREAM_CATEGORIES,
  ...DOGGY_CATEGORIES,
  ...COMMUNITY_CATEGORIES
};

// 重新匯出不需合併的項目
export { TEMPLATE_TAGS, SYSTEM_DATA_VERSION, INITIAL_DEFAULTS };
