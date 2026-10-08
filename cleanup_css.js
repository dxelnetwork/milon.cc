const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // The orphaned CSS looks like this:
  /*
        50% {
          transform: translateX(-25%) scaleY(1);
        }

        100% {
          transform: translateX(0) scaleY(1.1);
        }
      }
  */
  
  const orphanedCssRegex = /\s*50%\s*\{\s*transform:\s*translateX\(-25%\)\s*scaleY\(1\);\s*\}\s*100%\s*\{\s*transform:\s*translateX\(0\)\s*scaleY\(1\.1\);\s*\}\s*\}/;
  
  if (orphanedCssRegex.test(content)) {
    content = content.replace(orphanedCssRegex, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Cleaned up broken CSS in ' + file);
  }
});
