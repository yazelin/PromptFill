# Design: SVG 圖檔分享機制

## Context
使用者在 LINE、Discord 等平台分享範本時，因 URL 過長被擋。需要一種可以在社群平台正常分享，且能攜帶完整範本資料的方式。

## Goals / Non-Goals
**Goals:**
- 使用 SVG 圖檔作為分享載體，可在社群平台正常傳輸
- SVG 在瀏覽器開啟時自動跳轉到 PromptFill 並匯入資料
- SVG 作為圖片顯示時有良好的預覽效果

**Non-Goals:**
- 不取代現有 URL 分享功能（保留作為備用）
- 不支援非瀏覽器環境的自動匯入

## SVG 結構設計

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <title>PromptFill 範本分享</title>

  <!-- 視覺層：預覽圖與提示文字 -->
  <rect width="100%" height="100%" fill="#f8f9fa"/>

  <!-- 範本預覽圖（如有） -->
  <image x="16" y="16" width="480" height="320"
         href="data:image/jpeg;base64,..." />

  <!-- 範本名稱 -->
  <text x="50%" y="380" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="24" fill="#333">
    {{範本名稱}}
  </text>

  <!-- 提示文字（非瀏覽器環境顯示） -->
  <text x="50%" y="420" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="14" fill="#666">
    請使用瀏覽器開啟此檔案以匯入範本
  </text>

  <!-- 資料層：隱藏的範本資料 -->
  <desc id="promptfill-data" style="display:none;">
    {"version":1,"data":"LZ壓縮後的範本JSON"}
  </desc>

  <!-- 腳本層：自動跳轉邏輯 -->
  <script type="text/javascript">
    <![CDATA[
      (function() {
        if (typeof window === 'undefined' || !window.location) return;

        try {
          var el = document.getElementById('promptfill-data');
          if (!el) return;

          var payload = JSON.parse(el.textContent.trim());
          var targetUrl = 'https://yazelin.github.io/PromptFill/';

          // 使用 hash 傳遞壓縮資料
          window.location.href = targetUrl + '#svg=' + payload.data;
        } catch (e) {
          console.error('PromptFill SVG 跳轉失敗:', e);
        }
      })();
    ]]>
  </script>
</svg>
```

## 資料格式

### `<desc>` 內的 JSON 結構
```json
{
  "version": 1,
  "data": "LZString.compressToEncodedURIComponent(JSON.stringify(shareData))"
}
```

### shareData 結構（與現有相同）
```javascript
{
  name: string,           // 範本名稱
  content: string|object, // 範本內容
  selections: object,     // 變數選擇
  tags: string[],         // 標籤
  author: string,         // 作者
  banks: object,          // 詞庫
  defaults: object,       // 預設值
  imageUrl?: string,      // 預覽圖
  imageUrls?: string[]    // 多圖
}
```

## Decisions
1. **使用 `<desc>` 標籤存放資料**：符合 SVG 規範，不影響圖片顯示
2. **使用 LZString 壓縮**：與現有 URL 分享邏輯一致，減少檔案大小
3. **跳轉使用 hash fragment**：避免伺服器端處理，純前端解析
4. **固定尺寸 512x512**：適合社群平台預覽

## Risks / Trade-offs
- **安全性**：SVG 內嵌 JavaScript 可能被某些平台過濾
  - 緩解：即使腳本被移除，視覺層仍顯示提示訊息
- **檔案大小**：含預覽圖的 SVG 可能較大
  - 緩解：預覽圖使用壓縮後的 base64

## Open Questions
- 是否需要支援自訂預覽圖尺寸？
- 是否需要在 SVG 中加入 PromptFill logo？
