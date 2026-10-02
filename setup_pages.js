const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let aboutHtml = fs.readFileSync('about.html', 'utf8');

// The about.html has a nav, then `<main>`, then sections.
// But actually this template doesn't use `<main>`. It uses `<section class="pt-30 md:pt-40...`.
// Let's find the end of the navigation.
const navEnd = aboutHtml.indexOf('</nav>') + 6;
const footerStart = aboutHtml.indexOf('<footer class="relative bg-gray-900');
const footerHtml = aboutHtml.substring(footerStart);
const navHtml = aboutHtml.substring(0, navEnd);

// Create privacy.html
const privacyContent = `
  <section class="pt-30 md:pt-40 pb-16 md:pb-20 lg:pb-32 px-4 relative z-10 overflow-hidden">
    <div class="container mx-auto max-w-4xl bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl">
      <h1 class="text-4xl md:text-5xl font-black mb-8 text-gray-900 dark:text-white text-center">Privacy Policy</h1>
      <div class="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
        <p>Last updated: October 2026</p>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Introduction</h2>
        <p>Welcome to milon.cc. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, and Usage Data.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide and improve our services, communicate with you, and ensure security.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. Cookies and Tracking</h2>
        <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">5. Your Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.</p>
      </div>
    </div>
  </section>
`;

const termsContent = `
  <section class="pt-30 md:pt-40 pb-16 md:pb-20 lg:pb-32 px-4 relative z-10 overflow-hidden">
    <div class="container mx-auto max-w-4xl bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl">
      <h1 class="text-4xl md:text-5xl font-black mb-8 text-gray-900 dark:text-white text-center">Terms and Conditions</h1>
      <div class="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
        <p>Last updated: October 2026</p>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Intellectual Property</h2>
        <p>The Site and its original content, features, and functionality are owned by milon.cc and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. User Conduct</h2>
        <p>You agree to use the website only for lawful purposes. You agree not to take any action that might compromise the security of the website, render the website inaccessible to others or otherwise cause damage to the website or its content.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. Links to Other Websites</h2>
        <p>Our Site may contain links to third-party sites that are not owned or controlled by milon.cc. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party sites or services.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8">5. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
      </div>
    </div>
  </section>
`;

fs.writeFileSync('privacy.html', navHtml + privacyContent + footerHtml, 'utf8');
fs.writeFileSync('terms.html', navHtml + termsContent + footerHtml, 'utf8');
console.log('Created privacy.html and terms.html');

// Create consent.js
const consentJs = `
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('cookieConsent') === 'accepted') return;

  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.className = 'fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 translate-y-full';
  
  banner.innerHTML = \`
    <div class="container mx-auto max-w-7xl px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-gray-600 dark:text-gray-300 text-sm md:text-base text-center md:text-left flex-1">
        <strong class="text-gray-900 dark:text-white block mb-1">We value your privacy</strong>
        We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies in accordance with our <a href="privacy.html" class="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a> and <a href="terms.html" class="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</a>. (Compliant with GDPR, CCPA, and CPRA).
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <button id="cookie-reject" class="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm">
          Decline
        </button>
        <button id="cookie-accept" class="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm">
          Accept All
        </button>
      </div>
    </div>
  \`;

  document.body.appendChild(banner);

  // Animate in
  setTimeout(() => {
    banner.classList.remove('translate-y-full');
  }, 1000);

  const closeBanner = (status) => {
    localStorage.setItem('cookieConsent', status);
    banner.classList.add('translate-y-full');
    setTimeout(() => {
      banner.remove();
    }, 500);
  };

  document.getElementById('cookie-accept').addEventListener('click', () => closeBanner('accepted'));
  document.getElementById('cookie-reject').addEventListener('click', () => closeBanner('rejected'));
});
`;

fs.writeFileSync('consent.js', consentJs, 'utf8');
console.log('Created consent.js');

// Update all HTML files
const updatedFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

updatedFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Replace Privacy Policy link
  content = content.replace(
    /<a href="javascript:void\(0\)" class="text-gray-400 hover:text-white transition-colors">Privacy Policy<\/a>/g,
    '<a href="privacy.html" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>'
  );
  
  // 2. Replace Terms of Service link
  content = content.replace(
    /<a href="javascript:void\(0\)" class="text-gray-400 hover:text-white transition-colors">Terms of Service<\/a>/g,
    '<a href="terms.html" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>'
  );

  // 3. Inject consent.js
  if (!content.includes('consent.js')) {
    content = content.replace(
      '</body>',
      '  <script defer src="consent.js"></script>\n</body>'
    );
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Updated all HTML files.');
