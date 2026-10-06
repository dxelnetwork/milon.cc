const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf-8');
const aboutContent = fs.readFileSync('about.html', 'utf-8');

// Get the missing navbar part from index.html (Theme toggle to end of nav)
const themeToggleStart = indexContent.indexOf('          <!-- Theme Toggle -->');
const navEnd = indexContent.indexOf('  </nav>') + '  </nav>'.length;
const missingNav = indexContent.substring(themeToggleStart, navEnd);

// The missing page header and profile section for about.html
const missingAboutContent = `

  <!-- Page Header -->
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center reveal">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
          About <span class="text-gradient">Me</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Discover the journey, skills, and passion that drive my work in
          creating exceptional digital experiences.
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-20 bg-gray-50 dark:bg-[#050505]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Profile Section -->
      <div class="mb-20">
        <div
          class="relative p-1 rounded-3xl bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 p-[2px] reveal overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 animate-spin-slow"
            style="animation-duration: 10s"></div>
          <div class="relative bg-white dark:bg-[#0d1117] rounded-3xl p-6 md:p-10 lg:p-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <!-- Profile Image/Avatar -->
              <div class="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-20">
                </div>
                <div class="relative w-full h-full rounded-full border-4 border-white dark:border-[#21262d] overflow-hidden shadow-2xl">
                  <img src="./assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover" />
                </div>
              </div>

              <!-- GitHub Style Contribution Graph -->
              <div class="bg-[#f6f8fa] dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-2xl p-4 md:p-6 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    2,341 contributions in the last year
                  </h3>
                </div>
                <div class="overflow-hidden">
                  <div class="flex flex-wrap gap-[3px] max-w-[280px] md:max-w-full" id="contribution-graph">
                    <!-- Graph generated via JS -->
                    <script>
                      const container = document.getElementById("contribution-graph");
                      for (let i = 0; i < 147; i++) {
                        const dot = document.createElement("div");
                        const val = Math.random();
                        const intensity =
                          val > 0.8
                            ? "bg-emerald-400"
                            : val > 0.6
                              ? "bg-emerald-500"
                              : val > 0.3
                                ? "bg-emerald-700/50"
                                : val > 0.1
                                  ? "bg-emerald-900/30"
                                  : "bg-gray-100 dark:bg-gray-800";
                        dot.className = \`w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 \${intensity}\`;
                        container.appendChild(dot);
                      }
                    </script>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Info -->
`;

const forkButtonStart = aboutContent.indexOf('<a href="https://github.com/dxelnetwork" target="_blank" rel="noopener noreferrer"');

// The about.html currently has <!-- Theme Toggle --> followed immediately by the <a href="https://github.com/dxelnetwork"...
const badThemeToggleStart = aboutContent.indexOf('          <!-- Theme Toggle -->');

if (badThemeToggleStart !== -1 && forkButtonStart !== -1) {
  const beforeBad = aboutContent.substring(0, badThemeToggleStart);
  const afterBad = aboutContent.substring(forkButtonStart);
  
  const newContent = beforeBad + missingNav + missingAboutContent + afterBad;
  fs.writeFileSync('about.html', newContent, 'utf-8');
  console.log('Restored about.html successfully.');
} else {
  console.log('Could not find the injection points in about.html');
}
