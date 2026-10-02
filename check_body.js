const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const match = content.match(/<body[^>]*class="([^"]*)"/);
console.log(match ? match[1] : 'no body class');
