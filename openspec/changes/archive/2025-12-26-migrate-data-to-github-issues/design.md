# Design: Migrate Data Management to GitHub Issues

## Context

PromptFill 是一個 AI 繪圖提示詞管理工具，目前資料（模板、詞庫）儲存在本地 JS 檔案中。為了讓社群能夠貢獻內容，需要將資料管理遷移到 GitHub Issues，類似於 [prompts-vault](https://github.com/mukiwu/prompts-vault) 專案的做法。

### 現有架構
```
data.json (主資料來源)
    ↓ npm run sync-data
templates.js, banks.js
    ↓ import
App.jsx
```

### 目標架構
```
本機預設資料 (templates.js, banks.js)
         ↓ 第一階段載入（即時）
         App.jsx
         ↑ 第二階段載入（非同步）
GitHub Issues (approved label)
```

## Goals / Non-Goals

### Goals
- 讓任何人都能透過 GitHub Issue 提交模板和詞庫
- 保持離線可用性（本機預設資料）
- 支援審核機制（Label 系統）
- 雙語支援（中文/英文）

### Non-Goals
- 完全移除本機資料（保留作為預設/備用）
- 實現即時同步（用戶需手動重新整理）
- 支援自訂 GitHub Token
- 「我的收藏」功能

## Decisions

### 決策 1：兩階段載入策略
**選擇**：先載入本機資料，再非同步載入 Issue 資料

**理由**：
- 確保離線可用
- 提供即時的初始體驗
- Issue 資料作為增量內容

**替代方案**：
- 完全取代本機資料 → 離線無法使用
- 只用本機資料 → 無法社群貢獻

### 決策 2：目標 Repo

**選擇**：使用環境變數 `VITE_GITHUB_REPO` 設定的 repo

**理由**：
- 與現有「提交模板」功能一致
- 每個 fork 可以獨立管理自己的資料
- 不需要額外設定

### 決策 3：Issue Template 格式

**模板 Issue 格式**：
```markdown
### 模板名稱 (中文)
角色概念圖

### Template Name (English)
Character Concept Sheet

### 模板內容 (中文)
你是一位 {{role}}...

### Template Content (English)
You are a {{role}}...

### 預覽圖片
![preview](https://...)

### 標籤
人物, 攝影, 創意

### 預設值 (JSON)
{"role": "設計師"}
```

**詞庫 Issue 格式**：
```markdown
### 詞庫名稱 (中文)
角色身份

### Bank Name (English)
Role

### 詞庫 ID
role

### 分類
character

### 選項（每行格式：中文 | English）
設計師 | Designer
攝影師 | Photographer
插畫師 | Illustrator
```

**理由**：
- Markdown 格式易於閱讀和編輯
- 支援雙語欄位
- GitHub Issue Template 可自動套用格式

### 決策 4：Label 系統

| Label | 用途 |
|-------|------|
| `template` | 標記為模板提交 |
| `bank` | 標記為詞庫提交 |
| `approved` | 審核通過，前端會載入 |
| `pending` | 待審核（預設） |

**理由**：
- 簡單直覺的審核流程
- 支援分類篩選
- 與 prompts-vault 一致

### 決策 5：分類處理

**選擇**：分類（Categories）保留硬編碼，不用 Issue 管理

**理由**：
- 分類數量少（7 個）且變動少
- 分類影響 UI 顏色等設定，不適合動態載入
- 簡化實作複雜度

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        App 啟動                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  第一階段：載入本機預設資料                                    │
│  - import INITIAL_TEMPLATES_CONFIG from templates.js         │
│  - import INITIAL_BANKS from banks.js                        │
│  - 立即顯示 UI                                                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  第二階段：非同步載入 GitHub Issues                            │
│  - GET /repos/{owner}/{repo}/issues?labels=approved,template │
│  - GET /repos/{owner}/{repo}/issues?labels=approved,bank     │
│  - 解析 Issue body → 模板/詞庫物件                            │
│  - 合併到現有資料                                             │
│  - 快取到 localStorage                                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  資料合併規則                                                 │
│  - Issue 資料優先（相同 ID 時覆蓋本機）                         │
│  - 去重：以 ID 為唯一識別                                      │
│  - 排序：Issue 資料在前（較新）                                 │
└─────────────────────────────────────────────────────────────┘
```

## API Integration

### GitHub API 端點

```javascript
// 從環境變數取得 repo
const githubRepo = import.meta.env.VITE_GITHUB_REPO || 'doggy8088/PromptFill';
const [owner, repo] = githubRepo.split('/');

// 載入模板
GET https://api.github.com/repos/{owner}/{repo}/issues
  ?labels=approved,template
  &state=open
  &per_page=100

// 載入詞庫
GET https://api.github.com/repos/{owner}/{repo}/issues
  ?labels=approved,bank
  &state=open
  &per_page=100
```

### 解析邏輯

```javascript
function parseTemplateIssue(issue) {
  const body = issue.body || '';

  const getValue = (labelZh, labelEn) => {
    const regex = new RegExp(`### ${labelZh}\\s*\\n([\\s\\S]*?)(?=\\n*###|$)`, 'i');
    let match = body.match(regex);
    if (!match && labelEn) {
      const regexEn = new RegExp(`### ${labelEn}\\s*\\n([\\s\\S]*?)(?=\\n*###|$)`, 'i');
      match = body.match(regexEn);
    }
    return match ? match[1].trim() : '';
  };

  return {
    id: `issue_${issue.number}`,
    name: {
      'zh-tw': getValue('模板名稱 (中文)', 'Template Name (Chinese)'),
      'en': getValue('Template Name (English)', 'Template Name')
    },
    content: {
      'zh-tw': getValue('模板內容 (中文)', 'Template Content (Chinese)'),
      'en': getValue('Template Content (English)', 'Template Content')
    },
    // ... 其他欄位
  };
}
```

## Risks / Trade-offs

| 風險 | 機率 | 影響 | 緩解措施 |
|------|------|------|---------|
| GitHub API 限制 (60次/小時) | 中 | 中 | localStorage 快取 |
| Issue 格式錯誤 | 高 | 低 | Issue Template + 解析容錯 |
| 網路延遲影響體驗 | 中 | 低 | 兩階段載入，本機資料優先 |
| 審核人力不足 | 低 | 中 | 明確審核標準 |

## Migration Plan

1. **Phase 1**：建立 Issue Template 和 Label 系統
2. **Phase 2**：實作 GitHub API 整合模組
3. **Phase 3**：修改資料載入邏輯為兩階段
4. **Phase 4**：修改「提交模板」功能為新格式
5. **Phase 5**：新增「提交詞庫」功能
6. **Phase 6**：測試和文件

### 回滾計劃
- 若 Issue 系統有問題，可快速切換回純本機模式
- 本機資料保持完整，不受 Issue 影響
