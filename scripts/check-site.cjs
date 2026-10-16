const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { loadConfig } = require('./site-config.cjs');
const { renderHtml } = require('./build-site.cjs');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const javascript = fs.readFileSync(path.join(root, 'main.js'), 'utf8');
const envSource = fs.readFileSync(path.join(root, '.env'), 'utf8');
const siteConfig = loadConfig(envSource);
const renderedHtml = renderHtml(html, siteConfig);
assert.deepEqual(JSON.parse(renderedHtml.match(/<script id="site-config" type="application\/json">([\s\S]*?)<\/script>/)[1]), siteConfig);
const disabledConfig = loadConfig(envSource.replace(/^UMAMI_WEBSITE_ID=.*$/m, 'UMAMI_WEBSITE_ID='));
const renderedDisabledHtml = renderHtml(html, disabledConfig);
const changedConfig = loadConfig(envSource
  .replace(/^PRICE_PIZZA_CHF=.*$/m, 'PRICE_PIZZA_CHF=170')
  .replace(/^SIZE_SMALL_LENGTH_CM=.*$/m, 'SIZE_SMALL_LENGTH_CM=30')
  .replace(/^SIZE_SMALL_WIDTH_CM=.*$/m, 'SIZE_SMALL_WIDTH_CM=20')
  .replace(/^CONTACT_EMAIL=.*$/m, 'CONTACT_EMAIL=test@example.com')
  .replace(/^UMAMI_WEBSITE_ID=.*$/m, 'UMAMI_WEBSITE_ID=94db1cb1-74f4-4a40-ad6c-962362670409'));
assert.equal(changedConfig.sizes.pizza.priceChf, 170);
assert.equal(changedConfig.sizes.small.lengthCm, 30);
assert.equal(changedConfig.contactEmail, 'test@example.com');
assert.equal(changedConfig.umami.websiteId, '94db1cb1-74f4-4a40-ad6c-962362670409');
assert.throws(() => loadConfig(envSource.replace('SIZE_SMALL_LENGTH_CM=', 'SIZE_SMALL_LENGTH_CM=30')), /gemeinsam/);
assert.throws(() => loadConfig(envSource.replace(/^UMAMI_WEBSITE_ID=.*$/m, 'UMAMI_WEBSITE_ID=invalid')), /ungültige Zeichen/);
assert.equal(siteConfig.woods.length, 5);
new vm.Script(javascript);

const context = {};
vm.runInNewContext(javascript.split('const langMeta =')[0] + ';this.dictionary = translations;', context);
const dictionary = context.dictionary;
const keys = new Set([...html.matchAll(/data-i18n(?:-alt|-aria|-placeholder)?="([^"]+)"/g)].map(match => match[1]));
for (const [language, values] of Object.entries(dictionary)) {
  for (const key of keys) assert.ok(values[key], `${language}: ${key}`);
  assert.deepEqual(Object.keys(values).sort(), Object.keys(dictionary.it).sort(), language);
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'IDs müssen eindeutig sein.');
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(match[1]), `Fehlendes Sprungziel: ${match[1]}`);
}
for (const match of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
  assert.ok(fs.existsSync(path.join(root, match[1])), `Fehlende Datei: ${match[1]}`);
}
for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  assert.ok(!JSON.parse(match[1]).telephone, 'Telefonkontakt darf nicht in den Metadaten stehen.');
}
assert.ok(!html.includes('href="tel:'), 'Telefonlink darf nicht angezeigt werden.');
assert.ok(!html.includes('wa.me/') && !javascript.includes('wa.me/'), 'WhatsApp-Link darf nicht angezeigt werden.');
assert.ok(!/https?:\/\/wa\.me\//.test(renderedHtml), 'WhatsApp-Link darf nicht im Build stehen.');
assert.ok(!/formsubmit/i.test(html + javascript), 'Das Formular darf FormSubmit nicht mehr verwenden.');
assert.ok(!html.includes('type="file"'), 'Dateianhänge müssen im E-Mail-Programm ergänzt werden.');
assert.ok(!/fonts\.(googleapis|gstatic)\.com/.test(html + fs.readFileSync(path.join(root, 'style.css'), 'utf8')), 'Google Fonts dürfen nicht geladen werden.');
assert.ok(!/(googletagmanager|google-analytics|gtag\()/i.test(renderedHtml + javascript), 'Google Analytics darf nicht mehr ausgeliefert werden.');
assert.ok(renderedHtml.includes(`data-website-id="${siteConfig.umami.websiteId}"`), 'Die konfigurierte Umami-Website-ID fehlt im Produktions-Build.');
assert.ok(!/<script[^>]+src="https:\/\/cloud\.umami\.is\/script\.js"/.test(renderedDisabledHtml), 'Umami darf ohne Website-ID nicht geladen werden.');
const renderedUmamiHtml = renderHtml(html, changedConfig);
assert.ok(renderedUmamiHtml.includes('src="https://cloud.umami.is/script.js"'), 'Umami-Skript fehlt im Produktions-Build.');
assert.ok(renderedUmamiHtml.includes('data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"'), 'Umami-Website-ID fehlt im Produktions-Build.');
assert.ok(renderedUmamiHtml.includes('data-do-not-track="true"'), 'Umami muss Do Not Track respektieren.');
assert.ok(renderedUmamiHtml.includes('data-exclude-search="true"'), 'Umami darf keine URL-Parameter erfassen.');
for (const font of ['dm-sans.woff2', 'cormorant-garamond-roman.woff2', 'cormorant-garamond-italic.woff2', 'OFL-DM-Sans.txt', 'OFL-Cormorant-Garamond.txt']) {
  assert.ok(fs.existsSync(path.join(root, 'fonts', font)), `Lokale Schriftdatei fehlt: ${font}`);
}
const imageHashes = new Set();
for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
  const file = path.join(root, decodeURIComponent(match[1]));
  const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  assert.ok(!imageHashes.has(hash), `Bild wird mehrfach angezeigt: ${match[1]}`);
  imageHashes.add(hash);
}
for (const name of fs.readdirSync(path.join(root, 'images')).filter(name => /^WhatsApp Image.*\.jpeg$/.test(name))) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, 'images', name))).digest('hex');
  assert.ok(imageHashes.has(hash), `Neues Motiv fehlt: ${name}`);
}
assert.ok(!html.includes('roby_logo_golden') && !html.includes('logo_roby'), 'Logo darf nicht eingebunden sein.');
assert.ok(!html.includes('I Taglieri di Roby') && !javascript.includes('I Taglieri di Roby'), 'Alter Markenname darf nicht angezeigt werden.');
assert.equal(siteConfig.sizes.pizza.priceChf, 160, 'Preis für Pizza al metro fehlt.');

// Nachricht im isolierten Kontext prüfen, ohne Daten zu senden.
const formCode = javascript.slice(javascript.indexOf('// E-Mail-Anfrage'), javascript.indexOf('// Smooth scroll:'));
const dimensionCode = javascript.slice(javascript.indexOf('function formatDimensions'), javascript.indexOf('function updateConfiguredContent'));
for (const language of Object.keys(dictionary)) {
  for (const [engraving, config, size, wood] of [
    ['yes', siteConfig, 'custom', 'specific'],
    ['no', siteConfig, 'custom', 'specific'],
    ['no', changedConfig, 'small', 'wood-0'],
  ]) {
    let submit;
    const values = new Map(Object.entries({firstName: 'Test', lastName: 'Person', size, customSize: '60 × 30 cm', wood, customWood: 'Olivo', engraving, notes: 'Test & Prüfung'}));
    const elements = new Map();
    const document = {getElementById(id) {
      if (!elements.has(id)) elements.set(id, {
        value: id === 'board-size' ? size : id === 'wood-type' ? wood : engraving,
        addEventListener(type, handler) { if (id === 'email-order-form' && type === 'submit') submit = handler; },
        reportValidity: () => true,
      });
      return elements.get(id);
    }};
    const window = {addEventListener() {}, location: {href: ''}};
    vm.runInNewContext(dimensionCode + formCode, {
      document, window, translations: dictionary, currentLang: language, setTimeout,
      siteConfig: config,
      FormData: class { get(key) { return values.get(key); } },
    });
    assert.equal(elements.get('custom-size').required, size === 'custom');
    assert.equal(elements.get('custom-wood').disabled, wood !== 'specific');
    let prevented = false;
    submit({preventDefault() { prevented = true; }});
    assert.equal(prevented, true);
    const url = new URL(window.location.href);
    assert.equal(url.protocol, 'mailto:');
    assert.equal(url.pathname, config.contactEmail);
    assert.equal(url.searchParams.get('subject'), dictionary[language]['contact.mail.subject']);
    const message = url.searchParams.get('body');
    assert.ok(message.includes('Test Person'));
    assert.ok(size === 'custom' ? message.includes('60 × 30 cm') : message.includes('30 × 20 cm'));
    assert.ok(wood === 'specific' ? message.includes('Olivo') : message.includes(config.woods[0][language]));
    assert.ok(!message.includes('undefined'));
    assert.equal(message.includes(dictionary[language]['contact.whatsapp.attachment']), engraving === 'yes');
  }
}
console.log('Vier Sprachen, Konfiguration, Dateien, Sprungziele und zwölf E-Mail-Anfragen erfolgreich geprüft.');
