// Dictionnaire de traduction du site (FR / EN / ZH).
//
// Chaque entrée est une clé stable (jamais affichée) associée à ses trois
// versions. `useLanguage().t("cle")` retourne la version qui correspond à la
// langue active, avec repli automatique sur le français si une traduction
// venait à manquer.
//
// Les noms propres (villes, régions, clients, personnes) ne sont
// volontairement pas traduits.

export type Locale = "fr" | "en" | "zh";

export interface TranslationEntry {
  fr: string;
  en: string;
  zh: string;
}

export const translations = {
  // ---------------------------------------------------------------------
  // Général / sélecteur de langue
  // ---------------------------------------------------------------------
  "lang.fr": { fr: "Français", en: "French", zh: "法语" },
  "lang.en": { fr: "Anglais", en: "English", zh: "英语" },
  "lang.zh": { fr: "Mandarin", en: "Mandarin", zh: "中文" },
  "lang.switcherLabel": { fr: "Langue", en: "Language", zh: "语言" },

  // ---------------------------------------------------------------------
  // Header / navigation
  // ---------------------------------------------------------------------
  "nav.services": { fr: "Services", en: "Services", zh: "服务" },
  "nav.cible": { fr: "Notre Cible", en: "Our Audience", zh: "目标受众" },
  "nav.reseau": { fr: "Notre Réseau", en: "Our Network", zh: "我们的网络" },
  "nav.references": { fr: "Références", en: "References", zh: "客户案例" },
  "nav.simulateur": { fr: "Simulateur de Devis", en: "Quote Simulator", zh: "报价模拟器" },
  "nav.contact": { fr: "Contact", en: "Contact", zh: "联系我们" },
  "nav.plaquette": { fr: "Plaquette PDF", en: "PDF Brochure", zh: "PDF 手册" },
  "nav.plaquetteMobile": { fr: "Télécharger la Plaquette", en: "Download the Brochure", zh: "下载手册" },
  "nav.toggleMenu": { fr: "Ouvrir/fermer le menu", en: "Toggle menu", zh: "打开/关闭菜单" },

  // ---------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------
  "footer.tagline": {
    fr: "La Régie des Universités, Campus, Écoles et Lycées",
    en: "The Advertising Network for Universities, Campuses, Schools and High Schools",
    zh: "面向大学、校园、学院与中学的专属广告平台",
  },
  "footer.navigation": { fr: "Navigation", en: "Navigation", zh: "导航" },
  "footer.documentation": { fr: "Documentation", en: "Documentation", zh: "文档" },
  "footer.downloadBrochure": { fr: "Télécharger la Plaquette 2026-2027", en: "Download the 2026-2027 Brochure", zh: "下载 2026-2027 手册" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved.", zh: "版权所有。" },
  "footer.mentionsLegales": { fr: "Mentions légales", en: "Legal Notice", zh: "法律声明" },
  "footer.politiqueConfidentialite": { fr: "Politique de confidentialité", en: "Privacy Policy", zh: "隐私政策" },
  "footer.designedBy": { fr: "Conçu et développé par", en: "Designed and developed by", zh: "设计开发" },

  // ---------------------------------------------------------------------
  // Hero
  // ---------------------------------------------------------------------
  "hero.title1": { fr: "La Régie des", en: "The Advertising Network for", zh: "大学、校园" },
  "hero.title2": { fr: "Universités & Campus", en: "Universities & Campuses", zh: "与学院的专属广告平台" },
  "hero.subtitle": {
    fr: "Touchez plus de **2,19 millions d'étudiants** dans **60 villes universitaires**",
    en: "Reach more than **2.19 million students** across **60 university cities**",
    zh: "覆盖**60 座大学城市**中超过**219 万名学生**",
  },
  "hero.ctaBrochure": { fr: "Télécharger la Plaquette", en: "Download the Brochure", zh: "下载宣传手册" },
  "hero.ctaSimulator": { fr: "Simulateur de Devis", en: "Quote Simulator", zh: "报价模拟器" },

  // ---------------------------------------------------------------------
  // Statistics ("Nos Chiffres Clés")
  // ---------------------------------------------------------------------
  "statistics.heading.pre": { fr: "Nos", en: "Our", zh: "我们的" },
  "statistics.heading.highlight": { fr: "Chiffres Clés", en: "Key Figures", zh: "关键数据" },
  "statistics.subtitle": {
    fr: "Le plus vaste réseau d'affichage au cœur des campus français",
    en: "The largest advertising network at the heart of French campuses",
    zh: "深入法国校园核心的最大广告网络",
  },
  "stats.0.label": { fr: "Villes universitaires", en: "University cities", zh: "大学城市" },
  "stats.1.label": { fr: "Établissements", en: "Institutions", zh: "合作院校" },
  "stats.2.label": { fr: "Étudiants atteints", en: "Students reached", zh: "覆盖学生数" },

  // ---------------------------------------------------------------------
  // Services
  // ---------------------------------------------------------------------
  "services.heading.pre": { fr: "Nos", en: "Our", zh: "我们的" },
  "services.heading.highlight": { fr: "Services", en: "Services", zh: "服务" },
  "services.subtitle": {
    fr: "Des solutions complètes pour toucher la cible étudiante",
    en: "Complete solutions to reach the student audience",
    zh: "全方位触达学生群体的解决方案",
  },
  "services.affichage.title": { fr: "Affichage Universitaire", en: "University Poster Advertising", zh: "大学海报广告" },
  "services.affichage.description": {
    fr: "Le plus vaste réseau d'affichage au cœur des universités, campus, lycées et lieux de vie étudiants. Plus de 2,19M d'étudiants touchés, 100% étudiant.",
    en: "The largest poster network at the heart of universities, campuses, high schools and student living spaces. Over 2.19M students reached, 100% student audience.",
    zh: "深入大学、校园、高中及学生生活场所核心的最大海报广告网络。覆盖超过 219 万名学生,100% 精准触达学生群体。",
  },
  "services.scolaire.title": { fr: "Affichage Scolaire", en: "High School Advertising", zh: "中学广告" },
  "services.scolaire.description": {
    fr: "Réseau Lycée pour toucher lycéens et professeurs. Enseignants partenaires, lycées à la carte, profils précis.",
    en: "High School network to reach students and teachers. Partner teachers, à la carte schools, precise targeting.",
    zh: "覆盖中学生与教师的中学网络。合作教师资源、可定制学校清单、精准人群定位。",
  },
  "services.mediatables.title": { fr: "MédiaTables", en: "MediaTables", zh: "餐桌媒体" },
  "services.mediatables.description": {
    fr: "12 000 tables, 800 établissements, 50 min d'exposition. 91% des Français fréquentent les terrasses.",
    en: "12,000 tables, 800 venues, 50 min of exposure. 91% of French people visit terraces.",
    zh: "12,000 张餐桌,800 家场所,平均曝光 50 分钟。91% 的法国人常去露天座位区。",
  },
  "services.event.title": { fr: "Événementiel", en: "Events", zh: "活动营销" },
  "services.event.description": {
    fr: "Opérations terrain, street marketing, sampling, jeux-concours et activations digitales sur campus.",
    en: "Field operations, street marketing, sampling, competitions and digital activations on campus.",
    zh: "校园实地推广、街头营销、产品试用、抽奖活动及数字化互动。",
  },

  // ---------------------------------------------------------------------
  // Target ("Notre Cible")
  // ---------------------------------------------------------------------
  "target.heading.pre": { fr: "Notre", en: "Our", zh: "我们的" },
  "target.heading.highlight": { fr: "Cible", en: "Audience", zh: "目标受众" },
  "target.subtitle": {
    fr: "Qui sont les étudiants ? Leurs habitudes et centres d'intérêts",
    en: "Who are students? Their habits and interests",
    zh: "了解学生群体:他们的习惯与兴趣",
  },
  "target.demographics.0.label": { fr: "ont entre 18 et 24 ans", en: "are aged 18 to 24", zh: "年龄在 18 至 24 岁之间" },
  "target.demographics.1.label": { fr: "par jour sur campus en moyenne", en: "spent on campus per day on average", zh: "平均每天在校园停留" },
  "target.demographics.2.label": { fr: "fréquentent les commerces de proximité", en: "shop at local businesses", zh: "常光顾周边商店" },
  "target.demographics.3.label": { fr: "ont un abonnement salle de sport", en: "have a gym membership", zh: "拥有健身房会员卡" },
  "target.habits.title": { fr: "Leurs habitudes", en: "Their habits", zh: "他们的习惯" },
  "target.habits.0": { fr: "Révisent leurs examens sur leur campus", en: "Study for exams on campus", zh: "在校园内复习备考" },
  "target.habits.1": { fr: "Travaillent en groupe à l'université", en: "Work in groups at university", zh: "在大学进行小组学习" },
  "target.habits.2": { fr: "Déjeunent sur leur campus", en: "Have lunch on campus", zh: "在校园内用午餐" },
  "target.habits.3": { fr: "Profitent de la cafétéria de leur école", en: "Use their school's cafeteria", zh: "使用学校食堂" },
  "target.habits.4": { fr: "Font du sport régulièrement", en: "Exercise regularly", zh: "定期运动" },
  "target.habits.5": { fr: "Sont dans une association étudiante", en: "Belong to a student association", zh: "参加学生社团" },
  "target.habits.source": { fr: "Source : étude Iligo x DYL / 2023", en: "Source: Iligo x DYL study / 2023", zh: "数据来源:Iligo x DYL 研究 / 2023" },
  "target.interests.title": { fr: "Centres d'intérêts", en: "Interests", zh: "兴趣爱好" },
  "target.interests.0": { fr: "Musique", en: "Music", zh: "音乐" },
  "target.interests.1": { fr: "Cinéma", en: "Movies", zh: "电影" },
  "target.interests.2": { fr: "TV & Séries", en: "TV & Series", zh: "电视剧/影集" },
  "target.interests.3": { fr: "Sport", en: "Sports", zh: "体育" },
  "target.interests.4": { fr: "Jeux vidéo", en: "Video games", zh: "电子游戏" },
  "target.interests.5": { fr: "Voyages", en: "Travel", zh: "旅行" },

  // ---------------------------------------------------------------------
  // Cities / Réseau
  // ---------------------------------------------------------------------
  "cities.heading.pre": { fr: "Notre", en: "Our", zh: "我们的" },
  "cities.heading.highlight": { fr: "Réseau", en: "Network", zh: "网络" },
  "cities.subtitle": {
    fr: "Plus de 60 villes universitaires couvertes à travers la France",
    en: "More than 60 university cities covered across France",
    zh: "覆盖法国 60 多座大学城市",
  },
  "cities.stat.cities": { fr: "villes universitaires", en: "university cities", zh: "大学城市" },
  "cities.stat.students": { fr: "étudiants touchés", en: "students reached", zh: "覆盖学生数" },
  "cities.stat.types": { fr: "types d'implantations", en: "location types", zh: "分布场所类型" },
  "cities.implantations.title": { fr: "Nos implantations", en: "Our locations", zh: "我们的分布场所" },
  "implantations.0": { fr: "Campus universitaires publics", en: "Public university campuses", zh: "公立大学校园" },
  "implantations.1": { fr: "Écoles du supérieur sélectives", en: "Selective higher-education schools", zh: "精英高等院校" },
  "implantations.2": { fr: "Écoles du supérieur privées", en: "Private higher-education schools", zh: "私立高等院校" },
  "implantations.3": { fr: "Restaurants universitaires", en: "University restaurants", zh: "大学食堂" },
  "implantations.4": { fr: "Résidences universitaires", en: "Student residences", zh: "学生公寓" },
  "implantations.5": { fr: "Lieux de vie étudiants", en: "Student life venues", zh: "学生生活场所" },
  "implantations.6": { fr: "Lycées", en: "High schools", zh: "中学" },

  // City pie chart
  "cityPieChart.studentsReached": { fr: "étudiants touchés", en: "students reached", zh: "覆盖学生数" },
  "cityPieChart.citiesRegions": {
    fr: "{{cities}} villes · {{regions}} régions",
    en: "{{cities}} cities · {{regions}} regions",
    zh: "{{cities}} 座城市 · {{regions}} 个大区",
  },
  "cityPieChart.cityCount.one": { fr: "{{count}} ville", en: "{{count}} city", zh: "{{count}} 座城市" },
  "cityPieChart.cityCount.other": { fr: "{{count}} villes", en: "{{count}} cities", zh: "{{count}} 座城市" },

  // ---------------------------------------------------------------------
  // Gallery / Réalisations
  // ---------------------------------------------------------------------
  "gallery.heading.pre": { fr: "Nos", en: "Our", zh: "我们的" },
  "gallery.heading.highlight": { fr: "Réalisations", en: "Work", zh: "案例展示" },
  "gallery.subtitle": {
    fr: "Aperçu de nos campagnes et opérations terrain",
    en: "A look at our campaigns and field operations",
    zh: "我们的广告活动与实地推广一览",
  },
  "gallery.previous": { fr: "Photo précédente", en: "Previous photo", zh: "上一张" },
  "gallery.next": { fr: "Photo suivante", en: "Next photo", zh: "下一张" },
  "gallery.viewPhoto": { fr: "Voir la photo {{n}}", en: "View photo {{n}}", zh: "查看第 {{n}} 张照片" },
  "gallery.footer": {
    fr: "{{count}} photos • Cliquez sur les flèches ou les vignettes pour naviguer",
    en: "{{count}} photos • Use the arrows or thumbnails to navigate",
    zh: "{{count}} 张照片 • 点击箭头或缩略图浏览",
  },

  // ---------------------------------------------------------------------
  // Clients / "Ils nous font Confiance"
  // ---------------------------------------------------------------------
  "clients.heading.pre": { fr: "Ils nous font", en: "They", zh: "他们" },
  "clients.heading.highlight": { fr: "Confiance", en: "Trust Us", zh: "信任我们" },
  "clients.subtitle": {
    fr: "Des marques et institutions qui nous accompagnent",
    en: "Brands and institutions that work with us",
    zh: "与我们合作的品牌与机构",
  },
  "clients.seeAll": { fr: "Voir toutes nos références ({{count}}+)", en: "See all our references ({{count}}+)", zh: "查看全部客户案例 ({{count}}+)" },

  // Catégories clients (utilisées sur /references et pour regrouper les logos)
  "clientCategory.institutions": { fr: "Institutions & Collectivités", en: "Institutions & Local Authorities", zh: "机构与地方政府" },
  "clientCategory.ecoles": { fr: "Écoles & Formation", en: "Schools & Training", zh: "学校与培训机构" },
  "clientCategory.marques": { fr: "Grandes Marques & Entreprises", en: "Major Brands & Companies", zh: "知名品牌与企业" },
  "clientCategory.culture": { fr: "Culture & Médias", en: "Culture & Media", zh: "文化与媒体" },

  // ---------------------------------------------------------------------
  // Références (page /references)
  // ---------------------------------------------------------------------
  "references.metaTitle": { fr: "Nos Références - MediaHub Campus", en: "Our References - MediaHub Campus", zh: "客户案例 - MediaHub Campus" },
  "references.metaDescription": {
    fr: "Marques, institutions et établissements qui font confiance à MediaHub Campus pour leurs campagnes sur les campus universitaires et lycées de France.",
    en: "Brands, institutions and schools that trust MediaHub Campus for their campaigns across French university campuses and high schools.",
    zh: "众多品牌、机构与院校信赖 MediaHub Campus,在法国大学校园与中学开展广告活动。",
  },
  "references.heading.pre": { fr: "Nos", en: "Our", zh: "我们的" },
  "references.heading.highlight": { fr: "Références", en: "References", zh: "客户案例" },
  "references.subtitle": {
    fr: "Marques, institutions et établissements qui nous accompagnent sur les campus universitaires et lycées de France.",
    en: "Brands, institutions and schools that work with us across French university campuses and high schools.",
    zh: "在法国大学校园与中学与我们合作的品牌、机构与院校。",
  },
  "references.notFoundPre": { fr: "Vous ne trouvez pas le vôtre ?", en: "Can't find yours?", zh: "没有找到您的品牌?" },
  "references.notFoundLink": { fr: "Parlons de votre projet", en: "Let's talk about your project", zh: "聊聊您的项目" },

  // ---------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------
  "contact.heading.pre": { fr: "Contactez-", en: "Contact ", zh: "联系" },
  "contact.heading.highlight": { fr: "nous", en: "Us", zh: "我们" },
  "contact.subtitle": { fr: "Discutons de votre prochaine campagne", en: "Let's discuss your next campaign", zh: "一起聊聊您的下一次推广活动" },
  "contact.form.name": { fr: "Nom *", en: "Name *", zh: "姓名 *" },
  "contact.form.namePlaceholder": { fr: "Votre nom", en: "Your name", zh: "您的姓名" },
  "contact.form.email": { fr: "Email *", en: "Email *", zh: "邮箱 *" },
  "contact.form.emailPlaceholder": { fr: "votre@email.com", en: "you@email.com", zh: "您的邮箱" },
  "contact.form.company": { fr: "Entreprise", en: "Company", zh: "公司" },
  "contact.form.companyPlaceholder": { fr: "Votre entreprise", en: "Your company", zh: "您的公司名称" },
  "contact.form.campaignType": { fr: "Type de campagne *", en: "Campaign type *", zh: "活动类型 *" },
  "contact.form.campaignTypePlaceholder": { fr: "Choisissez un type", en: "Choose a type", zh: "请选择类型" },
  "contact.form.zone": { fr: "Zone(s) visée(s)", en: "Target zone(s)", zh: "目标区域" },
  "contact.form.zonePlaceholder": { fr: "ex : Lyon, Bordeaux, Île-de-France...", en: "e.g. Lyon, Bordeaux, Paris region...", zh: "例如:里昂、波尔多、法兰西岛..." },
  "contact.form.period": { fr: "Période souhaitée", en: "Desired period", zh: "期望时间段" },
  "contact.form.periodPlaceholder": { fr: "ex : 4 semaines, octobre 2026", en: "e.g. 4 weeks, October 2026", zh: "例如:4 周,2026 年 10 月" },
  "contact.form.budget": { fr: "Budget indicatif", en: "Estimated budget", zh: "预算区间" },
  "contact.form.message": { fr: "Message *", en: "Message *", zh: "留言 *" },
  "contact.form.messagePlaceholder": { fr: "Décrivez votre projet...", en: "Describe your project...", zh: "请描述您的项目..." },
  "contact.form.sending": { fr: "Envoi en cours...", en: "Sending...", zh: "发送中..." },
  "contact.form.sent": { fr: "Message envoyé !", en: "Message sent!", zh: "消息已发送!" },
  "contact.form.retry": { fr: "Réessayer", en: "Retry", zh: "重试" },
  "contact.form.send": { fr: "Envoyer", en: "Send", zh: "发送" },
  "contact.form.error": { fr: "Une erreur est survenue. Veuillez réessayer.", en: "An error occurred. Please try again.", zh: "发生错误,请重试。" },

  // Types de campagne (valeurs affichées dans le formulaire et le simulateur)
  "campaignType.Affichage Universitaire": { fr: "Affichage Universitaire", en: "University Poster Advertising", zh: "大学海报广告" },
  "campaignType.Affichage Scolaire": { fr: "Affichage Scolaire", en: "High School Advertising", zh: "中学广告" },
  "campaignType.MédiaTables": { fr: "MédiaTables", en: "MediaTables", zh: "餐桌媒体" },
  "campaignType.Événementiel": { fr: "Événementiel", en: "Events", zh: "活动营销" },
  "campaignType.Je ne sais pas encore": { fr: "Je ne sais pas encore", en: "Not sure yet", zh: "尚未确定" },

  // Budgets (valeurs affichées dans le formulaire)
  "budgetRange.Budget non défini": { fr: "Budget non défini", en: "Budget not defined", zh: "预算未定" },
  "budgetRange.Moins de 2 000 €": { fr: "Moins de 2 000 €", en: "Under €2,000", zh: "低于 2,000 欧元" },
  "budgetRange.2 000 – 5 000 €": { fr: "2 000 – 5 000 €", en: "€2,000 – €5,000", zh: "2,000 – 5,000 欧元" },
  "budgetRange.5 000 – 15 000 €": { fr: "5 000 – 15 000 €", en: "€5,000 – €15,000", zh: "5,000 – 15,000 欧元" },
  "budgetRange.15 000 € et plus": { fr: "15 000 € et plus", en: "€15,000 and above", zh: "15,000 欧元以上" },

  // ---------------------------------------------------------------------
  // Simulateur de devis
  // ---------------------------------------------------------------------
  "simulator.metaTitle": { fr: "Simulateur de Devis - MediaHub Campus", en: "Quote Simulator - MediaHub Campus", zh: "报价模拟器 - MediaHub Campus" },
  "simulator.metaDescription": {
    fr: "Simulez votre budget de campagne d'affichage universitaire en quelques clics : sélectionnez vos zones Campus et la durée souhaitée pour obtenir une estimation immédiate.",
    en: "Simulate your university poster campaign budget in a few clicks: select your Campus zones and campaign length for an instant estimate.",
    zh: "只需几步即可模拟您的大学海报广告预算:选择校园区域与投放时长,立即获取估算报价。",
  },
  "simulator.heading.pre": { fr: "Simulateur de", en: "Quote", zh: "报价" },
  "simulator.heading.highlight": { fr: "Devis", en: "Simulator", zh: "模拟器" },
  "simulator.subtitle": {
    fr: "Sélectionnez votre réseau, vos zones et la durée de campagne pour obtenir une estimation budgétaire immédiate.",
    en: "Select your network, zones and campaign length to get an instant budget estimate.",
    zh: "选择您的网络类型、目标区域与投放时长,即可获得即时预算估算。",
  },
  "simulator.zones.title": { fr: "Zones", en: "Zones", zh: "区域" },
  "simulator.zones.selected.one": { fr: "({{count}} sélectionnée)", en: "({{count}} selected)", zh: "(已选 {{count}} 个)" },
  "simulator.zones.selected.other": { fr: "({{count}} sélectionnées)", en: "({{count}} selected)", zh: "(已选 {{count}} 个)" },
  "simulator.zones.deselectAll": { fr: "Tout désélectionner", en: "Deselect all", zh: "全部取消选择" },
  "simulator.zones.franceEntiere": { fr: "France entière — sélectionner les 60 zones", en: "All of France — select all 60 zones", zh: "全法国 — 选择全部 60 个区域" },
  "simulator.zones.searchPlaceholder": { fr: "Rechercher une ville...", en: "Search for a city...", zh: "搜索城市..." },
  "simulator.zones.noResults": { fr: "Aucune ville ne correspond à votre recherche.", en: "No city matches your search.", zh: "未找到匹配的城市。" },
  "simulator.results.title": { fr: "Votre estimation", en: "Your estimate", zh: "您的预算估算" },
  "simulator.results.network": { fr: "Réseau", en: "Network", zh: "网络类型" },
  "simulator.network.universites": { fr: "Universités", en: "Universities", zh: "大学" },
  "simulator.network.lycees": { fr: "Lycées", en: "High schools", zh: "中学" },
  "simulator.network.both": { fr: "Les deux", en: "Both", zh: "两者皆选" },
  "simulator.duration.title": { fr: "Durée de campagne", en: "Campaign length", zh: "投放时长" },
  "simulator.duration.weeksShort": { fr: "sem.", en: "wks", zh: "周" },
  "simulator.duration.week.one": { fr: "semaine", en: "week", zh: "周" },
  "simulator.duration.week.other": { fr: "semaines", en: "weeks", zh: "周" },
  "simulator.results.selectZone": { fr: "Sélectionnez au moins une zone pour voir votre estimation.", en: "Select at least one zone to see your estimate.", zh: "请至少选择一个区域以查看预算估算。" },
  "simulator.results.audience": { fr: "Audience cumulée", en: "Total audience", zh: "累计受众" },
  "simulator.results.ots": { fr: "Occasions de voir", en: "Opportunities to see", zh: "曝光机会数" },
  "simulator.results.panels": { fr: "Affiches A2", en: "A2 posters", zh: "A2 海报数量" },
  "simulator.results.subtotal": { fr: "Sous-total HT", en: "Subtotal (excl. VAT)", zh: "小计(不含税)" },
  "simulator.results.discount": { fr: "Remise dégressive (-{{pct}}%)", en: "Volume discount (-{{pct}}%)", zh: "阶梯折扣 (-{{pct}}%)" },
  "simulator.results.budgetHT": { fr: "Budget HT", en: "Budget (excl. VAT)", zh: "预算(不含税)" },
  "simulator.results.vat": { fr: "dont TVA (20%) : {{amount}}", en: "incl. VAT (20%): {{amount}}", zh: "含增值税 (20%): {{amount}}" },
  "simulator.results.ttc": { fr: "TTC : {{amount}}", en: "Total incl. VAT: {{amount}}", zh: "含税总额: {{amount}}" },
  "simulator.results.requestQuote": { fr: "Demander ce devis", en: "Request this quote", zh: "申请此报价" },
  "simulator.results.copySummary": { fr: "Copier le résumé", en: "Copy summary", zh: "复制摘要" },
  "simulator.results.copied": { fr: "Résumé copié !", en: "Summary copied!", zh: "摘要已复制!" },
  "simulator.results.disclaimer": {
    fr: "Estimation indicative, hors coefficient catégorie de lieu et conditions commerciales spécifiques. Un devis définitif vous sera transmis par notre équipe.",
    en: "Indicative estimate, excluding location category coefficient and specific commercial terms. A final quote will be provided by our team.",
    zh: "此为参考估算,未包含场所类别系数及特殊商务条款。最终报价将由我们的团队提供。",
  },
  "simulator.info.targeting": {
    fr: "Un ciblage par discipline ou filière est aussi possible — précisez-le dans votre demande de devis.",
    en: "Targeting by discipline or field of study is also possible — mention it in your quote request.",
    zh: "也可按专业或学科定向投放 — 请在报价申请中说明。",
  },
  "simulator.info.network": {
    fr: "Le détail du réseau d'affichage (établissements et emplacements précis) vous sera transmis avec le devis.",
    en: "The full poster network details (institutions and exact locations) will be provided with the quote.",
    zh: "详细的广告网络信息(具体院校与位置)将随报价一并提供。",
  },

  // ---------------------------------------------------------------------
  // 404
  // ---------------------------------------------------------------------
  "notFound.title": { fr: "Page introuvable", en: "Page not found", zh: "页面未找到" },
  "notFound.description": {
    fr: "Oups ! La page que vous recherchez semble avoir disparu dans les couloirs du campus...",
    en: "Oops! The page you're looking for seems to have vanished somewhere in the campus hallways...",
    zh: "哎呀!您要找的页面似乎在校园的走廊里消失了……",
  },
  "notFound.home": { fr: "Retour à l'accueil", en: "Back to homepage", zh: "返回首页" },
  "notFound.back": { fr: "Page précédente", en: "Go back", zh: "返回上一页" },

  // ---------------------------------------------------------------------
  // Mascotte (easter egg)
  // ---------------------------------------------------------------------
  "mascot.show": { fr: "Voir les mascottes", en: "Show the mascots", zh: "显示吉祥物" },
  "mascot.hide": { fr: "Cacher les mascottes", en: "Hide the mascots", zh: "隐藏吉祥物" },
  "mascot.clickMe": { fr: "Clique-moi !", en: "Click me!", zh: "点我!" },
  "mascot.tap": { fr: "Tap !", en: "Tap!", zh: "点击!" },
} as const satisfies Record<string, TranslationEntry>;

export type TranslationKey = keyof typeof translations;
