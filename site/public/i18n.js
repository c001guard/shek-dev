const translations = {
  en: {
    'nav.about': 'About', 'nav.stack': 'Stack', 'nav.exp': 'Experience',
    'nav.projects': 'Projects', 'nav.arch': 'Architecture', 'nav.contact': 'Contact',
    'hero.avail': 'Available from July 2026',
    'hero.role': 'DevOps engineer / sysadmin',
    'hero.desc': 'Building reliable infrastructure with Linux, Docker, and CI/CD. Studying at School 21 (Sber). Maintaining IT across three institutions in Tashkent.',
    'hero.cta1': 'Get in touch', 'hero.cta2': 'Download CV',
    'about.title': 'About',
    'about.p1': 'Currently studying at <strong>School 21 (Sber)</strong> on the SysAdmin / DevOps track. Hands-on experience with Linux, Docker, GitLab CI/CD, monitoring (Prometheus + Grafana), Nginx, bash scripting and networking.',
    'about.p2': 'In parallel — administering IT infrastructure in <strong>three educational institutions</strong> in Tashkent: OS installs, networks, user support, incident resolution.',
    'about.p3': 'Previously worked as <strong>SEO specialist</strong>, administering WordPress sites: installations, plugins, security, HTML/CSS edits.',
    'about.s1': 'years of work experience', 'about.s2': 'PCs administered',
    'about.s3': 'volunteers I lead', 'about.s4': 'parallel positions',
    'stack.title': 'Tech stack', 'stack.sub': 'Self-assessed proficiency, Grafana-style.',
    'stack.c1': 'DevOps & infrastructure', 'stack.c2': 'Programming',
    'stack.c3': 'Networking & sysadmin', 'stack.c4': 'Other',
    'exp.title': 'Experience',
    'exp.tc': 'Current', 'exp.ta': 'Active', 'exp.tp': 'Past', 'exp.tx': 'Archive',
    'exp.r1': 'School 21 (Sber) — DevOps trainee',
    'exp.d1': 'Hands-on labs: Linux networking (5-VM topology), Docker, GitLab CI/CD, Prometheus + Grafana, Nginx.',
    'exp.r2': 'IT teacher & SysAdmin — 3 institutions',
    'exp.d2': 'Pifagor, IT STEP, Faraday. Teaching Python, IT, robotics. Maintaining 10–20 PCs, networks, peripherals.',
    'exp.r3': 'SEO specialist — Seotime.uz',
    'exp.d3': 'WordPress administration: installs, plugins (Yoast, RankMath), security, HTML/CSS, SEO audits.',
    'exp.r4': 'Earlier — Office, design, retail',
    'exp.d4': 'Equipment maintenance, graphic design (Photoshop), customer-facing roles.',
    'proj.title': 'Projects',
    'proj.sp': 'In progress', 'proj.sr': 'v2 planned', 'proj.sd': 'Done',
    'proj.pd1': 'This site: VPS + Docker + Nginx + Let\'s Encrypt + GitHub Actions + Prometheus.',
    'proj.pd2': 'Telegram bot for 20+ volunteers. aiogram + PostgreSQL + Google Sheets. v2 with UX rework.',
    'proj.pd3': '5-VM network topology: routing, subnetting, connectivity.',
    'proj.pd4': 'Containerization: Dockerfile + multi-container docker-compose.',
    'proj.pd5': 'Real-time system monitoring, log aggregation, metrics.',
    'proj.pd6': 'Linux filesystem deep-dive, bash scripting, syscall research.',
    'arch.title': 'How this site is built',
    'arch.sub': 'A real DevOps showcase — full infrastructure breakdown.',
    'vol.title': 'Leadership & volunteering',
    'vol.role': 'Volunteer team lead — School 21 Tashkent',
    'vol.per': 'Nov 2025 — present · 20+ volunteers',
    'vol.b1': 'Coordinating 20+ campus volunteers: task distribution, accountability, feedback',
    'vol.b2': 'Organizing and providing technical support for events',
    'vol.b3': 'Onboarding new students, helping with adaptation',
    'vol.b4': 'Liaising with external partners on logistics',
    'vol.bot': '→ See the bot I built for the team',
    'contact.title': 'Get in touch',
    'contact.sub': 'Available for full-time from July 2026. Open to contract or staff.',
    'ft.up': 'All systems operational',
  },
  ru: {
    'nav.about': 'Обо мне', 'nav.stack': 'Стек', 'nav.exp': 'Опыт',
    'nav.projects': 'Проекты', 'nav.arch': 'Архитектура', 'nav.contact': 'Контакты',
    'hero.avail': 'Доступен с июля 2026',
    'hero.role': 'DevOps-инженер / сисадмин',
    'hero.desc': 'Строю надёжную инфраструктуру с Linux, Docker и CI/CD. Учусь в School 21 (Сбер). Администрирую IT в трёх учреждениях Ташкента.',
    'hero.cta1': 'Связаться', 'hero.cta2': 'Скачать резюме',
    'about.title': 'Обо мне',
    'about.p1': 'Прохожу обучение в <strong>School 21 (Сбер)</strong> по направлению системного администрирования и DevOps. Практический опыт с Linux, Docker, GitLab CI/CD, мониторингом (Prometheus + Grafana), Nginx, bash-скриптингом и сетями.',
    'about.p2': 'Параллельно администрирую IT-инфраструктуру в <strong>трёх образовательных учреждениях</strong> Ташкента: установка ОС, настройка сетей, поддержка пользователей, решение инцидентов.',
    'about.p3': 'Ранее работал <strong>SEO-специалистом</strong>, администрировал сайты на WordPress: установка, плагины, безопасность, правки HTML/CSS.',
    'about.s1': 'лет опыта работы', 'about.s2': 'ПК на обслуживании',
    'about.s3': 'волонтёров в команде', 'about.s4': 'параллельных позиции',
    'stack.title': 'Стек технологий', 'stack.sub': 'Самооценка навыков в стиле Grafana.',
    'stack.c1': 'DevOps и инфраструктура', 'stack.c2': 'Программирование',
    'stack.c3': 'Сети и администрирование', 'stack.c4': 'Прочее',
    'exp.title': 'Опыт',
    'exp.tc': 'Сейчас', 'exp.ta': 'Активно', 'exp.tp': 'Прошлое', 'exp.tx': 'Архив',
    'exp.r1': 'School 21 (Сбер) — DevOps-стажёр',
    'exp.d1': 'Учебные проекты: сети Linux (топология из 5 ВМ), Docker, GitLab CI/CD, Prometheus + Grafana, Nginx.',
    'exp.r2': 'Преподаватель и сисадмин — 3 учреждения',
    'exp.d2': 'Пифагор, IT STEP, Faraday. Преподаю Python, информатику, робототехнику. Обслуживаю 10–20 ПК, сети, периферию.',
    'exp.r3': 'SEO-специалист — Seotime.uz',
    'exp.d3': 'Администрирование WordPress: установка, плагины (Yoast, RankMath), безопасность, HTML/CSS, SEO-аудит.',
    'exp.r4': 'Ранее — Офис, дизайн, продажи',
    'exp.d4': 'Обслуживание оргтехники, графический дизайн (Photoshop), работа с клиентами.',
    'proj.title': 'Проекты',
    'proj.sp': 'В разработке', 'proj.sr': 'v2 в планах', 'proj.sd': 'Готово',
    'proj.pd1': 'Этот сайт: VPS + Docker + Nginx + Let\'s Encrypt + GitHub Actions + Prometheus.',
    'proj.pd2': 'Telegram-бот для 20+ волонтёров. aiogram + PostgreSQL + Google Sheets. v2 с переработкой UX.',
    'proj.pd3': 'Сетевая топология из 5 ВМ: маршрутизация, подсети, проверка связности.',
    'proj.pd4': 'Контейнеризация: Dockerfile + multi-container docker-compose.',
    'proj.pd5': 'Мониторинг в реальном времени, агрегация логов, метрики.',
    'proj.pd6': 'Исследование файловой системы Linux, bash-скриптинг.',
    'arch.title': 'Как устроен этот сайт',
    'arch.sub': 'Реальный DevOps-кейс — полная схема инфраструктуры.',
    'vol.title': 'Лидерство и волонтёрство',
    'vol.role': 'Тим-лид волонтёров — School 21 Ташкент',
    'vol.per': 'Ноябрь 2025 — настоящее время · 20+ волонтёров',
    'vol.b1': 'Координирую команду из 20+ волонтёров кампуса: распределение задач, контроль, обратная связь',
    'vol.b2': 'Организация и техническая поддержка мероприятий',
    'vol.b3': 'Помощь новым студентам в адаптации',
    'vol.b4': 'Взаимодействие с внешними партнёрами',
    'vol.bot': '→ Бот, который я сделал для команды',
    'contact.title': 'Контакты',
    'contact.sub': 'К полной занятости готов с июля 2026. Открыт к ГПХ или штатному оформлению.',
    'ft.up': 'Все системы работают',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

try {
  const saved = localStorage.getItem('lang');
  if (saved && translations[saved]) setLang(saved);
} catch(e) {}
