const fs = require('fs');

const waveStyle = `
<style>
/* Fluid Gradient Background */
.fluid-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f8fafc;
    transition: background 0.5s ease;
}
html.dark .fluid-bg {
    background: #09090b;
}

.fluid-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.7;
    animation: fluid-drift 20s infinite alternate ease-in-out;
    mix-blend-mode: multiply;
}
html.dark .fluid-blob {
    opacity: 0.5;
    mix-blend-mode: screen;
}

/* Light mode vibrant pastels */
.blob-1 { background: #3b82f6; width: 60vw; height: 60vw; top: -10%; left: -10%; animation-duration: 22s; }
.blob-2 { background: #8b5cf6; width: 70vw; height: 70vw; bottom: -20%; right: -10%; animation-duration: 26s; }
.blob-3 { background: #ec4899; width: 50vw; height: 50vw; top: 30%; left: 30%; animation-duration: 18s; }
.blob-4 { background: #06b6d4; width: 60vw; height: 60vw; top: -20%; right: 20%; animation-duration: 24s; }

/* Dark mode deep neon */
html.dark .blob-1 { background: #1d4ed8; }
html.dark .blob-2 { background: #6d28d9; }
html.dark .blob-3 { background: #be185d; }
html.dark .blob-4 { background: #0369a1; }

@keyframes fluid-drift {
    0% { transform: translate(0, 0) scale(1) rotate(0deg); }
    33% { transform: translate(15%, -10%) scale(1.1) rotate(45deg); }
    66% { transform: translate(-10%, 15%) scale(0.9) rotate(-45deg); }
    100% { transform: translate(5%, 5%) scale(1.05) rotate(15deg); }
}

/* SVG Wave Animation */
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
    0% { transform: translateX(0) scaleY(1); }
    50% { transform: translateX(-25%) scaleY(1.1); }
    100% { transform: translateX(-50%) scaleY(1); }
}
@keyframes wave-roll-reverse {
    0% { transform: translateX(-50%) scaleY(1.1); }
    50% { transform: translateX(-25%) scaleY(1); }
    100% { transform: translateX(0) scaleY(1.1); }
}
</style>
`;

const waveHtml = `<!-- Smooth Color Gradation Wave Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10 transition-colors duration-500" aria-hidden="true">
    ${waveStyle}
    <div class="fluid-bg">
        <div class="fluid-blob blob-1"></div>
        <div class="fluid-blob blob-2"></div>
        <div class="fluid-blob blob-3"></div>
        <div class="fluid-blob blob-4"></div>
    </div>
    
    <!-- Smooth Animated Waves -->
    <div class="wave-container">
        <!-- Back Wave -->
        <svg class="wave-svg reverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path class="wave-path" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <!-- Duplicate path for seamless looping -->
            <path class="wave-path" d="M1440,160L1488,176C1536,192,1632,224,1728,213.3C1824,203,1920,149,2016,144C2112,139,2208,181,2304,197.3C2400,213,2496,203,2592,176C2688,149,2784,107,2832,85.3L2880,64L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1488,320L1440,320Z" transform="translate(1440, 0)"></path>
        </svg>
        
        <!-- Front Wave -->
        <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path class="wave-path" style="opacity:0.8" d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,80C840,75,960,117,1080,144C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            <!-- Duplicate path for seamless looping -->
            <path class="wave-path" style="opacity:0.8" d="M1440,96L1500,112C1560,128,1680,160,1800,149.3C1920,139,2040,85,2160,80C2280,75,2400,117,2520,144C2640,171,2760,181,2820,186.7L2880,192L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1500,320L1440,320Z" transform="translate(1440, 0)"></path>
        </svg>
    </div>

    <!-- Frosted Glass Overlay -->
    <div class="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-[60px] z-0 transition-colors duration-500"></div>
  </div>`;

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const meshRegex = /<!-- Dynamic Particle Mesh Background -->[\s\S]*?<\/div>\s*<\/div>/g;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (meshRegex.test(content)) {
    content = content.replace(meshRegex, waveHtml);
    
    // Also remove the particle script if present
    content = content.replace(/<script defer src="particles-mesh\.js"><\/script>/g, '');
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file} with Smooth Color Gradation Wave`);
  }
});
