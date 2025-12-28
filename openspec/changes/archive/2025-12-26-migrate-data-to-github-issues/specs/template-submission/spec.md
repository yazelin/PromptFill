## MODIFIED Requirements

### Requirement: Submit Template to Author

系統 SHALL 允許用戶將自訂模板提交給維護者審核，使用標準化的 Issue Template 格式。

#### Scenario: 用戶提交模板
- **WHEN** 用戶點擊「提交模板」按鈕
- **THEN** 系統複製模板資料到剪貼板（JSON 格式）
- **AND** 開啟 GitHub Issue 頁面，預填標準化格式

#### Scenario: Issue Template 格式
- **WHEN** GitHub Issue 頁面開啟
- **THEN** Issue 使用 `template-submission` 模板
- **AND** 包含以下欄位：
  - 模板名稱 (中文)
  - Template Name (English)
  - 模板內容 (中文)
  - Template Content (English)
  - 預覽圖片
  - 標籤
  - 預設值 (JSON)

#### Scenario: 自動套用 Labels
- **WHEN** Issue 提交
- **THEN** 自動套用 `template` 和 `pending` labels

## ADDED Requirements

### Requirement: Template Issue Template

系統 SHALL 提供 GitHub Issue Template 用於模板提交。

#### Scenario: Issue Template 存在
- **WHEN** 用戶在 GitHub 建立新 Issue
- **THEN** 可選擇「模板提交」模板
- **AND** 表單包含所有必要欄位

#### Scenario: 必填欄位驗證
- **WHEN** 用戶填寫 Issue
- **THEN** 「模板名稱」和「模板內容」為必填
- **AND** 其他欄位為選填

### Requirement: Bilingual Template Format

系統 SHALL 支援雙語模板格式。

#### Scenario: 雙語欄位
- **WHEN** 解析模板 Issue
- **THEN** 系統能解析中文和英文欄位
- **AND** 生成雙語模板物件

#### Scenario: 單語言模板
- **WHEN** 只填寫一種語言
- **THEN** 系統接受並處理單語言模板
