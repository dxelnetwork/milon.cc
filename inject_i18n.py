import os
import glob
import re

html_files = glob.glob('*.html')

switcher_html = '''
          <!-- Language Switcher -->
          <select class="lang-selector bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-1 px-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer mr-2">
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
          
          <!-- Theme Toggle -->'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    if 'lang-selector' not in content:
        content = content.replace('<!-- Theme Toggle -->', switcher_html)
        modified = True
        
    if 'i18n.js' not in content:
        content = content.replace('</body>', '  <script defer src="i18n.js"></script>\n</body>')
        modified = True
        
    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
