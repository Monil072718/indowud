const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('src/app/[locale]');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  if (content.includes('export default async function (')) {
    content = content.replace(/export default async function \(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function LegalNotePage(')) {
    content = content.replace(/export default async function LegalNotePage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function IndowudBoardPage(')) {
    content = content.replace(/export default async function IndowudBoardPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function IndowudBuildPage(')) {
    content = content.replace(/export default async function IndowudBuildPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function IndowudNeoCreatePage(')) {
    content = content.replace(/export default async function IndowudNeoCreatePage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcAluCladRaftersPage(')) {
    content = content.replace(/export default async function NfcAluCladRaftersPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcDoorPage(')) {
    content = content.replace(/export default async function NfcDoorPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcFencePage(')) {
    content = content.replace(/export default async function NfcFencePage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcFlooringPage(')) {
    content = content.replace(/export default async function NfcFlooringPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcFlutePage(')) {
    content = content.replace(/export default async function NfcFlutePage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcFramePage(')) {
    content = content.replace(/export default async function NfcFramePage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcGluPage(')) {
    content = content.replace(/export default async function NfcGluPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcJaaliPage(')) {
    content = content.replace(/export default async function NfcJaaliPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcRaftersPage(')) {
    content = content.replace(/export default async function NfcRaftersPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcSidingPage(')) {
    content = content.replace(/export default async function NfcSidingPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function NfcTexturedPanelsPage(')) {
    content = content.replace(/export default async function NfcTexturedPanelsPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  if (content.includes('export default async function ZerowudNfcPage(')) {
    content = content.replace(/export default async function ZerowudNfcPage\(/g, 'export default async function PageComponent(');
    changed = true;
  }
  
  if (content.includes('export default async function PageComponent')) {
    if (content.includes('useTranslations(')) {
      content = content.replace(/const (\w+) = useTranslations\(/g, 'const $1 = await getTranslations(');
      content = content.replace(/import \{ useTranslations \} from 'next-intl';\r?\n/g, '');
      content = content.replace(/import \{ useTranslations \} from "next-intl";\r?\n/g, '');
      if (!content.includes('getTranslations')) {
         content = content.replace(/import \{ setRequestLocale \} from 'next-intl\/server';/, 'import { setRequestLocale, getTranslations } from \'next-intl/server\';');
         content = content.replace(/import \{ setRequestLocale \} from "next-intl\/server";/, 'import { setRequestLocale, getTranslations } from "next-intl/server";');
      }
      changed = true;
    }
  }
  if (content.includes('const _ck =') || content.includes('_ck')) {
    content = content.replace(/const _ck =[^;]+;/g, '');
    content = content.replace(/_ck,/g, '');
    content = content.replace(/_ck/g, '');
    changed = true;
  }
  if (changed) fs.writeFileSync(file, content);
});
console.log('done');
