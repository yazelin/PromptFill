## ADDED Requirements

### Requirement: 我的作品標籤

系統 SHALL 提供「我的作品」特殊標籤，用於篩選作者相關的可玩展示範本。

#### Scenario: 我的作品標籤永遠可見

- **WHEN** 使用者查看範本側邊欄的標籤列
- **THEN** 「我的作品」標籤 SHALL 永遠顯示
- **AND** 該標籤 SHALL 使用皇冠或同等的作者作品識別圖示
- **AND** 該標籤 SHALL 位於「全部」之後、「社群」之前

#### Scenario: 篩選我的作品

- **WHEN** 使用者點擊「我的作品」標籤
- **THEN** 範本列表 SHALL 只顯示包含「我的作品」標籤的範本
- **AND** 使用者再次點擊目前選中的標籤時 SHALL 回到未篩選狀態

#### Scenario: 我的作品範本識別

- **WHEN** 範本列表或範本預覽顯示包含「我的作品」標籤的範本
- **THEN** 範本 SHALL 顯示皇冠或同等作者作品識別
- **AND** 普通範本 SHALL 不因位於同一列表而顯示該識別

### Requirement: 作品導流資訊

系統 SHALL 支援作者展示範本的選用作品導流資訊，且沒有導流資訊的既有範本行為不得改變。

#### Scenario: 展示作品導流按鈕

- **WHEN** 使用者開啟包含有效 `showcase` metadata 的「我的作品」範本
- **THEN** 預覽區 SHALL 顯示作品名稱或簡短說明
- **AND** 預覽區 SHALL 顯示前往作品的 CTA
- **AND** CTA SHALL 開啟該作品的外部網址

#### Scenario: 導流連結安全性

- **WHEN** 使用者點擊作品 CTA
- **THEN** 連結 SHALL 使用新分頁開啟
- **AND** 連結 SHALL 使用 `rel="noopener noreferrer"`
- **AND** CTA SHALL 提供可理解的無障礙名稱

#### Scenario: 舊範本相容

- **WHEN** 範本沒有 `showcase` metadata
- **THEN** 系統 SHALL 維持現有範本預覽與填空流程
- **AND** 系統 SHALL 不顯示空白或無效的作品 CTA

## MODIFIED Requirements

### Requirement: 社群標籤

系統 SHALL 提供「社群」標籤，用於篩選社群貢獻的範本。

#### Scenario: 社群標籤位置

- **WHEN** 使用者查看範本側邊欄的標籤列
- **THEN** 「社群」標籤位於「我的作品」之後
- **AND** 「社群」標籤位於原有內容分類標籤之前

### Requirement: 標籤順序定義

TEMPLATE_TAGS 陣列或其對應的特殊標籤 UI SHALL 按以下順序排列標籤。

#### Scenario: 標籤順序

- **WHEN** 系統載入標籤定義
- **THEN** UI 標籤順序 SHALL 為：我的作品、社群、建築、人物、攝影、產品、圖表、卡通、寵物、遊戲、創意
- **AND** 「全部」選項 SHALL 以程式方式顯示在最前面
- **AND** 「全部」不需要加入 TEMPLATE_TAGS 陣列

## REMOVED Requirements

### Requirement: 多奇標籤

系統不再提供「多奇」特殊標籤或其專屬分類入口；作者作品統一使用「我的作品」標籤。
