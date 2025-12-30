// 資料來源組態，供 App 按需引入

/**
 * @typedef {Object} Datasource
 * @property {string} id - 唯一識別符，格式為 'ds_' 前綴 + UUID
 * @property {string} name - 資料來源名稱
 * @property {string} content - 文本內容
 * @property {number} createdAt - 建立時間戳記
 * @property {number} updatedAt - 更新時間戳記
 */

/**
 * 產生唯一的資料來源 ID
 * @returns {string}
 */
export const generateDatasourceId = () => {
  return 'ds_' + crypto.randomUUID();
};

/**
 * 建立新的資料來源物件
 * @param {string} name - 資料來源名稱
 * @param {string} content - 文本內容
 * @returns {Datasource}
 */
export const createDatasource = (name, content = '') => {
  const now = Date.now();
  return {
    id: generateDatasourceId(),
    name: name || '資料來源',
    content,
    createdAt: now,
    updatedAt: now,
  };
};

/**
 * 截斷文本用於預覽顯示
 * @param {string} content - 完整文本內容
 * @param {number} maxLength - 最大長度，預設 100
 * @returns {string}
 */
export const truncateContent = (content, maxLength = 100) => {
  if (!content) return '';
  if (content.length <= maxLength) return content;
  return content.slice(0, maxLength) + '...';
};

/**
 * 初始資料來源列表（空陣列，使用者自行新增）
 */
export const INITIAL_DATASOURCES = [];
