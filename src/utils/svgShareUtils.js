/**
 * SVG 分享工具模組
 * 用於生成包含模板資料的可分享 SVG 圖檔
 */

import LZString from 'lz-string';

// 目標網址（開發時使用 localhost，正式環境使用 GitHub Pages）
const TARGET_URL = import.meta.env.DEV
  ? 'http://localhost:1420/'
  : 'https://yazelin.github.io/PromptFill/';

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
 * 生成分享用的 SVG 檔案內容
 * @param {Object} shareData - 分享資料（模板名稱、內容、選擇等）
 * @param {string|null} previewImage - 預覽圖 URL 或 base64（可選）
 * @returns {string} SVG 檔案內容
 */
export const generateShareSvg = (shareData, previewImage = null) => {
  // 壓縮分享資料
  const jsonStr = JSON.stringify(shareData);
  const compressedData = LZString.compressToEncodedURIComponent(jsonStr);

  // 準備 payload JSON
  const payload = JSON.stringify({
    version: 1,
    data: compressedData
  });

  // 模板名稱（用於顯示）
  const templateName = shareData.name || 'PromptFill 模板';
  // 安全處理名稱（避免 XML 特殊字元）
  const safeName = escapeXml(templateName);

  // 預覽圖區塊（直接使用 URL，SVG 作為檔案開啟時可以載入外部圖片）
  let imageBlock = '';
  if (previewImage) {
    imageBlock = `
  <image x="16" y="16" width="480" height="300" preserveAspectRatio="xMidYMid slice"
         href="${escapeXml(previewImage)}" />`;
  } else {
    // 無預覽圖時顯示佔位區塊
    imageBlock = `
  <rect x="16" y="16" width="480" height="300" fill="#e9ecef" rx="8"/>
  <text x="256" y="166" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" fill="#adb5bd">
    PromptFill
  </text>`;
  }

  // 生成 SVG
  const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="512" height="512" viewBox="0 0 512 512">
  <title>PromptFill 模板分享 - ${safeName}</title>

  <!-- 背景 -->
  <rect width="100%" height="100%" fill="#f8f9fa"/>

  <!-- 預覽圖區域 -->
  ${imageBlock}

  <!-- 模板名稱 -->
  <text x="256" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#212529">
    ${safeName}
  </text>

  <!-- PromptFill 標誌 -->
  <text x="256" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#6c757d">
    PromptFill 模板分享
  </text>

  <!-- 提示訊息（非瀏覽器環境顯示） -->
  <text x="256" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#868e96">
    請使用瀏覽器開啟此檔案以匯入模板
  </text>

  <!-- 底部裝飾線 -->
  <line x1="56" y1="470" x2="456" y2="470" stroke="#dee2e6" stroke-width="2"/>

  <!-- 隱藏的模板資料 -->
  <desc id="promptfill-data">${escapeXml(payload)}</desc>

  <!-- 自動跳轉腳本 -->
  <script type="text/javascript">
    <![CDATA[
      (function() {
        // 檢查是否在瀏覽器環境
        if (typeof window === 'undefined' || !window.location || !document) {
          return;
        }

        try {
          // 讀取嵌入的資料
          var el = document.getElementById('promptfill-data');
          if (!el) {
            console.warn('PromptFill: 找不到資料元素');
            return;
          }

          var payloadStr = el.textContent.trim();
          var payload = JSON.parse(payloadStr);

          if (!payload.data) {
            console.warn('PromptFill: 資料格式錯誤');
            return;
          }

          // 構建目標 URL
          var targetUrl = '${TARGET_URL}#svg=' + payload.data;

          // 跳轉到 PromptFill
          console.log('PromptFill: 正在跳轉...');
          window.location.href = targetUrl;

        } catch (e) {
          console.error('PromptFill SVG 跳轉失敗:', e);
        }
      })();
    ]]>
  </script>
</svg>`;

  return svg;
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
