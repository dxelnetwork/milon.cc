const fs = require('fs');

const i18nJsContent = `
document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('site_lang');
  
  if (!currentLang) {
    const isPortugal = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Lisbon';
    const isPortugueseBrowser = navigator.language.startsWith('pt');
    
    if (isPortugal || isPortugueseBrowser) {
      currentLang = 'pt';
    } else {
      currentLang = 'en';
    }
    localStorage.setItem('site_lang', currentLang);
  }

  const langSelectors = document.querySelectorAll('.lang-selector');
  langSelectors.forEach(selector => {
    selector.value = currentLang;
    selector.addEventListener('change', (e) => {
      const newLang = e.target.value;
      localStorage.setItem('site_lang', newLang);
      
      const domain = window.location.hostname || '';
      document.cookie = 'googtrans=/en/' + newLang + '; path=/; domain=' + domain;
      document.cookie = 'googtrans=/en/' + newLang + '; path=/;';
      
      window.location.reload();
    });
  });

  const expectedCookie = currentLang === 'en' ? '/en/en' : '/en/' + currentLang;
  const match = document.cookie.match(new RegExp('(^| )googtrans=([^;]+)'));
  const currentCookie = match ? match[2] : null;
  
  if (currentCookie !== expectedCookie && currentLang === 'pt') {
      const domain = window.location.hostname || '';
      document.cookie = 'googtrans=/en/' + currentLang + '; path=/; domain=' + domain;
      document.cookie = 'googtrans=/en/' + currentLang + '; path=/;'; 
      window.location.reload();
  } else if (currentLang === 'en' && currentCookie && currentCookie !== '/en/en') {
      const domain = window.location.hostname || '';
      document.cookie = 'googtrans=/en/en; path=/; domain=' + domain;
      document.cookie = 'googtrans=/en/en; path=/;'; 
      window.location.reload();
  }
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,pt',
    autoDisplay: false
  }, 'google_translate_element');
}
`;

fs.writeFileSync('i18n.js', i18nJsContent.trim(), 'utf-8');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const gtHtml = "\n  <!-- Google Translate -->\n  <div id=\"google_translate_element\" style=\"display:none;\"></div>\n  <script src=\"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit\"></script>\n  <style>\n    /* Hide the Google Translate Toolbar */\n    .skiptranslate { display: none !important; }\n    body { top: 0px !important; }\n  </style>\n";

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (!content.includes('google_translate_element')) {
    content = content.replace('</body>', gtHtml + '</body>');
    fs.writeFileSync(file, content, 'utf-8');
    console.log("Updated " + file + " with Google Translate");
  }
});
