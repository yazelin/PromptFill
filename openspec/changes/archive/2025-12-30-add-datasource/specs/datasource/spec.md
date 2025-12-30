# datasource Specification

## Purpose
提供資料來源管理功能，讓使用者可以預先儲存大量文本資料，並在不同範本間重複使用。資料來源與詞庫整合於同一側邊欄，透過 Tab 切換。

## ADDED Requirements

### Requirement: 資料來源資料結構
系統 SHALL 定義資料來源的資料結構，包含唯一識別符、名稱、內容及時間戳記。

#### Scenario: 資料來源物件格式
- **WHEN** 系統建立新的資料來源
- **THEN** 資料來源物件包含 `id`（唯一識別符，格式為 `ds_` 前綴 + UUID）
- **AND** 包含 `name`（使用者定義的名稱）
- **AND** 包含 `content`（文本內容）
- **AND** 包含 `createdAt`（建立時間戳記）
- **AND** 包含 `updatedAt`（更新時間戳記）

---

### Requirement: 資料來源持久化儲存
系統 SHALL 將資料來源儲存於 localStorage，確保資料在頁面重新載入後仍然保留。

#### Scenario: 資料來源儲存
- **WHEN** 使用者新增或修改資料來源
- **THEN** 系統將資料來源列表儲存至 localStorage
- **AND** 使用 key `app_datasources_v1`

#### Scenario: 資料來源載入
- **WHEN** 頁面載入時
- **THEN** 系統從 localStorage 讀取資料來源列表
- **AND** 還原使用者先前儲存的資料來源

---

### Requirement: BanksSidebar Tab 整合
系統 SHALL 在 BanksSidebar 提供 Tab 切換，讓使用者在「詞庫」與「資料來源」之間切換。

#### Scenario: Tab 切換 UI
- **WHEN** 使用者查看 BanksSidebar
- **THEN** 側邊欄頂部顯示 [詞庫] [資料來源] 兩個 Tab
- **AND** 當前選中的 Tab 有明顯的視覺區分

#### Scenario: 切換到資料來源 Tab
- **WHEN** 使用者點擊「資料來源」Tab
- **THEN** 側邊欄內容切換為資料來源列表
- **AND** 顯示新增、編輯、刪除等管理功能

#### Scenario: 手機版存取
- **WHEN** 使用者在手機版點擊底部「詞庫」Tab
- **THEN** 進入 BanksSidebar 畫面
- **AND** 可透過頂部 Tab 切換到「資料來源」

---

### Requirement: 新增資料來源
使用者 SHALL 能夠新增資料來源，輸入名稱和內容。

#### Scenario: 新增資料來源
- **WHEN** 使用者點擊新增資料來源按鈕
- **THEN** 系統顯示資料來源編輯介面
- **AND** 介面包含名稱輸入框與大型文本輸入區
- **AND** 點擊儲存後資料來源加入列表

#### Scenario: 新增資料來源預設名稱
- **WHEN** 使用者新增資料來源但未輸入名稱
- **THEN** 系統使用預設名稱（如「資料來源 1」）

---

### Requirement: 編輯資料來源
使用者 SHALL 能夠編輯現有的資料來源名稱和內容。

#### Scenario: 編輯資料來源
- **WHEN** 使用者選擇編輯某個資料來源
- **THEN** 系統顯示該資料來源的編輯介面
- **AND** 使用者可修改名稱和內容
- **AND** 點擊儲存後更新 `updatedAt` 時間戳記

---

### Requirement: 刪除資料來源
使用者 SHALL 能夠刪除不再需要的資料來源。

#### Scenario: 刪除資料來源
- **WHEN** 使用者點擊刪除資料來源按鈕
- **THEN** 系統顯示確認對話框
- **AND** 確認後從列表中移除該資料來源

#### Scenario: 刪除當前選中的資料來源
- **WHEN** 使用者刪除當前選中的資料來源
- **THEN** 系統清除 `selectedDatasourceId`
- **AND** 範本中的資料來源選擇器重置為未選擇狀態

---

### Requirement: 資料來源佔位符
範本 SHALL 支援 `{{__datasource__}}` 佔位符，用於引用資料來源。

#### Scenario: 佔位符渲染為下拉選單
- **WHEN** 範本包含 `{{__datasource__}}` 佔位符
- **THEN** 系統將其渲染為下拉選單組件
- **AND** 下拉選單列出所有可用的資料來源名稱
- **AND** 包含「未選擇」選項

#### Scenario: 選擇資料來源
- **WHEN** 使用者從下拉選單選擇一個資料來源
- **THEN** 系統更新 `selectedDatasourceId`
- **AND** 下拉選單下方顯示資料來源內容的截斷預覽

---

### Requirement: 資料來源內容預覽
系統 SHALL 在範本編輯器中顯示資料來源的截斷預覽，避免大量文本佔據畫面。

#### Scenario: 截斷預覽顯示
- **WHEN** 使用者選擇了資料來源
- **THEN** 下拉選單下方顯示資料來源內容的前 50-100 個字元
- **AND** 若內容超過截斷長度則顯示 "..." 省略符號

#### Scenario: 未選擇資料來源
- **WHEN** 使用者未選擇任何資料來源
- **THEN** 預覽區顯示提示文字（如「請選擇資料來源」）

---

### Requirement: 資料來源輸出替換
系統 SHALL 在複製或輸出時將 `{{__datasource__}}` 替換為完整的資料來源內容。

#### Scenario: 複製時替換
- **WHEN** 使用者點擊複製按鈕
- **AND** 已選擇資料來源
- **THEN** 系統將 `{{__datasource__}}` 替換為資料來源的完整 `content`

#### Scenario: 未選擇資料來源時複製
- **WHEN** 使用者點擊複製按鈕
- **AND** 範本包含 `{{__datasource__}}` 但未選擇資料來源
- **THEN** 系統保留 `{{__datasource__}}` 原文不替換
- **OR** 顯示提示訊息提醒使用者選擇資料來源

---

### Requirement: 資料來源與範本獨立
資料來源選擇 SHALL 獨立於範本，切換範本時保持選中狀態。

#### Scenario: 切換範本保持資料來源
- **WHEN** 使用者已選擇資料來源 A
- **AND** 使用者切換到另一個範本
- **THEN** 資料來源 A 仍維持選中狀態
- **AND** 新範本的 `{{__datasource__}}` 會使用資料來源 A

#### Scenario: 同一資料來源多範本使用
- **WHEN** 使用者選擇資料來源「Q4 會議記錄」
- **THEN** 可依序套用「摘要範本」、「翻譯範本」、「待辦範本」
- **AND** 每次輸出都使用同一份資料來源內容
