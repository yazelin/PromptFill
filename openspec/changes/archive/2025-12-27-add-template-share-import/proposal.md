# Change: 新增模板分享與匯入功能

## Why

目前使用者無法輕鬆分享正在編輯的模板給他人預覽。需要一個簡單的方式讓使用者可以透過 URL 分享模板內容和變數設定，讓接收者可以預覽並選擇匯入。

## What Changes

1. **Gemini 按鈕精簡化**
   - 移除按鈕文字，只保留 icon

2. **新增分享按鈕**
   - 位於 Gemini 按鈕右側
   - 點擊後產生包含模板內容與變數的分享 URL
   - 複製 URL 到剪貼簿

3. **URL Hash 解析**
   - 載入頁面時解析 URL hash fragment
   - 格式：`#template=base64編碼內容&變數名稱=值&...`

4. **分享預覽模式**
   - 偵測到分享 URL 時，載入模板內容到預覽區
   - 分享按鈕變為匯入按鈕
   - 不自動匯入，需使用者確認

5. **匯入功能**
   - 點擊匯入按鈕後，將模板儲存到 localStorage

## Impact

- Affected specs: template-sharing (新功能)
- Affected code:
  - `src/App.jsx` - 主要邏輯：按鈕、分享、解析、匯入
  - `src/constants/translations.js` - 新增翻譯文字
