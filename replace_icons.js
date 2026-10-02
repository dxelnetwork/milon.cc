const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldPath = 'M20.954 10.667c-.072 0-.145.004-.218.012H14.43a.5.5 0 010-1h3.876c-.508-3.181-3.16-5.612-6.392-5.612-3.57 0-6.467 2.897-6.467 6.467 0 .178.007.354.021.528v.005c.257 3.263 2.957 5.834 6.246 5.934h4.153c2.429 0 4.4-1.886 4.4-4.213 0-1.2-.516-2.283-1.338-3.036l.005-.085zm-9.187 3.833a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zm0-3.5a.75.75 0 010-1.5h2.5a.75.75 0 010 1.5h-2.5z';
const newPath = 'M16.5 0H7.5C3.36 0 0 3.36 0 7.5v9C0 20.64 3.36 24 7.5 24h9c4.14 0 7.5-3.36 7.5-7.5v-9C24 3.36 20.64 0 16.5 0zM17 18.25H7A2.25 2.25 0 0 1 4.75 16v-1.5A2.25 2.25 0 0 1 7 12.25h1.25V11.5H7A2.25 2.25 0 0 1 4.75 9.25V7.75A2.25 2.25 0 0 1 7 5.5h7.25a2.25 2.25 0 0 1 2.25 2.25v2.25H13v1h4A2.25 2.25 0 0 1 19.25 13v3a2.25 2.25 0 0 1-2.25 2.25z';

files.forEach(f => {
    const p = path.join(dir, f);
    let content = fs.readFileSync(p, 'utf8');
    if (content.includes(oldPath)) {
        content = content.split(oldPath).join(newPath);
        fs.writeFileSync(p, content, 'utf8');
        console.log('Updated', f);
    }
});
