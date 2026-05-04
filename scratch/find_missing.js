const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const hi = JSON.parse(fs.readFileSync('messages/hi.json', 'utf8'));

function findMissing(base, target, path = '') {
  const missing = [];
  for (const key in base) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in target)) {
      missing.push(currentPath);
    } else if (typeof base[key] === 'object' && base[key] !== null && !Array.isArray(base[key])) {
      missing.push(...findMissing(base[key], target[key], currentPath));
    }
  }
  return missing;
}

const missingInHi = findMissing(en, hi);
console.log('Missing in hi.json:', missingInHi.length, 'keys');
console.log(missingInHi.join('\n'));
