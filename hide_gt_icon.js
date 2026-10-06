const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldStyle = `<style>
    /* Hide the Google Translate Toolbar */
    iframe.skiptranslate {
      display: none !important;
    }

    body {
      top: 0px !important;
    }
  </style>`;

const oldStyleRegex = /<style>\s*\/\* Hide the Google Translate Toolbar \*\/\s*iframe\.skiptranslate \{\s*display: none !important;\s*\}\s*body \{\s*top: 0px !important;\s*\}\s*<\/style>/g;

const newStyle = `<style>
    /* Hide all Google Translate elements, toolbars, and icons */
    iframe.skiptranslate, 
    .skiptranslate,
    .goog-te-gadget-icon,
    .goog-te-gadget-simple, 
    .goog-te-banner-frame,
    #goog-gt-tt, 
    .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
    .VIpgJd-ZVi9od-aZ2wEe-OiiCO,
    .goog-te-spinner-pos, 
    .goog-te-spinner-animation {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }

    body {
      top: 0px !important;
      position: relative !important;
    }
  </style>`;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (oldStyleRegex.test(content)) {
    content = content.replace(oldStyleRegex, newStyle);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file} to hide GT icons`);
  } else {
    // If exact regex doesn't match, we might have to replace it another way
    // Let's just do a less strict replacement
    content = content.replace(/<style>\s*\/\* Hide the Google Translate Toolbar \*\/[\s\S]*?<\/style>/g, newStyle);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file} with fallback replacement to hide GT icons`);
  }
});
