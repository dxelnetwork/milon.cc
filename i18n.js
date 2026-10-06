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
      
      // Allow reload for manual changes
      sessionStorage.removeItem('lang_reloaded');
      window.location.reload();
    });
  });

  const expectedCookie = currentLang === 'en' ? '/en/en' : '/en/' + currentLang;
  const match = document.cookie.match(new RegExp('(^| )googtrans=([^;]+)'));
  const currentCookie = match ? match[2] : null;
  
  // Only auto-reload once per session to prevent infinite loop on local file:// or strict browsers
  const hasReloaded = sessionStorage.getItem('lang_reloaded');
  
  if (!hasReloaded) {
    if (currentCookie !== expectedCookie && currentLang === 'pt') {
        const domain = window.location.hostname || '';
        document.cookie = 'googtrans=/en/' + currentLang + '; path=/; domain=' + domain;
        document.cookie = 'googtrans=/en/' + currentLang + '; path=/;'; 
        sessionStorage.setItem('lang_reloaded', 'true');
        window.location.reload();
    } else if (currentLang === 'en' && currentCookie && currentCookie !== '/en/en') {
        const domain = window.location.hostname || '';
        document.cookie = 'googtrans=/en/en; path=/; domain=' + domain;
        document.cookie = 'googtrans=/en/en; path=/;'; 
        sessionStorage.setItem('lang_reloaded', 'true');
        window.location.reload();
    }
  }
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,pt',
    autoDisplay: false
  }, 'google_translate_element');
}