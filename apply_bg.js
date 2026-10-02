const fs = require('fs');

const filesToUpdate = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const classPattern = /\b(bg-gradient-to-br|from-[\w-]+|via-[\w-]+|to-[\w-]+|dark:from-[\w-]+|dark:via-[\w-]+|dark:to-[\w-]+)\b\s*/g;

for (const file of filesToUpdate) {
    let content = fs.readFileSync(file, 'utf8');

    const newContent = content.replace(/<body[^>]*class="([^"]*)"[^>]*>/g, (match, oldClasses) => {
        const newClasses = oldClasses.replace(classPattern, '').replace(/\s+/g, ' ').trim();
        return match.replace(oldClasses, newClasses);
    });

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
}
console.log("Done.");
