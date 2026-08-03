# Change: Remove the creator prompt showcase

## Why

目前新增的「我的作品」與來源 prompt 範本，雖然內容可追溯，但「把各專案 prompt 整理成 PromptFill 填空範本」本身不是適合這個展示場域的型式。作者作品區與一般範本混在一起，也讓預覽圖只能暫用重複的 GitHub OpenGraph 圖，整體效果不理想。

## What Changes

- 移除「我的作品」皇冠分類、範本標記、作品 CTA 與相關公開入口。
- 從初始化資料移除 13 個作者 prompt 範本與來源 metadata。
- 移除 `source`／`showcase` 這批作者範本所需的分享與展示處理。
- 對已經載入 0.10.0 作者範本的使用者資料做非破壞性退場：先備份到專用 localStorage key，再從目前範本列表移除。
- 保留一般上游範本、社群範本、footer、GitHub Pages 與其他 PromptFill 功能。
- 未來若重新展示作品，必須先有適合每個作品的獨立預覽素材與明確的作品型態，不再使用同一張 repo OpenGraph 圖當所有預覽圖。

## Impact

- Affected specs: `template-tabs`
- Affected code: creator showcase data merge, template sidebar/preview, styles, share metadata path, data migration and versioning.
- Data migration: visible templates lose the retired creator prompt collection; a local backup is kept for recovery or future curation.
