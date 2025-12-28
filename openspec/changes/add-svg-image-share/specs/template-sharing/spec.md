## ADDED Requirements

### Requirement: SVG 圖檔分享
系統 SHALL 提供 SVG 圖檔分享功能，讓使用者下載包含模板資料的 SVG 檔案，可在社群平台分享。

#### Scenario: 下載分享 SVG
- **WHEN** 使用者點擊「下載分享圖片」按鈕
- **THEN** 系統生成包含模板資料的 SVG 檔案
- **AND** 觸發瀏覽器下載 SVG 檔案
- **AND** 檔案名稱為「{模板名稱}.svg」

#### Scenario: SVG 視覺內容
- **WHEN** SVG 檔案生成
- **THEN** SVG 包含模板預覽圖（若有）
- **AND** SVG 包含模板名稱文字
- **AND** SVG 包含「請使用瀏覽器開啟此檔案以匯入模板」提示訊息
- **AND** SVG 尺寸為 512x512 像素

---

### Requirement: SVG 資料嵌入
系統 SHALL 將模板資料嵌入 SVG 檔案的 `<desc>` 標籤中，使用 LZString 壓縮。

#### Scenario: 資料嵌入格式
- **WHEN** 系統生成 SVG
- **THEN** SVG 包含 id 為 `promptfill-data` 的 `<desc>` 標籤
- **AND** 標籤內容為 JSON 格式：`{"version":1,"data":"壓縮後的資料"}`
- **AND** data 欄位使用 LZString.compressToEncodedURIComponent 壓縮

#### Scenario: 嵌入資料內容
- **WHEN** 壓縮模板資料
- **THEN** 資料包含模板名稱、內容、選擇、標籤、作者
- **AND** 資料包含使用到的詞庫和預設值
- **AND** 資料包含預覽圖（若有）

---

### Requirement: SVG 自動跳轉腳本
系統 SHALL 在 SVG 中嵌入 JavaScript 腳本，當使用者在瀏覽器中直接開啟 SVG 時自動跳轉到 PromptFill 頁面。

#### Scenario: 瀏覽器開啟 SVG
- **WHEN** 使用者在瀏覽器中直接開啟 SVG 檔案
- **THEN** SVG 內嵌腳本讀取 `<desc>` 中的資料
- **AND** 跳轉到 PromptFill 頁面並附帶 `#svg={壓縮資料}` 參數

#### Scenario: 非瀏覽器環境
- **WHEN** SVG 在非瀏覽器環境開啟（如圖片檢視器）
- **THEN** 腳本不執行
- **AND** 使用者看到視覺層的提示訊息

---

### Requirement: SVG 資料匯入
系統 SHALL 支援從 URL 的 `#svg=` 參數解析並匯入模板資料。

#### Scenario: 解析 SVG 分享 URL
- **WHEN** 頁面載入時 URL 包含 `#svg=` 參數
- **THEN** 系統使用 LZString 解壓縮資料
- **AND** 解析模板 JSON
- **AND** 進入分享預覽模式

#### Scenario: 無效 SVG 資料
- **WHEN** `#svg=` 參數資料無效或解壓縮失敗
- **THEN** 系統忽略該參數
- **AND** 正常載入本地模板

---

## MODIFIED Requirements

### Requirement: 分享按鈕
系統 SHALL 在 Gemini 按鈕右側提供分享按鈕，讓使用者分享當前編輯中的模板。

#### Scenario: 分享按鈕位置
- **WHEN** 使用者查看編輯器工具列
- **THEN** 分享按鈕位於 Gemini 按鈕的右側
- **AND** 分享按鈕顯示 Share2 icon

#### Scenario: 點擊分享按鈕
- **WHEN** 使用者點擊分享按鈕
- **THEN** 系統產生包含當前模板內容與變數選擇的分享 URL
- **AND** URL 複製到剪貼簿
- **AND** 顯示「分享連結已複製」提示訊息

#### Scenario: 下載分享圖片按鈕
- **WHEN** 使用者查看編輯器工具列
- **THEN** 「下載分享圖片」按鈕位於分享按鈕的右側
- **AND** 按鈕顯示 ImageDown 或類似 icon
