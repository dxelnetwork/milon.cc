const fs = require('fs');

const seamlessWaveStyle = `      /* Seamless SVG Wave Animation */
      .wave-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30vh;
        overflow: hidden;
        line-height: 0;
      }
      .wave-svg {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 200%;
        height: 100%;
        animation: wave-roll 15s linear infinite;
        transform-origin: bottom;
      }
      .wave-svg.reverse {
        animation: wave-roll-reverse 20s linear infinite;
        opacity: 0.5;
      }
      .wave-path {
        fill: rgba(255, 255, 255, 0.4);
        transition: fill 0.5s ease;
      }
      html.dark .wave-path {
        fill: rgba(0, 0, 0, 0.3);
      }
      @keyframes wave-roll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes wave-roll-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }`;

const seamlessWaveHtml = `    <!-- Seamless Smooth Animated Waves -->
    <div class="wave-container">
      <!-- Back Wave -->
      <div class="wave-svg reverse">
        <svg viewBox="0 0 1440 320" style="width: 50%; height: 100%;" preserveAspectRatio="none">
          <path class="wave-path" d="M0,160 C120,20 240,20 360,160 C480,300 600,300 720,160 C840,20 960,20 1080,160 C1200,300 1320,300 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" style="width: 50%; height: 100%;" preserveAspectRatio="none">
          <path class="wave-path" d="M0,160 C120,20 240,20 360,160 C480,300 600,300 720,160 C840,20 960,20 1080,160 C1200,300 1320,300 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>

      <!-- Front Wave -->
      <div class="wave-svg">
        <svg viewBox="0 0 1440 320" style="width: 50%; height: 100%;" preserveAspectRatio="none">
          <path class="wave-path" style="opacity:0.8" d="M0,160 C120,60 240,60 360,160 C480,260 600,260 720,160 C840,60 960,60 1080,160 C1200,260 1320,260 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" style="width: 50%; height: 100%;" preserveAspectRatio="none">
          <path class="wave-path" style="opacity:0.8" d="M0,160 C120,60 240,60 360,160 C480,260 600,260 720,160 C840,60 960,60 1080,160 C1200,260 1320,260 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
    </div>`;

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // Replace old wave CSS
  const waveCssRegex = /\/\* SVG Wave Animation \*\/[\s\S]*?@keyframes wave-roll-reverse\s*\{[\s\S]*?\}/;
  if (waveCssRegex.test(content)) {
    content = content.replace(waveCssRegex, seamlessWaveStyle);
    modified = true;
  }

  // Replace old wave HTML
  const waveHtmlRegex = /<!-- Smooth Animated Waves -->[\s\S]*?<\/div>\s*(?=<!-- Frosted Glass Overlay -->)/;
  if (waveHtmlRegex.test(content)) {
    content = content.replace(waveHtmlRegex, seamlessWaveHtml + '\n\n    ');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Fixed seamless waves in ' + file);
  }
});
