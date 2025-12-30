# Change: 新增資料來源功能

## Why
目前使用者每次套用範本時都需要重新貼上大量文本資料（如會議記錄、文章、程式碼等）。新增「資料來源」功能可讓使用者預先儲存這些資料，並在不同範本間重複使用，實現「同一資料 + 不同範本 = 不同輸出」的效果。

## What Changes
- 新增「資料來源」資料結構，用於儲存使用者的大量文本資料
- 在 BanksSidebar 新增「資料來源」Tab，與詞庫並列
- 在範本中新增特殊佔位符 `{{__datasource__}}` 並渲染為下拉選單
- 預覽時截斷顯示資料來源內容，複製時替換完整內容
- 資料來源儲存於 localStorage（與範本、詞庫並列）

## Impact
- Affected specs: 新增 `datasource` capability
- Affected code:
  - `src/App.jsx` - 新增 datasources state 管理、佔位符替換邏輯
  - `src/components/BanksSidebar.jsx` - 新增資料來源 Tab 與管理 UI
  - `src/components/Variable.jsx` - 支援資料來源類型的下拉選單
  - `src/constants/translations.js` - 新增翻譯字串
  - `src/data/datasources.js` - 資料來源初始設定（新增）

## 檔案變更清單

### 新增檔案
| 檔案 | 用途 |
|------|------|
| `src/data/datasources.js` | 資料來源常數定義與初始資料結構 |

### 修改檔案
| 檔案 | 修改內容 |
|------|----------|
| `src/App.jsx` | 新增 `datasources` state、`selectedDatasourceId` state、CRUD handler、`{{__datasource__}}` 替換邏輯 |
| `src/components/BanksSidebar.jsx` | 新增 [詞庫 \| 資料來源] Tab 切換、資料來源列表與管理 UI |
| `src/components/Variable.jsx` | 支援 `__datasource__` 類型，渲染為資料來源選擇下拉選單 |
| `src/constants/translations.js` | 新增 `datasource`、`datasources`、`addDatasource`、`editDatasource` 等翻譯 |
| `src/components/MobileTabBar.jsx` | 不需修改（手機版透過詞庫 Tab 進入） |

## UI/UX 設計

### 桌面版佈局
```
┌─────────────┬───────────────────────┬─────────────────┐
│  Templates  │                       │ [詞庫][資料來源] │
│  Sidebar    │       Editor          ├─────────────────┤
│             │                       │    (Tab 內容)    │
│             │                       │                 │
└─────────────┴───────────────────────┴─────────────────┘
```

### 手機版
- 底部 Tab 不變（首頁、範本、編輯、詞庫）
- 進入「詞庫」Tab 後可切換到「資料來源」

### 範本內資料來源選擇器
```
┌─────────────────────────────────────┐
│ 📄 Q4 會議記錄                    ▼ │  ← 下拉選單選擇
├─────────────────────────────────────┤
│ 今天的會議主要討論了三個議題，     │  ← 截斷預覽（約 50 字）
│ 包括產品路線圖、Q1 目標...         │
└─────────────────────────────────────┘
```

### 預覽 vs 輸出
- **預覽**：顯示資料來源名稱 + 截斷內容（前 50-100 字 + "..."）
- **複製/輸出**：替換為完整的資料來源內容
