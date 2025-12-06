# Concept Art Prompt Generator (概念美术提示词生成器)

一个专为 AI 绘画（GPT、Nano Banana 等）设计的**结构化提示词生成工具**。通过可视化的“填空”交互方式，帮助用户快速构建、管理和迭代复杂的 Prompt。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)

## ✨ 核心特性

*   **🧩 模块化词库管理**：
    *   左侧面板管理所有变量（如“角色身份”、“光影风格”）。
    *   支持增、删、改操作，所有模版共享同一套词库。
    *   支持一键插入变量到模版中。

*   **📝 多模版系统**：
    *   支持创建多个独立的 Prompt 模版（如“角色设计”、“场景概念”、“Logo设计”）。
    *   **独立状态**：每个模版的变量选择（Selection）互不干扰。
    *   **副本克隆**：支持一键创建模版副本，方便进行 A/B 测试或微调。

*   **🖱️ 可视化交互**：
    *   **预览模式**：模版中的变量（`{{role}}`）会自动渲染为可点击的下拉菜单。
    *   **编辑模式**：支持 Markdown 语法的富文本编辑，自由调整 Prompt 结构。
    *   **独立实例**：同一变量在模版中出现多次（如 `{{color}}`），可分别选择不同的值（支持 `color-0`, `color-1` 独立索引）。

*   **💾 自动持久化**：
    *   利用 LocalStorage 自动保存所有修改。
    *   刷新页面或关闭浏览器后，数据不会丢失。

*   **📋 智能导出**：
    *   一键复制最终生成的 Prompt。
    *   自动解析变量，生成纯净文本。

## 🛠️ 技术栈

*   **构建工具**: [Vite](https://vitejs.dev/)
*   **前端框架**: [React](https://react.dev/)
*   **样式库**: [Tailwind CSS](https://tailwindcss.com/)
*   **图标库**: [Lucide React](https://lucide.dev/)

## 🚀 快速开始

### 前置要求
确保您的环境已安装 [Node.js](https://nodejs.org/) (推荐 v18+)。

### 安装与运行

1.  **克隆项目**
    ```bash
    git clone https://github.com/yourusername/prompt-fill.git
    cd prompt-fill
    ```

2.  **安装依赖**
    ```bash
    npm install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    打开浏览器访问 `http://localhost:5173` 即可使用。

4.  **构建生产版本**
    ```bash
    npm run build
    ```

### macOS 快捷启动
项目根目录下提供了一个 `start.command` 脚本。
*   在 Finder 中双击该文件，即可自动执行安装并启动服务。

## 📖 使用指南

1.  **管理词库 (Banks)**
    *   在左侧中间栏，点击底部的“创建新变量组”来添加新的分类（如 `weather`）。
    *   在分类中添加具体选项（如 `Sunny`, `Rainy`）。

2.  **编辑模版 (Templates)**
    *   点击右上角的“编辑模版”按钮。
    *   在文本框中编写 Prompt。
    *   将光标放在想要插入变量的位置，点击左侧词库旁的 **+ 插入** 按钮。
    *   系统会自动插入 `{{weather}}` 标记。

3.  **生成 Prompt**
    *   切换回“预览交互”模式。
    *   点击蓝色的变量词，选择您想要的选项。
    *   点击右上角的“复制结果”，将最终文本粘贴到 Midjourney 或 SD 中。

## 🤝 贡献

欢迎提交 Issue 或 Pull Request 来改进这个项目！

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

