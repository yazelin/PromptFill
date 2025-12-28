## 1. UI 調整

- [x] 1.1 移除 Gemini 按鈕文字，只保留 icon
- [x] 1.2 新增分享按鈕（Share2 icon）於 Gemini 按鈕右側
- [x] 1.3 新增匯入按鈕（替換分享按鈕，當偵測到分享 URL 時顯示）

## 2. 分享功能實作

- [x] 2.1 建立 `generateShareUrl()` 函式
  - 取得 activeTemplate 內容
  - 取得 selections（變數選擇）
  - **新增：提取使用到的詞庫和預設值**
  - 編碼為 URL hash fragment
- [x] 2.2 實作 `handleShare()` 處理器
  - 產生分享 URL
  - 複製到剪貼簿
  - 顯示成功提示

## 3. URL 解析功能實作

- [x] 3.1 建立 `parseShareUrl()` 函式
  - 解析 `window.location.hash`
  - 解碼 Base64 模板內容
  - **新增：提取詞庫和預設值**
- [x] 3.2 新增 useEffect 在頁面載入時解析 URL
- [x] 3.3 建立 `sharedTemplate` state 儲存分享的模板資料
- [x] 3.4 **新增：建立 `sharedBanks` 和 `sharedDefaults` state**

## 4. 匯入功能實作

- [x] 4.1 建立 `isShareMode` state 判斷是否為分享模式
- [x] 4.2 實作 `handleImportShared()` 處理器
  - 將 sharedTemplate 加入 templates
  - **新增：合併詞庫到本地（只加入不存在的）**
  - **新增：合併預設值到本地（只加入不存在的）**
  - 切換 activeTemplateId 到新匯入的模板
  - 清除 URL hash
  - 退出分享模式

## 5. 翻譯與提示

- [x] 5.1 新增翻譯項目
  - `share`: 分享 / Share
  - `share_copied`: 分享連結已複製 / Share link copied
  - `import_shared`: 匯入模板 / Import Template
  - `import_success`: 模板已匯入 / Template imported
- [x] 5.2 新增相關 Toast 提示訊息

## 6. 分享模式支援

- [x] 6.1 修改 `handleCopy()` 支援分享模式
- [x] 6.2 修改 `handleExportImage()` 支援分享模式
- [x] 6.3 修改 `TemplatePreview` 使用合併的詞庫與預設值

## 7. 驗證與測試

- [x] 7.1 測試分享流程：產生 URL、複製、開啟
- [x] 7.2 測試匯入流程：載入分享 URL、預覽、匯入
- [x] 7.3 測試詞庫合併：本地不存在的詞庫會被加入
- [x] 7.4 Build 成功驗證
