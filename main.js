// Logo setup
const logoUrl = 'https://yourdomain.com/logo.png'; // Replace with actual logo path
document.getElementById('logo').src = logoUrl;

// Supported languages
const supportedLangs = ['tr', 'ru', 'uk', 'el', 'en'];

// Translations
const translations = {
  en: {
    welcome: "Welcome to Anya Hanım Ofis",
    services: [
      { title: "Real Estate Solutions", desc: "Digital platforms and DApps for property listings and smart contracts." },
      { title: "Fintech & Business", desc: "Marketing, analytics, and automation for financial services." },
      { title: "Luxury & Investment", desc: "Promotion of high-end brands and investment via TikTok, Instagram, and Web3." }
    ]
  },
  tr: {
    welcome: "Anya Hanım Ofis'e Hoş Geldiniz",
    services: [
      { title: "Gayrimenkul Çözümleri", desc: "Emlak listeleri ve akıllı sözleşmeler için dijital platformlar ve DApp'ler." },
      { title: "Finans ve İş", desc: "Finansal hizmetler için pazarlama, analiz ve otomasyon." },
      { title: "Lüks ve Yatırım", desc: "TikTok, Instagram ve Web3 ile üst düzey markaların ve yatırımların tanıtımı." }
    ]
  },
  ru: {
    welcome: "Добро пожаловать в Anya Hanım Ofis",
    services: [
      { title: "Решения для недвижимости", desc: "Цифровые платформы и DApp для недвижимости и смарт-контрактов." },
      { title: "Финтех и бизнес", desc: "Маркетинг, аналитика и автоматизация для финансовых услуг." },
      { title: "Роскошь и инвестиции", desc: "Продвижение брендов и инвестиций через TikTok, Instagram и Web3." }
    ]
  },
  uk: {
    welcome: "Ласкаво просимо до Anya Hanım Ofis",
    services: [
      { title: "Нерухомість", desc: "Цифрові платформи та DApp для нерухомості та смарт-контрактів." },
      { title: "Фінтех і бізнес", desc: "Маркетинг, аналітика та автоматизація для фінансових послуг." },
      { title: "Розкіш та інвестиції", desc: "Просування брендів та інвестицій через TikTok, Instagram та Web3." }
    ]
  },
  el: {
    welcome: "Καλώς ήρθατε στην Anya Hanım Ofis",
    services: [
      { title: "Λύσεις Ακινήτων", desc: "Ψηφιακές πλατφόρμες και DApp για ακίνητα και έξυπνα συμβόλαια." },
      { title: "Fintech & Επιχειρήσεις", desc: "Μάρκετινγκ, αναλύσεις και αυτοματοποίηση για χρηματοοικονομικές υπηρεσίες." },
      { title: "Πολυτέλεια & Επενδύσεις", desc: "Προώθηση επώνυμων προϊόντων και επενδύσεων μέσω TikTok, Instagram και Web3." }
    ]
  }
};

// Detect browser language
let lang = navigator.language.slice(0, 2);
if (!supportedLangs.includes(lang)) lang = 'en';

// Render content
function renderContent(selectedLang) {
  const t = translations[selectedLang];
  document.getElementById('welcome').textContent = t.welcome;

  const container = document.getElementById('services');
  container.innerHTML = '';
  t.services.forEach(service => {
    const block = document.createElement('div');
    block.className = 'service-block';
    block.innerHTML = `<h3>${service.title}</h3><p>${service.desc}</p>`;
    container.appendChild(block);
  });
}

// Language selector
document.getElementById('lang-select').addEventListener('change', (e) => {
  renderContent(e.target.value);
});

// Initial render
renderContent(lang);
