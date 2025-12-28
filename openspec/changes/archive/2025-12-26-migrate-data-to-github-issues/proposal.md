# Change: Migrate Data Management to GitHub Issues

## Why

目前模板和詞庫資料儲存在本地 JavaScript 檔案中（`templates.js`、`banks.js`），難以讓社群貢獻新內容。透過將資料管理遷移到 GitHub Issues，可以：
1. 讓任何人都能輕鬆提交新模板和詞庫
2. 利用 GitHub 的審核機制（Label）管理內容品質
3. 實現去中心化的資料管理，無需後端伺服器

## What Changes

### 資料讀取機制
- **ADDED** 兩階段資料載入：第一階段載入本機預設資料（離線/快速顯示），第二階段從 GitHub API 載入 Issue 資料
- **ADDED** GitHub API 整合模組，讀取帶有 `approved` label 的 Issues
- **ADDED** Issue body 解析器，將 Issue 內容轉換為模板/詞庫物件
- **ADDED** 資料合併邏輯，將本機資料與 Issue 資料整合顯示

### Issue Template 系統
- **ADDED** 模板提交 Issue Template（`template-submission.yml`）
- **ADDED** 詞庫提交 Issue Template（`bank-submission.yml`）
- **ADDED** Label 系統：`template`、`bank`、`approved`、`pending`

### 提交功能改進
- **MODIFIED** 現有「提交模板給作者」功能，改為依照新 Issue Template 格式提交
- **ADDED** 詞庫提交功能

## Impact

- Affected specs: `data-loading`, `template-submission`, `bank-submission`（新增）
- Affected code:
  - `src/App.jsx` - 資料載入邏輯
  - `src/data/` - 保留為預設資料
  - 新增 `src/services/github.js` - GitHub API 整合
  - `.github/ISSUE_TEMPLATE/` - Issue 模板

## Technical Considerations

### GitHub API 限制
- 未認證：60 次/小時
- 認證：5000 次/小時
- 解法：本機快取 + 可選用戶 Token

### 雙語支援
- Issue body 需支援中英文欄位
- 解析器需處理雙語格式

### 離線支援
- 第一階段本機資料確保離線可用
- Issue 資料作為增量內容
