const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacement = `<a href="https://github.com/dxelnetwork" target="_blank"
                class="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/myselfhasan" target="_blank"
                class="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://advut365.blogspot.com" target="_blank"
                class="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Blog">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M16.5 0H7.5C3.36 0 0 3.36 0 7.5v9C0 20.64 3.36 24 7.5 24h9c4.14 0 7.5-3.36 7.5-7.5v-9C24 3.36 20.64 0 16.5 0zM17 18.25H7A2.25 2.25 0 0 1 4.75 16v-1.5A2.25 2.25 0 0 1 7 12.25h1.25V11.5H7A2.25 2.25 0 0 1 4.75 9.25V7.75A2.25 2.25 0 0 1 7 5.5h7.25a2.25 2.25 0 0 1 2.25 2.25v2.25H13v1h4A2.25 2.25 0 0 1 19.25 13v3a2.25 2.25 0 0 1-2.25 2.25z" />
                  </svg>
              </a>
              <a href="https://www.youtube.com/@advut365s" target="_blank"
                class="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://x.com/milonsday" target="_blank"
                class="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>`;

// Regex matches from github to twitter end tag
const pattern = /<a href="https:\/\/github\.com\/dxelnetwork"[^>]*>[\s\S]*?aria-label="Twitter"[\s\S]*?<\/svg>\s*<\/a>/g;

files.forEach(f => {
    const p = path.join(dir, f);
    let content = fs.readFileSync(p, 'utf8');
    if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        fs.writeFileSync(p, content, 'utf8');
        console.log('Updated', f);
    }
});
