import React, { useState, useRef, useEffect } from 'react';
import { Copy, Plus, X, Settings, Check, Edit3, Eye, Trash2, FileText, Pencil, Copy as CopyIcon, Globe, ChevronDown, ChevronUp, ChevronRight, GripVertical, Download, Image as ImageIcon, List, Undo, Redo, Maximize2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { INITIAL_TEMPLATES_CONFIG } from './data/templates';

// --- 翻译配置 (Translations) ---
const TRANSLATIONS = {
  cn: {
    template_management: "模版管理",
    template_subtitle: "切换或管理不同 Prompt",
    new_template: "新建模版",
    bank_config: "词库配置",
    bank_subtitle: "所有模版共享同一套词库",
    preview_mode: "预览交互",
    edit_mode: "编辑模版",
    copy_result: "复制结果",
    export_image: "保存长图",
    copied: "已复制",
    insert: "插入",
    add_option_placeholder: "新增选项...",
    add_bank_group: "创建新变量组",
    add_bank_title: "新增变量分类",
    label_name: "显示名称 (Label)",
    label_placeholder: "例如: 武器类型",
    id_name: "唯一标识 (ID)",
    id_placeholder: "例如: weapon",
    confirm_add: "确认添加",
    cancel: "取消",
    preview_status: "预览与交互模式",
    editing_status: "正在编辑模版结构...",
    rename: "重命名",
    duplicate: "创建副本",
    delete: "删除",
    select: "选择",
    no_options: "暂无选项，请在左侧添加",
    please_select: "请选择...",
    undefined_var: "未定义变量",
    alert_id_exists: "该 ID 已存在！",
    alert_keep_one: "至少需要保留一个模版",
    confirm_delete_template: "确定要删除这个模版吗？操作无法撤销。",
    confirm_delete_bank: "确定要删除“{{name}}”整个词库吗？",
    new_template_name: "新模版",
    new_template_content: "### 新模版\n\n开始编辑你的内容，使用 {{variable}} 插入变量。",
    copy_suffix: " (副本)",
    add_custom_option: "添加自定义选项",
    confirm: "确定",
    category_label: "分类 (Category)",
    category_character: "人物 (Character)",
    category_item: "物品 (Item)",
    category_action: "动作 (Action)",
    category_location: "地点 (Location)",
    category_visual: "画面 (Visuals)",
    category_other: "其他 (Other)",
    manage_categories: "管理分类",
    add_category: "新增分类",
    category_name_placeholder: "分类名称",
    delete_category_confirm: "确定要删除分类“{{name}}”吗？该分类下的词库将归为“其他”。",
    edit_category: "编辑分类"
  },
  en: {
    template_management: "Templates",
    template_subtitle: "Manage your Prompts",
    new_template: "New Template",
    bank_config: "Word Banks",
    bank_subtitle: "Shared across all templates",
    preview_mode: "Preview",
    edit_mode: "Edit",
    copy_result: "Copy Result",
    export_image: "Save Image",
    copied: "Copied",
    insert: "Insert",
    add_option_placeholder: "Add option...",
    add_bank_group: "New Variable Group",
    add_bank_title: "Add Variable Category",
    label_name: "Display Name",
    label_placeholder: "e.g. Weapon Type",
    id_name: "Unique ID",
    id_placeholder: "e.g. weapon",
    confirm_add: "Confirm",
    cancel: "Cancel",
    preview_status: "Preview & Interactive Mode",
    editing_status: "Editing Template Structure...",
    rename: "Rename",
    duplicate: "Duplicate",
    delete: "Delete",
    select: "Select",
    no_options: "No options, add from left",
    please_select: "Select...",
    undefined_var: "Undefined",
    alert_id_exists: "ID already exists!",
    alert_keep_one: "Keep at least one template",
    confirm_delete_template: "Delete this template? Cannot be undone.",
    confirm_delete_bank: "Delete the entire bank “{{name}}”?",
    new_template_name: "New Template",
    new_template_content: "### New Template\n\nStart editing content. Use {{variable}} to insert variables.",
    copy_suffix: " (Copy)",
    add_custom_option: "Add Custom Option",
    confirm: "Confirm",
    category_label: "Category",
    category_character: "Character",
    category_item: "Item",
    category_action: "Action",
    category_location: "Location",
    category_visual: "Visuals",
    category_other: "Other",
    manage_categories: "Manage Categories",
    add_category: "Add Category",
    category_name_placeholder: "Category Name",
    delete_category_confirm: "Delete category “{{name}}”? Banks will be moved to 'Other'.",
    edit_category: "Edit Category"
  }
};

const INITIAL_CATEGORIES = {
  character: { id: "character", label: "人物 (CHARACTER)", color: "blue" },
  item: { id: "item", label: "物品 (ITEM)", color: "amber" },
  action: { id: "action", label: "动作 (ACTION)", color: "rose" },
  location: { id: "location", label: "地点 (LOCATION)", color: "emerald" },
  visual: { id: "visual", label: "画面 (VISUALS)", color: "violet" },
  other: { id: "other", label: "其他 (OTHER)", color: "slate" }
};

const PREMIUM_STYLES = {
  blue: { from: "#93C5FD", to: "#3B82F6", shadowColor: "rgba(59, 130, 246, 0.4)", glowColor: "rgba(59, 130, 246, 0.6)" },
  amber: { from: "#FCD34D", to: "#F59E0B", shadowColor: "rgba(245, 158, 11, 0.4)", glowColor: "rgba(245, 158, 11, 0.6)" },
  rose: { from: "#F472B6", to: "#DB2777", shadowColor: "rgba(219, 39, 119, 0.4)", glowColor: "rgba(219, 39, 119, 0.6)" }, // Changed from light pink/red to Pink/Fuchsia
  emerald: { from: "#6EE7B7", to: "#10B981", shadowColor: "rgba(16, 185, 129, 0.4)", glowColor: "rgba(16, 185, 129, 0.6)" },
  violet: { from: "#BEB3FF", to: "#8C79FF", shadowColor: "rgba(139, 92, 246, 0.4)", glowColor: "rgba(139, 92, 246, 0.6)" },
  slate: { from: "#CBD5E1", to: "#64748B", shadowColor: "rgba(100, 116, 139, 0.4)", glowColor: "rgba(100, 116, 139, 0.6)" },
  orange: { from: "#FDBA74", to: "#F97316", shadowColor: "rgba(249, 115, 22, 0.4)", glowColor: "rgba(249, 115, 22, 0.6)" },
  cyan: { from: "#67E8F9", to: "#06B6D4", shadowColor: "rgba(6, 182, 212, 0.4)", glowColor: "rgba(6, 182, 212, 0.6)" },
  lime: { from: "#BEF264", to: "#84CC16", shadowColor: "rgba(132, 204, 22, 0.4)", glowColor: "rgba(132, 204, 22, 0.6)" },
  pink: { from: "#F9A8D4", to: "#EC4899", shadowColor: "rgba(236, 72, 153, 0.4)", glowColor: "rgba(236, 72, 153, 0.6)" },
  indigo: { from: "#A5B4FC", to: "#6366F1", shadowColor: "rgba(99, 102, 241, 0.4)", glowColor: "rgba(99, 102, 241, 0.6)" },
  teal: { from: "#5EEAD4", to: "#14B8A6", shadowColor: "rgba(20, 184, 166, 0.4)", glowColor: "rgba(20, 184, 166, 0.6)" }
};

const CATEGORY_STYLES = {
  blue: {
    text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200",
    hoverBg: "hover:bg-blue-100", hoverBorder: "hover:border-blue-300", hoverText: "hover:text-blue-600",
    ring: "ring-blue-300", bgActive: "bg-blue-100",
    badgeText: "text-blue-700", badgeBg: "bg-blue-100",
    dotBg: "bg-blue-500", btnBg: "bg-blue-600",
    inputRing: "focus:ring-blue-200", inputBorder: "focus:border-blue-500"
  },
  amber: {
    text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200",
    hoverBg: "hover:bg-amber-100", hoverBorder: "hover:border-amber-300", hoverText: "hover:text-amber-600",
    ring: "ring-amber-300", bgActive: "bg-amber-100",
    badgeText: "text-amber-700", badgeBg: "bg-amber-100",
    dotBg: "bg-amber-500", btnBg: "bg-amber-600",
    inputRing: "focus:ring-amber-200", inputBorder: "focus:border-amber-500"
  },
  rose: {
    text: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200",
    hoverBg: "hover:bg-rose-100", hoverBorder: "hover:border-rose-300", hoverText: "hover:text-rose-600",
    ring: "ring-rose-300", bgActive: "bg-rose-100",
    badgeText: "text-rose-700", badgeBg: "bg-rose-100",
    dotBg: "bg-rose-500", btnBg: "bg-rose-600",
    inputRing: "focus:ring-rose-200", inputBorder: "focus:border-rose-500"
  },
  emerald: {
    text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200",
    hoverBg: "hover:bg-emerald-100", hoverBorder: "hover:border-emerald-300", hoverText: "hover:text-emerald-600",
    ring: "ring-emerald-300", bgActive: "bg-emerald-100",
    badgeText: "text-emerald-700", badgeBg: "bg-emerald-100",
    dotBg: "bg-emerald-500", btnBg: "bg-emerald-600",
    inputRing: "focus:ring-emerald-200", inputBorder: "focus:border-emerald-500"
  },
  violet: {
    text: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200",
    hoverBg: "hover:bg-violet-100", hoverBorder: "hover:border-violet-300", hoverText: "hover:text-violet-600",
    ring: "ring-violet-300", bgActive: "bg-violet-100",
    badgeText: "text-violet-700", badgeBg: "bg-violet-100",
    dotBg: "bg-violet-500", btnBg: "bg-violet-600",
    inputRing: "focus:ring-violet-200", inputBorder: "focus:border-violet-500"
  },
  slate: {
    text: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200",
    hoverBg: "hover:bg-slate-100", hoverBorder: "hover:border-slate-300", hoverText: "hover:text-slate-600",
    ring: "ring-slate-300", bgActive: "bg-slate-100",
    badgeText: "text-slate-700", badgeBg: "bg-slate-100",
    dotBg: "bg-slate-500", btnBg: "bg-slate-600",
    inputRing: "focus:ring-slate-200", inputBorder: "focus:border-slate-500"
  },
  orange: {
    text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
    hoverBg: "hover:bg-orange-100", hoverBorder: "hover:border-orange-300", hoverText: "hover:text-orange-600",
    ring: "ring-orange-300", bgActive: "bg-orange-100",
    badgeText: "text-orange-700", badgeBg: "bg-orange-100",
    dotBg: "bg-orange-500", btnBg: "bg-orange-600",
    inputRing: "focus:ring-orange-200", inputBorder: "focus:border-orange-500"
  },
  cyan: {
    text: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200",
    hoverBg: "hover:bg-cyan-100", hoverBorder: "hover:border-cyan-300", hoverText: "hover:text-cyan-600",
    ring: "ring-cyan-300", bgActive: "bg-cyan-100",
    badgeText: "text-cyan-700", badgeBg: "bg-cyan-100",
    dotBg: "bg-cyan-500", btnBg: "bg-cyan-600",
    inputRing: "focus:ring-cyan-200", inputBorder: "focus:border-cyan-500"
  },
  lime: {
    text: "text-lime-600", bg: "bg-lime-50", border: "border-lime-200",
    hoverBg: "hover:bg-lime-100", hoverBorder: "hover:border-lime-300", hoverText: "hover:text-lime-600",
    ring: "ring-lime-300", bgActive: "bg-lime-100",
    badgeText: "text-lime-700", badgeBg: "bg-lime-100",
    dotBg: "bg-lime-500", btnBg: "bg-lime-600",
    inputRing: "focus:ring-lime-200", inputBorder: "focus:border-lime-500"
  },
  pink: {
    text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200",
    hoverBg: "hover:bg-pink-100", hoverBorder: "hover:border-pink-300", hoverText: "hover:text-pink-600",
    ring: "ring-pink-300", bgActive: "bg-pink-100",
    badgeText: "text-pink-700", badgeBg: "bg-pink-100",
    dotBg: "bg-pink-500", btnBg: "bg-pink-600",
    inputRing: "focus:ring-pink-200", inputBorder: "focus:border-pink-500"
  },
  indigo: {
    text: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200",
    hoverBg: "hover:bg-indigo-100", hoverBorder: "hover:border-indigo-300", hoverText: "hover:text-indigo-600",
    ring: "ring-indigo-300", bgActive: "bg-indigo-100",
    badgeText: "text-indigo-700", badgeBg: "bg-indigo-100",
    dotBg: "bg-indigo-500", btnBg: "bg-indigo-600",
    inputRing: "focus:ring-indigo-200", inputBorder: "focus:border-indigo-500"
  },
  teal: {
    text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200",
    hoverBg: "hover:bg-teal-100", hoverBorder: "hover:border-teal-300", hoverText: "hover:text-teal-600",
    ring: "ring-teal-300", bgActive: "bg-teal-100",
    badgeText: "text-teal-700", badgeBg: "bg-teal-100",
    dotBg: "bg-teal-500", btnBg: "bg-teal-600",
    inputRing: "focus:ring-teal-200", inputBorder: "focus:border-teal-500"
  }
};



// --- 初始数据配置 (Updated with new banks for examples) ---

const INITIAL_BANKS = {
  role: {
    label: "角色身份",
    category: "character",
    options: ["游戏与动漫概念美术设计大师", "资深影视角色原画师", "赛博朋克风格设计师", "暗黑幻想风格插画师"]
  },
  subject: {
    label: "主体对象",
    category: "character",
    options: ["女性角色", "男性角色", "机甲少女", "怪物拟人化", "奇幻种族(精灵/恶魔)"]
  },
  character_companion: {
    label: "合影角色",
    category: "character",
    options: ["死侍 (Deadpool)", "超人 (Superman)", "爱因斯坦 (Einstein)", "神奇女侠 (Wonder Woman)", "钢铁侠 (Iron Man)", "皮卡丘 (Pikachu)", "哥斯拉 (Godzilla)", "初音未来 (Hatsune Miku)"]
  },
  layout_focus: {
    label: "构图重心",
    category: "visual",
    options: ["全身立绘", "半身肖像", "动态战斗姿势", "背影回眸"]
  },
  grid_pose: { 
    label: "九宫格动作", 
    category: "action", 
    options: [
      "前景手指虚化", "目光锁定镜头", "单色下巴托手", "透过模糊肩带拍摄", 
      "正面特写阴影", "斜角拍摄", "双手置于锁骨", "坐姿半身侧面", 
      "侧面微距水滴", "闭眼仰头享受", "用手遮挡阳光", "回眸一笑", "吹泡泡糖特写",
      "正面直视镜头，表情平静，眼神清澈", "凝视镜头，嘴角微微上扬，展现自信", 
      "专注地看着镜头，表情柔和，眼神温和", "侧身回望，眼神温柔，嘴角上扬", 
      "转身回眸，长发飘逸，笑容自然", "手轻抚下巴，表情优雅，眼神柔和", 
      "单手支撑下巴，表情自然，眼神专注", "利用肩带营造景深，焦点清晰在眼睛", 
      "正在吹泡泡糖，表情可爱，眼神专注", "侧面微距特写，突出面部轮廓和细节"
    ] 
  },
  
  camera_angle: {
    label: "拍摄角度",
    category: "visual",
    options: ["脸颊和颈部特写", "目光锁定镜头", "单色下巴托手肖像", "透过模糊的肩带拍摄", "正面特写，面部阴影交错", "斜角拍摄的原始人像", "双手置于锁骨附近的特写", "坐姿半身侧面照", "侧面微距照"]
  },
  connectors: {
    label: "视觉引导",
    category: "visual",
    options: ["手绘箭头或引导线", "虚线连接", "彩色光束", "半透明数据线"]
  },
  underwear_style: {
    label: "私密内着拆解",
    category: "item",
    options: ["成套的蕾丝内衣裤", "运动风格纯棉内衣", "极简主义丝绸内衣", "哥特风格绑带内衣"]
  },
  clothing: {
    label: "人物服饰",
    category: "item",
    options: ["炭灰色无袖连衣裙", "白色丝绸衬衫", "黑色修身西装", "战术机能风外套", "复古碎花连衣裙"]
  },
  clothing_male: {
    label: "男性服饰",
    category: "item",
    options: ["剪裁合体的深蓝西装", "复古棕色皮夹克", "战术背心与工装裤", "宽松的灰色卫衣", "白色亚麻衬衫", "黑色高领毛衣"]
  },
  clothing_female: {
    label: "女性服饰",
    category: "item",
    options: ["炭灰色无袖连衣裙", "丝绸吊带晚礼服", "机车皮衣与短裙", "白色蕾丝衬衫", "黑色紧身连体衣", "优雅的香奈儿风套装"]
  },
  expressions: {
    label: "表情集",
    category: "character",
    options: ["疯狂、病娇、狂喜", "羞涩、躲闪、红晕", "冷漠、鄙视、高傲", "痛苦、忍耐、咬唇"]
  },
  texture_zoom: {
    label: "材质特写",
    category: "visual",
    options: ["凌乱感与私处汗渍", "皮肤上的勒痕与红印", "丝袜的抽丝细节", "皮革的光泽与磨损"]
  },
  action_detail: {
    label: "动作细节",
    category: "action",
    options: ["带着项圈的爬行", "双手被缚在身后的挣扎", "跪姿并展示鞋底", "拉扯领口的诱惑"]
  },
  special_view: {
    label: "特殊视角",
    category: "visual",
    options: ["被踩在脚下的仰视视角", "从门缝中偷窥的视角", "镜子反射的背影", "监控摄像头的俯视视角"]
  },
  bag_content: {
    label: "随身包袋",
    category: "item",
    options: ["日常通勤包或手拿包", "战术腿包", "可爱的毛绒背包", "透明材质的痛包"]
  },
  cosmetics: {
    label: "美妆与护理",
    category: "item",
    options: ["常用的化妆品组合", "散落的口红与粉饼", "便携式补妆镜", "香水小样与护手霜"]
  },
  private_items: {
    label: "私密生活物件",
    category: "item",
    options: ["震动棒与项圈", "手铐与眼罩", "鞭子与蜡烛", "润滑液与安全套"]
  },
  art_style: {
    label: "画风",
    category: "visual",
    options: ["高质量的 2D 插画风格", "写实厚涂风格", "赛博朋克霓虹风格", "水彩手绘风格"]
  },
  background_style: {
    label: "背景风格",
    category: "visual",
    options: ["漫画网格笔记本", "蓝图设计稿纸", "工业风金属背景", "极简纯色背景"]
  },
  // Fashion Template additions
  fashion_deconstruct: {
    label: "穿搭解构",
    category: "item",
    options: ["整齐折叠的外套和精致的高跟鞋", "散落的配饰与包包", "悬挂的衬衫与百褶裙", "堆叠的金属配饰与皮带"]
  },
  toy_companion: {
    label: "互动公仔",
    category: "item",
    options: ["Labubu艺术公仔", "暴力熊积木熊", "泡泡玛特Molly", "复古泰迪熊", "赛博朋克机械狗"]
  },
  
  // Old ones preserved for compatibility or other templates
  lens_param: {
    label: "九宫格镜头",
    category: "visual",
    options: ["85mm, f/1.8", "85mm, f/2.0", "50mm, f/2.2", "50mm, f/2.5", "50mm, f/3.2", "35mm, f/4.5", "85mm, f/1.9", "50mm, f/1.8", "85mm, f/2.2", "50mm, f/2.0"]
  },
  lighting: {
    label: "灯光布置",
    category: "visual",
    options: ["大型顶置柔光箱，轻微侧向反射光", "自然窗光", "伦勃朗光", "赛博朋克霓虹光", "影棚硬光"]
  },
  sticker_core: {
    label: "核心贴纸",
    category: "item",
    options: ["用户穿着甜美约会装的照片", "复古摇滚乐队T恤穿搭", "日系JK制服穿搭", "极简职场通勤装"]
  },
  sticker_decor: {
    label: "装饰元素",
    category: "item",
    options: ["手绘爱心、闪光符号", "星星、月亮贴纸", "复古邮票与票据", "赛博故障风Glitch元素"]
  },
  action_pose: {
    label: "互动姿势",
    category: "action",
    options: ["用手指在男人脑后比划'兔耳朵'", "勾肩搭背比V字手势", "互相指着对方大笑", "背靠背酷炫站姿"]
  },
  background_scene: {
    label: "背景场景",
    category: "location",
    options: ["俯瞰纽约市的复仇者大厦楼顶", "废弃的工业仓库", "熙熙攘攘的时代广场", "外太空飞船内部"]
  }
};

const INITIAL_DEFAULTS = {
  role: "游戏与动漫概念美术设计大师",
  subject: "女性角色",
  character_companion: "死侍 (Deadpool)",
  layout_focus: "全身立绘",
  camera_angle: "脸颊和颈部特写",
  connectors: "手绘箭头或引导线",
  underwear_style: "成套的蕾丝内衣裤",
  clothing: "炭灰色无袖连衣裙",
  clothing_male: "剪裁合体的深蓝西装",
  clothing_female: "炭灰色无袖连衣裙",
  expressions: "疯狂、病娇、狂喜",
  texture_zoom: "凌乱感与私处汗渍",
  action_detail: "带着项圈的爬行",
  special_view: "被踩在脚下的仰视视角",
  bag_content: "日常通勤包或手拿包",
  cosmetics: "常用的化妆品组合",
  private_items: "震动棒与项圈",
  art_style: "高质量的 2D 插画风格",
  background_style: "漫画网格笔记本",
  fashion_deconstruct: "整齐折叠的外套和精致的高跟鞋",
  toy_companion: "Labubu艺术公仔",
  
  // Grid defaults
  grid_pose: "前景手指虚化",
  
  // Legacy defaults
  lens_param: "85mm, f/1.8",
  lighting: "大型顶置柔光箱，轻微侧向反射光",
  sticker_core: "用户穿着甜美约会装的照片",
  sticker_decor: "手绘爱心、闪光符号",
  action_pose: "用手指在男人脑后比划'兔耳朵'",
  background_scene: "俯瞰纽约市的复仇者大厦楼顶"
};

// --- 持久化存储 Hook ---
const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};


// --- 组件：可点击的变量词 ---
const Variable = ({ id, index, config, currentVal, isOpen, onToggle, onSelect, onAddCustom, popoverRef, categories, t }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [customVal, setCustomVal] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Determine styles based on category
  const categoryId = config?.category || 'other';
  const colorKey = categories[categoryId]?.color || 'slate';
  const style = CATEGORY_STYLES[colorKey] || CATEGORY_STYLES.slate;
  const premium = PREMIUM_STYLES[colorKey] || PREMIUM_STYLES.slate;

  // Reset state when popover closes
  useEffect(() => {
    if (!isOpen) {
        setIsAdding(false);
        setCustomVal("");
    }
  }, [isOpen]);

  if (!config) return <span className="text-gray-400 bg-gray-50 px-1 rounded border border-gray-200 text-xs" title={`${t('undefined_var')}: ${id}`}>[{id}?]</span>;

  const handleAddSubmit = () => {
      if (customVal.trim()) {
          onAddCustom(customVal.trim());
          setCustomVal("");
          setIsAdding(false);
      }
  };

  return (
    <div className="relative inline-block mx-1.5 align-baseline group text-base">
      <span 
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          cursor-pointer px-3 py-1 rounded-full transition-all duration-300 select-none font-medium text-white
          ${isOpen ? `ring-2 ring-offset-2 ${style.ring}` : ''}
          hover:scale-105 active:scale-95
        `}
        style={{
            background: `linear-gradient(135deg, ${premium.from} 0%, ${premium.to} 100%)`,
            boxShadow: isHovered 
                ? `inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2), 0 4px 12px ${premium.glowColor}`
                : `inset 0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0 2px 5px ${premium.shadowColor}`,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        {currentVal || <span className="opacity-70 italic">{t('please_select')}</span>}
      </span>
      
      {/* Popover - 词库选择器 */}
      {isOpen && (
        <div 
          ref={popoverRef}
          className="absolute left-0 top-full mt-2 w-72 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col text-left animate-in fade-in zoom-in-95 duration-200 origin-top-left"
          style={{ 
              minWidth: '280px',
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: `0 10px 40px -10px ${premium.shadowColor}, 0 0 0 1px rgba(0,0,0,0.05)`
          }}
        >
          <div className="px-4 py-3 border-b border-gray-100/50 flex justify-between items-center bg-white/50 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('select')} {config.label}</span>
             <span 
                className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white shadow-sm"
                style={{ background: `linear-gradient(135deg, ${premium.from}, ${premium.to})` }}
             >
                {categories[categoryId]?.label || categoryId}
            </span>
          </div>
          <div className="max-h-64 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {config.options.length > 0 ? config.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(opt)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group flex items-center justify-between
                  ${currentVal === opt 
                    ? 'bg-white shadow-md ring-1 ring-black/5 font-bold' 
                    : 'hover:bg-white/60 hover:shadow-sm text-gray-600 hover:text-gray-900'}`}
                style={currentVal === opt ? { color: premium.to } : {}}
              >
                <span>{opt}</span>
                {currentVal === opt && <Check size={14} style={{ color: premium.to }} />}
              </button>
            )) : (
              <div className="px-3 py-8 text-center text-gray-400 text-sm italic">
                {t('no_options')}
              </div>
            )}
          </div>
          
           {/* Add Custom Option Footer */}
           <div className="p-2 border-t border-gray-100/50 bg-white/50 backdrop-blur-sm">
             {isAdding ? (
                 <div className="flex gap-2">
                     <input 
                        autoFocus
                        type="text"
                        value={customVal}
                        onChange={(e) => setCustomVal(e.target.value)}
                        placeholder={t('add_option_placeholder')}
                        className="flex-1 min-w-0 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white/80"
                        onKeyDown={(e) => e.key === 'Enter' && handleAddSubmit()}
                     />
                     <button 
                        onClick={handleAddSubmit}
                        disabled={!customVal.trim()}
                        className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors shadow-sm"
                     >
                        {t('confirm')}
                     </button>
                 </div>
             ) : (
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsAdding(true);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs text-gray-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg border border-dashed border-gray-300 hover:border-indigo-300 transition-all font-medium"
                 >
                    <Plus size={12} /> {t('add_custom_option')}
                 </button>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Visual Editor Component (New) ---
const VisualEditor = React.forwardRef(({ value, onChange, banks, categories }, ref) => {
  const preRef = useRef(null);

  const handleScroll = (e) => {
    if (preRef.current) {
      preRef.current.scrollTop = e.target.scrollTop;
    }
  };

  const renderHighlights = (text) => {
    // Split by {{...}}
    const parts = text.split(/(\{\{[^{}\n]+\}\})/g);
    return parts.map((part, i) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
         const key = part.slice(2, -2).trim();
         const bank = banks[key];
         const categoryId = bank?.category || 'other';
         const colorKey = categories[categoryId]?.color || 'slate';
         const style = CATEGORY_STYLES[colorKey];
         
         // Style needs to match font metrics exactly, so avoid padding/border that adds width
         return (
            <span key={i} className={`${style.bg} ${style.text} font-bold rounded-sm border-b-2 ${style.border}`}>
               {part}
            </span>
         );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-50">
      {/* Backdrop */}
      <pre
        ref={preRef}
        className="absolute inset-0 p-8 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words pointer-events-none text-gray-800 overflow-hidden m-0"
        style={{ fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} 
        aria-hidden="true"
      >
        {renderHighlights(value)}
        <br />
      </pre>

      {/* Textarea */}
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        onScroll={handleScroll}
        className="absolute inset-0 w-full h-full p-8 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words bg-transparent text-transparent caret-gray-800 resize-none focus:outline-none overflow-auto z-10 m-0 selection:bg-indigo-200 selection:text-indigo-900"
        style={{ fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
        spellCheck={false}
      />
    </div>
  );
});

// --- 组件：可折叠的分类区块 (New Component) ---
const CategorySection = ({ catId, categories, banks, onInsert, onDeleteOption, onAddOption, onDeleteBank, onUpdateBankCategory, t }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const category = categories[catId];
  
  if (!category) return null;

  const catBanks = Object.entries(banks).filter(([_, bank]) => (bank.category || 'other') === catId);
  
  // 如果该分类下没有词库，不显示
  if (catBanks.length === 0) return null;

  const style = CATEGORY_STYLES[category.color] || CATEGORY_STYLES.slate;

  return (
    <div className="break-inside-avoid transition-all duration-300">
        <div 
            className="flex items-center gap-1 mb-2 cursor-pointer group select-none py-1 -ml-1 pl-1 rounded hover:bg-gray-50 transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
        >
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors mt-0.5">
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
            </div>
            <h3 className={`text-xs font-bold uppercase tracking-wider ${style.text} flex items-center gap-1.5 flex-1`}>
                <span className={`w-1.5 h-1.5 rounded-full ${style.dotBg}`}></span>
                {category.label}
                <span className="text-gray-300 font-normal ml-1 text-[10px] tabular-nums">({catBanks.length})</span>
            </h3>
            {/* 折叠时的装饰线 */}
            {isCollapsed && <div className="h-px bg-gray-100 flex-1 ml-2 mr-2"></div>}
        </div>
        
        {!isCollapsed && (
            <div className="space-y-3 pl-1">
                {catBanks.map(([key, bank]) => (
                    <BankGroup 
                        key={key}
                        bankKey={key} 
                        bank={bank} 
                        onInsert={onInsert}
                        onDeleteOption={onDeleteOption}
                        onAddOption={onAddOption}
                        onDeleteBank={onDeleteBank}
                        onUpdateBankCategory={onUpdateBankCategory}
                        categories={categories}
                        t={t}
                    />
                ))}
            </div>
        )}
    </div>
  );
};

// --- 组件：可折叠的词库组 ---
const BankGroup = ({ bankKey, bank, onInsert, onDeleteOption, onAddOption, onDeleteBank, onUpdateBankCategory, categories, t }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isEditingCategory, setIsEditingCategory] = useState(false);

    const categoryId = bank.category || 'other';
    const colorKey = categories[categoryId]?.color || 'slate';
    const style = CATEGORY_STYLES[colorKey];
    const premium = PREMIUM_STYLES[colorKey] || PREMIUM_STYLES.slate;

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', `{{${bankKey}}}`);
        e.dataTransfer.effectAllowed = 'copy';
    };

    return (
        <div 
            draggable="true"
            onDragStart={handleDragStart}
            className="relative group/card mb-3 cursor-grab active:cursor-grabbing"
        >
            {/* Gradient Border Glow */}
            <div 
                className="absolute -inset-[1px] rounded-xl opacity-70 group-hover/card:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${premium.from}, ${premium.to})` }}
            />

            {/* Main Card Content */}
            <div className="relative bg-white rounded-[11px] m-[1px] overflow-hidden">
                {/* Header / Collapsed View */}
                <div 
                    className="flex justify-between items-start p-3 cursor-pointer hover:bg-gray-50/80 transition-colors"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <div className="flex items-start gap-2 overflow-hidden flex-1 pr-2">
                        <div className="mt-0.5 flex-shrink-0 text-gray-400 group-hover/card:text-gray-600 transition-colors">
                            {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-gray-700 truncate leading-tight group-hover/card:text-gray-900 transition-colors">{bank.label}</span>
                            <code className="text-[10px] text-gray-400 truncate font-mono mt-0.5" style={{ color: premium.to }}>{`{{${bankKey}}}`}</code>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <button 
                            onClick={(e) => { e.stopPropagation(); onInsert(bankKey); }}
                            title={t('insert')}
                            className="p-1.5 bg-white rounded-lg border border-gray-100 hover:border-indigo-200 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all shadow-sm flex items-center gap-1"
                        >
                            <Plus size={14} /> 
                            {!isCollapsed && <span className="text-xs font-medium">{t('insert')}</span>}
                        </button>
                        
                        {!isCollapsed && (
                            <>
                                <button 
                                    onClick={(e) => { 
                                        e.stopPropagation(); 
                                        setIsEditingCategory(!isEditingCategory); 
                                    }}
                                    title={t('category_label')}
                                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <Settings size={14} />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteBank(bankKey); }}
                                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                
                {/* Expanded Content */}
                {!isCollapsed && (
                    <div className="p-3 pt-0">
                        <div className="h-px bg-gray-100 mb-3 -mx-3"></div>
                        
                        {/* Category Edit Mode */}
                        {isEditingCategory && (
                            <div className="mb-3 pb-3 border-b border-gray-100">
                                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">{t('category_label')}</label>
                                <select 
                                    value={categoryId}
                                    onChange={(e) => {
                                        onUpdateBankCategory(bankKey, e.target.value);
                                        setIsEditingCategory(false);
                                    }}
                                    className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-gray-50"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {Object.values(categories).map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="flex flex-col gap-2 mb-3">
                            {bank.options.map((opt, idx) => (
                                <div key={idx} className="group/opt flex items-center justify-between gap-2 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 px-2.5 py-1.5 rounded-lg text-xs text-gray-600 shadow-sm transition-all duration-200">
                                    <span className="truncate select-text" title={opt}>{opt}</span>
                                    <button 
                                        onClick={() => onDeleteOption(bankKey, opt)}
                                        className="opacity-0 group-hover/opt:opacity-100 text-gray-300 hover:text-red-500 transition-all flex-shrink-0"
                                    >
                                        <X size={12} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder={t('add_option_placeholder')}
                                className="flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-white"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onAddOption(bankKey, e.target.value);
                                        e.target.value = '';
                                    }
                                }}
                            />
                            <button 
                                className="p-1.5 bg-gray-50 border border-gray-200 text-gray-400 rounded-lg hover:bg-white hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
                                onClick={(e) => {
                                    const input = e.currentTarget.previousSibling;
                                    onAddOption(bankKey, input.value);
                                    input.value = '';
                                }}
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Modal: Category Manager ---
const CategoryManager = ({ isOpen, onClose, categories, setCategories, banks, setBanks, t }) => {
  const [newCatName, setNewCatName] = useState("");
  const [newCatColor, setNewCatColor] = useState("slate");
  const [editingCatId, setEditingCatId] = useState(null);
  const [tempCatName, setTempCatName] = useState("");
  
  const availableColors = Object.keys(CATEGORY_STYLES);

  if (!isOpen) return null;

  const handleAddCategory = () => {
    if (!newCatName.trim()) return;
    const newId = `cat_${Date.now()}`;
    
    setCategories(prev => ({
      ...prev,
      [newId]: { id: newId, label: newCatName, color: newCatColor }
    }));
    setNewCatName("");
    setNewCatColor("slate");
  };

  const handleDeleteCategory = (catId) => {
    if (catId === 'other') return; // Cannot delete default
    
    const catName = categories[catId].label;
    if (window.confirm(t('delete_category_confirm', { name: catName }))) {
       // 1. Update banks to use 'other'
       const updatedBanks = { ...banks };
       Object.keys(updatedBanks).forEach(key => {
           if (updatedBanks[key].category === catId) {
               updatedBanks[key].category = 'other';
           }
       });
       setBanks(updatedBanks);

       // 2. Remove category
       const updatedCats = { ...categories };
       delete updatedCats[catId];
       setCategories(updatedCats);
    }
  };

  const startEditing = (cat) => {
      setEditingCatId(cat.id);
      setTempCatName(cat.label);
  };

  const saveEditing = () => {
      if (!tempCatName.trim()) return;
      setCategories(prev => ({
          ...prev,
          [editingCatId]: { ...prev[editingCatId], label: tempCatName }
      }));
      setEditingCatId(null);
  };

  const changeColor = (catId, color) => {
      setCategories(prev => ({
          ...prev,
          [catId]: { ...prev[catId], color }
      }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <List size={18} /> {t('manage_categories')}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded text-gray-500"><X size={18}/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
           {/* Add New */}
           <div className="flex gap-2 items-center mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <input 
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                placeholder={t('category_name_placeholder')}
                className="flex-1 text-sm border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:border-indigo-500"
              />
              <select 
                value={newCatColor}
                onChange={(e) => setNewCatColor(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1.5 bg-white"
              >
                {availableColors.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <button 
                onClick={handleAddCategory}
                disabled={!newCatName.trim()}
                className="p-1.5 bg-indigo-600 text-white rounded disabled:opacity-50 hover:bg-indigo-700"
              >
                <Plus size={16} />
              </button>
           </div>

           {/* List */}
           <div className="space-y-2">
             {Object.values(categories).map(cat => (
               <div key={cat.id} className="flex items-center gap-2 p-2 border border-gray-100 rounded bg-white hover:border-gray-200 transition-colors">
                  <div className={`w-3 h-3 rounded-full ${CATEGORY_STYLES[cat.color].dotBg}`}></div>
                  
                  {editingCatId === cat.id ? (
                      <input 
                        autoFocus
                        value={tempCatName}
                        onChange={(e) => setTempCatName(e.target.value)}
                        onBlur={saveEditing}
                        onKeyDown={(e) => e.key === 'Enter' && saveEditing()}
                        className="flex-1 text-sm border border-indigo-300 rounded px-1 py-0.5 outline-none"
                      />
                  ) : (
                      <span className="flex-1 text-sm font-medium text-gray-700 truncate">{cat.label}</span>
                  )}

                  <div className="flex items-center gap-1">
                      {/* Color Picker */}
                      <div className="relative group/color">
                          <div className={`w-5 h-5 rounded cursor-pointer border border-gray-200 ${CATEGORY_STYLES[cat.color].bg}`}></div>
                          <div className="absolute right-0 top-full mt-1 hidden group-hover/color:grid grid-cols-5 gap-1 p-2 bg-white border border-gray-200 shadow-lg rounded z-10 w-32">
                              {availableColors.map(c => (
                                  <div 
                                    key={c} 
                                    onClick={() => changeColor(cat.id, c)}
                                    className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition-transform ${CATEGORY_STYLES[c].dotBg}`}
                                    title={c}
                                  />
                              ))}
                          </div>
                      </div>

                      <button onClick={() => startEditing(cat)} className="p-1 text-gray-400 hover:text-indigo-600 rounded"><Pencil size={14}/></button>
                      {cat.id !== 'other' && (
                          <button onClick={() => handleDeleteCategory(cat.id)} className="p-1 text-gray-400 hover:text-red-500 rounded"><Trash2 size={14}/></button>
                      )}
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Modal: Insert Variable Picker ---
const InsertVariableModal = ({ isOpen, onClose, categories, banks, onSelect, t }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh] animate-slide-up">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <List size={18} className="text-indigo-600" /> {t('insert')}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded text-gray-500"><X size={18}/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
           {Object.keys(categories).map(catId => {
               const catBanks = Object.entries(banks).filter(([_, bank]) => (bank.category || 'other') === catId);
               if (catBanks.length === 0) return null;
               
               const category = categories[catId];
               const style = CATEGORY_STYLES[category.color] || CATEGORY_STYLES.slate;

               return (
                   <div key={catId}>
                       <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${style.text} flex items-center gap-1.5 sticky top-0 bg-white py-1 z-10`}>
                           <span className={`w-1.5 h-1.5 rounded-full ${style.dotBg}`}></span>
                           {category.label}
                       </h4>
                       <div className="grid grid-cols-1 gap-2">
                           {catBanks.map(([key, bank]) => (
                               <button
                                   key={key}
                                   onClick={() => onSelect(key)}
                                   className={`
                                     flex items-center justify-between p-3 rounded-lg border text-left transition-all group
                                     bg-white border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-sm
                                   `}
                               >
                                   <div>
                                       <span className="block text-sm font-medium text-gray-700 group-hover:text-indigo-700">{bank.label}</span>
                                       <code className="text-[10px] text-gray-400 font-mono group-hover:text-indigo-400">{`{{${key}}}`}</code>
                                   </div>
                                   <Plus size={16} className="text-gray-300 group-hover:text-indigo-500" />
                               </button>
                           ))}
                       </div>
                   </div>
               );
           })}
        </div>
      </div>
    </div>
  );
};


// --- Helper Component: Premium Button (New) ---
const PremiumButton = ({ onClick, children, className = "", active = false, disabled = false, title, icon: Icon, color = "indigo" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const premium = PREMIUM_STYLES[color] || PREMIUM_STYLES.indigo;

    // Base classes
    const baseClasses = `
      flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale
      ${className}
    `;

    // Active/Hover styles using inline styles for premium look
    const style = (active || isHovered) && !disabled ? {
        background: `linear-gradient(135deg, ${premium.from} 0%, ${premium.to} 100%)`,
        boxShadow: `inset 0px 1px 2px 0px rgba(255, 255, 255, 0.3), 0 4px 12px ${premium.glowColor}`,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        transform: 'translateY(-1px)'
    } : {
        background: active ? '#EEF2FF' : 'white',
        border: '1px solid #E5E7EB',
        color: active ? premium.to : '#4B5563',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={baseClasses}
            style={style}
            title={title}
        >
            {Icon && <Icon size={16} />}
            {children && <span>{children}</span>}
        </button>
    );
};

// --- Helper Component: Editor Toolbar ---
const EditorToolbar = ({ onInsertClick, canUndo, canRedo, onUndo, onRedo, t }) => {
  return (
    <div className="h-12 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-4 flex-shrink-0 z-20">
      {/* Left: Undo/Redo */}
      <div className="flex items-center gap-2">
         <PremiumButton onClick={onUndo} disabled={!canUndo} title="Undo" icon={Undo} color="slate" className="!px-2 !py-1.5" />
         <PremiumButton onClick={onRedo} disabled={!canRedo} title="Redo" icon={Redo} color="slate" className="!px-2 !py-1.5" />
      </div>

      {/* Right: Insert & Tools */}
      <div className="flex items-center gap-2">
         <PremiumButton onClick={onInsertClick} icon={Plus} color="indigo">
            {t('insert')}
         </PremiumButton>
      </div>
    </div>
  );
};

// --- Helper Component: Lightbox ---
const Lightbox = ({ isOpen, onClose, src }) => {
  if (!isOpen || !src) return null;
  return (
    <div 
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        onClick={onClose}
    >
        <button 
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors z-50"
            onClick={onClose}
        >
            <X size={32} />
        </button>
        <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
        >
            <img 
                src={src} 
                alt="Preview" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none" 
            />
        </div>
    </div>
  );
};

const App = () => {
  // Global State with Persistence
  const [banks, setBanks] = useStickyState(INITIAL_BANKS, "app_banks_v8"); 
  const [defaults, setDefaults] = useStickyState(INITIAL_DEFAULTS, "app_defaults_v8");
  const [language, setLanguage] = useStickyState("cn", "app_language_v1"); 
  const [categories, setCategories] = useStickyState(INITIAL_CATEGORIES, "app_categories_v1"); // New state
  
  const [templates, setTemplates] = useStickyState(INITIAL_TEMPLATES_CONFIG, "app_templates_v9");
  const [activeTemplateId, setActiveTemplateId] = useStickyState("tpl_default", "app_active_template_id_v4");
  
  // UI State
  const [bankSidebarWidth, setBankSidebarWidth] = useStickyState(420, "app_bank_sidebar_width_v1"); // Default width increased to 420px for 2-column layout
  const [isResizing, setIsResizing] = useState(false);
  const [mobileTab, setMobileTab] = useState("editor"); // 'templates', 'banks', 'editor'

  const [isEditing, setIsEditing] = useState(false);
  const [activePopover, setActivePopover] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false); // New UI state
  const [isInsertModalOpen, setIsInsertModalOpen] = useState(false); // New UI state for Insert Picker
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false); // New UI state for Lightbox

  // Add Bank State
  const [isAddingBank, setIsAddingBank] = useState(false);
  const [newBankLabel, setNewBankLabel] = useState("");
  const [newBankKey, setNewBankKey] = useState("");
  const [newBankCategory, setNewBankCategory] = useState("other");

  // Template Management UI State
  const [editingTemplateNameId, setEditingTemplateNameId] = useState(null);
  const [tempTemplateName, setTempTemplateName] = useState("");
  const [zoomedImage, setZoomedImage] = useState(null);

  // History State for Undo/Redo
  const [historyPast, setHistoryPast] = useState([]);
  const [historyFuture, setHistoryFuture] = useState([]);
  const historyLastSaveTime = useRef(0);

  const popoverRef = useRef(null);
  const textareaRef = useRef(null);
  const sidebarRef = useRef(null);

  // Helper: Translate
  const t = (key, params = {}) => {
    let str = TRANSLATIONS[language][key] || key;
    Object.keys(params).forEach(k => {
        str = str.replace(`{{${k}}}`, params[k]);
    });
    return str;
  };

  // Fix initial categories if empty (migration safety)
  useEffect(() => {
      if (!categories || Object.keys(categories).length === 0) {
          setCategories(INITIAL_CATEGORIES);
      }
  }, []);

  // Derived State: Current Active Template
  const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0];

  // --- Effects ---
  // Reset history when template changes
  useEffect(() => {
      setHistoryPast([]);
      setHistoryFuture([]);
      historyLastSaveTime.current = 0;
  }, [activeTemplateId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setActivePopover(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Resizing Logic
  useEffect(() => {
      const handleMouseMove = (e) => {
          if (!isResizing) return;
          // Calculate new width based on mouse position relative to sidebar start
          // Since sidebar starts after the 240px template sidebar
          const newWidth = e.clientX - 240; 
          if (newWidth > 280 && newWidth < 800) { // Min/Max constraints
              setBankSidebarWidth(newWidth);
          }
      };

      const handleMouseUp = () => {
          setIsResizing(false);
          document.body.style.cursor = 'default';
          document.body.style.userSelect = 'auto';
      };

      if (isResizing) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          document.body.style.cursor = 'col-resize';
          document.body.style.userSelect = 'none'; // Prevent text selection while resizing
      }

      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
      };
  }, [isResizing, setBankSidebarWidth]);

  const startResizing = () => {
      setIsResizing(true);
  };

  // --- Template Actions ---

  const handleAddTemplate = () => {
    const newId = `tpl_${Date.now()}`;
    const newTemplate = {
      id: newId,
      name: t('new_template_name'),
      content: t('new_template_content'),
      selections: {}
    };
    setTemplates([...templates, newTemplate]);
    setActiveTemplateId(newId);
    setIsEditing(true);
  };

  const handleDuplicateTemplate = (t_item, e) => {
      e.stopPropagation();
      const newId = `tpl_${Date.now()}`;
      const newTemplate = {
          ...t_item,
          id: newId,
          name: `${t_item.name}${t('copy_suffix')}`,
          selections: { ...t_item.selections }
      };
      setTemplates([...templates, newTemplate]);
      setActiveTemplateId(newId);
  };

  const handleDeleteTemplate = (id, e) => {
    e.stopPropagation();
    if (templates.length <= 1) {
      alert(t('alert_keep_one'));
      return;
    }
    if (window.confirm(t('confirm_delete_template'))) {
      const newTemplates = templates.filter(t => t.id !== id);
      setTemplates(newTemplates);
      if (activeTemplateId === id) {
        setActiveTemplateId(newTemplates[0].id);
      }
    }
  };

  const startRenamingTemplate = (t, e) => {
    e.stopPropagation();
    setEditingTemplateNameId(t.id);
    setTempTemplateName(t.name);
  };

  const saveTemplateName = () => {
    if (tempTemplateName.trim()) {
      setTemplates(prev => prev.map(t => 
        t.id === editingTemplateNameId ? { ...t, name: tempTemplateName } : t
      ));
    }
    setEditingTemplateNameId(null);
  };

  const fileInputRef = useRef(null);
  
  const handleUploadImage = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setTemplates(prev => prev.map(t => 
                  t.id === activeTemplateId ? { ...t, imageUrl: reader.result } : t
              ));
          };
          reader.readAsDataURL(file);
      }
  };

  const handleResetImage = () => {
      const defaultUrl = INITIAL_TEMPLATES_CONFIG.find(t => t.id === activeTemplateId)?.imageUrl;
      if (defaultUrl) {
          setTemplates(prev => prev.map(t => 
              t.id === activeTemplateId ? { ...t, imageUrl: defaultUrl } : t
          ));
      }
  };

  const updateActiveTemplateContent = (newContent, forceSaveHistory = false) => {
    // History Management
    const now = Date.now();
    const shouldSave = forceSaveHistory || (now - historyLastSaveTime.current > 1000);

    if (shouldSave) {
        setHistoryPast(prev => [...prev, activeTemplate.content]);
        setHistoryFuture([]); // Clear redo stack on new change
        historyLastSaveTime.current = now;
    }

    setTemplates(prev => prev.map(t => 
      t.id === activeTemplateId ? { ...t, content: newContent } : t
    ));
  };

  const handleUndo = () => {
      if (historyPast.length === 0) return;
      
      const previous = historyPast[historyPast.length - 1];
      const newPast = historyPast.slice(0, -1);
      
      setHistoryFuture(prev => [activeTemplate.content, ...prev]);
      setHistoryPast(newPast);
      
      // Direct update without saving history again
      setTemplates(prev => prev.map(t => 
        t.id === activeTemplateId ? { ...t, content: previous } : t
      ));
  };

  const handleRedo = () => {
      if (historyFuture.length === 0) return;

      const next = historyFuture[0];
      const newFuture = historyFuture.slice(1);

      setHistoryPast(prev => [...prev, activeTemplate.content]);
      setHistoryFuture(newFuture);

      // Direct update without saving history again
      setTemplates(prev => prev.map(t => 
        t.id === activeTemplateId ? { ...t, content: next } : t
      ));
  };

  const updateActiveTemplateSelection = (uniqueKey, value) => {
    setTemplates(prev => prev.map(t => {
      if (t.id === activeTemplateId) {
        return {
          ...t,
          selections: { ...t.selections, [uniqueKey]: value }
        };
      }
      return t;
    }));
  };

  // --- Bank Actions ---

  const handleSelect = (key, index, value) => {
    const uniqueKey = `${key}-${index}`;
    updateActiveTemplateSelection(uniqueKey, value);
    setActivePopover(null);
  };

  const handleAddCustomAndSelect = (key, index, newValue) => {
    if (!newValue || !newValue.trim()) return;
    
    // 1. Add to bank if not exists
    if (!banks[key].options.includes(newValue)) {
        handleAddOption(key, newValue);
    }
    
    // 2. Select it
    handleSelect(key, index, newValue);
  };

  const handleAddOption = (key, newOption) => {
    if (!newOption.trim()) return;
    setBanks(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        options: [...prev[key].options, newOption]
      }
    }));
  };

  const handleDeleteOption = (key, optionToDelete) => {
    setBanks(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        options: prev[key].options.filter(opt => opt !== optionToDelete)
      }
    }));
  };

  const handleAddBank = () => {
    if (!newBankLabel.trim() || !newBankKey.trim()) return;
    const safeKey = newBankKey.trim().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
    
    if (banks[safeKey]) {
      alert(t('alert_id_exists'));
      return;
    }

    setBanks(prev => ({
      ...prev,
      [safeKey]: {
        label: newBankLabel,
        category: newBankCategory,
        options: []
      }
    }));
    setDefaults(prev => ({ ...prev, [safeKey]: "" }));
    setNewBankLabel("");
    setNewBankKey("");
    setNewBankCategory("other");
    setIsAddingBank(false);
  };

  const handleDeleteBank = (key) => {
    if (window.confirm(t('confirm_delete_bank', { name: banks[key].label }))) {
      const newBanks = { ...banks };
      delete newBanks[key];
      setBanks(newBanks);
    }
  };

  const handleUpdateBankCategory = (key, newCategory) => {
      setBanks(prev => ({
          ...prev,
          [key]: {
              ...prev[key],
              category: newCategory
          }
      }));
  };

  // --- Editor Actions ---

  const insertVariableToTemplate = (key) => {
    const textToInsert = ` {{${key}}} `;
    
    if (!isEditing) {
      setIsEditing(true);
      setTimeout(() => {
        updateActiveTemplateContent(activeTemplate.content + textToInsert, true);
        // Simple scroll to bottom hack
        if(textareaRef.current) textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      }, 50);
      return;
    };

    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = activeTemplate.content;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    
    updateActiveTemplateContent(`${before}${textToInsert}${after}`, true);
    
    setTimeout(() => {
      textarea.focus();
      const newPos = start + textToInsert.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const handleCopy = () => {
    let finalString = activeTemplate.content;
    const counters = {};

    finalString = finalString.replace(/{{(.*?)}}/g, (match, key) => {
        const k = key.trim();
        const idx = counters[k] || 0;
        counters[k] = idx + 1;

        const uniqueKey = `${k}-${idx}`;
        // Prioritize selection, then default
        return activeTemplate.selections[uniqueKey] || defaults[k] || match;
    });

    const cleanText = finalString
        .replace(/###\s/g, '')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\n\s*\n/g, '\n\n');

    navigator.clipboard.writeText(cleanText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  const handleExportImage = async () => {
    const element = document.getElementById('preview-card');
    if (!element) return;

    setIsExporting(true);
    try {
        // 获取元素实际高度以支持长图导出
        const elementHeight = element.scrollHeight;
        
        const canvas = await html2canvas(element, {
            scale: 2, // High resolution
            useCORS: true,
            backgroundColor: null, // Transparent
            logging: false,
            windowHeight: elementHeight + 200, // 确保捕获完整高度（含footer空间）
            height: elementHeight + 200,
            onclone: (clonedDoc) => {
                const clonedElement = clonedDoc.getElementById('preview-card');
                if (clonedElement) {
                   // Style for export - 支持长图
                   clonedElement.style.backgroundImage = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'; 
                   clonedElement.style.boxShadow = 'none';
                   clonedElement.style.margin = '0';
                   clonedElement.style.borderRadius = '0';
                   clonedElement.style.padding = '60px'; // Generous padding
                   clonedElement.style.width = '800px'; // Fixed width for consistent export
                   clonedElement.style.height = 'auto'; // 自动高度，支持长内容
                   clonedElement.style.maxWidth = 'none';
                   clonedElement.style.minHeight = 'auto';
                   
                   // Ensure Image Style in export to prevent stretching
                   const img = clonedElement.querySelector('img');
                   if (img) {
                       img.style.maxWidth = '300px';
                       img.style.maxHeight = '300px';
                       img.style.width = 'auto';
                       img.style.height = 'auto';
                       img.style.objectFit = 'contain';
                   }
                   
                   // Fix variable UI height issues
                   const variables = clonedElement.querySelectorAll('span[role="button"]');
                   variables.forEach(v => {
                       v.style.display = 'inline-flex';
                       v.style.alignItems = 'center';
                       v.style.verticalAlign = 'middle';
                       v.style.height = 'auto';
                       v.style.lineHeight = '1.6';
                       v.style.marginTop = '0';
                       v.style.marginBottom = '0';
                   });

                   // Add Footer Watermark
                   const footer = clonedDoc.createElement('div');
                   footer.style.marginTop = '60px';
                   footer.style.paddingTop = '30px';
                   footer.style.borderTop = '1px solid #d1d5db';
                   footer.style.textAlign = 'center';
                   footer.style.color = '#6b7280';
                   footer.style.fontSize = '14px';
                   footer.style.fontFamily = 'sans-serif';
                   footer.innerText = '由“提示词填空器”制作生成，Made by "提示词填空器"';
                   
                   clonedElement.appendChild(footer);
                }
            }
        });

        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `${activeTemplate.name.replace(/\s+/g, '_')}_prompt.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {
        console.error("Export failed:", err);
        alert("Export failed. Please try again.");
    } finally {
        setIsExporting(false);
    }
  };

  // --- Renderers ---

  const renderTemplateContent = () => {
    const lines = activeTemplate.content.split('\n');
    const counters = {}; 
    
    return lines.map((line, lineIdx) => {
      if (!line.trim()) return <div key={lineIdx} className="h-6"></div>;

      let content = line;
      let Type = 'div';
      let className = "text-gray-700 mb-3 leading-10";

      if (line.startsWith('### ')) {
        Type = 'h3';
        className = "text-lg font-bold text-gray-900 mt-6 mb-3 border-b border-gray-100 pb-2";
        content = line.replace('### ', '');
      } else if (line.trim().startsWith('- ')) {
        className = "ml-4 flex items-start gap-2 text-gray-700 mb-2 leading-10";
        content = (
          <>
            <span className="text-gray-400 mt-2.5">•</span>
            <span className="flex-1">{parseLineWithVariables(line.replace('- ', '').trim(), lineIdx, counters)}</span>
          </>
        );
        return <div key={lineIdx} className={className}>{content}</div>;
      } else if (/^\d+\.\s/.test(line.trim())) {
         className = "ml-4 flex items-start gap-2 text-gray-700 mb-2 leading-10";
         const number = line.trim().match(/^\d+\./)[0];
         const text = line.trim().replace(/^\d+\.\s/, '');
         content = (
            <>
              <span className="font-mono text-gray-400 mt-1 min-w-[20px]">{number}</span>
              <span className="flex-1">{parseLineWithVariables(text, lineIdx, counters)}</span>
            </>
         );
         return <div key={lineIdx} className={className}>{content}</div>;
      }

      if (typeof content === 'string') {
          return <Type key={lineIdx} className={className}>{parseLineWithVariables(content, lineIdx, counters)}</Type>;
      }
      return <Type key={lineIdx} className={className}>{content}</Type>;
    });
  };

  const parseLineWithVariables = (text, lineKeyPrefix, counters) => {
    const parts = text.split(/({{[^}]+}})/g);
    return parts.map((part, idx) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        const key = part.slice(2, -2).trim();
        const varIndex = counters[key] || 0;
        counters[key] = varIndex + 1;
        
        const uniqueKey = `${key}-${varIndex}`;
        const currentValue = activeTemplate.selections[uniqueKey] || defaults[key];

        return (
          <Variable 
            key={`${lineKeyPrefix}-${idx}`}
            id={key}
            index={varIndex}
            config={banks[key]}
            currentVal={currentValue}
            isOpen={activePopover === uniqueKey}
            onToggle={(e) => {
              e.stopPropagation();
              setActivePopover(activePopover === uniqueKey ? null : uniqueKey);
            }}
            onSelect={(opt) => handleSelect(key, varIndex, opt)}
            onAddCustom={(val) => handleAddCustomAndSelect(key, varIndex, val)}
            popoverRef={popoverRef}
            categories={categories}
            t={t}
          />
        );
      }
      
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((bp, bIdx) => {
        if (bp.startsWith('**') && bp.endsWith('**')) {
          return <strong key={`${lineKeyPrefix}-${idx}-${bIdx}`} className="text-gray-900">{bp.slice(2, -2)}</strong>;
        }
        return <span key={`${lineKeyPrefix}-${idx}-${bIdx}`}>{bp}</span>;
      });
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] font-sans text-slate-800 overflow-hidden md:p-4 md:gap-4">
      
      {/* --- 1. Templates Sidebar (Far Left) --- */}
      {/* Mobile: Show only if tab is 'templates'. Desktop: Always show. */}
      <div className={`
        ${mobileTab === 'templates' ? 'flex fixed inset-0 z-50 md:static' : 'hidden'} 
        md:flex w-full md:w-[260px] flex-col flex-shrink-0 h-full
        bg-white/60 backdrop-blur-xl md:rounded-3xl border border-white/40 shadow-lg overflow-hidden transition-all duration-300
      `}>
        <div className="p-5 border-b border-gray-200/50 bg-white/30 backdrop-blur-sm">
           <div className="mb-4 flex justify-between items-center">
               <h1 className="text-gray-800 font-bold text-sm tracking-wide">提示词填空器 <span className="text-gray-400 text-xs font-normal ml-1">V0.3.0</span></h1>
               {/* Language Toggle */}
                <button 
                  onClick={() => setLanguage(language === 'cn' ? 'en' : 'cn')}
                  className="text-[10px] bg-white/80 text-gray-500 px-2 py-1 rounded-full hover:text-indigo-600 hover:bg-indigo-50 border border-gray-200/50 transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Globe size={10} />
                  {language.toUpperCase()}
                </button>
           </div>

          <div className="flex items-center gap-2 text-gray-800 mb-1">
            <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold">{t('template_management')}</h2>
          </div>
          <p className="text-xs text-gray-400">{t('template_subtitle')}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
          {templates.map(t_item => (
             <div 
               key={t_item.id}
               onClick={() => {
                   setActiveTemplateId(t_item.id);
                   // On mobile, auto-switch to editor after selection
                   if (window.innerWidth < 768) {
                       setMobileTab('editor');
                   }
               }}
               className={`
                 group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200
                 ${activeTemplateId === t_item.id 
                    ? 'bg-white shadow-md ring-1 ring-indigo-100' 
                    : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'}
               `}
             >
               {editingTemplateNameId === t_item.id ? (
                 <input 
                   autoFocus
                   type="text"
                   value={tempTemplateName}
                   onChange={(e) => setTempTemplateName(e.target.value)}
                   onBlur={saveTemplateName}
                   onKeyDown={(e) => e.key === 'Enter' && saveTemplateName()}
                   className="bg-white text-gray-800 text-sm px-2 py-1 rounded-lg w-full outline-none border-2 border-indigo-400/50 shadow-sm"
                   onClick={(e) => e.stopPropagation()}
                 />
               ) : (
                 <>
                   <div className="flex items-center gap-2 overflow-hidden flex-1">
                     {/* Active Indicator */}
                     {activeTemplateId === t_item.id && (
                         <div className="w-1 h-4 bg-indigo-500 rounded-full flex-shrink-0 animate-in fade-in zoom-in duration-300"></div>
                     )}
                     <span className={`truncate text-sm ${activeTemplateId === t_item.id ? 'font-bold text-gray-800' : 'font-medium'}`}>{t_item.name}</span>
                   </div>
                   <div className={`flex items-center gap-1 ${activeTemplateId === t_item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                     <button 
                       title={t('rename')}
                       onClick={(e) => startRenamingTemplate(t_item, e)}
                       className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-indigo-600"
                     >
                       <Pencil size={12} />
                     </button>
                     <button 
                       title={t('duplicate')}
                       onClick={(e) => handleDuplicateTemplate(t_item, e)}
                       className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-indigo-600"
                     >
                       <CopyIcon size={12} />
                     </button>
                     <button 
                       title={t('delete')}
                       onClick={(e) => handleDeleteTemplate(t_item.id, e)}
                       className="p-1 hover:bg-red-50 rounded text-gray-400 hover:text-red-500"
                     >
                       <Trash2 size={12} />
                     </button>
                   </div>
                 </>
               )}
             </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm pb-20 md:pb-4">
          <PremiumButton
            onClick={handleAddTemplate}
            icon={Plus}
            color="indigo"
            active={true}
            className="w-full !py-2.5 text-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {t('new_template')}
          </PremiumButton>
        </div>

        {/* Footer Info - Hidden on mobile to save space */}
        <div className="hidden md:block p-4 pt-0 border-t border-transparent text-[10px] text-gray-400 leading-relaxed text-center opacity-60 hover:opacity-100 transition-opacity">
            <p>由角落工作室制作</p>
        </div>
      </div>

      {/* --- 2. Bank Sidebar (Middle Left) - UPDATED Resizable & Responsive Layout --- */}
      <div 
        ref={sidebarRef}
        className={`
            ${mobileTab === 'banks' ? 'flex fixed inset-0 z-50 bg-white md:static' : 'hidden'} 
            md:flex flex-col h-full flex-shrink-0 relative rounded-3xl overflow-hidden transition-all duration-300
            bg-white/40 backdrop-blur-md border border-white/30 shadow-lg
        `}
        style={{ width: window.innerWidth >= 768 ? `${bankSidebarWidth}px` : '100%' }}
      >
        {/* Resizer Handle - Desktop Only */}
        <div 
            className="hidden md:flex absolute -right-2 top-0 bottom-0 w-4 cursor-col-resize z-40 group items-center justify-center"
            onMouseDown={startResizing}
        >
             {/* Visual handle indicator on hover */}
            <div className="h-12 w-1 rounded-full bg-gray-300/50 group-hover:bg-indigo-400/80 transition-colors shadow-sm backdrop-blur-sm"></div>
        </div>

        <div className="p-5 border-b border-white/20 bg-white/40 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 text-gray-800">
                <div className="p-1.5 bg-white rounded-lg text-gray-600 shadow-sm border border-gray-100">
                    <Settings size={16} />
                </div>
                <h2 className="text-base font-bold">{t('bank_config')}</h2>
            </div>
            <button 
                onClick={() => setIsCategoryManagerOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 hover:bg-white text-gray-600 rounded-lg transition-all text-xs font-medium shadow-sm border border-transparent hover:border-gray-200 mr-1"
                title={t('manage_categories')}
            >
                <List size={14} />
                {t('manage_categories')}
            </button>
          </div>
          <p className="text-xs text-gray-500">{t('bank_subtitle')}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 pb-24 md:pb-20 custom-scrollbar">
          
          {bankSidebarWidth >= 520 || window.innerWidth < 768 ? (
             <div className="flex flex-col md:flex-row gap-4 items-start">
               {/* Left Column */}
               <div className="flex-1 flex flex-col gap-4 min-w-0 w-full">
                  {Object.keys(categories).filter((_, i) => i % 2 === 0).map(catId => (
                      <CategorySection 
                          key={catId}
                          catId={catId}
                          categories={categories}
                          banks={banks}
                          onInsert={(key) => {
                              insertVariableToTemplate(key);
                              // On mobile, maybe feedback or auto switch? Let's stay to allow multiple inserts
                          }}
                          onDeleteOption={handleDeleteOption}
                          onAddOption={handleAddOption}
                          onDeleteBank={handleDeleteBank}
                          onUpdateBankCategory={handleUpdateBankCategory}
                          t={t}
                      />
                  ))}
               </div>
               
               {/* Right Column */}
               <div className="flex-1 flex flex-col gap-4 min-w-0 w-full">
                  {Object.keys(categories).filter((_, i) => i % 2 === 1).map(catId => (
                      <CategorySection 
                          key={catId}
                          catId={catId}
                          categories={categories}
                          banks={banks}
                          onInsert={insertVariableToTemplate}
                          onDeleteOption={handleDeleteOption}
                          onAddOption={handleAddOption}
                          onDeleteBank={handleDeleteBank}
                          onUpdateBankCategory={handleUpdateBankCategory}
                          t={t}
                      />
                  ))}
               </div>
             </div>
          ) : (
            <div className="flex flex-col gap-4">
                {Object.keys(categories).map(catId => (
                    <CategorySection 
                        key={catId}
                        catId={catId}
                        categories={categories}
                        banks={banks}
                        onInsert={insertVariableToTemplate}
                        onDeleteOption={handleDeleteOption}
                        onAddOption={handleAddOption}
                        onDeleteBank={handleDeleteBank}
                        onUpdateBankCategory={handleUpdateBankCategory}
                        t={t}
                    />
                ))}
            </div>
          )}

            {isAddingBank ? (
                <div className="border border-dashed border-indigo-300/50 rounded-xl p-4 bg-indigo-50/30 mt-4 backdrop-blur-sm">
                    <h4 className="text-xs font-bold text-indigo-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        {t('add_bank_title')}
                    </h4>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1 font-medium">{t('label_name')}</label>
                            <input 
                                autoFocus
                                type="text" 
                                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none bg-white/80"
                                placeholder={t('label_placeholder')}
                                value={newBankLabel}
                                onChange={e => setNewBankLabel(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1 font-medium">{t('id_name')}</label>
                            <input 
                                type="text" 
                                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 font-mono focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none bg-white/80"
                                placeholder={t('id_placeholder')}
                                value={newBankKey}
                                onChange={e => setNewBankKey(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1 font-medium">{t('category_label')}</label>
                            <select 
                                value={newBankCategory}
                                onChange={e => setNewBankCategory(e.target.value)}
                                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none bg-white/80"
                            >
                                {Object.values(categories).map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <button 
                                onClick={handleAddBank}
                                className="flex-1 bg-indigo-600 text-white text-xs py-2 rounded-lg hover:bg-indigo-700 font-medium shadow-md shadow-indigo-500/20 transition-all"
                            >
                                {t('confirm_add')}
                            </button>
                            <button 
                                onClick={() => setIsAddingBank(false)}
                                className="flex-1 bg-white border border-gray-200 text-gray-600 text-xs py-2 rounded-lg hover:bg-gray-50 transition-all"
                            >
                                {t('cancel')}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={() => setIsAddingBank(true)}
                    className="w-full py-4 mt-4 border border-dashed border-gray-300 rounded-xl text-gray-400 hover:text-indigo-500 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2 font-medium text-sm backdrop-blur-sm"
                >
                    <Plus size={18} />
                    {t('add_bank_group')}
                </button>
            )}
        </div>
      </div>

      {/* --- Category Manager Modal --- */}
      <CategoryManager 
        isOpen={isCategoryManagerOpen} 
        onClose={() => setIsCategoryManagerOpen(false)}
        categories={categories}
        setCategories={setCategories}
        banks={banks}
        setBanks={setBanks}
        t={t}
      />

      {/* --- Insert Variable Modal --- */}
      <InsertVariableModal
        isOpen={isInsertModalOpen}
        onClose={() => setIsInsertModalOpen(false)}
        categories={categories}
        banks={banks}
        onSelect={(key) => {
            insertVariableToTemplate(key);
            setIsInsertModalOpen(false);
        }}
        t={t}
      />

      {/* --- 3. Main Editor (Right) --- */}
      <div className={`
          ${mobileTab === 'editor' ? 'flex fixed inset-0 z-50 md:static' : 'hidden'} 
          md:flex flex-1 flex-col h-full overflow-hidden relative
          bg-white/80 backdrop-blur-xl md:rounded-3xl border border-white/40 shadow-xl
      `}>
        
        {/* 顶部工具栏 */}
        <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-100/50 flex justify-between items-center z-20 h-[60px] md:h-[72px] bg-white/50 backdrop-blur-sm">
          <div className="min-w-0 flex-1 mr-2">
            <h1 className="text-base md:text-lg font-bold text-gray-800 truncate">{activeTemplate.name}</h1>
            <div className="hidden md:flex items-center gap-2 mt-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isEditing ? 'bg-amber-400 animate-pulse' : 'bg-green-400'}`}></span>
                <p className="text-xs text-gray-400">
                    {isEditing ? t('editing_status') : t('preview_status')}
                </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
             
             <div className="flex bg-gray-100/80 p-1 rounded-xl border border-gray-200 shadow-inner">
                <button
                    onClick={() => setIsEditing(false)}
                    className={`
                        p-1.5 md:px-3 md:py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5
                        ${!isEditing 
                            ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                    `}
                    title={t('preview_mode')}
                >
                    <Eye size={16} /> <span className="hidden md:inline">{t('preview_mode')}</span>
                </button>
                <button
                    onClick={() => setIsEditing(true)}
                    className={`
                        p-1.5 md:px-3 md:py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5
                        ${isEditing 
                            ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                    `}
                    title={t('edit_mode')}
                >
                    <Edit3 size={16} /> <span className="hidden md:inline">{t('edit_mode')}</span>
                </button>
             </div>

            <div className="h-6 w-px bg-gray-200 mx-1 hidden md:block"></div>

            <PremiumButton 
                onClick={handleExportImage} 
                disabled={isEditing} 
                title={t('export_image')} 
                icon={ImageIcon} 
                color="violet"
            >
                <span className="hidden sm:inline">{t('export_image')}</span>
            </PremiumButton>

            <PremiumButton 
                onClick={handleCopy} 
                title={copied ? t('copied') : t('copy_result')} 
                icon={copied ? Check : CopyIcon} 
                color={copied ? "emerald" : "indigo"}
                active={true} // Always active look for CTA
                className="transition-all duration-300 transform hover:-translate-y-0.5"
            >
                 <span className="hidden md:inline ml-1">{copied ? t('copied') : t('copy_result')}</span>
            </PremiumButton>
          </div>
        </div>

        {/* 核心内容区 */}
        <div className="flex-1 overflow-hidden relative pb-16 md:pb-0 flex flex-col bg-gradient-to-br from-white/60 to-gray-50/60">
            {isEditing && (
                <EditorToolbar 
                    onInsertClick={() => setIsInsertModalOpen(true)}
                    canUndo={historyPast.length > 0}
                    canRedo={historyFuture.length > 0}
                    onUndo={handleUndo}
                    onRedo={handleRedo}
                    t={t}
                />
            )}
            
            {isEditing ? (
                <div className="flex-1 relative overflow-hidden">
                    <VisualEditor
                        ref={textareaRef}
                        value={activeTemplate.content}
                        onChange={(e) => updateActiveTemplateContent(e.target.value)}
                        banks={banks}
                        categories={categories}
                    />
                </div>
            ) : (
                <div className="w-full h-full relative overflow-hidden group">
                     {/* Background Image Layer - Blurry Ambient Background */}
                     <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 opacity-60 blur-[80px] scale-125"
                        style={{ 
                            backgroundImage: activeTemplate.imageUrl ? `url(${activeTemplate.imageUrl})` : 'none',
                        }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div> {/* Additional Overlay for smoothness */}

                     <div className="w-full h-full overflow-y-auto px-3 py-4 md:p-8 custom-scrollbar relative z-10">
                         <div 
                            id="preview-card"
                            className="max-w-4xl mx-auto bg-white/80 rounded-2xl md:rounded-[2rem] shadow-xl md:shadow-2xl shadow-indigo-900/10 border border-white/60 p-4 sm:p-6 md:p-12 min-h-[500px] md:min-h-[600px] backdrop-blur-2xl transition-all duration-500 relative"
                         >
                            {/* --- Top Section: Title & Image --- */}
                            <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-10 relative">
                                {/* Left: Title & Meta Info */}
                                <div className="flex-1 min-w-0 pr-4 z-10 pt-2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight leading-tight">
                                        {activeTemplate.name}
                                    </h2>
                                    {/* Tags / Meta (Example) */}
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide border border-indigo-100/50">
                                            V0.3.0
                                        </span>
                                        <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 text-xs font-bold tracking-wide border border-amber-100/50">
                                            Prompt Template
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm font-medium mt-2">
                                        Made by "提示词填空器"
                                    </p>
                                </div>

                                {/* Right: Image (Overhanging) - 使用像素值偏移 */}
                                {activeTemplate.imageUrl && (
                                    <div 
                                        className="w-full md:w-auto mt-4 md:mt-0 relative md:-mr-[50px] md:-mt-[50px] z-20 flex-shrink-0"
                                    >
                                        <div 
                                            className="bg-white p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg md:shadow-xl transform md:rotate-2 border border-gray-100/50 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-2xl group/image w-full md:w-auto"
                                        >
                                            <div className="relative overflow-hidden rounded-md md:rounded-lg bg-gray-50 flex items-center justify-center">
                                                {/* Smart Image Container - 移动端全宽，桌面端固定尺寸 */}
                                                <img 
                                                    src={activeTemplate.imageUrl} 
                                                    alt="Template Preview" 
                                                    className="w-full md:w-auto md:max-w-[300px] md:max-h-[300px] h-auto object-contain block" 
                                                />
                                                
                                                {/* Hidden File Input */}
                                                <input 
                                                    type="file" 
                                                    ref={fileInputRef} 
                                                    onChange={handleUploadImage} 
                                                    className="hidden" 
                                                    accept="image/*"
                                                />

                                                {/* Hover Overlay with Actions */}
                                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover/image:opacity-100 backdrop-blur-[2px]">
                                                    {/* View Big */}
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); setZoomedImage(activeTemplate.imageUrl); }}
                                                        className="p-2 bg-white/90 text-gray-700 rounded-full hover:bg-white hover:text-indigo-600 transition-all shadow-lg transform translate-y-4 group-hover/image:translate-y-0 duration-300 hover:scale-110"
                                                        title="查看大图"
                                                    >
                                                        <Maximize2 size={18} />
                                                    </button>
                                                    
                                                    {/* Upload */}
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                                                        className="p-2 bg-white/90 text-gray-700 rounded-full hover:bg-white hover:text-indigo-600 transition-all shadow-lg transform translate-y-4 group-hover/image:translate-y-0 duration-300 delay-75 hover:scale-110"
                                                        title="上传图片"
                                                    >
                                                        <ImageIcon size={18} />
                                                    </button>
                                                    
                                                    {/* Reset */}
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); handleResetImage(); }}
                                                        className="p-2 bg-white/90 text-gray-700 rounded-full hover:bg-white hover:text-indigo-600 transition-all shadow-lg transform translate-y-4 group-hover/image:translate-y-0 duration-300 delay-150 hover:scale-110"
                                                        title="重置默认图片"
                                                    >
                                                        <Undo size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* --- Bottom Section: Content --- */}
                            <div className="relative z-10 border-t border-gray-100 pt-8 mt-4">
                                <div id="final-prompt-content" className="prose prose-slate max-w-none text-base md:text-lg leading-relaxed text-gray-600">
                                    {renderTemplateContent()}
                                </div>
                            </div>
                         </div>
                         
                         {/* Bottom spacing for aesthetics */}
                         <div className="h-24"></div>
                     </div>
                </div>
            )}
        </div>
      </div>

      {/* --- Image Lightbox --- */}
      {zoomedImage && (
        <div 
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
            onClick={() => setZoomedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10"
                onClick={() => setZoomedImage(null)}
            >
                <X size={28} />
            </button>
            <img 
                src={zoomedImage} 
                alt="Zoomed Preview" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}

      {/* --- Mobile Bottom Navigation --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 flex justify-around items-center z-50 h-16 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <button 
             onClick={() => setMobileTab('templates')}
             className={`flex flex-col items-center justify-center w-full h-full gap-1 ${mobileTab === 'templates' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
             <FileText size={20} />
             <span className="text-[10px] font-medium">{t('template_management')}</span>
          </button>
          
          <button 
             onClick={() => setMobileTab('banks')}
             className={`flex flex-col items-center justify-center w-full h-full gap-1 ${mobileTab === 'banks' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
             <Settings size={20} />
             <span className="text-[10px] font-medium">{t('bank_config')}</span>
          </button>
          
          <button 
             onClick={() => setMobileTab('editor')}
             className={`flex flex-col items-center justify-center w-full h-full gap-1 ${mobileTab === 'editor' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
             <Edit3 size={20} />
             <span className="text-[10px] font-medium">Editor</span>
          </button>
      </div>

    </div>
  );
};

export default App;