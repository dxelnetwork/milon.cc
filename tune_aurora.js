const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldBgRegex = /<!-- Aurora Background Elements -->[\s\S]*?<div id="particles-container" class="relative z-10"><\/div>\s*<\/div>/g;

const newBgHtml = `<!-- Aurora Background Elements -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50 dark:bg-[#050512] transition-colors duration-500" aria-hidden="true">
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-indigo-300/60 to-purple-300/60 dark:from-indigo-600/40 dark:to-purple-800/40 blur-[100px] md:blur-[140px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-80 dark:opacity-60 transition-all duration-500"></div>
    <div class="absolute top-[10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-bl from-cyan-200/60 to-blue-300/60 dark:from-cyan-700/40 dark:to-blue-900/40 blur-[100px] md:blur-[140px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-80 dark:opacity-60 transition-all duration-500" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-fuchsia-300/60 to-pink-300/60 dark:from-fuchsia-700/40 dark:to-pink-900/40 blur-[100px] md:blur-[140px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-80 dark:opacity-60 transition-all duration-500" style="animation-delay: 4s;"></div>
    
    <!-- Glassmorphism overlay -->
    <div class="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-[4px] z-0 transition-colors duration-500"></div>
    <div id="particles-container" class="relative z-10"></div>
  </div>`;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (oldBgRegex.test(content)) {
    content = content.replace(oldBgRegex, newBgHtml);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file} with light/dark tuned Aurora background`);
  } else {
    console.log(`Could not find aurora background pattern in ${file}`);
  }
});
