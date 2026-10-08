const fs = require('fs');

const boatStyle = `      /* Paper Boat Animation */
      .boat-container {
        position: absolute;
        bottom: 10%;
        left: -150px;
        width: 100px;
        height: 100px;
        animation: sail 25s linear infinite;
        z-index: 10;
        pointer-events: none;
      }
      .paper-boat {
        width: 100%;
        height: 100%;
        animation: bobbing 3s ease-in-out infinite alternate;
        filter: drop-shadow(0px 8px 12px rgba(0,0,0,0.15));
      }
      .boat-sail-back { fill: #e2e8f0; transition: fill 0.5s ease; }
      .boat-sail-front { fill: #ffffff; transition: fill 0.5s ease; }
      .boat-hull { fill: #f8fafc; transition: fill 0.5s ease; }
      .boat-fold { stroke: #cbd5e1; transition: stroke 0.5s ease; }
      
      html.dark .boat-sail-back { fill: #1e293b; }
      html.dark .boat-sail-front { fill: #334155; }
      html.dark .boat-hull { fill: #0f172a; }
      html.dark .boat-fold { stroke: #020617; }

      @keyframes sail {
        0% { transform: translateX(0); }
        100% { transform: translateX(120vw); }
      }
      @keyframes bobbing {
        0% { transform: translateY(0) rotate(-4deg); }
        100% { transform: translateY(20px) rotate(4deg); }
      }`;

const boatHtml = `    <!-- Paper Boat Animation -->
    <div class="boat-container">
      <svg class="paper-boat" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <path class="boat-sail-back" d="M60 25 L60 70 L30 70 Z" />
        <path class="boat-sail-front" d="M60 15 L60 70 L90 70 Z" />
        <path class="boat-hull" d="M15 70 L105 70 L85 90 L35 90 Z" />
        <path class="boat-fold" d="M60 70 L35 90" stroke-width="1.5" />
      </svg>
    </div>`;

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  const waveCssRegex = new RegExp('\\/\\* SVG Wave Animation \\*\\/[\\s\\S]*?@keyframes wave-roll-reverse\\s*\\{[\\s\\S]*?\\}');
  if (waveCssRegex.test(content)) {
    content = content.replace(waveCssRegex, boatStyle);
    modified = true;
  }

  const waveHtmlRegex = /<!-- Smooth Animated Waves -->[\s\S]*?<\/div>\s*<!-- Frosted Glass Overlay -->/;
  if (waveHtmlRegex.test(content)) {
    content = content.replace(waveHtmlRegex, boatHtml + '\n\n    <!-- Frosted Glass Overlay -->');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated ' + file + ' with Paper Boat animation');
  }
});
