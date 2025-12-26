/**
 * GitHub API integration for loading templates and banks from Issues
 */

// Cache configuration
const CACHE_KEY_TEMPLATES = 'github_templates_cache';
const CACHE_KEY_BANKS = 'github_banks_cache';
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

/**
 * Get GitHub repo from environment variable
 */
function getGitHubRepo() {
  return import.meta.env.VITE_GITHUB_REPO || 'doggy8088/PromptFill';
}

/**
 * Parse repo string into owner and repo name
 */
function parseRepo(repoStr) {
  const [owner, repo] = repoStr.split('/');
  return { owner, repo };
}

/**
 * Check if cache is valid (not expired)
 */
function isCacheValid(cacheKey) {
  try {
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return false;

    const { timestamp } = JSON.parse(cached);
    return Date.now() - timestamp < CACHE_DURATION_MS;
  } catch {
    return false;
  }
}

/**
 * Get cached data
 */
function getCachedData(cacheKey) {
  try {
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return null;

    const { data } = JSON.parse(cached);
    return data;
  } catch {
    return null;
  }
}

/**
 * Set cache data
 */
function setCacheData(cacheKey, data) {
  try {
    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data
    }));
  } catch {
    // Ignore cache errors (e.g., storage full)
  }
}

/**
 * Clear cache for a specific key
 */
export function clearCache(cacheKey = null) {
  if (cacheKey) {
    localStorage.removeItem(cacheKey);
  } else {
    localStorage.removeItem(CACHE_KEY_TEMPLATES);
    localStorage.removeItem(CACHE_KEY_BANKS);
  }
}

/**
 * Fetch issues from GitHub API with specific labels
 */
async function fetchIssues(labels) {
  const { owner, repo } = parseRepo(getGitHubRepo());
  const labelParam = labels.join(',');
  const url = `https://api.github.com/repos/${owner}/${repo}/issues?labels=${labelParam}&state=open&per_page=100`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

// Known section headers in GitHub Issue Templates
const KNOWN_SECTION_HEADERS = [
  '模板名稱 \\(中文\\)',
  'Template Name \\(English\\)',
  '模板內容 \\(中文\\)',
  'Template Content \\(English\\)',
  '預覽圖片 \\/ Preview Image',
  '預覽圖片',
  '標籤 \\/ Tags',
  '標籤',
  '預設值 \\(JSON\\) \\/ Default Values \\(JSON\\)',
  '預設值 \\(JSON\\)',
  '詞庫名稱 \\(中文\\)',
  'Bank Name \\(English\\)',
  '詞庫 ID \\/ Bank ID',
  '詞庫 ID',
  '分類 \\/ Category',
  '分類',
  '選項 \\/ Options',
  '選項',
];

/**
 * Parse a single section value from issue body
 */
function parseSection(body, labelZh, labelEn = null) {
  // Build lookahead pattern for known section headers only
  const headerPattern = KNOWN_SECTION_HEADERS.map(h => `### ${h}`).join('|');
  const lookahead = `(?=\\n(?:${headerPattern})|$)`;

  // Try Chinese label first
  let regex = new RegExp(`### ${labelZh}\\s*\\n([\\s\\S]*?)${lookahead}`, 'i');
  let match = body.match(regex);

  // Try English label if Chinese not found
  if (!match && labelEn) {
    regex = new RegExp(`### ${labelEn}\\s*\\n([\\s\\S]*?)${lookahead}`, 'i');
    match = body.match(regex);
  }

  const result = match ? match[1].trim() : '';
  // Filter out GitHub's "No response" placeholder
  return result === '_No response_' ? '' : result;
}

/**
 * Parse template from GitHub Issue
 */
function parseTemplateIssue(issue) {
  const body = issue.body || '';

  // Parse fields from issue body
  const nameZh = parseSection(body, '模板名稱 \\(中文\\)', 'Template Name \\(Chinese\\)');
  const nameEn = parseSection(body, 'Template Name \\(English\\)', 'Template Name');
  const contentZh = parseSection(body, '模板內容 \\(中文\\)', 'Template Content \\(Chinese\\)');
  const contentEn = parseSection(body, 'Template Content \\(English\\)', 'Template Content');
  const preview = parseSection(body, '預覽圖片 \\/ Preview Image', '預覽圖片');
  const tagsStr = parseSection(body, '標籤 \\/ Tags', '標籤');
  const defaultsStr = parseSection(body, '預設值 \\(JSON\\) \\/ Default Values \\(JSON\\)', '預設值 \\(JSON\\)');

  // Validate required fields
  if (!nameZh || !contentZh) {
    return null;
  }

  // Parse tags
  const tags = tagsStr
    ? tagsStr.split(',').map(t => t.trim()).filter(Boolean)
    : [];

  // Parse defaults JSON
  let defaults = {};
  if (defaultsStr) {
    try {
      // Remove markdown code block if present
      const jsonStr = defaultsStr.replace(/^```json?\s*\n?|\n?```$/g, '').trim();
      defaults = JSON.parse(jsonStr);
    } catch {
      // Ignore invalid JSON
    }
  }

  // Parse preview image URL
  let previewUrl = '';
  if (preview) {
    const imgMatch = preview.match(/!\[.*?\]\((.*?)\)/);
    previewUrl = imgMatch ? imgMatch[1] : preview.trim();
  }

  return {
    id: `github_${issue.number}`,
    name: {
      'zh-tw': nameZh,
      'en': nameEn || nameZh
    },
    content: {
      'zh-tw': contentZh,
      'en': contentEn || contentZh
    },
    imageUrl: previewUrl || '',
    tags,
    selections: defaults, // Issue 表單中的 defaults 對應到 selections
    language: ['zh-tw', 'en'],
    author: '社群',
    source: 'github',
    issueNumber: issue.number,
    issueUrl: issue.html_url
  };
}

/**
 * Parse bank from GitHub Issue
 */
function parseBankIssue(issue) {
  const body = issue.body || '';

  // Parse fields from issue body
  const nameZh = parseSection(body, '詞庫名稱 \\(中文\\)', 'Bank Name \\(Chinese\\)');
  const nameEn = parseSection(body, 'Bank Name \\(English\\)', 'Bank Name');
  const bankId = parseSection(body, '詞庫 ID \\/ Bank ID', '詞庫 ID');
  const categoryRaw = parseSection(body, '分類 \\/ Category', '分類');
  const optionsStr = parseSection(body, '選項 \\/ Options', '選項');

  // Validate required fields
  if (!nameZh || !bankId || !optionsStr) {
    return null;
  }

  // Extract category from dropdown format "character (人物)"
  let category = 'other';
  if (categoryRaw) {
    const catMatch = categoryRaw.match(/^(\w+)/);
    if (catMatch) {
      category = catMatch[1];
    }
  }

  // Parse options (each line: "中文 | English")
  const options = optionsStr
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split('|').map(p => p.trim());
      if (parts.length >= 2) {
        return {
          'zh-tw': parts[0],
          'en': parts[1]
        };
      } else if (parts.length === 1) {
        // Single language
        return {
          'zh-tw': parts[0],
          'en': parts[0]
        };
      }
      return null;
    })
    .filter(Boolean);

  if (options.length === 0) {
    return null;
  }

  return {
    id: bankId,
    label: {
      'zh-tw': nameZh,
      'en': nameEn || nameZh
    },
    category,
    options,
    source: 'github',
    issueNumber: issue.number,
    issueUrl: issue.html_url
  };
}

/**
 * Fetch templates from GitHub Issues
 * @param {boolean} useCache - Whether to use cached data if available
 * @returns {Promise<Array>} Array of parsed templates
 */
export async function fetchTemplatesFromIssues(useCache = true) {
  // Check cache first
  if (useCache && isCacheValid(CACHE_KEY_TEMPLATES)) {
    return getCachedData(CACHE_KEY_TEMPLATES);
  }

  try {
    const issues = await fetchIssues(['approved', 'template']);
    const templates = issues
      .map(parseTemplateIssue)
      .filter(Boolean);

    // Update cache
    setCacheData(CACHE_KEY_TEMPLATES, templates);

    return templates;
  } catch (error) {
    console.error('Failed to fetch templates from GitHub:', error);

    // Return cached data if available, even if expired
    const cached = getCachedData(CACHE_KEY_TEMPLATES);
    return cached || [];
  }
}

/**
 * Fetch banks from GitHub Issues
 * @param {boolean} useCache - Whether to use cached data if available
 * @returns {Promise<Object>} Object mapping bank IDs to bank data
 */
export async function fetchBanksFromIssues(useCache = true) {
  // Check cache first
  if (useCache && isCacheValid(CACHE_KEY_BANKS)) {
    return getCachedData(CACHE_KEY_BANKS);
  }

  try {
    const issues = await fetchIssues(['approved', 'bank']);
    const banks = {};

    issues.forEach(issue => {
      const bank = parseBankIssue(issue);
      if (bank) {
        banks[bank.id] = bank;
      }
    });

    // Update cache
    setCacheData(CACHE_KEY_BANKS, banks);

    return banks;
  } catch (error) {
    console.error('Failed to fetch banks from GitHub:', error);

    // Return cached data if available, even if expired
    const cached = getCachedData(CACHE_KEY_BANKS);
    return cached || {};
  }
}

/**
 * Force refresh all data from GitHub (ignore cache)
 */
export async function refreshFromGitHub() {
  clearCache();
  const [templates, banks] = await Promise.all([
    fetchTemplatesFromIssues(false),
    fetchBanksFromIssues(false)
  ]);
  return { templates, banks };
}

/**
 * Merge local data with GitHub data
 * GitHub data takes priority for same IDs
 */
export function mergeTemplates(localTemplates, githubTemplates) {
  const merged = [...githubTemplates];
  const githubIds = new Set(githubTemplates.map(t => t.id));

  // Add local templates that don't exist in GitHub
  localTemplates.forEach(local => {
    if (!githubIds.has(local.id)) {
      merged.push(local);
    }
  });

  return merged;
}

/**
 * Merge local banks with GitHub banks
 * GitHub data takes priority for same IDs
 */
export function mergeBanks(localBanks, githubBanks) {
  return {
    ...localBanks,
    ...githubBanks
  };
}
