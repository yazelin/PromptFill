/**
 * 社群貢獻的範本與詞庫集合
 *
 * 特別感謝 ZeroLu 整理的 awesome-nanobanana-pro 專案
 * https://github.com/ZeroLu/awesome-nanobanana-pro
 *
 * 本檔案包含 70 個精選社群範本，涵蓋：
 * - Photorealism & Aesthetics (寫實與美學)
 * - Creative Experiments (創意實驗)
 * - Education & Knowledge (教育與知識)
 * - E-commerce & Virtual Studio (電商與虛擬攝影棚)
 * - Workplace & Productivity (職場與生產力)
 * - Photo Editing & Restoration (照片編輯與修復)
 * - Interior Design (室內設計)
 * - Social Media & Marketing (社群媒體與行銷)
 * - Daily Life & Translation (日常生活與翻譯)
 * - Social Networking & Avatars (社交與頭像)
 *
 * 此檔案由工具自動產生，請勿手動編輯
 */




// 社群範本 (70 個)
export const COMMUNITY_TEMPLATES = [
  {
    "id": "tpl_community_1_1",
    "name": {
      "zh-tw": "超寫實群像構圖",
      "en": "Hyper-Realistic Crowd Composition"
    },
    "content": {
      "zh-tw": "創建一張{{render_style}}、超清晰、全彩大幅圖像，展示來自不同時代的大量名人，全部站在一個寬幅電影畫面中。圖像必須看起來像完美拍攝的編輯封面，具有無可挑剔的燈光、逼真的皮膚紋理、頭髮的微觀細節、毛孔、反射和布料纖維。\n\n**整體風格與氛圍：** {{render_style}}，8K，淺景深，柔和自然補光+強烈金色{{lighting}}。高動態範圍，校準{{post_effect}}。膚色完美準確。清晰的布料細節，可見個別纖維。平衡構圖，略微廣角鏡頭（35mm），中心加權。所有名人自然互動，微笑、擺姿勢或交談。最小背景噪點，但有足夠的世界建構感。\n\n**環境：** 日落時分俯瞰現代城市天際線的豪華露天屋頂露台。元素包括：溫暖的金色光線環繞剪影。拋光大理石。",
      "en": "Create a {{render_style}}, ultra-sharp, full-color large-format image featuring a massive group of celebrities from different eras, all standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.\n\nGENERAL STYLE & MOOD: Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden {{lighting}}. High dynamic range, calibrated {{post_effect}}. Skin tones perfectly accurate. Crisp fabric detail with individual threads visible. Balanced composition, slightly wide-angle lens (35mm), center-weighted. All celebrities interacting naturally, smiling, posing, or conversing. Minimal background noise, but with enough world-building to feel real.\n\nTHE ENVIRONMENT: A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline. Elements include: Warm golden light wrapping around silhouettes. Polished marble."
    },
    "imageUrl": "https://github.com/user-attachments/assets/d72a27d6-b830-476a-a9f1-bfe20fef50d4",
    "author": "@SebJefferies",
    "selections": {
      "render_style-0": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-1": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-2": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "lighting-0": {
        "zh-tw": "輪廓光",
        "en": "rim light"
      },
      "lighting-1": {
        "zh-tw": "輪廓光",
        "en": "rim light"
      },
      "post_effect-0": {
        "zh-tw": "調色",
        "en": "color grading"
      },
      "post_effect-1": {
        "zh-tw": "調色",
        "en": "color grading"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@SebJefferies](https://x.com/SebJefferies/status/1991531687147360728)"
  },
  {
    "id": "tpl_community_1_2",
    "name": {
      "zh-tw": "2000年代鏡子自拍",
      "en": "2000s Mirror Selfie"
    },
    "content": {
      "zh-tw": "使用 Gemini Nano Banana 創建一張 2000 年代風格的鏡子自拍。\n\n{\n  \"subject\": {\n    \"description\": \"一位年輕女性正在拍鏡子自拍，有著非常長的蓬鬆深色波浪髮和柔軟的空氣瀏海\",\n    \"age\": \"年輕成年\",\n    \"expression\": \"自信且略帶{{expressions}}\",\n    \"hair\": {\n      \"color\": \"深色\",\n      \"style\": \"非常長、蓬鬆的波浪髮配柔軟空氣瀏海\"\n    },\n    \"clothing\": {\n      \"top\": {\n        \"type\": \"合身短版T恤\",\n        \"color\": \"奶油白\",\n        \"details\": \"印有可愛{{art_style}}風格貓臉圖案，有大藍眼睛、鬍鬚和小粉嘴\"\n      }\n    },\n    \"face\": {\n      \"preserve_original\": true,\n      \"makeup\": \"自然妝容，柔和粉色水潤腮紅和{{material}}紅唇\"\n    }\n  },\n  \"accessories\": {\n    \"earrings\": {\"type\": \"金色幾何圈形耳環\"},\n    \"jewelry\": {\"waistchain\": \"銀色腰鏈\"},\n    \"device\": {\"type\": \"智慧型手機\", \"details\": \"圖案手機殼\"}\n  },\n  \"photography\": {\n    \"camera_style\": \"2000年代早期數位相機美學\",\n    \"lighting\": \"強烈{{lighting}}，明亮過曝高光但主體仍可見\",\n    \"angle\": \"鏡子自拍\",\n    \"shot_type\": \"緊湊自拍構圖\",\n    \"texture\": \"微妙顆粒感、復古高光、V6真實感、清晰細節、柔和陰影\"\n  },\n  \"background\": {\n    \"setting\": \"懷舊2000年代早期臥室\",\n    \"wall_color\": \"{{color_tone}}色調\",\n    \"elements\": [\"厚實木製梳妝台\", \"CD播放器\", \"2000年代流行偶像海報\", \"懸掛串珠門簾\", \"擺滿唇蜜的凌亂梳妝台\"],\n    \"atmosphere\": \"真實2000年代懷舊氛圍\",\n    \"lighting\": \"復古\"\n  }\n}",
      "en": "Create a 2000s Mirror Selfie of yourself using Gemini Nano Banana.\n\n{\n  \"subject\": {\n    \"description\": \"A young woman taking a mirror selfie with very long voluminous dark waves and soft wispy bangs\",\n    \"age\": \"young adult\",\n    \"expression\": \"confident and slightly {{expressions}}\",\n    \"hair\": {\n      \"color\": \"dark\",\n      \"style\": \"very long, voluminous waves with soft wispy bangs\"\n    },\n    \"clothing\": {\n      \"top\": {\n        \"type\": \"fitted cropped t-shirt\",\n        \"color\": \"cream white\",\n        \"details\": \"features a large cute {{art_style}}-style cat face graphic with big blue eyes, whiskers, and a small pink mouth\"\n      }\n    },\n    \"face\": {\n      \"preserve_original\": true,\n      \"makeup\": \"natural glam makeup with soft pink dewy blush and {{material}} red pouty lips\"\n    }\n  },\n  \"accessories\": {\n    \"earrings\": {\n      \"type\": \"gold geometric hoop earrings\"\n    },\n    \"jewelry\": {\n      \"waistchain\": \"silver waistchain\"\n    },\n    \"device\": {\n      \"type\": \"smartphone\",\n      \"details\": \"patterned case\"\n    }\n  },\n  \"photography\": {\n    \"camera_style\": \"early-2000s digital camera aesthetic\",\n    \"lighting\": \"harsh super-{{lighting}} with bright blown-out highlights but subject still visible\",\n    \"angle\": \"mirror selfie\",\n    \"shot_type\": \"tight selfie composition\",\n    \"texture\": \"subtle grain, retro highlights, V6 realism, crisp details, soft shadows\"\n  },\n  \"background\": {\n    \"setting\": \"nostalgic early-2000s bedroom\",\n    \"wall_color\": \"{{color_tone}} tones\",\n    \"elements\": [\n      \"chunky wooden dresser\",\n      \"CD player\",\n      \"posters of 2000s pop icons\",\n      \"hanging beaded door curtain\",\n      \"cluttered vanity with lip glosses\"\n    ],\n    \"atmosphere\": \"authentic 2000s nostalgic vibe\",\n    \"lighting\": \"retro\"\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/06a1fc1f-a4a0-4ce3-b699-cd9ade95f1ea",
    "author": "@ZaraIrahh",
    "selections": {
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "color_tone-0": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "color_tone-1": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "art_style-0": {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      "art_style-1": {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      "expressions-0": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "expressions-1": {
        "zh-tw": "俏皮",
        "en": "playful"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@ZaraIrahh](https://x.com/ZaraIrahh/status/1991681614368436468?s=20)"
  },
  {
    "id": "tpl_community_1_3",
    "name": {
      "zh-tw": "維密風格攝影",
      "en": "Victoria's Secret Style Photoshoot"
    },
    "content": {
      "zh-tw": "創建維多利亞的秘密風格的華麗攝影。一位{{expressions}}的年輕女性（保持上傳參考圖片中人物的面部100%準確）幾乎側身站立，略微前傾，在秀場最後準備階段。化妝師正在為她塗口紅（畫面中只能看到她的手）。她穿著飾有珠繡和水晶的緊身胸衣配短蓬裙，以及大型羽毛翅膀。圖像具有「後台」效果。\n\n背景是燈光昏暗的房間，可能在舞台下方。主要強調女孩的臉部和服裝細節。強調眼神的表現力和服裝的奢華外觀。照片由相機{{lighting}}照明，突出緊身胸衣上珠子和水晶的光澤，以及女孩閃亮的皮膚。維多利亞的秘密風格：感性、奢華、魅力。非常詳細。重要：不要改變面部。",
      "en": "Create a glamorous photoshoot in the style of Victoria's Secret. A {{expressions}} young woman attached in the uploaded reference image ( Keep the face of the person 100% accurate from the reference image ) stands almost sideways, slightly bent forward, during the final preparation for the show. Makeup artists apply lipstick to her (only her hands are visible in the frame). She is wearing a corset decorated with beaded embroidery and crystals with a short fluffy skirt, as well as large feather wings. The image has a \"backstage\" effect.\n\nThe background is a darkly lit room, probably under the podium. The main emphasis is on the girl's face and the details of her costume. Emphasize the expressiveness of the gaze and the luxurious look of the outfit. The photo is lit by a {{lighting}} from the camera, which emphasizes the shine of the beads and crystals on the corset, as well as the girl's shiny skin. Victoria's Secret style: sensuality, luxury, glamour. Very detailed. Important: do not change the face."
    },
    "imageUrl": "https://github.com/user-attachments/assets/2a87dd2b-c4b0-480f-8760-ea919240c10b",
    "author": "@NanoBanana_labs",
    "selections": {
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "expressions-0": {
        "zh-tw": "自信",
        "en": "confident"
      },
      "expressions-1": {
        "zh-tw": "自信",
        "en": "confident"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@NanoBanana_labs](https://x.com/NanoBanana_labs/status/1991947916479762788?s=20)"
  },
  {
    "id": "tpl_community_1_4",
    "name": {
      "zh-tw": "90年代相機風格肖像",
      "en": "1990s Camera Style Portrait"
    },
    "content": {
      "zh-tw": "不改變她原本的臉，創建一張美麗年輕女性的肖像，有著瓷白皮膚，使用1990年代風格相機的直射前方{{lighting}}拍攝。她凌亂的深棕色頭髮紮起，擺出平靜卻略帶{{expressions}}的微笑。她穿著現代寬鬆奶油色毛衣。背景是貼滿美學雜誌海報和貼紙的深白色牆壁，在昏暗燈光下營造出舒適的臥室或個人房間氛圍。35mm鏡頭{{lighting}}創造懷舊光暈。",
      "en": "Without changing her original face, create a portrait of a beautiful young woman with porcelain-white skin, captured with a 1990s-style camera using a direct front {{lighting}}. Her messy dark brown hair is tied up, posing with a calm yet {{expressions}} smile. She wears a modern oversized cream sweater. The background is a dark white wall covered with aesthetic magazine posters and stickers, evoking a cozy bedroom or personal room atmosphere under dim lighting. The 35mm lens flash creates a nostalgic glow."
    },
    "imageUrl": "https://github.com/user-attachments/assets/e08a58e6-eeea-4ee1-9dea-4813eb4bcb54",
    "author": "@kingofdairyque",
    "selections": {
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-2": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "expressions-0": {
        "zh-tw": "微笑",
        "en": "smile"
      },
      "expressions-1": {
        "zh-tw": "微笑",
        "en": "smile"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@kingofdairyque](https://x.com/kingofdairyque/status/1991780760030961768?s=20)"
  },
  {
    "id": "tpl_community_1_5",
    "name": {
      "zh-tw": "一鍵商務照（矽谷風格）",
      "en": "One-Click Business Photo (Silicon Valley Style)"
    },
    "content": {
      "zh-tw": "保持上傳圖片中人物的面部特徵完全一致。為他們穿上專業的海軍藍西裝配白襯衫，類似參考圖片。背景：將主體置於乾淨、純深灰色攝影棚背景前。背景應有微妙漸層，主體後方略亮，邊緣較暗（{{post_effect}}效果）。不應有其他物品。攝影風格：使用 {{camera_device}} A7III 配 85mm f/1.4 鏡頭拍攝，創造討喜的人像壓縮效果。燈光：使用經典{{lighting}}設置。主要主光應在臉上創造柔和、有型的陰影。微妙的{{lighting}}應將主體的肩膀和頭髮從深色背景中分離出來。關鍵細節：呈現自然皮膚紋理和可見毛孔，不是磨皮效果。在眼睛中添加自然眼神光。西裝布料應顯示微妙的羊毛紋理。最終圖像應是超{{render_style}}、8K專業頭像照。",
      "en": "Keep the facial features of the person in the uploaded image exactly consistent . Dress them in a professional navy blue business suit with a white shirt, similar to the reference image. Background : Place the subject against a clean, solid dark gray studio photography backdrop . The background should have a subtle gradient , slightly lighter behind the subject and darker towards the edges ({{post_effect}} effect). There should be no other objects. Photography Style : Shot on a {{camera_device}} A7III with an 85mm f/1.4 lens , creating a flattering portrait compression. Lighting : Use a classic {{lighting}} setup . The main key light should create soft, defining shadows on the face. A subtle rim light should separate the subject's shoulders and hair from the dark background. Crucial Details : Render natural skin texture with visible pores , not an airbrushed look. Add natural catchlights to the eyes . The fabric of the suit should show a subtle wool texture.Final image should be an ultra-{{render_style}}, 8k professional headshot."
    },
    "imageUrl": "https://github.com/user-attachments/assets/e3a108c0-a895-4cd0-ae2a-1c0e81846cfc",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "三點佈光",
        "en": "three-point lighting"
      },
      "lighting-1": {
        "zh-tw": "三點佈光",
        "en": "three-point lighting"
      },
      "lighting-2": {
        "zh-tw": "三點佈光",
        "en": "three-point lighting"
      },
      "post_effect-0": {
        "zh-tw": "暗角",
        "en": "vignette"
      },
      "post_effect-1": {
        "zh-tw": "暗角",
        "en": "vignette"
      },
      "camera_device-0": {
        "zh-tw": "Sony 無反",
        "en": "Sony mirrorless"
      },
      "camera_device-1": {
        "zh-tw": "Sony 無反",
        "en": "Sony mirrorless"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_1_6",
    "name": {
      "zh-tw": "情感底片攝影",
      "en": "Emotional Film Photography"
    },
    "content": {
      "zh-tw": "保持上傳圖片中人物的面部特徵完全一致。風格：使用 Kodak Portra 400 底片拍攝的電影感、情感肖像。場景：{{lighting}}（日落）時分的城市街頭咖啡館窗邊。溫暖、懷舊的光線照射在臉側。氛圍：添加微妙的{{post_effect}}和柔焦，創造{{expressions}}、敘事氛圍。動作：主體略微偏離相機視線，手持咖啡杯，表情放鬆、自然。細節：高品質、景深、城市燈光散景背景。",
      "en": "Keep the facial features of the person in the uploaded image exactly consistent . Style : A cinematic, emotional portrait shot on Kodak Portra 400 film . Setting : An urban street coffee shop window at {{lighting}} (sunset) . Warm, nostalgic lighting hitting the side of the face. Atmosphere : Apply a subtle {{post_effect}} and soft focus to create a {{expressions}}, storytelling vibe. Action : The subject is looking slightly away from the camera, holding a coffee cup, with a relaxed, candid expression. Details : High quality, depth of field, bokeh background of city lights."
    },
    "imageUrl": "https://github.com/user-attachments/assets/c1cf3691-923c-4aef-992e-d74a826e1996",
    "author": "WeChat Article",
    "selections": {
      "lighting-0": {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      "lighting-1": {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      "expressions-0": {
        "zh-tw": "夢幻",
        "en": "dreamy"
      },
      "expressions-1": {
        "zh-tw": "夢幻",
        "en": "dreamy"
      },
      "post_effect-0": {
        "zh-tw": "底片顆粒",
        "en": "film grain"
      },
      "post_effect-1": {
        "zh-tw": "底片顆粒",
        "en": "film grain"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_1_7",
    "name": {
      "zh-tw": "專業證件照生成器",
      "en": "Professional Headshot Creator"
    },
    "content": {
      "zh-tw": "\"一張專業、高解析度的個人照片，保持輸入圖像中人物的精確面部結構、身份和關鍵特徵。主體從胸部以上取景，頭頂留有充足空間。人物直視相機。他們被設計成專業攝影棚拍攝風格，穿著優質智慧休閒炭灰色西裝外套。背景是純'#562226'中性攝影棚色。使用高角度、明亮通透的柔和{{lighting}}拍攝，輕柔照亮臉部並在眼睛中創造微妙的眼神光，傳達清晰感。使用 85mm f/1.8 鏡頭{{composition}}拍攝，淺景深，精緻的眼部對焦，美麗柔和的散景。觀察西裝外套布料紋理的清晰細節、個別髮絲和自然{{render_style}}皮膚紋理。氛圍散發自信、專業和親和力。乾淨明亮的電影{{post_effect}}，帶有微妙暖意和平衡色調，確保精緻現代感。\"",
      "en": "\"A professional, high-resolution profile photo, maintaining the exact facial structure, identity, and key features of the person in the input image. The subject is framed from the chest up, with ample headroom. The person looks directly at the camera. They are styled for a professional photo studio shoot, wearing a premium smart casual blazer in a subtle charcoal gray. The background is a solid '#562226' neutral studio color. Shot from a {{composition}} with bright and airy soft, diffused {{lighting}}, gently illuminating the face and creating a subtle catchlight in the eyes, conveying a sense of clarity. Captured on an 85mm f/1.8 lens with a shallow depth of field, exquisite focus on the eyes, and beautiful, soft bokeh. Observe crisp detail on the fabric texture of the blazer, individual strands of hair, and natural, {{render_style}} skin texture. The atmosphere exudes confidence, professionalism, and approachability. Clean and bright cinematic {{post_effect}} with subtle warmth and balanced tones, ensuring a polished and contemporary feel.\""
    },
    "imageUrl": "https://github.com/user-attachments/assets/229b8bae-d685-4d73-a4e4-a6143db51141",
    "author": "@PavolRusnak",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "lighting-1": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "composition-0": {
        "zh-tw": "人像構圖",
        "en": "portrait"
      },
      "composition-1": {
        "zh-tw": "人像構圖",
        "en": "portrait"
      },
      "post_effect-0": {
        "zh-tw": "調色",
        "en": "color grading"
      },
      "post_effect-1": {
        "zh-tw": "調色",
        "en": "color grading"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@PavolRusnak](https://x.com/PavolRusnak/status/1994097306526994558)"
  },
  {
    "id": "tpl_community_1_8",
    "name": {
      "zh-tw": "超寫實動漫聚光燈肖像",
      "en": "Hyperrealistic Anime Portrait in Spotlight"
    },
    "content": {
      "zh-tw": "生成一張站在全黑背景中的女性角色的超{{render_style}}{{art_style}}肖像。\n燈光：使用僅聚焦在臉部中心的**窄光束{{lighting}}**。\n光線邊緣必須銳利且戲劇化。\n{{lighting}}外的所有區域應快速落入深暗（高衰減陰影），幾乎與黑色背景融合。\n不是{{lighting}}。\n頭髮：長深色頭髮，部分髮絲落在臉上。頭髮下部應消失在陰影中。\n姿勢：一隻手輕輕抬起靠近嘴唇，呈害羞、猶豫的姿態。\n眼睛直視相機，帶有{{expressions}}情緒。\n服裝：黑色長袖針織毛衣；\n毛衣和身體應大部分消失在黑暗中，細節極少。\n整體色調：深色、情緒化、戲劇化、{{expressions}}。\n僅在臉部被照亮的部分有高對比度。\n{{lighting}}外的一切應幾乎不可見。",
      "en": "Generate a hyperrealistic {{render_style}}-{{art_style}} portrait of a female character standing in a completely black background.\nLighting: use a **narrow beam {{lighting}}** focused only on the center of the face. \nThe edges of the light must be sharp and dramatic. \nAll areas outside the spotlight should fall quickly into deep darkness \n(high falloff shadow), almost blending into the black background. \nNot soft lighting.\nHair: long dark hair with some strands falling over the face. The lower parts of the hair should fade into the shadows.\nPose: one hand raised gently to the lips in a shy, hesitant gesture. \nEyes looking directly at the camera with a {{expressions}} mood.\nClothing: black long-sleeve knit sweater; \nthe sweater and body should mostly disappear into the darkness with minimal detail.\nOverall tone: dark, moody, dramatic, mysterious. \nHigh-contrast only in the lit portion of the face. \nEverything outside the spotlight should be nearly invisible."
    },
    "imageUrl": "https://github.com/user-attachments/assets/c9c29247-410b-4eff-bc4c-c5aa4ee8deb9",
    "author": "@SimplyAnnisa",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-1": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-2": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-3": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-4": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "art_style-0": {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      "art_style-1": {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      "expressions-0": {
        "zh-tw": "神秘",
        "en": "mysterious"
      },
      "expressions-1": {
        "zh-tw": "神秘",
        "en": "mysterious"
      },
      "expressions-2": {
        "zh-tw": "神秘",
        "en": "mysterious"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Anissa ([@SimplyAnnisa](https://x.com/SimplyAnnisa)) - [Post](https://x.com/SimplyAnnisa/status/1995131975351562274?s=20)"
  },
  {
    "id": "tpl_community_1_9",
    "name": {
      "zh-tw": "浴室鏡子自拍",
      "en": "Bathroom Mirror Selfie"
    },
    "content": {
      "zh-tw": "{\n  \"subject\": {\n    \"description\": \"年輕女性在浴室拍鏡子自拍，天真的鹿眼但服裝說明了另一個故事\",\n    \"mirror_rules\": \"面對鏡子，臀部略微傾斜，靠近鏡子填滿畫面\",\n    \"age\": \"20出頭\",\n    \n    \"expression\": {\n      \"eyes\": \"大大的天真鹿眼透過睫毛向上看，'是我嗎？'的能量\",\n      \"mouth\": \"柔軟嘟嘴，嘴唇微張，也許舌尖輕觸嘴角\",\n      \"brows\": \"柔和，略微上揚，假裝天真\",\n      \"overall\": \"天使臉蛋但魔鬼身材，對比是重點\"\n    },\n    \n    \"hair\": {\n      \"color\": \"鉑金色\",\n      \"style\": \"凌亂丸子頭或爪夾，散落髮絲修飾臉龐，毫不費力\"\n    },\n    \n    \"body\": {\n      \"waist\": \"纖細\",\n      \"ass\": \"圓潤、豐滿，短褲布料上提夾在臀縫間，每條曲線都透過薄運動布料可見\",\n      \"thighs\": \"豐滿、柔軟，短褲幾乎包不住\"\n    },\n    \n    \"clothing\": {\n      \"top\": {\n        \"type\": \"超迷你短版T恤\",\n        \"color\": \"黃色\",\n        \"graphic\": \"單一香蕉標誌/圖案\",\n        \"fit\": \"幾乎包不住胸部，布料繃緊，結束於胸下，露出整個腹部\"\n      },\n      \"bottom\": {\n        \"type\": \"緊身網球裙褲或運動翹臀短褲\",\n        \"color\": \"白色\",\n        \"material\": \"薄彈性運動布料\",\n        \"fit\": \"真空緊貼，上提，夾在臀縫間，可見布料皺褶，毫無保留\"\n      }\n    },\n    \n    \"face\": {\n      \"features\": \"漂亮 - 大眼睛、小鼻子、豐滿嘴唇\",\n      \"makeup\": \"極簡、自然、唇蜜、裸妝感\"\n    }\n  },\n\n  \"accessories\": {\n    \"headwear\": {\"type\": \"Goorin Bros 帽子\", \"details\": \"黑色動物貼片，反戴或傾斜\"},\n    \"headphones\": {\"type\": \"白色頭戴式耳機\", \"position\": \"掛在脖子上\"},\n    \"device\": {\"type\": \"{{camera_device}}\", \"details\": \"可在鏡中看見，舉在胸口高度\"}\n  },\n\n  \"photography\": {\n    \"camera_style\": \"休閒{{camera_device}}鏡子自拍，非專業\",\n    \"quality\": \"{{camera_device}}相機 - 好但非攝影棚，{{render_style}}社交媒體品質\",\n    \"angle\": \"平視角度，正對鏡子\",\n    \"shot_type\": \"3/4身體，靠近鏡子\",\n    \"aspect_ratio\": \"9:16垂直\",\n    \"texture\": \"自然，略帶{{camera_device}}顆粒感，未過度處理\"\n  },\n\n  \"background\": {\n    \"setting\": \"普通公寓浴室\",\n    \"style\": \"普通紐約公寓浴室，非豪華\",\n    \"elements\": [\"白色地鐵磚牆\", \"基本浴室鏡子配上方良好照明\", \"簡單白色洗手台\", \"可見洗漱用品\", \"掛鉤上的毛巾\", \"可能可見浴簾邊緣\", \"檯面上的小植物\"],\n    \"atmosphere\": \"真實浴室，有生活感，普通家庭\",\n    \"lighting\": \"鏡子上方良好梳妝燈 - 明亮、均勻、討喜但非攝影棚\"\n  },\n\n  \"vibe\": {\n    \"energy\": \"天真臉蛋 + 罪惡身材 = 整個遊戲\",\n    \"mood\": \"剛準備好打網球但先做內容，穿著幾乎沒穿時的'什麼？'表情\",\n    \"contrast\": \"鹿眼 + 短褲吃屁股 = 致命\",\n    \"caption_energy\": \"'有人要打網球嗎？🍌' 或 '要遲到了 oops'\"\n  }\n}",
      "en": "{\n  \"subject\": {\n    \"description\": \"Young woman taking bathroom mirror selfie, innocent doe eyes but the outfit tells another story\",\n    \"mirror_rules\": \"facing mirror, hips slightly angled, close to mirror filling frame\",\n    \"age\": \"early 20s\",\n    \n    \"expression\": {\n      \"eyes\": \"big innocent doe eyes looking up through lashes, 'who me?' energy\",\n      \"mouth\": \"soft pout, lips slightly parted, maybe tiny tongue touching corner\",\n      \"brows\": \"soft, slightly raised, faux innocent\",\n      \"overall\": \"angel face but devil body, the contrast is the whole point\"\n    },\n    \n    \"hair\": {\n      \"color\": \"platinum blonde\",\n      \"style\": \"messy bun or claw clip, loose strands framing face, effortless\"\n    },\n    \n    \"body\": {\n      \"waist\": \"tiny\",\n      \"ass\": \"round, full, fabric of shorts riding up and clinging between cheeks, every curve visible through thin athletic material\",\n      \"thighs\": \"thick, soft, shorts barely containing\"\n    },\n    \n    \"clothing\": {\n      \"top\": {\n        \"type\": \"ULTRA mini crop tee\",\n        \"color\": \"yellow\",\n        \"graphic\": \"single BANANA logo/graphic\",\n        \"fit\": \"barely containing chest, fabric stretched tight, ends just below, shows full stomach\"\n      },\n      \"bottom\": {\n        \"type\": \"tight tennis skort or athletic booty shorts\",\n        \"color\": \"white\",\n        \"material\": \"thin stretchy athletic fabric\",\n        \"fit\": \"vacuum tight, riding up, clinging between cheeks, fabric creases visible, leaving nothing to imagination\"\n      }\n    },\n    \n    \"face\": {\n      \"features\": \"pretty - big eyes, small nose, full lips\",\n      \"makeup\": \"minimal, natural, lip gloss, no-makeup makeup\"\n    }\n  },\n\n  \"accessories\": {\n    \"headwear\": {\n      \"type\": \"Goorin Bros cap\",\n      \"details\": \"black with animal patch, worn backwards or tilted\"\n    },\n    \"headphones\": {\n      \"type\": \"over-ear white headphones\",\n      \"position\": \"around neck\"\n    },\n    \"device\": {\n      \"type\": \"{{camera_device}}\",\n      \"details\": \"visible in mirror, held at chest level\"\n    }\n  },\n\n  \"photography\": {\n    \"camera_style\": \"casual iPhone mirror selfie, NOT professional\",\n    \"quality\": \"iPhone camera - good but not studio, {{render_style}} social media quality\",\n    \"angle\": \"eye-level, straight on mirror\",\n    \"shot_type\": \"3/4 body, close to mirror\",\n    \"aspect_ratio\": \"9:16 vertical\",\n    \"texture\": \"natural, slightly grainy iPhone look, not over-processed\"\n  },\n\n  \"background\": {\n    \"setting\": \"regular apartment bathroom\",\n    \"style\": \"normal NYC apartment bathroom, not luxury\",\n    \"elements\": [\n      \"white subway tile walls\",\n      \"basic bathroom mirror with good lighting above\",\n      \"simple white sink vanity\",\n      \"toiletries visible - skincare bottles, toothbrush holder\",\n      \"towel hanging on hook\",\n      \"maybe shower curtain edge visible\",\n      \"small plant on counter\"\n    ],\n    \"atmosphere\": \"real bathroom, lived-in, normal home\",\n    \"lighting\": \"good vanity lighting above mirror - bright, even, flattering but not studio\"\n  },\n\n  \"vibe\": {\n    \"energy\": \"innocent face + sinful body = the whole game\",\n    \"mood\": \"just got ready for tennis but making content first, 'what?' expression while wearing basically nothing\",\n    \"contrast\": \"doe eyes + ass eating the shorts = lethal\",\n    \"caption_energy\": \"'tennis anyone? 🍌' or 'running late oops'\"\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/97b5f622-e9a9-48df-993f-c18c1da01132",
    "author": "@gaucheai",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "camera_device-0": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-1": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-2": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-3": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-4": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "gauche ([@gaucheai](https://x.com/gaucheai)) - [Post](https://x.com/gaucheai/status/1996184483343520186?s=20)"
  },
  {
    "id": "tpl_community_1_10",
    "name": {
      "zh-tw": "黑板動漫藝術記錄",
      "en": "Chalkboard Anime Art Documentation"
    },
    "content": {
      "zh-tw": "{\n  \"intent\": \"特定黑板藝術作品的{{render_style}}記錄，在教室環境中捕捉粉筆媒材的短暫性質，展示單一{{art_style}}角色。\",\n  \"frame\": {\n    \"aspect_ratio\": \"4:3\",\n    \"composition\": \"{{composition}}中景聚焦黑板壁畫。構圖包括前景的講台以提供比例，單一角色的藝術作品主導背景空間。\",\n    \"style_mode\": \"紀錄{{render_style}}、紋理聚焦、環境自然主義\"\n  },\n  \"subject\": {\n    \"primary_subject\": \"標準綠色教室黑板上大型、精緻的《海賊王》波雅·漢考克粉筆畫。\",\n    \"visual_details\": \"{{art_style}}描繪波雅·漢考克以霸氣姿勢，位於黑板中央。她以標誌性的長直黑髮和公主切繪製，使用濃密黑色粉筆加白色光澤點綴。她的表情傲慢霸氣，細緻的深藍色眼睛。她雙手比出愛心形狀，參考她的'甜甜果實'技能。她穿著露背紅色上衣配紫色幾何圖案和金色蛇形耳環，使用鮮豔彩色粉筆繪製。\",\n    \"medium_texture\": \"圖像保留粉筆的塵土、{{material}}質感。可見的排線和交叉排線筆觸在她的服裝和頭髮上創造陰影。綠色石板上的模糊區域表明手工混合的顏色。\",\n    \"surrounding_elements\": \"角色右側，垂直日文文字'海賊女帝'以清晰白色粉筆書寫。\"\n  },\n  \"environment\": {\n    \"location\": \"標準日本學校教室。\",\n    \"foreground_elements\": \"{{material}}講台佔據前景下方。桌面上散落著黃色彩色粉筆盒、鬆散的紅、白、藍{{color_tone}}粉筆和積滿粉筆灰的黑色毛氈板擦。\",\n    \"background_elements\": \"綠色黑板橫跨畫面寬度，邊框為積累粉筆灰的金屬粉筆槽。上方牆壁是普通的米白色石膏，有一個小型壁掛揚聲器。\",\n    \"atmosphere\": \"安靜學術氛圍，靜止感暗示房間目前無人。\"\n  },\n  \"lighting\": {\n    \"type\": \"漫射環境教室照明。\",\n    \"quality\": \"柔和、無方向性照明，由頂部日光燈混合左側窗戶日光提供。光線均勻，防止黑板表面眩光同時突出粉筆紋理。\",\n    \"color_temperature\": \"中性白，約5000K，確保紅色和紫色粉筆對深綠色板的準確色彩還原。\",\n    \"direction\": \"頂部和略微正面。\"\n  },\n  \"camera\": {\n    \"sensor_format\": \"35mm全片幅數位感測器。\",\n    \"lens\": \"35mm定焦鏡頭。\",\n    \"aperture\": \"f/5.6\",\n    \"depth_of_field\": \"中等景深，保持黑板畫清晰對焦，同時允許前景桌面元素略微柔化。\",\n    \"shutter_speed\": \"1/60s\",\n    \"iso\": \"400\",\n    \"camera_position\": \"站立{{composition}}，設置足夠遠以取景整幅畫作和講台。\"\n  },\n  \"negative\": {\n    \"content\": \"多個角色、綠谷、死柄木、男性角色、數位藝術疊加、向量圖形、{{material}}紋理、{{art_style}}、凌亂構圖、極端{{composition}}、魚眼鏡頭。\",\n    \"style\": \"無過飽和、無柔焦濾鏡、無重度暗角。\"\n  }\n}",
      "en": "{\n  \"intent\": \"{{render_style}} documentation of a specific chalkboard art piece featuring a single anime character, capturing the ephemeral nature of the medium within a classroom context.\",\n  \"frame\": {\n    \"aspect_ratio\": \"4:3\",\n    \"composition\": \"A centered medium shot focusing on the chalkboard mural. The composition includes the teacher's desk in the immediate foreground to provide scale, with the artwork of the single character dominating the background space.\",\n    \"style_mode\": \"documentary_realism, texture-focused, ambient naturalism\"\n  },\n  \"subject\": {\n    \"primary_subject\": \"A large-scale, intricate chalk drawing of Boa Hancock from 'One Piece' on a standard green classroom blackboard.\",\n    \"visual_details\": \"The illustration depicts Boa Hancock in a commanding pose, positioned centrally on the board. She is drawn with her signature long, straight black hair with a hime cut, rendered using dense application of black chalk with white accents for sheen. Her expression is haughty and imperious, with detailed dark blue eyes. She is depicted forming a heart shape with her hands, referencing her 'Mero Mero Mellow' technique. She wears a revealing red blouse with purple geometric patterns and gold snake-shaped earrings, drawn with vibrant colored chalks.\",\n    \"medium_texture\": \"The image preserves the dusty, {{material}} quality of the chalk. Visible hatching and cross-hatching strokes create shading on her clothing and hair. Smudged areas on the green slate indicate where colors have been blended by hand.\",\n    \"surrounding_elements\": \"To the right of the character, vertical Japanese text reading '海賊女帝' (Pirate Empress) is written in crisp white chalk.\"\n  },\n  \"environment\": {\n    \"location\": \"A standard Japanese school classroom.\",\n    \"foreground_elements\": \"A wooden teacher's desk occupies the lower foreground. Scattered across the surface are a yellow box of colored chalks, loose sticks of red, white, and blue {{color_tone}} chalk, and a dust-covered black felt eraser.\",\n    \"background_elements\": \"The green chalkboard spans the width of the frame, bordered by a metallic chalk tray containing accumulated chalk dust. The wall above is a plain, off-white plaster, featuring a small mounted speaker box.\",\n    \"atmosphere\": \"Quiet and academic, with a sense of stillness suggesting the room is currently unoccupied.\"\n  },\n  \"lighting\": {\n    \"type\": \"Diffuse ambient classroom lighting.\",\n    \"quality\": \"Soft, nondirectional illumination provided by overhead fluorescent fixtures mixed with daylight from windows on the left. The light is even, preventing glare on the chalkboard surface while highlighting the texture of the chalk.\",\n    \"color_temperature\": \"Neutral white, approximately 5000K, ensuring accurate color rendition of the red and purple chalks against the dark green board.\",\n    \"direction\": \"Overhead and slightly frontal.\"\n  },\n  \"camera\": {\n    \"sensor_format\": \"35mm full-frame digital sensor.\",\n    \"lens\": \"35mm prime lens.\",\n    \"aperture\": \"f/5.6\",\n    \"depth_of_field\": \"Moderate depth of field, keeping the chalkboard drawing in sharp focus while allowing the foreground desk elements to soften slightly.\",\n    \"shutter_speed\": \"1/60s\",\n    \"iso\": \"400\",\n    \"camera_position\": \"Eye-level standing position, set back enough to frame the entire drawing and the desk.\"\n  },\n  \"negative\": {\n    \"content\": \"Multiple characters, Midoriya, Shigaraki, male characters, digital art overlay, vector graphics, paper texture, {{art_style}}, messy composition, extreme {{composition}}, fisheye lens.\",\n    \"style\": \"No hyper-saturation, no soft focus filters, no heavy vignetting.\"\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/05ac3ebe-d624-4beb-bce1-b4552e266afa",
    "author": "@IamEmily2050",
    "selections": {
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-2": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "composition-0": {
        "zh-tw": "低角度",
        "en": "low angle"
      },
      "composition-1": {
        "zh-tw": "低角度",
        "en": "low angle"
      },
      "composition-2": {
        "zh-tw": "低角度",
        "en": "low angle"
      },
      "composition-3": {
        "zh-tw": "低角度",
        "en": "low angle"
      },
      "material-0": {
        "zh-tw": "霧面",
        "en": "matte"
      },
      "material-1": {
        "zh-tw": "霧面",
        "en": "matte"
      },
      "material-2": {
        "zh-tw": "霧面",
        "en": "matte"
      },
      "material-3": {
        "zh-tw": "霧面",
        "en": "matte"
      },
      "color_tone-0": {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      "color_tone-1": {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      "art_style-0": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-1": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-2": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-3": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Emily ([@IamEmily2050](https://x.com/IamEmily2050)) - [Post](https://x.com/IamEmily2050/status/1994624635300974734?s=20)"
  },
  {
    "id": "tpl_community_1_11",
    "name": {
      "zh-tw": "雪中抱狗肖像",
      "en": "Portrait with Puppy in Snow"
    },
    "content": {
      "zh-tw": "{\n  \"image_description\": {\n    \"subject\": {\n      \"face\": {\n        \"preserve_original\": true,\n        \"reference_match\": true,\n        \"description\": \"女孩的面部特徵、表情和身份必須與參考圖像完全一致。\"\n      },\n      \"girl\": {\n        \"age\": \"年輕\",\n        \"hair\": \"長波浪棕色頭髮\",\n        \"expression\": \"對著鏡頭嘟嘴\",\n        \"clothing\": \"黑色連帽衫\"\n      },\n      \"puppy\": {\n        \"type\": \"小白狗\",\n        \"eyes\": \"淺藍色\",\n        \"expression\": \"{{expressions}}，看向前方\"\n      }\n    },\n    \"environment\": {\n      \"setting\": \"冬天戶外場景\",\n        \"lighting\": \"{{lighting}}\",\n        \"color_tone\": \"{{color_tone}}\",\n      \"elements\": [\n        \"地面覆蓋著雪\",\n        \"背景是光禿禿的樹\",\n        \"女孩身後有一輛模糊的銀色汽車\"\n      ],\n      \"sky\": \"晴朗的淺藍色天空\"\n    },\n    \"mood\": \"可愛、自然的冬季戶外時刻\",\n    \"camera_style\": \"柔和景深、自然日光、細膩的冬季色調\"\n  }\n}",
      "en": "{\n  \"image_description\": {\n    \"subject\": {\n      \"face\": {\n        \"preserve_original\": true,\n        \"reference_match\": true,\n        \"description\": \"The girl's facial features, expression, and identity must remain exactly the same as the reference image.\"\n      },\n      \"girl\": {\n        \"age\": \"young\",\n        \"hair\": \"long, wavy brown hair\",\n        \"expression\": \"puckering her lips toward the camera\",\n        \"clothing\": \"black hooded sweatshirt\"\n      },\n      \"puppy\": {\n        \"type\": \"small white puppy\",\n        \"eyes\": \"light blue\",\n        \"expression\": \"{{expressions}}, looking forward\"\n      }\n    },\n    \"environment\": {\n      \"setting\": \"outdoors in a winter scene\",\n      \"elements\": [\n        \"snow covering the ground\",\n        \"bare trees in the background\",\n        \"blurred silver car behind the girl\"\n      ],\n      \"sky\": \"clear light blue sky\"\n    },\n    \"mood\": \"cute, natural, winter outdoor moment\",\n    \"camera_style\": \"soft depth of field, natural daylight, subtle winter tones\"\n  }\n}\n\nLighting: {{lighting}}, Color tone: {{color_tone}}."
    },
    "imageUrl": "https://github.com/user-attachments/assets/71b3b612-6fca-4d5e-8b76-fcb14610c227",
    "author": "@ZaraIrahh",
    "selections": {
      "expressions-0": {
        "zh-tw": "平靜",
        "en": "calm"
      },
      "expressions-1": {
        "zh-tw": "平靜",
        "en": "calm"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "color_tone-0": {
        "zh-tw": "冷色調",
        "en": "cool tones"
      },
      "color_tone-1": {
        "zh-tw": "冷色調",
        "en": "cool tones"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Zara ([@ZaraIrahh](https://x.com/ZaraIrahh)) - [Post](https://x.com/ZaraIrahh/status/1993560252319776812?s=20)"
  },
  {
    "id": "tpl_community_1_12",
    "name": {
      "zh-tw": "魚眼電影角色自拍",
      "en": "Fisheye Movie Character Selfie"
    },
    "content": {
      "zh-tw": "電影感魚眼廣角360度自拍，主體手中不可見任何相機或手機。一張[上傳圖像中的人物]與{{character_companion}}的真實誇張自拍。他們正在對著鏡頭做鬼臉。\n\n（更詳細版本）\n一張{{render_style}}魚眼廣角自拍，使用復古35mm魚眼鏡頭拍攝，產生強烈的桶狀畸變。主體手中不可見任何相機或手機。\n主題與動作：一張{{composition}}、變形的合照，展示[上傳圖像中的人物]與{{character_companion}}自拍。每個人都在做誇張的鬼臉，因為{{lighting}}而略微瞇眼。\n燈光與質感：刺眼的直射機身閃光燈照明，在主體身後產生硬陰影。真實的{{post_effect}}、邊緣輕微動態模糊和色差。看起來像是混亂幕後時刻捕捉的業餘快照，而非攝影棚照片。",
      "en": "A film-like fisheye wide-angle 360-degree selfie without any camera or phone visible in the subject's hands. A real and exaggerated selfie of [person from uploaded image] with {{character_companion}}. They are making faces at the camera.\n\n(more detailed version)\nA {{render_style}} fisheye wide-angle selfie, captured with a vintage 35mm fisheye lens creating heavy barrel distortion. without any camera or phone visible in the subject's hands.\nSubject & Action: A {{composition}}, distorted group photo featuring [Person From Uploaded Image] taking selfie with {{character_companion}}. Everyone is making wild, exaggerated faces, squinting slightly from the {{lighting}}.\nLighting & Texture: Harsh, direct on-camera flash lighting that creates hard shadows behind the subjects. Authentic {{post_effect}}, slight motion blur on the edges, and chromatic aberration. It looks like a candid, amateur snapshot as if captured during a chaotic behind-the-scenes moment, not a studio photo."
    },
    "imageUrl": "https://github.com/user-attachments/assets/93c8c4c9-bb75-47a1-90a2-ff21f556b925",
    "author": "@Arminn_Ai",
    "selections": {
      "render_style-0": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-1": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "post_effect-0": {
        "zh-tw": "底片顆粒",
        "en": "film grain"
      },
      "post_effect-1": {
        "zh-tw": "底片顆粒",
        "en": "film grain"
      },
      "character_companion-0": {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      },
      "character_companion-1": {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      },
      "character_companion-2": {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      },
      "character_companion-3": {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "ΛRMIN | AI ([@Arminn_Ai](https://x.com/Arminn_Ai)) - [Post](https://x.com/Arminn_Ai/status/1996285140893622391?s=20)"
  },
  {
    "id": "tpl_community_1_13",
    "name": {
      "zh-tw": "與電影角色一致性自拍",
      "en": "Character Consistency Selfie with Movie Character"
    },
    "content": {
      "zh-tw": "\"我正在{{show_name}}片場與{{character_companion}}自拍。\n\n保持參考圖像中人物的100%相同面部特徵、骨骼結構、膚色、面部表情、姿勢和外觀。1:1比例，4K細節。\"",
      "en": "\"I'm taking a selfie with {{character_companion}} on the set of {{show_name}}.\n\nKeep the person exactly as shown in the reference image with 100% identical facial features, bone structure, skin tone, facial expression, pose, and appearance. 1:1 aspect ratio, 4K detail.\""
    },
    "imageUrl": "https://github.com/user-attachments/assets/7494ea87-15c1-494e-899c-9e0e3b6bafe5",
    "author": "@rohanpaul_ai",
    "selections": {
      "show_name-0": {
        "zh-tw": "龍貓",
        "en": "My Neighbor Totoro"
      },
      "show_name-1": {
        "zh-tw": "龍貓",
        "en": "My Neighbor Totoro"
      },
      "character_companion-0": {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      },
      "character_companion-1": {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Rohan Paul ([@rohanpaul_ai](https://x.com/rohanpaul_ai)) - [Post](https://x.com/rohanpaul_ai/status/1995641282056925680?s=20)"
  },
  {
    "id": "tpl_community_1_14",
    "name": {
      "zh-tw": "博物館藝術展自拍",
      "en": "Museum Art Exhibition Selfie"
    },
    "content": {
      "zh-tw": "一張[上傳參考圖像]在高端博物館展覽空間擺姿勢的商業級照片。\n[角色來源：嚴格基於上傳的參考圖像。\n他們身後掛著一幅大型華麗相框的古典{{art_style}}。\n\n畫作描繪同一人物，但以豐富的傳統油畫風格渲染，\n帶有濃厚、可見的厚塗筆觸、深沉紋理和畫布上的豐富色彩。\n畫廊聚光燈照射在有紋理的顏料表面。\n傑作、超細節、{{lighting}}、強對比、戲劇性陰影、8K超高清、高度細緻紋理、專業攝影。",
      "en": "A commercial grade photograph of [uploaed reference image] posing inside a high-end museum exhibition space.\n[the character Source: Based strictly on the uploaded reference image.\nBehind them hangs a large, ornate framed classical {{art_style}}.\n\nThe painting depicts the same person but rendered in a rich,\ntraditional oil painting style with thick, visible impasto brushstrokes, deep textures, and rich color palettes on canvas.\nGallery spotlights hit the textured paint surface.\nMasterpiece, ultra-detailed, {{lighting}}, strong contrast, dramatic shadows, 8K UHD, highly detailed textures\n, professional photography."
    },
    "imageUrl": "https://github.com/user-attachments/assets/cfbb70b2-1d9b-48ef-927a-7a6bc2a6128d",
    "author": "@brad_zhang2024",
    "selections": {
      "lighting-0": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      "lighting-1": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      "art_style-0": {
        "zh-tw": "油畫",
        "en": "oil painting"
      },
      "art_style-1": {
        "zh-tw": "油畫",
        "en": "oil painting"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "烟花老师（一支烟花） ([@brad_zhang2024](https://x.com/brad_zhang2024)) - [Post](https://x.com/brad_zhang2024/status/1996072707348201827?s=20)"
  },
  {
    "id": "tpl_community_1_15",
    "name": {
      "zh-tw": "數位相機螢幕顯示",
      "en": "Compact Camera Screen Display"
    },
    "content": {
      "zh-tw": "使用附加照片的面部特徵。一張年輕女性顯示在小型{{camera_device}}數位相機螢幕上的{{composition}}鏡頭。相機機身環繞圖像，可見其按鈕、轉盤和紋理表面，包括FUNC/SET轉盤、DISP按鈕和側面的「IMAGE STABILIZER」標籤。螢幕上的照片顯示這位女性在夜間室內，被明亮的內置{{lighting}}照亮，在她的臉部和頭髮上創造出銳利的高光。她有長黑髮散落在臉部一側，表情柔和、嘴唇微張。閃光燈在昏暗、雜亂的廚房背景下突出她的特徵，背景中有家電、架子和{{material}}表面柔和模糊。氛圍是坦率、原始、懷舊的，讓人想起2000年代早期的數位相機快照。顏色略帶{{color_tone}}和冷調、強烈的閃光對比，以及來自顯示螢幕的自然顆粒感。照片預覽中無文字、無標誌。\n\n比例尺：4:5垂直\n\n相機：小型數位相機模擬\n鏡頭：等效28-35mm\n光圈：f/2.8\nISO：400\n快門速度：1/60配閃光燈\n白平衡：自動閃光燈\n燈光：主體上刺眼的直射閃光燈，背景低環境光\n{{post_effect}}：懷舊數位相機色調、高對比閃光、細微顯示螢幕顆粒感、真實螢幕光暈。",
      "en": "Use facial feature of attached photo. A {{composition}} shot of a young woman displayed on the screen of a compact {{camera_device}} digital camera. The camera body surrounds the image with its buttons, dials, and textured surface visible, including the FUNC/SET wheel, DISP button, and the \"IMAGE STABILIZER\" label along the side. The photo on the screen shows the woman indoors at night, illuminated by a bright built-in {{lighting}} that creates sharp highlights on her face and hair. She has long dark hair falling across part of her face in loose strands, with a soft, slightly open-lip expression. The flash accentuates her features against a dim, cluttered kitchen background with appliances, shelves, and {{material}} surfaces softly blurred. The mood is candid, raw, nostalgic, and reminiscent of early 2000s digital camera snapshots. Colors are slightly {{color_tone}} with cool undertones, strong flash contrast, and natural grain from the display. No text, no logos inside the photo preview itself.\n\nScale ratio: 4:5 vertical\n\nCamera: compact digital camera simulation\nLens: equivalent to 28–35mm\nAperture: f/2.8\nISO: 400\nShutter speed: 1/60 with flash\nWhite balance: auto flash\nLighting: harsh direct flash on subject, ambient low light in the background\n{{post_effect}}: nostalgic digital-camera tones, high contrast flash, subtle display grain, authentic screen glow."
    },
    "imageUrl": "https://github.com/user-attachments/assets/ce82755e-95fe-4265-9ccf-90caf8eb7b61",
    "author": "@kingofdairyque",
    "selections": {
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "material-0": {
        "zh-tw": "金屬",
        "en": "metallic"
      },
      "material-1": {
        "zh-tw": "金屬",
        "en": "metallic"
      },
      "color_tone-0": {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      "color_tone-1": {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      "post_effect-0": {
        "zh-tw": "調色",
        "en": "color grading"
      },
      "post_effect-1": {
        "zh-tw": "調色",
        "en": "color grading"
      },
      "camera_device-0": {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      },
      "camera_device-1": {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "simply ([@kingofdairyque](https://x.com/kingofdairyque)) - [Post](https://x.com/kingofdairyque/status/1996033217795903655?s=20)"
  },
  {
    "id": "tpl_community_1_16",
    "name": {
      "zh-tw": "雜誌封面肖像",
      "en": "Magazine Cover Portrait"
    },
    "content": {
      "zh-tw": "一張{{material}}雜誌封面照片，封面上有大膽的文字「Nano Banana Pro」。文字採用襯線字體，黑底白字，充滿視野。{{lighting}}照明，無其他文字。\n\n文字前方是一個穿著綠色和香蕉黃色高端時裝的人物動態肖像。\n\n在角落放置期號和今天的日期，以及條碼和價格。雜誌放在靠牆的白色架子上。",
      "en": "A photo of a {{material}} magazine cover, the cover has the large bold words \"Nano Banana Pro\". The text is in a serif font, black on white, and fills the view. {{lighting}} lighting, no other text.\n\nIn front of the text there is a dynamic portrait of a person in green and banana yellow colored high-end fashion.\n\nPut the issue number and today's date in the corner along with a barcode and a price. The magazine is on a white shelf against a wall."
    },
    "imageUrl": "https://github.com/user-attachments/assets/d04329ad-888c-4fff-8f19-6e81420ab4b4",
    "author": "@NanoBanana",
    "selections": {
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "lighting-0": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "lighting-1": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Nano Banana Pro ([@NanoBanana](https://x.com/NanoBanana)) - [Post](https://x.com/NanoBanana/status/1996262496802361675?s=20)"
  },
  {
    "id": "tpl_community_1_17",
    "name": {
      "zh-tw": "奢華產品攝影",
      "en": "Luxury Product Photography"
    },
    "content": {
      "zh-tw": "產品：\n[品牌] [產品名稱] - [瓶身形狀]、[標籤描述]、[液體顏色]\n\n場景：\n奢華產品照，漂浮在深色水面上，周圍擺放著{{color}}的{{flower_type}}。\n[燈光風格 - 例如「{{lighting}}光暈」/\n「明亮清新的光線」] 在水面上創造反射和漣漪。\n\n氛圍與風格：\n[形容詞 - 例如「空靈奢華」/\n「清新乾淨」]，高端商業攝影，{{camera_angle}}，淺景深配柔和散景背景",
      "en": "Product:\n[BRAND] [PRODUCT NAME] - [bottle shape], [label description], [liquid color]\n\nScene:\nLuxury product shot floating on dark water with {{flower_type}} in {{color}} arranged around it.\n[Lighting style - e.g., \"{{lighting}} glow\" /\n\"bright fresh light\"] creates reflections and ripples across the water.\n\nMood & Style:\n[Adjectives - e.g., \"ethereal and luxurious\" /\n\"fresh and clean\"], high-end commercial photography, {{camera_angle}}, shallow depth of field with soft bokeh background"
    },
    "imageUrl": "https://github.com/user-attachments/assets/53563640-cf3d-4484-bdc3-9df2aa41aa4f",
    "author": "@AmirMushich",
    "selections": {
      "lighting-0": {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      "lighting-1": {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      "flower_type-0": {
        "zh-tw": "一束深紅色玫瑰",
        "en": "A bouquet of deep red roses"
      },
      "flower_type-1": {
        "zh-tw": "一束深紅色玫瑰",
        "en": "A bouquet of deep red roses"
      },
      "camera_angle-0": {
        "zh-tw": "臉頰和頸部特寫",
        "en": "Cheek and neck close-up"
      },
      "camera_angle-1": {
        "zh-tw": "臉頰和頸部特寫",
        "en": "Cheek and neck close-up"
      },
      "color-0": {
        "zh-tw": "棕色",
        "en": "brown"
      },
      "color-1": {
        "zh-tw": "棕色",
        "en": "brown"
      }
    },
    "tags": [
      "人物",
      "攝影",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "AmirMušić ([@AmirMushich](https://x.com/AmirMushich)) - [Post](https://x.com/AmirMushich/status/1974767431714304456)"
  },
  {
    "id": "tpl_community_2_1",
    "name": {
      "zh-tw": "星際大戰「威利在哪裡」",
      "en": "Star Wars \"Where's Waldo\""
    },
    "content": {
      "zh-tw": "一張{{art_style}}「威利在哪裡」風格的圖片，展示塔圖因星球上的所有星際大戰角色。\n\n風格：{{render_style}}，高細節。",
      "en": "A {{art_style}} \"where is waldo\" image showing all Star Wars characters on Tatooine.\n\nStyle: {{render_style}}, high detail."
    },
    "imageUrl": "https://github.com/user-attachments/assets/a9355de4-c07a-4ffe-9752-85152b0146ae",
    "author": "@creacas",
    "selections": {
      "art_style-0": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "art_style-1": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "render_style-0": {
        "zh-tw": "卡通風格",
        "en": "cartoon"
      },
      "render_style-1": {
        "zh-tw": "卡通風格",
        "en": "cartoon"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@creacas](https://x.com/creacas/status/1991585587548348513?s=20)"
  },
  {
    "id": "tpl_community_2_2",
    "name": {
      "zh-tw": "歲月變遷",
      "en": "Aging Through the Years"
    },
    "content": {
      "zh-tw": "\"生成這個人從年輕到80歲的歷年假日照片\"\n\n風格：{{render_style}}，{{lighting}}，溫馨家庭氛圍。",
      "en": "\"Generate the holiday photo of this person through the ages up to 80 years old\"\n\nStyle: {{render_style}}, {{lighting}}, warm family atmosphere."
    },
    "imageUrl": "https://github.com/user-attachments/assets/f929f805-f363-4239-9dac-3ee250664821",
    "author": "@dr_cintas",
    "selections": {
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@dr_cintas](https://x.com/dr_cintas/status/1991888364099035581?s=20)"
  },
  {
    "id": "tpl_community_2_3",
    "name": {
      "zh-tw": "遞迴視覺",
      "en": "Recursive Visuals"
    },
    "content": {
      "zh-tw": "一張遞迴圖像，一隻橘貓坐在辦公椅上舉著一台iPad。iPad上是同一隻貓在同樣場景中舉著同一台iPad。每個iPad上重複此畫面。\n\n風格：{{render_style}}，{{lighting}}。",
      "en": "recursive image of an orange cat sitting in an office chair holding up an iPad. On the iPad is the same cat in the same scene holding up the same iPad. Repeated on each iPad.\n\nStyle: {{render_style}}, {{lighting}}."
    },
    "imageUrl": "https://github.com/user-attachments/assets/d8ed3123-45e6-4710-9298-0e463a399d7c",
    "author": "@venturetwins",
    "selections": {
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "lighting-0": {
        "zh-tw": "柔光",
        "en": "soft light"
      },
      "lighting-1": {
        "zh-tw": "柔光",
        "en": "soft light"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@venturetwins](https://x.com/venturetwins/status/1993174445515772086)"
  },
  {
    "id": "tpl_community_2_4",
    "name": {
      "zh-tw": "座標視覺化",
      "en": "Coordinate Visualization"
    },
    "content": {
      "zh-tw": "35.6586° N, 139.7454° E 晚上19:00\n\n風格：{{render_style}}，{{lighting}}，{{color_tone}}氛圍。",
      "en": "35.6586° N, 139.7454° E at 19:00\n\nStyle: {{render_style}}, {{lighting}}, {{color_tone}} atmosphere."
    },
    "imageUrl": "https://github.com/user-attachments/assets/81479ec1-cf45-4a64-ad42-d359012d84bf",
    "author": "Replicate",
    "selections": {
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "lighting-0": {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      "lighting-1": {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      "color_tone-0": {
        "zh-tw": "暖色調",
        "en": "warm tones"
      },
      "color_tone-1": {
        "zh-tw": "暖色調",
        "en": "warm tones"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[Replicate](https://replicate.com/)"
  },
  {
    "id": "tpl_community_2_5",
    "name": {
      "zh-tw": "概念視覺化",
      "en": "Conceptual Visualization"
    },
    "content": {
      "zh-tw": "工程師眼中的舊金山大橋\n\n風格：{{render_style}}，{{art_style}}，技術圖解風格。",
      "en": "How engineers see the San Francisco Bridge\n\nStyle: {{render_style}}, {{art_style}}, technical diagram style."
    },
    "imageUrl": "https://github.com/user-attachments/assets/16b0f05d-cd97-401b-a3a1-25b51b46708c",
    "author": "Replicate",
    "selections": {
      "render_style-0": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "render_style-1": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "art_style-0": {
        "zh-tw": "扁平設計",
        "en": "flat design"
      },
      "art_style-1": {
        "zh-tw": "扁平設計",
        "en": "flat design"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[Replicate](https://replicate.com/)"
  },
  {
    "id": "tpl_community_2_6",
    "name": {
      "zh-tw": "字面解讀",
      "en": "Literal Interpretation"
    },
    "content": {
      "zh-tw": "rare.jpg\n\n風格：{{render_style}}，{{lighting}}。",
      "en": "rare.jpg\n\nStyle: {{render_style}}, {{lighting}}."
    },
    "imageUrl": "https://github.com/user-attachments/assets/e0361170-3810-49ae-a695-389d2469d0c9",
    "author": "Replicate",
    "selections": {
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "lighting-0": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "lighting-1": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[Replicate](https://replicate.com/)"
  },
  {
    "id": "tpl_community_2_7",
    "name": {
      "zh-tw": "多主體合成",
      "en": "Multi-Subject Compositing"
    },
    "content": {
      "zh-tw": "{{scene_location}}團隊合照，每個人都展現{{expressions}}的表情",
      "en": "{{scene_location}} team photo, everyone showing {{expressions}} expression"
    },
    "imageUrl": "https://github.com/user-attachments/assets/7799faea-2254-47e6-b29f-c7e9790586f9",
    "author": "Replicate",
    "selections": {
      "scene_location-0": {
        "zh-tw": "辦公室",
        "en": "office"
      },
      "scene_location-1": {
        "zh-tw": "辦公室",
        "en": "office"
      },
      "expressions-0": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "expressions-1": {
        "zh-tw": "俏皮",
        "en": "playful"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[Replicate](https://replicate.com/)"
  },
  {
    "id": "tpl_community_2_8",
    "name": {
      "zh-tw": "白板馬克筆藝術",
      "en": "Whiteboard Marker Art"
    },
    "content": {
      "zh-tw": "創建一張在玻璃白板上用略微褪色的{{color}}馬克筆繪製的{{art_style}}風格《浪客行》宮本武藏祈禱的照片",
      "en": "Create a photo of vagabonds musashi praying drawn on a glass whiteboard in a slightly faded {{color}} marker, {{art_style}} style"
    },
    "imageUrl": "https://github.com/user-attachments/assets/0bca335e-dc4f-4f67-a282-4fa81ff5647f",
    "author": "@nicdunz",
    "selections": {
      "color-0": {
        "zh-tw": "綠色",
        "en": "green"
      },
      "color-1": {
        "zh-tw": "綠色",
        "en": "green"
      },
      "art_style-0": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-1": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@nicdunz](https://x.com/nicdunz/status/1991556910106177849)"
  },
  {
    "id": "tpl_community_2_9",
    "name": {
      "zh-tw": "分割視圖3D渲染 - iPhone 17 Pro",
      "en": "Split View 3D Render - iPhone 17 Pro"
    },
    "content": {
      "zh-tw": "創建一個高品質、{{render_style}}的3D渲染，只包含一個物體：[橘色{{camera_device}} 17 Pro]。\n物體必須自由漂浮在半空中，並在3D空間中輕微傾斜和旋轉（非正面朝向）。\n使用柔和、極簡的深色背景，乾淨的1080×1080構圖。\n左半部——完全寫實\n物體的左半部應該看起來與現實生活中完全一樣——準確的材質、顏色、紋理、反射和比例。\n這一半必須完全不透明，無透明度和無線框覆蓋。\n無柔和過渡、無淡化、無混合。\n右半部——硬切線框內部\n右半部必須乾淨地切換到線框內部圖。\n兩半之間的邊界必須是完美垂直、完美銳利、清晰的切割線，從物體頂部邊緣一直延伸到底部邊緣。\n無斜角邊緣、無曲線切割、無漸變。\n線框必須只使用兩種線條顏色：\n主要：白色（約80%的線條）\n次要：從寫實半部的主色調取樣的顏色（<20%的線條）\n線框線條必須細、精確、對齊、工程風格。\n每個線框組件必須完美匹配物體的幾何形狀。\n嚴格單一物體規則\n整個畫面中只渲染一個物體。只渲染一個實體物體。\n不要從任何角度顯示第二個物體。不要將第二個物體顯示為反射、陰影、剪影、輪廓、鬼影或透明度。不要為了比較或展示目的顯示第二個物體。不要分開顯示正面和背面。\n不要在後面、旁邊、下面或部分隱藏處顯示額外設備。\n整個畫面中只允許一個單一物體。\n無重複物體、無鏡像正反配對、無顯示第二個物體的反射。\n物體必須單獨出現、漂浮。\n姿態與燈光：\n應用自然、細微的3D傾斜+旋轉，使其看起來像漂浮的產品視覺化。\n使用柔和、中性的全局照明，物體下方無陰影。\n無額外道具、無文字、無標籤，除非明確要求。",
      "en": "Create a high-quality, {{render_style}} 3D render of exactly one instance of the object: [Orange {{camera_device}} 17 Pro].\nThe object must float freely in mid-air and be gently tilted and rotated in 3D space (not front-facing).\nUse a soft, minimalist dark background in a clean 1080×1080 composition.\nLeft Half — Full Realism\nThe left half of the object should appear exactly as it looks in real life\n— accurate materials, colors, textures, reflections, and proportions.\nThis half must be completely opaque with no transparency and no wireframe overlay.\nNo soft transition, no fading, no blending.\nRight Half — Hard Cut Wireframe Interior\nThe right half must switch cleanly to a wireframe interior diagram.\nThe boundary between the two halves must be a perfectly vertical, perfectly sharp, crisp cut line, stretching straight from the top edge to the bottom edge of the object.\nNo diagonal edges, no curved slicing, no gradient.\nThe wireframe must use only two line colors:\nPrimary: white (≈80% of all lines)\nSecondary: a color sampled from the dominant color of the realistic half (<20% of lines)\nThe wireframe lines must be thin, precise, aligned, and engineering-style.\nEvery wireframe component must perfectly match the geometry of the object.\nStrict Single-Object Rule\nRender only ONE object in the entire frame.  Render only one physical object.\nDo NOT show a second object from any angle. Do NOT show a second object as a reflection, shadow, silhouette, outline, ghost image, or transparency. Do NOT show a second object for comparison or display purposes. Do NOT show both the front and the back separately.\nDo NOT show an extra device behind, beside, underneath, or partially hidden.\nOnly one single object is allowed in the entire frame.\nNo duplicate objects, no mirrored back-and-front pairings, no reflections showing a second object.\nThe object must appear alone, floating.\nPose & Lighting:\nApply a natural, subtle tilt + rotation in 3D to make it look like a floating product visualization.\nUse soft, neutral global illumination and no shadows under the object.\nNo extra props, no text, no labels unless explicitly requested."
    },
    "imageUrl": "https://github.com/user-attachments/assets/be87ad7d-678f-4d93-b5ac-7836654e8dbf",
    "author": "@michalmalewicz",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "camera_device-0": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-1": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Michal Malewicz ([@michalmalewicz](https://x.com/michalmalewicz)) - [Post](https://x.com/michalmalewicz/status/1995910758169752059?s=20)"
  },
  {
    "id": "tpl_community_2_10",
    "name": {
      "zh-tw": "美國3D地標微縮模型",
      "en": "USA 3D Diorama with Landmarks"
    },
    "content": {
      "zh-tw": "創建一個高細節的3D {{render_style}}美國全境微縮模型，每個州都表示為自己的微型平台。在每個州內，放置該州最具代表性地標的風格化小比例3D模型。使用與可愛、精緻的3D城市微縮模型相同的視覺風格：柔和{{color_tone}}色彩、乾淨材質、平滑圓潤的造型、柔和陰影和細微反射。每個地標應該看起來像微型模型，迷人、簡化但清晰可辨識。按照準確的地理佈局排列各州，保持一致的燈光和透視。在每個模型上方或附近使用乾淨、現代的字體加入州名標籤和地標標籤。",
      "en": "Create a high-detail 3D {{render_style}} diorama of the entire United States, where each state is represented as its own miniature platform. Inside each state, place a stylized, small-scale 3D model of that state's most iconic landmark. Use the same visual style as a cute, polished 3D city diorama: soft {{color_tone}} colors, clean materials, smooth rounded forms, gentle shadows, and subtle reflections. Each landmark should look like a miniature model, charming, simplified, but clearly recognizable. Arrange the states in accurate geographical layout, with consistent lighting and perspective. Include state labels and landmark labels in a clean, modern font, floating above or near each model."
    },
    "imageUrl": "https://github.com/user-attachments/assets/42c17b75-2a1b-4444-957b-104206923269",
    "author": "@DataExec",
    "selections": {
      "render_style-0": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "render_style-1": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "color_tone-0": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "color_tone-1": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Data Exec ([@DataExec](https://x.com/DataExec)) - [Post](https://x.com/DataExec/status/1995876348879937648?s=20)"
  },
  {
    "id": "tpl_community_2_11",
    "name": {
      "zh-tw": "美國美食地圖",
      "en": "US Map Made of Famous Foods"
    },
    "content": {
      "zh-tw": "創建一張美國地圖，每個州都由其最著名的食物製成（各州實際上應該看起來像是由食物製成的，而不是食物的圖片）。仔細檢查確保每個州都正確。\n\n風格：{{render_style}}，{{color_tone}}色調。",
      "en": "create a map of the US where every state is made out of its most famous food (the states should actually look like they are made of the food, not a picture of the food). Check carefully to make sure each state is right.\n\nStyle: {{render_style}}, {{color_tone}} tones."
    },
    "imageUrl": "https://github.com/user-attachments/assets/c849cecb-1c81-4b31-9b4d-474ecd2aaef4",
    "author": "@emollick",
    "selections": {
      "render_style-0": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "render_style-1": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Ethan Mollick ([@emollick](https://x.com/emollick)) - [Post](https://x.com/emollick/status/1995720976068137048?s=20)"
  },
  {
    "id": "tpl_community_2_12",
    "name": {
      "zh-tw": "城市最高建築3D卡通視圖",
      "en": "City's Tallest Buildings 3D Cartoon View"
    },
    "content": {
      "zh-tw": "呈現{{urban_location}}最高建築的清晰、側面微型3D卡通視圖。使用{{render_style}}材質的最少紋理和柔和、逼真的燈光與陰影。使用乾淨、極簡的構圖，精確顯示索波特三座最高建築，從左到右嚴格按高度遞減排列。最高的必須明顯最高，第二高必須明顯矮於第一，第三高必須明顯矮於第二。\n所有建築必須遵循準確的相對比例：如果建築在現實中更高，則圖像中也必須以大致相同的比例更高。不得在視覺上拉伸或壓縮任何建築。\n每棟建築應單獨站立在薄而簡單的陶瓷底座上。每個底座下方，{{composition}}文字應顯示：\n高度（米）——中粗無襯線字體，中等大小\n建成年份——較細的無襯線字體，較小尺寸，直接在高度文字下方\n提供一致的填充、間距、行距和字距。在建築上方居中書寫「你的城市名稱」，使用中等大小的無襯線字體。\n建築頂部不應重疊或接觸上方文字。根據真實世界參考使用準確的建築比例。對每個建築模型保持一致的相機角度和相同比例。\n無強制透視。使用直視正投影風格渲染。不要誇大或風格化超出比例準確性的尺寸差異。\n\n使用正方形1080×1080構圖。使用乾淨、中性的背景。確保無多餘物體。",
      "en": "Present a clear, side miniature 3D cartoon view of {{urban_location}} tallest buildings. Use minimal textures with {{render_style}} materials and soft, lifelike lighting and shadows. Use a clean, minimalistic composition showing exactly the three tallest buildings in Sopot, arranged from LEFT to RIGHT in STRICT descending height order. The tallest must appear visibly tallest, the second must be clearly shorter than the first, and the third must be clearly shorter than the second.\nAll buildings must follow accurate relative proportions: if a building is taller in real life, it MUST be taller in the image by the same approximate ratio. No building may be visually stretched or compressed.\nEach building should stand separately on a thin, simple ceramic base. Below each base, {{composition}} text should display:\nHeight in meters — semibold sans-serif, medium size\nYear built — lighter-weight sans-serif, smaller size, directly beneath the height text\nProvide consistent padding, spacing, leading, and kerning. Write \"YOUR CITY NAME\" centered above the buildings, using a medium-sized sans-serif font.\n No building top should overlap or touch the text above.Use accurate architectural proportions based on real-world references.Maintain consistent camera angle and identical scale for each building model.\nNo forced perspective. Use straight-on orthographic-style rendering. Do not exaggerate or stylize size differences beyond proportional accuracy.\n\nUse a square 1080×1080 composition.Use a clean, neutral background. Ensure no extra objects are present."
    },
    "imageUrl": "https://github.com/user-attachments/assets/2ca4c4bb-5a11-4e90-97b3-2654fb5c54ab",
    "author": "@michalmalewicz",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "composition-0": {
        "zh-tw": "置中",
        "en": "centered"
      },
      "composition-1": {
        "zh-tw": "置中",
        "en": "centered"
      },
      "urban_location-0": {
        "zh-tw": "時代廣場",
        "en": "Times Square"
      },
      "urban_location-1": {
        "zh-tw": "時代廣場",
        "en": "Times Square"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Michal Malewicz ([@michalmalewicz](https://x.com/michalmalewicz)) - [Post](https://x.com/michalmalewicz/status/1995532450861080956?s=20)"
  },
  {
    "id": "tpl_community_2_13",
    "name": {
      "zh-tw": "3D等距居家辦公插圖",
      "en": "3D Isometric Home Office Illustration"
    },
    "content": {
      "zh-tw": "根據你對我的了解，生成一張我在家工作的3D {{render_style}}彩色{{art_style}}，充滿各種室內細節。視覺風格應該是圓潤、精緻且{{expressions}}的。--ar 1:1\n\n[附加細節：一隻比熊犬和3個顯示器]",
      "en": "Based on you know about me, generate a 3D {{render_style}} colored {{art_style}} of me working from home, filled with various interior details. The visual style should be rounded, polished, and {{expressions}}. --ar 1:1\n\n[Additional details: a bichon frise and 3 monitors]"
    },
    "imageUrl": "https://github.com/user-attachments/assets/aa6160af-9ac5-48e5-948c-7fb92361dffb",
    "author": "@dotey",
    "selections": {
      "render_style-0": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "render_style-1": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "art_style-0": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "art_style-1": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "expressions-0": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "expressions-1": {
        "zh-tw": "俏皮",
        "en": "playful"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "宝玉 ([@dotey](https://x.com/dotey)) - [Post](https://x.com/dotey/status/1995944319677554985?s=20)"
  },
  {
    "id": "tpl_community_2_14",
    "name": {
      "zh-tw": "表情符號組合 - 戴墨鏡的香蕉",
      "en": "Emoji Combination - Banana with Sunglasses"
    },
    "content": {
      "zh-tw": "組合這些表情符號：🍌 + 😎，在{{color_tone}}背景上以{{render_style}} Google表情符號設計風格呈現",
      "en": "Combine these emojis: 🍌 + 😎, on a {{color_tone}} background as a {{render_style}} Google emoji design"
    },
    "imageUrl": "https://github.com/user-attachments/assets/9dd4e358-5969-45ef-9d22-c964c24d354f",
    "author": "@NanoBanana",
    "selections": {
      "color_tone-0": {
        "zh-tw": "單色",
        "en": "monochrome"
      },
      "color_tone-1": {
        "zh-tw": "單色",
        "en": "monochrome"
      },
      "render_style-0": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "render_style-1": {
        "zh-tw": "3D渲染",
        "en": "3D"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Nano Banana Pro ([@NanoBanana](https://x.com/NanoBanana)) - [Post](https://x.com/NanoBanana/status/1996193397913317384?s=20)"
  },
  {
    "id": "tpl_community_2_15",
    "name": {
      "zh-tw": "撕紙藝術效果",
      "en": "Torn Paper Art Effect"
    },
    "content": {
      "zh-tw": "任務：「編輯圖像：添加擴展的撕紙層次效果」\n\nbase_image:\n  use_reference_image: true\n  preserve_everything:\n    - 角色身份\n    - 面部特徵和表情\n    - 髮型和解剖結構\n    - 服裝設計和顏色\n    - 背景、燈光、構圖\n    - 整體藝術風格\n\nrules:\n  - 只修改撕紙內部區域。\n  - 不要改變姿勢、解剖結構、比例、服裝細節、陰影或場景元素。\n\neffects:\n  - effect: \"撕紙揭露\"\n    placement: \"胸部高度橫向\"\n    description:\n      - 在胸部區域添加一道寬闊、自然的水平撕裂。\n      - 撕裂內部使用`interior_style`中定義的風格。\n\n  - effect: \"撕紙揭露\"\n    placement: \"下腹部高度\"\n    description:\n      - 在下腹部添加一道寬闊的水平撕裂。\n      - 撕裂內部使用`interior_style`中定義的風格。\n\ninterior_style:\n  mode: \"線稿\"\n\n  style_settings:\n    line-art:\n      palette: \"{{color_tone}}\"\n      line_quality: \"乾淨、清晰\"\n      paper: \"帶細微橫線的筆記本紙\"\n\n    sumi-e:\n      palette: \"黑色墨水色調\"\n      brush_texture: \"柔和暈染邊緣\"\n      paper: \"純色紋理紙\"\n\n    figure-render:\n      material: \"PVC質感\"\n      shading: \"半{{render_style}}高光\"\n      paper: \"純色光滑表面\"\n\n    colored-pencil:\n      stroke_texture: \"可見鉛筆顆粒\"\n      palette: \"柔和層疊色調\"\n      paper: \"粗糙素描本紙\"\n\n    {{art_style}}:\n      palette: \"柔和透明顏料\"\n      blending: \"平滑暈染\"\n      edges: \"柔和輪廓\"\n      paper: \"水彩紙紋理\"\n\n    pencil-drawing:\n      graphite_texture: \"可見鉛筆顆粒\"\n      shading: \"平滑漸層\"\n      line_quality: \"混合銳利和柔和\"\n      tone: \"灰階\"\n      paper: \"帶淡橫線的筆記本紙\"",
      "en": "task: \"edit-image: add widened torn-paper layered effect\"\n\nbase_image:\n  use_reference_image: true\n  preserve_everything:\n    - character identity\n    - facial features and expression\n    - hairstyle and anatomy\n    - outfit design and colors\n    - background, lighting, composition\n    - overall art style\n\nrules:\n  - Only modify the torn-paper interior areas.\n  - Do not change pose, anatomy, proportions, clothing details, shading, or scene elements.\n\neffects:\n  - effect: \"torn-paper-reveal\"\n    placement: \"across chest height\"\n    description:\n      - Add a wide, natural horizontal tear across the chest area.\n      - The torn interior uses the style defined in `interior_style`.\n\n  - effect: \"torn-paper-reveal\"\n    placement: \"lower abdomen height\"\n    description:\n      - Add a wide horizontal tear across the lower abdomen.\n      - The torn interior uses the style defined in `interior_style`.\n\ninterior_style:\n  mode: \"line-art\"\n\n  style_settings:\n    line-art:\n      palette: \"{{color_tone}}\"\n      line_quality: \"clean, crisp\"\n      paper: \"notebook paper with subtle ruled lines\"\n\n    sumi-e:\n      palette: \"black ink tones\"\n      brush_texture: \"soft bleeding edges\"\n      paper: \"plain textured paper\"\n\n    figure-render:\n      material: \"PVC-like\"\n      shading: \"semi-{{render_style}} highlights\"\n      paper: \"plain smooth surface\"\n\n    colored-pencil:\n      stroke_texture: \"visible pencil grain\"\n      palette: \"soft layered hues\"\n      paper: \"rough sketchbook paper\"\n\n    {{art_style}}:\n      palette: \"soft transparent pigments\"\n      blending: \"smooth bleeding\"\n      edges: \"soft contours\"\n      paper: \"watercolor paper texture\"\n\n    pencil-drawing:\n      graphite_texture: \"visible pencil grain\"\n      shading: \"smooth gradients\"\n      line_quality: \"mixed sharp and soft\"\n      tone: \"gray-scale\"\n      paper: \"notebook paper with faint ruled lines\""
    },
    "imageUrl": "https://github.com/user-attachments/assets/0fe39ec9-1c17-40e3-a708-668e7c3cd84d",
    "author": "@munou_ac",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "color_tone-0": {
        "zh-tw": "單色",
        "en": "monochrome"
      },
      "color_tone-1": {
        "zh-tw": "單色",
        "en": "monochrome"
      },
      "art_style-0": {
        "zh-tw": "水彩",
        "en": "watercolor"
      },
      "art_style-1": {
        "zh-tw": "水彩",
        "en": "watercolor"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "てんねん ([@munou_ac](https://x.com/munou_ac)) - [Post](https://x.com/munou_ac/status/1996129537806213597?s=20)"
  },
  {
    "id": "tpl_community_2_16",
    "name": {
      "zh-tw": "電影關鍵幀生成器",
      "en": "Cinematic Keyframe Generator"
    },
    "content": {
      "zh-tw": "<role>\n你是一位獲獎的預告片導演+電影攝影師+分鏡師。你的任務：將任何電影概念轉化為專業級的分鏡關鍵幀，展示關鍵的視覺節拍——構圖、鏡頭、燈光和情緒。\n</role>\n\n<task>\n生成電影：{{show_name}}\n為該電影創建一張專業級的分鏡表，展示5-8個電影關鍵幀。\n</task>\n\n<output_format>\n創建一張水平分鏡表圖像（3:1比例），顯示5-8個連續的關鍵幀，代表電影中的關鍵視覺節拍。\n\n每個幀應該：\n- 展示電影級構圖（三分法、引導線、取景等）\n- 包含專業的燈光設置\n- 傳達情緒和氛圍\n- 顯示相機角度和移動意圖\n</output_format>\n\n<style>\n視覺風格：電影概念藝術，{{render_style}}，戲劇性燈光\n渲染：高細節，電影色彩分級\n佈局：水平條狀，幀之間有清晰的分隔\n</style>",
      "en": "<role>\nYou are an award-winning trailer director + cinematographer + storyboard artist. Your job: turn ONE reference image from {{show_name}} into a cohesive cinematic short sequence, then output AI-video-ready keyframes.\n</role>\n\n<input>\nUser provides: one reference image (image).\n</input>\n\n<non-negotiable rules - continuity & truthfulness>\n1) First, analyze the full composition: identify ALL key subjects (person/group/vehicle/object/animal/props/environment elements) and describe spatial relationships and interactions (left/right/foreground/background, facing direction, what each is doing).\n2) Do NOT guess real identities, exact real-world locations, or brand ownership. Stick to visible facts. Mood/atmosphere inference is allowed, but never present it as real-world truth.\n3) Strict continuity across ALL shots: same subjects, same wardrobe/appearance, same environment, same time-of-day and lighting style. Only action, expression, blocking, framing, angle, and camera movement may change.\n4) Depth of field must be {{render_style}}: deeper in wides, shallower in close-ups with natural bokeh. Keep ONE consistent cinematic color grade across the entire sequence.\n5) Do NOT introduce new characters/objects not present in the reference image. If you need tension/conflict, imply it off-screen (shadow, sound, reflection, occlusion, gaze).\n</non-negotiable rules - continuity & truthfulness>\n\n<goal>\nExpand the image into a 10–20 second cinematic clip with a clear theme and emotional progression (setup → build → turn → payoff).\nThe user will generate video clips from your keyframes and stitch them into a final sequence.\n</goal>\n\n<step 1 - scene breakdown>\nOutput (with clear subheadings):\n- Subjects: list each key subject (A/B/C…), describe visible traits (wardrobe/material/form), relative positions, facing direction, action/state, and any interaction.\n- Environment & Lighting: interior/exterior, spatial layout, background elements, ground/walls/materials, light direction & quality (hard/soft; key/fill/rim), implied time-of-day, 3–8 vibe keywords.\n- Visual Anchors: list 3–6 visual traits that must stay constant across all shots (palette, signature prop, key light source, weather/fog/rain, grain/texture, background markers).\n</step 1 - scene breakdown>\n\n<step 2 - theme & story>\nFrom the image, propose:\n- Theme: one sentence.\n- Logline: one restrained trailer-style sentence grounded in what the image can support.\n- Emotional Arc: 4 beats (setup/build/turn/payoff), one line each.\n</step 2 - theme & story>\n\n<step 3 - cinematic approach>\nChoose and explain your filmmaking approach (must include):\n- Shot progression strategy: how you move from wide to close (or reverse) to serve the beats\n- Camera movement plan: push/pull/pan/dolly/track/orbit/handheld micro-shake/gimbal—and WHY\n- Lens & exposure suggestions: focal length range (18/24/35/50/85mm etc.), DoF tendency (shallow/medium/deep), shutter \"feel\" (cinematic vs documentary)\n- Light & color: contrast, key tones, material rendering priorities, optional grain (must match the reference style)\n</step 3 - cinematic approach>\n\n<step 4 - keyframes for AI video (primary deliverable)>\nOutput a Keyframe List: default 9–12 frames (later assembled into ONE master grid). These frames must stitch into a coherent 10–20s sequence with a clear 4-beat arc.\nEach frame must be a plausible continuation within the SAME environment.\n</step 4 - keyframes for AI video>\n\n<step 5 - contact sheet output (MUST OUTPUT ONE BIG GRID IMAGE)>\nYou MUST additionally output ONE single master image: a Cinematic Contact Sheet / Storyboard Grid containing ALL keyframes in one large image.\n- Default grid: 3x3. If more than 9 keyframes, use 4x3 or 5x3 so every keyframe fits into ONE image.\nRequirements:\n1) The single master image must include every keyframe as a separate panel (one shot per cell) for easy selection.\n2) Each panel must be clearly labeled: KF number + shot type + suggested duration (labels placed in safe margins, never covering the subject).\n3) Strict continuity across ALL panels: same subjects, same wardrobe/appearance, same environment, same lighting & same cinematic color grade; only action/expression/blocking/framing/movement changes.\n4) DoF shifts realistically: shallow in close-ups, deeper in wides; photoreal textures and consistent grading.\n5) After the master grid image, output the full text breakdown for each KF in order so the user can regenerate any single frame at higher quality.\n</step 5 - contact sheet output>\n\n<final output format>\nOutput in this order:\nA) Scene Breakdown\nB) Theme & Story\nC) Cinematic Approach\nD) Keyframes (KF# list)\nE) ONE Master Contact Sheet Image (All KFs in one grid)\n</final output format>"
    },
    "imageUrl": "https://github.com/user-attachments/assets/668c8c3f-ed8f-4d46-9edf-5be01c2a64dc",
    "author": "@underwoodxie96",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "show_name-0": {
        "zh-tw": "鐵達尼號",
        "en": "Titanic"
      },
      "show_name-1": {
        "zh-tw": "鐵達尼號",
        "en": "Titanic"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@underwoodxie96](https://x.com/underwoodxie96/status/1995109628825489647)"
  },
  {
    "id": "tpl_community_2_17",
    "name": {
      "zh-tw": "座標風格寫真雜誌封面",
      "en": "Photo Book Style Magazine Cover with Coordinates"
    },
    "content": {
      "zh-tw": "創建一張[已上傳圖像中的人物]的照片，作為極簡主義攝影雜誌「Coordinates」的封面。\n\n雜誌名稱是「Coordinates」。\n封面應聚焦於[已上傳圖像中的人物]的中景鏡頭，人物處於淺色、空曠或城市環境中。\n設計應為雜誌封面，使用簡潔現代的版面和現代無襯線字體。\n在封面右下角以顯眼方式添加座標「緯度，經度」。\n使用{{lighting}}和{{color_tone}}色彩調色板。\n\n輸出規格：方形格式，高解析度，專業攝影美學。",
      "en": "Create a beautiful, photo book style magazine cover with {{lighting}} and {{color_tone}} tones that fully utilizes the 9:16 aspect ratio. Place the attached person at the precise coordinates of [latitude/longitude coordinate], seamlessly blending them into the scene as if they are sightseeing. Approach this task with the understanding that this is a critical page that will significantly influence visitor numbers. NEGATIVE: coordinate texts"
    },
    "imageUrl": "https://github.com/user-attachments/assets/489241a2-63af-4ca8-87a4-728187c1ce9a",
    "author": "@minchoi",
    "selections": {
      "lighting-0": {
        "zh-tw": "柔光",
        "en": "soft light"
      },
      "lighting-1": {
        "zh-tw": "柔光",
        "en": "soft light"
      },
      "color_tone-0": {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      "color_tone-1": {
        "zh-tw": "低飽和",
        "en": "muted"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Min Choi ([@minchoi](https://x.com/minchoi)) - [Post](https://x.com/minchoi/status/1998784591155409397)"
  },
  {
    "id": "tpl_community_2_18",
    "name": {
      "zh-tw": "漂浮國家島嶼微縮模型",
      "en": "Floating Country Island Diorama"
    },
    "content": {
      "zh-tw": "創建一個高細節的3D {{render_style}}微縮模型，展示{{country}}作為一個漂浮島嶼。島嶼應該以一種風格化、迷人的方式展示該國最具代表性的地標、自然景觀和文化元素。使用與可愛、精緻的3D城市微縮模型相同的視覺風格：柔和粉彩色彩、乾淨材質、平滑圓潤的造型、柔和陰影和細微反射。島嶼應該漂浮在天空中，下方有柔和的雲朵和微妙的陰影。保持一致的{{lighting}}和透視。",
      "en": "Create an ultra-HD, {{render_style}} digital poster of a floating miniature island shaped like {{country}}, resting on white clouds in the sky. Blend iconic landmarks, natural landscapes (like forests, mountains, or beaches), and cultural elements unique to {{country}}. Carve \"{{country}}\" into the terrain using large white 3D letters. Add artistic details like birds (native to {{country}}), {{lighting}}, vivid colors, aerial perspective, and sun reflections to enhance realism. Ultra-quality, 4K+ resolution. 1080x1080 format."
    },
    "imageUrl": "https://github.com/user-attachments/assets/71260bd5-744d-4f87-9ded-05c4f905d3ef",
    "author": "@TechieBySA",
    "selections": {
      "render_style-0": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-1": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "lighting-0": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      "lighting-1": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      "country-0": {
        "zh-tw": "日本",
        "en": "Japanese"
      },
      "country-1": {
        "zh-tw": "日本",
        "en": "Japanese"
      },
      "country-2": {
        "zh-tw": "日本",
        "en": "Japanese"
      },
      "country-3": {
        "zh-tw": "日本",
        "en": "Japanese"
      },
      "country-4": {
        "zh-tw": "日本",
        "en": "Japanese"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "TechieSA ([@TechieBySA](https://x.com/TechieBySA)) - [Post](https://x.com/TechieBySA/status/1999110884879221052)"
  },
  {
    "id": "tpl_community_2_19",
    "name": {
      "zh-tw": "小說場景3D海報",
      "en": "Novel Scene 3D Poster"
    },
    "content": {
      "zh-tw": "基於{{show_name}}創建一張3D風格{{render_style}}電影海報。海報應該展示[場景/角色描述]，使用戲劇性燈光和電影氛圍。風格應該是精緻、有質感的3D渲染，帶有景深和體積光效果。",
      "en": "Design a high-quality {{render_style}} poster for the movie/novel \"{{show_name}}\", first retrieving information about the movie/novel and famous scenes.\n\nFirst, please use your knowledge base to retrieve information about this movie/novel and find a representative famous scene or core location. In the center of the image, construct this scene as a delicate axonometric 3D miniature model. The style should adopt DreamWorks Animation's delicate and soft rendering style. You need to reproduce the architectural details, character dynamics, and environmental atmosphere of that time, whether it's a storm or a quiet afternoon, naturally integrating into the model's lighting.\n\nRegarding the background, do not use a simple pure white background. Please create a void environment with faint ink wash diffusion and flowing light mist around the model, with elegant colors, making the image look breathable and have depth, highlighting the preciousness of the central model.\n\nFinally, for the bottom layout, please generate Chinese text. Center the novel title with a font that matches the original style. Below the title, automatically retrieve and typeset a classic description or quote about this scene from the original work, using an elegant serif font. The overall layout should be as精致balanced as a high-end museum exhibit label."
    },
    "imageUrl": "https://github.com/user-attachments/assets/8d527fc2-2251-4a84-baba-08ff8818516b",
    "author": "@op7418",
    "selections": {
      "render_style-0": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "render_style-1": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "show_name-0": {
        "zh-tw": "三體",
        "en": "The Three-Body Problem"
      },
      "show_name-1": {
        "zh-tw": "三體",
        "en": "The Three-Body Problem"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "歸藏(guizang.ai) ([@op7418](https://x.com/op7418)) - [Post](https://x.com/op7418/status/1998355915456790916)"
  },
  {
    "id": "tpl_community_2_20",
    "name": {
      "zh-tw": "迷你游泳池微縮模型",
      "en": "Miniature Swimming Pool Diorama"
    },
    "content": {
      "zh-tw": "創建一個微型游泳池微縮模型，展示一個可愛的迷你游泳池場景。游泳池周圍有小型遮陽傘、躺椅和熱帶植物。使用柔和{{color_tone}}色彩、乾淨{{material}}材質和精緻的{{art_style}} 3D渲染風格。場景應該看起來像一個{{expressions}}迷人的微型度假勝地。",
      "en": "Surreal miniature-world {{art_style}} poster featuring an oversized open blue Nivea-style tin repurposed as a whimsical swimming pool filled with {{material}} white \"cream-water.\" \nTiny sunbathers float in {{color_tone}} swim rings, lounge on miniature deck chairs, and slide into the cream pool from a small blue slide.\nThe background is a soft, warm, lightly textured countertop surface subtle marble or matte stone, evenly lit, no heavy veins or visual noise. \nKeep the scene grounded with soft shadows beneath props and figures.\nSurrounding the tin, keep the {{expressions}} diorama elements: a small wooden deck with micro figures, pastel umbrellas, lounge chairs, and compact handcrafted accessories. Maintain the hovering pastel inflatables and plush cloud-like shapes, but ensure they feel like stylised decorative objects staged above the countertop \nPreserve the soft, high-saturation, toy-like aesthetic with plush textures, pastel gradients, and gentle lighting."
    },
    "imageUrl": "https://github.com/user-attachments/assets/4d21545c-2457-4c4a-bdcc-e6da4ccca5af",
    "author": "@Salmaaboukarr",
    "selections": {
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "color_tone-0": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "color_tone-1": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "art_style-0": {
        "zh-tw": "拼貼風格",
        "en": "collage"
      },
      "art_style-1": {
        "zh-tw": "拼貼風格",
        "en": "collage"
      },
      "expressions-0": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "expressions-1": {
        "zh-tw": "俏皮",
        "en": "playful"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Salma ([@Salmaaboukarr](https://x.com/Salmaaboukarr)) - [Post](https://x.com/Salmaaboukarr/status/1998394870759567373)"
  },
  {
    "id": "tpl_community_2_21",
    "name": {
      "zh-tw": "聖誕裝飾3D角色",
      "en": "Christmas Ornament 3D Character"
    },
    "content": {
      "zh-tw": "創建一個3D聖誕裝飾品角色，以[角色/人物描述]為靈感。裝飾品應該是一個可愛的{{render_style}}渲染角色，具有聖誕裝飾品的風格——圓潤、有光澤、帶有掛繩。使用節日色彩和溫暖的{{lighting}}。",
      "en": "A transparent Christmas bauble hanging by a red ribbon. Inside, a tiny diorama of the person from the reference reimagined as a cute {{render_style}} chibi character. He works at a mini futuristic AI desk with three glowing holo-screens showing neural networks and code. Add tiny plants, a mini coffee cup, soft desk lighting, floating UI icons, and snow-glitter at the base. Warm magical Christmas glow, cinematic reflections on glass, cozy high-end diorama aesthetic.\n\n{{lighting}}, shallow depth of field, soft reflections on the glass, ultra-polished materials, high detail, festive Christmas atmosphere. Whimsical, premium, and heartwarming."
    },
    "imageUrl": "https://github.com/user-attachments/assets/e43e00c8-3330-4358-a5cd-1274de8fd871",
    "author": "@CharaspowerAI",
    "selections": {
      "render_style-0": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "render_style-1": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "lighting-0": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      "lighting-1": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Pierrick Chevallier | IA ([@CharaspowerAI](https://x.com/CharaspowerAI)) - [Post](https://x.com/CharaspowerAI/status/1998432458941858282)"
  },
  {
    "id": "tpl_community_2_22",
    "name": {
      "zh-tw": "熨平皺紋（超現實）",
      "en": "Ironing Out Wrinkles"
    },
    "content": {
      "zh-tw": "創建一張{{composition}}超現實圖像，一個人正在用熨斗熨平一個有皺紋的老年臉，將其變成年輕光滑的皮膚。風格應該是{{render_style}}的，帶有戲劇性{{lighting}}和細膩的{{material}}質感。這是一個概念性的藝術作品，表達時間和青春的主題。",
      "en": "{\n  \"prompt\": \"An award-winning, hyper-realist macro photograph in the style of high-concept editorial art. The image features an extreme {{composition}} of an elderly woman's eye and cheekbone. A miniature, toy-like white and blue clothes iron is positioned on her skin, actively pressing down and ironing out deep wrinkles and crow's feet, leaving a streak of unnaturally smooth skin in its wake. A thin white cord trails organically across the texture of her face. The image demands microscopic clarity, capturing mascara clumps, skin pores, and vellus hairs. The lighting is an unforgiving, high-contrast hard {{lighting}} typical of avant-garde fashion photography.\",\n  \"subject_details\": {\n    \"main_subject\": \"Elderly woman's face (Macro topography of aging skin)\",\n    \"object\": \"Miniature white and blue iron with {{render_style}} plastic textures and a trailing cord\",\n    \"action\": \"The iron is creating a visible, flattened path through the wrinkles, visually simulating a cosmetic procedure\",\n    \"features\": [\n      \"Piercing brown eye\",\n      \"Clumped mascara on aging lashes\",\n      \"Deeply etched crow's feet contrast with 'ironed' smooth areas\",\n      \"Micro-details: vellus hair, capillaries, makeup powder texture\"\n    ]\n  },\n  \"artistic_style\": {\n    \"genre\": [\"Contemporary Pop-Surrealism\", \"Satirical Editorial\", \"Visual Metaphor\"],\n    \"aesthetic\": [\"Maurizio Cattelan style\", \"Vivid Color\", \"Commercial Kitsch\", \"Tactile Realism\"],\n    \"lighting\": \"Studio Ring Flash, High-Key, Hard Shadows, {{material}} finish\",\n    \"composition\": \"Macro Photography, Rule of Thirds focus on the iron\"\n  },\n  \"technical_specs\": {\n    \"camera\": \"Hasselblad H6D-100c\",\n    \"lens\": \"Macro 120mm f/4\",\n    \"film_stock\": \"Kodak Ektar 100\",\n    \"resolution\": \"8k, Unsplash award winner\"\n  },\n  \"mood\": \"Provocative, satirical, disturbingly pristine, humorous yet critical\"\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/64b9a6ef-0180-4dc2-bcfe-e2713b6d0550",
    "author": "@egeberkina",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Ege ([@egeberkina](https://x.com/egeberkina)) - [Post](https://x.com/egeberkina/status/1997061102237049047)"
  },
  {
    "id": "tpl_community_2_23",
    "name": {
      "zh-tw": "完美等距攝影",
      "en": "Perfectly Isometric Photography"
    },
    "content": {
      "zh-tw": "一張完美等距攝影作品，以頂視圖展示{{subject}}。所有元素都應該整齊排列，彼此平行或垂直。使用柔和的{{render_style}}漫射燈光、乾淨的背景和一致的陰影。構圖應該是對稱且令人滿意的。",
      "en": "Make a photo that is perfectly {{render_style}}. It is not a miniature, it is a captured photo that just happened to be perfectly isometric. It is a photo of {{subject}}."
    },
    "imageUrl": "https://github.com/user-attachments/assets/70622530-aad0-41fa-bdad-9e7f2b9b5683",
    "author": "@NanoBanana",
    "selections": {
      "render_style-0": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "render_style-1": {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      "subject-0": {
        "zh-tw": "女性角色",
        "en": "Female Character"
      },
      "subject-1": {
        "zh-tw": "女性角色",
        "en": "Female Character"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Nano Banana Pro ([@NanoBanana](https://x.com/NanoBanana)) - [Post](https://x.com/NanoBanana/status/1998085942201163905)"
  },
  {
    "id": "tpl_community_2_24",
    "name": {
      "zh-tw": "極端廣角手機螢幕替換",
      "en": "Extreme Wide Angle Phone Screen Replacement"
    },
    "content": {
      "zh-tw": "一張極端廣角手機螢幕替換照片。展示一個人拿著手機，手機螢幕顯示的圖像與周圍環境無縫連接，創造出螢幕延伸到現實世界的錯覺。使用{{art_style}}戲劇性{{composition}}透視。",
      "en": "{\n  \"edit_type\": \"extreme_wide_angle_phone_edit\",\n  \"source\": {\n    \"_hint\": \"Base for editing the person, clothing, and atmosphere of the original image. No new characters allowed.\",\n    \"mode\": \"EDIT\",\n    \"preserve_elements\": [\"Person\", \"Face\", \"Hairstyle\", \"Clothing\", \"Environment style\"],\n    \"change_rules\": {\n      \"camera_angle\": \"Ultra-wide or fisheye lens (equivalent to 12-18mm)\",\n      \"angle_options\": [\n        \"Looking up from directly in front\",\n        \"Looking down from directly in front\", \n        \"Extreme low angle\",\n        \"{{composition}}\",\n        \"Tilted composition\"\n      ],\n      \"perspective_effect\": \"Nearby objects are exaggerated, distant objects become smaller\",\n      \"body_parts_close_to_camera\": \"Bring 1-3 body parts extremely close to the camera\",\n      \"body_part_options\": [\n        \"Hands\",\n        \"Feet/shoes\",\n        \"Knees/thighs\",\n        \"Face\",\n        \"Shoulders/chest\"\n      ],\n      \"pose_variety\": [\n        \"Extending one hand/leg toward the camera\",\n        \"Squatting or lying on stomach halfway\",\n        \"Sitting on the ground or an object\",\n        \"Lying on the ground with legs pointed at camera\",\n        \"Leaning body sharply toward the camera\",\n        \"Twisting body for dynamic pose\"\n      ]\n    },\n    \"phone_handling\": {\n      \"allowed\": true,\n      \"grip_options\": [\n        \"One-handed\", \n        \"Two-handed\",\n        \"Low angle\",\n        \"High angle\", \n        \"Tilted\",\n        \"Sideways\",\n        \"Close to chest\",\n        \"Close to waist\",\n        \"Casual grip\"\n      ],\n      \"screen_replacement\": {\n        \"target\": \"Only the smartphone screen portion displayed in the image\",\n        \"source\": \"Second reference image\",\n        \"fitting_rules\": \"Strictly match the screen shape, no stretching or compression\",\n        \"interface_rules\": \"No icons, status bars, or app borders; only display content from original image\"\n      }\n    },\n    \"environment_consistency\": {\n      \"location\": \"Maintain the same location as the original image\",\n      \"lighting\": \"Maintain direction and intensity\",\n      \"extension_rules\": \"Maintain the same buildings, walls, road markings, colors, materials, and lighting style\"\n    },\n    \"global_restrictions\": [\n      \"No new characters allowed\",\n      \"No changes to age or gender expression of person\", \n      \"No clothing changes\",\n      \"No changes to location type\",\n      \"No text, logos, or watermarks added to image\",\n      \"No {{art_style}} or anime style\"\n    ]\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/4702c3fa-e023-4335-bcd0-a9bdd0a70741",
    "author": "@qisi_ai",
    "selections": {
      "composition-0": {
        "zh-tw": "高角度",
        "en": "high angle"
      },
      "composition-1": {
        "zh-tw": "高角度",
        "en": "high angle"
      },
      "art_style-0": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "art_style-1": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "骑司Chase ([@qisi_ai](https://x.com/qisi_ai)) - [Post](https://x.com/qisi_ai/status/1997925279948534056)"
  },
  {
    "id": "tpl_community_2_25",
    "name": {
      "zh-tw": "商店櫥窗卡通倒影",
      "en": "Shop Window Cartoon Reflection"
    },
    "content": {
      "zh-tw": "創建一張商店櫥窗照片，玻璃反射中顯示一個卡通版本的[人物/場景]。真實的商店內部和街道環境，但反射中是風格化的卡通插畫。使用{{lighting}}和{{render_style}}風格。",
      "en": "{\n  \"PROMPT\": \"Create a bright, high-end street-fashion photograph of the woman from the reference image, keeping her face, hair, body & outfit exactly the same. She stands outside a luxury toy-shop window, gently touching the glass. Inside the window display, place a full-height cartoon-style doll designed to resemble her—same features, hair, and outfit—transformed into a cute, big-eyed, stylized animated character. {{lighting}}, premium street-fashion look, {{render_style}} reflections, face unchanged.\",\n  \"settings\": {\n    \"style\": \"high-end street fashion\",\n    \"lighting\": \"crisp and bright\",\n    \"environment\": \"outside luxury toy-shop window\",\n    \"subject\": \"woman from reference image\",\n    \"focus\": [\"face\", \"hair\", \"body\", \"outfit\"],\n    \"additional_elements\": [\n      {\n        \"type\": \"doll\",\n        \"style\": \"cartoon-style, big-eyed, stylized\",\n        \"location\": \"inside window display\",\n        \"resemblance\": \"exact features, hair, outfit of woman\"\n      }\n    ],\n    \"reflections\": \"realistic\",\n    \"photorealism\": true\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/de147ce3-3932-41d7-8df1-fc4617849813",
    "author": "@xmiiru_",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Mira ([@xmiiru_](https://x.com/xmiiru_)) - [Post](https://x.com/xmiiru_/status/1997182817235583293)"
  },
  {
    "id": "tpl_community_2_26",
    "name": {
      "zh-tw": "城市3D LED螢幕",
      "en": "Urban 3D LED Display"
    },
    "content": {
      "zh-tw": "創建一張城市3D LED大螢幕顯示效果圖。在繁忙的城市十字路口，一棟建築物的巨大LED螢幕正在顯示[內容描述]。畫面應該呈現螢幕內容仿佛要衝出螢幕的3D效果。使用夜間城市{{color_tone}}燈光和{{render_style}}風格。",
      "en": "An enormous L-shaped glasses-free 3D LED screen situated prominently at a bustling urban intersection, designed in an iconic architectural style reminiscent of Shinjuku in Tokyo or Taikoo Li in Chengdu. The screen displays a captivating glasses-free 3D animation featuring [scene description]. The characters and objects possess striking depth and appear to break through the screen's boundaries, extending outward or floating vividly in mid-air. Under {{render_style}} daylight conditions, these elements cast lifelike shadows onto the screen's surface and surrounding buildings. Rich in intricate detail and {{color_tone}} colors, the animation seamlessly integrates with the urban setting and the bright sky overhead.\n\n----\nscene description: \n[An adorable giant kitten playfully paws at passing pedestrians, its fluffy paws and curious face extending realistically into the space around the screen.]"
    },
    "imageUrl": "https://github.com/user-attachments/assets/9a6c8f76-f737-4457-aa47-5e607b0c1a12",
    "author": "@dotey",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "宝玉 ([@dotey](https://x.com/dotey)) - [Post](https://x.com/dotey/status/1997574511705657772)"
  },
  {
    "id": "tpl_community_2_27",
    "name": {
      "zh-tw": "跨維度液體傾倒",
      "en": "Trans-Dimensional Liquid Pour"
    },
    "content": {
      "zh-tw": "一張跨次元液體傾倒照片。展示{{material}}液體從一個{{art_style}}維度（如照片或螢幕）傾倒到另一個維度（現實世界）。創造出{{composition}}次元邊界的超現實效果。使用戲劇性{{lighting}}和{{render_style}}{{camera_device}}質感。",
      "en": "{\n  \"meta\": {\n    \"type\": \"Creative Brief\",\n    \"genre\": \"{{render_style}} Surrealism\",\n    \"composition_style\": \"Composite Portrait\",\n    \"aspect_ratio\": \"Portrait (implied by 'portrait' description)\"\n  },\n  \"scene_architecture\": {\n    \"viewpoint\": {\n      \"type\": \"Photographic\",\n      \"angle\": \"High-angle / Looking down\",\n      \"framing\": \"Tight on central subject\"\n    },\n    \"dimensional_hierarchy\": {\n      \"rule\": \"Scale disparity for {{art_style}} effect\",\n      \"dominant_element\": \"{{camera_device}} 17 Pro Max (Super-scaled)\",\n      \"subordinate_elements\": [\"Blue Book (Miniature)\", \"Pen (Miniature)\"]\n    }\n  },\n  \"realm_physical\": {\n    \"description\": \"The real-world environment surrounding the device.\",\n    \"environment\": {\n      \"surface\": \"{{material}} table\",\n      \"texture_attributes\": [\"rich grain\", \"tactile\", \"worn\"]\n    },\n    \"lighting_global\": {\n      \"source\": \"{{lighting}}\",\n      \"temperature\": \"Warm\",\n      \"shadow_quality\": \"Soft, diffused, volumetric\"\n    },\n    \"active_agent\": {\n      \"identity\": \"Human Hand (Real)\",\n      \"action\": \"Pouring\",\n      \"position\": \"Entering frame laterally\"\n    },\n    \"held_object\": {\n      \"item\": \"Bottle\",\n      \"state\": \"Chilled (visible condensation)\",\n      \"branding\": {\n        \"logo_text\": \"Decamin\",\n        \"placement\": \"Visible on label\"\n      },\n      \"contents\": {\n        \"substance\": \"Water\",\n        \"color\": \"Light Green\",\n        \"state\": \"Liquid flow\"\n      }\n    },\n    \"static_props\": [\n      {\n        \"item\": \"Book\",\n        \"color\": \"Blue\",\n        \"scale_notes\": \"Significantly smaller than phone\"\n      },\n      {\n        \"item\": \"Pen\",\n        \"type\": \"Ballpoint/Ink\",\n        \"scale_notes\": \"Significantly smaller than phone\"\n      }\n    ]\n  },\n  \"realm_digital\": {\n    \"description\": \"The content displayed on the screen.\",\n    \"container_device\": {\n      \"model\": \"iPhone 17 Pro Max\",\n      \"state\": \"Screen ON\",\n      \"orientation\": \"Flat on physical surface\"\n    },\n    \"screen_content\": {\n      \"subject_identity\": \"mqn (Reference ID)\",\n      \"subject_scale\": \"{{composition}} (filling screen)\",\n      \"expression\": \"Happy / Smiling\",\n      \"attire\": \"Winter clothing (matching reference)\",\n      \"setting\": \"Winter landscape / snowy backdrop\",\n      \"held_object_digital\": {\n        \"item\": \"Drinking Glass\",\n        \"branding\": {\n          \"logo_text\": \"Decamin\",\n          \"visibility\": \"Clear\"\n        },\n        \"initial_state\": \"Empty (waiting for pour)\"\n      }\n    }\n  },\n  \"surreal_bridge_event\": {\n    \"description\": \"The interaction connecting the physical and digital realms.\",\n    \"action_type\": \"Trans-dimensional Fluid Dynamics\",\n    \"source\": \"realm_physical.held_object.contents (Light Green Water)\",\n    \"interaction_point\": \"realm_digital.container_device.screen_surface\",\n    \"destination\": \"realm_digital.screen_content.held_object_digital (The Glass)\",\n    \"physics_violation_rules\": {\n      \"rule_1\": \"Liquid does not splash off the glass screen surface.\",\n      \"rule_2\": \"Screen surface acts as a permeable membrane solely for this liquid.\",\n      \"rule_3\": \"Physical liquid transitions seamlessly into digital representation upon contact.\"\n    },\n    \"visual_details\": [\"Sharp liquid simulation\", \"No surface tension on screen glass\", \"Fluid physically filling digital cup\"]\n  },\n  \"rendering_specifications\": {\n    \"visual_fidelity\": \"Hyper-realistic\",\n    \"texture_focus\": [\"Sharp fluid details\", \"Glass pixels\", \"Wood grain\", \"Skin texture (hand and subject)\"],\n    \"mood\": \"Cinematic, warm, magical\",\n    \"resolution_target\": \"8K / Highly detailed\"\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/c586994f-d725-4539-8178-245c5972c8a9",
    "author": "@YaseenK7212",
    "selections": {
      "render_style-0": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-1": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "material-0": {
        "zh-tw": "木質",
        "en": "wooden"
      },
      "material-1": {
        "zh-tw": "木質",
        "en": "wooden"
      },
      "art_style-0": {
        "zh-tw": "超現實",
        "en": "surreal"
      },
      "art_style-1": {
        "zh-tw": "超現實",
        "en": "surreal"
      },
      "camera_device-0": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-1": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Yaseen Khan Gul ([@YaseenK7212](https://x.com/YaseenK7212)) - [Post](https://x.com/YaseenK7212/status/1996559154240967144)"
  },
  {
    "id": "tpl_community_2_28",
    "name": {
      "zh-tw": "魚眼抹茶女孩",
      "en": "Fisheye Matcha Girl"
    },
    "content": {
      "zh-tw": "一張{{lens_type}}抹茶女孩照片。一位年輕女性在抹茶咖啡廳拿著抹茶飲料的{{composition}}，使用{{lens_type}}效果創造誇張的透視和有趣的變形。使用{{lighting}}和{{color_tone}}。",
      "en": "{\n  \"scene\": {\n    \"environment\": \"sunny_boardwalk\",\n    \"details\": \"wooden_planks, colorful_stalls, people_walking, distant_umbrellas\",\n    \"lighting\": \"{{lighting}}\",\n    \"sky\": \"clear_blue\"\n  },\n  \"camera\": {\n    \"lens\": \"{{lens_type}}\",\n    \"distance\": \"very_close_up\",\n    \"distortion\": \"strong_exaggeration\",\n    \"angle\": \"slightly_low_upward\"\n  },\n  \"subject\": {\n    \"type\": \"young_person\",\n    \"gender\": \"neutral\",\n    \"expression\": \"curious_playful\",\n    \"eyes\": \"large_due_to_lens_distortion\",\n    \"pose\": \"leaning_forward_sipping_drink\",\n    \"clothing\": {\n      \"top\": \"bright_green_knit_sweater\",\n      \"accessory\": \"chunky_blue_sunglasses\"\n    }\n  },\n  \"drink\": {\n    \"type\": \"iced_matcha_latte\",\n    \"ice_cubes\": \"large_clear\",\n    \"cup\": \"transparent_plastic\",\n    \"straw\": \"green_white_spiral\"\n  },\n  \"effects\": {\n    \"depth_of_field\": \"shallow_foreground_sharp_background_soft\",\n    \"reflections\": \"glasses_show_boardwalk_and_people\",\n    \"color_grade\": \"{{color_tone}}\"\n  },\n  \"composition\": {\n    \"focus\": \"{{composition}}\",\n    \"mood\": \"funny_intimate_casual\",\n    \"background_elements\": [\n      \"distant_people\",\n      \"benches\",\n      \"bright_shops\"\n    ]\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/02ad3cc3-60e7-4263-ab03-1741a4e27010",
    "author": "@egeberkina",
    "selections": {
      "lens_type-0": {
        "zh-tw": "極端魚眼鏡頭",
        "en": "Extreme Fisheye Lens"
      },
      "lens_type-1": {
        "zh-tw": "極端魚眼鏡頭",
        "en": "Extreme Fisheye Lens"
      },
      "lens_type-2": {
        "zh-tw": "極端魚眼鏡頭",
        "en": "Extreme Fisheye Lens"
      },
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Ege ([@egeberkina](https://x.com/egeberkina)) - [Post](https://x.com/egeberkina/status/1995069549805187087)"
  },
  {
    "id": "tpl_community_2_29",
    "name": {
      "zh-tw": "Canon IXUS美學肖像",
      "en": "Canon IXUS Aesthetic Portrait"
    },
    "content": {
      "zh-tw": "一張Canon IXUS美學風格的肖像照。使用早期{{camera_device}}美學：略微過曝、柔和的{{lighting}}效果、輕微的動態模糊和懷舊的色彩。主體應該在休閒環境中自然擺姿，帶有2000年代{{render_style}}數位相機快照的感覺。",
      "en": "{\n  \"image_parameters\": {\n    \"style\": \"{{camera_device}} IXUS aesthetic\",\n    \"type\": \"Point-and-shoot photography\",\n    \"quality\": \"{{render_style}}\",\n    \"tone\": \"Sharp, direct\",\n    \"lighting_and_atmosphere\": \"Realistic, {{lighting}}-style/direct lighting\"\n  },\n  \"subject\": {\n    \"constraints\": {\n      \"facial_identity\": \"Match reference image exactly 100%\",\n      \"face_edits\": \"None allowed\"\n    },\n    \"hair\": {\n      \"style\": \"Long, natural, lightly messy layered look\",\n      \"movement\": \"Blowing gently in the wind\",\n      \"details\": \"Strands slightly covering part of face\"\n    },\n    \"makeup\": {\n      \"cheeks_and_nose\": \"Soft pink blush with blurred effect\",\n      \"lips\": \"Subtle pink-orange tinted outline\"\n    },\n    \"expression\": [\n      \"Cute\",\n      \"Naive\",\n      \"Cheerful\",\n      \"Slightly sexy/undone charm\"\n    ],\n    \"pose\": {\n      \"body_position\": \"Half-sitting, half-standing\",\n      \"action\": \"Flicking hair\"\n    },\n    \"clothing\": {\n      \"top\": \"Black strapless top\",\n      \"bottom\": \"Low-waisted jeans with a floating waistline\",\n      \"neck\": \"Thin black fabric choker/wrap\"\n    },\n    \"accessories\": [\n      \"Small pendant necklace\",\n      \"Gold watch\"\n    ]\n  },\n  \"environment\": {\n    \"setting\": \"Modern pub\",\n    \"foreground_props\": [\n      \"Round table\",\n      \"Bottle of liquor\",\n      \"Glass of liquor\"\n    ]\n  }\n}"
    },
    "imageUrl": "https://github.com/user-attachments/assets/60f378d3-e5c6-4e86-b80f-3a1a01269931",
    "author": "@lexx_aura",
    "selections": {
      "render_style-0": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-1": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "camera_device-0": {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      },
      "camera_device-1": {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Lex ([@lexx_aura](https://x.com/lexx_aura)) - [Post](https://x.com/lexx_aura/status/1996561195424260299)"
  },
  {
    "id": "tpl_community_2_30",
    "name": {
      "zh-tw": "超寫實動漫聚光燈肖像",
      "en": "Hyperrealistic Anime Portrait Spotlight"
    },
    "content": {
      "zh-tw": "生成一張站在全黑背景中的女性角色的超{{render_style}}{{art_style}}肖像。\n燈光：使用僅聚焦在臉部中心的**窄光束{{lighting}}**。\n光線邊緣必須銳利且戲劇化。\n{{lighting}}外的所有區域應快速落入深暗（高衰減陰影），幾乎與黑色背景融合。\n不是柔和燈光。\n頭髮：長深色頭髮，部分髮絲落在臉上。頭髮下部應消失在陰影中。\n姿勢：一隻手輕輕抬起靠近嘴唇，呈害羞、猶豫的姿態。\n眼睛直視相機，帶有{{expressions}}情緒。\n服裝：黑色長袖針織毛衣；\n毛衣和身體應大部分消失在黑暗中，細節極少。\n整體色調：深色、情緒化、戲劇化、神秘。\n僅在臉部被照亮的部分有高對比度。\n{{lighting}}外的一切應幾乎不可見。",
      "en": "Generate a hyperrealistic {{render_style}}-{{art_style}} portrait of a female character standing in a completely black background.\nLighting: use a **narrow beam {{lighting}}** focused only on the center of the face. \nThe edges of the light must be sharp and dramatic. \nAll areas outside the spotlight should fall quickly into deep darkness \n(high falloff shadow), almost blending into the black background. \nNot soft lighting.\nHair: long dark hair with some strands falling over the face. The lower parts of the hair should fade into the shadows.\nPose: one hand raised gently to the lips in a shy, hesitant gesture. \nEyes looking directly at the camera with a {{expressions}} mood.\nClothing: black long-sleeve knit sweater; \nthe sweater and body should mostly disappear into the darkness with minimal detail.\nOverall tone: dark, moody, dramatic, mysterious. \nHigh-contrast only in the lit portion of the face. \nEverything outside the spotlight should be nearly invisible."
    },
    "imageUrl": "https://github.com/user-attachments/assets/47f0cdba-1462-4c2c-a7be-817924008f8e",
    "author": "@SimplyAnnisa",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-1": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-2": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "lighting-3": {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      "art_style-0": {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      "art_style-1": {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      "expressions-0": {
        "zh-tw": "神秘",
        "en": "mysterious"
      },
      "expressions-1": {
        "zh-tw": "神秘",
        "en": "mysterious"
      }
    },
    "tags": [
      "創意",
      "藝術",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Anissa ([@SimplyAnnisa](https://x.com/SimplyAnnisa)) - [Post](https://x.com/SimplyAnnisa/status/1995131975351562274)"
  },
  {
    "id": "tpl_community_3_1",
    "name": {
      "zh-tw": "概念視覺化（文字轉資訊圖表）",
      "en": "Concept Visualization (Text to Infographic)"
    },
    "content": {
      "zh-tw": "將這個概念{{concept_topic}}視覺化為一張教育資訊圖表。\n使用清晰的視覺層級、圖示和簡短文字說明。\n風格應該是現代、{{art_style}}、專業的，適合教育或商業簡報使用。\n包含主要概念、子概念和它們之間的關係。\n使用一致的色彩方案和易讀的字體。",
      "en": "Create an educational infographic explaining {{concept_topic}} . Visual Elements : Illustrate the key components: The Sun, a green Plant, Water (H2O) entering roots, Carbon Dioxide (CO2) entering leaves, and Oxygen (O2) being released. Style : Clean, flat vector {{art_style}} suitable for a high school science textbook. Use arrows to show the flow of energy and matter. Labels : Label each element clearly in English ."
    },
    "imageUrl": "https://github.com/user-attachments/assets/32ac23df-2c14-4dc4-899f-db197bf6bf5c",
    "author": "WeChat Article",
    "selections": {
      "art_style-0": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "art_style-1": {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      "concept_topic-0": {
        "zh-tw": "光合作用",
        "en": "Photosynthesis"
      },
      "concept_topic-1": {
        "zh-tw": "光合作用",
        "en": "Photosynthesis"
      }
    },
    "tags": [
      "教育",
      "圖表",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_3_2",
    "name": {
      "zh-tw": "兒童蠟筆旅行日記插畫",
      "en": "Kids' Crayon Travel Journal Illustrator"
    },
    "content": {
      "zh-tw": "創建一頁兒童蠟筆風格的旅行日記插畫，記錄{{travel_location}}的旅行。\n風格應該像是{{art_style}}孩子用蠟筆畫的：簡單的線條、{{color_tone}}鮮豔的顏色、可愛的比例，創造{{expressions}}旅行氛圍。\n包含當地地標、食物、交通工具和有趣的旅行時刻。\n添加手寫風格的標題和註釋。",
      "en": "--- Prompt ---\n\nPlease create a {{color_tone}}, child-like crayon-style vertical (9:16) illustration titled \"{City Name} Travel Journal.\"  \nThe artwork should look as if it were drawn by a curious child using colorful crayons, featuring a soft, warm light-toned background (such as pale yellow), combined with bright reds, blues, greens, and other cheerful colors to create a cozy, {{expressions}} travel atmosphere.\n\nI. Main Scene: Travel-Journal Style Route Map\n\nIn the center of the illustration, draw a \"winding, zigzagging travel route\" with arrows and dotted lines connecting multiple locations.  \nThe route should automatically generate recommended attractions based on {Number of Days}:\n\nExample structure (auto-filled with {City Name}-related content):\n\n- \"Stop 1: {Attraction 1 + short fun description}\"\n- \"Stop 2: {Attraction 2 + short fun description}\"\n- \"Stop 3: {Attraction 3 + short fun description}\"\n- …\n- \"Final Stop: {Local signature food or souvenir + warm closing remark}\"\n\nRules:\n- If no number of days is provided, default to a 1-day highlight itinerary.\n\nII. Surrounding Playful Elements (Auto-adapt to the City)\n\nAdd many cute doodles and child-like decorative elements around the route, such as:\n\n1. Adorable travel characters\n   - A child holding a local snack  \n   - A little adventurer with a backpack\n\n2. Q-style {{art_style}} iconic landmarks\n   - \"{City Landmark 1}\"\n   - \"{City Landmark 2}\"\n   - \"{City Landmark 3}\"\n\n3. Funny signboards\n   - \"Don't get lost!\"\n   - \"Crowds ahead!\"\n   - \"Yummy food this way!\"  \n   (Auto-adjust contextually for the city)\n\n4. Sticker-style short phrases\n   - \"{City Name} travel memories unlocked!\"\n   - \"{City Name} food adventure!\"\n   - \"Where to next?\"\n\n5. Cute icons of local foods\n   - \"{Local Food 1}\"\n   - \"{Local Food 2}\"\n   - \"{Local Food 3}\"\n\n6. Childlike exclamations\n   - \"I didn't know {City Name} was so fun!\"\n   - \"I want to come again!\"\n\nIII. Overall Art Style Requirements\n\n- Crayon / children's hand-drawn travel diary style  \n- Bright, warm, colorful palette  \n- Cozy but full and lively composition  \n- Emphasize the joy of exploring  \n- All text should be in a cute handwritten font  \n- Make the entire page feel like a young child's fun travel-journal entry"
    },
    "imageUrl": "https://github.com/user-attachments/assets/e6bb002d-7f4e-4486-99df-30e0f1b0d8f2",
    "author": "@dotey",
    "selections": {
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "art_style-0": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-1": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "expressions-0": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "expressions-1": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "travel_location-0": {
        "zh-tw": "西藏拉薩布達拉宮",
        "en": "Potala Palace, Lhasa, Tibet"
      }
    },
    "tags": [
      "教育",
      "圖表",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@dotey](https://x.com/dotey/status/1994908289813880915)"
  },
  {
    "id": "tpl_community_3_3",
    "name": {
      "zh-tw": "財務桑基圖視覺化",
      "en": "Financial Sankey Diagram Visualization"
    },
    "content": {
      "zh-tw": "創建一張財務桑基圖視覺化，展示[收入/支出類別]的流向。\n使用{{color_tone}}清晰的顏色編碼區分不同類別。\n流量寬度應該準確反映金額大小。\n風格應該是{{render_style}}現代、乾淨、專業的，適合財務報告或個人理財分析。",
      "en": "[Subject]: A professional financial Sankey diagram visualizing the Income Statement of a major corporation, in the style of \"App Economy Insights\" and US corporate financial reports.[Visual Style]: High-fidelity vector infographic, clean {{render_style}} aesthetic with {{color_tone}} palette, flat design. The background is a clean, very light grey or off-white.[Color Strategy - CRITICAL]:\nAnalyze the [Insert Brand Name Here] logo. Extract its primary brand color (e.g., if Nvidia use neon green, if Meta use blue, if Tesla use red).\nUse this primary color as the dominant theme for the main revenue flows and profit blocks.\nCreate a harmonious color palette based on this primary color: use saturated shades for the vertical nodes (bars) and semi-transparent, lighter opacity gradients for the flowing paths to ensure a cohesive and professional look. Avoid clashing colors.[Composition & Structure]:\nFlow: A horizontal flow from Left (Revenue Sources) to Right (Net Profit).\nTexture: The connecting paths (flows) must appear \"silky smooth\" with elegant Bezier curves, looking like liquid ribbons, not jagged lines.\nIconography: On the left side (Revenue sources), include specific, minimalist flat vector icons representing the business segments (e.g., a car icon for automotive, a cloud icon for services, a chip icon for hardware).\nBranding: Place the official [Insert Brand Name Here] logo clearly at the top center or near the central revenue bar.[Details]: High resolution, 4k, sharp typography (sans-serif), professional data visualization layout. The chart clearly distinguishes between Revenue, Gross Profit, Operating Expenses, and Net Profit."
    },
    "imageUrl": "https://github.com/user-attachments/assets/1f15d287-94f1-49aa-b1c9-d09fdc7d973e",
    "author": "@bggg_ai",
    "selections": {
      "render_style-0": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "render_style-1": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      }
    },
    "tags": [
      "教育",
      "圖表",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "饼干哥哥AGI（2.0） ([@bggg_ai](https://x.com/bggg_ai)) - [Post](https://x.com/bggg_ai/status/1996211865207316751?s=20)"
  },
  {
    "id": "tpl_community_4_1",
    "name": {
      "zh-tw": "虛擬模特試穿",
      "en": "Virtual Model Try-On"
    },
    "content": {
      "zh-tw": "使用圖像1（服裝）和圖像2（模特），創建一張{{render_style}}全身時尚照片，模特穿著服裝。\n\n臉部一致性：保持模特100%準確的面部特徵、骨骼結構和膚色。\n服裝準確性：服裝必須與圖像1中顯示的完全一致——相同的剪裁、顏色、布料、紋理和細節。\n姿勢：自然站立姿勢，展示服裝的全貌。\n燈光：專業{{camera_device}}攝影棚燈光，柔和均勻。\n背景：乾淨的純色背景或專業攝影棚設置。",
      "en": "Using Image 1 (the garment) and Image 2 (the model), create a {{render_style}} full-body fashion photo where the model is wearing the garment. Crucial Fit Details : The [T-shirt/Jacket] must drape naturally on the model's body, conforming to their posture and creating realistic folds and wrinkles . High-Fidelity Preservation : Preserve the original fabric texture, color, and any logos from Image 1 with extreme accuracy. Seamless Integration : Blend the garment into Image 2 by perfectly matching the ambient lighting, color temperature, and shadow direction . Photography Style : Clean e-commerce lookbook, shot on a {{camera_device}} EOS R5 with a 50mm f/1.8 lens for a natural, professional look."
    },
    "imageUrl": "https://github.com/user-attachments/assets/1c8a837f-2e0f-4802-8763-1ba07eec6312",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "render_style-1": {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      "camera_device-0": {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      },
      "camera_device-1": {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      }
    },
    "tags": [
      "電商",
      "產品",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_4_2",
    "name": {
      "zh-tw": "專業產品攝影",
      "en": "Professional Product Photography"
    },
    "content": {
      "zh-tw": "識別上傳照片中的主要產品（自動移除任何握持它的手或雜亂背景），然後生成一張商業級電商產品照片。\n\n呈現方式：將產品放置在與產品類型適配的乾淨、{{render_style}}專業背景上。\n燈光：使用柔和、專業的{{lighting}}產品攝影。\n角度：選擇最能展示產品特徵的角度。\n品質：8K，超細節，適合電商列表使用。",
      "en": "Identify the main product in the uploaded photo (automatically removing any hands holding it or messy background details). Recreate it as a premium e-commerce product shot . Subject Isolation : Cleanly extract the product, completely removing any fingers, hands, or clutter . Background : Place the product on a pure white studio background (RGB 255, 255, 255) with a subtle, natural contact shadow at the base to ground it. Lighting : Use soft, commercial {{lighting}} in {{render_style}} style to highlight the product's texture and material. Ensure even illumination with no harsh glare. Retouching : Automatically fix any lens distortion, improve sharpness, and color-correct to make the product look brand new and professional ."
    },
    "imageUrl": "https://github.com/user-attachments/assets/041bfa5e-8871-4878-b0d3-a3e8f461a29c",
    "author": "WeChat Article",
    "selections": {
      "lighting-0": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "lighting-1": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "render_style-0": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "render_style-1": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      }
    },
    "tags": [
      "電商",
      "產品",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_4_3",
    "name": {
      "zh-tw": "3D Q版迷你品牌店鋪",
      "en": "3D Chibi-Style Miniature Brand Store"
    },
    "content": {
      "zh-tw": "{{render_style}} Q版風格的{{company}}迷你概念店，創意設計並展示其標誌性元素和產品。\n\n店面應該是一個可愛的3D微縮場景，包含：\n- 品牌標誌性的視覺元素和配色\n- 迷你版的標誌性產品\n- 可愛的裝飾細節\n- 溫暖的燈光和愉快的氛圍\n\n風格：圓潤、精緻、有光澤的3D渲染\n顏色：使用品牌的主要配色\n比例：微型微縮模型比例",
      "en": "{{render_style}} chibi-style miniature concept store of {{company}}, creatively designed with an exterior inspired by the brand's most iconic product or packaging (such as a giant {brand's core product, e.g., chicken bucket/hamburger/donut/roast duck}). The store features two floors with large glass windows clearly showcasing the cozy and finely decorated interior: {brand's primary color}-themed decor, warm lighting, and busy staff dressed in outfits matching the brand. Adorable tiny figures stroll or sit along the street, surrounded by benches, street lamps, and potted plants, creating a charming urban scene. Rendered in a miniature cityscape style using Cinema 4D, with a blind-box toy aesthetic, rich in details and realism, and bathed in soft lighting that evokes a relaxing afternoon atmosphere. --ar 2:3"
    },
    "imageUrl": "https://github.com/user-attachments/assets/31883828-dce9-4d99-bf3f-ffcdbf06d9ba",
    "author": "@dotey",
    "selections": {
      "render_style-0": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "render_style-1": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "company-0": {
        "zh-tw": "Apple",
        "en": "Apple"
      },
      "company-1": {
        "zh-tw": "Apple",
        "en": "Apple"
      }
    },
    "tags": [
      "電商",
      "產品",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "宝玉 ([@dotey](https://x.com/dotey)) - [Post](https://x.com/dotey/status/1995190286775881780?s=20)"
  },
  {
    "id": "tpl_community_4_4",
    "name": {
      "zh-tw": "房間佈置視覺化",
      "en": "Room Furnishing Visualization"
    },
    "content": {
      "zh-tw": "展示這個房間擺放家具後會是什麼樣子。\n\n基於上傳的空房間照片，生成一個專業的室內設計視覺化，展示適當的家具擺放。\n風格應該{{render_style}}、{{art_style}}。\n保持原始房間的結構、窗戶和{{lighting}}不變。\n添加適合房間大小和用途的家具。",
      "en": "Show me how this room would look with furniture in it. Use {{render_style}} rendering with {{art_style}} style and {{lighting}}."
    },
    "imageUrl": "https://github.com/user-attachments/assets/c7751af3-ac2d-479f-b456-9769188f2157",
    "author": "@NanoBanana",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "art_style-0": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "art_style-1": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      }
    },
    "tags": [
      "電商",
      "產品",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@NanoBanana](https://x.com/NanoBanana/status/1994483569625022487)"
  },
  {
    "id": "tpl_community_5_1",
    "name": {
      "zh-tw": "手繪流程圖轉企業圖表",
      "en": "Hand-drawn Flowchart to Corporate Charts"
    },
    "content": {
      "zh-tw": "將這張{{art_style}}白板草稿轉換成適合商業簡報的專業企業流程圖。\n\n保留原始的邏輯流程和連接關係。\n使用乾淨、專業的{{render_style}}設計風格。\n應用一致的配色方案和字體。\n確保所有文字清晰易讀。\n添加適當的圖示和視覺元素。",
      "en": "Convert this {{art_style}} whiteboard sketch into a professional corporate flowchart suitable for a business presentation. Style Guide : Use a {{render_style}} 'McKinsey-style' aesthetic : clean lines, ample whitespace, and a sophisticated blue-and-gray color palette. Structure : Automatically align all boxes and diamonds to a strict grid . Connect them with straight, orthogonal arrows (90-degree angles only, no curvy lines). Text : Transcribe the handwritten labels into a clear, bold Sans-Serif font (like Arial or Roboto). Output : High-resolution vector-style image on a pure white background."
    },
    "imageUrl": "https://github.com/user-attachments/assets/a1428218-df31-41b3-8339-bb453c733585",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "render_style-1": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "art_style-0": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-1": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      }
    },
    "tags": [
      "辦公",
      "效率",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_5_2",
    "name": {
      "zh-tw": "UI手繪稿轉高保真原型",
      "en": "UI Hand-drawn Sketch to High-Fidelity Prototype"
    },
    "content": {
      "zh-tw": "將這張粗略的線框稿轉換成高保真的手機App UI設計稿。\n\n設計規範：\n- {{render_style}}現代、乾淨的UI風格\n- 一致的設計系統（間距、字體、{{color_tone}}顏色）\n- 適當的按鈕狀態和互動元素\n- 清晰的視覺層級\n- 考慮{{camera_device}} iOS/Android設計指南\n\n輸出：專業的UI設計稿，可用於開發團隊實現。",
      "en": "Transform this rough wireframe sketch into a high-fidelity UI design mockups for a mobile app. Design System : Apply a modern, clean aesthetics similar to iOS 18 or Material Design 3 . Use rounded corners, soft drop shadows, and a {{color_tone}} primary color. Components : Intelligently interpret the sketch: turn scribbles into high-quality placeholder images , convert rough rectangles into proper buttons with gradients , and turn lines into {{render_style}} text blocks . Layout : Ensure perfect padding and consistent spacing between elements. Context : Place the design inside a realistic {{camera_device}} 16 frame mockups."
    },
    "imageUrl": "https://github.com/user-attachments/assets/4d4cd9b1-2e75-4d40-92a3-fae4a4ca7f1f",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "camera_device-0": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      "camera_device-1": {
        "zh-tw": "iPhone",
        "en": "iPhone"
      }
    },
    "tags": [
      "辦公",
      "效率",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_5_3",
    "name": {
      "zh-tw": "雜誌版面生成器",
      "en": "Magazine Layout Generator"
    },
    "content": {
      "zh-tw": "將這段完整文字逐字放入一張{{material}}雜誌文章的照片中，雜誌放在桌上，配有照片和{{art_style}}專業排版。\n\n佈局應該看起來像真正的雜誌內頁：\n- 多欄排版\n- 大標題和副標題\n- 插入的照片和圖說\n- 專業的字體選擇\n- 頁碼和雜誌名稱\n\n風格：高端生活方式雜誌美學。",
      "en": "Put this whole text, verbatim, into a {{art_style}} photo of a {{material}} magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [...the unformatted article]"
    },
    "imageUrl": "https://github.com/user-attachments/assets/5a2e06a2-cdbd-47e4-ab3a-4aa1392242e9",
    "author": "@fofrAI",
    "selections": {
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "art_style-0": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "art_style-1": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      }
    },
    "tags": [
      "辦公",
      "效率",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@fofrAI](https://x.com/fofrAI/status/1991530971800182929)"
  },
  {
    "id": "tpl_community_6_1",
    "name": {
      "zh-tw": "構圖修復（智慧擴展）",
      "en": "Composition Rescue (Smart Outpainting)"
    },
    "content": {
      "zh-tw": "將這張圖片縮小並擴展到{{ratio}}比例。\n\n情境感知：智慧填充擴展區域，保持與原始圖像一致的風格、燈光和氛圍。\n主體保護：保持原始主體完整不變。\n無縫融合：擴展區域應與原圖自然融合，看不出接縫。\n品質：{{render_style}}高解析度輸出，適合作為桌布使用。",
      "en": "Zoom out and expand this image to a {{ratio}} aspect ratio with {{render_style}} style (computer wallpaper size). Context Awareness : Seamlessly extend the scenery on both left and right sides. Match the original lighting, weather, and texture perfectly. Logical Completion : If there are cut-off objects (like a shoulder, a tree branch, or a building edge) on the borders, complete them naturally based on logical inference. Do not distort the original center image."
    },
    "imageUrl": "https://github.com/user-attachments/assets/e85155ce-9cad-4086-9c63-bb72b7715274",
    "author": "WeChat Article",
    "selections": {
      "ratio-0": {
        "zh-tw": "16:9橫式構圖",
        "en": "16:9 Horizontal"
      },
      "ratio-1": {
        "zh-tw": "16:9橫式構圖",
        "en": "16:9 Horizontal"
      },
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      }
    },
    "tags": [
      "修圖",
      "編輯",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_6_2",
    "name": {
      "zh-tw": "智慧人群移除",
      "en": "Smart Crowd Removal"
    },
    "content": {
      "zh-tw": "移除主體身後背景中的所有遊客/人物。\n\n智慧填充：用合理的背景內容替換被移除的區域，保持場景的{{lighting}}和一致性。\n主體保護：主體人物必須完全保留不變。\n品質：{{render_style}}無縫修復，看不出編輯痕跡。",
      "en": "Remove all the tourists/people in the background behind the main subject. Intelligent Fill : Replace them with {{render_style}} background elements that logically fit the scene (e.g., extend the cobblestone pavement, empty park benches, or grass textures). Consistency : Ensure no blurry artifacts or 'smudges' remain. The filled area must have the same grain, focus depth, and {{lighting}} as the rest of the photo."
    },
    "imageUrl": "https://github.com/user-attachments/assets/92d6afaf-2d58-4296-a0da-29fe9ae801e8",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "render_style-1": {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      }
    },
    "tags": [
      "修圖",
      "編輯",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_6_3",
    "name": {
      "zh-tw": "人臉偵測監視器模擬",
      "en": "Face Detection CCTV Simulation"
    },
    "content": {
      "zh-tw": "創建一張{{composition}}監視器風格的照片，模擬CCTV人臉偵測系統的畫面。\n在人臉周圍添加{{color_tone}}綠色偵測框，並顯示臉部特徵點。\n添加類似監控系統的UI元素：時間戳、攝影機編號、錄影指示燈。\n使用略帶噪點的低畫質效果，模擬真實監控攝影機的感覺。",
      "en": "Create a high angle CCTV surveillance shot using the uploaded image as the source. Detect every visible person in the image and automatically draw a white rectangular bounding box around each face. For the most prominent person, add a large zoom in inset: a sharp, enhanced {{composition}} of their face displayed in a floating rectangular frame connected with a thin white line.Keep the main image slightly noisy and security camera like (soft grain, slight distortion, {{color_tone}} colors), while the zoom in face box should be clearer, brighter, and more detailed. No text, no timestamps, no overlays except the boxes and connecting line. Maintain the original scene layout, angle, and environment of the uploaded image."
    },
    "imageUrl": "https://github.com/user-attachments/assets/f7a37a27-e139-4dfe-822e-31585e4ce371",
    "author": "@egeberkina",
    "selections": {
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "color_tone-0": {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      "color_tone-1": {
        "zh-tw": "低飽和",
        "en": "muted"
      }
    },
    "tags": [
      "修圖",
      "編輯",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[@egeberkina](https://x.com/egeberkina/status/1994804061024010628)"
  },
  {
    "id": "tpl_community_7_1",
    "name": {
      "zh-tw": "硬裝預覽（平面圖轉設計）",
      "en": "Hard Furnishing Preview (Floor Plan to Design)"
    },
    "content": {
      "zh-tw": "基於上傳的2D平面圖，生成一張專業的{{art_style}}室內設計展示板，採用並排佈局：\n\n左側：原始平面圖，帶有清晰的標註\n右側：該空間的3D室內設計渲染\n\n3D渲染應展示：\n- 專業的硬裝設計（地板、牆面、天花板）\n- 適當的家具擺放\n- 自然和人工照明\n- 材質和紋理細節\n\n風格：{{render_style}}現代、專業的室內設計展示。",
      "en": "Based on the uploaded 2D floor plan, generate a professional interior design presentation board in a single image. Layout : The final image should be a {{art_style}} with one large main image at the top, and several smaller images below it. Content of Each Panel :\n1. Main Image (Top) : A wide-angle perspective view of the main living area , showing the connection between the living room and dining area.\n2. Small Image (Bottom Left) : A view of the Master Bedroom , focusing on the bed and window.\n3. Small Image (Bottom Middle) : A view of the Home Office / Study room .\n4. Small Image (Bottom Right) : A 3D top-down floor plan view showing the furniture layout. Overall Style : Apply a consistent Modern Minimalist style with warm oak wood flooring and off-white walls across ALL images. Quality : {{render_style}} rendering, soft natural lighting."
    },
    "imageUrl": "https://github.com/user-attachments/assets/1cf9189a-d27d-4d69-95c2-606246fd12b6",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "render_style-1": {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      "art_style-0": {
        "zh-tw": "拼貼風格",
        "en": "collage"
      },
      "art_style-1": {
        "zh-tw": "拼貼風格",
        "en": "collage"
      }
    },
    "tags": [
      "室內設計",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_8_1",
    "name": {
      "zh-tw": "病毒式封面圖（YouTube/抖音/TikTok）",
      "en": "Viral Cover Image (Youtube/Douyin/TikTok)"
    },
    "content": {
      "zh-tw": "使用圖像1中的人物設計一張病毒式影片縮圖。\n\n臉部一致性：保持人物100%準確的面部特徵、表情和身份。\n設計元素：\n- {{expressions}}的表情\n- 大膽的文字標題\n- {{color_tone}}的顏色\n- {{lighting}}和陰影\n- 吸引點擊的構圖\n\n適用於：YouTube/抖音/TikTok縮圖\n比例：16:9",
      "en": "Design a viral video thumbnail using the person from Image 1. Face Consistency : Keep the person's facial features exactly the same as Image 1 , but change their expression to {{expressions}} . Action : Pose the person on the left side, pointing their finger towards the right side of the frame. Subject : On the right side, place a high-quality image of [a delicious avocado toast]. Graphics : Add a bold yellow arrow connecting the person's finger to the toast. Text : Overlay massive, pop-style text in the middle: '3分钟搞定!' (Done in 3 mins!). Use a thick white outline and drop shadow. Background : A blurred, bright kitchen background. {{color_tone}} with {{lighting}}."
    },
    "imageUrl": "https://github.com/user-attachments/assets/01b684e0-54b0-4eab-9c51-0236a3d25f10",
    "author": "WeChat Article",
    "selections": {
      "expressions-0": {
        "zh-tw": "開心",
        "en": "happy"
      },
      "expressions-1": {
        "zh-tw": "開心",
        "en": "happy"
      },
      "color_tone-0": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "color_tone-1": {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      "lighting-0": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      "lighting-1": {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      }
    },
    "tags": [
      "社群",
      "行銷"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_8_2",
    "name": {
      "zh-tw": "商業宣傳海報",
      "en": "Commercial Promotional Poster"
    },
    "content": {
      "zh-tw": "創建一張商業宣傳海報，推廣{{business_type}}。\n使用引人注目的{{composition}}視覺設計、大膽的標題和清晰的行動呼籲。\n風格應該是專業、{{material}}現代的，適合社交媒體或印刷品使用。\n包含品牌元素和必要的產品資訊。",
      "en": "Design a professional promotional poster for a {{business_type}}. Composition : A cinematic {{composition}} of a steaming cup of cappuccino on a rustic {{material}} table, autumn leaves in the background (cozy atmosphere). Text Integration :\n1. Main Title : 'Autumn Special' written in elegant, gold serif typography at the top.\n2. Offer : 'Buy One Get One Free' clearly displayed in a modern badge or sticker style on the side.\n3. Footer : 'Limited Time Only' in small, clean text at the bottom. Quality : Ensure all text is perfectly spelled, centered, and integrated into the image's depth of field."
    },
    "imageUrl": "https://github.com/user-attachments/assets/15d3d38b-240e-4a91-9214-4786a6f74426",
    "author": "WeChat Article",
    "selections": {
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "material-0": {
        "zh-tw": "木質",
        "en": "wooden"
      },
      "material-1": {
        "zh-tw": "木質",
        "en": "wooden"
      },
      "business_type-0": {
        "zh-tw": "咖啡廳",
        "en": "Coffee Shop"
      },
      "business_type-1": {
        "zh-tw": "咖啡廳",
        "en": "Coffee Shop"
      }
    },
    "tags": [
      "社群",
      "行銷"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_9_1",
    "name": {
      "zh-tw": "實體店/旅遊翻譯",
      "en": "Physical Store/Travel Translation"
    },
    "content": {
      "zh-tw": "將牆上菜單的{{language}}菜名翻譯成{{language}}，方便外國遊客閱讀。\n\n紋理保留：翻譯後的文字應該看起來像是原本就印在那裡的，保持{{render_style}}相同的字體風格、大小和顏色。\n佈局保持：保持原始的排版佈局不變。\n自然融合：翻譯文字應該自然地融入場景，看不出後期處理痕跡。",
      "en": "Translate the {{language}} dish names on the wall menu into {{language}} for foreign tourists. Texture Preservation : Crucial! Maintain the original aged, greasy, and textured look of the wall/paper. The new English text should look like it was written/printed on the same surface, with slight fading or wear to match. Currency : Keep the '¥' symbol and price numbers exactly as they are ; do not convert currency. Layout : align the English translations next to or replacing the Chinese characters naturally."
    },
    "imageUrl": "https://github.com/user-attachments/assets/64a448d9-1c0a-4c58-8141-89a3b9e1bc5d",
    "author": "WeChat Article",
    "selections": {
      "language-0": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "language-1": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "language-2": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "language-3": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "render_style-0": {
        "zh-tw": "寫實",
        "en": "realistic"
      }
    },
    "tags": [
      "翻譯",
      "生活",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_9_2",
    "name": {
      "zh-tw": "數位內容在地化（漫畫/迷因）",
      "en": "Digital Content Localization (Comics/Memes)"
    },
    "content": {
      "zh-tw": "將這張[漫畫/迷因圖片]的文字翻譯成{{language}}。\n保持原始圖片的{{art_style}}視覺風格和佈局不變。\n只替換對話框和文字區域中的內容。\n確保翻譯後的文字符合原始的情感和語調。",
      "en": "Translate the text in the speech bubbles/captions from {{language}} to {{language}}. Seamless Cleaning : Erase the original text and perfectly fill the background (e.g., the white speech bubble or the colored image background). Style Matching : Render the translated Chinese text using a casual, handwritten-style font (or bold impact font for memes) that matches the aesthetic of the original image. Fit : Ensure the text fits naturally within the bubbles without overcrowding."
    },
    "imageUrl": "https://github.com/user-attachments/assets/9aa624a4-b296-496f-8327-2eeb97d1975a",
    "author": "WeChat Article",
    "selections": {
      "language-0": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "language-1": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "language-2": {
        "zh-tw": "中文",
        "en": "Chinese"
      },
      "art_style-0": {
        "zh-tw": "動漫風格",
        "en": "anime"
      }
    },
    "tags": [
      "翻譯",
      "生活",
      "社群"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_10_1",
    "name": {
      "zh-tw": "3D盲盒風格頭像",
      "en": "3D Blind Box Style Avatar"
    },
    "content": {
      "zh-tw": "將上傳照片中的人物轉換成可愛的{{render_style}} Pop Mart風格盲盒角色。\n\n角色風格：\n- Q版比例（大頭小身體）\n- 圓潤、可愛的造型\n- 有光澤的{{material}}塑膠/PVC材質感\n- 簡化但可辨識的面部特徵\n- {{color_tone}}標誌性的服裝或配件\n\n呈現：作為盲盒包裝內的{{lighting}}收藏品，帶有展示底座。",
      "en": "Transform the person in the uploaded photo into a cute {{render_style}} Pop Mart style blind box character . Likeness : Keep key features recognizable: [hair color, glasses, hairstyle]. Style : C4D rendering, occlusion render, cute Q-version , soft {{lighting}}, {{color_tone}} colors. Background : A simple, solid matte color background (e.g., soft blue). Detail : The character should have a smooth, plastic toy texture with a slight {{material}} finish. Facing forward, friendly expression."
    },
    "imageUrl": "https://github.com/user-attachments/assets/32550722-1494-45bf-b5aa-4df5707c6fc2",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "render_style-1": {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      "lighting-0": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "lighting-1": {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "color_tone-0": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "color_tone-1": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      }
    },
    "tags": [
      "社群",
      "頭像"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_10_2",
    "name": {
      "zh-tw": "寵物迷因創作",
      "en": "Pet Meme Creation"
    },
    "content": {
      "zh-tw": "將這張我的[貓/狗]照片變成有趣的{{art_style}}微信表情包。\n\n風格：{{render_style}}，可愛誇張\n表情：[選擇：開心/驚訝/生氣/無奈/賣萌]\n添加文字：[可選文字]\n背景：透明或簡單純色\n\n輸出格式：正方形，適合作為聊天表情使用。",
      "en": "Turn this photo of my [cat/dog] into a funny {{art_style}} WeChat sticker . Style : {{render_style}} ugly-cute line drawing (doodle style). White background. Expression : Exaggerate the animal's expression to look extremely shocked/judgemental/lazy (based on photo). Accessories : Add cute little doodles like sweat drops, question marks, or sparkles around the head. Text : Add handwritten text at the bottom: 'So Dumb'. Ensure the text style is messy and funny."
    },
    "imageUrl": "https://github.com/user-attachments/assets/ee688cb3-bd0d-4a69-939e-d984ead3fcee",
    "author": "WeChat Article",
    "selections": {
      "render_style-0": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "render_style-1": {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      "art_style-0": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      "art_style-1": {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      }
    },
    "tags": [
      "社群",
      "頭像"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "[WeChat Article](https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ)"
  },
  {
    "id": "tpl_community_10_3",
    "name": {
      "zh-tw": "Y2K剪貼簿海報（多姿勢）",
      "en": "Y2K Scrapbook Poster with Multiple Poses"
    },
    "content": {
      "zh-tw": "\"facelock_identity\": \"true\",\n\"accuracy\": \"100%\",\n\"scene\": \"{{color_tone}}彩色Y2K剪貼簿海報美學，鮮豔的{{lighting}}霓虹燈標籤、隨機放置的貼紙、愛心和星星塗鴉、{{art_style}}手寫風格的標註。多張相同人物不同姿勢的照片拼貼在一起。\n\n{{composition}}風格元素：\n- {{material}}明亮的粉色、藍色、紫色配色\n- 亮片和閃光效果\n- 復古貼紙和標籤\n- 手繪邊框和箭頭\n- 千禧年美學字體\n\n確保{{camera_device}}臉部在所有姿勢中保持{{expressions}}100%一致。\"",
      "en": "facelock_identity\": \"true\",\n\"accuracy\": \"100%\",\nscene\"Colorful Y2K scrapbook poster aesthetic, vibrant stickers, multiple subjects wearing the same outfit and hairstyle with different poses and cutouts, colorful strokes and lines, frameless {{art_style}} style. Includes: {{composition}} shot with heart-shape fingers, full-body squatting pose supporting chin while holding a white {{camera_device}} camera, mid-shot touching cheek while blowing pink bubblegum, mid-shot smiling elegantly while holding a cat ,seated elegantly with one eye winking and peace sign, and mid-shot holding daisy flowers. Holographic textures, {{color_tone}} gradients, glitter accents, {{expressions}} doodles, magazine cut-out graphics, chaotic yet balanced layout, extremely artistic and visually engaging\",\nmain_subject\": {\n\"description\": \"A young Y2K-styled woman as the main focus in the center of the scrapbook collage.\",\n\"style_pose\": \"Playful and confident Y2K pose — slight side hip pop, one hand holding a lens-flare keychain, face toward the camera with a cute-cool expression, slight pout, candid early-2000s photo vibe.\"\noutfit\": {\n\"top\": \"Cropped oversized sweater in pastel color with embroidered patches\",\n\"bottom\": \"pastel skirt with a white belt\",\n\"socks\": \"White ankle socks with colorful pastel stripes\",\n\"shoes\": \"white sneakers\",\n\"accessories\": [\n\"Colorful plastic bracelets\",\n\"Chunky colorful rings\",\n\"Sparkling belly chain\",\n\"hairstyle\": \n\"type\": \"Y2K half-up half-down\",\n\"details\": \"Pastel flowers clips,thin front tendrils, wavy dark brown hair with bubblegum-pink tint on the lower strands, iconic early-2000s look.\"\nadditional_visuals\": \n\"Heart, star, and butterfly stickers\",\n\"Retro sparkles\",\n\"Polaroid frames\",\n\"Neon outlines\",\n\"Doodle borders\",\n\"Magazine cutout texts: 'SO CUTE!', '199X!', 'GIRL VIBES'\",\n\"Pastel lighting\",\n\"{{material}} dreamy retro glow\",\n\"Ultra-aesthetic scrapbook layout\"\nphotography_rendering\": {\n\"color_grading\": \"Cinematic neon Y2K\",\n\"lighting\": \"Soft {{lighting}} lighting\",\"skin_texture\": \"Smooth glossy finish\",\n\"rendering\": \"High-detail hyperrealistic Y2K scrapbook tone\",\n\"quality\": \"8K\",\n\"composition\": \"Perfectly balanced and artistic\"\nnegative_prompt\": \"no realism that breaks Y2K aesthetic, no modern 2020s clothing, no messy composition, no blurry face, no distorted hands, no extra limbs, no face warping, no low resolution, no grain, no muted colors, no watermark, no AI artifacts\""
    },
    "imageUrl": "https://github.com/user-attachments/assets/2d488ef3-8a7d-41d3-a352-6bc26a5d9ef3",
    "author": "@ShreyaYadav___",
    "selections": {
      "lighting-0": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "lighting-1": {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "material-0": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "material-1": {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      "color_tone-0": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "color_tone-1": {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      "art_style-0": {
        "zh-tw": "拼貼風格",
        "en": "collage"
      },
      "art_style-1": {
        "zh-tw": "拼貼風格",
        "en": "collage"
      },
      "expressions-0": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "expressions-1": {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      "camera_device-0": {
        "zh-tw": "拍立得",
        "en": "Polaroid"
      },
      "camera_device-1": {
        "zh-tw": "拍立得",
        "en": "Polaroid"
      }
    },
    "tags": [
      "社群",
      "頭像"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Shreya Yadav ([@ShreyaYadav___](https://x.com/ShreyaYadav___)) - [Post](https://x.com/ShreyaYadav___/status/1995760655018942720?s=20)"
  },
  {
    "id": "tpl_community_10_4",
    "name": {
      "zh-tw": "日本高中生隨拍",
      "en": "Japanese High School Student Snap Photo"
    },
    "content": {
      "zh-tw": "用低畫質一次性相機拍攝的日常快照。一張由日本高中生用即可拍相機笨拙拍攝的照片。\n\n特點：\n- 輕微模糊和手震\n- 閃光燈過曝或不足\n- 略微偏斜的構圖\n- {{color_tone}}懷舊的膠片色調\n- 真實的青春氛圍\n\n場景：{{comic_scene}}\n表情：自然、活潑、不刻意擺拍。",
      "en": "A {{comic_scene}} daily snapshot taken with a low-quality disposable camera. A clumsy photo taken by a Japanese high school student with {{color_tone}} tones. (Aspect ratio 3:2 is recommended)"
    },
    "imageUrl": "https://github.com/user-attachments/assets/624fe2bf-f139-4bce-9aed-6594404bacf7",
    "author": "@SSSS_CRYPTOMAN",
    "selections": {
      "comic_scene-0": {
        "zh-tw": "溫馨的教室",
        "en": "Cozy classroom"
      },
      "comic_scene-1": {
        "zh-tw": "溫馨的教室",
        "en": "Cozy classroom"
      },
      "color_tone-0": {
        "zh-tw": "暖色調",
        "en": "warm tones"
      },
      "color_tone-1": {
        "zh-tw": "暖色調",
        "en": "warm tones"
      }
    },
    "tags": [
      "社群",
      "頭像"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "SSSS_CRYPTOMAN ([@SSSS_CRYPTOMAN](https://x.com/SSSS_CRYPTOMAN)) - [Post](https://x.com/SSSS_CRYPTOMAN/status/1994245271220568233?s=20)"
  },
  {
    "id": "tpl_community_10_5",
    "name": {
      "zh-tw": "AI膚質分析與護膚建議",
      "en": "AI Skin Analysis and Skincare Routine"
    },
    "content": {
      "zh-tw": "你是一位專業的皮膚分析師，使用{{lighting}}照明條件和護膚專家。\n用戶上傳了一張臉部{{composition}}照片進行皮膚分析。\n\n請執行以下任務：\n\n1. 皮膚分析：\n- 識別可見的皮膚問題（如毛孔、痘痘、皺紋、色斑、黑眼圈等）\n- 評估整體膚質（油性/乾性/混合/敏感）\n- 評估皮膚年齡與實際年齡的對比\n\n2. 視覺化呈現：\n- 在照片上標註問題區域\n- 使用顏色編碼顯示不同類型的皮膚問題\n\n3. 護膚建議：\n- 基於分析結果提供個性化護膚方案\n- 推薦早晚護膚步驟\n- 建議適合的產品類型（非特定品牌）\n\n輸出：專業的皮膚分析報告，包含視覺化標註和詳細建議。",
      "en": "You are a professional skin analyst and skincare expert.\nThe user uploads a {{composition}} photo of their face with {{lighting}} and may add short notes (age, allergies, current routine, pregnancy, etc.). Use ONLY what you see in the image plus the user text.\n 1. Carefully inspect the skin: shine, pores, redness, blemishes, spots, texture, flaking, fine lines, dark circles, etc.\n 2. Decide the main skin type: oily, dry, normal, combination, or sensitive.\n 3. Identify visible issues: acne/breakouts, blackheads/whiteheads, post-acne marks, hyperpigmentation, redness, enlarged pores, uneven texture, dehydration, fine lines, dark circles, puffiness, etc.\n\nRESPONSE FORMAT (very important)\n\nYour answer must be plain text in this exact structure:\n 1. First, write 3–6 short lines describing the skin and problems, for example:\n\n • overall skin type and how you know\n • where the main issues appear (forehead, cheeks, nose, chin, jawline, under-eyes)\n • how severe they look (mild / moderate / severe).\n\n 2. On a new line, write the word in caps:\nSKIN ROUTINE\n 3. Under SKIN ROUTINE, give at least 5 numbered steps (1., 2., 3., …).\nEach step must include:\n\n • what to do (e.g. \"Cleanser\", \"Treatment serum\", \"Moisturizer\", \"Sunscreen\", \"Night treatment\"),\n • product TYPE and key INGREDIENTS to look for (no brand names),\n • when to use it (AM, PM, or both) and how often,\n • 1 short practical instruction (how to apply, how much, any caution).\n\nFocus on over-the-counter products only (no prescription or medical diagnosis).\nIf acne or irritation looks very severe or infected, clearly but kindly suggest visiting a dermatologist.\nKeep the tone supportive, simple and clear."
    },
    "imageUrl": "https://github.com/user-attachments/assets/72090a55-5ba7-4a0a-b884-176cc221a9f0",
    "author": "@Samann_ai",
    "selections": {
      "composition-0": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "composition-1": {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      "lighting-0": {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      "lighting-1": {
        "zh-tw": "自然光",
        "en": "natural light"
      }
    },
    "tags": [
      "社群",
      "頭像"
    ],
    "language": [
      "zh-tw",
      "en"
    ],
    "source": "Saman | AI ([@Samann_ai](https://x.com/Samann_ai)) - [Post](https://x.com/Samann_ai/status/1996230732470010064?s=20)"
  }
];

// 社群詞庫 (83 個)
export const COMMUNITY_BANKS = {
  "role": {
    "label": {
      "zh-tw": "角色身份",
      "en": "Role"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "遊戲與動漫概念美術設計大師",
        "en": "Master of Game and Anime Concept Art"
      },
      {
        "zh-tw": "資深影視角色原畫師",
        "en": "Senior Film Character Concept Artist"
      },
      {
        "zh-tw": "賽博龐克風格設計師",
        "en": "Cyberpunk Style Designer"
      },
      {
        "zh-tw": "暗黑幻想風格插畫師",
        "en": "Dark Fantasy Style Illustrator"
      }
    ]
  },
  "subject": {
    "label": {
      "zh-tw": "主體物件",
      "en": "Subject"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "女性角色",
        "en": "Female Character"
      },
      {
        "zh-tw": "男性角色",
        "en": "Male Character"
      },
      {
        "zh-tw": "機甲少女",
        "en": "Mecha Girl"
      },
      {
        "zh-tw": "怪物擬人化",
        "en": "Monster Anthropomorphism"
      },
      {
        "zh-tw": "奇幻種族(精靈/惡魔)",
        "en": "Fantasy Race (Elf/Demon)"
      }
    ]
  },
  "character_companion": {
    "label": {
      "zh-tw": "合影角色",
      "en": "Companion"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "死侍 (Deadpool)",
        "en": "Deadpool"
      },
      {
        "zh-tw": "超人 (Superman)",
        "en": "Superman"
      },
      {
        "zh-tw": "愛因斯坦 (Einstein)",
        "en": "Einstein"
      },
      {
        "zh-tw": "神奇女俠 (Wonder Woman)",
        "en": "Wonder Woman"
      },
      {
        "zh-tw": "鋼鐵人 (Iron Man)",
        "en": "Iron Man"
      },
      {
        "zh-tw": "皮卡丘 (Pikachu)",
        "en": "Pikachu"
      },
      {
        "zh-tw": "哥斯拉 (Godzilla)",
        "en": "Godzilla"
      },
      {
        "zh-tw": "初音未來 (Hatsune Miku)",
        "en": "Hatsune Miku"
      }
    ]
  },
  "layout_focus": {
    "label": {
      "zh-tw": "構圖重心",
      "en": "Layout Focus"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "全身立繪",
        "en": "Full-body Portrait"
      },
      {
        "zh-tw": "半身肖像",
        "en": "Half-body Portrait"
      },
      {
        "zh-tw": "動態戰鬥姿勢",
        "en": "Dynamic Action Pose"
      },
      {
        "zh-tw": "背影回眸",
        "en": "Back View Looking Back"
      }
    ]
  },
  "grid_pose": {
    "label": {
      "zh-tw": "九宮格動作",
      "en": "Grid Pose"
    },
    "category": "action",
    "options": [
      {
        "zh-tw": "前景手指虛化",
        "en": "Out-of-focus fingers in foreground"
      },
      {
        "zh-tw": "目光鎖定鏡頭",
        "en": "Eyes locked on camera"
      },
      {
        "zh-tw": "單色下巴託手",
        "en": "Monochrome hand on chin"
      },
      {
        "zh-tw": "透過模糊肩帶拍攝",
        "en": "Shooting through blurred shoulder straps"
      },
      {
        "zh-tw": "正面特寫陰影",
        "en": "Frontal close-up with shadows"
      },
      {
        "zh-tw": "斜角拍攝",
        "en": "Angled shot"
      },
      {
        "zh-tw": "雙手置於鎖骨",
        "en": "Hands on collarbones"
      },
      {
        "zh-tw": "坐姿半身側面",
        "en": "Seated half-body profile"
      },
      {
        "zh-tw": "側面微距水滴",
        "en": "Side macro with water drops"
      },
      {
        "zh-tw": "閉眼仰頭享受",
        "en": "Eyes closed looking up in enjoyment"
      },
      {
        "zh-tw": "用手遮擋陽光",
        "en": "Shading eyes from sun with hand"
      },
      {
        "zh-tw": "回眸一笑",
        "en": "Looking back with a smile"
      },
      {
        "zh-tw": "吹泡泡糖特寫",
        "en": "Close-up blowing bubble gum"
      },
      {
        "zh-tw": "正面直視鏡頭，表情平靜，眼神清澈",
        "en": "Staring straight at the camera, calm expression, clear eyes"
      },
      {
        "zh-tw": "凝視鏡頭，嘴角微微上揚，展現自信",
        "en": "Staring at the camera, slight smile, showing confidence"
      },
      {
        "zh-tw": "專注地看著鏡頭，表情柔和，眼神溫和",
        "en": "Looking intently at the camera, soft expression, gentle eyes"
      },
      {
        "zh-tw": "側身回望，眼神溫柔，嘴角上揚",
        "en": "Side view looking back, gentle eyes, smiling"
      },
      {
        "zh-tw": "轉身回眸，長髮飄逸，笑容自然",
        "en": "Turning back, flowing hair, natural smile"
      },
      {
        "zh-tw": "手輕撫下巴，表情優雅，眼神柔和",
        "en": "Hand gently on chin, elegant expression, soft eyes"
      },
      {
        "zh-tw": "單手支撐下巴，表情自然，眼神專注",
        "en": "Supporting chin with one hand, natural expression, focused eyes"
      },
      {
        "zh-tw": "利用肩帶營造景深，焦點清晰在眼睛",
        "en": "Using shoulder straps for depth of field, focus on eyes"
      },
      {
        "zh-tw": "正在吹泡泡糖，表情可愛，眼神專注",
        "en": "Blowing bubble gum, cute expression, focused eyes"
      },
      {
        "zh-tw": "側面微距特寫，突出面部輪廓和細節",
        "en": "Side macro close-up, highlighting facial contours and details"
      }
    ]
  },
  "camera_angle": {
    "label": {
      "zh-tw": "拍攝角度",
      "en": "Camera Angle"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "臉頰和頸部特寫",
        "en": "Cheek and neck close-up"
      },
      {
        "zh-tw": "目光鎖定鏡頭",
        "en": "Eyes locked on camera"
      },
      {
        "zh-tw": "單色下巴託手肖像",
        "en": "Monochrome hand on chin portrait"
      },
      {
        "zh-tw": "透過模糊的肩帶拍攝",
        "en": "Shooting through blurred shoulder straps"
      },
      {
        "zh-tw": "正面特寫，面部陰影交錯",
        "en": "Frontal close-up, interlocking facial shadows"
      },
      {
        "zh-tw": "斜角拍攝的原始人像",
        "en": "Raw portrait from an angle"
      },
      {
        "zh-tw": "雙手置於鎖骨附近的特寫",
        "en": "Close-up with hands near collarbones"
      },
      {
        "zh-tw": "坐姿半身側面照",
        "en": "Seated half-body profile shot"
      },
      {
        "zh-tw": "側面微距照",
        "en": "Side macro shot"
      }
    ]
  },
  "connectors": {
    "label": {
      "zh-tw": "視覺引導",
      "en": "Connectors"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "手繪箭頭或引導線",
        "en": "Hand-drawn arrows or guide lines"
      },
      {
        "zh-tw": "虛線連線",
        "en": "Dashed line connections"
      },
      {
        "zh-tw": "彩色光束",
        "en": "Colored light beams"
      },
      {
        "zh-tw": "半透明資料線",
        "en": "Translucent data cables"
      },
      {
        "zh-tw": "虛線連接",
        "en": "Dashed line connections"
      },
      {
        "zh-tw": "半透明數據線",
        "en": "Translucent data cables"
      }
    ]
  },
  "underwear_style": {
    "label": {
      "zh-tw": "私密內著拆解",
      "en": "Underwear Style"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "成套的蕾絲內衣褲",
        "en": "Matching lace lingerie set"
      },
      {
        "zh-tw": "運動風格純棉內衣",
        "en": "Athletic style cotton underwear"
      },
      {
        "zh-tw": "極簡主義絲綢內衣",
        "en": "Minimalist silk lingerie"
      },
      {
        "zh-tw": "哥德風格綁帶內衣",
        "en": "Gothic style strappy lingerie"
      }
    ]
  },
  "clothing": {
    "label": {
      "zh-tw": "人物服飾",
      "en": "Clothing"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "炭灰色無袖連衣裙",
        "en": "Charcoal grey sleeveless dress"
      },
      {
        "zh-tw": "白色絲綢襯衫",
        "en": "White silk shirt"
      },
      {
        "zh-tw": "黑色修身西裝",
        "en": "Black slim-fit suit"
      },
      {
        "zh-tw": "戰術機能風外套",
        "en": "Tactical techwear jacket"
      },
      {
        "zh-tw": "復古碎花連衣裙",
        "en": "Vintage floral print dress"
      }
    ]
  },
  "clothing_male": {
    "label": {
      "zh-tw": "男性服飾",
      "en": "Male Clothing"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "剪裁合身的深藍西裝",
        "en": "Tailored deep blue suit"
      },
      {
        "zh-tw": "復古棕色皮夾克",
        "en": "Vintage brown leather jacket"
      },
      {
        "zh-tw": "戰術背心與工裝褲",
        "en": "Tactical vest and cargo pants"
      },
      {
        "zh-tw": "寬鬆的灰色連帽衫",
        "en": "Loose grey hoodie"
      },
      {
        "zh-tw": "白色亞麻襯衫",
        "en": "White linen shirt"
      },
      {
        "zh-tw": "黑色高領毛衣",
        "en": "Black turtleneck sweater"
      }
    ]
  },
  "clothing_female": {
    "label": {
      "zh-tw": "女性服飾",
      "en": "Female Clothing"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "炭灰色無袖連衣裙",
        "en": "Charcoal grey sleeveless dress"
      },
      {
        "zh-tw": "絲綢吊帶晚禮服",
        "en": "Silk slip evening gown"
      },
      {
        "zh-tw": "機車皮衣與短裙",
        "en": "Biker leather jacket and short skirt"
      },
      {
        "zh-tw": "白色蕾絲襯衫",
        "en": "White lace blouse"
      },
      {
        "zh-tw": "黑色緊身連體衣",
        "en": "Black tight bodysuit"
      },
      {
        "zh-tw": "優雅的香奈兒風套裝",
        "en": "Elegant Chanel-style suit"
      }
    ]
  },
  "expressions": {
    "label": {
      "zh-tw": "表情情緒",
      "en": "Expressions"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "俏皮",
        "en": "playful"
      },
      {
        "zh-tw": "神秘",
        "en": "mysterious"
      },
      {
        "zh-tw": "夢幻",
        "en": "dreamy"
      },
      {
        "zh-tw": "自信",
        "en": "confident"
      },
      {
        "zh-tw": "放鬆",
        "en": "relaxed"
      },
      {
        "zh-tw": "開心",
        "en": "happy"
      },
      {
        "zh-tw": "微笑",
        "en": "smile"
      },
      {
        "zh-tw": "害羞",
        "en": "shy"
      },
      {
        "zh-tw": "平靜",
        "en": "calm"
      },
      {
        "zh-tw": "認真",
        "en": "serious"
      }
    ]
  },
  "character_originality": {
    "label": {
      "zh-tw": "人物原創性",
      "en": "Character Originality"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "創作一個原創人物",
        "en": "Create an original character"
      },
      {
        "zh-tw": "使用附圖中的人物，確保結果與人物一致性",
        "en": "Use character in attachment, ensure consistency"
      },
      {
        "zh-tw": "對知名角色再創作",
        "en": "Re-create a well-known character"
      }
    ]
  },
  "character_groups": {
    "label": {
      "zh-tw": "人物組合",
      "en": "Character Groups"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "中國古代開國皇帝",
        "en": "Ancient Chinese Founding Emperors"
      },
      {
        "zh-tw": "漫威人物",
        "en": "Marvel Characters"
      },
      {
        "zh-tw": "金庸古龍武俠人物",
        "en": "Jin Yong & Gu Long Wuxia Characters"
      },
      {
        "zh-tw": "三國知名人物",
        "en": "Famous Three Kingdoms Figures"
      },
      {
        "zh-tw": "知名軍事家（拿破崙、凱撒、曹操等）",
        "en": "Famous Military Strategists (Napoleon, Caesar, Cao Cao, etc.)"
      },
      {
        "zh-tw": "全球知名運動員",
        "en": "World-famous Athletes"
      },
      {
        "zh-tw": "中外知名偵探（包青天、狄仁傑、福爾摩斯、柯南等）",
        "en": "Famous Detectives (Bao Zheng, Di Renjie, Sherlock Holmes, Conan, etc.)"
      },
      {
        "zh-tw": "動漫遊戲角色",
        "en": "Anime & Game Characters"
      },
      {
        "zh-tw": "歷史名人",
        "en": "Historical Celebrities"
      },
      {
        "zh-tw": "明星藝人",
        "en": "Stars & Celebrities"
      }
    ]
  },
  "social_media": {
    "label": {
      "zh-tw": "社交媒體",
      "en": "Social Media"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "微信朋友圈",
        "en": "WeChat Moments"
      },
      {
        "zh-tw": "微博",
        "en": "Weibo"
      },
      {
        "zh-tw": "Twitter(X)",
        "en": "Twitter(X)"
      },
      {
        "zh-tw": "小紅書",
        "en": "Little Red Book (Xiaohongshu)"
      },
      {
        "zh-tw": "Instagram",
        "en": "Instagram"
      },
      {
        "zh-tw": "Facebook",
        "en": "Facebook"
      },
      {
        "zh-tw": "抖音",
        "en": "Douyin"
      },
      {
        "zh-tw": "TikTok",
        "en": "TikTok"
      }
    ]
  },
  "texture_zoom": {
    "label": {
      "zh-tw": "材質特寫",
      "en": "Texture Zoom"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "凌亂感與私處汗漬",
        "en": "Messiness and sweat stains in private areas"
      },
      {
        "zh-tw": "皮膚上的勒痕與紅印",
        "en": "Strangulation marks and red imprints on skin"
      },
      {
        "zh-tw": "絲襪的抽絲細節",
        "en": "Snagged details on silk stockings"
      },
      {
        "zh-tw": "皮革的光澤與磨損",
        "en": "Luster and wear on leather"
      }
    ]
  },
  "action_detail": {
    "label": {
      "zh-tw": "動作細節",
      "en": "Action Detail"
    },
    "category": "action",
    "options": [
      {
        "zh-tw": "帶著項圈的爬行",
        "en": "Crawling with a collar"
      },
      {
        "zh-tw": "雙手被縛在身後的掙扎",
        "en": "Struggling with hands bound behind back"
      },
      {
        "zh-tw": "跪姿並展示鞋底",
        "en": "Kneeling and showing soles"
      },
      {
        "zh-tw": "拉扯領口的誘惑",
        "en": "Temptation of pulling at the neckline"
      }
    ]
  },
  "special_view": {
    "label": {
      "zh-tw": "特殊視角",
      "en": "Special View"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "被踩在腳下的仰視視角",
        "en": "Low-angle view from being stepped on"
      },
      {
        "zh-tw": "從門縫中偷窺的視角",
        "en": "Perspective of peeking through a door crack"
      },
      {
        "zh-tw": "鏡子反射的背影",
        "en": "Back view reflected in a mirror"
      },
      {
        "zh-tw": "監視攝影機的俯視視角",
        "en": "Top-down view from a security camera"
      }
    ]
  },
  "bag_content": {
    "label": {
      "zh-tw": "隨身包袋",
      "en": "Bag Content"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "日常通勤包或手拿包",
        "en": "Daily commuter bag or clutch"
      },
      {
        "zh-tw": "戰術腿包",
        "en": "Tactical leg bag"
      },
      {
        "zh-tw": "可愛的絨毛背包",
        "en": "Cute plush backpack"
      },
      {
        "zh-tw": "透明材質的痛包",
        "en": "Ita-bag made of transparent material"
      }
    ]
  },
  "cosmetics": {
    "label": {
      "zh-tw": "美妝與護理",
      "en": "Cosmetics"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "常用的化妝品組合",
        "en": "Commonly used cosmetics combo"
      },
      {
        "zh-tw": "散落的口紅與粉餅",
        "en": "Scattered lipsticks and compact powder"
      },
      {
        "zh-tw": "便攜式補妝鏡",
        "en": "Portable makeup mirror"
      },
      {
        "zh-tw": "香水小樣與護手霜",
        "en": "Perfume samples and hand cream"
      }
    ]
  },
  "private_items": {
    "label": {
      "zh-tw": "私密生活物件",
      "en": "Private Items"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "震動棒與項圈",
        "en": "Vibrator and collar"
      },
      {
        "zh-tw": "手銬與眼罩",
        "en": "Handcuffs and eye mask"
      },
      {
        "zh-tw": "鞭子與蠟燭",
        "en": "Whip and candle"
      },
      {
        "zh-tw": "潤滑液與保險套",
        "en": "Lubricant and condom"
      }
    ]
  },
  "art_style": {
    "label": {
      "zh-tw": "畫風",
      "en": "Art Style"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "插畫風格",
        "en": "illustration"
      },
      {
        "zh-tw": "超現實",
        "en": "surreal"
      },
      {
        "zh-tw": "鉛筆素描",
        "en": "pencil sketch"
      },
      {
        "zh-tw": "拼貼風格",
        "en": "collage"
      },
      {
        "zh-tw": "手繪風格",
        "en": "hand-drawn"
      },
      {
        "zh-tw": "扁平設計",
        "en": "flat design"
      },
      {
        "zh-tw": "油畫",
        "en": "oil painting"
      },
      {
        "zh-tw": "水彩",
        "en": "watercolor"
      },
      {
        "zh-tw": "動漫風格",
        "en": "anime"
      },
      {
        "zh-tw": "數位藝術",
        "en": "digital art"
      },
      {
        "zh-tw": "向量圖",
        "en": "vector"
      },
      {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      }
    ]
  },
  "background_style": {
    "label": {
      "zh-tw": "背景風格",
      "en": "Background Style"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "漫畫網格筆記本",
        "en": "Manga grid notebook"
      },
      {
        "zh-tw": "藍圖設計稿紙",
        "en": "Blueprint design paper"
      },
      {
        "zh-tw": "工業風金屬背景",
        "en": "Industrial metal background"
      },
      {
        "zh-tw": "極簡純色背景",
        "en": "Minimalist solid color background"
      },
      {
        "zh-tw": "軟木板背景",
        "en": "Cork Board Background"
      },
      {
        "zh-tw": "黑板背景",
        "en": "Blackboard"
      },
      {
        "zh-tw": "白板背景",
        "en": "Whiteboard"
      },
      {
        "zh-tw": "牛皮紙質感",
        "en": "Kraft Paper Texture"
      },
      {
        "zh-tw": "方格紙背景",
        "en": "Graph Paper Background"
      },
      {
        "zh-tw": "皺褶紙質感",
        "en": "Crumpled Paper Texture"
      },
      {
        "zh-tw": "復古羊皮紙",
        "en": "Old Parchment Paper"
      },
      {
        "zh-tw": "宣紙/和紙質感",
        "en": "Rice Paper Texture"
      },
      {
        "zh-tw": "點陣筆記本",
        "en": "Dot Grid Notebook"
      },
      {
        "zh-tw": "清水模/水泥質感",
        "en": "Concrete Wall Texture"
      },
      {
        "zh-tw": "亞麻布質感",
        "en": "Linen Fabric Texture"
      },
      {
        "zh-tw": "水彩暈染背景",
        "en": "Watercolor Splash Background"
      },
      {
        "zh-tw": "莫蘭迪色系背景",
        "en": "Morandi Color Background"
      },
      {
        "zh-tw": "光斑散景背景",
        "en": "Bokeh Effect Background"
      },
      {
        "zh-tw": "雷射全像漸層",
        "en": "Holographic Gradient"
      },
      {
        "zh-tw": "等距立體網格",
        "en": "Isometric Grid"
      },
      {
        "zh-tw": "蜂巢/六角形紋理",
        "en": "Hexagon Pattern"
      },
      {
        "zh-tw": "孟菲斯風格圖樣",
        "en": "Memphis Design Pattern"
      },
      {
        "zh-tw": "羊毛紙材質背景",
        "en": "Wool Paper Background"
      },
      {
        "zh-tw": "角色設定圖",
        "en": "Character Design Illustrations"
      },
      {
        "zh-tw": "暗色背景",
        "en": "dark background"
      },
      {
        "zh-tw": "工業藍圖風格",
        "en": "industrial blueprint style"
      },
      {
        "zh-tw": "粗獷現代主義",
        "en": "brutalist modernism"
      }
    ]
  },
  "classic_scene": {
    "label": {
      "zh-tw": "經典場景",
      "en": "Classic Scene"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "駭客任務",
        "en": "The Matrix"
      },
      {
        "zh-tw": "千與千尋",
        "en": "Spirited Away"
      },
      {
        "zh-tw": "瘋狂動物城（Zootopia）",
        "en": "Zootopia"
      },
      {
        "zh-tw": "生活大爆炸",
        "en": "The Big Bang Theory"
      },
      {
        "zh-tw": "霍格華茲魔法學院",
        "en": "Hogwarts School of Witchcraft and Wizardry"
      },
      {
        "zh-tw": "侏羅紀公園叢林入口",
        "en": "Jurassic Park Jungle Entrance"
      },
      {
        "zh-tw": "星際大戰塔圖因市集",
        "en": "Star Wars Tatooine Market"
      },
      {
        "zh-tw": "魔戒夏爾",
        "en": "The Lord of the Rings - The Shire"
      },
      {
        "zh-tw": "冰與火之歌君臨城城牆",
        "en": "Game of Thrones - King's Landing Walls"
      },
      {
        "zh-tw": "全面啟動折疊城市",
        "en": "Inception - Folding City"
      },
      {
        "zh-tw": "賽博龐克霓虹夜市",
        "en": "Cyberpunk Neon Night Market"
      },
      {
        "zh-tw": "未來城市空港樞紐",
        "en": "Future City Spaceport Hub"
      }
    ]
  },
  "position": {
    "label": {
      "zh-tw": "文字位置",
      "en": "Text Position"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "頂部中央",
        "en": "Top Center"
      },
      {
        "zh-tw": "底部中央",
        "en": "Bottom Center"
      },
      {
        "zh-tw": "左上角偏中",
        "en": "Top Left biased center"
      },
      {
        "zh-tw": "右上角偏中",
        "en": "Top Right biased center"
      },
      {
        "zh-tw": "畫面中上方懸浮",
        "en": "Floating in top middle"
      }
    ]
  },
  "render_style": {
    "label": {
      "zh-tw": "渲染風格",
      "en": "Render Style"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "寫實",
        "en": "realistic"
      },
      {
        "zh-tw": "超寫實",
        "en": "hyper-realistic"
      },
      {
        "zh-tw": "照片寫實",
        "en": "photorealistic"
      },
      {
        "zh-tw": "3D渲染",
        "en": "3D"
      },
      {
        "zh-tw": "等軸測圖",
        "en": "isometric"
      },
      {
        "zh-tw": "卡通風格",
        "en": "cartoon"
      },
      {
        "zh-tw": "極簡風格",
        "en": "minimalist"
      },
      {
        "zh-tw": "復古風格",
        "en": "retro"
      },
      {
        "zh-tw": "未來感",
        "en": "futuristic"
      },
      {
        "zh-tw": "Cinema 4D",
        "en": "Cinema 4D"
      },
      {
        "zh-tw": "Octane渲染",
        "en": "Octane Render"
      }
    ]
  },
  "show_name": {
    "label": {
      "zh-tw": "劇名",
      "en": "Show Name"
    },
    "category": "other",
    "options": [
      {
        "zh-tw": "鐵達尼號",
        "en": "Titanic"
      },
      {
        "zh-tw": "龍貓",
        "en": "My Neighbor Totoro"
      },
      {
        "zh-tw": "哈利·波特",
        "en": "Harry Potter"
      },
      {
        "zh-tw": "星際效應",
        "en": "Interstellar"
      },
      {
        "zh-tw": "千與千尋",
        "en": "Spirited Away"
      },
      {
        "zh-tw": "復仇者聯盟",
        "en": "The Avengers"
      },
      {
        "zh-tw": "三體",
        "en": "The Three-Body Problem"
      }
    ]
  },
  "character_name": {
    "label": {
      "zh-tw": "角色",
      "en": "Character Name"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "Jack and Rose",
        "en": "Jack and Rose"
      },
      {
        "zh-tw": "龍貓",
        "en": "Totoro"
      },
      {
        "zh-tw": "哈利·波特",
        "en": "Harry Potter"
      },
      {
        "zh-tw": "庫珀",
        "en": "Cooper"
      },
      {
        "zh-tw": "千尋",
        "en": "Chihiro"
      },
      {
        "zh-tw": "綠巨人",
        "en": "Hulk"
      },
      {
        "zh-tw": "薩諾斯",
        "en": "Thanos"
      },
      {
        "zh-tw": "鋼鐵人",
        "en": "Iron Man"
      },
      {
        "zh-tw": "吉伊卡哇",
        "en": "Chiikawa"
      }
    ]
  },
  "art_type": {
    "label": {
      "zh-tw": "藝術門類",
      "en": "Art Type"
    },
    "category": "other",
    "options": [
      {
        "zh-tw": "美術學",
        "en": "Fine Arts"
      },
      {
        "zh-tw": "時尚學",
        "en": "Fashion Studies"
      },
      {
        "zh-tw": "建築學",
        "en": "Architecture"
      },
      {
        "zh-tw": "攝影學",
        "en": "Photography"
      },
      {
        "zh-tw": "雕塑藝術",
        "en": "Sculpture Art"
      },
      {
        "zh-tw": "工業設計",
        "en": "Industrial Design"
      }
    ]
  },
  "company": {
    "label": {
      "zh-tw": "公司",
      "en": "Company"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "Apple",
        "en": "Apple"
      },
      {
        "zh-tw": "任天堂（Nintendo）",
        "en": "Nintendo"
      },
      {
        "zh-tw": "SONY",
        "en": "SONY"
      },
      {
        "zh-tw": "宜家（IKEA）",
        "en": "IKEA"
      }
    ]
  },
  "ratio": {
    "label": {
      "zh-tw": "畫幅比例",
      "en": "Aspect Ratio"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "3:4直式構圖",
        "en": "3:4 Vertical"
      },
      {
        "zh-tw": "9:16直式構圖",
        "en": "9:16 Vertical"
      },
      {
        "zh-tw": "1:1",
        "en": "1:1 Square"
      },
      {
        "zh-tw": "4:3橫式構圖",
        "en": "4:3 Horizontal"
      },
      {
        "zh-tw": "16:9橫式構圖",
        "en": "16:9 Horizontal"
      },
      {
        "zh-tw": "圓形畫幅",
        "en": "Circular Aspect Ratio"
      }
    ]
  },
  "fashion_deconstruct": {
    "label": {
      "zh-tw": "穿搭解構",
      "en": "Fashion Deconstruct"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "整齊折疊的外套和精緻的高跟鞋",
        "en": "Neatly folded coat and exquisite high heels"
      },
      {
        "zh-tw": "散落的配飾與包包",
        "en": "Scattered accessories and bags"
      },
      {
        "zh-tw": "懸掛的襯衫與百褶裙",
        "en": "Hanging shirt and pleated skirt"
      },
      {
        "zh-tw": "堆疊的金屬配飾與皮帶",
        "en": "Stacked metal accessories and belts"
      }
    ]
  },
  "toy_companion": {
    "label": {
      "zh-tw": "互動公仔",
      "en": "Toy Companion"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "Labubu藝術公仔",
        "en": "Labubu Art Toy"
      },
      {
        "zh-tw": "暴力熊積木熊",
        "en": "Bearbrick"
      },
      {
        "zh-tw": "泡泡瑪特Molly",
        "en": "Pop Mart Molly"
      },
      {
        "zh-tw": "復古泰迪熊",
        "en": "Vintage Teddy Bear"
      },
      {
        "zh-tw": "賽博龐克機械狗",
        "en": "Cyberpunk Robo-Dog"
      },
      {
        "zh-tw": "擬人化的可愛動物",
        "en": "anthropomorphic cute animal"
      }
    ]
  },
  "lens_param": {
    "label": {
      "zh-tw": "九宮格鏡頭",
      "en": "Lens Parameter"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "85mm, f/1.8",
        "en": "85mm, f/1.8"
      },
      {
        "zh-tw": "85mm, f/2.0",
        "en": "85mm, f/2.0"
      },
      {
        "zh-tw": "50mm, f/2.2",
        "en": "50mm, f/2.2"
      },
      {
        "zh-tw": "50mm, f/2.5",
        "en": "50mm, f/2.5"
      },
      {
        "zh-tw": "50mm, f/3.2",
        "en": "50mm, f/3.2"
      },
      {
        "zh-tw": "35mm, f/4.5",
        "en": "35mm, f/4.5"
      },
      {
        "zh-tw": "85mm, f/1.9",
        "en": "85mm, f/1.9"
      },
      {
        "zh-tw": "50mm, f/1.8",
        "en": "50mm, f/1.8"
      },
      {
        "zh-tw": "85mm, f/2.2",
        "en": "85mm, f/2.2"
      },
      {
        "zh-tw": "50mm, f/2.0",
        "en": "50mm, f/2.0"
      }
    ]
  },
  "lighting": {
    "label": {
      "zh-tw": "燈光佈置",
      "en": "Lighting"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "閃光燈",
        "en": "flash"
      },
      {
        "zh-tw": "聚光燈",
        "en": "spotlight"
      },
      {
        "zh-tw": "黃金時刻",
        "en": "golden hour"
      },
      {
        "zh-tw": "電影感燈光",
        "en": "cinematic lighting"
      },
      {
        "zh-tw": "環境光",
        "en": "ambient light"
      },
      {
        "zh-tw": "漫射光",
        "en": "diffused light"
      },
      {
        "zh-tw": "霓虹燈光",
        "en": "neon lighting"
      },
      {
        "zh-tw": "柔光",
        "en": "soft light"
      },
      {
        "zh-tw": "影棚燈光",
        "en": "studio lighting"
      },
      {
        "zh-tw": "自然光",
        "en": "natural light"
      },
      {
        "zh-tw": "輪廓光",
        "en": "rim light"
      },
      {
        "zh-tw": "三點佈光",
        "en": "three-point lighting"
      }
    ]
  },
  "sticker_core": {
    "label": {
      "zh-tw": "核心貼紙",
      "en": "Sticker Core"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "使用者穿著甜美約會裝的照片",
        "en": "Photo of user in a sweet date outfit"
      },
      {
        "zh-tw": "復古搖滾樂隊T恤穿搭",
        "en": "Vintage rock band T-shirt outfit"
      },
      {
        "zh-tw": "日系JK制服穿搭",
        "en": "Japanese JK uniform outfit"
      },
      {
        "zh-tw": "極簡職場通勤裝",
        "en": "Minimalist office commuter outfit"
      },
      {
        "zh-tw": "用戶穿著甜美約會裝的照片",
        "en": "Photo of user in a sweet date outfit"
      }
    ]
  },
  "sticker_decor": {
    "label": {
      "zh-tw": "裝飾元素",
      "en": "Sticker Decor"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "手繪愛心、閃光符號",
        "en": "Hand-drawn hearts, sparkle symbols"
      },
      {
        "zh-tw": "星星、月亮貼紙",
        "en": "Star and moon stickers"
      },
      {
        "zh-tw": "復古郵票與票據",
        "en": "Vintage stamps and bills"
      },
      {
        "zh-tw": "賽博故障風Glitch元素",
        "en": "Cyberpunk glitch elements"
      },
      {
        "zh-tw": "波浪與雲朵",
        "en": "Waves and Clouds"
      }
    ]
  },
  "action_pose": {
    "label": {
      "zh-tw": "互動姿勢",
      "en": "Action Pose"
    },
    "category": "action",
    "options": [
      {
        "zh-tw": "用手指在男人腦後比劃'兔耳朵'",
        "en": "Using fingers to make 'bunny ears' behind the man's head"
      },
      {
        "zh-tw": "勾肩搭背比V字手勢",
        "en": "Arm around shoulder making V sign"
      },
      {
        "zh-tw": "互相指著對方大笑",
        "en": "Pointing at each other and laughing"
      },
      {
        "zh-tw": "背靠背酷炫站姿",
        "en": "Cool back-to-back standing pose"
      }
    ]
  },
  "background_scene": {
    "label": {
      "zh-tw": "背景場景",
      "en": "Background Scene"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "俯瞰紐約市的復仇者大廈樓頂",
        "en": "Rooftop of Avengers Tower overlooking New York City"
      },
      {
        "zh-tw": "廢棄的工業倉庫",
        "en": "Abandoned industrial warehouse"
      },
      {
        "zh-tw": "熙熙攘攘的時代廣場",
        "en": "Bustling Times Square"
      },
      {
        "zh-tw": "外太空飛船內部",
        "en": "Inside a space-age spaceship"
      }
    ]
  },
  "lens_type": {
    "label": {
      "zh-tw": "鏡頭型別",
      "en": "Lens Type"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "標準鏡頭",
        "en": "Standard Lens"
      },
      {
        "zh-tw": "廣角鏡頭",
        "en": "Wide-angle Lens"
      },
      {
        "zh-tw": "長焦鏡頭",
        "en": "Telephoto Lens"
      },
      {
        "zh-tw": "極端魚眼鏡頭",
        "en": "Extreme Fisheye Lens"
      },
      {
        "zh-tw": "移軸鏡頭",
        "en": "Tilt-shift Lens"
      },
      {
        "zh-tw": "微距鏡頭",
        "en": "Macro Lens"
      }
    ]
  },
  "school_uniform": {
    "label": {
      "zh-tw": "校服樣式",
      "en": "School Uniform"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "傳統水手服校服",
        "en": "Traditional Sailor Uniform"
      },
      {
        "zh-tw": "灰色開襟和格子裙校服",
        "en": "Grey cardigan and plaid skirt uniform"
      },
      {
        "zh-tw": "英倫風百褶裙校服",
        "en": "British style pleated skirt uniform"
      },
      {
        "zh-tw": "日系JK制服",
        "en": "Japanese JK Uniform"
      },
      {
        "zh-tw": "運動校服",
        "en": "Tracksuit School Uniform"
      },
      {
        "zh-tw": "冬季大衣校服",
        "en": "Winter coat school uniform"
      }
    ]
  },
  "urban_location": {
    "label": {
      "zh-tw": "城市地點",
      "en": "Urban Location"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "澀谷十字路口",
        "en": "Shibuya Crossing"
      },
      {
        "zh-tw": "東京塔下",
        "en": "Under Tokyo Tower"
      },
      {
        "zh-tw": "時代廣場",
        "en": "Times Square"
      },
      {
        "zh-tw": "艾菲爾鐵塔旁",
        "en": "By the Eiffel Tower"
      },
      {
        "zh-tw": "中央公園",
        "en": "Central Park"
      },
      {
        "zh-tw": "北京王府井",
        "en": "Beijing Wangfujing"
      },
      {
        "zh-tw": "上海外灘",
        "en": "Shanghai Bund"
      },
      {
        "zh-tw": "香港維多利亞港",
        "en": "Hong Kong Victoria Harbour"
      }
    ]
  },
  "dynamic_action": {
    "label": {
      "zh-tw": "動態動作",
      "en": "Dynamic Action"
    },
    "category": "action",
    "options": [
      {
        "zh-tw": "一隻手誇張地伸向鏡頭前景",
        "en": "One hand exaggeratedly reaching towards the foreground"
      },
      {
        "zh-tw": "雙臂張開擁抱天空",
        "en": "Arms open wide embracing the sky"
      },
      {
        "zh-tw": "旋轉跳躍",
        "en": "Spinning and jumping"
      },
      {
        "zh-tw": "奔跑前進",
        "en": "Running forward"
      },
      {
        "zh-tw": "蹲下撿拾",
        "en": "Squatting down to pick up"
      },
      {
        "zh-tw": "揮手致意",
        "en": "Waving greeting"
      },
      {
        "zh-tw": "舞蹈姿勢",
        "en": "Dance pose"
      },
      {
        "zh-tw": "比心手勢",
        "en": "Heart gesture"
      }
    ]
  },
  "fingernail_detail": {
    "label": {
      "zh-tw": "手指甲細節",
      "en": "Fingernail Detail"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "手指甲清晰可見",
        "en": "Fingernails clearly visible"
      },
      {
        "zh-tw": "塗有鮮豔指甲油",
        "en": "Coated with bright nail polish"
      },
      {
        "zh-tw": "自然裸色指甲",
        "en": "Natural nude nails"
      },
      {
        "zh-tw": "裝飾有鑽石指甲",
        "en": "Decorated with diamond nails"
      },
      {
        "zh-tw": "漸變色指甲",
        "en": "Gradient nails"
      },
      {
        "zh-tw": "藝術圖案指甲",
        "en": "Artistic pattern nails"
      }
    ]
  },
  "building_cluster": {
    "label": {
      "zh-tw": "建築群",
      "en": "Building Cluster"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "扭曲的澀谷109大樓和其他建築林立",
        "en": "Distorted Shibuya 109 building and other forest of buildings"
      },
      {
        "zh-tw": "紐約摩天大樓群",
        "en": "New York skyscraper cluster"
      },
      {
        "zh-tw": "巴黎古典建築",
        "en": "Parisian classical architecture"
      },
      {
        "zh-tw": "上海現代高層建築",
        "en": "Shanghai modern high-rise buildings"
      },
      {
        "zh-tw": "東京傳統寺廟與現代建築混合",
        "en": "Mix of traditional Tokyo temples and modern architecture"
      },
      {
        "zh-tw": "倫敦金融城高樓",
        "en": "City of London high-rises"
      }
    ]
  },
  "monster_element": {
    "label": {
      "zh-tw": "怪獸元素",
      "en": "Monster Element"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "巨大的粉色和藍色漸變卡通怪獸",
        "en": "Giant pink and blue gradient cartoon monster"
      },
      {
        "zh-tw": "機械機器人怪獸",
        "en": "Mecha robot monster"
      },
      {
        "zh-tw": "神話傳說中的龍",
        "en": "Legendary dragon"
      },
      {
        "zh-tw": "外星生物",
        "en": "Alien creature"
      },
      {
        "zh-tw": "海洋深淵巨獸",
        "en": "Deep sea behemoth"
      },
      {
        "zh-tw": "森林精靈",
        "en": "Forest elf"
      }
    ]
  },
  "monster_feature": {
    "label": {
      "zh-tw": "怪獸特徵",
      "en": "Monster Feature"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "巨大的觸手和角",
        "en": "Giant tentacles and horns"
      },
      {
        "zh-tw": "鋒利的爪子和牙齒",
        "en": "Sharp claws and teeth"
      },
      {
        "zh-tw": "多彩的翅膀",
        "en": "Colorful wings"
      },
      {
        "zh-tw": "發光的眼睛",
        "en": "Glowing eyes"
      },
      {
        "zh-tw": "金屬外殼",
        "en": "Metal shell"
      },
      {
        "zh-tw": "藤蔓植物",
        "en": "Vining plants"
      }
    ]
  },
  "distorted_city": {
    "label": {
      "zh-tw": "扭曲城市",
      "en": "Distorted City"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "扭曲的城市景觀",
        "en": "Distorted urban landscape"
      },
      {
        "zh-tw": "鏡面反射的城市",
        "en": "Specularly reflected city"
      },
      {
        "zh-tw": "夢幻泡泡中的城市",
        "en": "City inside dream bubbles"
      },
      {
        "zh-tw": "像素化的城市",
        "en": "Pixelated city"
      },
      {
        "zh-tw": "水墨畫風格的城市",
        "en": "Ink-wash style city"
      },
      {
        "zh-tw": "未來科幻城市",
        "en": "Future sci-fi city"
      }
    ]
  },
  "lighting_atmosphere": {
    "label": {
      "zh-tw": "燈光氛圍",
      "en": "Lighting Atmosphere"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "陽光明媚",
        "en": "Sunny"
      },
      {
        "zh-tw": "月光皎潔",
        "en": "Bright moonlight"
      },
      {
        "zh-tw": "霓虹燈閃爍",
        "en": "Flickering neon lights"
      },
      {
        "zh-tw": "燭光搖曳",
        "en": "Flickering candlelight"
      },
      {
        "zh-tw": "舞台聚光燈",
        "en": "Stage spotlights"
      },
      {
        "zh-tw": "自然晨光",
        "en": "Natural morning light"
      },
      {
        "zh-tw": "夕陽餘暉",
        "en": "Sunset afterglow"
      },
      {
        "zh-tw": "室內暖光",
        "en": "Indoor warm light"
      }
    ]
  },
  "shadow_contrast": {
    "label": {
      "zh-tw": "陰影對比",
      "en": "Shadow Contrast"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "光影對比強烈",
        "en": "Strong light-shadow contrast"
      },
      {
        "zh-tw": "柔和的陰影",
        "en": "Soft shadows"
      },
      {
        "zh-tw": "戲劇性陰影",
        "en": "Dramatic shadows"
      },
      {
        "zh-tw": "無陰影平光",
        "en": "No-shadow flat lighting"
      },
      {
        "zh-tw": "輪廓光",
        "en": "Rim lighting"
      },
      {
        "zh-tw": "背光剪影",
        "en": "Backlit silhouette"
      }
    ]
  },
  "travel_location": {
    "label": {
      "zh-tw": "旅遊地點",
      "en": "Travel Location"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "西藏拉薩布達拉宮",
        "en": "Potala Palace, Lhasa, Tibet"
      },
      {
        "zh-tw": "湖南林中小寨",
        "en": "Forest Village in Hunan"
      },
      {
        "zh-tw": "東北雪鄉",
        "en": "Snow Village in Northeast China"
      },
      {
        "zh-tw": "老北京胡同",
        "en": "Old Beijing Hutongs"
      },
      {
        "zh-tw": "雲南大理洱海",
        "en": "Erhai Lake, Dali, Yunnan"
      },
      {
        "zh-tw": "新疆喀納斯湖",
        "en": "Kanas Lake, Xinjiang"
      },
      {
        "zh-tw": "四川九寨溝",
        "en": "Jiuzhaigou, Sichuan"
      },
      {
        "zh-tw": "桂林漓江",
        "en": "Li River, Guilin"
      },
      {
        "zh-tw": "張家界天門山",
        "en": "Tianmen Mountain, Zhangjiajie"
      },
      {
        "zh-tw": "敦煌莫高窟",
        "en": "Mogao Grottoes, Dunhuang"
      },
      {
        "zh-tw": "內蒙古呼倫貝爾草原",
        "en": "Hulunbuir Grassland, Inner Mongolia"
      },
      {
        "zh-tw": "台灣日月潭",
        "en": "Sun Moon Lake, Taiwan"
      }
    ]
  },
  "comic_scene": {
    "label": {
      "zh-tw": "漫畫場景",
      "en": "Comic Scene"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "唯美的臥室",
        "en": "Beautiful bedroom"
      },
      {
        "zh-tw": "繁華的街頭",
        "en": "Busy street"
      },
      {
        "zh-tw": "溫馨的教室",
        "en": "Cozy classroom"
      },
      {
        "zh-tw": "現代咖啡廳",
        "en": "Modern cafe"
      },
      {
        "zh-tw": "公園長椅",
        "en": "Park bench"
      },
      {
        "zh-tw": "圖書館角落",
        "en": "Library corner"
      },
      {
        "zh-tw": "藝術工作室",
        "en": "Art studio"
      },
      {
        "zh-tw": "屋頂天台",
        "en": "Rooftop"
      },
      {
        "zh-tw": "火車站月臺",
        "en": "Railway platform"
      },
      {
        "zh-tw": "書店一角",
        "en": "Bookstore corner"
      }
    ]
  },
  "designer": {
    "label": {
      "zh-tw": "設計師",
      "en": "Designer"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "安東尼·高迪 (Antoni Gaudí)",
        "en": "Antoni Gaudí"
      },
      {
        "zh-tw": "Jonathan Ive (Jony Ive)",
        "en": "Jonathan Ive"
      },
      {
        "zh-tw": "Gio Ponti",
        "en": "Gio Ponti"
      },
      {
        "zh-tw": "迪特·拉姆斯 (Dieter Rams)",
        "en": "Dieter Rams"
      },
      {
        "zh-tw": "菲利普·史塔克 (Philippe Starck)",
        "en": "Philippe Starck"
      },
      {
        "zh-tw": "原研哉 (Kenya Hara)",
        "en": "Kenya Hara"
      },
      {
        "zh-tw": "深澤直人 (Naoto Fukasawa)",
        "en": "Naoto Fukasawa"
      },
      {
        "zh-tw": "薩哈·哈蒂 (Zaha Hadid)",
        "en": "Zaha Hadid"
      },
      {
        "zh-tw": "馬克·紐森 (Marc Newson)",
        "en": "Marc Newson"
      },
      {
        "zh-tw": "湯姆·迪克森 (Tom Dixon)",
        "en": "Tom Dixon"
      },
      {
        "zh-tw": "賈斯珀·莫里森 (Jasper Morrison)",
        "en": "Jasper Morrison"
      },
      {
        "zh-tw": "康斯坦丁·葛切奇 (Konstantin Grcic)",
        "en": "Konstantin Grcic"
      }
    ]
  },
  "design_item": {
    "label": {
      "zh-tw": "設計物品",
      "en": "Design Item"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "無人機",
        "en": "Drone"
      },
      {
        "zh-tw": "撞球桌",
        "en": "Pool table"
      },
      {
        "zh-tw": "拖拉機",
        "en": "Tractor"
      },
      {
        "zh-tw": "機械鍵盤",
        "en": "Mechanical keyboard"
      },
      {
        "zh-tw": "復古打字機",
        "en": "Vintage typewriter"
      },
      {
        "zh-tw": "單眼相機",
        "en": "DSLR camera"
      },
      {
        "zh-tw": "掃地機器人",
        "en": "Robot vacuum"
      },
      {
        "zh-tw": "咖啡機",
        "en": "Coffee machine"
      },
      {
        "zh-tw": "檯燈",
        "en": "Desk lamp"
      },
      {
        "zh-tw": "椅子",
        "en": "Chair"
      },
      {
        "zh-tw": "音響系統",
        "en": "Sound system"
      },
      {
        "zh-tw": "手錶",
        "en": "Watch"
      },
      {
        "zh-tw": "自行車",
        "en": "Bicycle"
      },
      {
        "zh-tw": "電動滑板車",
        "en": "Electric scooter"
      },
      {
        "zh-tw": "藍牙耳機",
        "en": "Bluetooth headphones"
      },
      {
        "zh-tw": "智慧音箱",
        "en": "Smart speaker"
      },
      {
        "zh-tw": "刮鬍刀",
        "en": "Razor"
      },
      {
        "zh-tw": "電風扇",
        "en": "Electric fan"
      },
      {
        "zh-tw": "水壺",
        "en": "Kettle"
      },
      {
        "zh-tw": "智能音箱",
        "en": "Smart speaker"
      }
    ]
  },
  "rain_shape": {
    "label": {
      "zh-tw": "雨水形象",
      "en": "Rain Shape"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "芭蕾舞者",
        "en": "Ballerina"
      },
      {
        "zh-tw": "飛舞的蝴蝶",
        "en": "Flying butterfly"
      },
      {
        "zh-tw": "奔跑的駿馬",
        "en": "Running steed"
      },
      {
        "zh-tw": "綻放的蓮花",
        "en": "Blooming lotus"
      },
      {
        "zh-tw": "輕盈的羽毛",
        "en": "Light feather"
      },
      {
        "zh-tw": "靈動的音符",
        "en": "Lively musical note"
      }
    ]
  },
  "fruit": {
    "label": {
      "zh-tw": "水果",
      "en": "Fruit"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "獼猴桃",
        "en": "Kiwi"
      },
      {
        "zh-tw": "橙子",
        "en": "Orange"
      },
      {
        "zh-tw": "蘋果",
        "en": "Apple"
      },
      {
        "zh-tw": "草莓",
        "en": "Strawberry"
      },
      {
        "zh-tw": "檸檬",
        "en": "Lemon"
      },
      {
        "zh-tw": "葡萄",
        "en": "Grape"
      },
      {
        "zh-tw": "芒果",
        "en": "Mango"
      },
      {
        "zh-tw": "椰子",
        "en": "Coconut"
      }
    ]
  },
  "xmas_theme": {
    "label": {
      "zh-tw": "聖誕主題",
      "en": "Christmas Theme"
    },
    "category": "other",
    "options": [
      {
        "zh-tw": "抽象聖誕樹",
        "en": "an abstract Christmas Tree"
      },
      {
        "zh-tw": "聖誕雪花",
        "en": "Christmas snowflake"
      },
      {
        "zh-tw": "馴鹿與森林",
        "en": "Reindeer and forest"
      },
      {
        "zh-tw": "聖誕裝飾球",
        "en": "Christmas ornaments"
      },
      {
        "zh-tw": "聖誕薑餅屋",
        "en": "Christmas gingerbread house"
      }
    ]
  },
  "jewelry_style": {
    "label": {
      "zh-tw": "珠寶樣式",
      "en": "Jewelry Style"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "精美的金色背鏈",
        "en": "Fine gold back necklace"
      },
      {
        "zh-tw": "簡約銀色鏈條",
        "en": "Minimalist silver chain"
      },
      {
        "zh-tw": "珍珠身體鏈",
        "en": "Pearl body chain"
      },
      {
        "zh-tw": "鑽石露背項鍊",
        "en": "Diamond back drop necklace"
      },
      {
        "zh-tw": "祖母綠吊墜背鏈",
        "en": "Emerald pendant back necklace"
      }
    ]
  },
  "flower_type": {
    "label": {
      "zh-tw": "花卉品種",
      "en": "Flower Type"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "一束深紅色玫瑰",
        "en": "A bouquet of deep red roses"
      },
      {
        "zh-tw": "優雅的白色馬蹄蓮",
        "en": "Elegant white calla lilies"
      },
      {
        "zh-tw": "淡粉色牡丹",
        "en": "Pale pink peonies"
      },
      {
        "zh-tw": "名貴的深色蘭花",
        "en": "Exotic dark orchids"
      },
      {
        "zh-tw": "乾枯的桉樹葉",
        "en": "Dried eucalyptus leaves"
      },
      {
        "zh-tw": "鮮豔的向日葵",
        "en": "Vibrant sunflowers"
      }
    ]
  },
  "character_type_pixar": {
    "label": {
      "zh-tw": "角色模式",
      "en": "Character Mode"
    },
    "category": "character",
    "options": [
      {
        "zh-tw": "單人角色：聚焦於個人生活方式",
        "en": "Single: Focus on personal lifestyle"
      },
      {
        "zh-tw": "情侶角色：每人18件物品，用愛心符號連線，冷暖對比",
        "en": "Couple: 18 items each, heart connectors, contrast"
      },
      {
        "zh-tw": "孕婦角色：包含孕期用品、嬰兒圖標及B超照片",
        "en": "Pregnant: Includes pregnancy items, baby icons, ultrasound"
      },
      {
        "zh-tw": "親子角色：包含成人與兒童用品，體現家庭溫馨",
        "en": "Family: Includes adult and child items, family warmth"
      }
    ]
  },
  "theme_pixar": {
    "label": {
      "zh-tw": "配色主題",
      "en": "Theme & Color"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "女性/時尚主題：香檳金、玫瑰金、奶油色、櫻花粉",
        "en": "Female/Fashion: Champagne Gold, Rose Gold, Cream, Cherry Pink"
      },
      {
        "zh-tw": "男性/科技主題：鋼藍色、深灰色、電光藍、銀色",
        "en": "Male/Tech: Steel Blue, Dark Grey, Electric Blue, Silver"
      },
      {
        "zh-tw": "正式/奢華主題：純黑、24K金、深紅色、象牙白",
        "en": "Formal/Luxury: Pure Black, 24K Gold, Deep Red, Ivory White"
      },
      {
        "zh-tw": "情侶/對比主題：冷暖色調對比",
        "en": "Couple/Contrast: Contrast of warm and cool tones"
      }
    ]
  },
  "item_layout_pixar": {
    "label": {
      "zh-tw": "物品佈局",
      "en": "Item Layout"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "90度直角整齊排列 (Knolling)",
        "en": "90-degree Knolling layout"
      },
      {
        "zh-tw": "放射式構圖 (Radial)",
        "en": "Radial composition"
      },
      {
        "zh-tw": "階梯式錯落佈局 (Step)",
        "en": "Step-like staggered layout"
      },
      {
        "zh-tw": "網格對稱佈局 (Grid)",
        "en": "Grid symmetrical layout"
      }
    ]
  },
  "fashion_parts": {
    "label": {
      "zh-tw": "時尚穿搭拆解",
      "en": "Fashion Deconstruction"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "風衣拆解：翻領、肩章、腰帶、袖口束帶、主衣身",
        "en": "Trench coat: Lapel, epaulets, belt, cuffs, main body"
      },
      {
        "zh-tw": "西裝拆解：駁領、口袋、內襯、袖釦、墊肩",
        "en": "Suit: Lapel, pockets, lining, cufflinks, shoulder pads"
      },
      {
        "zh-tw": "運動鞋拆解：鞋底、鞋面、鞋帶、氣墊、鞋墊",
        "en": "Sneakers: Sole, upper, laces, air cushion, insole"
      },
      {
        "zh-tw": "連衣裙拆解：蕾絲邊、拉鍊、腰部剪裁、裙襬、領口",
        "en": "Dress: Lace trim, zipper, waist cut, hem, neckline"
      },
      {
        "zh-tw": "包袋拆解：五金鎖釦、肩帶、內袋、縫線細節、手柄",
        "en": "Bag: Metal lock, strap, inner pocket, stitching, handle"
      }
    ]
  },
  "beauty_items": {
    "label": {
      "zh-tw": "美妝個護拆解",
      "en": "Beauty Deconstruction"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "彩妝：口紅（帶切面）、眼影盤、粉餅、腮紅刷",
        "en": "Makeup: Lipstick (cut), eyeshadow palette, compact, blush brush"
      },
      {
        "zh-tw": "護膚：精華液瓶、面霜罐、美容儀、面膜",
        "en": "Skincare: Serum bottle, cream jar, beauty device, mask"
      },
      {
        "zh-tw": "香氛：香水瓶（帶液體折射）、香薰蠟燭、擴香器",
        "en": "Fragrance: Perfume bottle (refraction), scented candle, diffuser"
      },
      {
        "zh-tw": "洗護：洗面奶、爽膚水、卸妝油、潔面儀",
        "en": "Cleansing: Cleanser, toner, cleansing oil, facial device"
      }
    ]
  },
  "digital_items": {
    "label": {
      "zh-tw": "數碼生活拆解",
      "en": "Digital Deconstruction"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "手機拆解：手機殼、螢幕內容、攝像頭模組、主板元件",
        "en": "Phone: Case, screen content, camera module, motherboard"
      },
      {
        "zh-tw": "相機拆解：鏡頭組、機身、閃光燈、儲存卡、肩帶",
        "en": "Camera: Lens set, body, flash, memory card, strap"
      },
      {
        "zh-tw": "影音：無線耳機、智慧手錶、平板電腦、藍牙音箱",
        "en": "Audio: Wireless headphones, smartwatch, tablet, speaker"
      },
      {
        "zh-tw": "辦公：筆記本電腦、鍵盤軸體、滑鼠、手繪板",
        "en": "Office: Laptop, keyboard switches, mouse, drawing tablet"
      }
    ]
  },
  "luxury_hobby_items": {
    "label": {
      "zh-tw": "個人愛好/奢華",
      "en": "Hobby & Luxury"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "珠寶：項鍊、耳環、戒指（寶石帶色散效果）",
        "en": "Jewelry: Necklace, earrings, ring (gemstone dispersion)"
      },
      {
        "zh-tw": "藝術：畫筆、調色盤、素描本、顏料軟管",
        "en": "Art: Brushes, palette, sketchbook, paint tubes"
      },
      {
        "zh-tw": "生活：咖啡機、磨豆機、高檔手辦元件、限量書籍",
        "en": "Life: Coffee machine, grinder, high-end figure parts, limited books"
      },
      {
        "zh-tw": "運動：網球拍、滑板、滑雪鏡、運動相機、水壺",
        "en": "Sports: Tennis racket, skateboard, ski goggles, action cam, bottle"
      }
    ]
  },
  "country": {
    "label": {
      "zh-tw": "國家",
      "en": "Country"
    },
    "category": "other",
    "options": [
      {
        "zh-tw": "日本",
        "en": "Japanese"
      },
      {
        "zh-tw": "韓國",
        "en": "Korean"
      },
      {
        "zh-tw": "美國",
        "en": "USA"
      },
      {
        "zh-tw": "泰國",
        "en": "Thailand"
      },
      {
        "zh-tw": "法國",
        "en": "France"
      },
      {
        "zh-tw": "西班牙",
        "en": "Spain"
      },
      {
        "zh-tw": "巴西",
        "en": "Brazilian"
      }
    ]
  },
  "language": {
    "label": {
      "zh-tw": "語言",
      "en": "Language"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "中文",
        "en": "zh-tw"
      },
      {
        "zh-tw": "英文",
        "en": "English"
      },
      {
        "zh-tw": "日文",
        "en": "Japanese"
      },
      {
        "zh-tw": "韓文",
        "en": "Korean"
      }
    ]
  },
  "chart_style": {
    "label": {
      "zh-tw": "圖表風格",
      "en": "Chart Style"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "可愛、歡快、粉彩色調",
        "en": "cute, cheerful, pastel colors"
      },
      {
        "zh-tw": "2D 扁平向量",
        "en": "2D Flat vector"
      },
      {
        "zh-tw": "企業插畫風",
        "en": "Corporate Memphis"
      },
      {
        "zh-tw": "粗輪廓線",
        "en": "Bold outlines"
      },
      {
        "zh-tw": "純色塊",
        "en": "Solid colors"
      },
      {
        "zh-tw": "無襯線文字標籤",
        "en": "Sans-serif typography labels"
      },
      {
        "zh-tw": "純白背景",
        "en": "White background"
      },
      {
        "zh-tw": "俐落線條",
        "en": "Clean lines"
      },
      {
        "zh-tw": "蘋果流體玻璃風",
        "en": "Apple's liquid glass"
      }
    ]
  },
  "tech___architecture": {
    "label": {
      "zh-tw": "專業科技與架構",
      "en": "Tech & Architecture"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "等距視角",
        "en": "Isometric"
      },
      {
        "zh-tw": "藍圖感",
        "en": "Blueprint style"
      },
      {
        "zh-tw": "技術插圖",
        "en": "Technical illustration"
      },
      {
        "zh-tw": "單色調",
        "en": "Monochromatic"
      },
      {
        "zh-tw": "電路紋路",
        "en": "Circuit board patterns"
      },
      {
        "zh-tw": "圓柱體圖示",
        "en": "Cylindrical icons"
      },
      {
        "zh-tw": "向量線稿",
        "en": "Vector wireframe"
      },
      {
        "zh-tw": "發光特效",
        "en": "Glow effects"
      },
      {
        "zh-tw": "UML 類別圖結構",
        "en": "UML Class Diagram structures"
      },
      {
        "zh-tw": "物件導向設計模式",
        "en": "Object-Oriented Design Patterns"
      },
      {
        "zh-tw": "分層系統架構",
        "en": "Layered System Architecture"
      },
      {
        "zh-tw": "角色引導敘事",
        "en": "Character-led Storytelling"
      },
      {
        "zh-tw": "統計趨勢分析",
        "en": "tatistical Trend Analysis"
      },
      {
        "zh-tw": "異常檢測映射",
        "en": "Anomalies Detection Mapping"
      }
    ]
  },
  "data_viz___dashboard": {
    "label": {
      "zh-tw": "數據視覺化與儀表板風格",
      "en": "Data Viz & Dashboard"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "數據視覺化介面",
        "en": "Data visualization UI"
      },
      {
        "zh-tw": "抬頭顯示器元素",
        "en": "HUD elements"
      },
      {
        "zh-tw": "霓虹發光線條",
        "en": "Neon glowing lines"
      },
      {
        "zh-tw": "資訊圖表元素",
        "en": "Infographic elements"
      },
      {
        "zh-tw": "圓餅圖與長條圖",
        "en": "Pie charts and bar graphs"
      },
      {
        "zh-tw": "半透明圖層",
        "en": "Translucent layers"
      },
      {
        "zh-tw": "深色模式",
        "en": "Dark mode"
      },
      {
        "zh-tw": "程序流節點",
        "en": "Process flow nodes"
      },
      {
        "zh-tw": "時間軸",
        "en": "Timeline"
      },
      {
        "zh-tw": "散點圖",
        "en": "Scatter Plot"
      },
      {
        "zh-tw": "樹狀圖",
        "en": "Tree Diagram"
      },
      {
        "zh-tw": "層級比例圖",
        "en": "Hierarchical Treemaps"
      },
      {
        "zh-tw": "多重小圖網格",
        "en": "Small Multiples Grid"
      }
    ]
  },
  "hand_drawn___conceptual": {
    "label": {
      "zh-tw": "手繪與創意概念風格",
      "en": "Hand-drawn & Conceptual"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "手繪素描",
        "en": "Hand-drawn sketch"
      },
      {
        "zh-tw": "麥克筆筆觸",
        "en": "Marker drawing"
      },
      {
        "zh-tw": "粗糙線條",
        "en": "Rough lines"
      },
      {
        "zh-tw": "蠟筆質感",
        "en": "Crayon texture"
      },
      {
        "zh-tw": "塗鴉風",
        "en": "Doodle style"
      },
      {
        "zh-tw": "紙張背景",
        "en": "Paper background"
      },
      {
        "zh-tw": "有機形狀",
        "en": "Organic shapes"
      },
      {
        "zh-tw": "復古風",
        "en": "Retro style"
      }
    ]
  },
  "color": {
    "label": {
      "zh-tw": "顏色",
      "en": "Color"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "棕色",
        "en": "brown"
      },
      {
        "zh-tw": "黑",
        "en": "black"
      },
      {
        "zh-tw": "深紅色",
        "en": "deep red"
      },
      {
        "zh-tw": "藍",
        "en": "blue"
      },
      {
        "zh-tw": "金",
        "en": "gold"
      },
      {
        "zh-tw": "黃",
        "en": "yellow"
      },
      {
        "zh-tw": "橘",
        "en": "orange"
      },
      {
        "zh-tw": "紫",
        "en": "purple"
      },
      {
        "zh-tw": "白",
        "en": "white"
      },
      {
        "zh-tw": "綠色",
        "en": "green"
      }
    ]
  },
  "positive": {
    "label": {
      "zh-tw": "正向形容",
      "en": "Positive"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "專業",
        "en": "professional"
      },
      {
        "zh-tw": "易於理解",
        "en": "easy to understand"
      },
      {
        "zh-tw": "細節豐富",
        "en": "rich in details"
      },
      {
        "zh-tw": "高解析度",
        "en": "high resolution"
      },
      {
        "zh-tw": "柔和光線",
        "en": "soft lighting"
      },
      {
        "zh-tw": "最佳品質",
        "en": "best quality"
      }
    ]
  },
  "negative": {
    "label": {
      "zh-tw": "負向形容",
      "en": "Negative"
    },
    "category": "infographic",
    "options": [
      {
        "zh-tw": "醜陋",
        "en": "ugly"
      },
      {
        "zh-tw": "變形",
        "en": "deformed"
      },
      {
        "zh-tw": "噪點",
        "en": "noise"
      },
      {
        "zh-tw": "模糊",
        "en": "blurry"
      },
      {
        "zh-tw": "低品質",
        "en": "low quality"
      },
      {
        "zh-tw": "解剖結構錯誤",
        "en": "bad anatomy"
      },
      {
        "zh-tw": "比例失調",
        "en": "bad proportions"
      },
      {
        "zh-tw": "出框",
        "en": "out of frame"
      },
      {
        "zh-tw": "浮水印",
        "en": "watermark"
      },
      {
        "zh-tw": "簽名",
        "en": "signature"
      }
    ]
  },
  "material": {
    "label": {
      "zh-tw": "材質",
      "en": "Material"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "玻璃",
        "en": "glass"
      },
      {
        "zh-tw": "紙張",
        "en": "paper"
      },
      {
        "zh-tw": "布料",
        "en": "fabric"
      },
      {
        "zh-tw": "亮面",
        "en": "glossy"
      },
      {
        "zh-tw": "霧面",
        "en": "matte"
      },
      {
        "zh-tw": "木質",
        "en": "wooden"
      },
      {
        "zh-tw": "金屬",
        "en": "metallic"
      },
      {
        "zh-tw": "塑料",
        "en": "plastic"
      },
      {
        "zh-tw": "水晶",
        "en": "crystal"
      },
      {
        "zh-tw": "大理石",
        "en": "marble"
      }
    ]
  },
  "color_tone": {
    "label": {
      "zh-tw": "色調",
      "en": "Color Tone"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "粉彩色調",
        "en": "pastel"
      },
      {
        "zh-tw": "鮮豔",
        "en": "vibrant"
      },
      {
        "zh-tw": "低飽和",
        "en": "muted"
      },
      {
        "zh-tw": "暖色調",
        "en": "warm tones"
      },
      {
        "zh-tw": "冷色調",
        "en": "cool tones"
      },
      {
        "zh-tw": "單色",
        "en": "monochrome"
      },
      {
        "zh-tw": "高對比",
        "en": "high contrast"
      }
    ]
  },
  "composition": {
    "label": {
      "zh-tw": "構圖",
      "en": "Composition"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "特寫",
        "en": "close-up"
      },
      {
        "zh-tw": "人像構圖",
        "en": "portrait"
      },
      {
        "zh-tw": "高角度",
        "en": "high angle"
      },
      {
        "zh-tw": "低角度",
        "en": "low angle"
      },
      {
        "zh-tw": "置中",
        "en": "centered"
      },
      {
        "zh-tw": "中景",
        "en": "medium shot"
      },
      {
        "zh-tw": "全身",
        "en": "full body"
      },
      {
        "zh-tw": "平視角度",
        "en": "eye level"
      }
    ]
  },
  "scene_location": {
    "label": {
      "zh-tw": "場景地點",
      "en": "Scene Location"
    },
    "category": "location",
    "options": [
      {
        "zh-tw": "城市街道",
        "en": "city street"
      },
      {
        "zh-tw": "攝影棚",
        "en": "studio"
      },
      {
        "zh-tw": "浴室",
        "en": "bathroom"
      },
      {
        "zh-tw": "臥室",
        "en": "bedroom"
      },
      {
        "zh-tw": "辦公室",
        "en": "office"
      },
      {
        "zh-tw": "公園",
        "en": "park"
      },
      {
        "zh-tw": "博物館",
        "en": "museum"
      },
      {
        "zh-tw": "屋頂",
        "en": "rooftop"
      },
      {
        "zh-tw": "咖啡廳",
        "en": "cafe"
      },
      {
        "zh-tw": "窗邊",
        "en": "window"
      }
    ]
  },
  "camera_device": {
    "label": {
      "zh-tw": "相機設備",
      "en": "Camera Device"
    },
    "category": "item",
    "options": [
      {
        "zh-tw": "iPhone",
        "en": "iPhone"
      },
      {
        "zh-tw": "Canon 單眼",
        "en": "Canon DSLR"
      },
      {
        "zh-tw": "Sony 無反",
        "en": "Sony mirrorless"
      },
      {
        "zh-tw": "拍立得",
        "en": "Polaroid"
      },
      {
        "zh-tw": "復古底片相機",
        "en": "vintage film camera"
      },
      {
        "zh-tw": "智慧手機",
        "en": "smartphone"
      }
    ]
  },
  "post_effect": {
    "label": {
      "zh-tw": "後製效果",
      "en": "Post Effect"
    },
    "category": "visual",
    "options": [
      {
        "zh-tw": "底片顆粒",
        "en": "film grain"
      },
      {
        "zh-tw": "模糊",
        "en": "blur"
      },
      {
        "zh-tw": "暗角",
        "en": "vignette"
      },
      {
        "zh-tw": "噪點",
        "en": "noise"
      },
      {
        "zh-tw": "調色",
        "en": "color grading"
      },
      {
        "zh-tw": "色差",
        "en": "chromatic aberration"
      }
    ]
  },
  "concept_topic": {
    "label": {
      "zh-tw": "概念主題",
      "en": "Concept Topic"
    },
    "category": "other",
    "options": [
      {
        "zh-tw": "光合作用",
        "en": "Photosynthesis"
      },
      {
        "zh-tw": "水循環",
        "en": "Water Cycle"
      },
      {
        "zh-tw": "食物鏈",
        "en": "Food Chain"
      },
      {
        "zh-tw": "太陽系",
        "en": "Solar System"
      },
      {
        "zh-tw": "人體消化系統",
        "en": "Human Digestive System"
      },
      {
        "zh-tw": "電路原理",
        "en": "Electric Circuit"
      },
      {
        "zh-tw": "細胞分裂",
        "en": "Cell Division"
      },
      {
        "zh-tw": "氣候變遷",
        "en": "Climate Change"
      },
      {
        "zh-tw": "經濟供需",
        "en": "Supply and Demand"
      },
      {
        "zh-tw": "演化論",
        "en": "Evolution Theory"
      }
    ]
  },
  "business_type": {
    "label": {
      "zh-tw": "商業類型",
      "en": "Business Type"
    },
    "category": "other",
    "options": [
      {
        "zh-tw": "咖啡廳",
        "en": "Coffee Shop"
      },
      {
        "zh-tw": "餐廳",
        "en": "Restaurant"
      },
      {
        "zh-tw": "健身房",
        "en": "Gym"
      },
      {
        "zh-tw": "書店",
        "en": "Bookstore"
      },
      {
        "zh-tw": "花店",
        "en": "Flower Shop"
      },
      {
        "zh-tw": "烘焙坊",
        "en": "Bakery"
      },
      {
        "zh-tw": "美髮沙龍",
        "en": "Hair Salon"
      },
      {
        "zh-tw": "瑜伽教室",
        "en": "Yoga Studio"
      },
      {
        "zh-tw": "寵物店",
        "en": "Pet Shop"
      },
      {
        "zh-tw": "攝影工作室",
        "en": "Photography Studio"
      }
    ]
  }
};

// 社群分類
export const COMMUNITY_CATEGORIES = {
  "character": {
    "id": "character",
    "label": {
      "zh-tw": "人物",
      "en": "CHARACTER"
    },
    "color": "blue"
  },
  "item": {
    "id": "item",
    "label": {
      "zh-tw": "物品",
      "en": "ITEM"
    },
    "color": "amber"
  },
  "action": {
    "id": "action",
    "label": {
      "zh-tw": "動作",
      "en": "ACTION"
    },
    "color": "rose"
  },
  "location": {
    "id": "location",
    "label": {
      "zh-tw": "地點",
      "en": "LOCATION"
    },
    "color": "emerald"
  },
  "visual": {
    "id": "visual",
    "label": {
      "zh-tw": "畫面",
      "en": "VISUALS"
    },
    "color": "violet"
  },
  "other": {
    "id": "other",
    "label": {
      "zh-tw": "其他",
      "en": "OTHER"
    },
    "color": "slate"
  }
};
