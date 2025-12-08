export const DEFAULT_TEMPLATE_CONTENT = `### Role (角色设定)
你是一位顶尖的 {{role}}，擅长制作详尽的角色设定图（Character Sheet）。你具备“像素级拆解”的能力，能够透视角色的穿着层级、捕捉微表情变化，并将与其相关的物品进行具象化还原。你特别擅长通过 {{subject}} 的私密物品、随身物件和生活细节来侧面丰满人物性格与背景故事。

### Task (任务目标)
根据用户上传或描述的主体形象，生成一张**“全景式角色深度概念分解图”**。该图片必须包含 {{layout_focus}}，并在其周围环绕展示该人物的服装分层、不同表情、核心道具、材质特写，以及极具生活气息的私密与随身物品展示。

### Visual Guidelines (视觉规范)
**1. 构图布局 (Layout):**
- **中心位 (Center):** 放置角色的 {{layout_focus}}，作为视觉锚点。
- **环绕位 (Surroundings):** 在中心人物四周空白处，有序排列拆解后的元素。
- **视觉引导 (Connectors):** 使用{{connectors}}，将周边的拆解物品与中心人物的对应部位或所属区域连接起来。

**2. 拆解内容 (Deconstruction Details):**
- **服装分层 (Clothing Layers):** 将角色的服装拆分为单品展示
- **私密内着拆解:** 独立展示角色的内层衣物，重点突出设计感与材质。例如： {{underwear_style}} （展示细节与剪裁）。
- **表情集 (Expression Sheet):** 在角落绘制 3-4 个不同的头部特写，展示不同的情绪，如： {{expressions}} 。
- **材质特写 (Texture & Zoom):** 选取关键部位进行放大特写。例如： {{texture_zoom}} ，增加对小物件材质的描绘。
- **动作:** 绘制特殊的动作和表情，例如：{{action_detail}}，增加动作的深度刻画。
- **特殊视角:** 绘制从某种特殊场景下拍摄的特殊视角，例如：{{special_view}}

- **关联物品 (Related Items):**
 - **随身包袋与内容物:** 绘制 {{bag_content}}，并将其“打开”，展示散落在旁的物品。
 - **美妆与护理:** 展示 {{cosmetics}}。
 - **私密生活物件:** 具象化角色隐藏面的物品。根据角色性格可能包括： {{private_items}}，需以一种设计图的客观视角呈现。

**3. 风格与注释 (Style & Annotations):**
- **画风:** {{art_style}}，线条干净利落。
- **背景:** {{background_style}}，营造设计手稿的氛围。
- **文字说明:** 在每个拆解元素旁模拟手写注释，简要说明材质或品牌/型号暗示。

### Workflow (执行逻辑)
1. 分析主体的核心特征、穿着风格及潜在性格。
2. 提取可拆解的一级元素（外套、鞋子、大表情）。
3. 脑补并设计二级深度元素（她内衣穿什么风格？包里装什么？独处时用什么？）。
4. 生成一张包含所有这些元素的组合图，确保透视准确，光影统一，注释清晰。
5. 使用中文，高清输出。`;

export const TEMPLATE_PHOTO_GRID = `### Photo Grid Composition (九宫格摄影)

**编辑场景:** 3x3网格布局，采用冷灰色无缝背景。人物（面部特征与上传图片完全一致）身穿 {{clothing}}，确保每张照片中人物形象保持一致。

**灯光设置:** {{lighting}}，营造统一而富有层次的光影效果。

**照片细节包括 (Grid Details)：**
1. {{grid_pose}}，画面风格统一，镜头参数为 {{lens_param}}；
2. {{grid_pose}}，镜头参数为 {{lens_param}}，展现不同的拍摄角度和表情；
3. {{grid_pose}}，镜头参数为 {{lens_param}}，捕捉细腻的情感表达；
4. {{grid_pose}}，镜头参数为 {{lens_param}}，利用景深营造层次感；
5. {{grid_pose}}，镜头参数为 {{lens_param}}，突出动态瞬间的生动性；
6. {{grid_pose}}，镜头参数为 {{lens_param}}，通过前景虚化增强视觉焦点；
7. {{grid_pose}}，镜头参数为 {{lens_param}}，展现优雅的姿态和放松的状态；
8. {{grid_pose}}，镜头参数为 {{lens_param}}，捕捉自然光线下的表情变化；
9. {{grid_pose}}，镜头参数为 {{lens_param}}，微距特写展现面部细节和质感。

**后期处理:** 保持原始素材的真实感，平滑对比度，适度应用柔化效果，确保整体色调统一且富有质感。`;

export const TEMPLATE_FASHION_MOODBOARD = `### Fashion Illustration Moodboard (时尚插画情绪板)
一张9:16竖屏的高级时尚插画情绪板，模拟平板扫描效果。

**背景:** 纯手绘的奶油色水彩晕染纸张，带有淡淡的粉色网格。
**视觉核心:** 数张具有明显白色模切宽边和柔和投影的亮面乙烯基贴纸。

**贴纸内容:**
- **中央:** {{sticker_core}}，光线明亮。
- **左侧:** {{fashion_deconstruct}}。
- **右下角:** 关键的隐藏层贴纸：一套折叠整齐的内衣，展现细腻纹理。
- **互动元素:** 一只穿着粉色系、与用户服装呼应的 {{toy_companion}} 正趴在一个手绘对话框上。

**装饰细节:** 周围装饰着蜡笔质感的 {{sticker_decor}} 和潦草的中文书法标注OOTD。
**注意:** 画面中绝无任何人手、笔或物理桌面背景，纯粹的平面艺术插画。`;

export const TEMPLATE_CHARACTER_SELFIE = `### Character Selfie (人物趣味合影)
让 {{character_companion}} 站在男人旁边，{{action_pose}}，同时对着镜头露出调皮的表情。

**背景:** 以 {{background_scene}} 为背景。

**要求:** 保持自拍构图不变，让两个角色自然地融入画面，光影统一，互动自然。`;

export const INITIAL_TEMPLATES_CONFIG = [
  {
    id: "tpl_default",
    name: "角色概念分解图",
    content: DEFAULT_TEMPLATE_CONTENT,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/ec433cf214faf102.jpg",
    selections: {}
  },
  {
    id: "tpl_photo_grid",
    name: "3x3 摄影网格",
    content: TEMPLATE_PHOTO_GRID,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/5302794e63fa130b.jpg",
    selections: {
      "clothing": "炭灰色无袖连衣裙",
      "grid_pose-0": "前景手指虚化",
      "grid_pose-1": "目光锁定镜头",
      "grid_pose-2": "单色下巴托手",
      "grid_pose-3": "正面特写阴影",
      "grid_pose-4": "斜角拍摄",
      "grid_pose-5": "双手置于锁骨",
      "grid_pose-6": "坐姿半身侧面",
      "grid_pose-7": "侧面微距水滴",
      "grid_pose-8": "回眸一笑",
      "lens_param-0": "85mm, f/1.8",
      "lens_param-1": "85mm, f/2.0",
      "lens_param-2": "50mm, f/2.2",
      "lens_param-3": "50mm, f/2.5",
      "lens_param-4": "50mm, f/3.2",
      "lens_param-5": "35mm, f/4.5",
      "lens_param-6": "85mm, f/1.9",
      "lens_param-7": "50mm, f/1.8",
      "lens_param-8": "85mm, f/2.2"
    }
  },
  {
    id: "tpl_fashion",
    name: "时尚情绪板插画",
    content: TEMPLATE_FASHION_MOODBOARD,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/4d9f92ccb4113fdd.jpg",
    selections: {}
  },
  {
    id: "tpl_character_selfie",
    name: "人物趣味合影",
    content: TEMPLATE_CHARACTER_SELFIE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/c2312d24d0f2c38e.jpeg",
    selections: {}
  }
];

