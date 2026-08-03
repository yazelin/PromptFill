## Context

PromptFill 的核心互動是以 `{{variable}}` 將長 prompt 拆成可填空欄位。作者作品分類應該展示真正支撐 Comic Studio、Neko-Tensei、LINE 工具與 Cast Lock 的可重複 prompt 組件，而不是另寫一套與原專案脫節的行銷範本。

目前 creator data 已有 `showcase` CTA，但範本內容沒有來源識別，也沒有反映各專案的 prompt 組裝邏輯。

## Goals / Non-Goals

- Goals:
  - 讓每個作品範本都能指出實際來源 repo、檔案與函式／技能。
  - 抽出穩定的 prompt builder 區塊，並只將使用者真正需要改寫的輸入做成填空。
  - 保留原專案的結構化輸出、參考圖順序、角色一致性、禁止事項與格式限制。
  - 讓同一個 prompt 片段能在 PromptFill 內反覆試填，也能複製回原作品使用。
  - 保留單一「我的作品」皇冠分類與既有作品 CTA。
- Non-Goals:
  - 不在 PromptFill 執行或即時抓取上游 repo 的 prompt builder。
  - 不複製整個上游專案，也不把沒有 prompt builder 的工具硬包成範本。
  - 不把作品 CTA、slogan 或廣告內容混入來源 prompt 本體。

## Decisions

### 1. 使用 reviewed source snapshots

`creatorShowcaseData.js` 維持本地靜態資料，但每個來源範本增加類似以下的 metadata：

```js
source: {
  repository: 'comic-studio',
  file: 'js/prompt.js',
  function: 'buildCharacterSheetPrompt',
  url: 'https://github.com/yazelin/comic-studio/blob/main/js/prompt.js'
}
```

這些資料用於維護與稽核，不必在一般範本卡片中顯示成技術文件。上游 prompt 若有必要適配 PromptFill 的填空語法，須保留原本的語意與固定規則，並在 source metadata 中記錄對應位置。

### 2. 以來源函式／規則組件切分範本

第一批候選來源如下：

- Comic Studio：`buildStoryboardPrompt`、`buildCharacterSheetPrompt`、`buildExpressionSheetPrompt`、`buildPoseSheetPrompt`、`buildWorldRefPrompt`、`buildPanelPrompt`、`buildBakePrompt`。
- Neko-Tensei／Cast Lock：參考圖順序、`must`／`must_not`、角色／場景 reference sheet 與漫畫氣泡規則。
- LINE Sticker Studio：九宮格貼圖 prompt、phrase/action 配對與主體一致性規則。
- LINE Chat Maker：`WRITER_SYSTEM`、腳本 JSON schema 與 `CRITIC_SYSTEM` 的檢查規則。

每一個範本必須能回答「這段 prompt 在原專案哪裡被使用」以及「哪些欄位是使用者可以安全改寫的」。

### 3. 兼容舊 creator 資料

新版 system templates 以來源範本為準。刷新資料時，既有舊 creator 範本若仍是內建泛用版本，應移出 `我的作品` 來源集合；若使用者曾修改，保留成使用者內容並標記為一般自訂範本，避免無預警刪除使用者資料，也避免錯誤宣稱它來自上游專案。

### 4. 不強行製作沒有來源的範本

`gemini-watermark-cleaner` 目前主要是瀏覽器工具，若沒有可抽出的 prompt builder，就只保留作品 CTA／展示，不加入虛構的「圖片清理 prompt」。

## Risks / Trade-offs

- Source snapshot 可能與上游日後變更 → 以 metadata 和測試清單保留來源位置，未來可逐項人工更新。
- 某些 builder 需要陣列或物件 → 在 PromptFill 中使用清楚命名的多行欄位，並保留原本的輸出格式，不把複雜資料模型假裝成單行選單。
- 範本數量可能增加 → 仍集中在單一「我的作品」分類，透過來源名稱與清楚命名維持可尋找性。

## Migration Plan

1. 先加入 source-backed templates 與 provenance metadata。
2. 提升 system data version，讓使用者可刷新新版資料。
3. 對舊 creator 範本執行非破壞性遷移：自訂內容保留，但不再掛 `我的作品` 來源分類。
4. 執行 lint、build、OpenSpec validation，並確認匯出／分享不會因額外 metadata 失效。

## Open Questions

- 第一批範本完成後，再依實際遊玩結果決定哪些來源函式要拆得更細，哪些只保留成一個可組合的規則模組。
