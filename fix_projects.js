const fs = require('fs');

// ============ FIX projects.html ============
let projectsHtml = fs.readFileSync('projects.html', 'utf8');

// The projects page has only 1 card left and the footer is broken
const projGridStart = projectsHtml.indexOf('<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">');

if (projGridStart === -1) {
  console.log('ERROR: Could not find grid in projects.html');
  process.exit(1);
}

// Build proper projects.html content from the grid marker to before footer
const projectsGridContent = `<!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
        <!-- Project Card 1 -->
        <div class="reveal project-item border border-gray-200 dark:border-gray-700 rounded-2xl group" data-category="web-app">
          <div class="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
              <img src="https://devport-multi-html.vercel.app/assets/images/project4.webp" alt="E-Commerce Platform" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-3 md:p-6">
              <div class="flex items-center gap-2 mb-2 md:mb-3">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Web App</span>
                <span class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-semibold">React</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">E-Commerce Platform</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-relaxed">A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="project-details.html" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></a>
                <div class="flex gap-2">
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition-all" aria-label="GitHub"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition-all" aria-label="External Link"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="reveal project-item border border-gray-200 dark:border-gray-700 rounded-2xl group" data-category="saas">
          <div class="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
              <img src="https://devport-multi-html.vercel.app/assets/images/project2.webp" alt="Task Management" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-3 md:p-6">
              <div class="flex items-center gap-2 mb-2 md:mb-3">
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">SaaS</span>
                <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-xs font-semibold">Next.js</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">Task Management App</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-relaxed">Collaborative task management tool with real-time updates, team collaboration, and productivity analytics.</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="project-details.html" class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></a>
                <div class="flex gap-2">
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition-all" aria-label="GitHub"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition-all" aria-label="External Link"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="reveal project-item border border-gray-200 dark:border-gray-700 rounded-2xl group" data-category="fintech">
          <div class="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500">
              <img src="https://devport-multi-html.vercel.app/assets/images/project3.webp" alt="Finance Tracker" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-3 md:p-6">
              <div class="flex items-center gap-2 mb-2 md:mb-3">
                <span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold">FinTech</span>
                <span class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-semibold">Vue.js</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">Finance Tracker</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-relaxed">Personal finance management app with budgeting tools, expense tracking, and financial insights visualization.</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="project-details.html" class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-3 transition-all">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></a>
                <div class="flex gap-2">
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-emerald-500 hover:text-white transition-all" aria-label="GitHub"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-emerald-500 hover:text-white transition-all" aria-label="External Link"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 4 -->
        <div class="reveal project-item border border-gray-200 dark:border-gray-700 rounded-2xl group" data-category="web-app">
          <div class="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-orange-500 to-red-500">
              <img src="https://devport-multi-html.vercel.app/assets/images/project1.webp" alt="Social Network" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-3 md:p-6">
              <div class="flex items-center gap-2 mb-2 md:mb-3">
                <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold">Social</span>
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold">MERN</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">Social Network Platform</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-relaxed">Modern social networking platform with real-time messaging, posts, stories, and advanced privacy controls.</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="project-details.html" class="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:gap-3 transition-all">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></a>
                <div class="flex gap-2">
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition-all" aria-label="GitHub"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition-all" aria-label="External Link"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 5 -->
        <div class="reveal project-item border border-gray-200 dark:border-gray-700 rounded-2xl group" data-category="fintech">
          <div class="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500">
              <img src="https://devport-multi-html.vercel.app/assets/images/project5.webp" alt="AI Trading" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-3 md:p-6">
              <div class="flex items-center gap-2 mb-2 md:mb-3">
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-semibold">AI/ML</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">Python</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">AI Trading Analytics</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-relaxed">Advanced trading dashboard with predictive AI models, real-time market analysis, and automated risk scoring.</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="project-details.html" class="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></a>
                <div class="flex gap-2">
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-500 hover:text-white transition-all" aria-label="GitHub"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-500 hover:text-white transition-all" aria-label="External Link"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 6 -->
        <div class="reveal project-item border border-gray-200 dark:border-gray-700 rounded-2xl group" data-category="web-app">
          <div class="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-pink-500 to-rose-500">
              <img src="https://devport-multi-html.vercel.app/assets/images/project6.webp" alt="Fitness App" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-3 md:p-6">
              <div class="flex items-center gap-2 mb-2 md:mb-3">
                <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-xs font-semibold">Health</span>
                <span class="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-xs font-semibold">React Native</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">Fitness Tracking App</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-relaxed">Comprehensive fitness app with workout plans, nutrition tracking, progress monitoring, and community features.</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="project-details.html" class="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold hover:gap-3 transition-all">View Project <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></a>
                <div class="flex gap-2">
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition-all" aria-label="GitHub"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                  <a href="https://github.com/dxelnetwork" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition-all" aria-label="External Link"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// Replace from projects grid to end of page, then add proper footer
const projEndSection = projectsHtml.indexOf('</body>');
projectsHtml = projectsHtml.substring(0, projGridStart) + projectsGridContent + `
  <footer class="relative bg-gray-900 text-white pt-10 md:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="py-4 md:py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <p class="text-gray-400 text-center md:text-left">
          &copy; 2026
          <a href="javascript:void(0)" class="hover:text-white duration-300">milon.cc</a>
          - All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <button id="back-to-top"
    class="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-2xl flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 z-40 cursor-pointer"
    aria-label="Back to top">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
  <script defer src="index.js"></script>
</body>

</html>
`;

fs.writeFileSync('projects.html', projectsHtml, 'utf8');
console.log('Fixed projects.html - restored 6 project cards + proper footer');
