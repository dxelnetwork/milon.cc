const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // Replace viewBox="0 0 1440 320" with viewBox="0 0 2880 320" in the wave SVGs
  const svgRegex = /<svg class="wave-svg([^"]*)" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 1440 320"/g;
  
  if (svgRegex.test(content)) {
    content = content.replace(svgRegex, '<svg class="wave-svg$1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 320"');
    modified = true;
  }
  
  // Wait, I also need to make sure the second path doesn't have transform="translate(1440, 0)" if the d attribute ALREADY has the coordinates shifted to 1440!
  // Looking at the path: M1440,160L1488,176...
  // Since the path already starts at 1440, applying translate(1440, 0) shifts it to 2880! That's a double shift!
  const doubleShiftRegex = /transform="translate\(1440, 0\)"/g;
  if (doubleShiftRegex.test(content)) {
    content = content.replace(doubleShiftRegex, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Fixed wave gap in ' + file);
  }
});
