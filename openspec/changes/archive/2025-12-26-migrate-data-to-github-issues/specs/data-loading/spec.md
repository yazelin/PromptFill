## ADDED Requirements

### Requirement: Two-Stage Data Loading

系統 SHALL 實作兩階段資料載入機制：
- 第一階段：同步載入本機預設資料（`templates.js`、`banks.js`）
- 第二階段：非同步從 GitHub Issues 載入社群貢獻的資料

#### Scenario: App 啟動時載入資料
- **WHEN** 應用程式啟動
- **THEN** 系統立即載入本機預設資料並顯示 UI
- **AND** 系統在背景非同步呼叫 GitHub API 載入 Issue 資料
- **AND** Issue 資料載入完成後合併至現有資料

#### Scenario: 離線模式
- **WHEN** 網路不可用
- **THEN** 系統僅顯示本機預設資料
- **AND** 顯示「離線模式」提示

### Requirement: GitHub Issues Data Fetching

系統 SHALL 從 GitHub Issues 載入範本和詞庫資料。

#### Scenario: 載入範本
- **WHEN** 呼叫 GitHub API
- **THEN** 系統查詢帶有 `approved` 和 `template` labels 的 open issues
- **AND** 解析 Issue body 為範本物件

#### Scenario: 載入詞庫
- **WHEN** 呼叫 GitHub API
- **THEN** 系統查詢帶有 `approved` 和 `bank` labels 的 open issues
- **AND** 解析 Issue body 為詞庫物件

### Requirement: Data Merging

系統 SHALL 合併本機資料與 Issue 資料。

#### Scenario: 相同 ID 的資料
- **WHEN** 本機資料和 Issue 資料有相同 ID
- **THEN** Issue 資料優先覆蓋本機資料

#### Scenario: 排序
- **WHEN** 資料合併完成
- **THEN** Issue 資料排在本機資料之前（較新的內容優先）

### Requirement: Data Caching

系統 SHALL 快取 Issue 資料到 localStorage。

#### Scenario: 快取有效
- **WHEN** localStorage 中有快取且未過期（1 小時內）
- **THEN** 優先使用快取資料
- **AND** 在背景更新快取

#### Scenario: 快取過期或不存在
- **WHEN** 快取過期或不存在
- **THEN** 從 GitHub API 重新載入

### Requirement: Loading State UI

系統 SHALL 顯示資料載入狀態。

#### Scenario: 載入中
- **WHEN** Issue 資料正在載入
- **THEN** 顯示載入指示器

#### Scenario: 載入完成
- **WHEN** Issue 資料載入完成
- **THEN** 隱藏載入指示器
- **AND** 更新資料顯示

### Requirement: Manual Refresh

系統 SHALL 提供手動重新載入功能。

#### Scenario: 用戶點擊重新載入
- **WHEN** 用戶點擊「重新載入」按鈕
- **THEN** 系統重新從 GitHub API 載入 Issue 資料
- **AND** 更新 localStorage 快取
