
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('cookieConsent') === 'accepted') return;

  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.className = 'fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 translate-y-full';
  
  banner.innerHTML = `
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
  `;

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
