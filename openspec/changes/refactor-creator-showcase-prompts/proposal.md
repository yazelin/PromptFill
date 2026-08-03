# Change: Refactor creator showcase into source-backed prompt templates

## Why

目前「我的作品」分類中的範本是重新撰寫的泛用宣傳型 prompt，沒有忠實反映各作品實際使用的 prompt builder 與製作規則。這會讓 PromptFill 看起來像另一套泛用範本集，而不是 Yaze 各個 AI 專案的可重複利用 prompt 實驗場。

## What Changes

- 重新整理 `我的作品` 範本，只納入能從 Yaze 實際專案程式或 skill 中提取、且可重複使用的 prompt 片段。
- 將 Comic Studio 的角色表、表情九宮格、動作九宮格、場景／道具參考、分鏡、漫畫單格與對白燒錄邏輯拆成可填空範本。
- 將 Neko-Tensei／Cast Lock 的參考圖順序、角色與場景鎖定、`must`／`must_not` 規則整理成可重用範本。
- 將 LINE Sticker Studio 的 3×3 貼圖、文案／動作配對、角色一致性、去背與禁止多餘文字規則整理成範本。
- 將 LINE Chat Maker 的腳本 JSON、對話編劇與檢查規則整理成範本。
- 每個來源範本保留來源 repo、檔案與函式／技能名稱等 provenance metadata，方便日後同步與人工稽核；前台維持單一 `我的作品` 皇冠分類。
- 只把穩定且有意義的輸入轉為 `{{variable}}`，固定的輸出格式、限制條件與品質規則須忠實保留，不再加入沒有來源依據的 slogan、廣告文案或虛構流程。
- 針對目前泛用型 creator 範本做資料遷移：新版來源範本取代展示內容；既有使用者自訂內容不直接刪除，但不再冒充來源 prompt。

## Impact

- Affected specs: `template-tabs`
- Affected code: `src/data/creatorShowcaseData.js`, `src/data/templates.js`, `src/App.jsx`, template data migration and validation paths.
- External source references: `comic-studio/js/prompt.js`, `neko-tensei/scripts/prompt.py`, `cast-lock-skill/build.py`, `line-sticker-studio/worker/src/index.js`, and `line-chat-maker/ai.js` / skill documentation.
- No runtime dependency on upstream repositories; PromptFill stores reviewed prompt snapshots and provenance metadata locally.
- Existing footer, GitHub Pages deployment, project CTA links, and `我的作品` category UI remain in place.
