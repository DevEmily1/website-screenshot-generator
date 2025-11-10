onst fs = require('fs');
const path = require('path');

async function saveOutput(filePath, buffer) {
const dir = path.dirname(filePath);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(filePath, buffer);
}

module.exports = { saveOutput };