## ADDED Requirements

### Requirement: Submit Bank to Author

系統 SHALL 允許用戶將自訂詞庫提交給維護者審核。

#### Scenario: 用戶提交詞庫
- **WHEN** 用戶點擊「提交詞庫」按鈕
- **THEN** 系統複製詞庫資料到剪貼板
- **AND** 開啟 GitHub Issue 頁面，預填標準化格式

#### Scenario: 自動套用 Labels
- **WHEN** Issue 提交
- **THEN** 自動套用 `bank` 和 `pending` labels

### Requirement: Bank Issue Template

系統 SHALL 提供 GitHub Issue Template 用於詞庫提交。

#### Scenario: Issue Template 格式
- **WHEN** 用戶選擇「詞庫提交」範本
- **THEN** 表單包含以下欄位：
  - 詞庫名稱 (中文)
  - Bank Name (English)
  - 詞庫 ID
  - 分類（下拉選單）
  - 選項（每行格式：中文 | English）

#### Scenario: 必填欄位驗證
- **WHEN** 用戶填寫 Issue
- **THEN** 「詞庫名稱」、「詞庫 ID」和「選項」為必填
- **AND** 「分類」為必選

### Requirement: Bank Parsing

系統 SHALL 能解析詞庫 Issue body。

#### Scenario: 解析選項列表
- **WHEN** 解析詞庫 Issue
- **THEN** 系統解析「選項」欄位的每一行
- **AND** 以 `|` 分隔中英文選項
- **AND** 生成雙語選項陣列

#### Scenario: 選項格式容錯
- **WHEN** 選項只有一種語言
- **THEN** 系統接受並處理單語言選項

### Requirement: Submit Bank UI

系統 SHALL 在詞庫側邊欄提供「提交詞庫」按鈕。

#### Scenario: 按鈕位置
- **WHEN** 用戶查看詞庫側邊欄
- **THEN** 在詞庫列表中顯示「提交詞庫」按鈕
- **AND** 按鈕只對自訂詞庫（非內建）顯示

#### Scenario: 按鈕樣式
- **WHEN** 顯示「提交詞庫」按鈕
- **THEN** 使用綠色系樣式（與「提交範本」一致）
