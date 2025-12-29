# Tasks: add-duotify-community-tags

## Implementation Tasks

1. [x] **更新 TEMPLATE_TAGS 定義**
   - 在 `src/data/templates.js` 中新增「多奇」和「社群」標籤
   - 調整標籤順序：全部 → 多奇 → 社群 → 原有標籤

2. [x] **實作多奇標籤 VIP 外觀**
   - 在 `src/components/TemplatesSidebar.jsx` 中為「多奇」標籤加入特殊樣式
   - 設計元素：漸層背景（金色）、光暈效果、特殊邊框、皇冠圖示

3. [x] **更新 GitHub 同步邏輯**
   - 修改 `src/services/github.js` 確保同步的範本自動包含「社群」標籤

4. [x] **更新提交範本邏輯**
   - 修改 `src/App.jsx` 中的 `handleSubmitTemplate` 函式
   - 在提交時若範本未包含「社群」標籤則自動加入

5. [x] **驗證標籤篩選功能**
   - 確認新標籤可正常篩選範本
   - 確認多奇標籤的 VIP 外觀在選中/未選中狀態都正確顯示

## Dependencies
- 無外部依賴

## Validation
- 標籤按正確順序顯示
- 多奇標籤有明顯的 VIP 視覺效果
- 從 GitHub 同步的範本自動帶有「社群」標籤
- 提交範本時自動加入「社群」標籤
