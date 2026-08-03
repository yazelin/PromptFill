import { CREATOR_SHOWCASE_TAG } from '../constants/styles.js';

const text = (zhTw, en = zhTw) => ({ 'zh-tw': zhTw, en });
const sourceText = (prompt) => text(prompt, prompt);

const projectImage = (repository) =>
  `https://opengraph.githubassets.com/1/yazelin/${repository}`;

const sourceInfo = ({ repository, file, functionName, section }) => ({
  repository: `yazelin/${repository}`,
  file,
  ...(functionName ? { function: functionName } : {}),
  ...(section ? { section } : {}),
  url: `https://github.com/yazelin/${repository}/blob/${repository === 'line-chat-maker' || repository === 'cast-lock-skill' ? 'master' : 'main'}/${file}`,
});

const project = ({
  id,
  name,
  description,
  repository,
  source,
  content,
  tags = [],
  cta = text('查看原作品', 'Open source project'),
}) => ({
  id,
  name,
  content: sourceText(content),
  imageUrl: projectImage(repository),
  author: 'Yaze',
  selections: {},
  tags: [CREATOR_SHOWCASE_TAG, ...tags],
  language: 'zh-tw',
  source,
  showcase: {
    label: name,
    description,
    url: `https://github.com/yazelin/${repository}`,
    cta,
  },
});

// 0.9.0 以前的作者範本是重新撰寫的泛用 prompt。它們可以保留在使用者資料中，
// 但不能繼續以「我的作品」來源範本的身份出現。
export const LEGACY_CREATOR_TEMPLATE_IDS = [
  'tpl_creator_comic_studio',
  'tpl_creator_neko_tensei',
  'tpl_creator_line_sticker_studio',
  'tpl_creator_line_chat_maker',
  'tpl_creator_gemini_watermark_cleaner',
  'tpl_creator_cast_lock',
];

export const migrateLegacyCreatorTemplate = (template) => {
  if (!LEGACY_CREATOR_TEMPLATE_IDS.includes(template?.id)) return template;

  const rest = { ...template };
  delete rest.showcase;
  delete rest.source;
  return {
    ...rest,
    tags: (rest.tags || []).filter((tag) => tag !== CREATOR_SHOWCASE_TAG),
  };
};

const STORYBOARD_PROMPT = `你是漫畫分鏡師。請把下面的小說段落改編成直式條漫分鏡腳本。

規則:
- 只輸出一個 JSON 物件,不要任何其他文字。
- sfx=效果字(擬聲/音效):只在原文明確有聲音事件時使用,text 限 1~4 字,整章最多兩三處,安靜的章節可以完全沒有。
- 格式: {"panels":[{"scene":"畫面場景與內容描述(給生圖模型,具體寫出環境、光線、動作)","characters":["出場角色 id"],"world":["場景/道具 id"],"shot":"鏡頭(遠景/中景/特寫/俯視/仰視等)","continues":"承接哪一格的姿勢(前一格的 id,沒有就空字串)","dialogue":[{"speaker":"說話者名字或旁白","text":"台詞或旁白","type":"speech|thought|narration|sfx"}],"notes":"備註,可空字串"}]}
- 每格一個畫面,節奏照漫畫敘事:重要時刻給特寫、轉場給遠景。
- 有角色入鏡的格,scene 必須含「表情:」描述該格當下的微表情,寫具體的眼睛、眉毛與嘴巴狀態,不要只寫「平靜」。
- 同一格也必須含「動作:」描述身體在做什麼:重心在哪隻腳、手在做什麼、視線去哪、跟環境的接觸點。不要每格都寫「站著」。
- 動作欄不要寫比喻,因為 scene 會逐字餵給生圖模型;近景與特寫也要交代背景。
- 動作要連戲:上一格結束的姿勢就是這一格的起點。同一場景的連續格之間,身體要有可信的位移或變化。
- 承接前一格的格,把前一格的 id 填進 continues;只有同一個角色才承接姿勢,換人時以本格 characters 為準。
- 台詞從原文取材,可精簡,不可改變劇情。
- 12 到 30 格之間,依內容長度決定。

已知角色(characters 欄位請使用這些 id):
{{character_roster}}

小說段落:
---
{{chapter_text}}
---`;

const CHARACTER_SHEET_PROMPT = `畫風: {{style}}
角色設定圖(character reference sheet),單一張圖,白色背景,內容排版如下:
- 左側:{{character_name}} 的全身立繪三視角(正面、側面、背面),同一身高比例並排
- 右側:三個頭部特寫表情差分(平常、微笑、憤怒)
角色外觀: {{character_card}}
所有視角必須是同一個角色,髮型、服裝、身形完全一致。
重要:圖中不要出現任何文字、標籤、箭頭或浮水印。`;

const EXPRESSION_SHEET_PROMPT = `EXPRESSION SHEET for the character in the reference image (same face, same hair, same clothes, same art style).
Character: {{character_name}}. {{character_card}}
Art style: {{style}}
Layout: a clean 3x3 grid of NINE head-and-shoulders portraits of this SAME character on a plain neutral background, evenly spaced, no frames, no labels, no text of any kind.
The nine expressions, in reading order: {{emotions}}.
Each expression must be clearly distinguishable in the eyes, brows and mouth, but stay within this character's restrained personality — no exaggerated cartoon faces, no sweat drops or anime symbols.
No text, no letters, no watermark.`;

const POSE_SHEET_PROMPT = `POSE SHEET for the character in the reference image (same face, same hair, same clothes, same art style).
Character: {{character_name}}. {{character_card}}
Art style: {{style}}
Layout: a clean 3x3 grid of NINE full-body poses of this SAME character on a plain neutral background, evenly spaced, no frames, no labels, no text of any kind.
The nine poses, in reading order: {{poses}}.
Natural, grounded body language with correct anatomy and correct gravity on clothing; no heroic or exaggerated stances.
No text, no letters, no watermark.`;

const WORLD_REFERENCE_PROMPT = `畫風: {{style}}
場景／道具參考圖:{{world_name}}
內容: {{world_card}}
這是一張美術設定用的參考圖:畫這個空間或這樣東西本身,不要有主角、不要演故事。
構圖清楚、光線平均、細節看得出材質,之後每一格都會拿這張當基準。
{{must_not_line}}
重要:圖中不要出現任何文字、標籤、對白框或浮水印。`;

const PANEL_PROMPT = `畫風: {{style}}
{{scene_context}}
鏡頭: {{shot_crop}}
畫面: {{panel_scene}}
場景與道具(必須完全符合設定):
{{world_props}}
機位與固定站位:
{{camera_seating}}
出場角色(外觀必須完全符合設定):
{{character_cast}}
備註: {{notes}}

參考圖裡的角色設定圖只提供長相與服裝。姿勢、取景、視線一律照上面「畫面」寫的做,不要沿用設定圖的正面站姿;附了動作集就從裡面挑一個貼近本格描述的體態。
{{continuity}}
全域紅線(整部作品一致,不可違反):
{{global_rules}}
重要:圖中不要出現任何文字、對白框、狀聲字或浮水印;對白之後會用排版疊加。`;

const BAKE_PROMPT = `Use case: image-edit. Input images: Image 1: the finished comic panel artwork. {{font_reference_instruction}}
Primary request: redraw this exact panel as a finished webtoon comic panel WITH the following pieces of text drawn into the image as part of the comic art:
{{text_elements}}
Keep the artwork, colors, faces and composition of image 1 unchanged apart from adding these text elements.
LETTERING: all speech, thought and narration text uses one consistent clean rounded gothic manga typesetting; sound-effect lettering, if any, is exempt and follows the action instead. All lettering must look hand-typeset as part of the comic page, not a computer UI overlay.
Do NOT add any corner brackets or quotation marks unless they appear in the given text. No other text anywhere.`;

const CAST_LOCK_PROMPT = `REFERENCE IMAGES:
- image 1: {{style_reference}}
- images 2 onward, in this order: {{world_references}}
- after the scene/prop references: {{character_references}}

SCENE / PROP SHEET — 場景與道具照參考圖畫,不要每一格重新想一次。
{{world_rules}}

CHARACTER SHEET — 參考圖裡的設定圖是準的。下面每一項都要照做,少一項就是畫錯了。
{{character_rules}}

GLOBAL RULES:
{{global_rules}}

{{body}}`;

const NEKO_PAGE_PROMPT = `Same art style as reference image 1: richly detailed vibrant anime fantasy illustration, painterly digital art, glowing magic particles, floating islands and crystal spires in the sky. Vertical manga page, THREE horizontal panels stacked top to bottom, separated by thin white gutters, portrait aspect ratio 2:3.

REFERENCE IMAGES:
順序固定: image 1 是畫風錨,之後是場景／道具參考圖,最後才是出場角色設定圖。
{{reference_images}}

PROPS AND PLACES - the reference images are the authority for these. Copy them exactly; they must look the same in every panel and every episode.
{{props_and_places}}

CHARACTER SHEET - the model sheets provided as reference images are the authority. Copy every listed feature; a character is wrong if any of these is missing.
{{character_sheet}}

BALLOON SHAPES - each line below names its own balloon shape. Draw that exact shape; do not default every balloon to a rounded rectangle. Hand-inked manga feel, slightly irregular outlines, never a perfect geometric shape.
- SHOUT BALLOON: spiky explosion burst with sharp jagged points all around, thick black outline, large bold text.
- OVAL BALLOON: soft hand-drawn organic oval, thin black outline, with a short curved tail pointing at the speaker.
- WEAK BALLOON: small squashed oval with a thin wobbly or dashed outline, small text, deflated feeling.
- TREMBLE BALLOON: oval whose outline shivers in a wavy zigzag, for shock or fear.
- THOUGHT BALLOON: fluffy cloud shape with scalloped edges, tail made of three shrinking circles.
- DEMON BALLOON: black-filled balloon with white text and a ragged spiked edge, heavy and oppressive.
- CAPTION BOX: plain straight-cornered rectangle, the only right-angled box on the page.

DIALOGUE RULES - the most important part, follow exactly:
- All text is TRADITIONAL CHINESE (zh-TW, Taiwan). Copy each string CHARACTER BY CHARACTER exactly as given. Never simplify a character, never substitute a similar-looking character, never invent extra characters, never leave a character out.
- The text allowed in the whole image is exactly the dialogue listed below, the single character 貓 engraved on the specified medallion, and in-world English UI text explicitly requested by a panel description.
- Nothing else: no sound effects, no signature, no watermark, no page numbers, and never an English translation or transcription of the Chinese dialogue.
- Keep balloons clear of the characters' faces.

FINAL CHECK: the balloons on this page must not all be the same shape. Draw exactly the shape named for each line.

{{page_body}}`;

const STICKER_GRID_PROMPT = `OUTPUT CANVAS (HIGHEST PRIORITY): produce a SQUARE 1:1 image — width and height must be equal.
The sheet is EXACTLY 3 columns × 3 rows = 9 cells. Never 4 columns, never 5 columns, never a wide or landscape canvas. Do not repeat any phrase to fill extra space.

Create a single 3×3 grid image: 3 rows × 3 columns of 9 equal-size square chat stickers featuring the same character from the reference image. Each tile is ONE complete chat sticker.

STYLE:
{{style_instruction}}

CHARACTER IDENTITY:
The character must be recognizably the same person or creature across all 9 tiles — same hair colour and shape, same clothing colour, same general face features. Only the pose, expression and phrase change between tiles; the rendered art style stays uniform.

STICKER FRAMING:
- Subject is the upper body or full body of the character, fully inside the cell with comfortable margin.
- Background is plain solid {{chroma_key}}. This is a chroma-key plate that will be programmatically removed. Use exactly this color only for the background plate: no gradients, shading, scenery, patterns, ground plane, platform, cast shadow or contact shadow.
- The character itself must contain no chroma-key color anywhere. Avoid it on clothes, hair, eyes, accessories, props, highlights, reflected light and shadows.
- No real brand logos, monograms, trademarked markings, fabricated brand-like text or iconic luxury-bag silhouettes.
- No real public figures, copyrighted characters, sexualized content or nudity. The character must be original and fully clothed.

SLOT CONTENT, IN READING ORDER:
{{phrases_and_actions}}

If text is enabled, print each phrase exactly character-by-character as a bold readable overlay graphic with a thick black outline; the printed text must not change the artwork's style. If text is disabled, use each phrase only as an emotion cue and render absolutely no text, letters, numbers or emoji on that cell.

The image will be split into nine tiles by the downstream tool, so all cells must be equal square cells and all nine tiles must preserve the same character identity.`;

const STICKER_THEME_PROMPT = `你是 LINE 貼圖文案 + 動作發想助手。根據使用者描述的主題,產出 9 組「短語 + 對應動作描述」配對。

每組包含:
- phrase: 2-8 字短語,語氣口語、聊天感、情緒鮮明,避免廣告或商標。語言: 繁體中文。
- action: 5-15 字英文動作與表情描述,因為圖像模型對英文 pose description 理解較準。

使用者主題:
{{sticker_theme}}

請只回 JSON 陣列,無 markdown 包裝:
[
  {"phrase":"短語1","action":"english action description"},
  {"phrase":"短語2","action":"english action description"}
  ... 共 9 組
]`;

const CHAT_WRITER_PROMPT = `你是資深編劇,專為「LINE 對話截圖」這種形式寫劇本。

你的劇本會交給執行 AI 逐字轉譯成一張 LINE 風格對話畫面。沒有旁白、內心獨白、場景或鏡頭描寫;所有情緒與劇情只能用畫面上真的看得到的東西演出。
只要劇情提到傳圖、截圖、照片、梗圖、畫作或其他視覺物件,就必須用「[圖片:描述]」或「[貼圖:描述]」做成一則訊息,不能只用文字提到。

訊息記法:
- 文字:角色A:今晚好冷~
- 貼圖:角色A:[貼圖:抱抱的熊]
- 圖片:角色B:[圖片:海邊夕陽]
- 語音:角色A:[語音 0:15:大意是想見你]
- 檔案:角色B:[檔案:企劃書.pdf 2.4MB]
- 引用回覆:角色A:(引用角色B的「我想吃燉飯」)那今晚一起去?
- 表情回應:(角色B在角色A的上一則按了 ❤️)
- 日期分隔:[日期:7月17日 (四)]
- 省略分隔:(略)
- 輸入框草稿:(草稿) draft=打了沒送出的那句話

場景設定:
- 1 對 1 的標題是對方名字;群組要有自然的群組名與合理成員數,名稱不要自己加「(人數)」。
- 必須指定一位角色為「自己」,在角色設定後標示「(自己)」,他的訊息才會在右側綠泡泡。
- 時間使用台灣 LINE 慣例,例如「下午4:06」,並合理遞增。

敘事要求:
- 先安排起因、升溫、高潮與收尾。
- 五種訊息類型至少使用三種,但每個形式元素都必須服務劇情。
- 結尾可使用草稿懸念、已讀不回、一句話神回、貼圖收場或日期／公告反差。
- 設計一個明確的「截圖點」,讓人看完想單獨截下來分享。
- 對話要像真人打字,角色口氣要彼此區分。
- 一律使用繁體中文,只輸出完整劇本文字,不要額外說明。

使用者委託主題:
{{chat_theme}}`;

const CHAT_CRITIC_PROMPT = `你是嚴格的 LINE 對話劇本評審,標準是「能在社群瘋傳」。請對劇本六項各 0-10 分:
1. arc: 劇情弧,起因、升溫、高潮、收尾是否完整。
2. voice: 角色聲音是否一致且彼此區分。
3. form: 已讀不回、時間差、日期分隔、貼圖、引用、react、draft 等形式是否至少巧用三種且服務劇情。
4. pacing: 留白與密集交錯,高潮前是否有鋪陳。
5. real: 是否像真人打字的口語與短句。
6. share: 是否有明確的共鳴對象與「截圖點」。

扣分規則:
- 平淡、只有寒暄問答、沒有意外或情緒轉折時,arc 與 pacing 不得超過 6。
- 純文字、沒有貼圖／圖片／語音等非文字訊息時,form 不得超過 6。
- 形式元素只是硬塞、沒有服務劇情時,form 扣分。
- 劇情提到視覺物件卻沒有用 [圖片] 或 [貼圖] 做出來時,form 不得超過 4 且 pass 必須是 false。
- 沒有明確截圖點或共鳴對象模糊時,share 不得超過 6。

只回傳 JSON:
{"scores":{"arc":n,"voice":n,"form":n,"pacing":n,"real":n,"share":n},"total":n,"pass":true|false,"feedback":"具體可執行的修改指示"}
pass 條件:total >= 48 且每項 >= 6。

待評審劇本:
{{chat_script}}`;

export const CREATOR_SHOWCASE_TEMPLATES = [
  project({
    id: 'tpl_creator_comic_storyboard_source',
    name: text('Comic Studio｜小說轉分鏡 JSON', 'Comic Studio | Novel to Storyboard JSON'),
    description: text(
      '直接取自 Comic Studio 的分鏡 prompt：把小說段落整理成可接續生圖的 JSON。',
      'The actual Comic Studio storyboard builder, adapted into reusable fill-in fields.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildStoryboardPrompt' }),
    content: STORYBOARD_PROMPT,
    tags: ['人物', '圖表', '創意'],
  }),
  project({
    id: 'tpl_creator_comic_character_sheet_source',
    name: text('Comic Studio｜角色三視角設定圖', 'Comic Studio | Character Reference Sheet'),
    description: text(
      '取自角色設定圖 builder：三視角加表情差分，作為後續每格生圖的角色參考。',
      'The character-sheet prompt used as a continuity anchor for later panels.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildCharacterSheetPrompt' }),
    content: CHARACTER_SHEET_PROMPT,
    tags: ['人物', '創意'],
  }),
  project({
    id: 'tpl_creator_comic_expression_sheet_source',
    name: text('Comic Studio｜角色表情九宮格', 'Comic Studio | Expression Sheet'),
    description: text(
      '取自表情集 builder：固定同一張臉與服裝，只替換九種可辨識的情緒。',
      'The real expression-sheet pattern for keeping one character consistent.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildExpressionSheetPrompt' }),
    content: EXPRESSION_SHEET_PROMPT,
    tags: ['人物', '圖表'],
  }),
  project({
    id: 'tpl_creator_comic_pose_sheet_source',
    name: text('Comic Studio｜角色動作九宮格', 'Comic Studio | Pose Sheet'),
    description: text(
      '取自動作集 builder：讓單格漫畫不要每次都回到正面站姿。',
      'The pose-sheet prompt used to give panel generation reusable body language.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildPoseSheetPrompt' }),
    content: POSE_SHEET_PROMPT,
    tags: ['人物', '圖表'],
  }),
  project({
    id: 'tpl_creator_comic_world_ref_source',
    name: text('Comic Studio｜場景／道具參考圖', 'Comic Studio | World and Prop Reference'),
    description: text(
      '取自 world reference builder：只鎖定空間或道具本身，不讓主角和故事事件污染設定圖。',
      'The clean scene and prop reference prompt used before panel generation.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildWorldRefPrompt' }),
    content: WORLD_REFERENCE_PROMPT,
    tags: ['建築', '產品', '創意'],
  }),
  project({
    id: 'tpl_creator_comic_panel_source',
    name: text('Comic Studio｜漫畫單格連戲生成', 'Comic Studio | Continuity Panel Prompt'),
    description: text(
      '取自單格 builder：把場次、鏡頭、角色、道具、站位與前一格連戲規則組在一起。',
      'The panel builder that combines scene context, cast, props, camera, and continuity.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildPanelPrompt' }),
    content: PANEL_PROMPT,
    tags: ['人物', '建築', '創意'],
  }),
  project({
    id: 'tpl_creator_comic_bake_source',
    name: text('Comic Studio｜漫畫對白燒錄', 'Comic Studio | Comic Lettering Bake'),
    description: text(
      '取自 bake builder：維持原畫面，只把指定位置的繁中對白和效果字畫進成品。',
      'The image-edit prompt used to bake exact lettering into a finished panel.'
    ),
    repository: 'comic-studio',
    source: sourceInfo({ repository: 'comic-studio', file: 'js/prompt.js', functionName: 'buildBakePrompt' }),
    content: BAKE_PROMPT,
    tags: ['創意', '圖表'],
  }),
  project({
    id: 'tpl_creator_cast_lock_source',
    name: text('Cast Lock｜角色與場景鎖定包', 'Cast Lock | Cast and World Lock'),
    description: text(
      '取自 Cast Lock 的 build.py：畫風錨、場景／道具、角色設定與全域規則固定分段。',
      'The source-backed reference pack structure from Cast Lock.'
    ),
    repository: 'cast-lock-skill',
    source: sourceInfo({ repository: 'cast-lock-skill', file: 'build.py', functionName: 'build' }),
    content: CAST_LOCK_PROMPT,
    tags: ['人物', '建築', '創意'],
  }),
  project({
    id: 'tpl_creator_neko_page_source',
    name: text('Neko-Tensei｜三格貓貓漫畫頁', 'Neko-Tensei | Three-Panel Cat Fantasy Page'),
    description: text(
      '取自 Neko-Tensei 的生圖 pipeline：固定參考圖、角色特徵、繁中對白與氣泡形狀。',
      'The source-backed page prompt pattern from the Neko-Tensei production pipeline.'
    ),
    repository: 'neko-tensei',
    source: sourceInfo({ repository: 'neko-tensei', file: 'scripts/prompt.py', functionName: 'build_prompt' }),
    content: NEKO_PAGE_PROMPT,
    tags: ['卡通', '寵物', '人物'],
  }),
  project({
    id: 'tpl_creator_line_sticker_grid_source',
    name: text('LINE 貼圖製造機｜3×3 角色貼圖盤', 'LINE Sticker Studio | 3x3 Sticker Grid'),
    description: text(
      '取自 worker 的 buildPrompt：正方形 3×3、同一角色、短語動作配對與可去背背景。',
      'The actual 3x3 grid prompt used by the LINE Sticker Studio worker.'
    ),
    repository: 'line-sticker-studio',
    source: sourceInfo({ repository: 'line-sticker-studio', file: 'worker/src/index.js', functionName: 'buildPrompt' }),
    content: STICKER_GRID_PROMPT,
    tags: ['卡通', '人物', '創意'],
  }),
  project({
    id: 'tpl_creator_line_sticker_theme_source',
    name: text('LINE 貼圖製造機｜9 句文案動作配對', 'LINE Sticker Studio | Nine Phrase and Pose Ideas'),
    description: text(
      '取自 `/generate-themes`：把一個主題拆成九組可直接餵給貼圖生成器的短語與動作。',
      'The actual phrase-and-action brainstorming prompt behind the theme endpoint.'
    ),
    repository: 'line-sticker-studio',
    source: sourceInfo({ repository: 'line-sticker-studio', file: 'worker/src/index.js', section: 'POST /generate-themes' }),
    content: STICKER_THEME_PROMPT,
    tags: ['卡通', '創意'],
  }),
  project({
    id: 'tpl_creator_line_chat_writer_source',
    name: text('LINE Chat Maker｜對話腳本編劇', 'LINE Chat Maker | Conversation Script Writer'),
    description: text(
      '取自 LINE Chat Maker 的 WRITER_SYSTEM：用實際能畫在截圖上的元素寫出完整對話劇本。',
      'The source-backed writer prompt for creating a visual LINE chat script.'
    ),
    repository: 'line-chat-maker',
    source: sourceInfo({ repository: 'line-chat-maker', file: 'ai.js', section: 'WRITER_SYSTEM' }),
    content: CHAT_WRITER_PROMPT,
    tags: ['創意', '人物'],
  }),
  project({
    id: 'tpl_creator_line_chat_critic_source',
    name: text('LINE Chat Maker｜對話腳本評審', 'LINE Chat Maker | Conversation Script Critic'),
    description: text(
      '取自 CRITIC_SYSTEM：用劇情弧、角色聲音、形式、節奏、真實感與傳播力檢查腳本。',
      'The source-backed critic prompt and pass criteria for LINE chat scripts.'
    ),
    repository: 'line-chat-maker',
    source: sourceInfo({ repository: 'line-chat-maker', file: 'ai.js', section: 'CRITIC_SYSTEM' }),
    content: CHAT_CRITIC_PROMPT,
    tags: ['創意', '圖表'],
  }),
];
