## Context

上一個版本已將作者專案的 prompt builder 轉成 13 個 PromptFill 填空範本，但實際使用感顯示這種整理方式不適合目前的產品定位。這次要完整退場，而不是換一個分類名稱繼續展示同一批範本。

## Decisions

### 1. 從 active template config 移除 creator data

`src/data/initData.js` 不再合併 `CREATOR_SHOWCASE_TEMPLATES`。來源資料檔可以保留在 repository 作為日後重新設計的參考，但不可進入使用者的預設範本列表。

### 2. 移除展示入口

移除 `我的作品` reserved tag、皇冠 filter、preview crown/CTA 與作者作品專用的 metadata handling。一般範本的標籤、複製、匯出、分享與 footer 不受影響。

### 3. 退場資料先備份再移除

使用者若曾在 0.10.0 載入作者範本，更新資料時將符合 creator template IDs 或 creator tag 的範本寫入 `app_retired_creator_templates_v1`，再從 active templates 移除。這樣畫面不會繼續顯示該批範本，也不會無預警丟掉使用者已填內容。

### 4. 不製作替代預覽圖

這次不為目前 creator prompt 範本補圖。未來若重新上架，必須以每個作品的實際畫面或專門製作的縮圖作為 `imageUrl`／`imageUrls`，不得重用同一個 GitHub OpenGraph URL。

## Risks / Trade-offs

- 使用者暫時看不到已載入的作者範本 → 以專用 localStorage backup 保留內容。
- 日後重新上架需要重新設計資料模型與預覽素材 → 先移除錯誤產品形態，避免繼續累積錯誤內容。

## Migration Plan

1. 移除 creator data merge 與公開 UI。
2. 提升 system data version。
3. 更新資料時備份並移除舊 creator templates。
4. 執行 lint、build、OpenSpec 與退場資料驗證。
