# I Taglieri di Roby

Mehrsprachige Website für handgefertigte Schneidebretter, persönliche Holzgeschenke und Lasergravuren aus der Schweiz.

Die Website unterstützt Italienisch, Deutsch, Englisch und Französisch. Das Kontaktformular bereitet eine WhatsApp-Anfrage vor. Kunden prüfen und senden die Nachricht selbst und hängen Gravurvorlagen anschließend im Chat an.

## Entwicklung

`index.html` enthält die Seitenstruktur, `style.css` die Gestaltung und `main.js` die Übersetzungen und Funktionen. Bilder liegen in `images/`.

Für die lokale Vorschau einen statischen HTTP-Server im Projektverzeichnis starten, beispielsweise mit `python -m http.server 4173`, und `http://localhost:4173` öffnen.

Mit `node scripts/check-site.cjs` lassen sich Übersetzungen, Dateiverweise, Sprungziele und die WhatsApp-Nachrichten prüfen. Dabei werden keine Nachrichten gesendet.

## Veröffentlichung

Änderungen auf `main` werden mit `.github/workflows/pages.yml` geprüft und über GitHub Actions auf GitHub Pages veröffentlicht. Es werden ausschließlich die Website-Dateien und Bilder bereitgestellt.

Website: https://claudious19.github.io/taglieri-demo-1/
