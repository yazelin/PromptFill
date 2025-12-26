// 詞庫與分類組態，供 App 按需引入

export const INITIAL_CATEGORIES = {
  character: { id: "character", label: { "zh-tw": "人物", en: "CHARACTER" }, color: "blue" },
  item: { id: "item", label: { "zh-tw": "物品", en: "ITEM" }, color: "amber" },
  action: { id: "action", label: { "zh-tw": "動作", en: "ACTION" }, color: "rose" },
  location: { id: "location", label: { "zh-tw": "地點", en: "LOCATION" }, color: "emerald" },
  visual: { id: "visual", label: { "zh-tw": "畫面", en: "VISUALS" }, color: "violet" },
  other: { id: "other", label: { "zh-tw": "其他", en: "OTHER" }, color: "slate" }
};

// --- 初始資料組態 (Updated with new banks for examples) ---
export const INITIAL_BANKS = {
  role: {
    label: { "zh-tw": "角色身份", en: "Role" },
    category: "character",
    options: [
      { "zh-tw": "遊戲與動漫概念美術設計大師", en: "Master of Game and Anime Concept Art" },
      { "zh-tw": "資深影視角色原畫師", en: "Senior Film Character Concept Artist" },
      { "zh-tw": "賽博朋克風格設計師", en: "Cyberpunk Style Designer" },
      { "zh-tw": "暗黑幻想風格插畫師", en: "Dark Fantasy Style Illustrator" }
    ]
  },
  subject: {
    label: { "zh-tw": "主體物件", en: "Subject" },
    category: "character",
    options: [
      { "zh-tw": "女性角色", en: "Female Character" },
      { "zh-tw": "男性角色", en: "Male Character" },
      { "zh-tw": "機甲少女", en: "Mecha Girl" },
      { "zh-tw": "怪物擬人化", en: "Monster Anthropomorphism" },
      { "zh-tw": "奇幻種族(精靈/惡魔)", en: "Fantasy Race (Elf/Demon)" }
    ]
  },
  character_companion: {
    label: { "zh-tw": "合影角色", en: "Companion" },
    category: "character",
    options: [
      { "zh-tw": "死侍 (Deadpool)", en: "Deadpool" },
      { "zh-tw": "超人 (Superman)", en: "Superman" },
      { "zh-tw": "愛因斯坦 (Einstein)", en: "Einstein" },
      { "zh-tw": "神奇女俠 (Wonder Woman)", en: "Wonder Woman" },
      { "zh-tw": "鋼鐵俠 (Iron Man)", en: "Iron Man" },
      { "zh-tw": "皮卡丘 (Pikachu)", en: "Pikachu" },
      { "zh-tw": "哥斯拉 (Godzilla)", en: "Godzilla" },
      { "zh-tw": "初音未來 (Hatsune Miku)", en: "Hatsune Miku" }
    ]
  },
  layout_focus: {
    label: { "zh-tw": "構圖重心", en: "Layout Focus" },
    category: "visual",
    options: [
      { "zh-tw": "全身立繪", en: "Full-body Portrait" },
      { "zh-tw": "半身肖像", en: "Half-body Portrait" },
      { "zh-tw": "動態戰鬥姿勢", en: "Dynamic Action Pose" },
      { "zh-tw": "背影回眸", en: "Back View Looking Back" }
    ]
  },
  grid_pose: { 
    label: { "zh-tw": "九宮格動作", en: "Grid Pose" }, 
    category: "action", 
    options: [
      { "zh-tw": "前景手指虛化", en: "Out-of-focus fingers in foreground" },
      { "zh-tw": "目光鎖定鏡頭", en: "Eyes locked on camera" },
      { "zh-tw": "單色下巴託手", en: "Monochrome hand on chin" },
      { "zh-tw": "透過模糊肩帶拍攝", en: "Shooting through blurred shoulder straps" },
      { "zh-tw": "正面特寫陰影", en: "Frontal close-up with shadows" },
      { "zh-tw": "斜角拍攝", en: "Angled shot" },
      { "zh-tw": "雙手置於鎖骨", en: "Hands on collarbones" },
      { "zh-tw": "坐姿半身側面", en: "Seated half-body profile" },
      { "zh-tw": "側面微距水滴", en: "Side macro with water drops" },
      { "zh-tw": "閉眼仰頭享受", en: "Eyes closed looking up in enjoyment" },
      { "zh-tw": "用手遮擋陽光", en: "Shading eyes from sun with hand" },
      { "zh-tw": "回眸一笑", en: "Looking back with a smile" },
      { "zh-tw": "吹泡泡糖特寫", en: "Close-up blowing bubble gum" },
      { "zh-tw": "正面直視鏡頭，表情平靜，眼神清澈", en: "Staring straight at the camera, calm expression, clear eyes" },
      { "zh-tw": "凝視鏡頭，嘴角微微上揚，展現自信", en: "Staring at the camera, slight smile, showing confidence" },
      { "zh-tw": "專注地看著鏡頭，表情柔和，眼神溫和", en: "Looking intently at the camera, soft expression, gentle eyes" },
      { "zh-tw": "側身回望，眼神溫柔，嘴角上揚", en: "Side view looking back, gentle eyes, smiling" },
      { "zh-tw": "轉身回眸，長髮飄逸，笑容自然", en: "Turning back, flowing hair, natural smile" },
      { "zh-tw": "手輕撫下巴，表情優雅，眼神柔和", en: "Hand gently on chin, elegant expression, soft eyes" },
      { "zh-tw": "單手支撐下巴，表情自然，眼神專注", en: "Supporting chin with one hand, natural expression, focused eyes" },
      { "zh-tw": "利用肩帶營造景深，焦點清晰在眼睛", en: "Using shoulder straps for depth of field, focus on eyes" },
      { "zh-tw": "正在吹泡泡糖，表情可愛，眼神專注", en: "Blowing bubble gum, cute expression, focused eyes" },
      { "zh-tw": "側面微距特寫，突出面部輪廓和細節", en: "Side macro close-up, highlighting facial contours and details" }
    ] 
  },
  
  camera_angle: {
    label: { "zh-tw": "拍攝角度", en: "Camera Angle" },
    category: "visual",
    options: [
      { "zh-tw": "臉頰和頸部特寫", en: "Cheek and neck close-up" },
      { "zh-tw": "目光鎖定鏡頭", en: "Eyes locked on camera" },
      { "zh-tw": "單色下巴託手肖像", en: "Monochrome hand on chin portrait" },
      { "zh-tw": "透過模糊的肩帶拍攝", en: "Shooting through blurred shoulder straps" },
      { "zh-tw": "正面特寫，面部陰影交錯", en: "Frontal close-up, interlocking facial shadows" },
      { "zh-tw": "斜角拍攝的原始人像", en: "Raw portrait from an angle" },
      { "zh-tw": "雙手置於鎖骨附近的特寫", en: "Close-up with hands near collarbones" },
      { "zh-tw": "坐姿半身側面照", en: "Seated half-body profile shot" },
      { "zh-tw": "側面微距照", en: "Side macro shot" }
    ]
  },
  connectors: {
    label: { "zh-tw": "視覺引導", en: "Connectors" },
    category: "visual",
    options: [
      { "zh-tw": "手繪箭頭或引導線", en: "Hand-drawn arrows or guide lines" },
      { "zh-tw": "虛線連線", en: "Dashed line connections" },
      { "zh-tw": "彩色光束", en: "Colored light beams" },
      { "zh-tw": "半透明資料線", en: "Translucent data cables" }
    ]
  },
  underwear_style: {
    label: { "zh-tw": "私密內著拆解", en: "Underwear Style" },
    category: "item",
    options: [
      { "zh-tw": "成套的蕾絲內衣褲", en: "Matching lace lingerie set" },
      { "zh-tw": "運動風格純棉內衣", en: "Athletic style cotton underwear" },
      { "zh-tw": "極簡主義絲綢內衣", en: "Minimalist silk lingerie" },
      { "zh-tw": "哥特風格綁帶內衣", en: "Gothic style strappy lingerie" }
    ]
  },
  clothing: {
    label: { "zh-tw": "人物服飾", en: "Clothing" },
    category: "item",
    options: [
      { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
      { "zh-tw": "白色絲綢襯衫", en: "White silk shirt" },
      { "zh-tw": "黑色修身西裝", en: "Black slim-fit suit" },
      { "zh-tw": "戰術機能風外套", en: "Tactical techwear jacket" },
      { "zh-tw": "復古碎花連衣裙", en: "Vintage floral print dress" }
    ]
  },
  clothing_male: {
    label: { "zh-tw": "男性服飾", en: "Male Clothing" },
    category: "item",
    options: [
      { "zh-tw": "剪裁合體的深藍西裝", en: "Tailored deep blue suit" },
      { "zh-tw": "復古棕色皮夾克", en: "Vintage brown leather jacket" },
      { "zh-tw": "戰術背心與工裝褲", en: "Tactical vest and cargo pants" },
      { "zh-tw": "寬鬆的灰色衛衣", en: "Loose grey hoodie" },
      { "zh-tw": "白色亞麻襯衫", en: "White linen shirt" },
      { "zh-tw": "黑色高領毛衣", en: "Black turtleneck sweater" }
    ]
  },
  clothing_female: {
    label: { "zh-tw": "女性服飾", en: "Female Clothing" },
    category: "item",
    options: [
      { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
      { "zh-tw": "絲綢吊帶晚禮服", en: "Silk slip evening gown" },
      { "zh-tw": "機車皮衣與短裙", en: "Biker leather jacket and short skirt" },
      { "zh-tw": "白色蕾絲襯衫", en: "White lace blouse" },
      { "zh-tw": "黑色緊身連體衣", en: "Black tight bodysuit" },
      { "zh-tw": "優雅的香奈兒風套裝", en: "Elegant Chanel-style suit" }
    ]
  },
  expressions: {
    label: { "zh-tw": "表情集", en: "Expressions" },
    category: "character",
    options: [
      { "zh-tw": "瘋狂、病嬌、狂喜", en: "Crazy, Yandere, Ecstatic" },
      { "zh-tw": "羞澀、躲閃、紅暈", en: "Shy, Evasive, Blushing" },
      { "zh-tw": "冷漠、鄙視、高傲", en: "Indifferent, Contemptuous, Proud" },
      { "zh-tw": "痛苦、忍耐、咬唇", en: "Painful, Enduring, Biting lip" }
    ]
  },
  character_originality: {
    label: { "zh-tw": "人物原創性", en: "Character Originality" },
    category: "character",
    options: [
      { "zh-tw": "創作一個原創人物", en: "Create an original character" },
      { "zh-tw": "使用附圖中的人物，確保結果與人物一致性", en: "Use character in attachment, ensure consistency" },
      { "zh-tw": "對知名角色再創作", en: "Re-create a well-known character" }
    ]
  },
  character_groups: {
    label: { "zh-tw": "人物組合", en: "Character Groups" },
    category: "character",
    options: [
      { "zh-tw": "中國古代開國皇帝", en: "Ancient Chinese Founding Emperors" },
      { "zh-tw": "漫威人物", en: "Marvel Characters" },
      { "zh-tw": "金庸古龍武俠人物", en: "Jin Yong & Gu Long Wuxia Characters" },
      { "zh-tw": "三國知名人物", en: "Famous Three Kingdoms Figures" },
      { "zh-tw": "知名軍事家（拿破崙、凱撒、曹操等）", en: "Famous Military Strategists (Napoleon, Caesar, Cao Cao, etc.)" },
      { "zh-tw": "全球知名運動員", en: "World-famous Athletes" },
      { "zh-tw": "中外知名偵探（包青天、狄仁傑、福爾摩斯、柯南等）", en: "Famous Detectives (Bao Zheng, Di Renjie, Sherlock Holmes, Conan, etc.)" },
      { "zh-tw": "動漫遊戲角色", en: "Anime & Game Characters" },
      { "zh-tw": "歷史名人", en: "Historical Celebrities" },
      { "zh-tw": "明星藝人", en: "Stars & Celebrities" }
    ]
  },
  social_media: {
    label: { "zh-tw": "社交媒體", en: "Social Media" },
    category: "location",
    options: [
      { "zh-tw": "微信朋友圈", en: "WeChat Moments" },
      { "zh-tw": "微博", en: "Weibo" },
      { "zh-tw": "Twitter(X)", en: "Twitter(X)" },
      { "zh-tw": "小紅書", en: "Little Red Book (Xiaohongshu)" },
      { "zh-tw": "Instagram", en: "Instagram" },
      { "zh-tw": "Facebook", en: "Facebook" },
      { "zh-tw": "抖音", en: "Douyin" },
      { "zh-tw": "TikTok", en: "TikTok" }
    ]
  },
  texture_zoom: {
    label: { "zh-tw": "材質特寫", en: "Texture Zoom" },
    category: "visual",
    options: [
      { "zh-tw": "凌亂感與私處汗漬", en: "Messiness and sweat stains in private areas" },
      { "zh-tw": "皮膚上的勒痕與紅印", en: "Strangulation marks and red imprints on skin" },
      { "zh-tw": "絲襪的抽絲細節", en: "Snagged details on silk stockings" },
      { "zh-tw": "皮革的光澤與磨損", en: "Luster and wear on leather" }
    ]
  },
  action_detail: {
    label: { "zh-tw": "動作細節", en: "Action Detail" },
    category: "action",
    options: [
      { "zh-tw": "帶著項圈的爬行", en: "Crawling with a collar" },
      { "zh-tw": "雙手被縛在身後的掙扎", en: "Struggling with hands bound behind back" },
      { "zh-tw": "跪姿並展示鞋底", en: "Kneeling and showing soles" },
      { "zh-tw": "拉扯領口的誘惑", en: "Temptation of pulling at the neckline" }
    ]
  },
  special_view: {
    label: { "zh-tw": "特殊視角", en: "Special View" },
    category: "visual",
    options: [
      { "zh-tw": "被踩在腳下的仰視視角", en: "Low-angle view from being stepped on" },
      { "zh-tw": "從門縫中偷窺的視角", en: "Perspective of peeking through a door crack" },
      { "zh-tw": "鏡子反射的背影", en: "Back view reflected in a mirror" },
      { "zh-tw": "監控攝像頭的俯視視角", en: "Top-down view from a security camera" }
    ]
  },
  bag_content: {
    label: { "zh-tw": "隨身包袋", en: "Bag Content" },
    category: "item",
    options: [
      { "zh-tw": "日常通勤包或手拿包", en: "Daily commuter bag or clutch" },
      { "zh-tw": "戰術腿包", en: "Tactical leg bag" },
      { "zh-tw": "可愛的毛絨揹包", en: "Cute plush backpack" },
      { "zh-tw": "透明材質的痛包", en: "Ita-bag made of transparent material" }
    ]
  },
  cosmetics: {
    label: { "zh-tw": "美妝與護理", en: "Cosmetics" },
    category: "item",
    options: [
      { "zh-tw": "常用的化妝品組合", en: "Commonly used cosmetics combo" },
      { "zh-tw": "散落的口紅與粉餅", en: "Scattered lipsticks and compact powder" },
      { "zh-tw": "便攜式補妝鏡", en: "Portable makeup mirror" },
      { "zh-tw": "香水小樣與護手霜", en: "Perfume samples and hand cream" }
    ]
  },
  private_items: {
    label: { "zh-tw": "私密生活物件", en: "Private Items" },
    category: "item",
    options: [
      { "zh-tw": "震動棒與項圈", en: "Vibrator and collar" },
      { "zh-tw": "手銬與眼罩", en: "Handcuffs and eye mask" },
      { "zh-tw": "鞭子與蠟燭", en: "Whip and candle" },
      { "zh-tw": "潤滑液與安全套", en: "Lubricant and condom" }
    ]
  },
  art_style: {
    label: { "zh-tw": "畫風", en: "Art Style" },
    category: "visual",
    options: [
      { "zh-tw": "高質量的 2D 插畫風格", en: "High-quality 2D illustration style" },
      { "zh-tw": "寫實厚塗風格", en: "Realistic impasto style" },
      { "zh-tw": "賽博朋克霓虹風格", en: "Cyberpunk neon style" },
      { "zh-tw": "水彩手繪風格", en: "Watercolor hand-drawn style" }
    ]
  },
  background_style: {
    label: { "zh-tw": "背景風格", en: "Background Style" },
    category: "visual",
    options: [
      { "zh-tw": "漫畫網格筆記本", en: "Manga grid notebook" },
      { "zh-tw": "藍圖設計稿紙", en: "Blueprint design paper" },
      { "zh-tw": "工業風金屬背景", en: "Industrial metal background" },
      { "zh-tw": "極簡純色背景", en: "Minimalist solid color background" }
    ]
  },
  classic_scene: {
    label: { "zh-tw": "經典場景", en: "Classic Scene" },
    category: "location",
    options: [
      { "zh-tw": "黑客帝國", en: "The Matrix" },
      { "zh-tw": "千與千尋", en: "Spirited Away" },
      { "zh-tw": "瘋狂動物城（Zootopia）", en: "Zootopia" },
      { "zh-tw": "生活大爆炸", en: "The Big Bang Theory" },
      { "zh-tw": "霍格沃茨魔法學院", en: "Hogwarts School of Witchcraft and Wizardry" },
      { "zh-tw": "侏羅紀公園叢林入口", en: "Jurassic Park Jungle Entrance" },
      { "zh-tw": "星球大戰塔圖因集市", en: "Star Wars Tatooine Market" },
      { "zh-tw": "指環王夏爾", en: "The Lord of the Rings - The Shire" },
      { "zh-tw": "權力的遊戲君臨城城牆", en: "Game of Thrones - King's Landing Walls" },
      { "zh-tw": "盜夢空間摺疊城市", en: "Inception - Folding City" },
      { "zh-tw": "賽博朋克霓虹夜市", en: "Cyberpunk Neon Night Market" },
      { "zh-tw": "未來城市空港樞紐", en: "Future City Spaceport Hub" }
    ]
  },
  position: {
    label: { "zh-tw": "文字位置", en: "Text Position" },
    category: "location",
    options: [
      { "zh-tw": "頂部中央", en: "Top Center" },
      { "zh-tw": "底部中央", en: "Bottom Center" },
      { "zh-tw": "左上角偏中", en: "Top Left biased center" },
      { "zh-tw": "右上角偏中", en: "Top Right biased center" },
      { "zh-tw": "畫面中上方懸浮", en: "Floating in top middle" }
    ]
  },
  render_style: {
    label: { "zh-tw": "渲染風格", en: "Render Style" },
    category: "visual",
    options: [
      { "zh-tw": "Octane Render 和 Cinema 4D", en: "Octane Render and Cinema 4D" },
      { "zh-tw": "樂高積木風格", en: "LEGO Block Style" },
      { "zh-tw": "Unreal Engine 5 寫實光追", en: "Unreal Engine 5 Realistic Ray Tracing" },
      { "zh-tw": "Pixar 卡通渲染", en: "Pixar Cartoon Rendering" },
      { "zh-tw": "黏土動畫質感", en: "Claymation Texture" },
      { "zh-tw": "手辦級實體渲染", en: "Figurine-level Physical Rendering" },
      { "zh-tw": "3D像素風格", en: "3D Pixel Art Style" },
      { "zh-tw": "手工毛線針織風格", en: "Hand-knitted Yarn Style" },
      { "zh-tw": "毛線針織", en: "Knitted Yarn" },
      { "zh-tw": "毛氈與粘土", en: "Felt and Clay" },
      { "zh-tw": "紙殼紙板", en: "Cardboard" }
    ]
  },
  show_name: {
    label: { "zh-tw": "劇名", en: "Show Name" },
    category: "other",
    options: [
      { "zh-tw": "泰坦尼克號", en: "Titanic" },
      { "zh-tw": "龍貓", en: "My Neighbor Totoro" },
      { "zh-tw": "哈利·波特", en: "Harry Potter" },
      { "zh-tw": "星際穿越", en: "Interstellar" },
      { "zh-tw": "千與千尋", en: "Spirited Away" },
      { "zh-tw": "復仇者聯盟", en: "The Avengers" }
    ]
  },
  character_name: {
    label: { "zh-tw": "角色", en: "Character Name" },
    category: "character",
    options: [
      { "zh-tw": "Jack and Rose", en: "Jack and Rose" },
      { "zh-tw": "龍貓", en: "Totoro" },
      { "zh-tw": "哈利·波特", en: "Harry Potter" },
      { "zh-tw": "庫珀", en: "Cooper" },
      { "zh-tw": "千尋", en: "Chihiro" },
      { "zh-tw": "綠巨人", en: "Hulk" },
      { "zh-tw": "薩諾斯", en: "Thanos" },
      { "zh-tw": "鋼鐵俠", en: "Iron Man" }
    ]
  },
  art_type: {
    label: { "zh-tw": "藝術門類", en: "Art Type" },
    category: "other",
    options: [
      { "zh-tw": "美術學", en: "Fine Arts" },
      { "zh-tw": "時尚學", en: "Fashion Studies" },
      { "zh-tw": "建築學", en: "Architecture" },
      { "zh-tw": "攝影學", en: "Photography" },
      { "zh-tw": "雕塑藝術", en: "Sculpture Art" },
      { "zh-tw": "工業設計", en: "Industrial Design" }
    ]
  },
  company: {
    label: { "zh-tw": "公司", en: "Company" },
    category: "location",
    options: [
      { "zh-tw": "Apple", en: "Apple" },
      { "zh-tw": "任天堂（Nintendo）", en: "Nintendo" },
      { "zh-tw": "SONY", en: "SONY" },
      { "zh-tw": "宜家（IKEA）", en: "IKEA" }
    ]
  },
  ratio: {
    label: { "zh-tw": "畫幅比例", en: "Aspect Ratio" },
    category: "visual",
    options: [
      { "zh-tw": "3:4豎構圖", en: "3:4 Vertical" },
      { "zh-tw": "9:16豎構圖", en: "9:16 Vertical" },
      { "zh-tw": "1:1", en: "1:1 Square" },
      { "zh-tw": "4:3橫構圖", en: "4:3 Horizontal" },
      { "zh-tw": "16:9橫構圖", en: "16:9 Horizontal" },
      { "zh-tw": "圓形畫幅", en: "Circular Aspect Ratio" }
    ]
  },
  // Fashion Template additions
  fashion_deconstruct: {
    label: { "zh-tw": "穿搭解構", en: "Fashion Deconstruct" },
    category: "item",
    options: [
      { "zh-tw": "整齊摺疊的外套和精緻的高跟鞋", en: "Neatly folded coat and exquisite high heels" },
      { "zh-tw": "散落的配飾與包包", en: "Scattered accessories and bags" },
      { "zh-tw": "懸掛的襯衫與百褶裙", en: "Hanging shirt and pleated skirt" },
      { "zh-tw": "堆疊的金屬配飾與皮帶", en: "Stacked metal accessories and belts" }
    ]
  },
  toy_companion: {
    label: { "zh-tw": "互動公仔", en: "Toy Companion" },
    category: "item",
    options: [
      { "zh-tw": "Labubu藝術公仔", en: "Labubu Art Toy" },
      { "zh-tw": "暴力熊積木熊", en: "Bearbrick" },
      { "zh-tw": "泡泡瑪特Molly", en: "Pop Mart Molly" },
      { "zh-tw": "復古泰迪熊", en: "Vintage Teddy Bear" },
      { "zh-tw": "賽博朋克機械狗", en: "Cyberpunk Robo-Dog" }
    ]
  },
  
  // Old ones preserved for compatibility or other templates
  lens_param: {
    label: { "zh-tw": "九宮格鏡頭", en: "Lens Parameter" },
    category: "visual",
    options: [
      { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      { "zh-tw": "85mm, f/2.0", en: "85mm, f/2.0" },
      { "zh-tw": "50mm, f/2.2", en: "50mm, f/2.2" },
      { "zh-tw": "50mm, f/2.5", en: "50mm, f/2.5" },
      { "zh-tw": "50mm, f/3.2", en: "50mm, f/3.2" },
      { "zh-tw": "35mm, f/4.5", en: "35mm, f/4.5" },
      { "zh-tw": "85mm, f/1.9", en: "85mm, f/1.9" },
      { "zh-tw": "50mm, f/1.8", en: "50mm, f/1.8" },
      { "zh-tw": "85mm, f/2.2", en: "85mm, f/2.2" },
      { "zh-tw": "50mm, f/2.0", en: "50mm, f/2.0" }
    ]
  },
  lighting: {
    label: { "zh-tw": "燈光佈置", en: "Lighting" },
    category: "visual",
    options: [
      { "zh-tw": "大型頂置柔光箱，輕微側向反射光", en: "Large overhead softbox, slight side reflection" },
      { "zh-tw": "自然窗光", en: "Natural window light" },
      { "zh-tw": "倫勃朗光", en: "Rembrandt lighting" },
      { "zh-tw": "賽博朋克霓虹光", en: "Cyberpunk neon lighting" },
      { "zh-tw": "影棚硬光", en: "Studio hard light" }
    ]
  },
  sticker_core: {
    label: { "zh-tw": "核心貼紙", en: "Sticker Core" },
    category: "item",
    options: [
      { "zh-tw": "使用者穿著甜美約會裝的照片", en: "Photo of user in a sweet date outfit" },
      { "zh-tw": "復古搖滾樂隊T恤穿搭", en: "Vintage rock band T-shirt outfit" },
      { "zh-tw": "日系JK制服穿搭", en: "Japanese JK uniform outfit" },
      { "zh-tw": "極簡職場通勤裝", en: "Minimalist office commuter outfit" }
    ]
  },
  sticker_decor: {
    label: { "zh-tw": "裝飾元素", en: "Sticker Decor" },
    category: "item",
    options: [
      { "zh-tw": "手繪愛心、閃光符號", en: "Hand-drawn hearts, sparkle symbols" },
      { "zh-tw": "星星、月亮貼紙", en: "Star and moon stickers" },
      { "zh-tw": "復古郵票與票據", en: "Vintage stamps and bills" },
      { "zh-tw": "賽博故障風Glitch元素", en: "Cyberpunk glitch elements" }
    ]
  },
  action_pose: {
    label: { "zh-tw": "互動姿勢", en: "Action Pose" },
    category: "action",
    options: [
      { "zh-tw": "用手指在男人腦後比劃'兔耳朵'", en: "Using fingers to make 'bunny ears' behind the man's head" },
      { "zh-tw": "勾肩搭背比V字手勢", en: "Arm around shoulder making V sign" },
      { "zh-tw": "互相指著對方大笑", en: "Pointing at each other and laughing" },
      { "zh-tw": "背靠背酷炫站姿", en: "Cool back-to-back standing pose" }
    ]
  },
  background_scene: {
    label: { "zh-tw": "背景場景", en: "Background Scene" },
    category: "location",
    options: [
      { "zh-tw": "俯瞰紐約市的復仇者大廈樓頂", en: "Rooftop of Avengers Tower overlooking New York City" },
      { "zh-tw": "廢棄的工業倉庫", en: "Abandoned industrial warehouse" },
      { "zh-tw": "熙熙攘攘的時代廣場", en: "Bustling Times Square" },
      { "zh-tw": "外太空飛船內部", en: "Inside a space-age spaceship" }
    ]
  },

  // Fish Eye Urban Template additions
  lens_type: {
    label: { "zh-tw": "鏡頭型別", en: "Lens Type" },
    category: "visual",
    options: [
      { "zh-tw": "標準鏡頭", en: "Standard Lens" },
      { "zh-tw": "廣角鏡頭", en: "Wide-angle Lens" },
      { "zh-tw": "長焦鏡頭", en: "Telephoto Lens" },
      { "zh-tw": "極端魚眼鏡頭", en: "Extreme Fisheye Lens" },
      { "zh-tw": "移軸鏡頭", en: "Tilt-shift Lens" },
      { "zh-tw": "微距鏡頭", en: "Macro Lens" }
    ]
  },
  school_uniform: {
    label: { "zh-tw": "校服樣式", en: "School Uniform" },
    category: "item",
    options: [
      { "zh-tw": "傳統水手服校服", en: "Traditional Sailor Uniform" },
      { "zh-tw": "灰色開衫和格子裙校服", en: "Grey cardigan and plaid skirt uniform" },
      { "zh-tw": "英倫風百褶裙校服", en: "British style pleated skirt uniform" },
      { "zh-tw": "日系JK制服", en: "Japanese JK Uniform" },
      { "zh-tw": "運動校服", en: "Tracksuit School Uniform" },
      { "zh-tw": "冬季大衣校服", en: "Winter coat school uniform" }
    ]
  },
  urban_location: {
    label: { "zh-tw": "城市地點", en: "Urban Location" },
    category: "location",
    options: [
      { "zh-tw": "澀谷十字路口", en: "Shibuya Crossing" },
      { "zh-tw": "東京塔下", en: "Under Tokyo Tower" },
      { "zh-tw": "時代廣場", en: "Times Square" },
      { "zh-tw": "埃菲爾鐵塔旁", en: "By the Eiffel Tower" },
      { "zh-tw": "中央公園", en: "Central Park" },
      { "zh-tw": "北京王府井", en: "Beijing Wangfujing" },
      { "zh-tw": "上海外灘", en: "Shanghai Bund" },
      { "zh-tw": "香港維多利亞港", en: "Hong Kong Victoria Harbour" }
    ]
  },
  dynamic_action: {
    label: { "zh-tw": "動態動作", en: "Dynamic Action" },
    category: "action",
    options: [
      { "zh-tw": "一隻手誇張地伸向鏡頭前景", en: "One hand exaggeratedly reaching towards the foreground" },
      { "zh-tw": "雙臂張開擁抱天空", en: "Arms open wide embracing the sky" },
      { "zh-tw": "旋轉跳躍", en: "Spinning and jumping" },
      { "zh-tw": "奔跑前進", en: "Running forward" },
      { "zh-tw": "蹲下撿拾", en: "Squatting down to pick up" },
      { "zh-tw": "揮手致意", en: "Waving greeting" },
      { "zh-tw": "舞蹈姿勢", en: "Dance pose" },
      { "zh-tw": "比心手勢", en: "Heart gesture" }
    ]
  },
  fingernail_detail: {
    label: { "zh-tw": "手指甲細節", en: "Fingernail Detail" },
    category: "visual",
    options: [
      { "zh-tw": "手指甲清晰可見", en: "Fingernails clearly visible" },
      { "zh-tw": "塗有鮮豔指甲油", en: "Coated with bright nail polish" },
      { "zh-tw": "自然裸色指甲", en: "Natural nude nails" },
      { "zh-tw": "裝飾有鑽石指甲", en: "Decorated with diamond nails" },
      { "zh-tw": "漸變色指甲", en: "Gradient nails" },
      { "zh-tw": "藝術圖案指甲", en: "Artistic pattern nails" }
    ]
  },
  building_cluster: {
    label: { "zh-tw": "建築群", en: "Building Cluster" },
    category: "location",
    options: [
      { "zh-tw": "扭曲的澀谷109大樓和其他建築林立", en: "Distorted Shibuya 109 building and other forest of buildings" },
      { "zh-tw": "紐約摩天大樓群", en: "New York skyscraper cluster" },
      { "zh-tw": "巴黎古典建築", en: "Parisian classical architecture" },
      { "zh-tw": "上海現代高層建築", en: "Shanghai modern high-rise buildings" },
      { "zh-tw": "東京傳統寺廟與現代建築混合", en: "Mix of traditional Tokyo temples and modern architecture" },
      { "zh-tw": "倫敦金融城高樓", en: "City of London high-rises" }
    ]
  },
  monster_element: {
    label: { "zh-tw": "怪獸元素", en: "Monster Element" },
    category: "character",
    options: [
      { "zh-tw": "巨大的粉色和藍色漸變卡通怪獸", en: "Giant pink and blue gradient cartoon monster" },
      { "zh-tw": "機械機器人怪獸", en: "Mecha robot monster" },
      { "zh-tw": "神話傳說中的龍", en: "Legendary dragon" },
      { "zh-tw": "外星生物", en: "Alien creature" },
      { "zh-tw": "海洋深淵巨獸", en: "Deep sea behemoth" },
      { "zh-tw": "森林精靈", en: "Forest elf" }
    ]
  },
  monster_feature: {
    label: { "zh-tw": "怪獸特徵", en: "Monster Feature" },
    category: "character",
    options: [
      { "zh-tw": "巨大的觸手和角", en: "Giant tentacles and horns" },
      { "zh-tw": "鋒利的爪子和牙齒", en: "Sharp claws and teeth" },
      { "zh-tw": "多彩的翅膀", en: "Colorful wings" },
      { "zh-tw": "發光的眼睛", en: "Glowing eyes" },
      { "zh-tw": "金屬外殼", en: "Metal shell" },
      { "zh-tw": "藤蔓植物", en: "Vining plants" }
    ]
  },
  distorted_city: {
    label: { "zh-tw": "扭曲城市", en: "Distorted City" },
    category: "location",
    options: [
      { "zh-tw": "扭曲的城市景觀", en: "Distorted urban landscape" },
      { "zh-tw": "鏡面反射的城市", en: "Specularly reflected city" },
      { "zh-tw": "夢幻泡泡中的城市", en: "City inside dream bubbles" },
      { "zh-tw": "像素化的城市", en: "Pixelated city" },
      { "zh-tw": "水墨畫風格的城市", en: "Ink-wash style city" },
      { "zh-tw": "未來科幻城市", en: "Future sci-fi city" }
    ]
  },
  lighting_atmosphere: {
    label: { "zh-tw": "燈光氛圍", en: "Lighting Atmosphere" },
    category: "visual",
    options: [
      { "zh-tw": "陽光明媚", en: "Sunny" },
      { "zh-tw": "月光皎潔", en: "Bright moonlight" },
      { "zh-tw": "霓虹燈閃爍", en: "Flickering neon lights" },
      { "zh-tw": "燭光搖曳", en: "Flickering candlelight" },
      { "zh-tw": "舞臺聚光燈", en: "Stage spotlights" },
      { "zh-tw": "自然晨光", en: "Natural morning light" },
      { "zh-tw": "夕陽餘暉", en: "Sunset afterglow" },
      { "zh-tw": "室內暖光", en: "Indoor warm light" }
    ]
  },
  shadow_contrast: {
    label: { "zh-tw": "陰影對比", en: "Shadow Contrast" },
    category: "visual",
    options: [
      { "zh-tw": "光影對比強烈", en: "Strong light-shadow contrast" },
      { "zh-tw": "柔和的陰影", en: "Soft shadows" },
      { "zh-tw": "戲劇性陰影", en: "Dramatic shadows" },
      { "zh-tw": "無陰影平光", en: "No-shadow flat lighting" },
      { "zh-tw": "輪廓光", en: "Rim lighting" },
      { "zh-tw": "背光剪影", en: "Backlit silhouette" }
    ]
  },
  travel_location: {
    label: { "zh-tw": "旅遊地點", en: "Travel Location" },
    category: "location",
    options: [
      { "zh-tw": "西藏拉薩布達拉宮", en: "Potala Palace, Lhasa, Tibet" },
      { "zh-tw": "湖南林中小寨", en: "Forest Village in Hunan" },
      { "zh-tw": "東北雪鄉", en: "Snow Village in Northeast China" },
      { "zh-tw": "老北京胡同", en: "Old Beijing Hutongs" },
      { "zh-tw": "雲南大理洱海", en: "Erhai Lake, Dali, Yunnan" },
      { "zh-tw": "新疆喀納斯湖", en: "Kanas Lake, Xinjiang" },
      { "zh-tw": "四川九寨溝", en: "Jiuzhaigou, Sichuan" },
      { "zh-tw": "桂林灕江", en: "Li River, Guilin" },
      { "zh-tw": "張家界天門山", en: "Tianmen Mountain, Zhangjiajie" },
      { "zh-tw": "敦煌莫高窟", en: "Mogao Grottoes, Dunhuang" },
      { "zh-tw": "內蒙古呼倫貝爾草原", en: "Hulunbuir Grassland, Inner Mongolia" },
      { "zh-tw": "臺灣日月潭", en: "Sun Moon Lake, Taiwan" }
    ]
  },
  comic_scene: {
    label: { "zh-tw": "漫畫場景", en: "Comic Scene" },
    category: "location",
    options: [
      { "zh-tw": "唯美的臥室", en: "Beautiful bedroom" },
      { "zh-tw": "繁華的街頭", en: "Busy street" },
      { "zh-tw": "溫馨的教室", en: "Cozy classroom" },
      { "zh-tw": "現代咖啡廳", en: "Modern cafe" },
      { "zh-tw": "公園長椅", en: "Park bench" },
      { "zh-tw": "圖書館角落", en: "Library corner" },
      { "zh-tw": "藝術工作室", en: "Art studio" },
      { "zh-tw": "屋頂天台", en: "Rooftop" },
      { "zh-tw": "火車站月臺", en: "Railway platform" },
      { "zh-tw": "書店一角", en: "Bookstore corner" }
    ]
  },
  designer: {
    label: { "zh-tw": "設計師", en: "Designer" },
    category: "character",
    options: [
      { "zh-tw": "安東尼·高迪 (Antoni Gaudí)", en: "Antoni Gaudí" },
      { "zh-tw": "Jonathan Ive (Jony Ive)", en: "Jonathan Ive" },
      { "zh-tw": "Gio Ponti", en: "Gio Ponti" },
      { "zh-tw": "迪特·拉姆斯 (Dieter Rams)", en: "Dieter Rams" },
      { "zh-tw": "菲利普·斯塔克 (Philippe Starck)", en: "Philippe Starck" },
      { "zh-tw": "原研哉 (Kenya Hara)", en: "Kenya Hara" },
      { "zh-tw": "深澤直人 (Naoto Fukasawa)", en: "Naoto Fukasawa" },
      { "zh-tw": "扎哈·哈迪德 (Zaha Hadid)", en: "Zaha Hadid" },
      { "zh-tw": "馬克·紐森 (Marc Newson)", en: "Marc Newson" },
      { "zh-tw": "湯姆·迪克森 (Tom Dixon)", en: "Tom Dixon" },
      { "zh-tw": "賈斯珀·莫里森 (Jasper Morrison)", en: "Jasper Morrison" },
      { "zh-tw": "康斯坦丁·葛切奇 (Konstantin Grcic)", en: "Konstantin Grcic" }
    ]
  },
  design_item: {
    label: { "zh-tw": "設計物品", en: "Design Item" },
    category: "item",
    options: [
      { "zh-tw": "無人機", en: "Drone" },
      { "zh-tw": "檯球桌", en: "Pool table" },
      { "zh-tw": "拖拉機", en: "Tractor" },
      { "zh-tw": "機械鍵盤", en: "Mechanical keyboard" },
      { "zh-tw": "復古打字機", en: "Vintage typewriter" },
      { "zh-tw": "單反相機", en: "DSLR camera" },
      { "zh-tw": "掃地機器人", en: "Robot vacuum" },
      { "zh-tw": "咖啡機", en: "Coffee machine" },
      { "zh-tw": "檯燈", en: "Desk lamp" },
      { "zh-tw": "椅子", en: "Chair" },
      { "zh-tw": "音響系統", en: "Sound system" },
      { "zh-tw": "手錶", en: "Watch" },
      { "zh-tw": "自行車", en: "Bicycle" },
      { "zh-tw": "電動滑板車", en: "Electric scooter" },
      { "zh-tw": "藍牙耳機", en: "Bluetooth headphones" },
      { "zh-tw": "智慧音箱", en: "Smart speaker" },
      { "zh-tw": "剃鬚刀", en: "Razor" },
      { "zh-tw": "電風扇", en: "Electric fan" },
      { "zh-tw": "水壺", en: "Kettle" }
    ]
  },
  rain_shape: {
    label: { "zh-tw": "雨水形象", en: "Rain Shape" },
    category: "visual",
    options: [
      { "zh-tw": "芭蕾舞者", en: "Ballerina" },
      { "zh-tw": "飛舞的蝴蝶", en: "Flying butterfly" },
      { "zh-tw": "奔跑的駿馬", en: "Running steed" },
      { "zh-tw": "綻放的蓮花", en: "Blooming lotus" },
      { "zh-tw": "輕盈的羽毛", en: "Light feather" },
      { "zh-tw": "靈動的音符", en: "Lively musical note" }
    ]
  },
  fruit: {
    label: { "zh-tw": "水果", en: "Fruit" },
    category: "item",
    options: [
      { "zh-tw": "獼猴桃", en: "Kiwi" },
      { "zh-tw": "橙子", en: "Orange" },
      { "zh-tw": "蘋果", en: "Apple" },
      { "zh-tw": "草莓", en: "Strawberry" },
      { "zh-tw": "檸檬", en: "Lemon" },
      { "zh-tw": "葡萄", en: "Grape" },
      { "zh-tw": "芒果", en: "Mango" },
      { "zh-tw": "椰子", en: "Coconut" }
    ]
  },
  jewelry_style: {
    label: { "zh-tw": "珠寶樣式", en: "Jewelry Style" },
    category: "item",
    options: [
      { "zh-tw": "精美的金色背鏈", en: "Fine gold back necklace" },
      { "zh-tw": "簡約銀色鏈條", en: "Minimalist silver chain" },
      { "zh-tw": "珍珠身體鏈", en: "Pearl body chain" },
      { "zh-tw": "鑽石露背項鍊", en: "Diamond back drop necklace" },
      { "zh-tw": "祖母綠吊墜背鏈", en: "Emerald pendant back necklace" }
    ]
  },
  flower_type: {
    label: { "zh-tw": "花卉品種", en: "Flower Type" },
    category: "item",
    options: [
      { "zh-tw": "一束深紅色玫瑰", en: "A bouquet of deep red roses" },
      { "zh-tw": "優雅的白色馬蹄蓮", en: "Elegant white calla lilies" },
      { "zh-tw": "淡粉色牡丹", en: "Pale pink peonies" },
      { "zh-tw": "名貴的深色蘭花", en: "Exotic dark orchids" },
      { "zh-tw": "乾枯的桉樹葉", en: "Dried eucalyptus leaves" },
      { "zh-tw": "鮮豔的向日葵", en: "Vibrant sunflowers" }
    ]
  },
  "flower_type": {
    "label": { "zh-tw": "花卉類型", "en": "Flower Type" },
    "category": "item",
    "options": [
      { "zh-tw": "白玫瑰", "en": "White Rose" },
      { "zh-tw": "紅玫瑰", "en": "Red Rose" },
      { "zh-tw": "百合", "en": "Lily" },
      { "zh-tw": "鬱金香", "en": "Tulip" },
      { "zh-tw": "牡丹", "en": "Peony" },
      { "zh-tw": "蘭花", "en": "Orchid" },
      { "zh-tw": "向日葵", "en": "Sunflower" },
      { "zh-tw": "櫻花", "en": "Cherry Blossom" },
      { "zh-tw": "繡球花", "en": "Hydrangea" },
      { "zh-tw": "薰衣草", "en": "Lavender" }
    ]
  },
  "business_type": {
    "label": { "zh-tw": "商業類型", "en": "Business Type" },
    "category": "other",
    "options": [
      { "zh-tw": "餐廳", "en": "Restaurant" },
      { "zh-tw": "咖啡廳", "en": "Café" },
      { "zh-tw": "美髮沙龍", "en": "Hair Salon" },
      { "zh-tw": "健身房", "en": "Gym" },
      { "zh-tw": "烘焙坊", "en": "Bakery" },
      { "zh-tw": "花店", "en": "Flower Shop" },
      { "zh-tw": "服飾店", "en": "Clothing Store" },
      { "zh-tw": "書店", "en": "Bookstore" },
      { "zh-tw": "寵物店", "en": "Pet Shop" },
      { "zh-tw": "美甲店", "en": "Nail Salon" }
    ]
  },
  "pet_type": {
    "label": { "zh-tw": "寵物類型", "en": "Pet Type" },
    "category": "character",
    "options": [
      { "zh-tw": "狗", "en": "Dog" },
      { "zh-tw": "貓", "en": "Cat" },
      { "zh-tw": "兔子", "en": "Rabbit" },
      { "zh-tw": "倉鼠", "en": "Hamster" },
      { "zh-tw": "鸚鵡", "en": "Parrot" },
      { "zh-tw": "金魚", "en": "Goldfish" },
      { "zh-tw": "烏龜", "en": "Turtle" },
      { "zh-tw": "柴犬", "en": "Shiba Inu" },
      { "zh-tw": "柯基", "en": "Corgi" },
      { "zh-tw": "布偶貓", "en": "Ragdoll Cat" }
    ]
  },
  "garment_type": {
    "label": { "zh-tw": "服裝類型", "en": "Garment Type" },
    "category": "item",
    "options": [
      { "zh-tw": "T恤", "en": "T-shirt" },
      { "zh-tw": "夾克", "en": "Jacket" },
      { "zh-tw": "連帽衫", "en": "Hoodie" },
      { "zh-tw": "襯衫", "en": "Shirt" },
      { "zh-tw": "洋裝", "en": "Dress" },
      { "zh-tw": "外套", "en": "Coat" },
      { "zh-tw": "毛衣", "en": "Sweater" },
      { "zh-tw": "背心", "en": "Vest" },
      { "zh-tw": "風衣", "en": "Trench Coat" },
      { "zh-tw": "運動衫", "en": "Sweatshirt" }
    ]
  },
  "source_language": {
    "label": { "zh-tw": "來源語言", "en": "Source Language" },
    "category": "other",
    "options": [
      { "zh-tw": "日文", "en": "Japanese" },
      { "zh-tw": "英文", "en": "English" },
      { "zh-tw": "韓文", "en": "Korean" },
      { "zh-tw": "中文", "en": "Chinese" },
      { "zh-tw": "法文", "en": "French" },
      { "zh-tw": "西班牙文", "en": "Spanish" }
    ]
  },
  "target_language": {
    "label": { "zh-tw": "目標語言", "en": "Target Language" },
    "category": "other",
    "options": [
      { "zh-tw": "繁體中文", "en": "Traditional Chinese" },
      { "zh-tw": "簡體中文", "en": "Simplified Chinese" },
      { "zh-tw": "英文", "en": "English" },
      { "zh-tw": "日文", "en": "Japanese" },
      { "zh-tw": "韓文", "en": "Korean" },
      { "zh-tw": "法文", "en": "French" }
    ]
  },
  "product": {
    "label": { "zh-tw": "產品", "en": "Product" },
    "category": "item",
    "options": [
      { "zh-tw": "麥當勞薯條盒", "en": "McDonald's French Fries Box" },
      { "zh-tw": "麥當勞漢堡", "en": "McDonald's Burger" },
      { "zh-tw": "星巴克咖啡杯", "en": "Starbucks Coffee Cup" },
      { "zh-tw": "可口可樂瓶", "en": "Coca-Cola Bottle" },
      { "zh-tw": "Apple iPhone", "en": "Apple iPhone" },
      { "zh-tw": "Nike 運動鞋", "en": "Nike Sneakers" },
      { "zh-tw": "樂高積木", "en": "LEGO Bricks" },
      { "zh-tw": "任天堂 Switch", "en": "Nintendo Switch" },
      { "zh-tw": "IKEA 購物袋", "en": "IKEA Shopping Bag" },
      { "zh-tw": "Chanel 香水瓶", "en": "Chanel Perfume Bottle" },
      { "zh-tw": "Hermès 柏金包", "en": "Hermès Birkin Bag" },
      { "zh-tw": "Tesla 電動車", "en": "Tesla Electric Car" },
      { "zh-tw": "Dyson 吸塵器", "en": "Dyson Vacuum" },
      { "zh-tw": "Supreme Box Logo T恤", "en": "Supreme Box Logo Tee" }
    ]
  },
  "bottle_shape": {
    "label": { "zh-tw": "瓶身造型", "en": "Bottle Shape" },
    "category": "item",
    "options": [
      { "zh-tw": "經典方瓶", "en": "Classic Square Bottle" },
      { "zh-tw": "優雅圓瓶", "en": "Elegant Round Bottle" },
      { "zh-tw": "橢圓流線瓶", "en": "Oval Streamlined Bottle" },
      { "zh-tw": "錐形高挑瓶", "en": "Tapered Tall Bottle" },
      { "zh-tw": "不規則藝術瓶", "en": "Irregular Art Bottle" },
      { "zh-tw": "復古藥瓶造型", "en": "Vintage Apothecary Style" },
      { "zh-tw": "極簡圓柱瓶", "en": "Minimalist Cylinder" },
      { "zh-tw": "鑽石切割瓶", "en": "Diamond Cut Bottle" }
    ]
  },
  "liquid_color": {
    "label": { "zh-tw": "液體顏色", "en": "Liquid Color" },
    "category": "visual",
    "options": [
      { "zh-tw": "琥珀色", "en": "Amber" },
      { "zh-tw": "透明無色", "en": "Clear/Colorless" },
      { "zh-tw": "淡粉色", "en": "Light Pink" },
      { "zh-tw": "金色", "en": "Gold" },
      { "zh-tw": "淡紫色", "en": "Light Purple" },
      { "zh-tw": "蜂蜜色", "en": "Honey" },
      { "zh-tw": "玫瑰金", "en": "Rose Gold" },
      { "zh-tw": "淡藍色", "en": "Light Blue" }
    ]
  },
  "label_description": {
    "label": { "zh-tw": "標籤描述", "en": "Label Description" },
    "category": "item",
    "options": [
      { "zh-tw": "金色標籤", "en": "Gold Label" },
      { "zh-tw": "銀色標籤", "en": "Silver Label" },
      { "zh-tw": "黑色極簡標籤", "en": "Black Minimalist Label" },
      { "zh-tw": "復古風格標籤", "en": "Vintage Style Label" },
      { "zh-tw": "透明浮雕標籤", "en": "Transparent Embossed Label" },
      { "zh-tw": "手寫書法標籤", "en": "Handwritten Calligraphy Label" },
      { "zh-tw": "霧面啞光標籤", "en": "Matte Finish Label" },
      { "zh-tw": "燙金壓印標籤", "en": "Gold Foil Stamped Label" }
    ]
  },
  "product_name": {
    "label": { "zh-tw": "產品名稱", "en": "Product Name" },
    "category": "item",
    "options": [
      { "zh-tw": "N°5 香水", "en": "N°5 Perfume" },
      { "zh-tw": "Miss Dior 花漾迪奧", "en": "Miss Dior" },
      { "zh-tw": "Jo Malone 英國梨與小蒼蘭", "en": "Jo Malone English Pear & Freesia" },
      { "zh-tw": "YSL 黑鴉片", "en": "YSL Black Opium" },
      { "zh-tw": "Gucci Bloom 花悅", "en": "Gucci Bloom" },
      { "zh-tw": "Tom Ford 烏木沉香", "en": "Tom Ford Oud Wood" },
      { "zh-tw": "Hermès 大地", "en": "Hermès Terre d'Hermès" },
      { "zh-tw": "Creed 銀色山泉", "en": "Creed Silver Mountain Water" }
    ]
  },
  "caption": {
    "label": { "zh-tw": "迷因文字", "en": "Meme Caption" },
    "category": "other",
    "options": [
      { "zh-tw": "好傻喔", "en": "So silly" },
      { "zh-tw": "不想上班", "en": "Don't want to work" },
      { "zh-tw": "為什麼又是我", "en": "Why me again" },
      { "zh-tw": "今天也很累", "en": "Tired again today" },
      { "zh-tw": "算了不管了", "en": "Whatever, I give up" },
      { "zh-tw": "有事嗎？", "en": "Got a problem?" },
      { "zh-tw": "就這樣吧", "en": "That's it then" },
      { "zh-tw": "我好可愛", "en": "I'm so cute" },
      { "zh-tw": "不要吵我", "en": "Leave me alone" },
      { "zh-tw": "開心開心", "en": "Happy happy" }
    ]
  },
  "main_title": {
    "label": { "zh-tw": "主標題", "en": "Main Title" },
    "category": "other",
    "options": [
      { "zh-tw": "秋季限定", "en": "Autumn Limited Edition" },
      { "zh-tw": "新品上市", "en": "New Arrival" },
      { "zh-tw": "週年慶典", "en": "Anniversary Sale" },
      { "zh-tw": "限時特惠", "en": "Limited Time Offer" },
      { "zh-tw": "夏日清涼", "en": "Summer Cool" },
      { "zh-tw": "冬季暖心", "en": "Winter Warmth" },
      { "zh-tw": "春季新風尚", "en": "Spring New Style" },
      { "zh-tw": "會員專屬", "en": "Members Only" }
    ]
  },
  "offer": {
    "label": { "zh-tw": "優惠內容", "en": "Promotional Offer" },
    "category": "other",
    "options": [
      { "zh-tw": "買一送一", "en": "Buy One Get One Free" },
      { "zh-tw": "第二件半價", "en": "50% Off Second Item" },
      { "zh-tw": "滿額免運", "en": "Free Shipping on Orders" },
      { "zh-tw": "限時8折", "en": "20% Off Limited Time" },
      { "zh-tw": "全館5折起", "en": "50% Off Storewide" },
      { "zh-tw": "加購價$99", "en": "Add-on for $99" },
      { "zh-tw": "消費滿千送百", "en": "Spend $1000 Get $100" },
      { "zh-tw": "新會員首購9折", "en": "10% Off First Purchase" }
    ]
  },
  "footer": {
    "label": { "zh-tw": "頁腳文字", "en": "Footer Text" },
    "category": "other",
    "options": [
      { "zh-tw": "限時優惠", "en": "Limited Time Offer" },
      { "zh-tw": "售完為止", "en": "While Supplies Last" },
      { "zh-tw": "歡迎預約", "en": "Reservations Welcome" },
      { "zh-tw": "詳情請洽門市", "en": "Contact Store for Details" },
      { "zh-tw": "僅限本週", "en": "This Week Only" },
      { "zh-tw": "數量有限", "en": "Limited Quantity" },
      { "zh-tw": "不可與其他優惠併用", "en": "Cannot Be Combined" },
      { "zh-tw": "歡迎來電訂購", "en": "Call to Order" }
    ]
  },
  "number_of_days": {
    "label": { "zh-tw": "天數", "en": "Number of Days" },
    "category": "other",
    "options": [
      { "zh-tw": "1", "en": "1" },
      { "zh-tw": "2", "en": "2" },
      { "zh-tw": "3", "en": "3" },
      { "zh-tw": "4", "en": "4" },
      { "zh-tw": "5", "en": "5" },
      { "zh-tw": "7", "en": "7" },
      { "zh-tw": "10", "en": "10" },
      { "zh-tw": "14", "en": "14" }
    ]
  },
  "scene_description": {
    "label": { "zh-tw": "場景描述", "en": "Scene Description" },
    "category": "visual",
    "options": [
      { "zh-tw": "一隻可愛的巨大小貓俏皮地用爪子撥弄經過的行人", "en": "A cute giant kitten playfully batting at passing pedestrians with its paw" },
      { "zh-tw": "一條巨龍從螢幕中飛出，噴著火焰", "en": "A giant dragon flying out of the screen, breathing fire" },
      { "zh-tw": "一隻恐龍探出頭來，好奇地觀察街道上的人們", "en": "A dinosaur peeking out, curiously watching people on the street" },
      { "zh-tw": "一隻巨大的金魚在空中優雅地游動", "en": "A giant goldfish gracefully swimming in the air" },
      { "zh-tw": "一個太空人漂浮在螢幕外，向路人揮手", "en": "An astronaut floating outside the screen, waving to pedestrians" },
      { "zh-tw": "一隻巨大的熊貓抱著竹子，懶洋洋地看著人群", "en": "A giant panda holding bamboo, lazily watching the crowd" },
      { "zh-tw": "一隻神奇的鳳凰展翅飛出，羽毛閃閃發光", "en": "A magical phoenix spreading its wings, feathers glowing" },
      { "zh-tw": "一群蝴蝶從螢幕中飛出，環繞在建築物周圍", "en": "A group of butterflies flying out, surrounding the buildings" }
    ]
  },
  "slogan": {
    "label": { "zh-tw": "標語", "en": "Slogan" },
    "category": "other",
    "options": [
      { "zh-tw": "3分鐘搞定！", "en": "Done in 3 Minutes!" },
      { "zh-tw": "你一定沒想到！", "en": "You Won't Believe This!" },
      { "zh-tw": "超簡單教學", "en": "Super Easy Tutorial" },
      { "zh-tw": "這樣做太神了！", "en": "This Trick is Amazing!" },
      { "zh-tw": "必看！", "en": "Must Watch!" },
      { "zh-tw": "新手必學", "en": "Beginners Must Learn" },
      { "zh-tw": "省錢秘訣", "en": "Money Saving Tips" },
      { "zh-tw": "效果驚人！", "en": "Amazing Results!" },
      { "zh-tw": "一招搞定", "en": "One Trick Solution" },
      { "zh-tw": "居然可以這樣！", "en": "You Can Do This!" }
    ]
  },
  // 新增詞庫 - 用於更多模板
  "country": {
    "label": { "zh-tw": "國家", "en": "Country" },
    "category": "location",
    "options": [
      { "zh-tw": "日本", "en": "Japan" },
      { "zh-tw": "美國", "en": "United States" },
      { "zh-tw": "法國", "en": "France" },
      { "zh-tw": "義大利", "en": "Italy" },
      { "zh-tw": "英國", "en": "United Kingdom" },
      { "zh-tw": "德國", "en": "Germany" },
      { "zh-tw": "中國", "en": "China" },
      { "zh-tw": "韓國", "en": "South Korea" },
      { "zh-tw": "臺灣", "en": "Taiwan" },
      { "zh-tw": "泰國", "en": "Thailand" },
      { "zh-tw": "澳洲", "en": "Australia" },
      { "zh-tw": "西班牙", "en": "Spain" }
    ]
  },
  "city": {
    "label": { "zh-tw": "城市", "en": "City" },
    "category": "location",
    "options": [
      { "zh-tw": "東京", "en": "Tokyo" },
      { "zh-tw": "紐約", "en": "New York" },
      { "zh-tw": "巴黎", "en": "Paris" },
      { "zh-tw": "倫敦", "en": "London" },
      { "zh-tw": "上海", "en": "Shanghai" },
      { "zh-tw": "首爾", "en": "Seoul" },
      { "zh-tw": "台北", "en": "Taipei" },
      { "zh-tw": "香港", "en": "Hong Kong" },
      { "zh-tw": "新加坡", "en": "Singapore" },
      { "zh-tw": "曼谷", "en": "Bangkok" },
      { "zh-tw": "杜拜", "en": "Dubai" },
      { "zh-tw": "雪梨", "en": "Sydney" }
    ]
  },
  "phone_model": {
    "label": { "zh-tw": "手機型號", "en": "Phone Model" },
    "category": "item",
    "options": [
      { "zh-tw": "iPhone 16 Pro", "en": "iPhone 16 Pro" },
      { "zh-tw": "iPhone 16 Pro Max", "en": "iPhone 16 Pro Max" },
      { "zh-tw": "Samsung Galaxy S24 Ultra", "en": "Samsung Galaxy S24 Ultra" },
      { "zh-tw": "Google Pixel 9 Pro", "en": "Google Pixel 9 Pro" },
      { "zh-tw": "華為 Mate 60 Pro", "en": "Huawei Mate 60 Pro" },
      { "zh-tw": "小米 14 Ultra", "en": "Xiaomi 14 Ultra" },
      { "zh-tw": "OnePlus 12", "en": "OnePlus 12" },
      { "zh-tw": "Sony Xperia 1 VI", "en": "Sony Xperia 1 VI" }
    ]
  },
  "camera_model": {
    "label": { "zh-tw": "相機型號", "en": "Camera Model" },
    "category": "item",
    "options": [
      { "zh-tw": "Canon EOS R5", "en": "Canon EOS R5" },
      { "zh-tw": "Sony A7 IV", "en": "Sony A7 IV" },
      { "zh-tw": "Nikon Z8", "en": "Nikon Z8" },
      { "zh-tw": "Fujifilm X-T5", "en": "Fujifilm X-T5" },
      { "zh-tw": "Canon IXUS 285", "en": "Canon IXUS 285" },
      { "zh-tw": "Sony RX100 VII", "en": "Sony RX100 VII" },
      { "zh-tw": "Leica Q3", "en": "Leica Q3" },
      { "zh-tw": "Polaroid Now+", "en": "Polaroid Now+" }
    ]
  },
  "anime_character": {
    "label": { "zh-tw": "動漫角色", "en": "Anime Character" },
    "category": "character",
    "options": [
      { "zh-tw": "路飛 (海賊王)", "en": "Luffy (One Piece)" },
      { "zh-tw": "鳴人 (火影忍者)", "en": "Naruto (Naruto)" },
      { "zh-tw": "炭治郎 (鬼滅之刃)", "en": "Tanjiro (Demon Slayer)" },
      { "zh-tw": "五條悟 (咒術迴戰)", "en": "Gojo Satoru (Jujutsu Kaisen)" },
      { "zh-tw": "女帝漢考克 (海賊王)", "en": "Boa Hancock (One Piece)" },
      { "zh-tw": "零二 (DARLING in the FRANXX)", "en": "Zero Two (DARLING in the FRANXX)" },
      { "zh-tw": "初音未來", "en": "Hatsune Miku" },
      { "zh-tw": "艾倫·乍加 (進擊的巨人)", "en": "Eren Yeager (Attack on Titan)" },
      { "zh-tw": "悟空 (七龍珠)", "en": "Goku (Dragon Ball)" },
      { "zh-tw": "阿尼亞 (間諜家家酒)", "en": "Anya (Spy x Family)" }
    ]
  },
  "holiday": {
    "label": { "zh-tw": "節日", "en": "Holiday" },
    "category": "other",
    "options": [
      { "zh-tw": "聖誕節", "en": "Christmas" },
      { "zh-tw": "新年", "en": "New Year" },
      { "zh-tw": "農曆新年", "en": "Lunar New Year" },
      { "zh-tw": "情人節", "en": "Valentine's Day" },
      { "zh-tw": "萬聖節", "en": "Halloween" },
      { "zh-tw": "復活節", "en": "Easter" },
      { "zh-tw": "感恩節", "en": "Thanksgiving" },
      { "zh-tw": "中秋節", "en": "Mid-Autumn Festival" },
      { "zh-tw": "端午節", "en": "Dragon Boat Festival" },
      { "zh-tw": "母親節", "en": "Mother's Day" }
    ]
  },
  "room_type": {
    "label": { "zh-tw": "房間類型", "en": "Room Type" },
    "category": "location",
    "options": [
      { "zh-tw": "居家辦公室", "en": "Home Office" },
      { "zh-tw": "臥室", "en": "Bedroom" },
      { "zh-tw": "客廳", "en": "Living Room" },
      { "zh-tw": "廚房", "en": "Kitchen" },
      { "zh-tw": "浴室", "en": "Bathroom" },
      { "zh-tw": "書房", "en": "Study Room" },
      { "zh-tw": "遊戲室", "en": "Game Room" },
      { "zh-tw": "陽台花園", "en": "Balcony Garden" },
      { "zh-tw": "咖啡角落", "en": "Coffee Corner" },
      { "zh-tw": "錄音室", "en": "Recording Studio" }
    ]
  },
  "novel_genre": {
    "label": { "zh-tw": "小說類型", "en": "Novel Genre" },
    "category": "other",
    "options": [
      { "zh-tw": "奇幻冒險", "en": "Fantasy Adventure" },
      { "zh-tw": "科幻未來", "en": "Sci-Fi Future" },
      { "zh-tw": "懸疑推理", "en": "Mystery Thriller" },
      { "zh-tw": "浪漫愛情", "en": "Romance" },
      { "zh-tw": "武俠仙俠", "en": "Martial Arts Fantasy" },
      { "zh-tw": "恐怖驚悚", "en": "Horror Thriller" },
      { "zh-tw": "歷史穿越", "en": "Historical Time Travel" },
      { "zh-tw": "都市異能", "en": "Urban Supernatural" }
    ]
  },
  "novel_title": {
    "label": { "zh-tw": "小說/電影名稱", "en": "Novel/Movie Title" },
    "category": "other",
    "options": [
      { "zh-tw": "哈利波特", "en": "Harry Potter" },
      { "zh-tw": "魔戒", "en": "The Lord of the Rings" },
      { "zh-tw": "三體", "en": "The Three-Body Problem" },
      { "zh-tw": "冰與火之歌", "en": "A Song of Ice and Fire" },
      { "zh-tw": "小王子", "en": "The Little Prince" },
      { "zh-tw": "神鬼奇航", "en": "Pirates of the Caribbean" },
      { "zh-tw": "鐵達尼號", "en": "Titanic" },
      { "zh-tw": "星際效應", "en": "Interstellar" },
      { "zh-tw": "盜夢空間", "en": "Inception" },
      { "zh-tw": "阿凡達", "en": "Avatar" }
    ]
  },
  "brand_name": {
    "label": { "zh-tw": "品牌名稱", "en": "Brand Name" },
    "category": "other",
    "options": [
      { "zh-tw": "Apple", "en": "Apple" },
      { "zh-tw": "Tesla", "en": "Tesla" },
      { "zh-tw": "Nvidia", "en": "Nvidia" },
      { "zh-tw": "Meta", "en": "Meta" },
      { "zh-tw": "Google", "en": "Google" },
      { "zh-tw": "Microsoft", "en": "Microsoft" },
      { "zh-tw": "Amazon", "en": "Amazon" },
      { "zh-tw": "Netflix", "en": "Netflix" },
      { "zh-tw": "Spotify", "en": "Spotify" },
      { "zh-tw": "Nike", "en": "Nike" }
    ]
  }
};

export const INITIAL_DEFAULTS = {
  role: { "zh-tw": "遊戲與動漫概念美術設計大師", en: "Master of Game and Anime Concept Art" },
  subject: { "zh-tw": "女性角色", en: "Female Character" },
  character_companion: { "zh-tw": "死侍 (Deadpool)", en: "Deadpool" },
  layout_focus: { "zh-tw": "全身立繪", en: "Full-body Portrait" },
  camera_angle: { "zh-tw": "臉頰和頸部特寫", en: "Cheek and neck close-up" },
  connectors: { "zh-tw": "手繪箭頭或引導線", en: "Hand-drawn arrows or guide lines" },
  underwear_style: { "zh-tw": "成套的蕾絲內衣褲", en: "Matching lace lingerie set" },
  clothing: { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
  clothing_male: { "zh-tw": "剪裁合體的深藍西裝", en: "Tailored deep blue suit" },
  clothing_female: { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
  expressions: { "zh-tw": "瘋狂、病嬌、狂喜", en: "Crazy, Yandere, Ecstatic" },
  character_originality: { "zh-tw": "創作一個原創人物", en: "Create an original character" },
  character_groups: { "zh-tw": "中外知名偵探（包青天、狄仁傑、福爾摩斯、柯南等）", en: "Famous Detectives (Bao Zheng, Di Renjie, Sherlock Holmes, Conan, etc.)" },
  social_media: { "zh-tw": "微信朋友圈", en: "WeChat Moments" },
  texture_zoom: { "zh-tw": "凌亂感與私處汗漬", en: "Messiness and sweat stains in private areas" },
  action_detail: { "zh-tw": "帶著項圈的爬行", en: "Crawling with a collar" },
  special_view: { "zh-tw": "被踩在腳下的仰視視角", en: "Low-angle view from being stepped on" },
  bag_content: { "zh-tw": "日常通勤包或手拿包", en: "Daily commuter bag or clutch" },
  cosmetics: { "zh-tw": "常用的化妝品組合", en: "Commonly used cosmetics combo" },
  private_items: { "zh-tw": "震動棒與項圈", en: "Vibrator and collar" },
  art_style: { "zh-tw": "高質量的 2D 插畫風格", en: "High-quality 2D illustration style" },
  background_style: { "zh-tw": "漫畫網格筆記本", en: "Manga grid notebook" },
  fashion_deconstruct: { "zh-tw": "整齊摺疊的外套和精緻的高跟鞋", en: "Neatly folded coat and exquisite high heels" },
  toy_companion: { "zh-tw": "Labubu藝術公仔", en: "Labubu Art Toy" },
  classic_scene: { "zh-tw": "黑客帝國", en: "The Matrix" },
  render_style: { "zh-tw": "Octane Render 和 Cinema 4D", en: "Octane Render and Cinema 4D" },
  position: { "zh-tw": "頂部中央", en: "Top Center" },
  company: { "zh-tw": "任天堂（Nintendo）", en: "Nintendo" },
  ratio: { "zh-tw": "3:4豎構圖", en: "3:4 Vertical" },
  
  // Grid defaults
  grid_pose: { "zh-tw": "前景手指虛化", en: "Out-of-focus fingers in foreground" },
  
  // Legacy defaults
  lens_param: { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
  lighting: { "zh-tw": "大型頂置柔光箱，輕微側向反射光", en: "Large overhead softbox, slight side reflection" },
  sticker_core: { "zh-tw": "使用者穿著甜美約會裝的照片", en: "Photo of user in a sweet date outfit" },
  sticker_decor: { "zh-tw": "手繪愛心、閃光符號", en: "Hand-drawn hearts, sparkle symbols" },
  action_pose: { "zh-tw": "用手指在男人腦後比劃'兔耳朵'", en: "Using fingers to make 'bunny ears' behind the man's head" },
  background_scene: { "zh-tw": "俯瞰紐約市的復仇者大廈樓頂", en: "Rooftop of Avengers Tower overlooking New York City" },
  
  // Fish Eye Urban defaults
  lens_type: { "zh-tw": "極端魚眼鏡頭", en: "Extreme Fisheye Lens" },
  school_uniform: { "zh-tw": "灰色開衫和格子裙校服", en: "Grey cardigan and plaid skirt uniform" },
  urban_location: { "zh-tw": "澀谷十字路口", en: "Shibuya Crossing" },
  dynamic_action: { "zh-tw": "一隻手誇張地伸向鏡頭前景", en: "One hand exaggeratedly reaching towards the foreground" },
  fingernail_detail: { "zh-tw": "手指甲清晰可見", en: "Fingernails clearly visible" },
  building_cluster: { "zh-tw": "扭曲的澀谷109大樓和其他建築林立", en: "Distorted Shibuya 109 building and other forest of buildings" },
  crowd_traffic: { "zh-tw": "擠滿行人和車輛", en: "Bustling traffic" },
  monster_element: { "zh-tw": "巨大的粉色和藍色漸變卡通怪獸", en: "Giant pink and blue gradient cartoon monster" },
  monster_feature: { "zh-tw": "巨大的觸手和角", en: "Giant tentacles and horns" },
  distorted_city: { "zh-tw": "扭曲的城市景觀", en: "Distorted urban landscape" },
  lighting_atmosphere: { "zh-tw": "陽光明媚", en: "Sunny" },
  shadow_contrast: { "zh-tw": "光影對比強烈", en: "Strong light-shadow contrast" },
  travel_location: { "zh-tw": "西藏拉薩布達拉宮", en: "Potala Palace, Lhasa, Tibet" },
  comic_scene: { "zh-tw": "唯美的臥室", en: "Beautiful bedroom" },
  designer: { "zh-tw": "Jonathan Ive (Jony Ive)", en: "Jonathan Ive" },
  design_item: { "zh-tw": "無人機", en: "Drone" },
  rain_shape: { "zh-tw": "芭蕾舞者", en: "Ballerina" },
  art_type: { "zh-tw": "美術學", en: "Fine Arts" },
  show_name: { "zh-tw": "龍貓", en: "My Neighbor Totoro" },
  character_name: { "zh-tw": "龍貓", en: "Totoro" },
  fruit: { "zh-tw": "檸檬", en: "Lemon" },
  jewelry_style: { "zh-tw": "精美的金色背鏈", en: "Fine gold back necklace" },
  flower_type: { "zh-tw": "一束深紅色玫瑰", en: "A bouquet of deep red roses" },

  // Nanobanana 模板詞庫預設值
  business_type: { "zh-tw": "咖啡廳", en: "Café" },
  pet_type: { "zh-tw": "狗", en: "Dog" },
  garment_type: { "zh-tw": "T恤", en: "T-shirt" },
  source_language: { "zh-tw": "日文", en: "Japanese" },
  target_language: { "zh-tw": "繁體中文", en: "Traditional Chinese" },
  product: { "zh-tw": "星巴克咖啡杯", en: "Starbucks Coffee Cup" },
  bottle_shape: { "zh-tw": "經典方瓶", en: "Classic Square Bottle" },
  liquid_color: { "zh-tw": "琥珀色", en: "Amber" },
  label_description: { "zh-tw": "金色標籤", en: "Gold Label" },
  product_name: { "zh-tw": "N°5 香水", en: "N°5 Perfume" },
  caption: { "zh-tw": "好傻喔", en: "So silly" },
  main_title: { "zh-tw": "秋季限定", en: "Autumn Limited Edition" },
  offer: { "zh-tw": "買一送一", en: "Buy One Get One Free" },
  footer: { "zh-tw": "限時優惠", en: "Limited Time Offer" },
  number_of_days: { "zh-tw": "3", en: "3" },
  scene_description: { "zh-tw": "一隻可愛的巨大小貓俏皮地用爪子撥弄經過的行人", en: "A cute giant kitten playfully batting at passing pedestrians with its paw" },
  slogan: { "zh-tw": "3分鐘搞定！", en: "Done in 3 Minutes!" },

  // 新增詞庫預設值
  country: { "zh-tw": "日本", en: "Japan" },
  city: { "zh-tw": "東京", en: "Tokyo" },
  phone_model: { "zh-tw": "iPhone 16 Pro", en: "iPhone 16 Pro" },
  camera_model: { "zh-tw": "Canon EOS R5", en: "Canon EOS R5" },
  anime_character: { "zh-tw": "路飛 (海賊王)", en: "Luffy (One Piece)" },
  holiday: { "zh-tw": "聖誕節", en: "Christmas" },
  room_type: { "zh-tw": "居家辦公室", en: "Home Office" },
  novel_genre: { "zh-tw": "奇幻冒險", en: "Fantasy Adventure" },
  novel_title: { "zh-tw": "哈利波特", en: "Harry Potter" },
  brand_name: { "zh-tw": "Apple", en: "Apple" }
};
