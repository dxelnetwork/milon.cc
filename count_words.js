const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let textExtract = [];

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  // Very basic regex to strip tags and scripts
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  content = content.replace(/<[^>]+>/g, ' ');
  // Decode HTML entities (basic)
  content = content.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
  
  const words = content.split(/\s+/).filter(w => w.trim().length > 0);
  textExtract.push(...words);
});

console.log(`Total words across all HTML files: ${textExtract.length}`);
