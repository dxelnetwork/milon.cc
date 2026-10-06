const fs = require('fs');
const file = 'about.html';
let content = fs.readFileSync(file, 'utf-8');

const regex = /<button[\s\S]*?class="px-4 md:px-6 py-3 md:py-4 bg-\[#21262d\] dark:bg-\[#21262d\] text-white rounded-xl border border-white\/10 flex items-center gap-2 md:gap-3 mx-auto hover:bg-\[#30363d\] transition-all group"[\s\S]*?<span class="font-bold">Fork My Portfolio<\/span>[\s\S]*?<span class="px-2 py-0\.5 bg-\[#30363d\] rounded-md text-xs font-black">24<\/span>[\s\S]*?<\/button>/;

const replacement = `<a href="https://github.com/dxelnetwork" target="_blank" rel="noopener noreferrer"
              class="px-4 md:px-6 py-3 md:py-4 bg-[#21262d] dark:bg-[#21262d] text-white rounded-xl border border-white/10 flex items-center gap-2 md:gap-3 mx-auto hover:bg-[#30363d] transition-all group w-fit inline-flex">
              <span class="font-bold">Fork My Portfolio</span>
              <span class="px-2 py-0.5 bg-[#30363d] rounded-md text-xs font-black">24</span>
            </a>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Successfully updated about.html');
} else {
  console.log('Could not find the button in about.html');
}
