/**
 * 初始化資料匯出
 * 合併原始範本/詞庫 + 社群範本/詞庫
 *
 * App.jsx 應從此檔案 import，而非直接從 templates.js / banks.js
 */

// 原始資料
import {
  INITIAL_TEMPLATES_CONFIG as ORIGINAL_TEMPLATES,
  TEMPLATE_TAGS,
  SYSTEM_DATA_VERSION
} from './templates';

import {
  INITIAL_BANKS as ORIGINAL_BANKS,
  INITIAL_DEFAULTS,
  INITIAL_CATEGORIES as ORIGINAL_CATEGORIES
} from './banks';

// 社群資料
import {
  COMMUNITY_TEMPLATES,
  COMMUNITY_BANKS,
  COMMUNITY_CATEGORIES
} from './communityData';

/**
 * 合併後的範本配置
 * 原始範本在前，社群範本在後
 */
export const INITIAL_TEMPLATES_CONFIG = [
  ...ORIGINAL_TEMPLATES,
  ...COMMUNITY_TEMPLATES
];

/**
 * 合併後的詞庫
 * 社群詞庫會覆蓋同名的原始詞庫（如果有的話）
 */
export const INITIAL_BANKS = {
  ...ORIGINAL_BANKS,
  ...COMMUNITY_BANKS
};

/**
 * 合併後的分類
 */
export const INITIAL_CATEGORIES = {
  ...ORIGINAL_CATEGORIES,
  ...COMMUNITY_CATEGORIES
};

// 重新匯出不需合併的項目
export { TEMPLATE_TAGS, SYSTEM_DATA_VERSION, INITIAL_DEFAULTS };
