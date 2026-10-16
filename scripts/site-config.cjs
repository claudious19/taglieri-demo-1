const fs = require('node:fs');
const path = require('node:path');
const { parseEnv } = require('node:util');

const root = path.resolve(__dirname, '..');
const sizes = ['small', 'medium', 'pizza', 'large'];
const languages = ['it', 'en', 'de', 'fr'];

function loadConfig(source = fs.readFileSync(path.join(root, '.env'), 'utf8')) {
  const env = parseEnv(source);
  const required = key => {
    const value = env[key]?.trim();
    if (!value) throw new Error(`${key} fehlt in .env.`);
    return value;
  };
  const positiveNumber = (key, optional = false) => {
    const value = env[key]?.trim() || '';
    if (optional && !value) return null;
    if (!/^\d+(?:\.\d{1,2})?$/.test(value) || Number(value) <= 0) {
      throw new Error(`${key} muss eine positive Zahl sein.`);
    }
    return Number(value);
  };
  const stat = key => {
    const value = required(key);
    if (!/^\d+\+?$/.test(value)) throw new Error(`${key} muss eine Zahl mit optionalem + sein.`);
    return value;
  };

  const contactEmail = required('CONTACT_EMAIL');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    throw new Error('CONTACT_EMAIL muss eine gültige E-Mail-Adresse sein.');
  }
  const instagramUsername = required('INSTAGRAM_USERNAME').replace(/^@/, '');
  if (!/^[A-Za-z0-9._]+$/.test(instagramUsername)) {
    throw new Error('INSTAGRAM_USERNAME enthält ungültige Zeichen.');
  }
  const umamiWebsiteId = (env.UMAMI_WEBSITE_ID || '').trim();
  if (umamiWebsiteId && !/^[A-Za-z0-9-]{8,}$/.test(umamiWebsiteId)) {
    throw new Error('UMAMI_WEBSITE_ID enthält ungültige Zeichen.');
  }
  const umamiScriptUrl = (env.UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js').trim();
  try {
    const url = new URL(umamiScriptUrl);
    if (url.protocol !== 'https:') throw new Error();
  } catch (_) {
    throw new Error('UMAMI_SCRIPT_URL muss eine gültige HTTPS-URL sein.');
  }

  const configuredSizes = Object.fromEntries(sizes.map(size => {
    const prefix = size.toUpperCase();
    const lengthCm = positiveNumber(`SIZE_${prefix}_LENGTH_CM`, true);
    const widthCm = positiveNumber(`SIZE_${prefix}_WIDTH_CM`, true);
    if ((lengthCm === null) !== (widthCm === null)) {
      throw new Error(`Für ${size} müssen Länge und Breite gemeinsam angegeben werden.`);
    }
    return [size, {
      priceChf: positiveNumber(`PRICE_${prefix}_CHF`),
      lengthCm,
      widthCm,
    }];
  }));

  const woodLists = Object.fromEntries(languages.map(lang => {
    const items = required(`WOOD_TYPES_${lang.toUpperCase()}`).split(',').map(item => item.trim());
    if (items.some(item => !item)) throw new Error(`WOOD_TYPES_${lang.toUpperCase()} enthält einen leeren Eintrag.`);
    return [lang, items];
  }));
  const woodCount = woodLists.it.length;
  if (languages.some(lang => woodLists[lang].length !== woodCount)) {
    throw new Error('Alle WOOD_TYPES-Listen müssen gleich viele Einträge haben.');
  }

  return {
    stats: { pieces: stat('PIECES_CREATED'), years: stat('YEARS_EXPERIENCE') },
    contactEmail,
    instagramUsername,
    umami: { websiteId: umamiWebsiteId, scriptUrl: umamiScriptUrl },
    sizes: configuredSizes,
    woods: Array.from({ length: woodCount }, (_, index) =>
      Object.fromEntries(languages.map(lang => [lang, woodLists[lang][index]]))),
  };
}

module.exports = { loadConfig, root };
