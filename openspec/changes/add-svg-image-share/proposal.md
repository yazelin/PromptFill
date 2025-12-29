# Change: 新增 SVG 圖檔分享機制

## Why
現有的 URL 分享機制使用 LZString 壓縮後的 hash fragment，但 URL 過長導致 LINE 和 Discord 等平台會擋掉長 URL，使得分享功能無法正常使用。

## What Changes
- **新增 SVG 圖檔分享功能**：將範本資料嵌入 SVG 檔案中，使用者下載 SVG 後可以：
  - 直接在瀏覽器中開啟，自動跳轉到 PromptFill 頁面並匯入資料
  - 在社群平台分享時，SVG 會顯示為預覽圖片
  - 若不在瀏覽器環境，SVG 會顯示提示訊息
- **保留原有 URL 分享功能**：作為備用方案
- **新增 SVG 匯入解析**：頁面載入時支援從 URL 參數接收 SVG 傳來的資料

## Impact
- Affected specs: `template-sharing`
- Affected code:
  - `src/App.jsx` - 新增 SVG 生成與下載功能
  - `src/utils/svgShareUtils.js` - 新增 SVG 生成工具函式（新檔案）
  - 分享 UI 需新增「下載分享圖片」按鈕
