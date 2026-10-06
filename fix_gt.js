const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Fix the translate.google.com URL to strictly use https://
  content = content.replace(/\/\/translate\.google\.com/g, 'https://translate.google.com');
  
  // Fix the CSS so we only hide the iframe toolbar and not the whole page if body gets .skiptranslate
  content = content.replace(/\.skiptranslate\s*\{\s*display:\s*none\s*!important;\s*\}/g, 'iframe.skiptranslate { display: none !important; }');
  
  fs.writeFileSync(file, content, 'utf-8');
  console.log(`Updated ${file}`);
});
