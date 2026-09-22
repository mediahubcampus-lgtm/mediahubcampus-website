// Dictionnaire de traduction du site (FR / EN / ZH / ZH-TW / ES / AR).
//
// Chaque entrée est une clé stable (jamais affichée) associée à ses six
// versions. `useLanguage().t("cle")` retourne la version qui correspond à la
// langue active, avec repli automatique sur le français si une traduction
// venait à manquer.
//
// L'arabe est traduit en texte uniquement : le site reste en mise en page
// LTR (pas de `dir="rtl"`, pas de variantes Tailwind `rtl:`).
//
// Les noms propres (villes, régions, clients, personnes) ne sont
// volontairement pas traduits.

export type Locale = "fr" | "en" | "zh" | "zhTW" | "es" | "ar";

export interface TranslationEntry {
  fr: string;
  en: string;
  zh: string;
  zhTW: string;
  es: string;
  ar: string;
}

export const translations = {
  // ---------------------------------------------------------------------
  // Général / sélecteur de langue
  // ---------------------------------------------------------------------
  "lang.fr": { fr: "Français", en: "French", zh: "法语", zhTW: "法語", es: "Francés", ar: "الفرنسية" },
  "lang.en": { fr: "Anglais", en: "English", zh: "英语", zhTW: "英語", es: "Inglés", ar: "الإنجليزية" },
  "lang.zh": { fr: "Mandarin", en: "Mandarin", zh: "中文", zhTW: "中文(簡體)", es: "Mandarín", ar: "الماندرين" },
  "lang.zhTW": { fr: "Mandarin Traditionnel", en: "Traditional Mandarin", zh: "繁体中文", zhTW: "中文(繁體)", es: "Mandarín Tradicional", ar: "الماندرين التقليدي" },
  "lang.es": { fr: "Espagnol", en: "Spanish", zh: "西班牙语", zhTW: "西班牙語", es: "Español", ar: "الإسبانية" },
  "lang.ar": { fr: "Arabe", en: "Arabic", zh: "阿拉伯语", zhTW: "阿拉伯語", es: "Árabe", ar: "العربية" },
  "lang.switcherLabel": { fr: "Langue", en: "Language", zh: "语言", zhTW: "語言", es: "Idioma", ar: "اللغة" },

  // ---------------------------------------------------------------------
  // Header / navigation
  // ---------------------------------------------------------------------
  "nav.services": { fr: "Services", en: "Services", zh: "服务", zhTW: "服務", es: "Servicios", ar: "الخدمات" },
  "nav.cible": { fr: "Notre Cible", en: "Our Audience", zh: "目标受众", zhTW: "目標受眾", es: "Nuestro Público", ar: "جمهورنا المستهدف" },
  "nav.reseau": { fr: "Notre Réseau", en: "Our Network", zh: "我们的网络", zhTW: "我們的網絡", es: "Nuestra Red", ar: "شبكتنا" },
  "nav.references": { fr: "Références", en: "References", zh: "客户案例", zhTW: "客戶案例", es: "Referencias", ar: "مراجعنا" },
  "nav.simulateur": { fr: "Simulateur de Devis", en: "Quote Simulator", zh: "报价模拟器", zhTW: "報價模擬器", es: "Simulador de Presupuesto", ar: "محاكي عروض الأسعار" },
  "nav.contact": { fr: "Contact", en: "Contact", zh: "联系我们", zhTW: "聯繫我們", es: "Contacto", ar: "اتصل بنا" },
  "nav.plaquette": { fr: "Plaquette PDF", en: "PDF Brochure", zh: "PDF 手册", zhTW: "PDF 手冊", es: "Folleto PDF", ar: "كتيب PDF" },
  "nav.plaquetteMobile": { fr: "Télécharger la Plaquette", en: "Download the Brochure", zh: "下载手册", zhTW: "下載手冊", es: "Descargar el Folleto", ar: "تحميل الكتيب" },
  "nav.toggleMenu": { fr: "Ouvrir/fermer le menu", en: "Toggle menu", zh: "打开/关闭菜单", zhTW: "打開/關閉選單", es: "Abrir/cerrar el menú", ar: "فتح/إغلاق القائمة" },

  // ---------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------
  "footer.tagline": {
    fr: "La Régie des Universités, Campus, Écoles et Lycées",
    en: "The Advertising Network for Universities, Campuses, Schools and High Schools",
    zh: "面向大学、校园、学院与中学的专属广告平台",
    zhTW: "面向大學、校園、學院與中學的專屬廣告平台",
    es: "La Red Publicitaria de Universidades, Campus, Escuelas e Institutos",
    ar: "شبكة الإعلانات للجامعات والحرم الجامعي والمدارس والثانويات",
  },
  "footer.navigation": { fr: "Navigation", en: "Navigation", zh: "导航", zhTW: "導覽", es: "Navegación", ar: "التنقل" },
  "footer.documentation": { fr: "Documentation", en: "Documentation", zh: "文档", zhTW: "文件", es: "Documentación", ar: "الوثائق" },
  "footer.downloadBrochure": { fr: "Télécharger la Plaquette 2026-2027", en: "Download the 2026-2027 Brochure", zh: "下载 2026-2027 手册", zhTW: "下載 2026-2027 手冊", es: "Descargar el Folleto 2026-2027", ar: "تحميل كتيب 2026-2027" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved.", zh: "版权所有。", zhTW: "版權所有。", es: "Todos los derechos reservados.", ar: "جميع الحقوق محفوظة." },
  "footer.mentionsLegales": { fr: "Mentions légales", en: "Legal Notice", zh: "法律声明", zhTW: "法律聲明", es: "Aviso Legal", ar: "الإشعار القانوني" },
  "footer.politiqueConfidentialite": { fr: "Politique de confidentialité", en: "Privacy Policy", zh: "隐私政策", zhTW: "隱私政策", es: "Política de Privacidad", ar: "سياسة الخصوصية" },
  "footer.designedBy": { fr: "Conçu et développé par", en: "Designed and developed by", zh: "设计开发", zhTW: "設計開發", es: "Diseñado y desarrollado por", ar: "تصميم وتطوير" },

  // ---------------------------------------------------------------------
  // Hero
  // ---------------------------------------------------------------------
  "hero.title1": { fr: "La Régie des", en: "The Advertising Network for", zh: "大学、校园", zhTW: "大學、校園", es: "La Red Publicitaria de", ar: "شبكة الإعلانات لـ" },
  "hero.title2": { fr: "Universités & Campus", en: "Universities & Campuses", zh: "与学院的专属广告平台", zhTW: "與學院的專屬廣告平台", es: "Universidades y Campus", ar: "الجامعات والحرم الجامعي" },
  "hero.subtitle": {
    fr: "Touchez plus de **2,19 millions d'étudiants** dans **60 villes universitaires**",
    en: "Reach more than **2.19 million students** across **60 university cities**",
    zh: "覆盖**60 座大学城市**中超过**219 万名学生**",
    zhTW: "觸及**60 座大學城市**中超過**219 萬名學生**",
    es: "Llega a más de **2,19 millones de estudiantes** en **60 ciudades universitarias**",
    ar: "تواصل مع أكثر من **2.19 مليون طالب** في **60 مدينة جامعية**",
  },
  "hero.ctaBrochure": { fr: "Télécharger la Plaquette", en: "Download the Brochure", zh: "下载宣传手册", zhTW: "下載宣傳手冊", es: "Descargar el Folleto", ar: "تحميل الكتيب" },
  "hero.ctaSimulator": { fr: "Simulateur de Devis", en: "Quote Simulator", zh: "报价模拟器", zhTW: "報價模擬器", es: "Simulador de Presupuesto", ar: "محاكي عروض الأسعار" },

  // ---------------------------------------------------------------------
  // Statistics ("Nos Chiffres Clés")
  // ---------------------------------------------------------------------
  "statistics.heading.pre": { fr: "Nos", en: "Our", zh: "我们的", zhTW: "我們的", es: "Nuestras", ar: "أرقامنا" },
  "statistics.heading.highlight": { fr: "Chiffres Clés", en: "Key Figures", zh: "关键数据", zhTW: "關鍵數據", es: "Cifras Clave", ar: "الرئيسية" },
  "statistics.subtitle": {
    fr: "Le plus vaste réseau d'affichage au cœur des campus français",
    en: "The largest advertising network at the heart of French campuses",
    zh: "深入法国校园核心的最大广告网络",
    zhTW: "深入法國校園核心的最大廣告網絡",
    es: "La red publicitaria más grande en el corazón de los campus franceses",
    ar: "أكبر شبكة إعلانية في قلب الحرم الجامعي الفرنسي",
  },
  "stats.0.label": { fr: "Villes universitaires", en: "University cities", zh: "大学城市", zhTW: "大學城市", es: "Ciudades universitarias", ar: "مدن جامعية" },
  "stats.1.label": { fr: "Établissements", en: "Institutions", zh: "合作院校", zhTW: "合作院校", es: "Instituciones", ar: "مؤسسات" },
  "stats.2.label": { fr: "Étudiants atteints", en: "Students reached", zh: "覆盖学生数", zhTW: "覆蓋學生數", es: "Estudiantes alcanzados", ar: "طلاب تم الوصول إليهم" },

  // ---------------------------------------------------------------------
  // Services
  // ---------------------------------------------------------------------
  "services.heading.pre": { fr: "Nos", en: "Our", zh: "我们的", zhTW: "我們的", es: "Nuestros", ar: "" },
  "services.heading.highlight": { fr: "Services", en: "Services", zh: "服务", zhTW: "服務", es: "Servicios", ar: "خدماتنا" },
  "services.subtitle": {
    fr: "Des solutions complètes pour toucher la cible étudiante",
    en: "Complete solutions to reach the student audience",
    zh: "全方位触达学生群体的解决方案",
    zhTW: "全方位觸及學生群體的解決方案",
    es: "Soluciones completas para llegar al público estudiantil",
    ar: "حلول متكاملة للوصول إلى الجمهور الطلابي",
  },
  "services.affichage.title": { fr: "Affichage Universitaire", en: "University Poster Advertising", zh: "大学海报广告", zhTW: "大學海報廣告", es: "Publicidad en Carteles Universitarios", ar: "الإعلانات الملصقة الجامعية" },
  "services.affichage.description": {
    fr: "Le plus vaste réseau d'affichage au cœur des universités, campus, lycées et lieux de vie étudiants. Plus de 2,19M d'étudiants touchés, 100% étudiant.",
    en: "The largest poster network at the heart of universities, campuses, high schools and student living spaces. Over 2.19M students reached, 100% student audience.",
    zh: "深入大学、校园、高中及学生生活场所核心的最大海报广告网络。覆盖超过 219 万名学生,100% 精准触达学生群体。",
    zhTW: "深入大學、校園、高中及學生生活場所核心的最大海報廣告網絡。覆蓋超過 219 萬名學生,100% 精準觸及學生群體。",
    es: "La red de carteles más grande en el corazón de universidades, campus, institutos y espacios de vida estudiantil. Más de 2,19M de estudiantes alcanzados, 100% público estudiantil.",
    ar: "أكبر شبكة إعلانات ملصقة في قلب الجامعات والحرم الجامعي والثانويات وأماكن الحياة الطلابية. أكثر من 2.19 مليون طالب تم الوصول إليهم، 100% جمهور طلابي.",
  },
  "services.scolaire.title": { fr: "Affichage Scolaire", en: "High School Advertising", zh: "中学广告", zhTW: "中學廣告", es: "Publicidad en Institutos", ar: "إعلانات المدارس الثانوية" },
  "services.scolaire.description": {
    fr: "Réseau Lycée pour toucher lycéens et professeurs. Enseignants partenaires, lycées à la carte, profils précis.",
    en: "High School network to reach students and teachers. Partner teachers, à la carte schools, precise targeting.",
    zh: "覆盖中学生与教师的中学网络。合作教师资源、可定制学校清单、精准人群定位。",
    zhTW: "覆蓋中學生與教師的中學網絡。合作教師資源、可客製化學校清單、精準人群定位。",
    es: "Red de Institutos para llegar a estudiantes y profesores. Profesores asociados, selección de centros a la carta, segmentación precisa.",
    ar: "شبكة المدارس الثانوية للوصول إلى الطلاب والمعلمين. معلمون شركاء، مدارس حسب الطلب، استهداف دقيق.",
  },
  "services.mediatables.title": { fr: "MédiaTables", en: "MediaTables", zh: "餐桌媒体", zhTW: "餐桌媒體", es: "MédiaTables", ar: "ميديا الطاولات" },
  "services.mediatables.description": {
    fr: "12 000 tables, 800 établissements, 50 min d'exposition. 91% des Français fréquentent les terrasses.",
    en: "12,000 tables, 800 venues, 50 min of exposure. 91% of French people visit terraces.",
    zh: "12,000 张餐桌,800 家场所,平均曝光 50 分钟。91% 的法国人常去露天座位区。",
    zhTW: "12,000 張餐桌,800 家場所,平均曝光 50 分鐘。91% 的法國人常去露天座位區。",
    es: "12.000 mesas, 800 establecimientos, 50 min de exposición. El 91% de los franceses frecuenta las terrazas.",
    ar: "12,000 طاولة، 800 منشأة، 50 دقيقة من الظهور. 91% من الفرنسيين يترددون على التراسات.",
  },
  "services.event.title": { fr: "Événementiel", en: "Events", zh: "活动营销", zhTW: "活動行銷", es: "Eventos", ar: "الفعاليات" },
  "services.event.description": {
    fr: "Opérations terrain, street marketing, sampling, jeux-concours et activations digitales sur campus.",
    en: "Field operations, street marketing, sampling, competitions and digital activations on campus.",
    zh: "校园实地推广、街头营销、产品试用、抽奖活动及数字化互动。",
    zhTW: "校園實地推廣、街頭行銷、產品試用、抽獎活動及數位化互動。",
    es: "Operaciones de campo, marketing callejero, muestras, concursos y activaciones digitales en el campus.",
    ar: "عمليات ميدانية، تسويق الشوارع، توزيع العينات، مسابقات وتفعيلات رقمية داخل الحرم الجامعي.",
  },

  // ---------------------------------------------------------------------
  // Target ("Notre Cible")
  // ---------------------------------------------------------------------
  "target.heading.pre": { fr: "Notre", en: "Our", zh: "我们的", zhTW: "我們的", es: "Nuestro", ar: "" },
  "target.heading.highlight": { fr: "Cible", en: "Audience", zh: "目标受众", zhTW: "目標受眾", es: "Público", ar: "جمهورنا المستهدف" },
  "target.subtitle": {
    fr: "Qui sont les étudiants ? Leurs habitudes et centres d'intérêts",
    en: "Who are students? Their habits and interests",
    zh: "了解学生群体:他们的习惯与兴趣",
    zhTW: "了解學生群體:他們的習慣與興趣",
    es: "¿Quiénes son los estudiantes? Sus hábitos e intereses",
    ar: "من هم الطلاب؟ عاداتهم واهتماماتهم",
  },
  "target.demographics.0.label": { fr: "ont entre 18 et 24 ans", en: "are aged 18 to 24", zh: "年龄在 18 至 24 岁之间", zhTW: "年齡在 18 至 24 歲之間", es: "tienen entre 18 y 24 años", ar: "تتراوح أعمارهم بين 18 و24 عامًا" },
  "target.demographics.1.label": { fr: "par jour sur campus en moyenne", en: "spent on campus per day on average", zh: "平均每天在校园停留", zhTW: "平均每天在校園停留", es: "de media al día en el campus", ar: "في المتوسط يوميًا داخل الحرم الجامعي" },
  "target.demographics.2.label": { fr: "fréquentent les commerces de proximité", en: "shop at local businesses", zh: "常光顾周边商店", zhTW: "常光顧周邊商店", es: "compran en comercios de proximidad", ar: "يترددون على المتاجر المحلية" },
  "target.demographics.3.label": { fr: "ont un abonnement salle de sport", en: "have a gym membership", zh: "拥有健身房会员卡", zhTW: "擁有健身房會員卡", es: "tienen un abono de gimnasio", ar: "لديهم اشتراك في صالة رياضية" },
  "target.habits.title": { fr: "Leurs habitudes", en: "Their habits", zh: "他们的习惯", zhTW: "他們的習慣", es: "Sus hábitos", ar: "عاداتهم" },
  "target.habits.0": { fr: "Révisent leurs examens sur leur campus", en: "Study for exams on campus", zh: "在校园内复习备考", zhTW: "在校園內複習備考", es: "Estudian para los exámenes en el campus", ar: "يراجعون لامتحاناتهم داخل الحرم الجامعي" },
  "target.habits.1": { fr: "Travaillent en groupe à l'université", en: "Work in groups at university", zh: "在大学进行小组学习", zhTW: "在大學進行小組學習", es: "Trabajan en grupo en la universidad", ar: "يعملون في مجموعات داخل الجامعة" },
  "target.habits.2": { fr: "Déjeunent sur leur campus", en: "Have lunch on campus", zh: "在校园内用午餐", zhTW: "在校園內用午餐", es: "Almuerzan en el campus", ar: "يتناولون الغداء داخل الحرم الجامعي" },
  "target.habits.3": { fr: "Profitent de la cafétéria de leur école", en: "Use their school's cafeteria", zh: "使用学校食堂", zhTW: "使用學校食堂", es: "Usan la cafetería de su centro", ar: "يستخدمون مطعم مدرستهم" },
  "target.habits.4": { fr: "Font du sport régulièrement", en: "Exercise regularly", zh: "定期运动", zhTW: "定期運動", es: "Hacen deporte regularmente", ar: "يمارسون الرياضة بانتظام" },
  "target.habits.5": { fr: "Sont dans une association étudiante", en: "Belong to a student association", zh: "参加学生社团", zhTW: "參加學生社團", es: "Pertenecen a una asociación estudiantil", ar: "ينتمون إلى جمعية طلابية" },
  "target.habits.source": { fr: "Source : étude Iligo x DYL / 2023", en: "Source: Iligo x DYL study / 2023", zh: "数据来源:Iligo x DYL 研究 / 2023", zhTW: "資料來源:Iligo x DYL 研究 / 2023", es: "Fuente: estudio Iligo x DYL / 2023", ar: "المصدر: دراسة Iligo x DYL / 2023" },
  "target.interests.title": { fr: "Centres d'intérêts", en: "Interests", zh: "兴趣爱好", zhTW: "興趣愛好", es: "Intereses", ar: "الاهتمامات" },
  "target.interests.0": { fr: "Musique", en: "Music", zh: "音乐", zhTW: "音樂", es: "Música", ar: "الموسيقى" },
  "target.interests.1": { fr: "Cinéma", en: "Movies", zh: "电影", zhTW: "電影", es: "Cine", ar: "السينما" },
  "target.interests.2": { fr: "TV & Séries", en: "TV & Series", zh: "电视剧/影集", zhTW: "電視劇/影集", es: "TV y Series", ar: "التلفزيون والمسلسلات" },
  "target.interests.3": { fr: "Sport", en: "Sports", zh: "体育", zhTW: "體育", es: "Deporte", ar: "الرياضة" },
  "target.interests.4": { fr: "Jeux vidéo", en: "Video games", zh: "电子游戏", zhTW: "電子遊戲", es: "Videojuegos", ar: "ألعاب الفيديو" },
  "target.interests.5": { fr: "Voyages", en: "Travel", zh: "旅行", zhTW: "旅行", es: "Viajes", ar: "السفر" },

  // ---------------------------------------------------------------------
  // Cities / Réseau
  // ---------------------------------------------------------------------
  "cities.heading.pre": { fr: "Notre", en: "Our", zh: "我们的", zhTW: "我們的", es: "Nuestra", ar: "" },
  "cities.heading.highlight": { fr: "Réseau", en: "Network", zh: "网络", zhTW: "網絡", es: "Red", ar: "شبكتنا" },
  "cities.subtitle": {
    fr: "Plus de 60 villes universitaires couvertes à travers la France",
    en: "More than 60 university cities covered across France",
    zh: "覆盖法国 60 多座大学城市",
    zhTW: "覆蓋法國 60 多座大學城市",
    es: "Más de 60 ciudades universitarias cubiertas en toda Francia",
    ar: "أكثر من 60 مدينة جامعية مغطاة في جميع أنحاء فرنسا",
  },
  "cities.stat.cities": { fr: "villes universitaires", en: "university cities", zh: "大学城市", zhTW: "大學城市", es: "ciudades universitarias", ar: "مدن جامعية" },
  "cities.stat.students": { fr: "étudiants touchés", en: "students reached", zh: "覆盖学生数", zhTW: "覆蓋學生數", es: "estudiantes alcanzados", ar: "طلاب تم الوصول إليهم" },
  "cities.stat.types": { fr: "types d'implantations", en: "location types", zh: "分布场所类型", zhTW: "分佈場所類型", es: "tipos de ubicaciones", ar: "أنواع المواقع" },
  "cities.implantations.title": { fr: "Nos implantations", en: "Our locations", zh: "我们的分布场所", zhTW: "我們的分佈場所", es: "Nuestras ubicaciones", ar: "مواقعنا" },
  "implantations.0": { fr: "Campus universitaires publics", en: "Public university campuses", zh: "公立大学校园", zhTW: "公立大學校園", es: "Campus universitarios públicos", ar: "الحرم الجامعي العام" },
  "implantations.1": { fr: "Écoles du supérieur sélectives", en: "Selective higher-education schools", zh: "精英高等院校", zhTW: "精英高等院校", es: "Escuelas superiores selectivas", ar: "مدارس التعليم العالي الانتقائية" },
  "implantations.2": { fr: "Écoles du supérieur privées", en: "Private higher-education schools", zh: "私立高等院校", zhTW: "私立高等院校", es: "Escuelas superiores privadas", ar: "مدارس التعليم العالي الخاصة" },
  "implantations.3": { fr: "Restaurants universitaires", en: "University restaurants", zh: "大学食堂", zhTW: "大學食堂", es: "Restaurantes universitarios", ar: "المطاعم الجامعية" },
  "implantations.4": { fr: "Résidences universitaires", en: "Student residences", zh: "学生公寓", zhTW: "學生宿舍", es: "Residencias estudiantiles", ar: "السكن الطلابي" },
  "implantations.5": { fr: "Lieux de vie étudiants", en: "Student life venues", zh: "学生生活场所", zhTW: "學生生活場所", es: "Espacios de vida estudiantil", ar: "أماكن الحياة الطلابية" },
  "implantations.6": { fr: "Lycées", en: "High schools", zh: "中学", zhTW: "中學", es: "Institutos", ar: "المدارس الثانوية" },

  // City pie chart
  "cityPieChart.studentsReached": { fr: "étudiants touchés", en: "students reached", zh: "覆盖学生数", zhTW: "覆蓋學生數", es: "estudiantes alcanzados", ar: "طلاب تم الوصول إليهم" },
  "cityPieChart.citiesRegions": {
    fr: "{{cities}} villes · {{regions}} régions",
    en: "{{cities}} cities · {{regions}} regions",
    zh: "{{cities}} 座城市 · {{regions}} 个大区",
    zhTW: "{{cities}} 座城市 · {{regions}} 個大區",
    es: "{{cities}} ciudades · {{regions}} regiones",
    ar: "{{cities}} مدينة · {{regions}} منطقة",
  },
  "cityPieChart.cityCount.one": { fr: "{{count}} ville", en: "{{count}} city", zh: "{{count}} 座城市", zhTW: "{{count}} 座城市", es: "{{count}} ciudad", ar: "{{count}} مدينة" },
  "cityPieChart.cityCount.other": { fr: "{{count}} villes", en: "{{count}} cities", zh: "{{count}} 座城市", zhTW: "{{count}} 座城市", es: "{{count}} ciudades", ar: "{{count}} مدن" },

  // ---------------------------------------------------------------------
  // Gallery / Réalisations
  // ---------------------------------------------------------------------
  "gallery.heading.pre": { fr: "Nos", en: "Our", zh: "我们的", zhTW: "我們的", es: "Nuestros", ar: "" },
  "gallery.heading.highlight": { fr: "Réalisations", en: "Work", zh: "案例展示", zhTW: "案例展示", es: "Trabajos", ar: "أعمالنا" },
  "gallery.subtitle": {
    fr: "Aperçu de nos campagnes et opérations terrain",
    en: "A look at our campaigns and field operations",
    zh: "我们的广告活动与实地推广一览",
    zhTW: "我們的廣告活動與實地推廣一覽",
    es: "Un vistazo a nuestras campañas y operaciones de campo",
    ar: "نظرة على حملاتنا وعملياتنا الميدانية",
  },
  "gallery.previous": { fr: "Photo précédente", en: "Previous photo", zh: "上一张", zhTW: "上一張", es: "Foto anterior", ar: "الصورة السابقة" },
  "gallery.next": { fr: "Photo suivante", en: "Next photo", zh: "下一张", zhTW: "下一張", es: "Foto siguiente", ar: "الصورة التالية" },
  "gallery.viewPhoto": { fr: "Voir la photo {{n}}", en: "View photo {{n}}", zh: "查看第 {{n}} 张照片", zhTW: "查看第 {{n}} 張照片", es: "Ver foto {{n}}", ar: "عرض الصورة {{n}}" },
  "gallery.footer": {
    fr: "{{count}} photos • Cliquez sur les flèches ou les vignettes pour naviguer",
    en: "{{count}} photos • Use the arrows or thumbnails to navigate",
    zh: "{{count}} 张照片 • 点击箭头或缩略图浏览",
    zhTW: "{{count}} 張照片 • 點擊箭頭或縮圖瀏覽",
    es: "{{count}} fotos • Use las flechas o las miniaturas para navegar",
    ar: "{{count}} صورة • استخدم الأسهم أو الصور المصغرة للتنقل",
  },

  // ---------------------------------------------------------------------
  // Clients / "Ils nous font Confiance"
  // ---------------------------------------------------------------------
  "clients.heading.pre": { fr: "Ils nous font", en: "They", zh: "他们", zhTW: "他們", es: "Ellos", ar: "" },
  "clients.heading.highlight": { fr: "Confiance", en: "Trust Us", zh: "信任我们", zhTW: "信任我們", es: "Confían en Nosotros", ar: "يثقون بنا" },
  "clients.subtitle": {
    fr: "Des marques et institutions qui nous accompagnent",
    en: "Brands and institutions that work with us",
    zh: "与我们合作的品牌与机构",
    zhTW: "與我們合作的品牌與機構",
    es: "Marcas e instituciones que colaboran con nosotros",
    ar: "علامات تجارية ومؤسسات تعمل معنا",
  },
  "clients.seeAll": { fr: "Voir toutes nos références ({{count}}+)", en: "See all our references ({{count}}+)", zh: "查看全部客户案例 ({{count}}+)", zhTW: "查看全部客戶案例 ({{count}}+)", es: "Ver todas nuestras referencias ({{count}}+)", ar: "عرض جميع مراجعنا ({{count}}+)" },

  // Catégories clients (utilisées sur /references et pour regrouper les logos)
  "clientCategory.institutions": { fr: "Institutions & Collectivités", en: "Institutions & Local Authorities", zh: "机构与地方政府", zhTW: "機構與地方政府", es: "Instituciones y Administraciones Locales", ar: "المؤسسات والسلطات المحلية" },
  "clientCategory.ecoles": { fr: "Écoles & Formation", en: "Schools & Training", zh: "学校与培训机构", zhTW: "學校與培訓機構", es: "Escuelas y Formación", ar: "المدارس والتدريب" },
  "clientCategory.marques": { fr: "Grandes Marques & Entreprises", en: "Major Brands & Companies", zh: "知名品牌与企业", zhTW: "知名品牌與企業", es: "Grandes Marcas y Empresas", ar: "العلامات التجارية الكبرى والشركات" },
  "clientCategory.culture": { fr: "Culture & Médias", en: "Culture & Media", zh: "文化与媒体", zhTW: "文化與媒體", es: "Cultura y Medios", ar: "الثقافة والإعلام" },

  // ---------------------------------------------------------------------
  // Références (page /references)
  // ---------------------------------------------------------------------
  "references.metaTitle": { fr: "Nos Références - MediaHub Campus", en: "Our References - MediaHub Campus", zh: "客户案例 - MediaHub Campus", zhTW: "客戶案例 - MediaHub Campus", es: "Nuestras Referencias - MediaHub Campus", ar: "مراجعنا - MediaHub Campus" },
  "references.metaDescription": {
    fr: "Marques, institutions et établissements qui font confiance à MediaHub Campus pour leurs campagnes sur les campus universitaires et lycées de France.",
    en: "Brands, institutions and schools that trust MediaHub Campus for their campaigns across French university campuses and high schools.",
    zh: "众多品牌、机构与院校信赖 MediaHub Campus,在法国大学校园与中学开展广告活动。",
    zhTW: "眾多品牌、機構與院校信賴 MediaHub Campus,在法國大學校園與中學開展廣告活動。",
    es: "Marcas, instituciones y centros educativos que confían en MediaHub Campus para sus campañas en campus universitarios e institutos franceses.",
    ar: "علامات تجارية ومؤسسات ومدارس تثق بـ MediaHub Campus لحملاتها في الحرم الجامعي والثانويات الفرنسية.",
  },
  "references.heading.pre": { fr: "Nos", en: "Our", zh: "我们的", zhTW: "我們的", es: "Nuestras", ar: "" },
  "references.heading.highlight": { fr: "Références", en: "References", zh: "客户案例", zhTW: "客戶案例", es: "Referencias", ar: "مراجعنا" },
  "references.subtitle": {
    fr: "Marques, institutions et établissements qui nous accompagnent sur les campus universitaires et lycées de France.",
    en: "Brands, institutions and schools that work with us across French university campuses and high schools.",
    zh: "在法国大学校园与中学与我们合作的品牌、机构与院校。",
    zhTW: "在法國大學校園與中學與我們合作的品牌、機構與院校。",
    es: "Marcas, instituciones y centros educativos que colaboran con nosotros en campus universitarios e institutos franceses.",
    ar: "علامات تجارية ومؤسسات ومدارس تعمل معنا في الحرم الجامعي والثانويات الفرنسية.",
  },
  "references.notFoundPre": { fr: "Vous ne trouvez pas le vôtre ?", en: "Can't find yours?", zh: "没有找到您的品牌?", zhTW: "沒有找到您的品牌?", es: "¿No encuentra el suyo?", ar: "لم تجد شعارك؟" },
  "references.notFoundLink": { fr: "Parlons de votre projet", en: "Let's talk about your project", zh: "聊聊您的项目", zhTW: "聊聊您的專案", es: "Hablemos de su proyecto", ar: "لنتحدث عن مشروعك" },

  // ---------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------
  "contact.heading.pre": { fr: "Contactez-", en: "Contact ", zh: "联系", zhTW: "聯繫", es: "Contácta", ar: "" },
  "contact.heading.highlight": { fr: "nous", en: "Us", zh: "我们", zhTW: "我們", es: "nos", ar: "اتصل بنا" },
  "contact.subtitle": { fr: "Discutons de votre prochaine campagne", en: "Let's discuss your next campaign", zh: "一起聊聊您的下一次推广活动", zhTW: "一起聊聊您的下一次推廣活動", es: "Hablemos de su próxima campaña", ar: "لنتحدث عن حملتكم القادمة" },
  "contact.form.name": { fr: "Nom *", en: "Name *", zh: "姓名 *", zhTW: "姓名 *", es: "Nombre *", ar: "الاسم *" },
  "contact.form.namePlaceholder": { fr: "Votre nom", en: "Your name", zh: "您的姓名", zhTW: "您的姓名", es: "Su nombre", ar: "اسمك" },
  "contact.form.email": { fr: "Email *", en: "Email *", zh: "邮箱 *", zhTW: "電子郵箱 *", es: "Correo electrónico *", ar: "البريد الإلكتروني *" },
  "contact.form.emailPlaceholder": { fr: "votre@email.com", en: "you@email.com", zh: "您的邮箱", zhTW: "您的電子郵箱", es: "usted@email.com", ar: "you@email.com" },
  "contact.form.company": { fr: "Entreprise", en: "Company", zh: "公司", zhTW: "公司", es: "Empresa", ar: "الشركة" },
  "contact.form.companyPlaceholder": { fr: "Votre entreprise", en: "Your company", zh: "您的公司名称", zhTW: "您的公司名稱", es: "Su empresa", ar: "شركتك" },
  "contact.form.campaignType": { fr: "Type de campagne *", en: "Campaign type *", zh: "活动类型 *", zhTW: "活動類型 *", es: "Tipo de campaña *", ar: "نوع الحملة *" },
  "contact.form.campaignTypePlaceholder": { fr: "Choisissez un type", en: "Choose a type", zh: "请选择类型", zhTW: "請選擇類型", es: "Elija un tipo", ar: "اختر نوعًا" },
  "contact.form.zone": { fr: "Zone(s) visée(s)", en: "Target zone(s)", zh: "目标区域", zhTW: "目標區域", es: "Zona(s) objetivo", ar: "المنطقة/المناطق المستهدفة" },
  "contact.form.zonePlaceholder": { fr: "ex : Lyon, Bordeaux, Île-de-France...", en: "e.g. Lyon, Bordeaux, Paris region...", zh: "例如:里昂、波尔多、法兰西岛...", zhTW: "例如:里昂、波爾多、法蘭西島...", es: "ej.: Lyon, Burdeos, región de París...", ar: "مثال: ليون، بوردو، منطقة باريس..." },
  "contact.form.period": { fr: "Période souhaitée", en: "Desired period", zh: "期望时间段", zhTW: "期望時間段", es: "Período deseado", ar: "الفترة المرغوبة" },
  "contact.form.periodPlaceholder": { fr: "ex : 4 semaines, octobre 2026", en: "e.g. 4 weeks, October 2026", zh: "例如:4 周,2026 年 10 月", zhTW: "例如:4 週,2026 年 10 月", es: "ej.: 4 semanas, octubre 2026", ar: "مثال: 4 أسابيع، أكتوبر 2026" },
  "contact.form.budget": { fr: "Budget indicatif", en: "Estimated budget", zh: "预算区间", zhTW: "預算區間", es: "Presupuesto estimado", ar: "الميزانية التقديرية" },
  "contact.form.message": { fr: "Message *", en: "Message *", zh: "留言 *", zhTW: "留言 *", es: "Mensaje *", ar: "الرسالة *" },
  "contact.form.messagePlaceholder": { fr: "Décrivez votre projet...", en: "Describe your project...", zh: "请描述您的项目...", zhTW: "請描述您的項目...", es: "Describa su proyecto...", ar: "صف مشروعك..." },
  "contact.form.sending": { fr: "Envoi en cours...", en: "Sending...", zh: "发送中...", zhTW: "發送中...", es: "Enviando...", ar: "جارٍ الإرسال..." },
  "contact.form.sent": { fr: "Message envoyé !", en: "Message sent!", zh: "消息已发送!", zhTW: "訊息已發送!", es: "¡Mensaje enviado!", ar: "تم إرسال الرسالة!" },
  "contact.form.retry": { fr: "Réessayer", en: "Retry", zh: "重试", zhTW: "重試", es: "Reintentar", ar: "إعادة المحاولة" },
  "contact.form.send": { fr: "Envoyer", en: "Send", zh: "发送", zhTW: "發送", es: "Enviar", ar: "إرسال" },
  "contact.form.error": { fr: "Une erreur est survenue. Veuillez réessayer.", en: "An error occurred. Please try again.", zh: "发生错误,请重试。", zhTW: "發生錯誤,請重試。", es: "Se produjo un error. Inténtelo de nuevo.", ar: "حدث خطأ. يرجى المحاولة مرة أخرى." },

  // Types de campagne (valeurs affichées dans le formulaire et le simulateur)
  "campaignType.Affichage Universitaire": { fr: "Affichage Universitaire", en: "University Poster Advertising", zh: "大学海报广告", zhTW: "大學海報廣告", es: "Publicidad en Carteles Universitarios", ar: "الإعلانات الملصقة الجامعية" },
  "campaignType.Affichage Scolaire": { fr: "Affichage Scolaire", en: "High School Advertising", zh: "中学广告", zhTW: "中學廣告", es: "Publicidad en Institutos", ar: "إعلانات المدارس الثانوية" },
  "campaignType.MédiaTables": { fr: "MédiaTables", en: "MediaTables", zh: "餐桌媒体", zhTW: "餐桌媒體", es: "MédiaTables", ar: "ميديا الطاولات" },
  "campaignType.Événementiel": { fr: "Événementiel", en: "Events", zh: "活动营销", zhTW: "活動行銷", es: "Eventos", ar: "الفعاليات" },
  "campaignType.Je ne sais pas encore": { fr: "Je ne sais pas encore", en: "Not sure yet", zh: "尚未确定", zhTW: "尚未確定", es: "Aún no lo sé", ar: "لست متأكدًا بعد" },

  // Budgets (valeurs affichées dans le formulaire)
  "budgetRange.Budget non défini": { fr: "Budget non défini", en: "Budget not defined", zh: "预算未定", zhTW: "預算未定", es: "Presupuesto no definido", ar: "الميزانية غير محددة" },
  "budgetRange.Moins de 2 000 €": { fr: "Moins de 2 000 €", en: "Under €2,000", zh: "低于 2,000 欧元", zhTW: "低於 2,000 歐元", es: "Menos de 2.000 €", ar: "أقل من 2,000 يورو" },
  "budgetRange.2 000 – 5 000 €": { fr: "2 000 – 5 000 €", en: "€2,000 – €5,000", zh: "2,000 – 5,000 欧元", zhTW: "2,000 – 5,000 歐元", es: "2.000 € – 5.000 €", ar: "2,000 – 5,000 يورو" },
  "budgetRange.5 000 – 15 000 €": { fr: "5 000 – 15 000 €", en: "€5,000 – €15,000", zh: "5,000 – 15,000 欧元", zhTW: "5,000 – 15,000 歐元", es: "5.000 € – 15.000 €", ar: "5,000 – 15,000 يورو" },
  "budgetRange.15 000 € et plus": { fr: "15 000 € et plus", en: "€15,000 and above", zh: "15,000 欧元以上", zhTW: "15,000 歐元以上", es: "15.000 € y más", ar: "15,000 يورو وأكثر" },

  // ---------------------------------------------------------------------
  // Simulateur de devis
  // ---------------------------------------------------------------------
  "simulator.metaTitle": { fr: "Simulateur de Devis - MediaHub Campus", en: "Quote Simulator - MediaHub Campus", zh: "报价模拟器 - MediaHub Campus", zhTW: "報價模擬器 - MediaHub Campus", es: "Simulador de Presupuesto - MediaHub Campus", ar: "محاكي عروض الأسعار - MediaHub Campus" },
  "simulator.metaDescription": {
    fr: "Simulez votre budget de campagne d'affichage universitaire en quelques clics : sélectionnez vos zones Campus et la durée souhaitée pour obtenir une estimation immédiate.",
    en: "Simulate your university poster campaign budget in a few clicks: select your Campus zones and campaign length for an instant estimate.",
    zh: "只需几步即可模拟您的大学海报广告预算:选择校园区域与投放时长,立即获取估算报价。",
    zhTW: "只需幾步即可模擬您的大學海報廣告預算:選擇校園區域與投放時長,立即獲取估算報價。",
    es: "Simule el presupuesto de su campaña de carteles universitarios en unos clics: seleccione sus zonas de Campus y la duración deseada para obtener una estimación instantánea.",
    ar: "احسب ميزانية حملتك الإعلانية الجامعية في نقرات قليلة: اختر مناطق الحرم الجامعي ومدة الحملة للحصول على تقدير فوري.",
  },
  "simulator.heading.pre": { fr: "Simulateur de", en: "Quote", zh: "报价", zhTW: "報價", es: "Simulador de", ar: "" },
  "simulator.heading.highlight": { fr: "Devis", en: "Simulator", zh: "模拟器", zhTW: "模擬器", es: "Presupuesto", ar: "محاكي عروض الأسعار" },
  "simulator.subtitle": {
    fr: "Sélectionnez votre réseau, vos zones et la durée de campagne pour obtenir une estimation budgétaire immédiate.",
    en: "Select your network, zones and campaign length to get an instant budget estimate.",
    zh: "选择您的网络类型、目标区域与投放时长,即可获得即时预算估算。",
    zhTW: "選擇您的網絡類型、目標區域與投放時長,即可獲得即時預算估算。",
    es: "Seleccione su red, zonas y duración de campaña para obtener una estimación de presupuesto instantánea.",
    ar: "اختر شبكتك ومناطقك ومدة الحملة للحصول على تقدير فوري للميزانية.",
  },
  "simulator.zones.title": { fr: "Zones", en: "Zones", zh: "区域", zhTW: "區域", es: "Zonas", ar: "المناطق" },
  "simulator.zones.selected.one": { fr: "({{count}} sélectionnée)", en: "({{count}} selected)", zh: "(已选 {{count}} 个)", zhTW: "(已選 {{count}} 個)", es: "({{count}} seleccionada)", ar: "(تم اختيار {{count}})" },
  "simulator.zones.selected.other": { fr: "({{count}} sélectionnées)", en: "({{count}} selected)", zh: "(已选 {{count}} 个)", zhTW: "(已選 {{count}} 個)", es: "({{count}} seleccionadas)", ar: "(تم اختيار {{count}})" },
  "simulator.zones.deselectAll": { fr: "Tout désélectionner", en: "Deselect all", zh: "全部取消选择", zhTW: "全部取消選擇", es: "Deseleccionar todo", ar: "إلغاء تحديد الكل" },
  "simulator.zones.franceEntiere": { fr: "France entière — sélectionner les 60 zones", en: "All of France — select all 60 zones", zh: "全法国 — 选择全部 60 个区域", zhTW: "全法國 — 選擇全部 60 個區域", es: "Toda Francia — seleccionar las 60 zonas", ar: "فرنسا بأكملها — تحديد جميع المناطق الـ 60" },
  "simulator.zones.searchPlaceholder": { fr: "Rechercher une ville...", en: "Search for a city...", zh: "搜索城市...", zhTW: "搜尋城市...", es: "Buscar una ciudad...", ar: "ابحث عن مدينة..." },
  "simulator.zones.noResults": { fr: "Aucune ville ne correspond à votre recherche.", en: "No city matches your search.", zh: "未找到匹配的城市。", zhTW: "未找到符合的城市。", es: "Ninguna ciudad coincide con su búsqueda.", ar: "لا توجد مدينة مطابقة لبحثك." },
  "simulator.results.title": { fr: "Votre estimation", en: "Your estimate", zh: "您的预算估算", zhTW: "您的預算估算", es: "Su estimación", ar: "تقديرك" },
  "simulator.results.network": { fr: "Réseau", en: "Network", zh: "网络类型", zhTW: "網絡類型", es: "Red", ar: "الشبكة" },
  "simulator.network.universites": { fr: "Universités", en: "Universities", zh: "大学", zhTW: "大學", es: "Universidades", ar: "الجامعات" },
  "simulator.network.lycees": { fr: "Lycées", en: "High schools", zh: "中学", zhTW: "中學", es: "Institutos", ar: "المدارس الثانوية" },
  "simulator.network.both": { fr: "Les deux", en: "Both", zh: "两者皆选", zhTW: "兩者皆選", es: "Ambos", ar: "كلاهما" },
  "simulator.duration.title": { fr: "Durée de campagne", en: "Campaign length", zh: "投放时长", zhTW: "投放時長", es: "Duración de la campaña", ar: "مدة الحملة" },
  "simulator.duration.weeksShort": { fr: "sem.", en: "wks", zh: "周", zhTW: "週", es: "sem.", ar: "أسبوع" },
  "simulator.duration.week.one": { fr: "semaine", en: "week", zh: "周", zhTW: "週", es: "semana", ar: "أسبوع" },
  "simulator.duration.week.other": { fr: "semaines", en: "weeks", zh: "周", zhTW: "週", es: "semanas", ar: "أسابيع" },
  "simulator.results.selectZone": { fr: "Sélectionnez au moins une zone pour voir votre estimation.", en: "Select at least one zone to see your estimate.", zh: "请至少选择一个区域以查看预算估算。", zhTW: "請至少選擇一個區域以查看預算估算。", es: "Seleccione al menos una zona para ver su estimación.", ar: "اختر منطقة واحدة على الأقل لعرض تقديرك." },
  "simulator.results.audience": { fr: "Audience cumulée", en: "Total audience", zh: "累计受众", zhTW: "累計受眾", es: "Audiencia total", ar: "إجمالي الجمهور" },
  "simulator.results.ots": { fr: "Occasions de voir", en: "Opportunities to see", zh: "曝光机会数", zhTW: "曝光機會數", es: "Ocasiones de ver", ar: "فرص المشاهدة" },
  "simulator.results.panels": { fr: "Affiches A2", en: "A2 posters", zh: "A2 海报数量", zhTW: "A2 海報數量", es: "Carteles A2", ar: "ملصقات A2" },
  "simulator.results.subtotal": { fr: "Sous-total HT", en: "Subtotal (excl. VAT)", zh: "小计(不含税)", zhTW: "小計(不含稅)", es: "Subtotal (sin IVA)", ar: "المجموع الفرعي (بدون ضريبة القيمة المضافة)" },
  "simulator.results.discount": { fr: "Remise dégressive (-{{pct}}%)", en: "Volume discount (-{{pct}}%)", zh: "阶梯折扣 (-{{pct}}%)", zhTW: "階梯折扣 (-{{pct}}%)", es: "Descuento por volumen (-{{pct}}%)", ar: "خصم الكمية (-{{pct}}%)" },
  "simulator.results.budgetHT": { fr: "Budget HT", en: "Budget (excl. VAT)", zh: "预算(不含税)", zhTW: "預算(不含稅)", es: "Presupuesto (sin IVA)", ar: "الميزانية (بدون ضريبة القيمة المضافة)" },
  "simulator.results.vat": { fr: "dont TVA (20%) : {{amount}}", en: "incl. VAT (20%): {{amount}}", zh: "含增值税 (20%): {{amount}}", zhTW: "含增值稅 (20%): {{amount}}", es: "incl. IVA (20%): {{amount}}", ar: "شامل ضريبة القيمة المضافة (20%): {{amount}}" },
  "simulator.results.ttc": { fr: "TTC : {{amount}}", en: "Total incl. VAT: {{amount}}", zh: "含税总额: {{amount}}", zhTW: "含稅總額: {{amount}}", es: "Total con IVA: {{amount}}", ar: "الإجمالي شامل الضريبة: {{amount}}" },
  "simulator.results.requestQuote": { fr: "Demander ce devis", en: "Request this quote", zh: "申请此报价", zhTW: "申請此報價", es: "Solicitar este presupuesto", ar: "طلب هذا العرض" },
  "simulator.results.copySummary": { fr: "Copier le résumé", en: "Copy summary", zh: "复制摘要", zhTW: "複製摘要", es: "Copiar resumen", ar: "نسخ الملخص" },
  "simulator.results.copied": { fr: "Résumé copié !", en: "Summary copied!", zh: "摘要已复制!", zhTW: "摘要已複製!", es: "¡Resumen copiado!", ar: "تم نسخ الملخص!" },
  "simulator.results.disclaimer": {
    fr: "Estimation indicative, hors coefficient catégorie de lieu et conditions commerciales spécifiques. Un devis définitif vous sera transmis par notre équipe.",
    en: "Indicative estimate, excluding location category coefficient and specific commercial terms. A final quote will be provided by our team.",
    zh: "此为参考估算,未包含场所类别系数及特殊商务条款。最终报价将由我们的团队提供。",
    zhTW: "此為參考估算,未包含場所類別係數及特殊商務條款。最終報價將由我們的團隊提供。",
    es: "Estimación indicativa, sin incluir el coeficiente de categoría de ubicación ni condiciones comerciales específicas. Nuestro equipo le enviará un presupuesto definitivo.",
    ar: "تقدير إرشادي، لا يشمل معامل فئة الموقع والشروط التجارية الخاصة. سيقدم فريقنا عرض سعر نهائي.",
  },
  "simulator.info.targeting": {
    fr: "Un ciblage par discipline ou filière est aussi possible — précisez-le dans votre demande de devis.",
    en: "Targeting by discipline or field of study is also possible — mention it in your quote request.",
    zh: "也可按专业或学科定向投放 — 请在报价申请中说明。",
    zhTW: "也可按專業或學科定向投放 — 請在報價申請中說明。",
    es: "También es posible segmentar por disciplina o área de estudio — indíquelo en su solicitud de presupuesto.",
    ar: "يمكن أيضًا الاستهداف حسب التخصص أو مجال الدراسة — يرجى ذكر ذلك في طلب عرض السعر.",
  },
  "simulator.info.network": {
    fr: "Le détail du réseau d'affichage (établissements et emplacements précis) vous sera transmis avec le devis.",
    en: "The full poster network details (institutions and exact locations) will be provided with the quote.",
    zh: "详细的广告网络信息(具体院校与位置)将随报价一并提供。",
    zhTW: "詳細的廣告網絡資訊(具體院校與位置)將隨報價一併提供。",
    es: "Los detalles completos de la red de carteles (instituciones y ubicaciones exactas) se proporcionarán junto con el presupuesto.",
    ar: "سيتم تقديم تفاصيل شبكة الملصقات الكاملة (المؤسسات والمواقع الدقيقة) مع عرض السعر.",
  },

  // ---------------------------------------------------------------------
  // 404
  // ---------------------------------------------------------------------
  "notFound.title": { fr: "Page introuvable", en: "Page not found", zh: "页面未找到", zhTW: "頁面未找到", es: "Página no encontrada", ar: "الصفحة غير موجودة" },
  "notFound.description": {
    fr: "Oups ! La page que vous recherchez semble avoir disparu dans les couloirs du campus...",
    en: "Oops! The page you're looking for seems to have vanished somewhere in the campus hallways...",
    zh: "哎呀!您要找的页面似乎在校园的走廊里消失了……",
    zhTW: "哎呀!您要找的頁面似乎在校園的走廊裡消失了……",
    es: "¡Vaya! La página que busca parece haberse perdido en algún pasillo del campus...",
    ar: "عذرًا! يبدو أن الصفحة التي تبحث عنها قد اختفت في ممرات الحرم الجامعي...",
  },
  "notFound.home": { fr: "Retour à l'accueil", en: "Back to homepage", zh: "返回首页", zhTW: "返回首頁", es: "Volver al inicio", ar: "العودة إلى الصفحة الرئيسية" },
  "notFound.back": { fr: "Page précédente", en: "Go back", zh: "返回上一页", zhTW: "返回上一頁", es: "Volver atrás", ar: "العودة" },

  // ---------------------------------------------------------------------
  // Mascotte (easter egg)
  // ---------------------------------------------------------------------
  "mascot.show": { fr: "Voir les mascottes", en: "Show the mascots", zh: "显示吉祥物", zhTW: "顯示吉祥物", es: "Mostrar las mascotas", ar: "إظهار التمائم" },
  "mascot.hide": { fr: "Cacher les mascottes", en: "Hide the mascots", zh: "隐藏吉祥物", zhTW: "隱藏吉祥物", es: "Ocultar las mascotas", ar: "إخفاء التمائم" },
  "mascot.clickMe": { fr: "Clique-moi !", en: "Click me!", zh: "点我!", zhTW: "點我!", es: "¡Haz clic!", ar: "اضغط هنا!" },
  "mascot.tap": { fr: "Tap !", en: "Tap!", zh: "点击!", zhTW: "點擊!", es: "¡Toca!", ar: "اضغط!" },
} as const satisfies Record<string, TranslationEntry>;

export type TranslationKey = keyof typeof translations;
