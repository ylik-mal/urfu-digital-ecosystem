/**
 * Единое ядро экосистемы УрФУ (urfu-core.js) — Версия 2.0
 * Обеспечивает сквозное состояние localStorage, 4 языка (RU/EN/ZH/AR),
 * ГОСТ А+, тему, Focus Trap и Spotlight-поиск по "/" на всех 11 страницах.
 */

window.URFU_KEYS = Object.freeze({
  THEME: 'urfu_theme',
  A11Y: 'urfu_a11y',
  LANG: 'urfu_lang',
  EGE: 'urfu_ege_score',
  ID_BONUS: 'urfu_id_bonus'
});

window.urfuStorage = {
  get: function(key, fallback) {
    try {
      var val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set: function(key, value) {
    try {
      localStorage.setItem(key, String(value));
    } catch (e) {}
  }
};

window.URFU_SEARCH_INDEX = [
  { title: 'Калькулятор индивидуальных достижений (до +10 баллов к ЕГЭ)', tag: 'Абитуриентам', url: 'applicants.html#id-calculator' },
  { title: 'Конкурсные списки поступающих по СНИЛС в реальном времени', tag: 'Приём', url: 'applicants.html#timeline' },
  { title: 'Умный подбор образовательной программы по баллам ЕГЭ + ИД', tag: 'Навигатор', url: 'index.html#calculator' },
  { title: 'Каталог всех 13 профильных институтов УрФУ и работодателей', tag: 'Институты', url: 'institutes.html' },
  { title: 'Навигатор школьника по классам (5–11 кл.), СУНЦ и «Изумруд»', tag: 'Школьникам', url: 'school.html#grade-navigator' },
  { title: 'Расписание пар, сессии и симулятор БРС / стипендий', tag: 'Студентам', url: 'schedule.html#timetable' },
  { title: 'Кампус «Новокольцовский», общежития и калькулятор заселения', tag: 'Кампус', url: 'campus.html#accommodation-calc' },
  { title: 'Официальный логотип УрФУ, свитшоты, серия Reflective и пропуска', tag: 'Айдентика', url: 'students-brand.html#merch-showcase' },
  { title: 'Наука «Приоритет-2030», 120+ лабораторий УМНОЦ и заказ НИОКР', tag: 'Наука', url: 'science.html' },
  { title: 'Партнёрам: проектное обучение, Центр карьеры и Эндаумент-фонд', tag: 'Бизнес', url: 'partners.html#endowment' },
  { title: 'Медиацентр УрФУ: главные новости науки и регистрация на ДОД', tag: 'Медиа', url: 'media.html' },
  { title: 'Справочник учебных корпусов, телефонов деканатов и маршруты', tag: 'Контакты', url: 'contacts.html#directory' },
  { title: 'Интерактивная презентация проекта и сравнение До / После', tag: 'Презентация', url: 'pres.html' }
];

window.URFU_I18N = {
  RU: {
    dod_badge: "Регистрация открыта",
    dod_title: "День открытых дверей 2027",
    dod_sub: "Узнать всё о поступлении →",
    stat_students: "студентов",
    stat_programs: "программ",
    stat_institutes: "профильных институтов",
    skip_link: 'Перейти к основному содержимому',
    nav_main: 'Главная', nav_school: 'Школьникам', nav_applicants: 'Абитуриентам', nav_institutes: 'Институты',
    nav_students: 'Студентам', nav_brand: 'Айдентика', nav_campus: 'Кампус', nav_science: 'Наука',
    nav_partners: 'Партнёрам', nav_contacts: 'Контакты', btn_login: 'Войти', btn_back_home: '← На главную',
    // index.html
    anc_admission: 'Поступление', anc_programs: 'Программы', anc_institutes: '13 Институтов',
    anc_science: 'Наука и R&D', anc_campus: 'Кампус', anc_news: 'Новости',
    hero_badge: 'Екатеринбург • ул. Мира, 19 • Приёмная кампания открыта',
    hero_title: 'Учись в УрФУ.<br/>Создавай будущее',
    hero_cta: 'Подать документы', hero_subcta: 'Подобрать программу',
    about_title: 'О главном',
    about_text: 'Уральский федеральный университет — это не просто аудитории и дипломы. Это масштабная экосистема, где смелые идеи превращаются в реальные технологии. Мы объединяем фундаментальную науку, передовые IT-решения и амбициозных людей, чтобы отвечать на вызовы завтрашнего дня.',
    about_sub: 'Твой старт к большим достижениям начинается здесь.',
    tag_top10: 'Топ-10 вузов России', tag_campus: 'Кампус мирового уровня →', tag_prio: 'Приоритет-2030 →',
    map_about_btn: 'О кампусе →', map_sched_btn: '📅 Расписание пар',
    calc_tag: 'Навигатор абитуриента УрФУ', calc_title: 'Подбери образовательную программу',
    cat_all: 'Все направления', cat_it: 'IT и ИИ', cat_eng: 'Инженерия', cat_econ: 'Экономика и менеджмент',
    calc_ege_label: 'Сумма баллов за 3 предмета ЕГЭ:', calc_id_label: 'Баллы за ИД (макс. +10):',
    calc_id_link: 'Рассчитать свои баллы ИД в калькуляторе →', calc_total_label: 'Конкурсный балл (ЕГЭ + ИД):',
    inst_tag: 'Структура университета', inst_title: '13 профильных институтов УрФУ', inst_all_link: 'Все 13 →',
    sci_badge: 'Наука и Инновации УрФУ', sci_link: 'Перейти в раздел Науки →',
    sci_title: 'Уральский межрегиональный научно-образовательный центр',
    sci_desc: 'Разрабатываем технологии для аэрокосмической отрасли, водородной энергетики, квантовой сенсорики и биофармацевтики совместно с индустриальными лидерами.',
    sci_s1: 'научных лабораторий', sci_s2: 'объем НИОКР и R&D', sci_s3: 'по публикационной активности',
    news_title: 'События и новости УрФУ', news_center: 'Медиацентр →', news_all: 'Все новости и афиша университета →',
    // schedule.html
    sch_bc_current: 'Расписание, БРС и стипендии',
    sch_tab_time: 'Расписание пар', sch_tab_brs: 'Калькулятор БРС и стипендий',
    sch_iot_tag: 'Индивидуальные образовательные траектории (ИОТ)',
    sch_main_title: 'Умное расписание занятий и сессии УрФУ',
    sch_main_sub: 'Выбери академическую группу или открой симулятор баллов БРС ниже',
    sch_brs_tag: 'Балльно-рейтинговая система УрФУ',
    sch_brs_title: 'Симулятор итогового балла БРС по дисциплине',
    sch_brs_sub: 'Двигай ползунки текущей аттестации и экзамена, чтобы узнать итоговую оценку в зачетку',
    sch_sem_label: 'Баллы за семестр (лекции, практики, проекты, макс. 60):',
    sch_exam_label: 'Баллы за экзамен / зачет (макс. 40):',
    sch_total_label: 'Итоговый рейтинг БРС:',
    sch_stip_badge: 'Финансовая поддержка', sch_stip_title: 'Виды стипендий в УрФУ',
    sch_stip_desc: 'Помимо академической стипендии студенты получают ПГАС за достижения в науке, спорте, творчестве и общественной деятельности.',
    sch_mfc_btn: 'Заказать справку о стипендии в МФЦ УрФУ →',
    // students-brand.html
    br_bc_current: 'Айдентика, мерч и держатели пропусков',
    br_tab_1: 'Цифровые носители', br_tab_2: 'Университетский мерч', br_tab_3: 'Держатели пропусков и стелы',
    br_hero_tag: 'Визуальный код УрФУ',
    br_hero_title: 'Носи характер УрФУ: цифровые носители, мерч и кампус-среда',
    br_hero_desc: 'Единая дизайн-система университета: скачивай официальные логотипы УрФУ для презентаций и ВКР, выбирай графитовые свитшоты, стикерпаки, светоотражающие карабины и фирменные держатели для кампусных пропусков.',
    br_dl_kit: 'Скачать медиа-кит студента (.ZIP)', br_see_merch: 'Смотреть мерч и пропуска ↓',
    br_s1_tag: '01 • Бренд-система для учёбы и проектов', br_s1_title: 'Цифровые носители логотипа УрФУ',
    br_s2_tag: '02 • Официальная коллекция UrFU Store', br_s2_title: 'Университетский мерч и спецсерия Reflective',
    br_s3_tag: '03 • Единый кампусный пропуск и навигация', br_s3_title: 'Держатели для пропусков УрФУ и навигационные стелы'
  },
  EN: {
    dod_badge: "Registration Open",
    dod_title: "Open Doors Day 2027",
    dod_sub: "Learn everything about admission →",
    stat_students: "students",
    stat_programs: "programs",
    stat_institutes: "profile institutes",
    skip_link: 'Skip to main content',
    nav_main: 'Home', nav_school: 'High School', nav_applicants: 'Admissions', nav_institutes: 'Institutes',
    nav_students: 'Students', nav_brand: 'Brand & Merch', nav_campus: 'Campus', nav_science: 'Research',
    nav_partners: 'Partners', nav_contacts: 'Contacts', btn_login: 'Sign In', btn_back_home: '← Back to Home',
    anc_admission: 'Admissions', anc_programs: 'Degree Programs', anc_institutes: '13 Institutes',
    anc_science: 'Research & R&D', anc_campus: 'Campus', anc_news: 'News & Events',
    hero_badge: 'Yekaterinburg • Mira St., 19 • Admissions Open',
    hero_title: 'Study at UrFU.<br/>Create the Future',
    hero_cta: 'Apply Now', hero_subcta: 'Find a Program',
    about_title: 'About UrFU',
    about_text: 'Ural Federal University is more than lecture halls and diplomas. It is a large-scale ecosystem where bold ideas turn into real technologies. We unite fundamental science, advanced IT solutions, and ambitious minds to meet tomorrow’s challenges.',
    about_sub: 'Your journey to great achievements starts here.',
    tag_top10: 'Top-10 Russian Universities', tag_campus: 'World-Class Campus →', tag_prio: 'Priority-2030 →',
    map_about_btn: 'Campus Info →', map_sched_btn: '📅 Class Schedule',
    calc_tag: 'UrFU Applicant Navigator', calc_title: 'Choose Your Degree Program',
    cat_all: 'All Fields', cat_it: 'IT & AI', cat_eng: 'Engineering', cat_econ: 'Economics & Management',
    calc_ege_label: 'Total Exam Score (3 subjects):', calc_id_label: 'Individual Achievements (max +10):',
    calc_id_link: 'Calculate your bonus points →', calc_total_label: 'Total Competitive Score:',
    inst_tag: 'University Structure', inst_title: '13 Academic Institutes of UrFU', inst_all_link: 'All 13 →',
    sci_badge: 'UrFU Science & Innovation', sci_link: 'Explore Research →',
    sci_title: 'Ural Interregional Research and Education Center',
    sci_desc: 'Developing technologies for aerospace, hydrogen energy, quantum sensorics, and biopharmaceutics together with industrial leaders.',
    sci_s1: 'research laboratories', sci_s2: 'annual R&D volume', sci_s3: 'in publication output',
    news_title: 'UrFU News & Events', news_center: 'Media Center →', news_all: 'All university news & events →',
    // schedule.html
    sch_bc_current: 'Class Schedule, BRS Rating & Scholarships',
    sch_tab_time: 'Class Timetable', sch_tab_brs: 'BRS & Scholarship Calculator',
    sch_iot_tag: 'Individual Educational Trajectories (IET)',
    sch_main_title: 'Smart Class & Exam Schedule at UrFU',
    sch_main_sub: 'Select your academic group or test the BRS grade simulator below',
    sch_brs_tag: 'UrFU Point-Rating System (BRS)',
    sch_brs_title: 'Final Course Grade Simulator (BRS)',
    sch_brs_sub: 'Adjust the semester and exam sliders to calculate your final grade and scholarship status',
    sch_sem_label: 'Semester Points (lectures, labs, projects, max 60):',
    sch_exam_label: 'Final Exam / Credit Points (max 40):',
    sch_total_label: 'Total BRS Score:',
    sch_stip_badge: 'Financial Support', sch_stip_title: 'Scholarships & Grants at UrFU',
    sch_stip_desc: 'In addition to standard academic stipends, students receive enhanced state scholarships for research, sports, and community achievements.',
    sch_mfc_btn: 'Request Scholarship Certificate at UrFU Student Center →',
    // students-brand.html
    br_bc_current: 'Brand Identity, Merch & Campus ID Holders',
    br_tab_1: 'Digital Assets', br_tab_2: 'University Merch', br_tab_3: 'ID Holders & Wayfinding',
    br_hero_tag: 'UrFU Visual Code',
    br_hero_title: 'Wear the UrFU Spirit: Digital Assets, Merch & Campus Wayfinding',
    br_hero_desc: 'Unified university design system: download official UrFU logos for presentations and theses, explore graphite sweatshirts, sticker packs, Reflective lanyards, and campus ID holders.',
    br_dl_kit: 'Download Student Media Kit (.ZIP)', br_see_merch: 'Explore Merch & Badges ↓',
    br_s1_tag: '01 • Brand System for Study & Projects', br_s1_title: 'Digital UrFU Logo Assets',
    br_s2_tag: '02 • Official UrFU Store Collection', br_s2_title: 'University Merch & Reflective Series',
    br_s3_tag: '03 • Unified Campus Pass & Navigation', br_s3_title: 'UrFU Pass Holders & Interactive Wayfinding Pylons'
  },
  ZH: {
    dod_badge: "开放注册",
    dod_title: "2027开放日",
    dod_sub: "了解入学须知 →",
    stat_students: "名学生",
    stat_programs: "个专业",
    stat_institutes: "个专业 学院",
    skip_link: '跳转到主要内容',
    nav_main: '首页', nav_school: '高中生', nav_applicants: '招生信息', nav_institutes: '学院设置',
    nav_students: '在校学生', nav_brand: '品牌周边', nav_campus: '现代化校园', nav_science: '科学研究',
    nav_partners: '合作伙伴', nav_contacts: '联系方式', btn_login: '登录', btn_back_home: '← 返回首页',
    anc_admission: '入学申请', anc_programs: '专业目录', anc_institutes: '13个学院',
    anc_science: '科研创新', anc_campus: '世界级校园', anc_news: '大学新闻',
    hero_badge: '叶卡捷琳堡 • 米拉街19号 • 招生正式开启',
    hero_title: '在乌拉尔联邦大学学习<br/>创造未来',
    hero_cta: '立即申请', hero_subcta: '匹配专业',
    about_title: '关于乌拉尔联邦大学',
    about_text: '乌拉尔联邦大学不仅是课堂与文凭，更是一个将大胆创意转化为尖端技术的大型生态系统。',
    about_sub: '您的卓越成就之旅从这里开启。',
    tag_top10: '俄罗斯十强高校', tag_campus: '世界级现代化校园 →', tag_prio: '2030优先发展计划 →',
    map_about_btn: '校园详情 →', map_sched_btn: '📅 课程表查询',
    calc_tag: '申请人智能导航', calc_title: '按考试分数匹配专业',
    cat_all: '全部方向', cat_it: 'IT与人工智能', cat_eng: '工程与制造', cat_econ: '经济与管理',
    calc_ege_label: '三门科目总分：', calc_id_label: '个人成就加分（最高+10）：',
    calc_id_link: '计算您的个人成就加分 →', calc_total_label: '录取竞争总分：',
    inst_tag: '学术架构', inst_title: '乌拉尔联邦大学13个专业学院', inst_all_link: '查看全部 13 →',
    sci_badge: '科研与创新中心', sci_link: '进入科研版块 →',
    sci_title: '乌拉尔跨区域科教中心 (UMNOC)',
    sci_desc: '与行业领军企业携手开发航空航天、氢能源、量子传感与生物制药领域的核心技术。',
    sci_s1: '个科学实验室', sci_s2: '研发合同总额', sci_s3: '论文发表量排名',
    news_title: '大学活动与新闻', news_center: '媒体中心 →', news_all: '查看所有新闻与活动预告 →',
    sch_bc_current: '课程表、BRS积分与奖学金',
    sch_tab_time: '课程表查询', sch_tab_brs: 'BRS积分与奖学金计算器',
    sch_iot_tag: '个性化教育轨迹 (IET)',
    sch_main_title: '乌拉尔联邦大学智能课程与考试时间表',
    sch_main_sub: '选择您的学术班级或使用下方的BRS成绩模拟器',
    sch_brs_tag: '乌拉尔联邦大学积分评级系统 (BRS)',
    sch_brs_title: '学科最终成绩模拟器 (BRS)',
    sch_brs_sub: '拖动学期表现和期末考试滑块以计算总评成绩与奖学金资格',
    sch_sem_label: '学期平时分（讲座、实验、项目，最高60分）：',
    sch_exam_label: '期末考试/考核分（最高40分）：',
    sch_total_label: 'BRS总评积分：',
    sch_stip_badge: '财务支持与激励', sch_stip_title: '乌拉尔联邦大学奖学金类型',
    sch_stip_desc: '除标准学业奖学金外，学生还可因科研、体育、文化及社会贡献获得国家高额奖学金。',
    sch_mfc_btn: '在乌拉尔联邦大学学生服务中心申请证明 →',
    br_bc_current: '品牌视觉、大学周边与校园卡套',
    br_tab_1: '数字标志资产', br_tab_2: '官方大学周边', br_tab_3: '校园卡套与导视系统',
    br_hero_tag: '乌拉尔联邦大学视觉代码',
    br_hero_title: '展现乌拉尔联大精神：数字标志、周边与校园导视',
    br_hero_desc: '统一的大学设计系统：下载用于演示和毕业论文的官方标志，探索石墨灰卫衣、反光挂绳与校园通行证卡套。',
    br_dl_kit: '下载学生媒体工具包 (.ZIP)', br_see_merch: '查看周边与通行证 ↓',
    br_s1_tag: '01 • 学习与项目品牌系统', br_s1_title: '乌拉尔联邦大学数字标志资产',
    br_s2_tag: '02 • UrFU Store 官方系列', br_s2_title: '大学周边与 Reflective 反光系列',
    br_s3_tag: '03 • 统一校园通行证与导视', br_s3_title: '校园卡套与交互式楼宇导视立柱'
  },
  AR: {
    dod_badge: "التسجيل مفتوح",
    dod_title: "يوم الأبواب المفتوحة 2027",
    dod_sub: "تعرف على كل شيء عن القبول →",
    stat_students: "طالب",
    stat_programs: "برنامج",
    stat_institutes: "معهد متخصص",
    skip_link: 'انتقل إلى المحتوى الرئيسي',
    nav_main: 'الرئيسية', nav_school: 'لطلبة المدارس', nav_applicants: 'القبول والتسجيل', nav_institutes: 'المعاهد',
    nav_students: 'الطلاب', nav_brand: 'الهوية البصرية', nav_campus: 'الحرم الجامعي', nav_science: 'الأبحاث',
    nav_partners: 'الشركاء', nav_contacts: 'اتصل بنا', btn_login: 'دخول', btn_back_home: '← العودة للرئيسية',
    anc_admission: 'القبول', anc_programs: 'البرامج', anc_institutes: '13 معهداً',
    anc_science: 'البحث العلمي', anc_campus: 'الحرم الجامعي', anc_news: 'الأخبار',
    hero_badge: 'يكاترينبورغ • شارع ميرا 19 • التسجيل مفتوح',
    hero_title: 'ادرس في UrFU.<br/>اصنع المستقبل',
    hero_cta: 'تقديم الوثائق', hero_subcta: 'اختر البرنامج',
    about_title: 'عن الجامعة',
    about_text: 'جامعة الأورال الفيدرالية هي بيئة متكاملة تحول الأفكار الطموحة إلى تقنيات حقيقية.',
    about_sub: 'بدايتك نحو الإنجازات الكبرى تبدأ من هنا.',
    tag_top10: 'أفضل 10 جامعات في روسيا', tag_campus: 'حرم جامعي عالمي ←', tag_prio: 'أولوية-2030 ←',
    map_about_btn: 'عن الحرم ←', map_sched_btn: '📅 جدول المحاضرات',
    calc_tag: 'دليل المتقدمين', calc_title: 'اختر برنامجك التعليمي',
    cat_all: 'جميع التخصصات', cat_it: 'تكنولوجيا المعلومات والذكاء الاصطناعي', cat_eng: 'الهندسة', cat_econ: 'الاقتصاد والإدارة',
    calc_ege_label: 'مجموع درجات الاختبار:', calc_id_label: 'نقاط الإنجازات الفردية (حتى +10):',
    calc_id_link: 'احسب نقاطك الإضافية ←', calc_total_label: 'المجموع التنافسي الكلي:',
    inst_tag: 'هيكل الجامعة', inst_title: '13 معهداً متخصصاً في UrFU', inst_all_link: 'عرض الكل 13 ←',
    sci_badge: 'العلوم والابتكار', sci_link: 'انتقل إلى قسم الأبحاث ←',
    sci_title: 'المركز العلمي والتعليمي للأورال',
    sci_desc: 'نطور تقنيات الطيران والفضاء وطاقة الهيدروجين وأجهزة الاستشعار الكمومية والأدوية الحيوية.',
    sci_s1: 'مختبر علمي', sci_s2: 'حجم الأبحاث والتطوير', sci_s3: 'في النشاط البحثي',
    news_title: 'أخبار وفعاليات الجامعة', news_center: 'المركز الإعلامي ←', news_all: 'جميع الأخبار والفعاليات ←',
    sch_bc_current: 'جدول المحاضرات ونظام التقييم والمنح',
    sch_tab_time: 'جدول المحاضرات', sch_tab_brs: 'حاسبة التقييم والمنح',
    sch_iot_tag: 'المسارات التعليمية الفردية',
    sch_main_title: 'الجدول الذكي للمحاضرات والامتحانات في UrFU',
    sch_main_sub: 'اختر مجموعتك الأكاديمية أو جرب محاكي الدرجات أدناه',
    sch_brs_tag: 'نظام التقييم بالنقاط (BRS)',
    sch_brs_title: 'محاكي الدرجة النهائية للمقرر',
    sch_brs_sub: 'حرك المؤشرات لمعرفة تقييمك النهائي وحالة المنحة الدراسية',
    sch_sem_label: 'نقاط الفصل الدراسي (الحد الأقصى 60):',
    sch_exam_label: 'نقاط الامتحان النهائي (الحد الأقصى 40):',
    sch_total_label: 'المجموع النهائي:',
    sch_stip_badge: 'الدعم المالي', sch_stip_title: 'أنواع المنح الدراسية في UrFU',
    sch_stip_desc: 'يحصل الطلاب المتفوقون على منح حكومية مرتفعة للإنجازات العلمية والرياضية والمجتمعية.',
    sch_mfc_btn: 'طلب شهادة المنحة من مركز خدمات الطلاب ←',
    br_bc_current: 'الهوية البصرية والمنتجات وحاملات البطاقات',
    br_tab_1: 'الشعارات الرقمية', br_tab_2: 'منتجات الجامعة', br_tab_3: 'حاملات البطاقات والملاحة',
    br_hero_tag: 'الرمز البصري لجامعة UrFU',
    br_hero_title: 'ارتدِ روح UrFU: الشعارات الرقمية والمنتجات وبيئة الحرم الجامعي',
    br_hero_desc: 'نظام تصميم موحد للجامعة: قم بتنزيل الشعارات الرسمية للعروض التقديمية وتصفح المنتجات العاكسة للضوء وحاملات البطاقات.',
    br_dl_kit: 'تنزيل الحزمة الإعلامية للطالب (.ZIP)', br_see_merch: 'عرض المنتجات والبطاقات ↓',
    br_s1_tag: '01 • نظام الهوية للدراسة والمشاريع', br_s1_title: 'الأصول الرقمية لشعار UrFU',
    br_s2_tag: '02 • المجموعة الرسمية لمتجر UrFU', br_s2_title: 'منتجات الجامعة وسلسلة Reflective العاكسة',
    br_s3_tag: '03 • بطاقة الحرم الجامعي الموحدة والملاحة', br_s3_title: 'حاملات بطاقات الطلاب وأعمدة التوجيه التفاعلية'
  }
};

window.toggleTheme = function() {
  var isDark = document.documentElement.classList.toggle('dark');
  window.urfuStorage.set(window.URFU_KEYS.THEME, isDark ? 'dark' : 'light');
};

window.toggleA11y = function() {
  var isA11y = document.documentElement.classList.toggle('a11y-mode');
  window.urfuStorage.set(window.URFU_KEYS.A11Y, isA11y ? 'true' : 'false');
};

window.toggleLangMenu = function() {
  var dd = document.getElementById('langDropdown');
  if (dd) dd.classList.toggle('hidden');
};

window.setLanguage = function(lang) {
  var validLang = window.URFU_I18N[lang] ? lang : 'RU';
  window.urfuStorage.set(window.URFU_KEYS.LANG, validLang);

  document.documentElement.setAttribute('dir', validLang === 'AR' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', validLang.toLowerCase());

  var label = document.getElementById('currentLangLabel');
  if (label) label.textContent = validLang;

  var dd = document.getElementById('langDropdown');
  if (dd) dd.classList.add('hidden');

  var dict = window.URFU_I18N[validLang];
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute('data-i18n');
    if (dict[key]) {
      elements[i].innerHTML = dict[key];
    }
  }
  if (typeof window.renderPrograms === 'function') {
    window.renderPrograms();
  }
};

window.lastFocusedEl = null;

window.trapModalFocus = function(modalId) {
  window.lastFocusedEl = document.activeElement;
  var modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  var firstInput = modal.querySelector('input, button, select, textarea, a[href]');
  if (firstInput) {
    setTimeout(function() { firstInput.focus(); }, 30);
  }
};

window.restoreModalFocus = function() {
  if (window.lastFocusedEl && typeof window.lastFocusedEl.focus === 'function') {
    window.lastFocusedEl.focus();
    window.lastFocusedEl = null;
  }
};

window.ensureGlobalSearchModal = function() {
  if (document.getElementById('searchModal')) return;
  var div = document.createElement('div');
  div.id = 'searchModal';
  div.setAttribute('role', 'dialog');
  div.setAttribute('aria-modal', 'true');
  div.setAttribute('aria-label', 'Умный поиск по экосистеме УрФУ');
  div.setAttribute('aria-hidden', 'true');
  div.className = 'hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4';
  div.onclick = function() { window.closeGlobalSearch(); };
  div.innerHTML = '' +
    '<div class="bg-white dark:bg-[#1E273B] rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-gray-100 dark:border-slate-700 space-y-4" onclick="event.stopPropagation()">' +
      '<div class="flex items-center gap-3 border-b border-gray-100 dark:border-slate-700 pb-3">' +
        '<svg class="w-5 h-5 text-[#FF1E6D] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>' +
        '<input id="liveSearchInput" type="text" aria-label="Поисковый запрос" oninput="window.runGlobalSearch(this.value)" placeholder="Найти программу, калькулятор ИД, корпус или СНИЛС..." class="w-full bg-transparent text-sm font-semibold focus:outline-none text-[#1A1D24] dark:text-white" />' +
        '<button type="button" onclick="window.closeGlobalSearch()" class="text-xs font-bold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-slate-800">ESC</button>' +
      '</div>' +
      '<div id="liveSearchResults" class="space-y-2 max-h-72 overflow-y-auto text-xs"></div>' +
    '</div>';
  document.body.appendChild(div);
};

window.openSearchModal = function() {
  window.ensureGlobalSearchModal();
  window.trapModalFocus('searchModal');
  var input = document.getElementById('liveSearchInput');
  if (input) {
    input.value = '';
    window.runGlobalSearch('');
  }
};

window.closeGlobalSearch = function() {
  var m = document.getElementById('searchModal');
  if (m) {
    m.classList.add('hidden');
    m.setAttribute('aria-hidden', 'true');
  }
  window.restoreModalFocus();
};

window.runGlobalSearch = function(q) {
  var query = (q || '').trim().toLowerCase();
  var list = window.URFU_SEARCH_INDEX.filter(function(item) {
    return !query || item.title.toLowerCase().indexOf(query) !== -1 || item.tag.toLowerCase().indexOf(query) !== -1;
  });
  var box = document.getElementById('liveSearchResults');
  if (!box) return;
  box.innerHTML = list.length ? list.map(function(i) {
    return '<a href="' + i.url + '" class="p-3.5 rounded-2xl bg-[#F4F5F8] dark:bg-slate-800/80 hover:border-[#FF1E6D] border border-transparent flex items-center justify-between gap-3 transition">' +
      '<span class="font-bold text-sm">' + i.title + '</span>' +
      '<span class="px-2.5 py-1 rounded-full text-xs font-extrabold bg-pink-50 dark:bg-pink-950 text-[#FF1E6D] shrink-0">' + i.tag + ' →</span>' +
    '</a>';
  }).join('') : '<div class="p-4 text-center text-gray-500">Ничего не найдено</div>';
};

document.addEventListener('DOMContentLoaded', function() {
  window.ensureGlobalSearchModal();
  var savedLang = window.urfuStorage.get(window.URFU_KEYS.LANG, 'RU');
  if (savedLang) window.setLanguage(savedLang);
});

document.addEventListener('keydown', function(e) {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    window.openSearchModal();
  }
  if (e.key === 'Escape') {
    window.closeGlobalSearch();
  }
});