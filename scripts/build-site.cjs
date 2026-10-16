const fs = require('node:fs');
const path = require('node:path');
const { loadConfig, root } = require('./site-config.cjs');

function renderHtml(html, config) {
  const marker = '<script id="site-config" type="application/json"></script>';
  const umamiMarker = '<script id="umami-tracker"></script>';
  if (!html.includes(marker)) throw new Error('Konfigurationsplatzhalter fehlt in index.html.');
  if (!html.includes(umamiMarker)) throw new Error('Umami-Platzhalter fehlt in index.html.');
  const json = JSON.stringify(config).replace(/</g, '\\u003c');
  const umamiTag = config.umami.websiteId ? `<script defer src="${config.umami.scriptUrl}" data-website-id="${config.umami.websiteId}" data-domains="claudious19.github.io" data-do-not-track="true" data-exclude-search="true"></script>` : '';
  return html
    .replace(umamiMarker, umamiTag)
    .replace(marker, `<script id="site-config" type="application/json">${json}</script>`);
}

function buildSite() {
  const output = path.join(root, '_site');
  fs.mkdirSync(output, { recursive: true });
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(output, 'index.html'), renderHtml(html, loadConfig()));
  for (const file of ['style.css', 'main.js']) {
    fs.copyFileSync(path.join(root, file), path.join(output, file));
  }
  for (const directory of ['images', 'fonts']) {
    fs.cpSync(path.join(root, directory), path.join(output, directory), { recursive: true });
  }
  return output;
}

if (require.main === module) console.log(buildSite());
module.exports = { renderHtml, buildSite };
