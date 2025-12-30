# Tasks: add-datasource

## 1. 資料結構與儲存
- [x] 1.1 建立 `src/data/datasources.js`，定義資料來源結構（id, name, content, createdAt, updatedAt）
- [x] 1.2 在 App.jsx 新增 `datasources` state 與 `useStickyState` 持久化（key: `app_datasources_v1`）
- [x] 1.3 新增 `selectedDatasourceId` state 追蹤當前選中的資料來源

## 2. 翻譯字串
- [x] 2.1 在 `translations.js` 新增資料來源相關翻譯（datasource, datasources, addDatasource, editDatasource, deleteDatasource, selectDatasource, noDatasource 等）

## 3. BanksSidebar Tab 整合
- [x] 3.1 在 BanksSidebar 新增 Tab 切換 UI（詞庫 | 資料來源）
- [x] 3.2 新增 `activeBankTab` state 控制當前顯示的 Tab
- [x] 3.3 實作資料來源列表顯示
- [x] 3.4 實作新增資料來源功能（名稱 + 大文本輸入框）
- [x] 3.5 實作編輯資料來源功能
- [x] 3.6 實作刪除資料來源功能（含確認對話框）

## 4. Variable 組件擴展
- [x] 4.1 在 Variable.jsx 識別 `{{__datasource__}}` 佔位符
- [x] 4.2 渲染資料來源選擇下拉選單（顯示所有資料來源名稱）
- [x] 4.3 選中後更新 `selectedDatasourceId`
- [x] 4.4 顯示截斷的資料來源內容預覽（前 50-100 字）

## 5. 輸出替換邏輯
- [x] 5.1 在 App.jsx 的複製/輸出邏輯中處理 `{{__datasource__}}` 替換
- [x] 5.2 將 `{{__datasource__}}` 替換為選中資料來源的完整 content
- [x] 5.3 未選擇資料來源時保留原文或顯示提示

## 6. 測試與驗證
- [x] 6.1 驗證資料來源可正確儲存與載入（localStorage）
- [x] 6.2 驗證 Tab 切換功能正常（詞庫 ↔ 資料來源）
- [x] 6.3 驗證同一資料來源可搭配不同範本使用
- [x] 6.4 驗證手機版操作流程順暢
- [x] 6.5 驗證大量文本（10KB+）的處理效能
