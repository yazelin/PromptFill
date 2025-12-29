# Tasks: Migrate Data Management to GitHub Issues

## 1. Issue Template 與 Label 建設

- [x] 1.1 建立 `.github/ISSUE_TEMPLATE/template-submission.yml`（範本提交表單）
- [x] 1.2 建立 `.github/ISSUE_TEMPLATE/bank-submission.yml`（詞庫提交表單）
- [x] 1.3 建立 GitHub Labels：`template`、`bank`、`approved`、`pending`

## 2. GitHub API 整合模組

- [x] 2.1 建立 `src/services/github.js` 模組
- [x] 2.2 實作 `fetchTemplatesFromIssues()` 函數
- [x] 2.3 實作 `fetchBanksFromIssues()` 函數
- [x] 2.4 實作 `parseTemplateIssue()` 解析器
- [x] 2.5 實作 `parseBankIssue()` 解析器
- [x] 2.6 實作 localStorage 快取機制

## 3. 資料載入邏輯改造

- [x] 3.1 修改 `App.jsx` 資料載入流程為兩階段
- [x] 3.2 實作資料合併邏輯（本機 + Issue）
- [x] 3.3 新增載入狀態 UI（Loading indicator）
- [x] 3.4 新增「重新載入」按鈕（handleRefreshGitHubData）

## 4. 提交功能改造

- [x] 4.1 新增 `handleSubmitTemplate()` 函數，使用 Issue Template 格式
- [x] 4.2 新增 `handleSubmitBank()` 函數
- [x] 4.3 在範本側邊欄新增「提交範本」按鈕（Send icon）
- [x] 4.4 在詞庫側邊欄新增「提交詞庫」按鈕（Send icon）
- [x] 4.5 更新翻譯字串

## 5. 測試與驗證

- [ ] 5.1 測試範本從 Issue 載入
- [ ] 5.2 測試詞庫從 Issue 載入
- [ ] 5.3 測試提交範本功能
- [ ] 5.4 測試提交詞庫功能
- [ ] 5.5 測試離線模式（只有本機資料）
- [ ] 5.6 測試 API 限制處理

## Dependencies

- 1.x 必須先完成，才能進行 2.x 測試
- 2.x 必須先完成，才能進行 3.x
- 3.x 和 4.x 可以並行開發
- 5.x 在所有功能完成後進行
