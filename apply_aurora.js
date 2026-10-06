const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldBgRegex = /<!-- Animated Background Elements -->[\s\S]*?<div id="particles-container"><\/div>\s*<\/div>/g;

const newBgHtml = `<!-- Aurora Background Elements -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-50 dark:bg-[#030014]" aria-hidden="true">
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-indigo-600/50 to-purple-600/50 blur-[100px] md:blur-[140px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-70"></div>
    <div class="absolute top-[10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-bl from-cyan-500/50 to-blue-600/50 blur-[100px] md:blur-[140px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-70" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-fuchsia-600/50 to-pink-500/50 blur-[100px] md:blur-[140px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-70" style="animation-delay: 4s;"></div>
    
    <!-- Glassmorphism overlay -->
    <div class="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px] z-0"></div>
    <div id="particles-container" class="relative z-10"></div>
  </div>`;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (oldBgRegex.test(content)) {
    content = content.replace(oldBgRegex, newBgHtml);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file} with Aurora background`);
  } else if (content.includes('Aurora Background Elements')) {
    console.log(`${file} already has Aurora background`);
  } else {
    console.log(`Could not find old background pattern in ${file}`);
  }
});
