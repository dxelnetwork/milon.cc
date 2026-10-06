const translations = {
  en: {
    // Navbar
    "nav_home": "Home",
    "nav_about": "About",
    "nav_services": "Services",
    "nav_projects": "Projects",
    "nav_blogs": "Blogs",
    "nav_contact": "Contact",
    "nav_cta": "Contact Me",
    
    // Contact Form
    "contact_heading": "Let's talk about your project",
    "contact_subheading": "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    "contact_email": "Email",
    "contact_phone": "Phone",
    "contact_location": "Location",
    "contact_follow": "Follow me on social media",
    
    "form_name": "Your Name",
    "form_name_ph": "John Doe",
    "form_email": "Your Email",
    "form_email_ph": "john@example.com",
    "form_subject": "Subject",
    "form_subject_ph": "Project Inquiry",
    "form_message": "Message",
    "form_message_ph": "Tell me about your project...",
    "form_submit": "Send Message"
  },
  pt: {
    // Navbar
    "nav_home": "Início",
    "nav_about": "Sobre",
    "nav_services": "Serviços",
    "nav_projects": "Projetos",
    "nav_blogs": "Blogs",
    "nav_contact": "Contato",
    "nav_cta": "Contate-me",

    // Contact Form
    "contact_heading": "Vamos falar sobre o seu projeto",
    "contact_subheading": "Estou sempre interessado em ouvir sobre novos projetos e oportunidades. Se você tem uma dúvida ou quer apenas dizer um olá, sinta-se à vontade para entrar em contato!",
    "contact_email": "E-mail",
    "contact_phone": "Telefone",
    "contact_location": "Localização",
    "contact_follow": "Siga-me nas redes sociais",
    
    "form_name": "Seu Nome",
    "form_name_ph": "João Silva",
    "form_email": "Seu E-mail",
    "form_email_ph": "joao@exemplo.com",
    "form_subject": "Assunto",
    "form_subject_ph": "Dúvida sobre projeto",
    "form_message": "Mensagem",
    "form_message_ph": "Fale-me sobre o seu projeto...",
    "form_submit": "Enviar Mensagem"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Determine default language
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

  // Set the language selector value
  const langSelectors = document.querySelectorAll('.lang-selector');
  langSelectors.forEach(selector => {
    selector.value = currentLang;
    selector.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  });

  // Initial language set
  setLanguage(currentLang);
});

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  // Update elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Check if it's an input placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Sync selectors if there are multiple
  document.querySelectorAll('.lang-selector').forEach(sel => {
    if (sel.value !== lang) {
      sel.value = lang;
    }
  });
}
