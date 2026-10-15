const fs = require('node:fs');
const path = require('node:path');
const { loadConfig, root } = require('./site-config.cjs');

function renderHtml(html, config) {
  const marker = '<script id="site-config" type="application/json"></script>';
  if (!html.includes(marker)) throw new Error('Konfigurationsplatzhalter fehlt in index.html.');
  const json = JSON.stringify(config).replace(/</g, '\\u003c');
  return html.replace(marker, `<script id="site-config" type="application/json">${json}</script>`);
}

function buildSite() {
  const output = path.join(root, '_site');
  fs.mkdirSync(output, { recursive: true });
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(output, 'index.html'), renderHtml(html, loadConfig()));
  for (const file of ['style.css', 'main.js']) {
    fs.copyFileSync(path.join(root, file), path.join(output, file));
  }
  fs.cpSync(path.join(root, 'images'), path.join(output, 'images'), { recursive: true });
  return output;
}

if (require.main === module) console.log(buildSite());
module.exports = { renderHtml, buildSite };
