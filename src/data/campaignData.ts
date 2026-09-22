import { 
  CharacterProfile, 
  PromptTemplate, 
  EpisodeItem, 
  BehavioralPrinciple, 
  RoadmapStep,
  DistrictWasteData 
} from '../types';

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'arash',
    nameFa: 'آرش',
    nameEn: 'Arash',
    roleFa: 'کارشناس صمیمی و تحلیل‌گر میدانی کمپین قرار',
    age: '۳۰ تا ۳۵ سال',
    appearanceFa: 'مردی خوش‌برخورد، چهره‌ای آشنا و ملموس (اجتناب از چهره‌های مدلینگ فوق‌العاده بی‌نقص)، موهای مرتب و نگاه گرم، لبخند اطمینان‌بخش.',
    attireFa: 'پلوشرت باکیفیت یا بافت سبک به رنگ سبز زمردی با خرج‌کار سرمه‌ای یا خاکی روشن، بدون زرق و برق افراطی.',
    colorPalette: [
      { name: 'سبز زمردی / پسته ای', hex: '#059669', psychology: 'میانبر ناخودآگاه مغز برای تداعی طبیعت، سرزندگی و پاکی محیط‌زیست' },
      { name: 'سرمه‌ای رسمی', hex: '#1E293B', psychology: 'نماد قانون، ثبات، اقتدار نرم و یک نهاد رسمی قابل‌اعتماد' },
      { name: 'خاکی روشن', hex: '#E2E8F0', psychology: 'حس خاکی بودن، سادگی و دسترسی آسان برای طبقات مختلف جامعه' }
    ],
    voiceNotesFa: 'تنالیته بم گرم، لحن نیمی غیررسمی و نیمی حرفه‌ای، ادای شمرده واژه‌ها با انرژی دوستانه و مثبت.',
    referencePromptEn: 'Professional Iranian male host named Arash, 32 years old, friendly warm expression, realistic human face, approachable and modest appearance, wearing a refined emerald green polo shirt with subtle dark navy accents, sitting in a modern warm-lit talkshow studio, soft cinematic studio lighting, shot on 85mm lens, f/1.8, 8k resolution, photorealistic, natural skin texture with subtle pores, avoiding plastic doll perfection --ar 16:9 --style raw',
    avoidUncannyPromptEn: 'no plastic skin, no CGI doll look, no artificial oversaturated eyes, no glossy airbrushed skin, no western supermodel face, no uncanny valley artifacts'
  },
  {
    id: 'maryam',
    nameFa: 'مریم',
    nameEn: 'Maryam',
    roleFa: 'کارشناس رسمی و مدیر راهبری آگاهی شهری کمپین قرار',
    age: 'حدود ۳۰ سال',
    appearanceFa: 'خانمی باوقار و آراسته، پوشش کاملاً رسمی و شیک، چهره‌ای متین و با آرامش بالا، نگاه متمرکز و مقتدر اما صمیمی.',
    attireFa: 'کت یا مانتوی رسمی سرمه‌ای خوش‌دوخت به همراه روسری یا شال هماهنگ با تناژ سبز پسته‌ای ملایم یا زیتونی.',
    colorPalette: [
      { name: 'سرمه‌ای فاخر', hex: '#0F172A', psychology: 'تثبیت اعتبار نهادی کمپین، قانون‌مداری و برنامه‌ریزی شهری' },
      { name: 'سبز پسته‌ای ملایم', hex: '#10B981', psychology: 'ایجاد تعادل روانی، القای امید و حس مشارکت مدنی سازنده' }
    ],
    voiceNotesFa: 'صدای رسا، شفاف و مطمئن با فراز و فرودهای حرفه‌ای، ریتم آرام‌بخش و انتقال حس تخصص و تسلط مدیریتی.',
    referencePromptEn: 'Professional Iranian female presenter named Maryam, 30 years old, highly dignified and warm demeanor, wearing an elegant dark navy formal blazer and a stylish soft pistachio green headscarf, seated in a high-end talkshow studio, natural soft key lighting, 85mm lens, photorealistic human features, natural realistic skin tones and micro-expressions, 8k resolution --ar 16:9 --style raw',
    avoidUncannyPromptEn: 'no overly polished wax museum face, no exaggerated makeup, no cartoonish look, no uncanny valley symmetry, no blurry artifacts'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    titleFa: 'خلق لنگر بصری و فریز چهره‌ها (Visual Anchor Locking)',
    toolFa: 'Midjourney v6 / Nano Banana Pro / Stable Diffusion',
    timelineFa: 'هفته اول (۳ روز)',
    descriptionFa: 'تولید شات پایه باکیفیت و استخراج تصاویر مرجع (Reference Images) برای قفل کردن فرم موها، چین و چروک‌های طبیعی صورت، رنگ پوست و بافت لباس‌ها برای حفظ پیوستگی بصری در کل ۱۰ قسمت.',
    deliverablesFa: [
      'تصاویر مرجع زاویه مستقیم، نیم‌رخ و سه‌رخ آرش و مریم',
      'پالت رنگی لباس‌ها (سبز زمردی و سرمه‌ای رسمی)',
      'سند راهنمای چهره و لباس برای تطبیق هوش مصنوعی'
    ],
    riskMitigationFa: 'برای فرار از «دره وهم‌انگیز» (Uncanny Valley)، از ساخت چهره‌های مدلینگ فوق‌العاده و بی‌نقص پرهیز شده و چهره‌هایی صمیمی و باورپذیر انتخاب می‌شوند.',
    techStack: ['Midjourney', 'Nano Banana Pro', 'Photoshop AI']
  },
  {
    id: 'step-2',
    stepNumber: 2,
    titleFa: 'متحرک‌سازی و کنترل فریم در Google Flow',
    toolFa: 'Google Flow / Luma Dream Machine / Runway Gen-3',
    timelineFa: 'هفته اول تا دوم (۵ روز)',
    descriptionFa: 'اعمال فریم مرجع روی مدل ویدیویی و بهره‌گیری از تکنیک «کنترل فریم شروع و پایان» (Start/End Frame Anchoring) جهت جلوگیری از پرش‌های دست و بدن بین کات‌ها، به همراه زاویه‌بندی سینمایی دوربین.',
    deliverablesFa: [
      'شات‌های مدیوم دو نفره (Medium 2-Shot)',
      'نماهای روی شانه (Over-the-shoulder)',
      'کلوزآپ‌های تاکیدی از زبان بدن و حرکات دست کارشناس'
    ],
    riskMitigationFa: 'قفل کردن فریم پایانی برداشت ۱ به عنوان فریم آغازین برداشت ۲ تا پرش ناگهانی دست از روی میز به هوا رخ ندهد.',
    techStack: ['Google Flow', 'Runway Gen-3', 'Camera Motion Directing']
  },
  {
    id: 'step-3',
    stepNumber: 3,
    titleFa: 'سنتز احساسی صدا و لحن بومی با ElevenLabs',
    toolFa: 'ElevenLabs Voice Engine / Custom Persian Fine-tune',
    timelineFa: 'هفته دوم (۳ روز)',
    descriptionFa: 'تولید فایل‌های صوتی فارسی بر اساس سناریوی ۱۰ قسمتی با لحن «نیمی غیررسمی، نیمی حرفه‌ای»، تنظیم مکث‌ها، تأکیدهای هیجانی و حس صمیمیت بدون حس روباتیک.',
    deliverablesFa: [
      '۱۰ فایل صوتی تفکیک‌شده برای کاراکتر آرش',
      '۱۰ فایل صوتی تفکیک‌شده برای کاراکتر مریم',
      'میکس نریشن و افکت‌های صوتی محیطی استودیو'
    ],
    riskMitigationFa: 'تنظیم دقیق سرعت کلام (Speech Rate) و اضافه کردن مکث‌های طبیعی (Natural Pauses) برای القای گپ‌وگفت زنده.',
    techStack: ['ElevenLabs', 'Audacity / Premiere Pro', 'Persian Phonetics']
  },
  {
    id: 'step-4',
    stepNumber: 4,
    titleFa: 'سینک لب و شبیه‌سازی ریزعضلات با LivePortrait',
    toolFa: 'LivePortrait / HeyGen Video Lip-Sync',
    timelineFa: 'هفته دوم تا سوم (۴ روز)',
    descriptionFa: 'تطبیق آواهای پیچیده زبان فارسی روی عضلات ریز صورت (Micro-muscles)، حرکات مردمک چشم، پلک زدن طبیعی و تکان‌های سر همگام با ریتم کلام.',
    deliverablesFa: [
      '۱۰ ویدیوی نهایی همگام‌شده لب و چهره',
      'تطبیق کامل حرکات دهان با سیلاب‌های کلمات فارسی',
      'حرکات طبیعی پلک و گردن متناسب با وزن کلمات'
    ],
    riskMitigationFa: 'استفاده از الگوریتم محاسبه ریزعضلات LivePortrait برای جلوگیری از حالت دهان شناور یا لرزش فریم.',
    techStack: ['LivePortrait', 'HeyGen', 'Motion Tracking']
  },
  {
    id: 'step-5',
    stepNumber: 5,
    titleFa: 'طراحی هوشمندانه صحنه، استعاره سطل‌های شفاف و تدوین',
    toolFa: 'Adobe Premiere / After Effects / DaVinci Resolve',
    timelineFa: 'هفته سوم (۴ روز)',
    descriptionFa: 'تدوین ریتمیک ویدیوها، درج زیرنویس‌های پویا، و حفظ عناصر استعاری صحنه نظیر «سطل‌های بازیافت آکریلیک شفاف» به عنوان پیام ناخودآگاه ارزش‌گذاری بر پسماند به جای پنهان‌سازی در کیسه سیاه.',
    deliverablesFa: [
      '۱۰ ویدیوی فول‌اچ‌دی و مربعی/عمودی برای اینستاگرام، آپارات و تلگرام',
      'زیرنویس‌های داینامیک با فونت وزیرمتن و هایلایت کلیدواژه‌ها',
      'تراکرهای موشن گرافیک نمایش امتیاز، سبد مشارکت و ساعات حضور سفیر'
    ],
    riskMitigationFa: 'رعایت ریتم بصری سریع و کات‌های پویا هر ۳ تا ۵ ثانیه برای حفظ حداکثری قلاب مخاطب (Hook).',
    techStack: ['Premiere Pro', 'After Effects', 'Dynamic Subtitles']
  },
  {
    id: 'step-6',
    stepNumber: 6,
    titleFa: 'پیوست اقتصاد رفتاری: سفیران سبز، امتیاز فوری و سبد خرید',
    toolFa: 'Gharar Citizen App Backend & Gamification Engine',
    timelineFa: 'موازی با انتشار محتوا',
    descriptionFa: 'حذف کامل اصطکاک تحویل پسماند با ارسال سفیران سبز به درب منازل در زمان دلخواه شهروند، و تحریک سیستم دوپامین با پاداش فوری ملموس (بن خرید سبد مشارکت و قهوه رایگان).',
    deliverablesFa: [
      'سیستم ثبت رکورد پسماند و محاسبه آنی امتیاز',
      'گردش اعتبار خرید در فروشگاه‌های زنجیره‌ای و کافه‌ها',
      'نمایش نمودار ماهانه کاهش دورریز برای هر شهروند'
    ],
    riskMitigationFa: 'پاداش فوری به جای پاداش‌های انتزاعی ۵۰ سال بعد، طبق اصول اقتصاد رفتاری نرخ بازگشت کاربر را تا ۴۰۰٪ افزایش می‌دهد.',
    techStack: ['Behavioral Engine', 'Gharar Mobile App', 'Merchant Loyalty API']
  },
  {
    id: 'step-7',
    stepNumber: 7,
    titleFa: 'داشبورد کلان شهرداری و بهینه‌سازی ناوگان حمل',
    toolFa: 'Municipal Macro Analytics & Fleet Heatmap System',
    timelineFa: 'فاز پایدار عملیات شهری',
    descriptionFa: 'تبدیل داده‌های خرد تولید زباله شهروندان به نقشه‌های حرارتی برای مدیران شهری جهت بهینه‌سازی مصرف سوخت ناوگان جمع‌آوری و طراحی کمپین‌های متمرکز محله‌محور.',
    deliverablesFa: [
      'نقشه حرارتی زباله به تفکیک مناطق و روزهای هفته',
      'پیش‌بینی حجم پسماند تفکیکی و صرفه‌جویی در سوخت کامیون‌ها',
      'گزارش‌های سیاستی برای تصمیم‌گیری شهرداران مناطق'
    ],
    riskMitigationFa: 'گذار از رویکرد واکنش‌گرای پرهزینه به مدیریت هوشمند پیشگیرانه و مبتنی بر شواهد داده‌ای.',
    techStack: ['GIS Heatmap', 'Fleet Route AI', 'City Management BI']
  },
  {
    id: 'step-8',
    stepNumber: 8,
    titleFa: 'فرهنگ‌سازی نسل پایه: تئاترهای عروسکی و کاردستی در مدارس',
    toolFa: 'Educational Outreach & Interactive Workshops',
    timelineFa: 'مستمر در مدارس و مهدکودک‌ها',
    descriptionFa: 'پیوند تکنولوژی پیشرفته لبه دانش با تجربه لمسی و حسی کودکان از طریق نمایش تئاتر و کارگاه ساخت کاردستی با اقلام بازیافتی برای نهادینه‌سازی پایدار فرهنگ بازیافت در خانه.',
    deliverablesFa: [
      'سناریوی تئاتر نمایشی کاراکترهای کودک با تم تفکیک',
      'کیت کاردستی مدارس با مقوا، درب بطری و بطری تمیز',
      'کارت همیار سبز و سفیر کوچک قرار در خانواده'
    ],
    riskMitigationFa: 'تغییر فرهنگ پایدار از پایین به بالا رخ می‌دهد؛ کودکان آموزش‌دیده بزرگ‌ترین ناظران تفکیک در منازل خواهند بود.',
    techStack: ['Kids Theater Kit', 'School Workshop Guides', 'Green Ambassador Badge']
  }
];

export const PROMPTS_VAULT: PromptTemplate[] = [
  {
    id: 'mj-arash',
    category: 'character',
    titleFa: 'طراحی پرتره مرجع آرش (مجری آقا)',
    tool: 'Midjourney v6 / Nano Banana Pro',
    descriptionFa: 'پرامپت ساخت لنگر تصویری چهره آرش با تاکید بر صمیمیت، اجتناب از چهره‌های مدلینگ مصنوعی و لباس با روانشناسی رنگ سبز زمردی.',
    promptText: 'Ultra-realistic medium portrait of an approachable Iranian male environmental expert named Arash, 33 years old, friendly authentic smile, natural modest haircut, wearing an emerald green textured knit polo shirt with subtle dark navy accents, seated in a warm contemporary talk show studio, realistic human skin texture with subtle pores, natural cinematic lighting, shot on Sony A7R V 85mm f/1.8 lens, high detail, photorealistic, avoiding uncanny valley perfection --ar 16:9 --style raw --v 6.0',
    negativePrompt: 'blurry, wax face, 3d render, plastic skin, anime, western model, oversaturated, deformed eyes, extra limbs, artificial glowing eyes',
    suggestedSettings: {
      'Aspect Ratio': '16:9',
      'Stylize': '50',
      'Model': 'Midjourney v6.0',
      'Lighting': 'Soft key studio lights'
    },
    tags: ['کاراکتر', 'آرش', 'میدجرنی', 'لنگر بصری']
  },
  {
    id: 'mj-maryam',
    category: 'character',
    titleFa: 'طراحی پرتره مرجع مریم (مجری خانم)',
    tool: 'Midjourney v6 / Nano Banana Pro',
    descriptionFa: 'پرامپت ساخت لنگر تصویری چهره مریم با پوشش رسمی و آراسته، مانتو یا کت سرمه‌ای و روسری سبز پسته‌ای ملایم، انتقال حس اقتدار نرم و اعتبار نهادی.',
    promptText: 'Ultra-realistic medium portrait of an Iranian female environmental specialist named Maryam, 30 years old, highly composed, professional and dignified expression, wearing an elegant dark navy formal tailored blazer and a soft pistachio green headscarf, seated in a modern warm broadcasting studio, natural soft warm studio lighting, shot on 85mm lens, f/2.0, genuine skin texture, realistic micro-expressions, authentic Iranian cultural attire, 8k resolution --ar 16:9 --style raw --v 6.0',
    negativePrompt: 'unrealistic makeup, plastic airbrushed skin, CGI mannequin look, cartoon, exaggerated facial features, asymmetric eyes, distorted hands',
    suggestedSettings: {
      'Aspect Ratio': '16:9',
      'Stylize': '50',
      'Model': 'Midjourney v6.0',
      'Vibe': 'Authoritative yet approachable'
    },
    tags: ['کاراکتر', 'مریم', 'میدجرنی', 'پوشش رسمی']
  },
  {
    id: 'mj-studio',
    category: 'studio',
    titleFa: 'طراحی استودیو و استعاره سطل‌های شفاف',
    tool: 'Midjourney v6 / SDXL',
    descriptionFa: 'پرامپت دکور استودیوی گفتگو به همراه سطل‌های بازیافت آکریلیک شفاف که اقلام تفکیک‌شده تمیز در آن دیده می‌شوند به عنوان نماد ثروت و ارزش پسماند.',
    promptText: 'A sophisticated contemporary interview studio set for an eco-tech talk show, featuring two hosts sitting in modern comfortable chairs facing each other. In the background and subtle foreground, there are elegant transparent acrylic minimalist recycling bins displaying clean, neatly sorted plastics and paperboard, communicating clarity and asset value. Warm oak wood paneling, deep navy and pistachio green aesthetic accents, soft diffused cinematic lighting, depth of field, high-end broadcasting aesthetic --ar 16:9 --v 6.0',
    negativePrompt: 'messy garbage, dirty trash bags, dark moody horror, industrial junkyard, cluttered messy studio',
    suggestedSettings: {
      'Aspect Ratio': '16:9',
      'Color Tone': 'Warm wood + Navy + Emerald green',
      'Key Prop': 'Transparent recycling bins'
    },
    tags: ['دکور استودیو', 'سطل شفاف', 'استعاره بصری']
  },
  {
    id: 'flow-two-shot',
    category: 'flow_motion',
    titleFa: 'شات دو نفره متوالی در Google Flow (کنترل فریم شروع و پایان)',
    tool: 'Google Flow / Runway Gen-3',
    descriptionFa: 'فرمان حرکت دوربین و کاراکترها در گوگل فلو با قفل کردن پوزیشن کاراکترها برای جلوگیری از هرگونه تغییر ناگهانی لباس یا وضعیت فیزیکی.',
    promptText: 'Cinematic medium two-shot of Arash and Maryam in a fluid conversation in the studio. Arash gently gestures with his right hand while explaining a point, Maryam listens attentively with subtle nods and a warm confident smile. Smooth slow camera push-in (dolly in), natural eye contact, consistent attire and lighting matching reference images, zero visual jitter, lock end-frame for seamless scene transition.',
    negativePrompt: 'rapid morphing, hand glitches, button disappearing, clothes color change, warping faces',
    suggestedSettings: {
      'Motion Strength': '3 / 10',
      'Camera': 'Slow Dolly In',
      'Frame Lock': 'End-to-Start Stitching ON'
    },
    tags: ['گوگل فلو', 'حرکت پیوسته', 'شات دونفره']
  },
  {
    id: 'flow-over-shoulder',
    category: 'flow_motion',
    titleFa: 'نمای روی شانه (Over-The-Shoulder) سینمایی',
    tool: 'Google Flow / Luma AI',
    descriptionFa: 'نمای سینمایی از پشت شانه آرش در حال نگاه به مریم حین توضیح مزایای سامانه قرار برای ثبت ریتم تلویزیونی حرفه‌ای.',
    promptText: 'Over-the-shoulder shot looking past Arash’s shoulder toward Maryam who is clearly articulating with natural conversational facial micro-movements, shallow depth of field, soft background studio blur, professional TV documentary cinematography, 24fps motion cadence.',
    negativePrompt: 'blurry subject, sudden zoom, face distortion, temporal flickering',
    suggestedSettings: {
      'Depth of Field': 'f/2.2 Shallow',
      'Pacing': 'Deliberate conversation speed',
      'Frame Rate': '24 fps'
    },
    tags: ['حرکت دوربین', 'روی شانه', 'کارگردانی']
  },
  {
    id: 'eleven-arash',
    category: 'elevenlabs',
    titleFa: 'فرمول تولید صدای آرش در ElevenLabs',
    tool: 'ElevenLabs Voice Design',
    descriptionFa: 'تنظیمات و دستور متنی پرامپت صدا برای تولید صدایی مردانه، جوان، پرانرژی و به دور از لحن خشک اخبار رسمی.',
    promptText: 'Warm, engaging middle-aged Iranian male voice, speaks fluent Persian with a friendly urban Tehran accent. Balance: 50% conversational warmth, 50% professional advisory authority. Natural pauses between sentences, clear diction with an inviting smile heard in the vocal timbre.',
    suggestedSettings: {
      'Stability': '0.62',
      'Similarity': '0.78',
      'Style Exaggeration': '0.12',
      'Speaker Boost': 'Enabled'
    },
    tags: ['صدا', 'آرش', 'ElevenLabs', 'فارسی']
  },
  {
    id: 'eleven-maryam',
    category: 'elevenlabs',
    titleFa: 'فرمول تولید صدای مریم در ElevenLabs',
    tool: 'ElevenLabs Voice Design',
    descriptionFa: 'تنظیمات و دستور صوتی برای صدای مریم؛ رسا، آرام‌بخش، قابل‌اتکا و الهام‌بخش برای شهروندان.',
    promptText: 'Confident, articulate Iranian female speaker in her early 30s. Warm and authoritative tone, impeccable Persian articulation, conveying reliability and institutional empathy. Well-metered speech cadence without rush or monotony.',
    suggestedSettings: {
      'Stability': '0.68',
      'Similarity': '0.82',
      'Style Exaggeration': '0.08',
      'Speaker Boost': 'Enabled'
    },
    tags: ['صدا', 'مریم', 'ElevenLabs', 'اعتبار نهادی']
  },
  {
    id: 'liveportrait-sync',
    category: 'liveportrait',
    titleFa: 'تنظیمات همگام‌سازی عضلات چهره در LivePortrait',
    tool: 'LivePortrait / HeyGen',
    descriptionFa: 'پیکربندی پارامترهای مپینگ آواهای فارسی روی ماهیچه‌های دهان، حرکت مردمک‌ها و تکان‌های طبیعی سر.',
    promptText: 'Source image: High-res Arash/Maryam reference anchor. Driving audio: ElevenLabs Persian speech file. Parameters: Retarget eye gaze towards interviewer, set lip-sync smoothness factor to 0.85 to prevent jitter, enable subtle natural head tilts on stressed syllables, preserve facial skin micro-wrinkles.',
    suggestedSettings: {
      'Lip Motion Weight': '1.0',
      'Head Motion Scale': '0.4',
      'Eye Blink Rate': '0.3 per sec',
      'Expression Intensity': '0.75'
    },
    tags: ['لب‌سینک', 'LivePortrait', 'ریزعضلات', 'فارسی']
  }
];

export const EPISODES: EpisodeItem[] = [
  {
    id: 1,
    questionNumber: 1,
    titleFa: 'قرار چیست؟',
    coreQuestionFa: 'قرار چیست؟',
    coreAnswerFa: 'قرار یک سامانه هوشمند است که با هدف آموزش و ترویج فرهنگ تفکیک پسماند از مبدأ شکل گرفته است.',
    behavioralHookFa: 'تعریف هویت سامانه به عنوان یک «همراه آموزشی و فرهنگ‌ساز» نه صرفاً یک ماشین جمع‌آوری آشغال. شکستن چارچوب ذهنی قدیمی مخاطب.',
    scenePromptEn: 'Medium two-shot of Arash and Maryam in the warm studio. Arash holds an open, welcoming posture and poses the opening question with curiosity, Maryam responds with a confident smile.',
    keyTakeawayFa: 'قرار فقط جمع‌آوری زباله نیست، بلکه سامانه‌ای برای تغییر نگاه شهروند به پسماند است.',
    durationEstimate: '۴۵ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'سلام به همه همراهان عزیز. مریم جان، خیلی از همشهری‌ها می‌پرسن که این سامانه «قرار» که این روزها همه جا صحبتشه دقیقاً چیه؟',
        shotTypeFa: 'نمای مدیوم شات از آرش با لبخند و لحن صمیمی',
        actingNoteFa: 'دست‌ها روی میز با حالتی گشوده و کنجکاو، زبان بدن بدون تکلف.'
      },
      {
        speaker: 'maryam',
        textFa: 'سلام آرش عزیز و درود به همه شهروندان مسئولیت‌پذیر. ببینید، «قرار» یک سامانه هوشمند شهریه که با هدف اصلی آموزش و ترویج فرهنگ تفکیک پسماند از همون نقطه شروع، یعنی داخل خونه‌ها و از مبدأ شکل گرفته.',
        shotTypeFa: 'کات به نمای کلوزآپ مریم با نگاه متمرکز به دوربین و آرش',
        actingNoteFa: 'لحن شمرده، بیان کلمات کلیدی «هوشمند»، «آموزش» و «از مبدأ» با تاکید ملایم.'
      },
      {
        speaker: 'arash',
        textFa: 'پس یعنی ما اینجا با چیزی فراتر از ماشین‌های حمل زباله سنتی طرفیم!',
        shotTypeFa: 'نمای تو-شات (Two-Shot) با نمای پس‌زمینه سطل شفاف',
        actingNoteFa: 'تکان دادن سر به نشانه تایید و آماده‌سازی ذهن مخاطب برای سوال دوم.'
      }
    ]
  },
  {
    id: 2,
    questionNumber: 2,
    titleFa: 'چرا قرار شکل گرفت؟',
    coreQuestionFa: 'چرا قرار شکل گرفت؟',
    coreAnswerFa: 'قرار شکل گرفت تا مردم را آگاه کند که خیلی از چیزهایی که ما هر روز دور می‌اندازیم، واقعاً ارزشمند هستند و می‌توانند دوباره به چرخه برگردند.',
    behavioralHookFa: 'تغییر مفهوم پسماند از «چیز کثیف و بی‌ارزش» به «سرمایه اقتصادی پایدار و حفظ محیط‌زیست».',
    scenePromptEn: 'Maryam points slightly towards the transparent display showing clean sorted recyclables, emphasizing value creation and economic sustainability.',
    keyTakeawayFa: 'اقلام دورریختنی یک ارزش اقتصادی پایدار دارند که با تفکیک درست حفظ می‌شوند.',
    durationEstimate: '۵۰ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'حالا سوالی که پیش میاد اینه که اصلاً چرا احساس نیاز شد که قرار متولد بشه؟ هدف اصلی پشت این ایده چی بوده؟',
        shotTypeFa: 'نمای روی شانه از آرش رو به مریم',
        actingNoteFa: 'لحن جویای حقیقت، شبیه به پرسش یک شهروند دغدغه‌مند.'
      },
      {
        speaker: 'maryam',
        textFa: 'قرار شکل گرفت تا یادآوری کنه که خیلی از چیزهایی که ما هر روز با بی‌توجهی دور می‌اندازیم، واقعاً مواد اولیه ارزشمندی هستند که می‌تونن به چرخه تولید و بازیافت برگردن.',
        shotTypeFa: 'مدیوم شات مریم با حرکت ظریف دست',
        actingNoteFa: 'انتقال حس دلسوزی و اشتیاق برای نجات سرمایه‌های ملی.'
      },
      {
        speaker: 'maryam',
        textFa: 'هدف ما اینه که مردم یاد بگیرن چه چیزهایی باارزشن، چطور تو خونه جداسازی کنن، و چطور با این کار علاوه بر حفظ محیط‌زیست، یک ارزش اقتصادی واقعی برای خودشون خلق کنن.',
        shotTypeFa: 'کلوزآپ چهره مریم با تماس چشمی مستقیم به دوربین',
        actingNoteFa: 'تاکید بر دو عبارت «ارزش اقتصادی پایدار» و «حفظ محیط‌زیست».'
      }
    ]
  },
  {
    id: 3,
    questionNumber: 3,
    titleFa: 'تفاوت قرار با سیستم‌های سنتی',
    coreQuestionFa: 'قرار چه تفاوتی با سیستم‌های سنتی جمع‌آوری زباله دارد؟',
    coreAnswerFa: 'هدف قرار صرفاً جمع‌آوری نیست؛ آموزش، آگاهی و مشاهده الگوی تولید پسماند توسط خود شهروند است.',
    behavioralHookFa: 'مواجهه شهروند با داده‌های شخصی ماهانه خود (Self-Reflection) برای اولین بار به جای رفتار ناآگاهانه ۹ شب کیسه سیاه.',
    scenePromptEn: 'Arash gestures comparing the old bag at the door method with a smart interactive phone screen showing monthly personal recycling metrics.',
    keyTakeawayFa: 'مشاهده الگوی شخصی زباله، گام اول اصلاح مصرف است.',
    durationEstimate: '۵۵ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'مریم جان، در ظاهر شاید یکی بگه خب اینم جمع‌آوری زباله است مثل روش‌های قبلی! قرار چه تفاوت ساختاری با سیستم‌های سنتی داره؟',
        shotTypeFa: 'نمای مدیوم دو نفره با زاویه دوربین پویا',
        actingNoteFa: 'طرح چالش‌برانگیز سوال برای از بین بردن قضاوت‌های اولیه.'
      },
      {
        speaker: 'maryam',
        textFa: 'تفاوت در همین نگاهه آرش جان. قرار صرفاً جمع‌آوری خشک نیست. در گام اول، آگاهی‌بخشی به فرده. در سیستم قرار، هر شهروند در طول زمان می‌تونه الگوی تولید پسماند خودش رو ببینه!',
        shotTypeFa: 'نمای کلوزآپ مریم همراه با گرافیک موشن شناور روی صفحه',
        actingNoteFa: 'انرژی بالا و شگفتی در لحن.'
      },
      {
        speaker: 'maryam',
        textFa: 'یعنی شما متوجه میشید این ماه چقدر پلاستیک یا کاغذ تولید کردید و با آموزش‌های قرار، گام‌به‌گام مصرفتون رو اصلاح می‌کنید. پس قرار یک سامانه آموزش، آگاهی، مشارکت و مدیریت هوشمنده.',
        shotTypeFa: 'نمای دونفره متوازن با پایان‌بندی روان',
        actingNoteFa: 'بیان شفاف تفاوت تفکر واکنشی سنتی با تفکر فعالانه قرار.'
      }
    ]
  },
  {
    id: 4,
    questionNumber: 4,
    titleFa: 'نحوه مشارکت شهروند (سفیران سبز)',
    coreQuestionFa: 'شهروند برای مشارکت در این طرح باید چه کار کند؟',
    coreAnswerFa: 'نصب اپلیکیشن، تعیین روز و ساعت دلخواه، و مراجعه سفیران سبز به درب منازل بدون نیاز به جابجایی شهروند.',
    behavioralHookFa: 'حذف کامل اصطکاک رفتاری (Zero Friction). مقایسه با سفارش آنلاین غذا به جای بردن گونی زباله به غرفه شهری دوردست.',
    scenePromptEn: 'Arash enthusiastically shows the simplicity of scheduling a pickup on a smartphone mock-up with Sabz Ambassadors arriving on time.',
    keyTakeawayFa: 'صفر کردن زحمت فیزیکی: سفیر سبز در زمان انتخابی شما جلوی درب منزل می‌آید.',
    durationEstimate: '۵۰ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'خیلی خب، این ایده فوق‌العاده است! اما عمل بهش چقدر راحته؟ یک شهروند عادی برای مشارکت باید چه مراحلی رو طی کنه؟',
        shotTypeFa: 'نمای مدیوم از آرش با حرکات روان و پرتحرک',
        actingNoteFa: 'پرسیدن سوال با دغدغه راحتی و سرعت عمل مردم امروزی.'
      },
      {
        speaker: 'maryam',
        textFa: 'فوق‌العاده ساده‌ست! هیچ نیازی به حمل بار یا رفتن به غرفه‌های دوردست نیست. کافیه اپلیکیشن قرار رو نصب کنید، روز و ساعتی که در منزل راحت هستید رو انتخاب کنید.',
        shotTypeFa: 'کلوزآپ مریم با لحن بسیار صمیمی و اطمینان‌بخش',
        actingNoteFa: 'تاکید بر راحتی و حذف استرس و زحمت.'
      },
      {
        speaker: 'maryam',
        textFa: 'در همون زمان دقیق، سفیران سبز کمپین قرار میان دم درب منزلتون و پسماند تفکیک‌شده رو تحویل می‌گیرن. یعنی با آسایش کامل از داخل خونه مشارکت می‌کنید.',
        shotTypeFa: 'نمای روی شانه با نمایش نمادین ساعت و درب خانه در تصویر',
        actingNoteFa: 'ایجاد لبخند رضایت در چهره هر دو مجری.'
      }
    ]
  },
  {
    id: 5,
    questionNumber: 5,
    titleFa: 'نحوه امتیازدهی و ثبت مشارکت',
    coreQuestionFa: 'نحوه امتیازدهی برای مشارکت شهروندان به چه صورت است؟',
    coreAnswerFa: 'با هر بار تحویل پسماند خشک، امتیاز بلافاصله در بخش امتیازهای حساب کاربری ثبت می‌شود و قابل دنبال کردن است.',
    behavioralHookFa: 'حلقه بازخورد مثبت و شفافیت آنی در کیف پول امتیازی برای تحریک تمایل به پیشرفت مداوم.',
    scenePromptEn: 'Points counter animation overlay triggering a rewarding micro-interaction on the studio screen, showing clear transparency.',
    keyTakeawayFa: 'مشاهده آنی نتیجه تلاش و رشد پله‌به‌پله امتیازها در کیف پول اپلیکیشن.',
    durationEstimate: '۴۵ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'شنیدم برای این مشارکت‌ها یک سیستم امتیازدهی هم طراحی شده. ماجرای این امتیازها چیه و چطور محاسبه میشن؟',
        shotTypeFa: 'نمای مدیوم شات آرش با لبخند مشتاقانه',
        actingNoteFa: 'کنجکاوی درباره منافع مستقیم کاربر.'
      },
      {
        speaker: 'maryam',
        textFa: 'دقیقاً آرش جان. در هر بار تحویل پسماند خشک به سفیر سبز، بلافاصله امتیاز مشارکت در حساب کاربری ثبت میشه و تو بخش «امتیازها» قابل رویت هست.',
        shotTypeFa: 'کلوزآپ مریم با اشاره به شفافیت سیستم',
        actingNoteFa: 'لحن دقیق و اطمینان‌بخش درباره حساب‌وکتاب شفاف.'
      },
      {
        speaker: 'maryam',
        textFa: 'به این ترتیب شهروند می‌تونه در طول زمان رشد مشارکت خودش رو رصد کنه و از این امتیازها در برنامه‌های جذاب کمپین استفاده کنه.',
        shotTypeFa: 'نمای دونفره با تایید سر آرش',
        actingNoteFa: 'پلی به سوی جوایز ملموس قسمت بعدی.'
      }
    ]
  },
  {
    id: 6,
    questionNumber: 6,
    titleFa: 'امتیازات ویژه و ارتقای ضریب پاداش',
    coreQuestionFa: 'آیا کمپین امتیازات ویژه دیگری هم برای مشارکت شهروندان در نظر گرفته است؟',
    coreAnswerFa: 'بله؛ تحویل منظم، تفکیک بدون خطا و معرفی کمپین به همسایه‌ها و دوستان ضریب امتیاز را افزایش می‌دهد.',
    behavioralHookFa: 'بازی‌وارسازی پیشرفته (Gamification Streaks & Virality) برای تبدیل یک رفتار اتفاقی به یک عادت هفتگی همیشگی و شبکه‌ای.',
    scenePromptEn: 'Maryam gestures counting the 3 pillars of bonus points: consistency streak, clean sorting accuracy, and neighborhood invitations.',
    keyTakeawayFa: 'نظم هفتگی و تفکیک باکیفیت‌تر، امتیاز را چند برابر می‌کند.',
    durationEstimate: '۵۰ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'این عالیه، اما آیا برای کسانی که خیلی منظم‌ترن یا دوستانشون رو هم دعوت می‌کنن امتیاز ویژه‌ای هست؟',
        shotTypeFa: 'نمای مدیوم شات آرش با چشمان درخشان',
        actingNoteFa: 'لحن رقابتی و مشتاقانه یک کاربر فعال.'
      },
      {
        speaker: 'maryam',
        textFa: 'بله، دقیقاً برای همین برنامه‌ریزی شده! علاوه بر تحویل پسماند، مواردی مثل تحویل منظم و به‌موقع، معرفی کمپین قرار به همسایه‌ها و اقوام، و از همه مهم‌تر «تفکیک تمیز و دقیق» ضرایب امتیازی شما رو بالا می‌بره.',
        shotTypeFa: 'کلوزآپ مریم با حرکات دست برای شمارش ۳ عامل',
        actingNoteFa: 'تشویق به مسئولیت‌پذیری عمیق‌تر.'
      },
      {
        speaker: 'arash',
        textFa: 'یعنی هرچقدر باکیفیت‌تر تفکیک کنیم، سریع‌تر پاداش می‌گیریم. این واقعاً انگیزه ایجاد می‌کنه!',
        shotTypeFa: 'نمای دو نفره هماهنگ',
        actingNoteFa: 'تایید پرانرژی و ترغیب مخاطب.'
      }
    ]
  },
  {
    id: 7,
    questionNumber: 7,
    titleFa: 'استفاده از امتیازات (سبد مشارکت و کافه‌ها)',
    coreQuestionFa: 'از امتیازات به چه صورتی استفاده می‌شود؟',
    coreAnswerFa: 'خرید ماهانه در قالب «سبد مشارکت کمپین قرار» در فروشگاه‌های طرف قرارداد، و بُن‌های تخفیف در کافه‌ها و رستوران‌ها.',
    behavioralHookFa: 'تأمین نیاز سیستم دوپامین مغز با پاداش ملموس و فوری (قهوه یا سبد کالا) به جای وعده‌های انتزاعی و دوردست محیط‌زیستی.',
    scenePromptEn: 'Arash smiles holding a coffee cup or a participation shopping bag graphic, bringing the tangible psychological reward to life.',
    keyTakeawayFa: 'تبدیل کارتن و بطری پلاستیکی به قهوه رایگان یا تخفیف خرید سوپرمارکتی.',
    durationEstimate: '۵۵ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'خب مریم جان، می‌رسیم به جذاب‌ترین بخش ماجرا! این امتیازهایی که جمع کردیم دقیقاً کجا به دردمون می‌خوره و چطور نقد میشن؟',
        shotTypeFa: 'مدیوم شات آرش با لبخند شیطنت‌آمیز و جذاب',
        actingNoteFa: 'بیان کنجکاوی طبیعی عموم جامعه.'
      },
      {
        speaker: 'maryam',
        textFa: 'شهروندان می‌تونن امتیازهاشون رو به صورت ماهانه در قالب «سبد مشارکت قرار» در فروشگاه‌های زنجیره‌ای طرف قرارداد برای خرید مایحتاج استفاده کنن.',
        shotTypeFa: 'کلوزآپ مریم با نمایش نام فروشگاه‌ها و محصولات در افکت',
        actingNoteFa: 'ارائه با افتخار و وضوح بالا.'
      },
      {
        speaker: 'maryam',
        textFa: 'تازه یک خبر هیجان‌انگیزتر: بخشی از این امتیازها به شکل بُن‌های تخفیف کافه و رستوران در اختیارتون قرار می‌گیره تا لذت یک قهوه عصرگاهی مهمان کمپین قرار باشید!',
        shotTypeFa: 'نمای دو نفره شاداب با لبخند هر دو کارشناس',
        actingNoteFa: 'حس پاداش بی‌واسطه و شیرین.'
      },
      {
        speaker: 'arash',
        textFa: 'واقعاً شگفت‌انگیزه! بطری‌های دورریختنی تبدیل به قهوه و خرید ماهانه میشن. دیگه هیچ بهانه‌ای برای تفکیک نکردن نمی‌مونه!',
        shotTypeFa: 'کلوزآپ آرش رو به مخاطب',
        actingNoteFa: 'قلاب پایانی با ترغیب پرقدرت به اقدام.'
      }
    ]
  },
  {
    id: 8,
    questionNumber: 8,
    titleFa: 'اهمیت داده‌ها در اصلاح الگوی مصرف خانواده‌ها',
    coreQuestionFa: 'چرا اطلاعات تولید پسماند برای قرار مهم است؟',
    coreAnswerFa: 'چون تا ندانیم چه مقدار و چه نوع پسماندی تولید می‌کنیم، نمی‌توانیم برای کاهش و مدیریت درست آن برنامه‌ریزی کنیم.',
    behavioralHookFa: 'تغییر فرهنگ مصرف از ریشه با ایجاد خودآگاهی مبتنی بر شواهد عینی (Personal Waste Footprint).',
    scenePromptEn: 'Maryam explains how self-awareness of monthly waste volume transforms consumer purchasing habits from the root.',
    keyTakeawayFa: 'شناخت الگوی مصرف، آغازگر کنترل هزینه‌های خانواده و کاهش پسماند است.',
    durationEstimate: '۵۰ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'تو توضیحات قبلی گفتی که اطلاعات تولید پسماند ثبت میشه. چرا ثبت این اطلاعات انقدر برای قرار حیاتیه؟',
        shotTypeFa: 'نمای مدیوم آرش در حال تفکر',
        actingNoteFa: 'لحن تحلیلی‌تر و عمیق‌تر.'
      },
      {
        speaker: 'maryam',
        textFa: 'چون یک اصل طلایی وجود داره: چیزی که اندازه گرفته نشه، هرگز مدیریت نمیشه! اگر ندونیم در ماه چقدر زباله تولید می‌کنیم، چطور می‌خوایم اصلاحش کنیم؟',
        shotTypeFa: 'کلوزآپ مریم با بیان قاطع و منطقی',
        actingNoteFa: 'انتقال یک بینش عمیق و منطقی.'
      },
      {
        speaker: 'maryam',
        textFa: 'در قرار، هر شهروند می‌فهمه بیشتر چه جنسی از پسماند تولید می‌کنه. بعد با راهکارهای قرار، الگوی خریدش رو هوشمندانه‌تر می‌کنه تا دورریز کمتری داشته باشه.',
        shotTypeFa: 'نمای دو نفره متمرکز',
        actingNoteFa: 'ارتباط دادن داده‌ها به آرامش و سلامت اقتصادی خانواده.'
      }
    ]
  },
  {
    id: 9,
    questionNumber: 9,
    titleFa: 'داشبوردهای کلان برای شهرداری‌ها و مدیران شهری',
    coreQuestionFa: 'آیا اطلاعات جمع‌آوری‌شده برای مدیران شهری و شهرداری‌ها هم ارزشمند است؟',
    coreAnswerFa: 'بله، مدیران با داشبوردهای مدیریتی قرار متوجه حجم، نوع و زمان پیک پسماند مناطق شده و ناوگان و بودجه شهری را بهینه می‌کنند.',
    behavioralHookFa: 'ارتقای تصمیم‌گیری از حدس و گمان‌های سنتی به حکمرانی مبتنی بر کلان‌داده (Data-Driven Smart City Governance).',
    scenePromptEn: 'A holographic heat-map of urban districts showing waste density, enabling route optimization and emission reductions for city managers.',
    keyTakeawayFa: 'حذف سوخت بیهوده ناوگان حمل، مسیریابی بهینه و بیلبوردهای آموزشی متناسب با نیاز هر منطقه.',
    durationEstimate: '۵۵ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'این فوق‌العاده است! اما مریم جان، از نگاه کلان‌تر، این داده‌های خرد شهروندی چطور به کمک شهرداری‌ها و مدیران شهری میاد؟',
        shotTypeFa: 'نمای روی شانه با زاویه بازتر استودیو',
        actingNoteFa: 'طرح پرسش در سطح مدیریت استراتژیک کلان‌شهر.'
      },
      {
        speaker: 'maryam',
        textFa: 'اینجاست که معجزه کلان‌داده اتفاق میفته! مدیران شهری از طریق داشبوردهای تحلیلی قرار دقیقاً می‌بینن در هر محله چه حجمی از پسماند و در چه روزهایی تولید میشه.',
        shotTypeFa: 'کلوزآپ مریم با نمایش گرافیک نقشه حرارتی شهر',
        actingNoteFa: 'هیجان علمی از کاربرد هوش مصنوعی در حکمرانی.'
      },
      {
        speaker: 'maryam',
        textFa: 'مثلاً اگر محله الف سه‌شنبه‌ها کارتن بالایی داره و محله ب آخر هفته‌ها پلاستیک، شهرداری ناوگانش رو دقیقه به دقیقه بهینه می‌کنه و سوخت کمتری هدر میده.',
        shotTypeFa: 'نمای مدیوم دو نفره با تایید متقابل',
        actingNoteFa: 'ملموس کردن فواید مستقیم داده‌ها برای جیب بیت‌المال و هوای پاک شهر.'
      }
    ]
  },
  {
    id: 10,
    questionNumber: 10,
    titleFa: 'برنامه‌های مدارس، مهدکودک‌ها و آموزش نسل پایه',
    coreQuestionFa: 'آیا اپلیکیشن قرار صرفاً برای خانواده‌هاست؟',
    coreAnswerFa: 'خیر؛ قرار برای مدارس، مهدکودک‌ها و سازمان‌ها نیز تئاترهای عروسکی کودک و کارگاه‌های ساخت کاردستی بازیافتی تدارک دیده است.',
    behavioralHookFa: 'تغییر فرهنگی بین‌نسلی پایدار از مهدکودک تا خانه، با پیوند زدن هوش مصنوعی پیشرفته با متدهای لمسی و عاطفی کودکان.',
    scenePromptEn: 'Warm concluding scene showing Arash and Maryam introducing the colorful educational theater and craft kits for elementary schools and kindergartens.',
    keyTakeawayFa: 'فرهنگ‌سازی واقعی وقتی رخ می‌دهد که یک کودک ۵ ساله بازیافت را با شادی و نمایش یاد بگیرد.',
    durationEstimate: '۶۰ ثانیه',
    dialogues: [
      {
        speaker: 'arash',
        textFa: 'در سوال آخر می‌رسیم به نسل آینده. آیا قرار فقط برای گوشی بزرگ‌ترهاست یا برای بچه‌ها و مدارس هم برنامه‌ای دارید؟',
        shotTypeFa: 'مدیوم شات آرش با لبخندی از سر امیدواری و ذوق',
        actingNoteFa: 'لحن پرعاطفه معطوف به کودکان و آینده.'
      },
      {
        speaker: 'maryam',
        textFa: 'به هیچ وجه محدود به بزرگسالان نیست! اتفاقاً قلب تپنده کمپین قرار در مهدکودک‌ها و مدارسه. ما تئاترهای شاد عروسکی با موضوع تفکیک آماده کردیم تا بچه‌ها با خنده و بازی این مفهوم رو یاد بگیرن.',
        shotTypeFa: 'کلوزآپ مریم با صمیمیت و اشتیاق وافر',
        actingNoteFa: 'ارتباط چشمی مستقیم با مخاطبان خانواده.'
      },
      {
        speaker: 'maryam',
        textFa: 'در کنارش، کارگاه‌های ساخت کاردستی با مواد دورریختنی داریم. وقتی یک کودک ۵ ساله با کارتن تمیز کاردستی می‌سازه، در آینده بزرگ‌ترین سفیر پاکیزگی شهرمون خواهد بود.',
        shotTypeFa: 'نمای دو نفره صمیمی با لبخند هر دو کارشناس',
        actingNoteFa: 'انتقال حس تعهد و مسئولیت‌پذیری اجتماعی.'
      },
      {
        speaker: 'arash',
        textFa: 'چه پایانی زیباتر از این! پس همگی با هم، همین امروز «قرار» بعدی‌مون رو با زمین سبز و تمیزمون بگذاریم. تا دیداری دوباره خدانگهدار!',
        shotTypeFa: 'نمای لانگ شات پایانی از استودیو همراه با لوگوی سامانه قرار',
        actingNoteFa: 'بدرقه گرم مخاطبان با تکان دادن آرام دست.'
      }
    ]
  }
];

export const BEHAVIORAL_PRINCIPLES: BehavioralPrinciple[] = [
  {
    id: 'uncanny-valley',
    titleFa: 'گریز از دره وهم‌انگیز (Uncanny Valley)',
    subTitleFa: 'چرا آرش و مریم نباید سوپراستارهای بی‌نقص باشند؟',
    traditionalProblemFa: 'استفاده از چهره‌های مدلینگ فوق‌العاده بی‌نقص، پوست‌های پولیش‌شده عروسکی و لبخندهای فیک هوش مصنوعی باعث فعال شدن آلارم مغزی و احساس ترس ناخودآگاه مخاطب می‌شود.',
    ghararSolutionFa: 'آرش و مریم با سن ۳۰ تا ۳۵ سال، پوشش رسمی ولی در دسترس، بافت پوست طبیعی با منافذ واقعی و چهره‌های آشنای بومی طراحی شدند تا مخاطب حس کند با دو متخصص دلسوز همشهری گپ می‌زند.',
    psychologicalMechanismFa: 'تطابق روانشناختی با درک آشنایی (Familiarity Bias)؛ هرچه کاراکتر طبیعی‌تر و معمولی‌تر به نظر برسد، مقاومت ذهنی مخاطب سریع‌تر شکسته می‌شود.',
    quoteFromAnalysisFa: 'تیم سازنده خیلی هوشمندانه از کمال‌گرایی دوری کردن. اونا نخواستن مدل‌های سوپراستار بسازن، بلکه کاراکترهایی در دسترس، صمیمی و آشنا ساختن تا آلارم‌های ذهنی خاموش بشه.',
    iconName: 'UserCheck'
  },
  {
    id: 'color-psychology',
    titleFa: 'روانشناسی رنگ‌ها: سبز زمردی + سرمه‌ای رسمی',
    subTitleFa: 'ترکیب میانبر طبیعت با اقتدار نهادی نرم',
    traditionalProblemFa: 'کمپین‌های سنتی یا صرفاً از رنگ سبز اغراق‌آمیز استفاده می‌کنند (که حس نصیحت اکولوژیک می‌دهد) یا رنگ‌های خنثی اداری سرد که جذابیت ندارد.',
    ghararSolutionFa: 'سبز زمردی و پسته‌ای به عنوان میانبر ناخودآگاه مغز برای تداعی طبیعت پاک، در کنار سرمه‌ای تیره که نماد قانون، ثبات و یک نهاد رسمی معتبر است.',
    psychologicalMechanismFa: 'دوگانگی پیام ناخودآگاه: «ما دوستدار طبیعتیم (سبز)، اما در عین حال یک نهاد رسمی و ساختاریافته هستیم که می‌توانید روی حرفمان حساب کنید (سرمه‌ای)».',
    quoteFromAnalysisFa: 'وقتی این دو تا رنگ رو تن کاراکترها می‌شینه یه پیام پنهان مخابره می‌کنه که ما دوستدار طبیعتیم اما در عین حال یه نهاد رسمی و قابل اعتمادیم.',
    iconName: 'Palette'
  },
  {
    id: 'transparent-bins',
    titleFa: 'استعاره سطل‌های آکریلیک شفاف',
    subTitleFa: 'تبدیل زباله کثیف پنهان به دارایی ارزشمند خام',
    traditionalProblemFa: 'در فرهنگ شهری، زباله همیشه در کیسه‌های مشکی و ضخیم پنهان شده چون کثیف، خجالت‌آور و بی‌ارزش پنداشته می‌شود.',
    ghararSolutionFa: 'طراحی سطل‌های بازیافت در دکور استودیو با بدنه شفاف آکریلیک که مقوا و بطری‌های تمیز در آن با وضوح خودنمایی می‌کنند.',
    psychologicalMechanismFa: 'تغییر قاب‌بندی ذهنی (Cognitive Reframing): پسماند خشک تفکیک‌شده دیگر آشغال نیست، بلکه یک «سرمایه و متریال خام باارزش» است که استحقاق دیده شدن دارد.',
    quoteFromAnalysisFa: 'وقتی سطل شفاف می‌ذارید دو تا پیام داره: اول شفافیت سازمان، و دوم اینکه چیزی که تو این سطله دیگه زباله نیست، یه دارایی و ماده خام ارزشمنده.',
    iconName: 'Eye'
  },
  {
    id: 'friction-reduction',
    titleFa: 'به صفر رساندن اصطکاک رفتاری (Zero Friction)',
    subTitleFa: 'سفیران سبز دم در در برابر مشقت حمل بار به غرفه‌های دور',
    traditionalProblemFa: 'پیدا کردن غرفه بازیافت، بسته‌بندی، حمل کیسه‌ها در هوای سرد یا گرم و صف ایستادن، اصطکاک سنگینی ایجاد می‌کند که ۹۵٪ مردم را منصرف می‌سازد.',
    ghararSolutionFa: 'سفیران سبز قرار، درست مثل سفارش اینترنتی غذا در روز و ساعتی که خود شهروند تعیین می‌کند، جلوی درب منزل می‌آیند و بدون کوچک‌ترین زحمت بار را تحویل می‌گیرند.',
    psychologicalMechanismFa: 'قانون مسیر با کمترین مقاومت در اقتصاد رفتاری (Path of Least Resistance): با کاهش اصطکاک فیزیکی به صفر، انجام رفتار مطلوب راحت‌ترین گزینه ممکن می‌شود.',
    quoteFromAnalysisFa: 'اگه می‌خوای یه رفتار سخت رو تغییر بدی باید اصطکاک رو از بین ببری. اونا کل زحمت فیزیکی رو حذف کردن؛ مثل سفارش دادن غذا، سفیر میاد دم در.',
    iconName: 'Zap'
  },
  {
    id: 'dopamine-rewards',
    titleFa: 'پاداش فوری دوپامین در برابر وعده‌های انتزاعی',
    subTitleFa: 'قهوه رایگان و سبد خرید در برابر نجات ۵۰ سال بعد زمین!',
    traditionalProblemFa: 'شعار کلاسیک «تفکیک کن تا زمین ۵۰ سال بعد نجات پیدا کنه» برای مدار دوپامین مغز انسان خیلی دور و نامفهوم است و عادت پایدار نمی‌سازد.',
    ghararSolutionFa: 'پاداش ملموس، آنی و مستقیم: ثبت امتیاز بلافاصله در اپلیکیشن با امکان استفاده در بن تخفیف کافه‌ها (یک فنجان قهوه رایگان) یا خرید سوپرمارکت در سبد مشارکت.',
    psychologicalMechanismFa: 'گیمیفیکیشن و حلقه‌های پاداش فوری (Dopamine Feedback Loop): مغز پاداش آنی را می‌چشد و رفتار تفکیک زباله را به عنوان یک عادت لذت‌بخش بدون وقفه تکرار می‌کند.',
    quoteFromAnalysisFa: 'مغز ما برای پاداش‌های انتزاعی ۵۰ سال بعد سیم‌کشی نشده. وقتی با چند بطری قهوه رایگان می‌گیری، حلقه بازخورد مثبت شکل می‌گیره و تبدیل به عادتی ماندگار میشه.',
    iconName: 'Gift'
  },
  {
    id: 'macro-data',
    titleFa: 'معماری کلان‌داده شهری (Smart City BI)',
    subTitleFa: 'نقشه حرارتی محلات به جای حرکت کورکورانه ماشین‌ها در خیابان',
    traditionalProblemFa: 'گردش بیهوده کامیون‌های حمل زباله در تمام خیابان‌ها، هدررفت عظیم گازوئیل، فرسایش ناوگان و آلودگی صوتی و هوا.',
    ghararSolutionFa: 'داشبورد هوشمند شهرداری داده‌های ۱۰ هزار شهروند را جمع‌آوری کرده و هیت‌مپ پسماند هر محله در هر روز را محاسبه و مسیر ناوگان را هوشمندانه کوتاه‌تر می‌کند.',
    psychologicalMechanismFa: 'عبور از حکمرانی واکنشی به مداخله پیشگیرانه و مبتنی بر شواهد (Data-Driven Proactive Urban Governance).',
    quoteFromAnalysisFa: 'شهرداری تو داشبورد می‌بینه مثلاً محله الف سه‌شنبه‌ها کارتن داره اما محله ب آخر هفته‌ها پلاستیک؛ دیگه نیازی نیست ماشین‌ها کورکورانه بچرخند.',
    iconName: 'BarChart3'
  }
];

export const DISTRICT_WASTE_STATS: DistrictWasteData[] = [
  { districtName: 'منطقه ۱ (شمال)', cardboardKg: 420, plasticKg: 680, glassMetalKg: 310, peakDay: 'پنج‌شنبه و جمعه', fleetOptimizedPercent: 34, trend: 'up' },
  { districtName: 'منطقه ۲ (غرب تجاری)', cardboardKg: 890, plasticKg: 520, glassMetalKg: 240, peakDay: 'سه‌شنبه و چهارشنبه', fleetOptimizedPercent: 42, trend: 'up' },
  { districtName: 'منطقه ۳ (مرکز اداری)', cardboardKg: 1150, plasticKg: 410, glassMetalKg: 180, peakDay: 'دوشنبه‌ها', fleetOptimizedPercent: 48, trend: 'up' },
  { districtName: 'منطقه ۶ (دانشگاهی/فرهنگی)', cardboardKg: 780, plasticKg: 620, glassMetalKg: 290, peakDay: 'یکشنبه و چهارشنبه', fleetOptimizedPercent: 39, trend: 'stable' },
  { districtName: 'منطقه ۱۱ (مسکونی پرجمعیت)', cardboardKg: 510, plasticKg: 940, glassMetalKg: 460, peakDay: 'جمعه‌ها', fleetOptimizedPercent: 29, trend: 'up' }
];

export const KIDS_CAMPAIGN_INFO = {
  titleFa: 'برنامه مدارس، مهدکودک‌ها و آموزش نسل پایه',
  quoteFa: 'تغییر عادت یک فرد ۴۰ ساله سخته، اما فرهنگ‌سازی واقعی وقتی رخ میده که یک کودک ۵ ساله بازیافت رو با نمایش و بازی یاد بگیره.',
  modules: [
    {
      titleFa: 'تئاتر عروسکی شادی‌بخش «قرار سبز»',
      targetFa: 'کودکان ۳ تا ۸ سال در مهدکودک‌ها و پیش‌دبستانی‌ها',
      descriptionFa: 'نمایش موزیکال و قصه تعاملی با کاراکترهای عروسکی «بطری باهوش»، «کارتن دانا» و «سفیر سبز» که یاد می‌دهند چطور خانه‌ای تمیز و تفکیک‌شده داشته باشیم.',
      icon: 'Smile'
    },
    {
      titleFa: 'کارگاه خلاقیت و ساخت کاردستی با اقلام خشک',
      targetFa: 'دانش‌آموزان دبستان (۷ تا ۱۲ سال)',
      descriptionFa: 'آموزش ساخت گلدان‌های فانتزی از قوطی‌های بازیافتی، ماشین‌های متحرک با بطری و درب پلاستیکی، و جامدادی‌های مقوایی با هدایت مربیان متخصص.',
      icon: 'Scissors'
    },
    {
      titleFa: 'نشان و مدال «سفیر کوچک قرار در خانه»',
      targetFa: 'تمام دانش‌آموزان مشارکت‌کننده',
      descriptionFa: 'کودکان پس از گذراندن دوره، نشان رسمی «همیار سبز قرار» دریافت می‌کنند و به ناظران مشوق و دوست‌داشتنی تفکیک پسماند در میان اعضای خانواده تبدیل می‌شوند.',
      icon: 'Award'
    }
  ]
};
