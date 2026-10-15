# I Taglieri di Roby

Mehrsprachige Website für handgefertigte Schneidebretter, persönliche Holzgeschenke und Lasergravuren aus der Schweiz.

Die Website unterstützt Italienisch, Deutsch, Englisch und Französisch. Das Kontaktformular sendet Anfragen samt optionaler Gravurvorlage per E-Mail über FormSubmit.

## Entwicklung

`index.html` enthält die Seitenstruktur, `style.css` die Gestaltung und `main.js` die Übersetzungen und Funktionen. Bilder liegen in `images/`. Änderbare Geschäftsdaten stehen in `.env`.

Nach Änderungen an `.env` die Website mit `node scripts/build-site.cjs` erzeugen. Für die lokale Vorschau einen statischen HTTP-Server im Verzeichnis `_site` starten, beispielsweise mit `python -m http.server 4173 --directory _site`, und `http://localhost:4173` öffnen. Die Datei `index.html` im Projektverzeichnis ist nur eine Vorlage und funktioniert ohne diesen Build nicht direkt im Browser.

Mit `node scripts/check-site.cjs` lassen sich Übersetzungen, Dateiverweise, Sprungziele, Konfiguration und die dynamisch zusammengestellten E-Mail-Nachrichten prüfen. Dabei werden keine Nachrichten gesendet.

## Änderbare Angaben

In `.env` lassen sich `PIECES_CREATED` und `YEARS_EXPERIENCE` für die beiden Kennzahlen ändern. Ein nachgestelltes `+` ist möglich. `PRICE_SMALL_CHF`, `PRICE_MEDIUM_CHF`, `PRICE_PIZZA_CHF` und `PRICE_LARGE_CHF` steuern die vier angezeigten Preise.

Für jede Größe gibt es ein Wertepaar `SIZE_<GRÖSSE>_LENGTH_CM` und `SIZE_<GRÖSSE>_WIDTH_CM`. Die Größen heißen `SMALL`, `MEDIUM`, `PIZZA` und `LARGE`. Beide Werte müssen gemeinsam gesetzt werden. Bleiben beide leer, zeigt die Preiskarte „Maße auf Anfrage“ und das Formular keine festen Maße. Die bisher genannten Maße für kleine und mittlere Bretter waren Bereiche, keine bestätigten Standardmaße; deshalb sind zunächst alle vier Paare leer.

`WOOD_TYPES_IT`, `WOOD_TYPES_EN`, `WOOD_TYPES_DE` und `WOOD_TYPES_FR` enthalten kommagetrennte Holzarten in derselben Reihenfolge. Jede Liste muss gleich viele Einträge haben, damit die Auswahl beim Sprachwechsel erhalten bleibt. Spezielle Holzarten können Kunden weiterhin frei angeben.

`CONTACT_EMAIL` legt die Empfängeradresse für Formular und direkten E-Mail-Kontakt fest. Der Versand nutzt [FormSubmit](https://formsubmit.co/): Nach der ersten Formularübermittlung muss der Empfänger die Aktivierungsnachricht im Postfach bestätigen. Ohne Bestätigung werden Anfragen noch nicht zugestellt. FormSubmit verarbeitet die Angaben und bewahrt Einsendungen nach eigener Dokumentation 30 Tage auf; ein Anhang darf höchstens 10 MB groß sein. **Die `.env` ist öffentlich:** keine Passwörter oder geheimen Schlüssel eintragen. Die bisherige Telefonnummer kann außerdem in älteren Git-Versionen und veröffentlichten Seiten enthalten sein.

## Veröffentlichung

Änderungen auf `main` werden mit `.github/workflows/pages.yml` geprüft, aus `.env` gebaut und über GitHub Actions auf GitHub Pages veröffentlicht. Die `.env` selbst wird nicht in die fertige Website kopiert; ihre Werte erscheinen aber im öffentlichen Seitencode.

Website: https://claudious19.github.io/taglieri-demo-1/
