const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// Extract proper footer from about.html
let aboutHtml = fs.readFileSync('about.html', 'utf8');
const footerStart = aboutHtml.indexOf('<footer class="relative bg-gray-900 text-white pt-10 md:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">');

if (footerStart === -1) {
  console.log("Could not find footer in about.html");
  process.exit(1);
}

let properFooter = aboutHtml.substring(footerStart);

// Fix the duplicate </a> in the proper footer
properFooter = properFooter.replace(/            <\/a>\r?\n            <\/a>/g, '            </a>');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find where the footer starts in this file
  // Different files might have slightly different footer tags if they were manually edited,
  // but let's try the exact match first.
  let fStart = content.indexOf('<footer class="relative bg-gray-900');
  
  if (fStart !== -1) {
    content = content.substring(0, fStart) + properFooter;
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated footer in ${file}`);
  } else {
    console.log(`Could not find footer start in ${file}`);
  }
});
