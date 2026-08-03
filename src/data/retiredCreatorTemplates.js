export const RETIRED_CREATOR_TEMPLATE_IDS = Object.freeze([
  'tpl_creator_comic_studio',
  'tpl_creator_neko_tensei',
  'tpl_creator_line_sticker_studio',
  'tpl_creator_line_chat_maker',
  'tpl_creator_gemini_watermark_cleaner',
  'tpl_creator_cast_lock',
  'tpl_creator_comic_storyboard_source',
  'tpl_creator_comic_character_sheet_source',
  'tpl_creator_comic_expression_sheet_source',
  'tpl_creator_comic_pose_sheet_source',
  'tpl_creator_comic_world_ref_source',
  'tpl_creator_comic_panel_source',
  'tpl_creator_comic_bake_source',
  'tpl_creator_cast_lock_source',
  'tpl_creator_neko_page_source',
  'tpl_creator_line_sticker_grid_source',
  'tpl_creator_line_sticker_theme_source',
  'tpl_creator_line_chat_writer_source',
  'tpl_creator_line_chat_critic_source',
]);

export const RETIRED_CREATOR_TEMPLATES_BACKUP_KEY = 'app_retired_creator_templates_v1';

export const retireCreatorTemplates = (templates = []) => {
  const retiredIds = new Set(RETIRED_CREATOR_TEMPLATE_IDS);
  const activeTemplates = [];
  const retiredTemplates = [];

  templates.forEach((template) => {
    const isRetired = retiredIds.has(template?.id) || template?.tags?.includes('我的作品');
    (isRetired ? retiredTemplates : activeTemplates).push(template);
  });

  return { activeTemplates, retiredTemplates };
};

export const archiveRetiredCreatorTemplates = (templates = []) => {
  if (!templates.length || typeof window === 'undefined') return;

  try {
    const stored = JSON.parse(
      window.localStorage.getItem(RETIRED_CREATOR_TEMPLATES_BACKUP_KEY) || '[]'
    );
    const archived = Array.isArray(stored) ? stored : [];
    const byId = new Map(archived.map((template) => [template.id, template]));
    templates.forEach((template) => byId.set(template.id, template));
    window.localStorage.setItem(
      RETIRED_CREATOR_TEMPLATES_BACKUP_KEY,
      JSON.stringify([...byId.values()])
    );
  } catch (error) {
    console.warn('保存退場作者範本備份失敗:', error);
  }
};
