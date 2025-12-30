<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Git 工作流程

## Upstream 同步

本 repo 是 fork 自 `doggy8088/PromptFill`（保哥的 repo）。

**同步方式（不使用 Actions）：**
```bash
gh repo sync yazelin/PromptFill
git pull
```

## 發 PR 給 upstream

**重要：** 本 repo 的 `main` 分支有 `deploy.yml`（用於自動 build Pages），但 upstream 沒有。發 PR 時必須從 `upstream/main` 建分支，避免把 `deploy.yml` 送給 upstream。

**正確流程：**
```bash
# 1. 先同步 upstream
git fetch upstream

# 2. 從 upstream/main 建立新分支
git checkout -b my-feature upstream/main

# 3. 做修改...

# 4. push 到 origin
git push origin my-feature

# 5. 發 PR：從 origin/my-feature → upstream/main
gh pr create --repo doggy8088/PromptFill
```

**禁止：** 直接從 `main` 分支發 PR（會包含 `deploy.yml`）

## GitHub Actions 設定

- `deploy.yml`: 啟用（自動 build Pages）
- `sync-upstream.yml`: 已停用（不自動同步上游的上游）