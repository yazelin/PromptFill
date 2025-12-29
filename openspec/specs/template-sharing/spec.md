# template-sharing Specification

## Purpose
TBD - created by archiving change add-template-share-import. Update Purpose after archive.
## Requirements
### Requirement: Gemini 按鈕簡化
Gemini 按鈕 SHALL 只顯示 icon，不顯示文字標籤。

#### Scenario: Gemini 按鈕顯示
- **WHEN** 使用者查看編輯器工具列
- **THEN** Gemini 按鈕只顯示 gemini.svg icon
- **AND** 不顯示「Gemini」或「匯出圖片」等文字

---

### Requirement: 分享按鈕
系統 SHALL 在 Gemini 按鈕右側提供分享按鈕，讓使用者分享當前編輯中的範本。

#### Scenario: 分享按鈕位置
- **WHEN** 使用者查看編輯器工具列
- **THEN** 分享按鈕位於 Gemini 按鈕的右側
- **AND** 分享按鈕顯示 Share2 icon

#### Scenario: 點擊分享按鈕
- **WHEN** 使用者點擊分享按鈕
- **THEN** 系統產生包含當前範本內容與變數選擇的分享 URL
- **AND** URL 複製到剪貼簿
- **AND** 顯示「分享連結已複製」提示訊息

---

### Requirement: 分享 URL 格式
分享 URL SHALL 使用 hash fragment 編碼範本資料，格式為 `{baseURL}#template={base64編碼}&{變數名}={值}&...`。

#### Scenario: URL 產生格式
- **WHEN** 系統產生分享 URL
- **THEN** URL 包含 `#template=` 參數，值為 Base64 編碼的範本 JSON
- **AND** URL 包含所有變數選擇，格式為 `&變數名=值`

#### Scenario: 範本 JSON 內容
- **WHEN** 編碼範本 JSON
- **THEN** JSON 包含 `name`（範本名稱）
- **AND** JSON 包含 `content`（範本內容）
- **AND** JSON 包含 `selections`（變數選擇）

---

### Requirement: 分享 URL 解析
系統 SHALL 在頁面載入時解析 URL hash fragment，識別分享的範本資料。

#### Scenario: 載入分享 URL
- **WHEN** 使用者開啟包含分享參數的 URL
- **THEN** 系統解析 `#template=` 參數
- **AND** 解碼 Base64 取得範本資料
- **AND** 解析其他參數取得變數選擇

#### Scenario: 無效分享 URL
- **WHEN** URL hash 格式錯誤或解碼失敗
- **THEN** 系統忽略分享參數
- **AND** 正常載入本地範本

---

### Requirement: 分享預覽模式
系統 SHALL 在偵測到分享 URL 時進入預覽模式，顯示分享的範本但不自動匯入。

#### Scenario: 進入預覽模式
- **WHEN** 系統成功解析分享 URL
- **THEN** 載入分享的範本內容到預覽區
- **AND** 套用分享的變數選擇
- **AND** 不覆蓋使用者本地資料

#### Scenario: 預覽模式 UI 變化
- **WHEN** 系統處於預覽模式
- **THEN** 分享按鈕變為匯入按鈕
- **AND** 匯入按鈕顯示 Download icon

---

### Requirement: 匯入分享範本
使用者 SHALL 能透過匯入按鈕將分享的範本儲存到本地。

#### Scenario: 點擊匯入按鈕
- **WHEN** 使用者在預覽模式點擊匯入按鈕
- **THEN** 系統將分享的範本加入本地範本列表
- **AND** 切換到新匯入的範本
- **AND** 清除 URL hash fragment
- **AND** 退出預覽模式
- **AND** 顯示「範本已匯入」提示訊息

#### Scenario: 匯入範本儲存
- **WHEN** 範本匯入成功
- **THEN** 範本儲存到 localStorage
- **AND** 範本 ID 為新產生的唯一 ID

