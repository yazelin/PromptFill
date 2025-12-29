/**
 * SVG 分享工具模組
 * 用於生成包含範本資料的可分享 SVG 圖檔
 */

import LZString from 'lz-string';

// 目標網址（開發時使用 localhost，正式環境使用 GitHub Pages）
const TARGET_URL = import.meta.env.DEV
  ? 'http://localhost:1420/'
  : 'https://yazelin.github.io/PromptFill/';

/**
 * 取得圖片尺寸
 * @param {string} imageUrl - 圖片 URL 或 base64
 * @returns {Promise<{width: number, height: number}>} 圖片尺寸
 */
export const getImageDimensions = (imageUrl) => {
  return new Promise((resolve) => {
    if (!imageUrl) {
      resolve({ width: 16, height: 9 }); // 預設 16:9
      return;
    }

    const img = new Image();

    const timeout = setTimeout(() => {
      resolve({ width: 16, height: 9 }); // 超時預設 16:9
    }, 5000);

    img.onload = () => {
      clearTimeout(timeout);
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };

    img.onerror = () => {
      clearTimeout(timeout);
      resolve({ width: 16, height: 9 }); // 錯誤預設 16:9
    };

    img.src = imageUrl;
  });
};

/**
 * 將圖片 URL 轉換為 base64
 * @param {string} url - 圖片 URL
 * @returns {Promise<string|null>} base64 字串或 null
 */
export const imageUrlToBase64 = async (url) => {
  if (!url) return null;

  // 如果已經是 base64，直接返回
  if (url.startsWith('data:')) return url;

  // 方法 1：嘗試直接使用 Image + Canvas
  const directResult = await tryImageCanvas(url);
  if (directResult) return directResult;

  // 方法 2：使用 CORS 代理
  const proxyResult = await tryWithCorsProxy(url);
  if (proxyResult) return proxyResult;

  console.warn('無法轉換圖片為 base64:', url);
  return null;
};

/**
 * 嘗試使用 Image + Canvas 直接轉換
 */
const tryImageCanvas = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    const timeout = setTimeout(() => {
      resolve(null);
    }, 5000);

    img.onload = () => {
      clearTimeout(timeout);
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const base64 = canvas.toDataURL('image/jpeg', 0.8);
        resolve(base64);
      } catch (err) {
        resolve(null);
      }
    };

    img.onerror = () => {
      clearTimeout(timeout);
      resolve(null);
    };

    img.src = url;
  });
};

/**
 * 使用 CORS 代理獲取圖片
 */
const tryWithCorsProxy = async (url) => {
  // 使用 corsproxy.io 代理服務
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;

  try {
    const response = await fetch(proxyUrl);
    if (!response.ok) return null;

    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn('CORS 代理獲取失敗:', err);
    return null;
  }
};

/**
 * Chrome Logo SVG 內容（內嵌用）
 */
const CHROME_LOGO_SVG = `<svg viewBox="0 0 512 512">
  <path fill="#FFFFFF" d="M255.73,383.71c70.3,0,127.3-56.99,127.3-127.3s-56.99-127.3-127.3-127.3s-127.3,56.99-127.3,127.3S185.42,383.71,255.73,383.71z"/>
  <linearGradient id="chromeGreen" gradientUnits="userSpaceOnUse" x1="283.29" y1="18.9" x2="62.83" y2="400.75" gradientTransform="matrix(1 0 0 -1 0 514)">
    <stop offset="0" style="stop-color:#1E8E3E"/><stop offset="1" style="stop-color:#34A853"/>
  </linearGradient>
  <path fill="url(#chromeGreen)" d="M145.48,320.08L35.26,129.17c-22.35,38.7-34.12,82.6-34.12,127.29s11.76,88.59,34.11,127.29c22.35,38.7,54.49,70.83,93.2,93.17c38.71,22.34,82.61,34.09,127.3,34.08l110.22-190.92v-0.03c-11.16,19.36-27.23,35.44-46.58,46.62c-19.35,11.18-41.3,17.07-63.65,17.07s-44.3-5.88-63.66-17.05C172.72,355.52,156.65,339.44,145.48,320.08z"/>
  <linearGradient id="chromeYellow" gradientUnits="userSpaceOnUse" x1="218.59" y1="2.33" x2="439.05" y2="384.18" gradientTransform="matrix(1 0 0 -1 0 514)">
    <stop offset="0" style="stop-color:#FCC934"/><stop offset="1" style="stop-color:#FBBC04"/>
  </linearGradient>
  <path fill="url(#chromeYellow)" d="M365.96,320.08L255.74,510.99c44.69,0.01,88.59-11.75,127.29-34.1c38.7-22.34,70.84-54.48,93.18-93.18c22.34-38.7,34.1-82.61,34.09-127.3c-0.01-44.69-11.78-88.59-34.14-127.28H255.72l-0.03,0.02c22.35-0.01,44.31,5.86,63.66,17.03c19.36,11.17,35.43,27.24,46.61,46.59c11.18,19.35,17.06,41.31,17.06,63.66C383.03,278.77,377.14,300.72,365.96,320.08L365.96,320.08z"/>
  <path fill="#1A73E8" d="M255.73,357.21c55.66,0,100.78-45.12,100.78-100.78s-45.12-100.78-100.78-100.78s-100.78,45.12-100.78,100.78S200.07,357.21,255.73,357.21z"/>
  <linearGradient id="chromeRed" gradientUnits="userSpaceOnUse" x1="35.26" y1="353.03" x2="476.18" y2="353.03" gradientTransform="matrix(1 0 0 -1 0 514)">
    <stop offset="0" style="stop-color:#D93025"/><stop offset="1" style="stop-color:#EA4335"/>
  </linearGradient>
  <path fill="url(#chromeRed)" d="M255.73,129.14h220.45C453.84,90.43,421.7,58.29,383,35.95C344.3,13.6,300.4,1.84,255.71,1.84c-44.69,0-88.59,11.77-127.29,34.12c-38.7,22.35-70.83,54.5-93.16,93.2l110.22,190.92l0.03,0.02c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31,17.04-63.66c11.17-19.36,27.24-35.43,46.6-46.6C211.42,135.01,233.38,129.13,255.73,129.14z"/>
</svg>`;

/**
 * 標籤顏色配置
 */
const TAG_COLORS = [
  { bg: '#F0FDF4', border: '#86EFAC', text: '#16A34A' }, // 綠色
  { bg: '#EFF6FF', border: '#93C5FD', text: '#2563EB' }, // 藍色
  { bg: '#FDF4FF', border: '#E879F9', text: '#A855F7' }, // 紫色
  { bg: '#FEF3C7', border: '#FCD34D', text: '#D97706' }, // 黃色
  { bg: '#FEE2E2', border: '#FCA5A5', text: '#DC2626' }, // 紅色
];

/**
 * 生成標籤 SVG 區塊
 * @param {Array} tags - 標籤陣列
 * @param {string} version - 版本號
 * @param {boolean} isLandscape - 是否為橫式版型
 * @returns {string} 標籤 SVG 區塊
 */
const generateTagsBlock = (tags = [], version = '', isLandscape = true) => {
  const maxTags = 5;
  const displayTags = tags.slice(0, maxTags);

  let tagsHtml = '';
  let currentX = isLandscape ? -300 : 0;
  const tagHeight = isLandscape ? 48 : 44;
  const fontSize = isLandscape ? 20 : 18;
  const gap = 16;
  const maxWidth = isLandscape ? 600 : 380;

  // 版本標籤
  if (version) {
    const versionWidth = 100;
    tagsHtml += `
      <rect x="${currentX}" y="${isLandscape ? -24 : 0}" width="${versionWidth}" height="${tagHeight}" rx="12" ry="12" fill="#FFF7ED" stroke="#FDBA74" stroke-width="1"/>
      <text x="${currentX + versionWidth/2}" y="${isLandscape ? 8 : 29}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="#EA580C">
        ${escapeXml(version)}
      </text>`;
    currentX += versionWidth + gap;
  }

  // 其他標籤
  displayTags.forEach((tag, index) => {
    const color = TAG_COLORS[index % TAG_COLORS.length];
    const tagText = escapeXml(tag);
    // 估算標籤寬度（每個中文字約 20px，英文約 10px）
    const textWidth = tagText.length * 14 + 32;
    const tagWidth = Math.min(Math.max(textWidth, 80), 160);

    // 檢查是否超出最大寬度
    if (currentX + tagWidth > maxWidth) return;

    tagsHtml += `
      <rect x="${currentX}" y="${isLandscape ? -24 : 0}" width="${tagWidth}" height="${tagHeight}" rx="12" ry="12" fill="${color.bg}" stroke="${color.border}" stroke-width="1"/>
      <text x="${currentX + tagWidth/2}" y="${isLandscape ? 8 : 29}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="${color.text}">
        ${tagText}
      </text>`;
    currentX += tagWidth + gap;
  });

  return tagsHtml;
};

/**
 * 生成 SVG defs 區塊（濾鏡、漸層等）
 */
const generateDefs = (isLandscape = true) => {
  const clipId = isLandscape ? 'previewClipL' : 'previewClipP';
  const clipRect = isLandscape
    ? '<rect x="16" y="16" width="800" height="400" rx="16" ry="16"/>'
    : '<rect x="16" y="16" width="368" height="680" rx="16" ry="16"/>';

  return `<defs>
    <!-- 柔和陰影濾鏡 -->
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="24" flood-color="#FB923C" flood-opacity="0.15"/>
    </filter>

    <!-- 相片紙陰影 -->
    <filter id="photoShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="8" stdDeviation="16" flood-color="#000" flood-opacity="0.12"/>
    </filter>

    <!-- 背景漸層 -->
    <radialGradient id="bgGradient1" cx="0%" cy="0%" r="60%">
      <stop offset="0%" style="stop-color:#FB923C;stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:#FB923C;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="bgGradient2" cx="100%" cy="100%" r="60%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.05"/>
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:0"/>
    </radialGradient>

    <!-- 預覽圖裁切區域 -->
    <clipPath id="${clipId}">
      ${clipRect}
    </clipPath>
  </defs>`;
};

/**
 * 生成橫式版型 SVG（預覽圖較寬）
 */
const generateLandscapeSvg = (safeName, previewImage, tags, version, payload) => {
  const tagsBlock = generateTagsBlock(tags, version, true);

  // 預覽圖區塊
  let imageBlock = '';
  if (previewImage) {
    imageBlock = `
    <!-- 內部圖片區域背景 -->
    <rect x="16" y="16" width="800" height="400" rx="16" ry="16" fill="#f1f5f9"/>
    <!-- 預覽圖 -->
    <image x="16" y="16" width="800" height="400"
           preserveAspectRatio="xMidYMid slice"
           clip-path="url(#previewClipL)"
           href="${escapeXml(previewImage)}"/>`;
  } else {
    imageBlock = `
    <rect x="16" y="16" width="800" height="400" rx="16" ry="16" fill="#f1f5f9"/>
    <text x="416" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="#94a3b8" font-weight="500">
      PromptFill
    </text>
    <text x="416" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#cbd5e1">
      範本預覽
    </text>`;
  }

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="1024" height="1024" viewBox="0 0 1024 1024">
  <title>PromptFill 範本分享 - ${safeName}</title>

  ${generateDefs(true)}

  <!-- 背景層 -->
  <rect width="100%" height="100%" fill="#f8fafc"/>
  <rect width="100%" height="100%" fill="url(#bgGradient1)"/>
  <rect width="100%" height="100%" fill="url(#bgGradient2)"/>

  <!-- 主卡片 - 半透明白底圓角 -->
  <rect x="48" y="48" width="928" height="928" rx="48" ry="48"
        fill="rgba(255,255,255,0.92)"
        stroke="rgba(255,255,255,0.6)" stroke-width="2"
        filter="url(#softShadow)"/>

  <!-- 相片紙效果 - 預覽圖區域 -->
  <g transform="translate(96, 80) rotate(1, 416, 240)">
    <!-- 白色相片紙底框 -->
    <rect x="0" y="0" width="832" height="480" rx="24" ry="24"
          fill="white"
          filter="url(#photoShadow)"/>
    ${imageBlock}
  </g>

  <!-- 範本名稱 -->
  <text x="512" y="620" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="#1f2937">
    ${safeName}
  </text>

  <!-- 標題下分隔線 -->
  <line x1="280" y1="650" x2="744" y2="650" stroke="#f3f4f6" stroke-width="3" stroke-linecap="round"/>

  <!-- 標籤區 -->
  <g transform="translate(512, 700)">
    ${tagsBlock}
  </g>

  <!-- 瀏覽器提示區塊 -->
  <g transform="translate(512, 830)">
    <!-- 提示背景框 -->
    <rect x="-280" y="-50" width="560" height="110" rx="20" ry="20" fill="#f8fafc" stroke="#e5e7eb" stroke-width="2"/>

    <!-- 提示文字 -->
    <text x="0" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#6b7280" font-weight="500">
      請使用瀏覽器開啟以匯入範本
    </text>

    <!-- Chrome 圖示 -->
    <svg x="-20" y="8" width="40" height="40" viewBox="0 0 512 512">
      <path fill="#FFFFFF" d="M255.73,383.71c70.3,0,127.3-56.99,127.3-127.3s-56.99-127.3-127.3-127.3s-127.3,56.99-127.3,127.3S185.42,383.71,255.73,383.71z"/>
      <linearGradient id="cG" gradientUnits="userSpaceOnUse" x1="283.29" y1="18.9" x2="62.83" y2="400.75" gradientTransform="matrix(1 0 0 -1 0 514)">
        <stop offset="0" style="stop-color:#1E8E3E"/><stop offset="1" style="stop-color:#34A853"/>
      </linearGradient>
      <path fill="url(#cG)" d="M145.48,320.08L35.26,129.17c-22.35,38.7-34.12,82.6-34.12,127.29s11.76,88.59,34.11,127.29c22.35,38.7,54.49,70.83,93.2,93.17c38.71,22.34,82.61,34.09,127.3,34.08l110.22-190.92v-0.03c-11.16,19.36-27.23,35.44-46.58,46.62c-19.35,11.18-41.3,17.07-63.65,17.07s-44.3-5.88-63.66-17.05C172.72,355.52,156.65,339.44,145.48,320.08z"/>
      <linearGradient id="cY" gradientUnits="userSpaceOnUse" x1="218.59" y1="2.33" x2="439.05" y2="384.18" gradientTransform="matrix(1 0 0 -1 0 514)">
        <stop offset="0" style="stop-color:#FCC934"/><stop offset="1" style="stop-color:#FBBC04"/>
      </linearGradient>
      <path fill="url(#cY)" d="M365.96,320.08L255.74,510.99c44.69,0.01,88.59-11.75,127.29-34.1c38.7-22.34,70.84-54.48,93.18-93.18c22.34-38.7,34.1-82.61,34.09-127.3c-0.01-44.69-11.78-88.59-34.14-127.28H255.72l-0.03,0.02c22.35-0.01,44.31,5.86,63.66,17.03c19.36,11.17,35.43,27.24,46.61,46.59c11.18,19.35,17.06,41.31,17.06,63.66C383.03,278.77,377.14,300.72,365.96,320.08L365.96,320.08z"/>
      <path fill="#1A73E8" d="M255.73,357.21c55.66,0,100.78-45.12,100.78-100.78s-45.12-100.78-100.78-100.78s-100.78,45.12-100.78,100.78S200.07,357.21,255.73,357.21z"/>
      <linearGradient id="cR" gradientUnits="userSpaceOnUse" x1="35.26" y1="353.03" x2="476.18" y2="353.03" gradientTransform="matrix(1 0 0 -1 0 514)">
        <stop offset="0" style="stop-color:#D93025"/><stop offset="1" style="stop-color:#EA4335"/>
      </linearGradient>
      <path fill="url(#cR)" d="M255.73,129.14h220.45C453.84,90.43,421.7,58.29,383,35.95C344.3,13.6,300.4,1.84,255.71,1.84c-44.69,0-88.59,11.77-127.29,34.12c-38.7,22.35-70.83,54.5-93.16,93.2l110.22,190.92l0.03,0.02c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31,17.04-63.66c11.17-19.36,27.24-35.43,46.6-46.6C211.42,135.01,233.38,129.13,255.73,129.14z"/>
    </svg>
  </g>

  <!-- 底部 PromptFill 品牌 -->
  <text x="512" y="960" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#d1d5db" font-weight="500">
    PromptFill
  </text>

  <!-- 隱藏的範本資料 -->
  <desc id="promptfill-data">${escapeXml(payload)}</desc>

  <!-- 自動跳轉腳本 -->
  <script type="text/javascript">
    <![CDATA[
      (function() {
        if (typeof window === 'undefined' || !window.location || !document) return;
        try {
          var el = document.getElementById('promptfill-data');
          if (!el) return;
          var payloadStr = el.textContent.trim();
          var payload = JSON.parse(payloadStr);
          if (!payload.data) return;
          var targetUrl = '${TARGET_URL}#svg=' + payload.data;
          window.location.href = targetUrl;
        } catch (e) {
          console.error('PromptFill SVG 跳轉失敗:', e);
        }
      })();
    ]]>
  </script>
</svg>`;
};

/**
 * 生成直式版型 SVG（預覽圖較窄）
 */
const generatePortraitSvg = (safeName, previewImage, tags, version, payload) => {
  const tagsBlock = generateTagsBlock(tags, version, false);

  // 預覽圖區塊
  let imageBlock = '';
  if (previewImage) {
    imageBlock = `
    <!-- 內部圖片區域背景 -->
    <rect x="16" y="16" width="368" height="680" rx="16" ry="16" fill="#f1f5f9"/>
    <!-- 預覽圖 -->
    <image x="16" y="16" width="368" height="680"
           preserveAspectRatio="xMidYMid slice"
           clip-path="url(#previewClipP)"
           href="${escapeXml(previewImage)}"/>`;
  } else {
    imageBlock = `
    <rect x="16" y="16" width="368" height="680" rx="16" ry="16" fill="#f1f5f9"/>
    <text x="200" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#94a3b8" font-weight="500">
      PromptFill
    </text>
    <text x="200" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#cbd5e1">
      範本預覽
    </text>`;
  }

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="1024" height="1024" viewBox="0 0 1024 1024">
  <title>PromptFill 範本分享 - ${safeName}</title>

  ${generateDefs(false)}

  <!-- 背景層 -->
  <rect width="100%" height="100%" fill="#f8fafc"/>
  <rect width="100%" height="100%" fill="url(#bgGradient1)"/>
  <rect width="100%" height="100%" fill="url(#bgGradient2)"/>

  <!-- 主卡片 - 半透明白底圓角 -->
  <rect x="48" y="48" width="928" height="928" rx="48" ry="48"
        fill="rgba(255,255,255,0.92)"
        stroke="rgba(255,255,255,0.6)" stroke-width="2"
        filter="url(#softShadow)"/>

  <!-- 左側：相片紙效果 - 預覽圖區域 (直式) -->
  <g transform="translate(80, 88) rotate(-1, 200, 380)">
    <!-- 白色相片紙底框 -->
    <rect x="0" y="0" width="400" height="760" rx="24" ry="24"
          fill="white"
          filter="url(#photoShadow)"/>
    ${imageBlock}
  </g>

  <!-- 右側：文字資訊區 -->
  <g transform="translate(530, 130)">
    <!-- 範本名稱 -->
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#1f2937">
      ${safeName}
    </text>

    <!-- 標題下分隔線 -->
    <line x1="0" y1="30" x2="400" y2="30" stroke="#f3f4f6" stroke-width="3" stroke-linecap="round"/>

    <!-- 標籤區 -->
    <g transform="translate(0, 70)">
      ${tagsBlock}
    </g>

    <!-- 瀏覽器提示區塊 -->
    <g transform="translate(0, 180)">
      <!-- 提示背景框 -->
      <rect x="0" y="0" width="400" height="160" rx="20" ry="20" fill="#f8fafc" stroke="#e5e7eb" stroke-width="2"/>

      <!-- 提示文字 -->
      <text x="200" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#6b7280" font-weight="500">
        請使用瀏覽器開啟
      </text>
      <text x="200" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#6b7280" font-weight="500">
        以匯入範本
      </text>

      <!-- Chrome 圖示 -->
      <svg x="180" y="90" width="40" height="40" viewBox="0 0 512 512">
        <path fill="#FFFFFF" d="M255.73,383.71c70.3,0,127.3-56.99,127.3-127.3s-56.99-127.3-127.3-127.3s-127.3,56.99-127.3,127.3S185.42,383.71,255.73,383.71z"/>
        <linearGradient id="cGP" gradientUnits="userSpaceOnUse" x1="283.29" y1="18.9" x2="62.83" y2="400.75" gradientTransform="matrix(1 0 0 -1 0 514)">
          <stop offset="0" style="stop-color:#1E8E3E"/><stop offset="1" style="stop-color:#34A853"/>
        </linearGradient>
        <path fill="url(#cGP)" d="M145.48,320.08L35.26,129.17c-22.35,38.7-34.12,82.6-34.12,127.29s11.76,88.59,34.11,127.29c22.35,38.7,54.49,70.83,93.2,93.17c38.71,22.34,82.61,34.09,127.3,34.08l110.22-190.92v-0.03c-11.16,19.36-27.23,35.44-46.58,46.62c-19.35,11.18-41.3,17.07-63.65,17.07s-44.3-5.88-63.66-17.05C172.72,355.52,156.65,339.44,145.48,320.08z"/>
        <linearGradient id="cYP" gradientUnits="userSpaceOnUse" x1="218.59" y1="2.33" x2="439.05" y2="384.18" gradientTransform="matrix(1 0 0 -1 0 514)">
          <stop offset="0" style="stop-color:#FCC934"/><stop offset="1" style="stop-color:#FBBC04"/>
        </linearGradient>
        <path fill="url(#cYP)" d="M365.96,320.08L255.74,510.99c44.69,0.01,88.59-11.75,127.29-34.1c38.7-22.34,70.84-54.48,93.18-93.18c22.34-38.7,34.1-82.61,34.09-127.3c-0.01-44.69-11.78-88.59-34.14-127.28H255.72l-0.03,0.02c22.35-0.01,44.31,5.86,63.66,17.03c19.36,11.17,35.43,27.24,46.61,46.59c11.18,19.35,17.06,41.31,17.06,63.66C383.03,278.77,377.14,300.72,365.96,320.08L365.96,320.08z"/>
        <path fill="#1A73E8" d="M255.73,357.21c55.66,0,100.78-45.12,100.78-100.78s-45.12-100.78-100.78-100.78s-100.78,45.12-100.78,100.78S200.07,357.21,255.73,357.21z"/>
        <linearGradient id="cRP" gradientUnits="userSpaceOnUse" x1="35.26" y1="353.03" x2="476.18" y2="353.03" gradientTransform="matrix(1 0 0 -1 0 514)">
          <stop offset="0" style="stop-color:#D93025"/><stop offset="1" style="stop-color:#EA4335"/>
        </linearGradient>
        <path fill="url(#cRP)" d="M255.73,129.14h220.45C453.84,90.43,421.7,58.29,383,35.95C344.3,13.6,300.4,1.84,255.71,1.84c-44.69,0-88.59,11.77-127.29,34.12c-38.7,22.35-70.83,54.5-93.16,93.2l110.22,190.92l0.03,0.02c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31,17.04-63.66c11.17-19.36,27.24-35.43,46.6-46.6C211.42,135.01,233.38,129.13,255.73,129.14z"/>
      </svg>
    </g>

    <!-- 底部 PromptFill 品牌 -->
    <text x="200" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#d1d5db" font-weight="500">
      PromptFill
    </text>
  </g>

  <!-- 隱藏的範本資料 -->
  <desc id="promptfill-data">${escapeXml(payload)}</desc>

  <!-- 自動跳轉腳本 -->
  <script type="text/javascript">
    <![CDATA[
      (function() {
        if (typeof window === 'undefined' || !window.location || !document) return;
        try {
          var el = document.getElementById('promptfill-data');
          if (!el) return;
          var payloadStr = el.textContent.trim();
          var payload = JSON.parse(payloadStr);
          if (!payload.data) return;
          var targetUrl = '${TARGET_URL}#svg=' + payload.data;
          window.location.href = targetUrl;
        } catch (e) {
          console.error('PromptFill SVG 跳轉失敗:', e);
        }
      })();
    ]]>
  </script>
</svg>`;
};

/**
 * 生成分享用的 SVG 檔案內容
 * @param {Object} shareData - 分享資料（範本名稱、內容、選擇等）
 * @param {string|null} previewImage - 預覽圖 URL 或 base64（可選）
 * @param {Object} options - 額外選項
 * @param {number} options.imageWidth - 預覽圖寬度（用於判斷版型）
 * @param {number} options.imageHeight - 預覽圖高度（用於判斷版型）
 * @param {Array} options.tags - 標籤陣列
 * @param {string} options.version - 版本號
 * @returns {string} SVG 檔案內容
 */
export const generateShareSvg = (shareData, previewImage = null, options = {}) => {
  const { imageWidth = 16, imageHeight = 9, tags = [], version = '' } = options;

  // 壓縮分享資料
  const jsonStr = JSON.stringify(shareData);
  const compressedData = LZString.compressToEncodedURIComponent(jsonStr);

  // 準備 payload JSON
  const payload = JSON.stringify({
    version: 1,
    data: compressedData
  });

  // 範本名稱（用於顯示）
  const templateName = shareData.name || 'PromptFill 範本';
  // 安全處理名稱（避免 XML 特殊字元）
  const safeName = escapeXml(templateName);

  // 根據圖片長寬比決定版型
  // 長寬比 > 1 表示橫式（寬 > 高），使用橫式版型
  // 長寬比 <= 1 表示直式（高 >= 寬），使用直式版型
  const aspectRatio = imageWidth / imageHeight;
  const isLandscape = aspectRatio > 1;

  if (isLandscape) {
    return generateLandscapeSvg(safeName, previewImage, tags, version, payload);
  } else {
    return generatePortraitSvg(safeName, previewImage, tags, version, payload);
  }
};

/**
 * 下載 SVG 檔案
 * @param {string} svgContent - SVG 檔案內容
 * @param {string} filename - 檔案名稱（不含副檔名）
 */
export const downloadSvg = (svgContent, filename) => {
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

/**
 * 解析 SVG 分享參數
 * @param {string} compressedData - LZString 壓縮後的資料
 * @returns {Object|null} 解析後的分享資料，或 null（如果解析失敗）
 */
export const parseSvgShareData = (compressedData) => {
  try {
    const jsonStr = LZString.decompressFromEncodedURIComponent(compressedData);
    if (!jsonStr) {
      console.warn('PromptFill: SVG 資料解壓縮失敗');
      return null;
    }

    const shareData = JSON.parse(jsonStr);
    return shareData;
  } catch (e) {
    console.error('PromptFill: SVG 資料解析失敗:', e);
    return null;
  }
};

/**
 * 轉義 XML 特殊字元
 * @param {string} str - 原始字串
 * @returns {string} 轉義後的字串
 */
const escapeXml = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};
