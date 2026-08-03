/**
 * 初始化資料匯出
 * 合併上游、作者作品與社群範本/詞庫
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
  INITIAL_DEFAULTS as UPSTREAM_DEFAULTS,
  INITIAL_CATEGORIES as UPSTREAM_CATEGORIES
} from './banks';

// 作者作品展示範本
import { CREATOR_SHOWCASE_TEMPLATES } from './creatorShowcaseData';

// 社群資料
import {
  COMMUNITY_TEMPLATES,
  COMMUNITY_BANKS,
  COMMUNITY_CATEGORIES,
  COMMUNITY_DEFAULTS
} from './communityData';

/**
 * 合併後的範本配置
 * 順序：上游 → 作者作品 → 社群
 */
export const INITIAL_TEMPLATES_CONFIG = [
  ...UPSTREAM_TEMPLATES,
  ...CREATOR_SHOWCASE_TEMPLATES,
  ...COMMUNITY_TEMPLATES
];

/**
 * 合併後的詞庫
 * 後面的會覆蓋同名的前面詞庫
 */
export const INITIAL_BANKS = {
  ...UPSTREAM_BANKS,
  ...COMMUNITY_BANKS
};

/**
 * 合併後的分類
 */
export const INITIAL_CATEGORIES = {
  ...UPSTREAM_CATEGORIES,
  ...COMMUNITY_CATEGORIES
};

/**
 * 合併後的預設值
 */
export const INITIAL_DEFAULTS = {
  ...UPSTREAM_DEFAULTS,
  ...COMMUNITY_DEFAULTS
};

// 重新匯出不需合併的項目
export { TEMPLATE_TAGS, SYSTEM_DATA_VERSION };
