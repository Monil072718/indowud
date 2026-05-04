const fs = require('fs');
const file = 'src/app/[locale]/quick-links/legal-note/page.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\{t\.rich\("para4"[\s\S]*?\}\)\}/, 'If you have any questions, please contact us at <a href="mailto:info@indowud.com" className="text-emerald-700 underline underline-offset-2">info@indowud.com</a>.');
fs.writeFileSync(file, content);
console.log('done');
