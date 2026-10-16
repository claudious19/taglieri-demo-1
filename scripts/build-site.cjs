const fs = require('node:fs');
const path = require('node:path');
const { loadConfig, root } = require('./site-config.cjs');

function renderHtml(html, config) {
  const marker = '<script id="site-config" type="application/json"></script>';
  const ga4Marker = '<script id="ga4-google-tag"></script>';
  if (!html.includes(marker)) throw new Error('Konfigurationsplatzhalter fehlt in index.html.');
  if (!html.includes(ga4Marker)) throw new Error('GA4-Platzhalter fehlt in index.html.');
  const json = JSON.stringify(config).replace(/</g, '\\u003c');
  const googleTag = config.ga4MeasurementId ? `<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    var analyticsConsent = 'denied';
    try { analyticsConsent = localStorage.getItem('robywood-analytics-consent') === 'granted' ? 'granted' : 'denied'; } catch (_) {}
    gtag('consent', 'default', { analytics_storage: analyticsConsent, ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=${config.ga4MeasurementId}"></script>
  <script>
    gtag('js', new Date());
    gtag('config', '${config.ga4MeasurementId}', { anonymize_ip: true });
  </script>` : '';
  return html
    .replace(ga4Marker, googleTag)
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
