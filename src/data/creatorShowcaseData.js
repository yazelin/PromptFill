import { CREATOR_SHOWCASE_TAG } from '../constants/styles';

const text = (zhTw, en) => ({ 'zh-tw': zhTw, en });

const projectImage = (repository) =>
  `https://opengraph.githubassets.com/1/yazelin/${repository}`;

const project = ({
  id,
  name,
  description,
  repository,
  cta = text('前往作品', 'Open project'),
  content,
  tags,
}) => ({
  id,
  name,
  content,
  imageUrl: projectImage(repository),
  author: 'Yaze',
  selections: {},
  tags: [CREATOR_SHOWCASE_TAG, ...tags],
  language: 'zh-tw',
  showcase: {
    label: name,
    description,
    url: `https://github.com/yazelin/${repository}`,
    cta,
  },
});

export const CREATOR_SHOWCASE_TEMPLATES = [
  project({
    id: 'tpl_creator_comic_studio',
    name: text('Comic Studio｜角色一致性漫畫分鏡', 'Comic Studio | Consistent Comic Storyboard'),
    description: text(
      '把角色設定、場景與鏡頭填進去，快速玩出一頁漫畫分鏡。',
      'Fill in the character, scene, and camera to build a comic storyboard.'
    ),
    repository: 'comic-studio',
    content: text(
      `### Comic Studio｜角色一致性漫畫分鏡

請以 {{character_originality}} 為核心，製作一頁具有連續敘事感的漫畫分鏡。

- **主角與畫面：** {{subject}}，保持角色外觀、服裝與臉部特徵一致。
- **故事場景：** {{comic_scene}}。
- **畫面風格：** {{art_style}}，搭配 {{lighting}}。
- **分鏡要求：** 清楚安排前景、中景與背景，讓每格畫面都能讀出動作因果。
- **輸出比例：** {{ratio}}。

請輸出適合 Comic Studio 繼續編修的漫畫頁面描述。`,
      `### Comic Studio | Consistent Comic Storyboard

Create a one-page comic storyboard centered on {{character_originality}}.

- **Character and framing:** {{subject}}, keeping the appearance, outfit, and facial features consistent.
- **Story setting:** {{comic_scene}}.
- **Visual style:** {{art_style}} with {{lighting}}.
- **Storyboard direction:** clearly separate foreground, midground, and background so every panel reads as a connected action.
- **Output ratio:** {{ratio}}.

Write a comic-page description ready for further editing in Comic Studio.`
    ),
    tags: ['人物', '創意', '圖表'],
  }),
  project({
    id: 'tpl_creator_neko_tensei',
    name: text('Neko-Tensei｜貓貓異世界漫畫', 'Neko-Tensei | Cats in Another World'),
    description: text(
      '讓貓咪轉生到異世界，填空決定牠今天要遇到的冒險。',
      'Send a cat to another world and decide its next adventure with fill-in prompts.'
    ),
    repository: 'neko-tensei',
    content: text(
      `### Neko-Tensei｜貓貓異世界冒險

一隻 {{subject}} 在 {{comic_scene}} 中醒來，發現自己已轉生為異世界的冒險者。

- **同行夥伴：** {{character_companion}}。
- **世界氛圍：** {{background_style}}，光線使用 {{lighting}}。
- **貓咪表情與動作：** 既可愛又有明確目的，讓每一格都推進故事。
- **漫畫風格：** {{art_style}}，保留角色的貓咪特徵與連續性。
- **畫面比例：** {{ratio}}。

請生成一頁帶有鉤子的異世界貓咪漫畫分鏡。`,
      `### Neko-Tensei | Cats in Another World

A {{subject}} wakes up in {{comic_scene}} and discovers it has reincarnated as an adventurer in another world.

- **Companion:** {{character_companion}}.
- **World mood:** {{background_style}} with {{lighting}}.
- **Cat expression and action:** cute but purposeful, with every panel moving the story forward.
- **Comic style:** {{art_style}}, preserving the cat's identity and continuity.
- **Frame ratio:** {{ratio}}.

Generate a one-page isekai cat comic storyboard with a strong hook.`
    ),
    tags: ['卡通', '寵物', '創意'],
  }),
  project({
    id: 'tpl_creator_line_sticker_studio',
    name: text('LINE 貼圖製造機｜一張圖玩出八張', 'LINE Sticker Studio | Eight Stickers from One Image'),
    description: text(
      '從一個角色設定開始，玩出一組有表情、有動作的 LINE 貼圖。',
      'Start with one character and create a complete LINE sticker set.'
    ),
    repository: 'line-sticker-studio',
    content: text(
      `### LINE 貼圖製造機｜八張貼圖企劃

請以 {{subject}} 作為貼圖主角，設計一組可以直接拿來聊天的八張 LINE 貼圖。

- **角色核心：** {{sticker_core}}。
- **貼圖裝飾：** {{sticker_decor}}。
- **動作節奏：** {{action_pose}}，八張要有明顯區別。
- **背景處理：** {{background_scene}}，主體必須清楚、適合去背。
- **畫面比例：** {{ratio}}。

請為每張貼圖提供：短文字、表情、動作、構圖與生成提示，並維持角色一致。`,
      `### LINE Sticker Studio | Eight-Sticker Plan

Design a chat-ready set of eight LINE stickers starring {{subject}}.

- **Character core:** {{sticker_core}}.
- **Sticker decoration:** {{sticker_decor}}.
- **Action rhythm:** {{action_pose}}, with a clearly different pose for each sticker.
- **Background treatment:** {{background_scene}}, keeping the subject clean and easy to cut out.
- **Frame ratio:** {{ratio}}.

For every sticker, provide a short phrase, expression, action, composition, and generation prompt while keeping the character consistent.`
    ),
    tags: ['卡通', '人物', '創意'],
  }),
  project({
    id: 'tpl_creator_line_chat_maker',
    name: text('LINE Chat Maker｜把對話變成一幕戲', 'LINE Chat Maker | Turn a Chat into a Scene'),
    description: text(
      '填入角色與情境，把腦中的對話變成可分享的 LINE 對話畫面。',
      'Turn a character and situation into a shareable LINE-style chat scene.'
    ),
    repository: 'line-chat-maker',
    content: text(
      `### LINE Chat Maker｜對話劇情設計

請把 {{character_name}} 與 {{character_companion}} 放進一段發生在 {{classic_scene}} 的 LINE 對話。

- **對話主題：** {{social_media}}。
- **情節轉折：** 前三句建立日常感，中段出現誤會，最後留下讓人想回覆的鉤子。
- **畫面氣氛：** {{background_style}}，角色語氣要有鮮明差異。
- **對話格式：** 清楚標示說話者、訊息內容、時間與貼圖反應。

請輸出一段適合 LINE Chat Maker 製作成分享圖片的完整腳本。`,
      `### LINE Chat Maker | Conversation Scene

Place {{character_name}} and {{character_companion}} in a LINE-style conversation taking place in {{classic_scene}}.

- **Conversation topic:** {{social_media}}.
- **Story turn:** establish an everyday mood in the first three messages, introduce a misunderstanding in the middle, and end with a reply-worthy hook.
- **Scene mood:** {{background_style}}, with clearly different voices for each character.
- **Chat format:** label the speaker, message, time, and sticker reactions.

Write a complete script ready to become a shareable image in LINE Chat Maker.`
    ),
    tags: ['創意', '人物'],
  }),
  project({
    id: 'tpl_creator_gemini_watermark_cleaner',
    name: text('圖個清白｜Gemini 圖片清理', 'Clear the Image | Gemini Image Cleanup'),
    description: text(
      '玩完生成範本後，順手把圖片整理成更乾淨的展示版本。',
      'Clean up a generated image before sharing or showcasing it.'
    ),
    repository: 'gemini-watermark-cleaner',
    content: text(
      `### 圖個清白｜圖片整理提示

請處理使用者上傳的圖片，移除畫面中不需要的浮水印、角落標記、介面殘留與多餘文字。

- 保留原始主體、人物特徵、構圖、光影、色彩與材質細節。
- 以周邊合理紋理補回被清除區域，不要新增人物或改變故事內容。
- 輸出乾淨、自然、適合放入作品集或社群分享的圖片。

請優先維持原圖內容，只做必要的畫面清理。`,
      `### Clear the Image | Image Cleanup Prompt

Process the uploaded image and remove unwanted watermarks, corner marks, interface remnants, and stray text.

- Preserve the original subject, character identity, composition, lighting, colors, and material details.
- Reconstruct the removed areas with plausible surrounding texture without adding people or changing the story.
- Output a clean, natural image ready for a portfolio or social post.

Preserve the original image and make only the necessary cleanup.`
    ),
    tags: ['產品', '創意'],
  }),
  project({
    id: 'tpl_creator_cast_lock',
    name: text('Cast Lock｜角色一致性設定', 'Cast Lock | Character Consistency'),
    description: text(
      '先把角色鎖定，再把角色帶進漫畫、貼圖與各種場景。',
      'Lock the character first, then reuse it across comics, stickers, and scenes.'
    ),
    repository: 'cast-lock-skill',
    content: text(
      `### Cast Lock｜角色一致性設定

請以 {{subject}} 為主角，建立一份可重複使用的角色一致性設定。

- **角色身份：** {{character_originality}}。
- **視覺風格：** {{art_style}}。
- **外觀重點：** 固定髮型、臉型、服裝輪廓、配色、辨識性配件與表情語彙。
- **使用場景：** 將角色放入 {{background_style}}，畫面比例為 {{ratio}}。

請先輸出角色鎖定表，再輸出一段可直接交給圖像模型使用的角色提示詞。`,
      `### Cast Lock | Character Consistency

Build a reusable character-consistency sheet for {{subject}}.

- **Character identity:** {{character_originality}}.
- **Visual style:** {{art_style}}.
- **Appearance anchors:** lock the hairstyle, face shape, outfit silhouette, palette, signature accessories, and expression vocabulary.
- **Usage scene:** place the character in {{background_style}} with a {{ratio}} frame.

Output the character lock sheet first, followed by a prompt ready for an image model.`
    ),
    tags: ['人物', '創意'],
  }),
];
