const fs = require('fs');
const file = 'src/app/[locale]/quick-links/legal-note/page.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/email:\s*\(\)\s*=>\s*\([\s\S]*?<\/Link>\)/, 'email: (chunks) => <a href="mailto:info@indowud.com" className="text-emerald-700 underline underline-offset-2">{chunks}</a>');
fs.writeFileSync(file, content);
console.log('done');
