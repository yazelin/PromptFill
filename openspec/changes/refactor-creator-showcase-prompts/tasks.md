## 1. Source inventory and data model

- [x] 1.1 建立來源範本清單，逐一記錄 repo、檔案、函式／skill 與可重用的固定規則。
- [x] 1.2 擴充 creator template 的 JSDoc／資料結構，支援 provenance metadata，不影響現有匯出、分享與匯入。
- [x] 1.3 為每個範本定義穩定的 `{{variable}}` 欄位與預設值，避免把整段來源 prompt 拆成沒有意義的填空。

## 2. Replace creator templates with source-backed prompts

- [x] 2.1 將 Comic Studio 的角色、表情、動作、場景／道具、分鏡、單格與對白規則轉成來源範本。
- [x] 2.2 將 Neko-Tensei／Cast Lock 的 reference order、角色一致性、`must`／`must_not` 與氣泡規則轉成來源範本或可組合規則範本。
- [x] 2.3 將 LINE Sticker Studio 的 3×3 貼圖、phrase/action、角色一致性、去背與禁止多餘文字規則轉成來源範本。
- [x] 2.4 將 LINE Chat Maker 的 JSON 腳本、編劇 prompt 與 critic checklist 轉成來源範本。
- [x] 2.5 移除目前沒有來源依據的泛用 creator prompt；沒有可提取 prompt 的作品只保留 CTA 展示資料。
- [x] 2.6 保留 `我的作品` 皇冠分類、作品 CTA、footer 與既有連結，不新增與需求無關的廣告分類。

## 3. Migration and compatibility

- [x] 3.1 更新 system data version 與內建範本合併流程。
- [x] 3.2 對舊 creator 範本做非破壞性遷移：保留使用者修改內容，但移除其來源展示身份或移出 `我的作品`。
- [x] 3.3 確認 template metadata 在 localStorage、JSON 匯出／匯入、分享連結與 GitHub Issue 提交流程中安全處理。

## 4. Verification

- [x] 4.1 為來源 metadata、來源範本欄位與舊資料遷移補充測試或可重現的驗證腳本。
- [x] 4.2 執行 ESLint 與 production build。
- [x] 4.3 執行 `openspec validate refactor-creator-showcase-prompts --strict`。
- [x] 4.4 檢查 `我的作品` 分類、範本預覽、複製、填空、匯出、分享、footer 與作品 CTA。
