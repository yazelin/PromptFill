# Tasks: SVG 圖檔分享機制

## 1. SVG 生成工具
- [x] 1.1 建立 `src/utils/svgShareUtils.js` 工具模組
- [x] 1.2 實作 `generateShareSvg(shareData, previewImage)` 函式
- [x] 1.3 實作預覽圖嵌入（base64 編碼）
- [x] 1.4 實作範本資料嵌入（LZString 壓縮）

## 2. SVG 下載功能
- [x] 2.1 在 App.jsx 新增 `handleDownloadShareSvg()` 函式
- [x] 2.2 整合現有的分享資料生成邏輯（重構為 `generateShareData()`）
- [x] 2.3 觸發瀏覽器下載 SVG 檔案

## 3. UI 整合
- [x] 3.1 在分享按鈕旁新增「下載分享圖片」按鈕（ImageDown icon，紫色）
- [x] 3.2 新增相關的翻譯字串（share_svg, share_svg_downloaded）

## 4. SVG 匯入功能
- [x] 4.1 修改 `parseShareUrl()` 支援 `#svg=` 參數
- [x] 4.2 使用 `parseSvgShareData()` 解析並解壓縮 SVG 傳來的資料
- [x] 4.3 觸發匯入流程（複用現有邏輯）

## 5. 測試與驗證
- [ ] 5.1 測試 SVG 在瀏覽器直接開啟的跳轉功能
- [ ] 5.2 測試 SVG 在社群平台的預覽顯示
- [ ] 5.3 測試完整的分享→匯入流程
