import { writeFile } from 'fs/promises';

const FILES = [
  {
    url: 'https://github.com/doggy8088/PromptFill/raw/refs/heads/main/src/data/banks.js',
    dest: 'src/data/banks.js'
  },
  {
    url: 'https://github.com/doggy8088/PromptFill/raw/refs/heads/main/src/data/templates.js',
    dest: 'src/data/templates.js'
  }
];

// 自訂詞彙修正：保哥用的詞 → 我們用的詞
const TERM_REPLACEMENTS = [
  ['模板', '範本'],
  // 可以繼續新增其他需要修正的詞彙
];

async function downloadFile(url, dest) {
  console.log(`下載 ${url} ...`);
  try {
    const response = await fetch(url, {
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const content = await response.text();

    if (!content || content.trim().length === 0) {
      throw new Error(`下載的檔案為空: ${dest}`);
    }

    await writeFile(dest, content, 'utf8');

    console.log(`✓ 成功下載到 ${dest}`);
    return content;
  } catch (error) {
    console.error(`✗ 下載失敗: ${url}`);
    console.error(error.message);
    process.exit(1);
  }
}

async function processFile(filePath, content) {
  console.log(`處理檔案 ${filePath} ...`);

  let processedContent = content;

  // 自訂詞彙修正
  for (const [from, to] of TERM_REPLACEMENTS) {
    const regex = new RegExp(from, 'g');
    const count = (processedContent.match(regex) || []).length;
    if (count > 0) {
      processedContent = processedContent.replace(regex, to);
      console.log(`  修正詞彙: "${from}" → "${to}" (${count} 處)`);
    }
  }

  await writeFile(filePath, processedContent, 'utf8');
  console.log(`✓ 成功處理 ${filePath}`);
}

async function main() {
  console.log('開始同步上游資料檔...\n');

  for (const file of FILES) {
    // 下載檔案
    const content = await downloadFile(file.url, file.dest);

    // 處理檔案
    await processFile(file.dest, content);

    console.log('');
  }

  console.log('所有檔案同步完成！');
}

main().catch(error => {
  console.error('執行失敗:', error);
  process.exit(1);
});
