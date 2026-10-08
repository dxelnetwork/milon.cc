const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // Replace invalid button containing an anchor
  const buttonRegex = /<button\s+class="px-4 md:px-6 py-3 md:py-4 bg-\[#21262d\] dark:bg-\[#21262d\] text-white rounded-xl border border-white\/10 flex items-center gap-2 md:gap-3 mx-auto hover:bg-\[#30363d\] transition-all group">\s*<a href="([^"]+)" target="_blank" class="font-bold">([^<]+)<\/a>\s*<span class="px-2 py-0\.5 bg-\[#30363d\] rounded-md text-xs font-black">([^<]+)<\/span>\s*<\/button>/g;
  
  if (buttonRegex.test(content)) {
    content = content.replace(buttonRegex, '<a href="$1" target="_blank" class="px-4 md:px-6 py-3 md:py-4 bg-[#21262d] dark:bg-[#21262d] text-white rounded-xl border border-white/10 flex w-fit items-center gap-2 md:gap-3 mx-auto hover:bg-[#30363d] transition-all group font-bold">\n              $2\n              <span class="px-2 py-0.5 bg-[#30363d] rounded-md text-xs font-black">$3</span>\n            </a>');
    modified = true;
  }

  // Also replace any other button wrapped anchor (there was an issue in earlier context about structure shape breaking in about.html)
  // Check if there are other known structural issues from the previous automated replacements.
  // Wait, I noticed earlier the user said "structure shape is break, please fix this previous shape". This was addressed before, but maybe some other pages have a broken container because of missing closing tags. Let's fix this button first.

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Fixed button anchor in ' + file);
  }
});
