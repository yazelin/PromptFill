## ADDED Requirements

### Requirement: 作者 prompt 展示退場

系統 SHALL 暫停提供作者 prompt 填空範本與「我的作品」公開分類，不得將目前的 creator prompt collection 載入使用者的 active template list。

#### Scenario: 初始資料載入

- **WHEN** 新使用者載入 PromptFill
- **THEN** active template list 不包含作者 prompt 範本
- **AND** 側邊欄不顯示「我的作品」皇冠分類

#### Scenario: 已有作者範本的使用者更新資料

- **WHEN** 使用者的 localStorage 含有 0.10.0 作者 prompt 範本
- **THEN** 系統先將這些範本備份到專用退場資料 key
- **AND** 從目前 active template list 移除這些範本
- **AND** 不影響其他一般或社群範本

#### Scenario: 一般範本功能保留

- **WHEN** 使用者使用一般上游或社群範本
- **THEN** 原有標籤篩選、填空、複製、匯出、分享與 footer 功能維持可用
- **AND** 不顯示作者作品專用的 crown 或 CTA
