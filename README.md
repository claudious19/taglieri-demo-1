# Robywood

Mehrsprachige Website für handgefertigte Schneidebretter, persönliche Holzgeschenke und Lasergravuren aus der Schweiz.

Die Website unterstützt Italienisch, Deutsch, Englisch und Französisch. Das Kontaktformular öffnet eine vorausgefüllte E-Mail; Kunden hängen eine Gravurvorlage im E-Mail-Programm selbst an und senden die Nachricht dort ab.

Die Schriftarten `DM Sans` und `Cormorant Garamond` werden lokal aus `fonts/` geladen. Beide stehen unter der SIL Open Font License 1.1; die vollständigen Lizenztexte liegen im selben Ordner. Es werden keine Google-Fonts-Server kontaktiert.

## Entwicklung

`index.html` enthält die Seitenstruktur, `style.css` die Gestaltung und `main.js` die Übersetzungen und Funktionen. Bilder liegen in `images/`. Änderbare Geschäftsdaten stehen in `.env`.

Nach Änderungen an `.env` die Website mit `node scripts/build-site.cjs` erzeugen. Für die lokale Vorschau einen statischen HTTP-Server im Verzeichnis `_site` starten, beispielsweise mit `python -m http.server 4173 --directory _site`, und `http://localhost:4173` öffnen. Die Datei `index.html` im Projektverzeichnis ist nur eine Vorlage und funktioniert ohne diesen Build nicht direkt im Browser.

Mit `node scripts/check-site.cjs` lassen sich Übersetzungen, Dateiverweise, Sprungziele, Konfiguration und die dynamisch zusammengestellten E-Mail-Nachrichten prüfen. Dabei werden keine Nachrichten gesendet.

## Änderbare Angaben

In `.env` lassen sich `PIECES_CREATED` und `YEARS_EXPERIENCE` für die beiden Kennzahlen ändern. Ein nachgestelltes `+` ist möglich. `PRICE_SMALL_CHF`, `PRICE_MEDIUM_CHF`, `PRICE_PIZZA_CHF` und `PRICE_LARGE_CHF` steuern die vier angezeigten Preise.

Für jede Größe gibt es ein Wertepaar `SIZE_<GRÖSSE>_LENGTH_CM` und `SIZE_<GRÖSSE>_WIDTH_CM`. Die Größen heißen `SMALL`, `MEDIUM`, `PIZZA` und `LARGE`. Beide Werte müssen gemeinsam gesetzt werden. Bleiben beide leer, zeigt die Preiskarte „Maße auf Anfrage“ und das Formular keine festen Maße. Die bisher genannten Maße für kleine und mittlere Bretter waren Bereiche, keine bestätigten Standardmaße; deshalb sind zunächst alle vier Paare leer.

`WOOD_TYPES_IT`, `WOOD_TYPES_EN`, `WOOD_TYPES_DE` und `WOOD_TYPES_FR` enthalten kommagetrennte Holzarten in derselben Reihenfolge. Jede Liste muss gleich viele Einträge haben, damit die Auswahl beim Sprachwechsel erhalten bleibt. Spezielle Holzarten können Kunden weiterhin frei angeben.

`CONTACT_EMAIL` legt die Empfängeradresse für Formular und direkten E-Mail-Kontakt fest. `INSTAGRAM_USERNAME` steuert den sichtbaren Instagram-Namen und dessen Link; ein vorangestelltes `@` ist optional. Der Formularbutton öffnet über `mailto:` einen Entwurf im lokal eingerichteten E-Mail-Programm. Ohne eingerichtetes E-Mail-Programm funktioniert dieser Weg möglicherweise nicht; Kunden können die sichtbare Adresse kopieren und selbst eine E-Mail schreiben. Anhänge können technisch nicht über `mailto:` übergeben werden und müssen manuell hinzugefügt werden. **Die `.env` ist öffentlich:** keine Passwörter oder geheimen Schlüssel eintragen. Die bisherige Telefonnummer kann außerdem in älteren Git-Versionen und veröffentlichten Seiten enthalten sein.

`UMAMI_WEBSITE_ID` aktiviert optional die datenschutzfreundliche Webanalyse mit Umami. Die Website-ID stammt aus den Tracking-Code-Einstellungen deiner Umami-Website und ist öffentlich. `UMAMI_SCRIPT_URL` ist standardmäßig auf Umami Cloud gesetzt und kann für eine eigene Umami-Installation angepasst werden. Solange `UMAMI_WEBSITE_ID` leer ist, lädt die Website kein Analytics-Skript. Der Tracker respektiert die „Do Not Track“-Einstellung des Browsers und setzt keine Analyse-Cookies. Eine Datenschutzerklärung und die rechtliche Ausgestaltung bleiben Sache des Website-Betreibers.

## Veröffentlichung

Änderungen auf `main` werden mit `.github/workflows/pages.yml` geprüft, aus `.env` gebaut und über GitHub Actions auf GitHub Pages veröffentlicht. Die `.env` selbst wird nicht in die fertige Website kopiert; ihre Werte erscheinen aber im öffentlichen Seitencode.

Website: https://claudious19.github.io/robywood/
