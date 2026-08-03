## ADDED Requirements

### Requirement: 來源 prompt 作品範本

「我的作品」分類中的作者範本 SHALL 來自作者實際專案或 skill 中可辨識、可重複利用的 prompt 組件，而不是沒有來源依據的泛用宣傳 prompt。

#### Scenario: 範本具有來源識別

- **WHEN** 系統載入一個「我的作品」來源範本
- **THEN** 範本資料包含來源 repository、檔案與函式或 skill 識別資訊
- **AND** 來源資訊可供維護與稽核
- **AND** 一般使用者介面不需要把技術 metadata 當成主要文案顯示

#### Scenario: 固定規則忠實保留

- **WHEN** 使用者在 PromptFill 開啟來源 prompt 範本
- **THEN** 範本保留原專案的輸出格式、角色一致性、禁止事項、參考圖順序或其他必要固定規則
- **AND** 只將可安全改寫的輸入轉為 `{{variable}}` 填空欄位

#### Scenario: 來源 prompt 可重複利用

- **WHEN** 使用者填入來源 prompt 的變數並複製結果
- **THEN** 產出的 prompt 可獨立交給相容的 AI 工具或帶回來源專案使用
- **AND** 內容不依賴 PromptFill 執行上游專案程式

#### Scenario: 沒有 prompt 來源的作品

- **WHEN** 一個作者作品只有工具或展示頁，沒有可抽出的實際 prompt builder
- **THEN** 系統可以保留該作品的 CTA 展示
- **AND** 不得捏造一個看似來自該作品的來源 prompt 範本

### Requirement: 作者範本更新相容性

來源 prompt 範本更新 SHALL 保留使用者既有的填空選擇與自訂範本內容，並避免舊版泛用 creator prompt 繼續冒充來源範本。

#### Scenario: 系統範本更新

- **WHEN** 使用者刷新包含新版來源 prompt 的系統資料
- **THEN** 內建作者範本更新為新版來源內容
- **AND** 對應的填空選擇在欄位仍存在時被保留

#### Scenario: 使用者曾修改舊範本

- **WHEN** 使用者曾修改目前的舊版 creator 範本
- **THEN** 系統不得直接刪除該使用者內容
- **AND** 該內容不得繼續以來源作品範本身份顯示
