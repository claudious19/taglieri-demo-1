/* =========================================
   I Taglieri di Roby — main.js (FULLY WORKING)
   ========================================= */

// ✦ Complete Translations ✦
const translations = {
  it: {
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.gallery": "Galleria",
    "nav.engraving": "Incisione laser",
    "nav.pricing": "Prezzi",
    "nav.maintenance": "Manutenzione",
    "nav.contact": "Contatti",
    "hero.eyebrow": "Artigianato fatto a mano · Svizzera",
    "hero.sub": "Ogni pezzo è unico. Ogni venatura racconta una storia.",
    "hero.cta": "Scopri le creazioni",
    "hero.scroll": "Scorri",
    "about.title": "Passione per il<br/><em>legno naturale</em>",
    "about.p1": "Mi chiamo Roberto e da anni trasformo il legno in oggetti di uso quotidiano con le mie mani. Ogni tagliere nasce da un pezzo selezionato con cura — noce, ciliegio, acero o rovere — scelto per la bellezza della venatura e la qualità del legno.",
    "about.p2": "Non lavoro in serie. Ogni pezzo è pensato, sagomato e rifinito individualmente. Il legno ha una sua voce, e io mi limito ad ascoltarla.",
    "about.stat1": "Pezzi creati",
    "about.stat2": "Anni di esperienza",
    "about.stat3": "Fatto a mano",
    "gallery.label": "Le mie creazioni",
    "gallery.all": "Tutti",
    "gallery.handle": "Con manico",
    "gallery.nohandle": "Senza manico",
    "gallery.meterpizza": "Pizza al metro",
    "gallery.upcycled": "Upcycled",
    "gallery.engraved": "Con incisione",
    "gallery.item1.name": "Tagliere Grande",
    "gallery.item2.name": "Tagliere Ovale",
    "gallery.item3.name": "Tagliere con Manico",
    "gallery.item4.name": "Tagliere Medio",
    "gallery.item5.name": "Tagliere Personalizzato",
    "gallery.item6.name": "Tagliere Ovale Piccolo",
    "process.label": "Dentro la bottega",
    "process.title": "Dal legno al <em>tagliere</em>",
    "process.sub": "Ogni forma nasce dalla selezione del legno, passa dal banco di lavoro e viene rifinita a mano.",
    "process.step1": "Scelta delle forme",
    "process.step2": "Lavorazione in bottega",
    "process.step3": "Selezione del legno",
    "process.step4": "Sagomatura a mano",
    "engraving.label": "Personalizzazione",
    "engraving.title": "Quali immagini <em>incidono meglio?</em>",
    "engraving.sub": "Puoi inviare una silhouette già pronta oppure una fotografia normale. Il laser traduce l'immagine in bianco e nero: l'importante è che, dopo la conversione, i dettagli che desideri incidere rimangano riconoscibili. In caso di dubbio, valuto io la foto prima della lavorazione.",
    "engraving.color.status": "Da valutare",
    "engraving.color.title": "Fotografia normale",
    "engraving.color.desc": "Puoi inviarla così com'è. Prima dell'incisione viene valutata in bianco e nero per verificare che soggetto, contorni e dettagli importanti restino leggibili senza dipendere dai colori.",
    "engraving.color.alt": "Fotografia a colori molto dettagliata di un ulivo",
    "engraving.detail.status": "Attenzione ai dettagli",
    "engraving.detail.title": "Dettagli da preservare",
    "engraving.detail.desc": "Linee molto sottili e piccoli spazi possono fondersi durante la conversione o su incisioni ridotte. Indica quali elementi sono essenziali: l'immagine verrà semplificata solo dove serve.",
    "engraving.detail.alt": "Albero nero molto dettagliato con radici e rami sottili",
    "engraving.good.status": "Consigliata",
    "engraving.good.title": "Silhouette già pronta",
    "engraving.good.desc": "Una silhouette in bianco e nero, con contorni chiari e forme ben separate, è già pronta per essere adattata all'incisione. È ideale per loghi, simboli, scritte e illustrazioni.",
    "engraving.good.alt": "Silhouette nera e bianca di un albero con forme pulite",
    "engraving.tips.title": "Come puoi consegnare l'immagine",
    "engraving.tip1": "Una silhouette già pronta, preferibilmente in SVG o PNG ad alta risoluzione.",
    "engraving.tip2": "Una foto normale in cui i contorni e i dettagli desiderati restino distinguibili anche senza colore.",
    "engraving.tip3": "Qualsiasi foto normale: la valuto io e ti comunico se è adatta o se necessita di modifiche.",
    "engraving.note": "Non devi convertire o modificare la foto da solo. Prima dell'incisione verifico che il passaggio al bianco e nero conservi gli elementi che vuoi vedere sul legno.",
    "pricing.label": "Investimento",
    "pricing.sub": "Ogni pezzo è unico — i prezzi variano in base al legno, alle dimensioni e alla complessità. Questi sono range indicativi.",
    "pricing.from": "da",
    "pricing.popular": "Più richiesto",
    "pricing.s.title": "Piccolo",
    "pricing.s.desc": "Taglieri compatti, perfetti per pane, formaggi e antipasti. Dimensioni fino a 30 × 20 cm.",
    "pricing.s.f1": "✦ Acero o Frassino",
    "pricing.s.f2": "✦ Finitura con olio naturale",
    "pricing.s.f3": "✦ Bordi levigati a mano",
    "pricing.m.title": "Medio",
    "pricing.m.desc": "Formato ideale per uso quotidiano. Dimensioni tra 30 × 20 cm e 45 × 30 cm.",
    "pricing.m.f1": "✦ Noce, Ciliegio o Rovere",
    "pricing.m.f2": "✦ Finitura con olio di lino",
    "pricing.m.f3": "✦ Personalizzazione disponibile",
    "pricing.m.f4": "✦ Piedini antiscivolo",
    "pricing.l.title": "Speciale",
    "pricing.l.desc": "Pezzi da esposizione, incisioni personalizzate o formati extra-large su richiesta.",
    "pricing.l.f1": "✦ Legni pregiati selezionati",
    "pricing.l.f2": "✦ Incisione personalizzata",
    "pricing.l.f3": "✦ Cofanetto regalo incluso",
    "pricing.l.f4": "✦ Certificato di autenticità",
    "pricing.note": "Contattami per un preventivo personalizzato. Realizzo anche pezzi su commissione per regali e occasioni speciali.",
    "maint.label": "Cura del prodotto",
    "maint.sub": "Un tagliere in legno ben curato dura una vita. Segui questi semplici consigli.",
    "maint.1.title": "Lavaggio",
    "maint.1.desc": "Lava a mano con acqua tiepida e sapone neutro. Non immergere mai in acqua e non mettere in lavastoviglie — il legno potrebbe screpolarsi.",
    "maint.1.freq": "Dopo ogni utilizzo",
    "maint.2.title": "Asciugatura",
    "maint.2.desc": "Asciuga subito con un panno morbido e lascia asciugare il tagliere in verticale. Evita sole diretto e fonti di calore.",
    "maint.2.freq": "Subito dopo il lavaggio",
    "maint.3.title": "Oliatura",
    "maint.3.desc": "Ogni 4–6 settimane applica un sottile strato di olio di lino o olio minerale alimentare.",
    "maint.3.freq": "Ogni 4–6 settimane",
    "maint.4.title": "Rigenerazione",
    "maint.4.desc": "Se il legno mostra segni d'usura, levigalo delicatamente con carta abrasiva fine (grana 220) seguendo la venatura e applica nuovamente l'olio.",
    "maint.4.freq": "Quando necessario",
    "maint.tip.label": "Consiglio di Roby:",
    "maint.tip.text": "Un tagliere in legno non è solo uno strumento da cucina — è un compagno di vita.",
    "contact.label": "Parliamoci",
    "contact.sub": "Interessato a un pezzo? Hai domande? Scrivimi o chiamami direttamente.",
    "contact.phone": "Telefono",
    "footer.tagline": "Artigianato in legno fatto a mano · Svizzera",
    "footer.copy": "© 2025 Roberto — Tutti i diritti riservati"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.gallery": "Gallery",
    "nav.engraving": "Laser engraving",
    "nav.pricing": "Pricing",
    "nav.maintenance": "Care",
    "nav.contact": "Contact",
    "hero.eyebrow": "Handcrafted artisanry · Switzerland",
    "hero.sub": "Every piece is unique. Every grain tells a story.",
    "hero.cta": "Discover the creations",
    "hero.scroll": "Scroll",
    "about.title": "Passion for<br/><em>natural wood</em>",
    "about.p1": "My name is Roberto, and for years I have been transforming wood into everyday objects with my own hands. Each cutting board is born from a carefully selected piece — walnut, cherry, maple, or oak — chosen for the beauty of its grain and the quality of the wood.",
    "about.p2": "I don't work in series. Each piece is conceived, shaped, and finished individually. The wood has its own voice, and I simply listen to it.",
    "about.stat1": "Pieces created",
    "about.stat2": "Years of experience",
    "about.stat3": "Handmade",
    "gallery.label": "My creations",
    "gallery.all": "All",
    "gallery.handle": "With handle",
    "gallery.nohandle": "Without handle",
    "gallery.meterpizza": "Meter pizza",
    "gallery.upcycled": "Upcycled",
    "gallery.engraved": "With engraving",
    "gallery.item1.name": "Large Cutting Board",
    "gallery.item2.name": "Oval Cutting Board",
    "gallery.item3.name": "Cutting Board with Handle",
    "gallery.item4.name": "Medium Cutting Board",
    "gallery.item5.name": "Custom Cutting Board",
    "gallery.item6.name": "Small Oval Cutting Board",
    "process.label": "Inside the workshop",
    "process.title": "From wood to <em>cutting board</em>",
    "process.sub": "Each shape begins with selecting the wood, passes through the workbench, and is finished by hand.",
    "process.step1": "Choosing the shapes",
    "process.step2": "Workshop crafting",
    "process.step3": "Wood selection",
    "process.step4": "Shaped by hand",
    "engraving.label": "Customization",
    "engraving.title": "Which images <em>engrave best?</em>",
    "engraving.sub": "You can send a ready-made silhouette or a normal photograph. The laser translates the image into black and white, so the important point is that the details you want engraved remain recognizable after conversion. When in doubt, I assess the photo before production.",
    "engraving.color.status": "To be assessed",
    "engraving.color.title": "Normal photograph",
    "engraving.color.desc": "You can send it as it is. Before engraving, it is assessed in black and white to ensure that the subject, outlines, and important details remain readable without relying on color.",
    "engraving.color.alt": "Highly detailed color photograph of an olive tree",
    "engraving.detail.status": "Mind the details",
    "engraving.detail.title": "Details to preserve",
    "engraving.detail.desc": "Very thin lines and small gaps may merge during conversion or in a small engraving. Tell me which elements are essential so the image is simplified only where necessary.",
    "engraving.detail.alt": "Highly detailed black tree with thin roots and branches",
    "engraving.good.status": "Recommended",
    "engraving.good.title": "Ready-made silhouette",
    "engraving.good.desc": "A black-and-white silhouette with clear outlines and well-separated shapes is already suitable for adapting to engraving. It is ideal for logos, symbols, lettering, and illustrations.",
    "engraving.good.alt": "Black-and-white tree silhouette with clean shapes",
    "engraving.tips.title": "How you can provide your image",
    "engraving.tip1": "A ready-made silhouette, preferably as an SVG or high-resolution PNG.",
    "engraving.tip2": "A normal photo whose outlines and desired details remain distinguishable without color.",
    "engraving.tip3": "Any normal photo: I assess it and tell you whether it is suitable or needs adjustments.",
    "engraving.note": "You do not need to convert or edit the photo yourself. Before engraving, I check that the black-and-white conversion preserves the elements you want to see on the wood.",
    "pricing.label": "Investment",
    "pricing.sub": "Each piece is unique — prices vary based on wood type, size, and complexity. These are indicative ranges.",
    "pricing.from": "from",
    "pricing.popular": "Most requested",
    "pricing.s.title": "Small",
    "pricing.s.desc": "Compact boards, perfect for bread, cheese, and appetizers. Dimensions up to 30 × 20 cm.",
    "pricing.s.f1": "✦ Maple or Ash",
    "pricing.s.f2": "✦ Natural oil finish",
    "pricing.s.f3": "✦ Hand-sanded edges",
    "pricing.m.title": "Medium",
    "pricing.m.desc": "The ideal size for daily use. Dimensions between 30 × 20 cm and 45 × 30 cm.",
    "pricing.m.f1": "✦ Walnut, Cherry or Oak",
    "pricing.m.f2": "✦ Linseed oil finish",
    "pricing.m.f3": "✦ Customization available",
    "pricing.m.f4": "✦ Non-slip feet",
    "pricing.l.title": "Special",
    "pricing.l.desc": "Display pieces, custom engravings, or extra-large sizes upon request.",
    "pricing.l.f1": "✦ Selected fine woods",
    "pricing.l.f2": "✦ Custom engraving",
    "pricing.l.f3": "✦ Gift box included",
    "pricing.l.f4": "✦ Certificate of authenticity",
    "pricing.note": "Contact me for a custom quote. I also create commissioned pieces for gifts and special occasions.",
    "maint.label": "Product care",
    "maint.sub": "A well-maintained wooden cutting board lasts a lifetime. Follow these simple tips.",
    "maint.1.title": "Washing",
    "maint.1.desc": "Hand wash with lukewarm water and mild soap. Never submerge in water or put in the dishwasher — the wood could crack.",
    "maint.1.freq": "After each use",
    "maint.2.title": "Drying",
    "maint.2.desc": "Dry immediately with a soft cloth and let the board dry vertically. Avoid direct sunlight and heat sources.",
    "maint.2.freq": "Immediately after washing",
    "maint.3.title": "Oiling",
    "maint.3.desc": "Every 4–6 weeks, apply a thin layer of linseed oil or food-grade mineral oil.",
    "maint.3.freq": "Every 4–6 weeks",
    "maint.4.title": "Regeneration",
    "maint.4.desc": "If the wood shows signs of wear, gently sand it with fine abrasive paper (220 grit) following the grain, then reapply oil.",
    "maint.4.freq": "When necessary",
    "maint.tip.label": "Roby's tip:",
    "maint.tip.text": "A wooden cutting board is not just a kitchen tool — it's a companion for life.",
    "contact.label": "Let's talk",
    "contact.sub": "Interested in a piece? Have questions? Write or call me directly.",
    "contact.phone": "Phone",
    "footer.tagline": "Handcrafted woodwork · Switzerland",
    "footer.copy": "© 2025 Roberto — All rights reserved"
  },

  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.gallery": "Galerie",
    "nav.engraving": "Lasergravur",
    "nav.pricing": "Preise",
    "nav.maintenance": "Pflege",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Handgefertigte Handwerkskunst · Schweiz",
    "hero.sub": "Jedes Stück ist einzigartig. Jede Maserung erzählt eine Geschichte.",
    "hero.cta": "Entdecken Sie die Kreationen",
    "hero.scroll": "Scrollen",
    "about.title": "Leidenschaft für<br/><em>Naturholz</em>",
    "about.p1": "Ich bin Roberto und verwandle seit Jahren Holz mit meinen eigenen Händen in Gebrauchsgegenstände. Jedes Schneidebrett entsteht aus einem sorgfältig ausgewählten Stück — Walnuss, Kirsche, Ahorn oder Eiche — ausgewählt für die Schönheit seiner Maserung und die Qualität des Holzes.",
    "about.p2": "Ich arbeite nicht in Serie. Jedes Stück wird individuell konzipiert, geformt und veredelt. Das Holz hat seine eigene Stimme, und ich höre ihr einfach zu.",
    "about.stat1": "Stücke gefertigt",
    "about.stat2": "Jahre Erfahrung",
    "about.stat3": "Handgefertigt",
    "gallery.label": "Meine Kreationen",
    "gallery.all": "Alle",
    "gallery.handle": "Mit Griff",
    "gallery.nohandle": "Ohne Griff",
    "gallery.meterpizza": "Meterpizza",
    "gallery.upcycled": "Upcycled",
    "gallery.engraved": "Mit Gravur",
    "gallery.item1.name": "Großes Schneidebrett",
    "gallery.item2.name": "Ovale Schneidebrett",
    "gallery.item3.name": "Schneidebrett mit Griff",
    "gallery.item4.name": "Mittleres Schneidebrett",
    "gallery.item5.name": "Personalisierte Schneidebrett",
    "gallery.item6.name": "Kleines ovales Schneidebrett",
    "process.label": "In der Werkstatt",
    "process.title": "Vom Holz zum <em>Schneidebrett</em>",
    "process.sub": "Jede Form beginnt mit der Auswahl des Holzes, entsteht an der Werkbank und wird von Hand vollendet.",
    "process.step1": "Auswahl der Formen",
    "process.step2": "Arbeit in der Werkstatt",
    "process.step3": "Holzauswahl",
    "process.step4": "Von Hand geformt",
    "engraving.label": "Personalisierung",
    "engraving.title": "Welche Bilder lassen sich <em>am besten gravieren?</em>",
    "engraving.sub": "Du kannst eine fertige Silhouette oder ein normales Foto senden. Der Laser übersetzt das Bild in Schwarz und Weiß. Entscheidend ist, dass die gewünschten Details nach der Umwandlung erkennbar bleiben. Im Zweifelsfall prüfe ich das Foto vor der Bearbeitung.",
    "engraving.color.status": "Wird geprüft",
    "engraving.color.title": "Normales Foto",
    "engraving.color.desc": "Du kannst es unverändert senden. Vor der Gravur wird es in Schwarz und Weiß geprüft, damit Motiv, Konturen und wichtige Details auch ohne Farben gut erkennbar bleiben.",
    "engraving.color.alt": "Detailreiches Farbfoto eines Olivenbaums",
    "engraving.detail.status": "Details beachten",
    "engraving.detail.title": "Details, die erhalten bleiben sollen",
    "engraving.detail.desc": "Sehr dünne Linien und kleine Zwischenräume können bei der Umwandlung oder einer kleinen Gravur zusammenlaufen. Teile mir mit, welche Elemente wichtig sind, damit nur das Nötige vereinfacht wird.",
    "engraving.detail.alt": "Sehr detaillierter schwarzer Baum mit dünnen Wurzeln und Ästen",
    "engraving.good.status": "Empfohlen",
    "engraving.good.title": "Fertige Silhouette",
    "engraving.good.desc": "Eine schwarz-weiße Silhouette mit klaren Konturen und gut getrennten Formen kann direkt für die Gravur angepasst werden. Sie eignet sich ideal für Logos, Symbole, Schriftzüge und Illustrationen.",
    "engraving.good.alt": "Schwarz-weiße Baumsilhouette mit klaren Formen",
    "engraving.tips.title": "So kannst du dein Bild einreichen",
    "engraving.tip1": "Eine fertige Silhouette, vorzugsweise als SVG oder hochauflösendes PNG.",
    "engraving.tip2": "Ein normales Foto, dessen Konturen und gewünschte Details auch ohne Farbe erkennbar bleiben.",
    "engraving.tip3": "Ein beliebiges normales Foto: Ich prüfe, ob es geeignet ist oder angepasst werden muss.",
    "engraving.note": "Du musst das Foto nicht selbst umwandeln oder bearbeiten. Vor der Gravur prüfe ich, ob bei der Schwarz-Weiß-Umwandlung die gewünschten Elemente erhalten bleiben.",
    "pricing.label": "Investition",
    "pricing.sub": "Jedes Stück ist einzigartig — die Preise variieren je nach Holzart, Größe und Komplexität. Dies sind Richtwerte.",
    "pricing.from": "ab",
    "pricing.popular": "Am gefragtesten",
    "pricing.s.title": "Klein",
    "pricing.s.desc": "Kompakte Bretter, perfekt für Brot, Käse und Vorspeisen. Maße bis zu 30 × 20 cm.",
    "pricing.s.f1": "✦ Ahorn oder Esche",
    "pricing.s.f2": "✦ Naturöl-Finish",
    "pricing.s.f3": "✦ Handgeschliffene Kanten",
    "pricing.m.title": "Mittel",
    "pricing.m.desc": "Das ideale Format für den täglichen Gebrauch. Maße zwischen 30 × 20 cm und 45 × 30 cm.",
    "pricing.m.f1": "✦ Walnuss, Kirsche oder Eiche",
    "pricing.m.f2": "✦ Leinöl-Finish",
    "pricing.m.f3": "✦ Personalisierung möglich",
    "pricing.m.f4": "✦ Rutschfeste Füße",
    "pricing.l.title": "Spezial",
    "pricing.l.desc": "Ausstellungsstücke, individuelle Gravuren oder Sonderformate auf Anfrage.",
    "pricing.l.f1": "✦ Ausgewählte Edelhölzer",
    "pricing.l.f2": "✦ Individuelle Gravur",
    "pricing.l.f3": "✦ Geschenkbox inklusive",
    "pricing.l.f4": "✦ Echtheitszertifikat",
    "pricing.note": "Kontaktieren Sie mich für ein individuelles Angebot. Ich fertige auch Auftragsarbeiten für Geschenke und besondere Anlässe an.",
    "maint.label": "Produktpflege",
    "maint.sub": "Ein gut gepflegtes Holzschneidebrett hält ein Leben lang. Befolgen Sie diese einfachen Tipps.",
    "maint.1.title": "Reinigung",
    "maint.1.desc": "Mit lauwarmem Wasser und milder Seife von Hand waschen. Niemals in Wasser einweichen oder in die Spülmaschine geben — das Holz könnte reißen.",
    "maint.1.freq": "Nach jedem Gebrauch",
    "maint.2.title": "Trocknung",
    "maint.2.desc": "Sofort mit einem weichen Tuch trocknen und das Brett senkrecht trocknen lassen. Direkte Sonneneinstrahlung und Wärmequellen vermeiden.",
    "maint.2.freq": "Sofort nach dem Waschen",
    "maint.3.title": "Ölen",
    "maint.3.desc": "Alle 4–6 Wochen eine dünne Schicht Leinöl oder lebensmittelechtes Mineralöl auftragen.",
    "maint.3.freq": "Alle 4–6 Wochen",
    "maint.4.title": "Regenerierung",
    "maint.4.desc": "Wenn das Holz Abnutzungserscheinungen zeigt, vorsichtig mit feinem Schleifpapier (Körnung 220) entlang der Maserung schleifen und anschließend neu ölen.",
    "maint.4.freq": "Bei Bedarf",
    "maint.tip.label": "Robys Tipp:",
    "maint.tip.text": "Ein Holzschneidebrett ist nicht nur ein Küchenwerkzeug — es ist ein Begleiter fürs Leben.",
    "contact.label": "Sprechen wir",
    "contact.sub": "Interesse an einem Stück? Haben Sie Fragen? Schreiben oder rufen Sie mich direkt an.",
    "contact.phone": "Telefon",
    "footer.tagline": "Handgefertigte Holzkunst · Schweiz",
    "footer.copy": "© 2025 Roberto — Alle Rechte vorbehalten"
  },

  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.gallery": "Galerie",
    "nav.engraving": "Gravure laser",
    "nav.pricing": "Tarifs",
    "nav.maintenance": "Entretien",
    "nav.contact": "Contact",
    "hero.eyebrow": "Artisanat fait main · Suisse",
    "hero.sub": "Chaque pièce est unique. Chaque veine raconte une histoire.",
    "hero.cta": "Découvrir les créations",
    "hero.scroll": "Défiler",
    "about.title": "Passion pour le<br/><em>bois naturel</em>",
    "about.p1": "Je m'appelle Roberto et depuis des années, je transforme le bois en objets du quotidien de mes propres mains. Chaque planche à découper naît d'une pièce soigneusement sélectionnée — noyer, cerisier, érable ou chêne — choisie pour la beauté de son grain et la qualité du bois.",
    "about.p2": "Je ne travaille pas en série. Chaque pièce est conçue, façonnée et finie individuellement. Le bois a sa propre voix, et je me contente de l'écouter.",
    "about.stat1": "Pièces créées",
    "about.stat2": "Années d'expérience",
    "about.stat3": "Fait main",
    "gallery.label": "Mes créations",
    "gallery.all": "Tous",
    "gallery.handle": "Avec poignée",
    "gallery.nohandle": "Sans poignée",
    "gallery.meterpizza": "Pizza au mètre",
    "gallery.upcycled": "Upcyclé",
    "gallery.engraved": "Avec gravure",
    "gallery.item1.name": "Grande Planche",
    "gallery.item2.name": "Planche Ovale",
    "gallery.item3.name": "Planche avec Poignée",
    "gallery.item4.name": "Planche Moyenne",
    "gallery.item5.name": "Planche Personnalisée",
    "gallery.item6.name": "Petite Planche Ovale",
    "process.label": "Dans l'atelier",
    "process.title": "Du bois à la <em>planche</em>",
    "process.sub": "Chaque forme naît de la sélection du bois, passe par l'établi et reçoit une finition à la main.",
    "process.step1": "Choix des formes",
    "process.step2": "Travail en atelier",
    "process.step3": "Sélection du bois",
    "process.step4": "Façonnage à la main",
    "engraving.label": "Personnalisation",
    "engraving.title": "Quelles images se <em>gravent le mieux ?</em>",
    "engraving.sub": "Vous pouvez envoyer une silhouette déjà prête ou une photographie normale. Le laser traduit l'image en noir et blanc : l'essentiel est que les détails souhaités restent reconnaissables après la conversion. En cas de doute, j'évalue la photo avant la réalisation.",
    "engraving.color.status": "À évaluer",
    "engraving.color.title": "Photographie normale",
    "engraving.color.desc": "Vous pouvez l'envoyer telle quelle. Avant la gravure, elle est évaluée en noir et blanc afin de vérifier que le sujet, les contours et les détails importants restent lisibles sans dépendre des couleurs.",
    "engraving.color.alt": "Photographie en couleurs très détaillée d'un olivier",
    "engraving.detail.status": "Attention aux détails",
    "engraving.detail.title": "Détails à préserver",
    "engraving.detail.desc": "Les lignes très fines et les petits espaces peuvent fusionner lors de la conversion ou sur une petite gravure. Indiquez les éléments essentiels afin de ne simplifier l'image que lorsque cela est nécessaire.",
    "engraving.detail.alt": "Arbre noir très détaillé avec de fines racines et branches",
    "engraving.good.status": "Recommandée",
    "engraving.good.title": "Silhouette déjà prête",
    "engraving.good.desc": "Une silhouette en noir et blanc, aux contours nets et aux formes bien séparées, est déjà adaptée à la préparation de la gravure. Elle convient parfaitement aux logos, symboles, textes et illustrations.",
    "engraving.good.alt": "Silhouette d'arbre en noir et blanc aux formes nettes",
    "engraving.tips.title": "Comment fournir votre image",
    "engraving.tip1": "Une silhouette déjà prête, de préférence au format SVG ou PNG haute résolution.",
    "engraving.tip2": "Une photo normale dont les contours et les détails souhaités restent reconnaissables sans couleur.",
    "engraving.tip3": "N'importe quelle photo normale : je vérifie si elle convient ou si elle nécessite des adaptations.",
    "engraving.note": "Vous n'avez pas besoin de convertir ou modifier la photo vous-même. Avant la gravure, je vérifie que la conversion en noir et blanc conserve les éléments que vous souhaitez voir sur le bois.",
    "pricing.label": "Investissement",
    "pricing.sub": "Chaque pièce est unique — les prix varient selon le bois, les dimensions et la complexité. Ce sont des fourchettes indicatives.",
    "pricing.from": "à partir de",
    "pricing.popular": "Le plus demandé",
    "pricing.s.title": "Petit",
    "pricing.s.desc": "Planches compactes, parfaites pour le pain, le fromage et les apéritifs. Dimensions jusqu'à 30 × 20 cm.",
    "pricing.s.f1": "✦ Érable ou Frêne",
    "pricing.s.f2": "✦ Fini à l'huile naturelle",
    "pricing.s.f3": "✦ Bords polis à la main",
    "pricing.m.title": "Moyen",
    "pricing.m.desc": "Le format idéal pour un usage quotidien. Dimensions entre 30 × 20 cm et 45 × 30 cm.",
    "pricing.m.f1": "✦ Noyer, Cerisier ou Chêne",
    "pricing.m.f2": "✦ Fini à l'huile de lin",
    "pricing.m.f3": "✦ Personnalisation disponible",
    "pricing.m.f4": "✦ Pieds antidérapants",
    "pricing.l.title": "Spécial",
    "pricing.l.desc": "Pièces d'exposition, gravures personnalisées ou formats extra-large sur demande.",
    "pricing.l.f1": "✦ Bois précieux sélectionnés",
    "pricing.l.f2": "✦ Gravure personnalisée",
    "pricing.l.f3": "✦ Coffret cadeau inclus",
    "pricing.l.f4": "✦ Certificat d'authenticité",
    "pricing.note": "Contactez-moi pour un devis personnalisé. Je réalise également des pièces sur commande pour les cadeaux et les occasions spéciales.",
    "maint.label": "Entretien du produit",
    "maint.sub": "Une planche à découper en bois bien entretenue dure toute une vie. Suivez ces conseils simples.",
    "maint.1.title": "Lavage",
    "maint.1.desc": "Lavez à la main avec de l'eau tiède et du savon doux. Ne jamais immerger dans l'eau ni mettre au lave-vaisselle — le bois pourrait se fissurer.",
    "maint.1.freq": "Après chaque utilisation",
    "maint.2.title": "Séchage",
    "maint.2.desc": "Séchez immédiatement avec un chiffon doux et laissez la planche sécher verticalement. Évitez le soleil direct et les sources de chaleur.",
    "maint.2.freq": "Immédiatement après le lavage",
    "maint.3.title": "Huilage",
    "maint.3.desc": "Toutes les 4 à 6 semaines, appliquez une fine couche d'huile de lin ou d'huile minérale alimentaire.",
    "maint.3.freq": "Toutes les 4 à 6 semaines",
    "maint.4.title": "Régénération",
    "maint.4.desc": "Si le bois montre des signes d'usure, poncez-le délicatement avec du papier abrasif fin (grain 220) en suivant le grain, puis réappliquez l'huile.",
    "maint.4.freq": "Si nécessaire",
    "maint.tip.label": "Conseil de Roby :",
    "maint.tip.text": "Une planche à découper en bois n'est pas seulement un outil de cuisine — c'est un compagnon de vie.",
    "contact.label": "Parlons-en",
    "contact.sub": "Intéressé par une pièce ? Des questions ? Écrivez-moi ou appelez-moi directement.",
    "contact.phone": "Téléphone",
    "footer.tagline": "Artisanat du bois fait main · Suisse",
    "footer.copy": "© 2025 Roberto — Tous droits réservés"
  }
};

// Language system with proper emojis
const langMeta = {
  it: { flag: '🇮🇹', code: 'IT', htmlLang: 'it' },
  en: { flag: '🇬🇧', code: 'EN', htmlLang: 'en' },
  de: { flag: '🇩🇪', code: 'DE', htmlLang: 'de' },
  fr: { flag: '🇫🇷', code: 'FR', htmlLang: 'fr' },
};

const categoryTranslationKeys = {
  'con-manico': 'gallery.handle',
  'senza-manico': 'gallery.nohandle',
  'pizza-al-metro': 'gallery.meterpizza',
  upcycled: 'gallery.upcycled',
};

let currentLang = localStorage.getItem('lang') || 'it';
let languageSwitchTimer;

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.body.classList.add('lang-switching');

  clearTimeout(languageSwitchTimer);
  languageSwitchTimer = setTimeout(() => {
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(image => {
      const key = image.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) image.alt = t[key];
    });

    document.querySelectorAll('.filter-btn[data-filter]').forEach(button => {
      const key = categoryTranslationKeys[button.dataset.filter];
      if (key && t[key] !== undefined) button.textContent = t[key];
    });

    document.querySelectorAll('.gallery-item[data-cat]').forEach(item => {
      const key = categoryTranslationKeys[item.dataset.cat];
      if (!key || t[key] === undefined) return;
      item.querySelectorAll('.gallery-overlay > span, .gallery-caption > strong').forEach(label => {
        label.textContent = t[key];
      });
    });

    // Update html lang attribute
    document.documentElement.lang = langMeta[lang].htmlLang;

    // Update language button display
    document.getElementById('lang-flag').textContent = langMeta[lang].flag;
    document.getElementById('lang-code').textContent = langMeta[lang].code;

    // Mark active option
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.body.classList.remove('lang-switching');
  }, 120);
}

// Lang dropdown toggle
const langSwitcher = document.getElementById('lang-switcher');

document.getElementById('lang-current').addEventListener('click', (e) => {
  e.stopPropagation();
  langSwitcher.classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    applyLanguage(lang);
    langSwitcher.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) {
    langSwitcher.classList.remove('open');
  }
});

// Apply saved language on load
applyLanguage(currentLang);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

const updateNavbarScrollState = () => {
  if (!navbar.classList.contains('menu-open')) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
};

window.addEventListener('scroll', () => {
  updateNavbarScrollState();
  updateActiveNav();
});
updateNavbarScrollState();

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinksEl.classList.toggle('open');
      const menuIsOpen = navLinksEl.classList.contains('open');
      navbar.classList.toggle('menu-open', menuIsOpen);
      navbar.classList.toggle('scrolled', !menuIsOpen && window.scrollY > 60);
      hamburger.setAttribute('aria-expanded', String(menuIsOpen));
      document.body.style.overflow = menuIsOpen ? 'hidden' : '';
    });

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksEl.classList.remove('open');
        navbar.classList.remove('menu-open');
        updateNavbarScrollState();
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
  });
});

// Intersection Observer for reveals
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const container = entry.target.closest('.about-grid, .pricing-grid, .gallery-grid, .maintenance-steps, .contact-methods, .hero-content');
      if (container) {
        container.querySelectorAll('.reveal:not(.visible)').forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 80);
        });
      } else {
        entry.target.classList.add('visible');
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    galleryItems.forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.getAttribute('data-cat') !== filter);
    });
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  });
});

// Parallax rings
const heroRings = document.querySelectorAll('.wood-ring');
window.addEventListener('scroll', () => {
  heroRings.forEach((ring, i) => {
    ring.style.transform = `translateY(calc(-50% + ${window.scrollY * (i + 1) * 0.08}px))`;
  });
});

// Count-up stats
const stats = document.querySelectorAll('.stat-num');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const num = parseInt(el.textContent.replace(/[^0-9]/g, ''));
      const suffix = el.textContent.replace(/[0-9]/g, '');
      if (!isNaN(num)) {
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1200, 1);
          const v = Math.round(num * (1 - Math.pow(1 - p, 3)));
          el.textContent = v + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
stats.forEach(s => countObserver.observe(s));

// Hero mouse parallax
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    heroContent.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    heroContent.style.transform = '';
  });
}

// Initial hero reveal
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-content .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 300 + i * 150);
  });
});
