#!/bin/zsh -l

# ^ 使用 -l (login) 模式，强制加载用户的 .zshrc / .bash_profile 等配置

# 切换到脚本所在的目录
cd "$(dirname "$0")"

echo "=========================================="
echo "   正在启动 Concept Art Prompt Generator   "
echo "=========================================="

# 尝试手动加载 nvm (如果存在)
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
fi

# 检查 npm 是否可用
if ! command -v npm &> /dev/null; then
    echo "❌ 严重错误: 仍然无法找到 'npm' 命令。"
    echo ""
    echo "-----------------------------------------------------"
    echo "【排查指南】"
    echo "1. 请确认您是否已安装 Node.js？"
    echo "   - 如果没有安装，请访问官网下载安装： https://nodejs.org/"
    echo "   - 推荐下载 'LTS' (长期支持) 版本。"
    echo ""
    echo "2. 如果您确定已经安装 (例如在终端能运行 node -v)："
    echo "   - 请尝试直接打开终端，拖入此文件夹，然后输入："
    echo "     cd \"$(pwd)\" && npm install && npm run dev"
    echo "-----------------------------------------------------"
    
    # 保持窗口打开
    read -k 1 -s -r "?按任意键退出..."
    exit 1
fi

echo "✅ 环境检查通过: Using Node $(node -v)"

# 检查 node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖 (首次运行可能需要几分钟)..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败。请检查网络。"
        read -k 1 -s -r "?按任意键退出..."
        exit 1
    fi
fi

echo "🚀 正在启动服务..."
echo "------------------------------------------"
npm run dev
