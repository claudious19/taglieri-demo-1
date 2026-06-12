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
    "hero.eyebrow": "Regali fatti a mano · Incisione laser · Svizzera",
    "hero.title": "<em>Regali personalizzati</em><br />in legno",
    "hero.sub": "Taglieri artigianali con nomi, dediche, date, loghi o immagini: un regalo unico, creato per durare.",
    "hero.cta": "Scopri le incisioni",
    "hero.scroll": "Scorri",
    "about.title": "Artigianato per<br/><em>momenti speciali</em>",
    "about.p1": "Mi chiamo Roberto e trasformo legni selezionati in regali personali. Ogni tagliere può essere progettato per una persona o un'occasione e completato con un'incisione realizzata su misura.",
    "about.p2": "Matrimoni, compleanni, anniversari, nascite o regali aziendali: ogni pezzo viene sagomato, inciso e rifinito individualmente, mai prodotto in serie.",
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
    "engraving.label": "Incisioni & regali",
    "engraving.title": "La tua idea diventa un <em>regalo personale</em>",
    "engraving.sub": "Nomi, date, dediche, loghi e immagini possono trasformare un tagliere in un ricordo unico. Puoi inviare una silhouette o una foto normale: verifico io che i dettagli importanti restino riconoscibili nella conversione in bianco e nero.",
    "engraving.examples.label": "Idee regalo",
    "engraving.examples.title": "Esempi di <em>incisioni personalizzate</em>",
    "engraving.examples.sub": "Questi spazi sono pronti per mostrare fotografie di lavori reali e aiutare ogni cliente a immaginare il proprio regalo.",
    "engraving.placeholder": "Foto incisione",
    "engraving.example1.title": "Nomi, date e dediche",
    "engraving.example1.desc": "Per matrimoni, anniversari, compleanni, nascite e momenti da ricordare.",
    "engraving.example1.aria": "Spazio per una fotografia di un tagliere con nomi, data o dedica",
    "engraving.example2.title": "Loghi e immagini",
    "engraving.example2.desc": "Per aziende, ristoranti, associazioni, famiglie e illustrazioni personali.",
    "engraving.example2.aria": "Spazio per una fotografia di un tagliere con logo o illustrazione",
    "engraving.example3.title": "Regali per occasioni speciali",
    "engraving.example3.desc": "Un oggetto utile e personale, creato su misura per chi lo riceve.",
    "engraving.example3.aria": "Spazio per una fotografia di una confezione regalo personalizzata",
    "engraving.color.status": "Da valutare",
    "engraving.color.title": "Fotografia normale",
    "engraving.color.desc": "Puoi inviarla così com'è. Prima dell'incisione viene valutata in bianco e nero per verificare che soggetto, contorni e dettagli importanti restino leggibili senza dipendere dai colori.",
    "engraving.color.alt": "Fotografia a colori molto dettagliata di un ulivo",
    "engraving.detail.status": "Non adatta",
    "engraving.detail.title": "Immagine non adatta",
    "engraving.detail.desc": "Questa immagine non è adatta all'incisione perché i dettagli e i contorni non sono marcati abbastanza. Durante la lavorazione le linee sottili rischierebbero di confondersi e il risultato perderebbe leggibilità.",
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
    "contact.sub": "Compila il modulo: verrà preparato un messaggio con tutti i dettagli e si aprirà direttamente la chat WhatsApp di Roby.",
    "contact.phone": "Telefono",
    "contact.form.title": "Richiedi il tuo regalo personalizzato",
    "contact.form.intro": "Scegli tagliere, legno e incisione. Potrai controllare e modificare la richiesta prima di inviarla su WhatsApp.",
    "contact.firstName": "Nome",
    "contact.lastName": "Cognome",
    "contact.email": "Email di backup",
    "contact.email.placeholder": "nome@esempio.ch",
    "contact.email.help": "Viene inclusa nel messaggio come contatto alternativo nel caso WhatsApp non dovesse funzionare.",
    "contact.choose": "Seleziona",
    "contact.size": "Misura del tagliere",
    "contact.size.small": "Piccola",
    "contact.size.medium": "Media",
    "contact.size.pizza": "Pizza al metro",
    "contact.size.large": "Grande",
    "contact.size.custom": "Personalizzata",
    "contact.customSize": "Misura personalizzata",
    "contact.customSize.placeholder": "es. 60 × 30 cm",
    "contact.wood": "Tipo di legno",
    "contact.wood.oak": "Rovere",
    "contact.wood.walnut": "Noce",
    "contact.wood.cherry": "Ciliegio",
    "contact.wood.maple": "Acero",
    "contact.wood.ash": "Frassino",
    "contact.wood.specific": "Altro legno specifico",
    "contact.customWood": "Legno desiderato",
    "contact.customWood.placeholder": "Indica il tipo di legno",
    "contact.wood.note": "Il prezzo può variare in base al tipo e alla disponibilità del legno, soprattutto per richieste specifiche.",
    "contact.engraving": "Desideri un'incisione?",
    "contact.no": "No",
    "contact.yes": "Sì",
    "contact.engraving.note": "Dopo l'apertura di WhatsApp, aggiungi manualmente nella chat la foto o il file da incidere.",
    "contact.notes": "Altri dettagli",
    "contact.notes.placeholder": "Forma, utilizzo, scadenza desiderata o altre richieste",
    "contact.submit": "Prepara il messaggio WhatsApp",
    "contact.privacy": "I dati non vengono salvati: servono soltanto a comporre il messaggio che aprirai su WhatsApp.",
    "contact.whatsapp.greeting": "Ciao Roby!",
    "contact.whatsapp.intro": "Vorrei richiedere informazioni per un regalo personalizzato con incisione.",
    "contact.whatsapp.name": "Nome e cognome",
    "contact.whatsapp.email": "Email di backup",
    "contact.whatsapp.size": "Misura",
    "contact.whatsapp.wood": "Legno",
    "contact.whatsapp.engraving": "Incisione",
    "contact.whatsapp.notes": "Altri dettagli",
    "contact.whatsapp.attachment": "Aggiungerò manualmente in questa chat la foto o il file per l'incisione.",
    "footer.tagline": "Regali personalizzati in legno & incisioni laser · Svizzera",
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
    "hero.eyebrow": "Handmade gifts · Laser engraving · Switzerland",
    "hero.title": "<em>Personalized gifts</em><br />in wood",
    "hero.sub": "Handcrafted cutting boards with names, dedications, dates, logos, or images: a unique gift made to last.",
    "hero.cta": "Discover engraving",
    "hero.scroll": "Scroll",
    "about.title": "Craftsmanship for<br/><em>special moments</em>",
    "about.p1": "My name is Roberto, and I turn selected woods into personal gifts. Each cutting board can be designed for a person or occasion and completed with a custom engraving.",
    "about.p2": "Weddings, birthdays, anniversaries, births, or corporate gifts: every piece is shaped, engraved, and finished individually, never mass-produced.",
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
    "engraving.label": "Engraving & gifts",
    "engraving.title": "Your idea becomes a <em>personal gift</em>",
    "engraving.sub": "Names, dates, dedications, logos, and images can turn a cutting board into a unique keepsake. Send a silhouette or a normal photo: I check that the important details remain recognizable after conversion to black and white.",
    "engraving.examples.label": "Gift ideas",
    "engraving.examples.title": "Examples of <em>personalized engravings</em>",
    "engraving.examples.sub": "These spaces are ready for photos of real work, helping each customer picture their own gift.",
    "engraving.placeholder": "Engraving photo",
    "engraving.example1.title": "Names, dates, and dedications",
    "engraving.example1.desc": "For weddings, anniversaries, birthdays, births, and moments worth remembering.",
    "engraving.example1.aria": "Space for a photo of a cutting board with names, a date, or a dedication",
    "engraving.example2.title": "Logos and images",
    "engraving.example2.desc": "For companies, restaurants, associations, families, and personal illustrations.",
    "engraving.example2.aria": "Space for a photo of a cutting board engraved with a logo or illustration",
    "engraving.example3.title": "Gifts for special occasions",
    "engraving.example3.desc": "A useful, personal object made especially for the person receiving it.",
    "engraving.example3.aria": "Space for a photo of personalized gift packaging",
    "engraving.color.status": "To be assessed",
    "engraving.color.title": "Normal photograph",
    "engraving.color.desc": "You can send it as it is. Before engraving, it is assessed in black and white to ensure that the subject, outlines, and important details remain readable without relying on color.",
    "engraving.color.alt": "Highly detailed color photograph of an olive tree",
    "engraving.detail.status": "Not suitable",
    "engraving.detail.title": "Unsuitable image",
    "engraving.detail.desc": "This image is not suitable for engraving because its details and outlines are not defined strongly enough. The thin lines could merge during engraving, making the final result difficult to read.",
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
    "contact.sub": "Complete the form to prepare a message with all the details and open Roby's WhatsApp chat directly.",
    "contact.phone": "Phone",
    "contact.form.title": "Request your personalized gift",
    "contact.form.intro": "Choose the board, wood, and engraving. You can review and edit the request before sending it on WhatsApp.",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Backup email",
    "contact.email.placeholder": "name@example.ch",
    "contact.email.help": "It is included as an alternative contact in case the customer's WhatsApp does not work.",
    "contact.choose": "Select",
    "contact.size": "Cutting board size",
    "contact.size.small": "Small",
    "contact.size.medium": "Medium",
    "contact.size.pizza": "Meter pizza",
    "contact.size.large": "Large",
    "contact.size.custom": "Custom",
    "contact.customSize": "Custom size",
    "contact.customSize.placeholder": "e.g. 60 × 30 cm",
    "contact.wood": "Wood type",
    "contact.wood.oak": "Oak",
    "contact.wood.walnut": "Walnut",
    "contact.wood.cherry": "Cherry",
    "contact.wood.maple": "Maple",
    "contact.wood.ash": "Ash",
    "contact.wood.specific": "Another specific wood",
    "contact.customWood": "Requested wood",
    "contact.customWood.placeholder": "Enter the wood type",
    "contact.wood.note": "The price may vary depending on the type and availability of the wood, especially for specific requests.",
    "contact.engraving": "Would you like an engraving?",
    "contact.no": "No",
    "contact.yes": "Yes",
    "contact.engraving.note": "After WhatsApp opens, manually attach the photo or file to be engraved in the chat.",
    "contact.notes": "Other details",
    "contact.notes.placeholder": "Shape, intended use, preferred deadline, or other requests",
    "contact.submit": "Prepare WhatsApp message",
    "contact.privacy": "Your data is not stored. It is used only to compose the message you will open in WhatsApp.",
    "contact.whatsapp.greeting": "Hello Roby!",
    "contact.whatsapp.intro": "I would like information about a personalized engraved gift.",
    "contact.whatsapp.name": "Full name",
    "contact.whatsapp.email": "Backup email",
    "contact.whatsapp.size": "Size",
    "contact.whatsapp.wood": "Wood",
    "contact.whatsapp.engraving": "Engraving",
    "contact.whatsapp.notes": "Other details",
    "contact.whatsapp.attachment": "I will manually attach the engraving photo or file in this chat.",
    "footer.tagline": "Personalized wooden gifts & laser engraving · Switzerland",
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
    "hero.eyebrow": "Handgefertigte Geschenke · Lasergravur · Schweiz",
    "hero.title": "<em>Persönliche Geschenke</em><br />aus Holz",
    "hero.sub": "Handgefertigte Schneidebretter mit Namen, Widmungen, Daten, Logos oder Bildern: ein Geschenk, das bleibt.",
    "hero.cta": "Gravuren entdecken",
    "hero.scroll": "Scrollen",
    "about.title": "Handwerk für<br/><em>besondere Momente</em>",
    "about.p1": "Ich bin Roberto und verwandle ausgewählte Hölzer in persönliche Geschenke. Jedes Schneidebrett kann für eine bestimmte Person oder einen Anlass gestaltet und mit einer individuellen Gravur ergänzt werden.",
    "about.p2": "Hochzeit, Geburtstag, Jubiläum, Geburt oder Firmengeschenk: Jedes Stück wird einzeln geformt, graviert und veredelt, niemals in Serie produziert.",
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
    "engraving.label": "Gravur & Geschenke",
    "engraving.title": "Deine Idee wird zum <em>persönlichen Geschenk</em>",
    "engraving.sub": "Namen, Daten, Widmungen, Logos und Bilder machen aus einem Schneidebrett ein einzigartiges Erinnerungsstück. Sende eine Silhouette oder ein normales Foto: Ich prüfe, ob wichtige Details bei der Umwandlung in Schwarz-Weiß erhalten bleiben.",
    "engraving.examples.label": "Geschenkideen",
    "engraving.examples.title": "Beispiele für <em>persönliche Gravuren</em>",
    "engraving.examples.sub": "Diese Flächen sind für Fotos echter Arbeiten vorbereitet und helfen Kunden, sich ihr eigenes Geschenk vorzustellen.",
    "engraving.placeholder": "Gravurfoto",
    "engraving.example1.title": "Namen, Daten und Widmungen",
    "engraving.example1.desc": "Für Hochzeiten, Jubiläen, Geburtstage, Geburten und besondere Erinnerungen.",
    "engraving.example1.aria": "Platz für ein Foto eines Schneidebretts mit Namen, Datum oder Widmung",
    "engraving.example2.title": "Logos und Bilder",
    "engraving.example2.desc": "Für Unternehmen, Restaurants, Vereine, Familien und persönliche Illustrationen.",
    "engraving.example2.aria": "Platz für ein Foto eines Schneidebretts mit graviertem Logo oder Bild",
    "engraving.example3.title": "Geschenke für besondere Anlässe",
    "engraving.example3.desc": "Ein nützlicher, persönlicher Gegenstand, eigens für den Beschenkten gefertigt.",
    "engraving.example3.aria": "Platz für ein Foto einer personalisierten Geschenkverpackung",
    "engraving.color.status": "Wird geprüft",
    "engraving.color.title": "Normales Foto",
    "engraving.color.desc": "Du kannst es unverändert senden. Vor der Gravur wird es in Schwarz und Weiß geprüft, damit Motiv, Konturen und wichtige Details auch ohne Farben gut erkennbar bleiben.",
    "engraving.color.alt": "Detailreiches Farbfoto eines Olivenbaums",
    "engraving.detail.status": "Nicht geeignet",
    "engraving.detail.title": "Ungeeignetes Bild",
    "engraving.detail.desc": "Dieses Bild ist für eine Gravur nicht geeignet, weil Details und Konturen nicht deutlich genug ausgeprägt sind. Die feinen Linien könnten bei der Gravur ineinanderlaufen und das Ergebnis wäre schwer lesbar.",
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
    "contact.sub": "Füllen Sie das Formular aus: Eine Nachricht mit allen Angaben wird vorbereitet und Robys WhatsApp-Chat direkt geöffnet.",
    "contact.phone": "Telefon",
    "contact.form.title": "Persönliches Geschenk anfragen",
    "contact.form.intro": "Wähle Brett, Holz und Gravur. Die Anfrage kann vor dem Senden über WhatsApp geprüft und geändert werden.",
    "contact.firstName": "Vorname",
    "contact.lastName": "Nachname",
    "contact.email": "E-Mail als Ersatzkontakt",
    "contact.email.placeholder": "name@beispiel.ch",
    "contact.email.help": "Sie wird als alternativer Kontakt angegeben, falls WhatsApp beim Kunden nicht funktionieren sollte.",
    "contact.choose": "Auswählen",
    "contact.size": "Größe des Schneidebretts",
    "contact.size.small": "Klein",
    "contact.size.medium": "Mittel",
    "contact.size.pizza": "Meterpizza",
    "contact.size.large": "Groß",
    "contact.size.custom": "Nach Maß",
    "contact.customSize": "Individuelle Maße",
    "contact.customSize.placeholder": "z. B. 60 × 30 cm",
    "contact.wood": "Holzart",
    "contact.wood.oak": "Eiche",
    "contact.wood.walnut": "Walnuss",
    "contact.wood.cherry": "Kirsche",
    "contact.wood.maple": "Ahorn",
    "contact.wood.ash": "Esche",
    "contact.wood.specific": "Andere bestimmte Holzart",
    "contact.customWood": "Gewünschte Holzart",
    "contact.customWood.placeholder": "Holzart angeben",
    "contact.wood.note": "Der Preis kann je nach Holzart und Verfügbarkeit variieren, besonders bei speziellen Wünschen.",
    "contact.engraving": "Möchten Sie eine Gravur?",
    "contact.no": "Nein",
    "contact.yes": "Ja",
    "contact.engraving.note": "Fügen Sie nach dem Öffnen von WhatsApp das Foto oder die Datei für die Gravur manuell im Chat hinzu.",
    "contact.notes": "Weitere Angaben",
    "contact.notes.placeholder": "Form, Verwendungszweck, gewünschter Termin oder andere Wünsche",
    "contact.submit": "WhatsApp-Nachricht vorbereiten",
    "contact.privacy": "Die Daten werden nicht gespeichert. Sie dienen nur zum Erstellen der Nachricht, die in WhatsApp geöffnet wird.",
    "contact.whatsapp.greeting": "Hallo Roby!",
    "contact.whatsapp.intro": "Ich interessiere mich für ein personalisiertes Geschenk mit Gravur.",
    "contact.whatsapp.name": "Vor- und Nachname",
    "contact.whatsapp.email": "E-Mail als Ersatzkontakt",
    "contact.whatsapp.size": "Größe",
    "contact.whatsapp.wood": "Holz",
    "contact.whatsapp.engraving": "Gravur",
    "contact.whatsapp.notes": "Weitere Angaben",
    "contact.whatsapp.attachment": "Ich füge das Foto oder die Datei für die Gravur manuell in diesem Chat hinzu.",
    "footer.tagline": "Personalisierte Holzgeschenke & Lasergravuren · Schweiz",
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
    "hero.eyebrow": "Cadeaux faits main · Gravure laser · Suisse",
    "hero.title": "<em>Cadeaux personnalisés</em><br />en bois",
    "hero.sub": "Des planches artisanales avec noms, dédicaces, dates, logos ou images : un cadeau unique fait pour durer.",
    "hero.cta": "Découvrir les gravures",
    "hero.scroll": "Défiler",
    "about.title": "Un savoir-faire pour<br/><em>les moments précieux</em>",
    "about.p1": "Je m'appelle Roberto et je transforme des bois sélectionnés en cadeaux personnels. Chaque planche peut être conçue pour une personne ou une occasion et complétée par une gravure sur mesure.",
    "about.p2": "Mariage, anniversaire, naissance ou cadeau d'entreprise : chaque pièce est façonnée, gravée et finie individuellement, jamais produite en série.",
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
    "engraving.label": "Gravure & cadeaux",
    "engraving.title": "Votre idée devient un <em>cadeau personnel</em>",
    "engraving.sub": "Noms, dates, dédicaces, logos et images transforment une planche en souvenir unique. Envoyez une silhouette ou une photo normale : je vérifie que les détails importants restent reconnaissables après la conversion en noir et blanc.",
    "engraving.examples.label": "Idées cadeaux",
    "engraving.examples.title": "Exemples de <em>gravures personnalisées</em>",
    "engraving.examples.sub": "Ces espaces sont prêts à accueillir des photos de réalisations et à aider chaque client à imaginer son cadeau.",
    "engraving.placeholder": "Photo de gravure",
    "engraving.example1.title": "Noms, dates et dédicaces",
    "engraving.example1.desc": "Pour les mariages, anniversaires, naissances et les moments à ne pas oublier.",
    "engraving.example1.aria": "Espace pour une photo de planche avec noms, date ou dédicace",
    "engraving.example2.title": "Logos et images",
    "engraving.example2.desc": "Pour les entreprises, restaurants, associations, familles et illustrations personnelles.",
    "engraving.example2.aria": "Espace pour une photo de planche gravée avec un logo ou une illustration",
    "engraving.example3.title": "Cadeaux pour occasions spéciales",
    "engraving.example3.desc": "Un objet utile et personnel, créé spécialement pour la personne qui le reçoit.",
    "engraving.example3.aria": "Espace pour une photo d'un emballage cadeau personnalisé",
    "engraving.color.status": "À évaluer",
    "engraving.color.title": "Photographie normale",
    "engraving.color.desc": "Vous pouvez l'envoyer telle quelle. Avant la gravure, elle est évaluée en noir et blanc afin de vérifier que le sujet, les contours et les détails importants restent lisibles sans dépendre des couleurs.",
    "engraving.color.alt": "Photographie en couleurs très détaillée d'un olivier",
    "engraving.detail.status": "Non adaptée",
    "engraving.detail.title": "Image non adaptée",
    "engraving.detail.desc": "Cette image ne convient pas à la gravure, car ses détails et ses contours ne sont pas assez marqués. Les lignes fines risqueraient de se confondre pendant la gravure et le résultat manquerait de lisibilité.",
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
    "contact.sub": "Remplissez le formulaire : un message contenant tous les détails sera préparé et la discussion WhatsApp de Roby s'ouvrira directement.",
    "contact.phone": "Téléphone",
    "contact.form.title": "Demandez votre cadeau personnalisé",
    "contact.form.intro": "Choisissez la planche, le bois et la gravure. Vous pourrez vérifier et modifier la demande avant de l'envoyer sur WhatsApp.",
    "contact.firstName": "Prénom",
    "contact.lastName": "Nom",
    "contact.email": "E-mail de secours",
    "contact.email.placeholder": "nom@exemple.ch",
    "contact.email.help": "Il est inclus comme contact alternatif si le WhatsApp du client ne fonctionne pas.",
    "contact.choose": "Sélectionner",
    "contact.size": "Dimensions de la planche",
    "contact.size.small": "Petite",
    "contact.size.medium": "Moyenne",
    "contact.size.pizza": "Pizza au mètre",
    "contact.size.large": "Grande",
    "contact.size.custom": "Sur mesure",
    "contact.customSize": "Dimensions personnalisées",
    "contact.customSize.placeholder": "p. ex. 60 × 30 cm",
    "contact.wood": "Type de bois",
    "contact.wood.oak": "Chêne",
    "contact.wood.walnut": "Noyer",
    "contact.wood.cherry": "Cerisier",
    "contact.wood.maple": "Érable",
    "contact.wood.ash": "Frêne",
    "contact.wood.specific": "Autre bois spécifique",
    "contact.customWood": "Bois souhaité",
    "contact.customWood.placeholder": "Indiquez le type de bois",
    "contact.wood.note": "Le prix peut varier selon le type et la disponibilité du bois, surtout pour une demande spécifique.",
    "contact.engraving": "Souhaitez-vous une gravure ?",
    "contact.no": "Non",
    "contact.yes": "Oui",
    "contact.engraving.note": "Après l'ouverture de WhatsApp, ajoutez manuellement dans la discussion la photo ou le fichier à graver.",
    "contact.notes": "Autres détails",
    "contact.notes.placeholder": "Forme, utilisation, délai souhaité ou autres demandes",
    "contact.submit": "Préparer le message WhatsApp",
    "contact.privacy": "Les données ne sont pas enregistrées. Elles servent uniquement à composer le message ouvert dans WhatsApp.",
    "contact.whatsapp.greeting": "Bonjour Roby !",
    "contact.whatsapp.intro": "Je souhaite obtenir des informations pour un cadeau personnalisé avec gravure.",
    "contact.whatsapp.name": "Nom complet",
    "contact.whatsapp.email": "E-mail de secours",
    "contact.whatsapp.size": "Dimensions",
    "contact.whatsapp.wood": "Bois",
    "contact.whatsapp.engraving": "Gravure",
    "contact.whatsapp.notes": "Autres détails",
    "contact.whatsapp.attachment": "J'ajouterai manuellement dans cette discussion la photo ou le fichier pour la gravure.",
    "footer.tagline": "Cadeaux personnalisés en bois & gravure laser · Suisse",
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

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) element.setAttribute('aria-label', t[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(field => {
      const key = field.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) field.placeholder = t[key];
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

// WhatsApp order form
const whatsappOrderForm = document.getElementById('whatsapp-order-form');
const boardSizeSelect = document.getElementById('board-size');
const customSizeGroup = document.getElementById('custom-size-group');
const customSizeInput = document.getElementById('custom-size');
const woodTypeSelect = document.getElementById('wood-type');
const customWoodGroup = document.getElementById('custom-wood-group');
const customWoodInput = document.getElementById('custom-wood');
const engravingSelect = document.getElementById('engraving-request');
const engravingUploadNote = document.getElementById('engraving-upload-note');

const setConditionalField = (select, expectedValue, container, input) => {
  const isActive = select.value === expectedValue;
  container.hidden = !isActive;
  if (input) {
    input.required = isActive;
    if (!isActive) input.value = '';
  }
};

if (whatsappOrderForm) {
  boardSizeSelect.addEventListener('change', () => {
    setConditionalField(boardSizeSelect, 'custom', customSizeGroup, customSizeInput);
  });

  woodTypeSelect.addEventListener('change', () => {
    setConditionalField(woodTypeSelect, 'specific', customWoodGroup, customWoodInput);
  });

  engravingSelect.addEventListener('change', () => {
    engravingUploadNote.hidden = engravingSelect.value !== 'yes';
  });

  whatsappOrderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!whatsappOrderForm.reportValidity()) return;

    const t = translations[currentLang] || translations.it;
    const data = new FormData(whatsappOrderForm);
    const sizeKeys = {
      small: 'contact.size.small',
      medium: 'contact.size.medium',
      pizza: 'contact.size.pizza',
      large: 'contact.size.large',
      custom: 'contact.size.custom',
    };
    const woodKeys = {
      oak: 'contact.wood.oak',
      walnut: 'contact.wood.walnut',
      cherry: 'contact.wood.cherry',
      maple: 'contact.wood.maple',
      ash: 'contact.wood.ash',
      specific: 'contact.wood.specific',
    };

    const sizeValue = data.get('size');
    const woodValue = data.get('wood');
    const engravingValue = data.get('engraving');
    const sizeLabel = sizeValue === 'custom'
      ? `${t[sizeKeys[sizeValue]]}: ${data.get('customSize')}`
      : t[sizeKeys[sizeValue]];
    const woodLabel = woodValue === 'specific'
      ? `${t[woodKeys[woodValue]]}: ${data.get('customWood')}`
      : t[woodKeys[woodValue]];

    const messageLines = [
      t['contact.whatsapp.greeting'],
      '',
      t['contact.whatsapp.intro'],
      `${t['contact.whatsapp.name']}: ${data.get('firstName')} ${data.get('lastName')}`,
      `${t['contact.whatsapp.email']}: ${data.get('email')}`,
      `${t['contact.whatsapp.size']}: ${sizeLabel}`,
      `${t['contact.whatsapp.wood']}: ${woodLabel}`,
      `${t['contact.whatsapp.engraving']}: ${engravingValue === 'yes' ? t['contact.yes'] : t['contact.no']}`,
    ];

    const notes = String(data.get('notes') || '').trim();
    if (notes) messageLines.push(`${t['contact.whatsapp.notes']}: ${notes}`);
    if (engravingValue === 'yes') {
      messageLines.push('', t['contact.whatsapp.attachment']);
    }

    const whatsappUrl = `https://wa.me/41787544017?text=${encodeURIComponent(messageLines.join('\n'))}`;
    const whatsappWindow = window.open('about:blank', '_blank');
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      whatsappWindow.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
  });
}

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
