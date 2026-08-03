## 1. Remove the public creator prompt experience

- [x] 1.1 從初始化資料與 active template config 移除 13 個 creator prompt 範本。
- [x] 1.2 移除 `我的作品` 皇冠分類、保留 tag、範本 crown marker 與作品 CTA。
- [x] 1.3 移除 creator 專用 source/showcase 分享處理與不再使用的驗證腳本／資料入口。

## 2. Migrate existing local data

- [x] 2.1 建立 retired creator template IDs 與專用 backup localStorage key。
- [x] 2.2 資料版本更新時先備份舊 creator templates，再從 active list 移除。
- [x] 2.3 保留一般範本、社群範本、使用者資料、footer 與 Pages 行為。

## 3. Verification

- [x] 3.1 執行 ESLint 與 production build。
- [x] 3.2 執行 `openspec validate remove-creator-showcase-prompts --strict`。
- [x] 3.3 驗證初始資料不含 creator templates，且舊 0.10.0 資料會備份後退場。
- [x] 3.4 確認一般範本的填空、複製、匯出、分享與 footer 不受影響。
