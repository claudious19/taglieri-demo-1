const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const javascript = fs.readFileSync(path.join(root, 'main.js'), 'utf8');
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
assert.ok(html.includes('CHF 160'), 'Preis für Pizza al metro fehlt.');

// Nachricht im isolierten Kontext prüfen, ohne WhatsApp zu öffnen oder Daten zu senden.
const formCode = javascript.slice(javascript.indexOf('// WhatsApp order form'), javascript.indexOf('// Smooth scroll:'));
for (const language of Object.keys(dictionary)) {
  for (const engraving of ['yes', 'no']) {
    let submit;
    let openedUrl;
    const values = new Map(Object.entries({firstName: 'Test', lastName: 'Person', email: 'test@example.com', size: 'custom', customSize: '60 × 30 cm', wood: 'specific', customWood: 'Olivo', engraving, notes: 'Test & Prüfung'}));
    const elements = new Map();
    const document = {getElementById(id) {
      if (!elements.has(id)) elements.set(id, {
        value: id === 'board-size' ? 'custom' : id === 'wood-type' ? 'specific' : engraving,
        addEventListener(type, handler) { if (id === 'whatsapp-order-form' && type === 'submit') submit = handler; },
        reportValidity: () => true,
      });
      return elements.get(id);
    }};
    const window = {addEventListener() {}, open() {
      return {set opener(value) {}, location: {set href(value) { openedUrl = value; }}};
    }};
    vm.runInNewContext(formCode, {
      document, window, translations: dictionary, currentLang: language, setTimeout,
      FormData: class { get(key) { return values.get(key); } },
    });
    assert.equal(elements.get('custom-size').required, true);
    assert.equal(elements.get('custom-wood').disabled, false);
    submit({preventDefault() {}});
    const url = new URL(openedUrl);
    const message = url.searchParams.get('text');
    assert.equal(url.pathname, '/41787544017');
    assert.ok(message.includes('60 × 30 cm') && message.includes('Olivo') && message.includes('test@example.com'));
    assert.ok(!message.includes('undefined'));
    assert.equal(message.includes(dictionary[language]['contact.whatsapp.attachment']), engraving === 'yes');
  }
}
console.log('Vier Sprachen, Dateien, Sprungziele und acht WhatsApp-Anfragen erfolgreich geprüft.');
