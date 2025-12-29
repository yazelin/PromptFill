/**
 * 壓縮圖片：最長邊不超過 maxSize，檔案大小不超過 maxFileSize
 *
 * 注意：此函式強制輸出為 JPEG 格式，PNG 圖片的透明度將不會保留。
 * 在本應用中，範本圖片不需要透明度支援，因此統一使用 JPEG 以獲得更好的壓縮效果。
 *
 * @param {File} file - 要壓縮的圖片檔案
 * @param {number} maxSize - 最長邊的最大像素值，預設 512
 * @param {number} maxFileSize - 最大檔案大小（bytes），預設 300KB
 * @returns {Promise<string>} - 壓縮後的 base64 data URL
 */
export const compressImage = (file, maxSize = 512, maxFileSize = 300 * 1024) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      // 計算縮放比例，最長邊不超過 maxSize
      let { width, height } = img;
      if (width > height) {
        if (width > maxSize) {
          height = Math.round((height * maxSize) / width);
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width = Math.round((width * maxSize) / height);
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // 嘗試不同品質壓縮，確保檔案大小不超過 maxFileSize
      // Base64 編碼會增加約 33% 的體積，因此用 4/3 來換算
      let quality = 0.9;
      let result = canvas.toDataURL('image/jpeg', quality);

      while (result.length > maxFileSize * (4 / 3) && quality > 0.1) {
        quality -= 0.1;
        result = canvas.toDataURL('image/jpeg', quality);
      }

      resolve(result);
    };

    img.onerror = () => reject(new Error('圖片載入失敗'));

    // 讀取檔案為 data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('檔案讀取失敗'));
    reader.readAsDataURL(file);
  });
};
