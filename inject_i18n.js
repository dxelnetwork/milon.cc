const fs = require('fs');

const switcherHtml = `
          <!-- Language Switcher -->
          <select class="lang-selector bg-transparent text-gray-700 dark:text-gray-300 font-medium focus:ring-0 focus:outline-none cursor-pointer">
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
          
          <!-- Theme Toggle -->`;

fs.readdirSync('.').forEach(file => {
  if (file.endsWith('.html')) {
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    if (!content.includes('lang-selector')) {
      content = content.replace('<!-- Theme Toggle -->', switcherHtml);
      modified = true;
    }

    if (!content.includes('i18n.js')) {
      content = content.replace('</body>', '  <script defer src="i18n.js"></script>\n</body>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  }
});
