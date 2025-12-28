# template-tabs Specification

## Purpose
TBD - created by archiving change add-duotify-community-tags. Update Purpose after archive.
## Requirements
### Requirement: 多奇標籤
系統 SHALL 提供「多奇」標籤，用於篩選多奇教育訓練會員專屬模板。

#### Scenario: 多奇標籤位置
- **WHEN** 使用者查看「我的樣板」側邊欄的標籤列
- **THEN** 「多奇」標籤位於「全部」之後
- **AND** 「多奇」標籤位於「社群」之前

#### Scenario: 多奇標籤外觀
- **WHEN** 使用者查看「多奇」標籤
- **THEN** 該標籤顯示 VIP 風格設計
- **AND** 使用漸層背景（金色或紫色系）
- **AND** 可能包含皇冠或星星圖示
- **AND** 外觀明顯與其他普通標籤不同

#### Scenario: 多奇標籤選中狀態
- **WHEN** 使用者點擊「多奇」標籤
- **THEN** 模板列表篩選顯示標記為「多奇」的模板
- **AND** 標籤保持 VIP 視覺風格

---

### Requirement: 社群標籤
系統 SHALL 提供「社群」標籤，用於篩選社群貢獻的模板。

#### Scenario: 社群標籤位置
- **WHEN** 使用者查看「我的樣板」側邊欄的標籤列
- **THEN** 「社群」標籤位於「多奇」之後
- **AND** 「社群」標籤位於原有內容分類標籤之前

#### Scenario: 社群標籤外觀
- **WHEN** 使用者查看「社群」標籤
- **THEN** 該標籤使用普通標籤樣式

---

### Requirement: GitHub 同步自動標籤
從 GitHub Issue 同步的模板 SHALL 自動包含「社群」標籤。

#### Scenario: 同步模板標籤
- **WHEN** 系統從 GitHub Issue 同步模板
- **THEN** 同步的模板自動包含「社群」標籤
- **AND** 保留 Issue 中原有指定的其他標籤

---

### Requirement: 提交模板自動標籤
使用者提交模板給作者時，系統 SHALL 確保模板包含「社群」標籤。

#### Scenario: 提交時自動加入社群標籤
- **WHEN** 使用者透過「提交給作者」功能送出模板
- **AND** 模板未包含「社群」標籤
- **THEN** 系統自動將「社群」標籤加入提交參數

#### Scenario: 已有社群標籤不重複加入
- **WHEN** 使用者透過「提交給作者」功能送出模板
- **AND** 模板已包含「社群」標籤
- **THEN** 系統維持原有標籤不重複加入

---

### Requirement: 標籤順序定義
TEMPLATE_TAGS 陣列 SHALL 按以下順序排列標籤。

#### Scenario: 標籤順序
- **WHEN** 系統載入標籤定義
- **THEN** 標籤順序為：多奇、社群、建築、人物、攝影、產品、圖表、卡通、寵物、遊戲、創意
- **AND** 「全部」選項在 UI 中以程式方式顯示在最前面（不在 TEMPLATE_TAGS 陣列中）

