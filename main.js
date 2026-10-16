// Texte und Bildbeschreibungen für alle vier Sprachen.
const translations = {
  "it": {
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.gallery": "Galleria",
    "nav.engraving": "Incisione laser",
    "nav.gifts": "Idee regalo",
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
    "engraving.examples.sub": "Piccoli messaggi, loghi e regali da condividere: scopri alcune creazioni realizzate nella mia bottega.",
    "engraving.placeholder": "Foto in arrivo",
    "engraving.example1.title": "Parole che contano",
    "engraving.example1.desc": "Un nome, una dedica o una frase speciale: un dettaglio inciso che rende il regalo personale.",
    "engraving.example1.aria": "Spazio per una fotografia di un tagliere con nomi, data o dedica",
    "engraving.example2.title": "Loghi e immagini",
    "engraving.example2.desc": "Per aziende, ristoranti, associazioni, famiglie e illustrazioni personali.",
    "engraving.example2.aria": "Spazio per una fotografia di un tagliere con logo o illustrazione",
    "engraving.example3.title": "Un regalo da condividere",
    "engraving.example3.desc": "Un tagliere artigianale diventa la base per un regalo con prodotti da gustare e momenti da condividere.",
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
    "pricing.sub": "Ogni pezzo è unico. I prezzi indicati variano in base al legno, alle dimensioni e alla personalizzazione.",
    "pricing.length": "Lunghezza",
    "pricing.width": "Larghezza",
    "pricing.sizeOnRequest": "Misure su richiesta",
    "pricing.from": "da",
    "pricing.popular": "Più richiesto",
    "pricing.s.title": "Piccolo",
    "pricing.s.desc": "Taglieri compatti, perfetti per pane, formaggi e antipasti.",
    "pricing.s.f1": "✦ Legno a scelta",
    "pricing.s.f2": "✦ Finitura con olio naturale",
    "pricing.s.f3": "✦ Bordi levigati a mano",
    "pricing.m.title": "Medio",
    "pricing.m.desc": "Il formato ideale per uso quotidiano.",
    "pricing.m.f1": "✦ Legno a scelta",
    "pricing.m.f2": "✦ Finitura con olio di lino",
    "pricing.m.f3": "✦ Personalizzazione disponibile",
    "pricing.m.f4": "✦ Piedini antiscivolo",
    "pricing.pizza.title": "Pizza al metro",
    "pricing.pizza.desc": "Tagliere extra lungo pensato per servire pizza al metro, focacce e grandi aperitivi.",
    "pricing.pizza.f1": "✦ Formato lungo da portata",
    "pricing.pizza.f2": "✦ Legno massello selezionato",
    "pricing.pizza.f3": "✦ Finitura alimentare naturale",
    "pricing.pizza.f4": "✦ Incisione disponibile",
    "pricing.l.title": "Grande",
    "pricing.l.desc": "Un tagliere generoso per servire e condividere in compagnia.",
    "pricing.l.f1": "✦ Legni pregiati selezionati",
    "pricing.l.f2": "✦ Incisione personalizzata",
    "pricing.l.f3": "✦ Cofanetto regalo incluso",
    "pricing.l.f4": "✦ Certificato di autenticità",
    "pricing.note": "Contattami per un preventivo personalizzato. Creo anche pezzi su commissione per regali e occasioni speciali.",
    "maint.label": "Cura del prodotto",
    "maint.sub": "Un tagliere in legno ben curato dura una vita. Segui questi semplici consigli.",
    "maint.1.title": "Lavaggio",
    "maint.1.desc": "Lava a mano con acqua tiepida e sapone neutro. Non immergere il tagliere in acqua e non metterlo in lavastoviglie: il legno potrebbe screpolarsi.",
    "maint.1.freq": "Dopo ogni utilizzo",
    "maint.2.title": "Asciugatura",
    "maint.2.desc": "Asciuga subito con un panno morbido e lascia il tagliere in verticale ad asciugare all'aria aperta. Evita il contatto diretto con il sole o fonti di calore.",
    "maint.2.freq": "Immediatamente dopo il lavaggio",
    "maint.3.title": "Oliatura",
    "maint.3.desc": "Ogni 4–6 settimane, o quando il legno appare asciutto, applica un olio specifico per taglieri e idoneo al contatto alimentare, seguendo le istruzioni del prodotto.",
    "maint.3.freq": "Ogni 4–6 settimane",
    "maint.4.title": "Rigenerazione",
    "maint.4.desc": "Se il legno si segna con il tempo, levigalo delicatamente con carta vetrata fine (grana 220) seguendo la venatura, poi riapplica l'olio. Tornerà come nuovo.",
    "maint.4.freq": "Quando necessario",
    "maint.tip.label": "Consiglio di Roby:",
    "maint.tip.text": "Un tagliere in legno non è solo uno strumento da cucina — è un compagno di vita. Con le giuste cure, migliorerà con il tempo, proprio come il vino.",
    "contact.label": "Parliamoci",
    "contact.sub": "Compila il modulo per preparare un'email con tutti i dettagli.",
    "contact.form.title": "Richiedi il tuo regalo personalizzato",
    "contact.form.intro": "Scegli tagliere, legno e incisione. Controlla l'email e inviala dal tuo programma di posta.",
    "contact.firstName": "Nome",
    "contact.lastName": "Cognome",
    "contact.email": "La tua email",
    "contact.email.placeholder": "nome@esempio.ch",
    "contact.email.help": "Usiamo questo indirizzo per risponderti alla richiesta.",
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
    "contact.engraving.note": "Se hai un'immagine per l'incisione, puoi allegarla all'email preparata.",
    "contact.notes": "Altri dettagli",
    "contact.notes.placeholder": "Forma, utilizzo, scadenza desiderata o altre richieste",
    "contact.submit": "Apri email precompilata",
    "contact.privacy": "Il modulo apre un'email precompilata nel tuo programma di posta. Controllala e inviala tu; il sito non invia né salva i dati.",
    "contact.mail.subject": "Richiesta dal sito Robywood",
    "contact.whatsapp.greeting": "Ciao Roby!",
    "contact.whatsapp.intro": "Vorrei informazioni per un tagliere o un regalo personalizzato.",
    "contact.whatsapp.name": "Nome e cognome",
    "contact.whatsapp.email": "Email per la risposta",
    "contact.whatsapp.size": "Misura",
    "contact.whatsapp.wood": "Legno",
    "contact.whatsapp.engraving": "Incisione",
    "contact.whatsapp.notes": "Altri dettagli",
    "contact.whatsapp.attachment": "Se disponibile, aggiungo un'immagine per l'incisione come allegato.",
    "footer.tagline": "Regali personalizzati in legno & incisioni laser · Svizzera",
    "footer.copy": "© 2025 Roberto — Tutti i diritti riservati",
    "access.skip": "Vai al contenuto",
    "access.language": "Cambia lingua",
    "access.menu": "Menu di navigazione",
    "meta.title": "Robywood | Regali in legno e incisioni laser",
    "meta.description": "Taglieri artigianali, regali personalizzati e incisioni laser realizzati a mano in Svizzera.",
    "hero.alt": "Collezione di taglieri artigianali in legno",
    "about.alt": "Banco da lavoro di Roberto con tavole e taglieri in preparazione",
    "process.alt1": "Forme diverse di taglieri grezzi in bottega",
    "process.alt2": "Banco da falegname con tavole, utensili e segatura",
    "process.alt3": "Tavole e sagome di legno selezionate per nuovi taglieri",
    "process.alt4": "Taglieri appena sagomati sul banco di lavoro",
    "gallery.solidOak": "Rovere massello",
    "gallery.naturalShape": "Forma naturale",
    "gallery.liveEdge": "Bordo naturale",
    "gallery.handEngraving": "Incisione artigianale",
    "gallery.signature": "Firma di Roby",
    "gallery.slim": "Profilo sottile",
    "gallery.pair": "Coppia coordinata",
    "gallery.grain": "Venatura intensa",
    "gallery.shapes": "Forme naturali",
    "gallery.feetDetail": "Dettaglio dei piedini",
    "gallery.feet": "Con piedini",
    "gallery.compact": "Formato compatto",
    "gallery.unique": "Pezzo unico",
    "gallery.table": "In tavola",
    "gallery.serving": "Tagliere da portata",
    "gallery.shaped": "Sagomati a mano",
    "gallery.organic": "Forma organica",
    "gallery.long": "Formato lungo",
    "gallery.extraLong": "Extra lungo",
    "gallery.reclaimed": "Legno recuperato",
    "gallery.customEngraving": "Incisione personalizzata",
    "gallery.reclaimedHandles": "Maniglie recuperate",
    "gallery.trays": "Vassoi da portata",
    "hero.secondary": "Richiedi il tuo regalo",
    "gallery.sub": "Forme naturali, pezzi unici e dettagli realizzati a mano. Scegli una categoria per scoprire la tua creazione preferita.",
    "gallery.results": "creazioni",
    "gallery.tables": "Tavoli",
    "gallery.humor": "Incisione con un sorriso",
    "gallery.cleanLines": "Linee essenziali",
    "gallery.batch": "Una serie di pezzi unici",
    "gallery.pizzaReady": "Pizza da condividere",
    "gallery.barkEdge": "Bordi in corteccia",
    "gallery.oliveTable": "Tavolino in legno d'olivo",
    "gallery.oliveGrain": "Venature dell'olivo",
    "gallery.barkBoard.alt": "Tagliere rettangolare senza manico con bordi in corteccia naturale",
    "gallery.oliveTableSide.alt": "Tavolino in legno d'olivo con bordo naturale e gambe nere",
    "gallery.oliveTableTop.alt": "Vista dall'alto del tavolino in legno d'olivo con venature marcate",
    "gallery.newServing.alt": "Tagliere con manico apparecchiato con formaggi e salumi",
    "gallery.newHumor.alt": "Tagliere inciso con una frase divertente e quattro portauova",
    "gallery.newSquare.alt": "Tagliere senza manico con linee dritte su un tavolo scuro",
    "gallery.newLong.alt": "Tagliere rettangolare senza manico visto di lato",
    "gallery.newBatch.alt": "Serie di taglieri senza manico con forme e venature diverse",
    "gallery.newPizza.alt": "Tagliere extra lungo con una pizza al metro appena servita",
    "gift.text.alt": "Tagliere con la scritta incisa Taglia e sorridi",
    "gift.logo.alt": "Dettaglio del logo Hand Made by Roby inciso nel legno",
    "gift.hamper.alt": "Tagliere confezionato come regalo con prodotti da gustare",
    "contact.direct": "Scrivimi direttamente"
  },
  "en": {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.gallery": "Gallery",
    "nav.engraving": "Laser engraving",
    "nav.gifts": "Gift ideas",
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
    "gallery.meterpizza": "Meter-long pizza",
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
    "engraving.sub": "Names, dates, dedications, logos, and images can turn a cutting board into a unique keepsake. Send a silhouette or a normal photo: I check that important details remain recognizable after conversion to black and white.",
    "engraving.examples.label": "Gift ideas",
    "engraving.examples.title": "Examples of <em>personalized engravings</em>",
    "engraving.examples.sub": "Personal messages, logos and gifts to share: discover pieces made in my workshop.",
    "engraving.placeholder": "Photo coming soon",
    "engraving.example1.title": "Meaningful words",
    "engraving.example1.desc": "A name, a dedication or a special phrase: an engraved detail that makes your gift personal.",
    "engraving.example1.aria": "Space for a photo of a cutting board with names, a date, or a dedication",
    "engraving.example2.title": "Logos and images",
    "engraving.example2.desc": "For companies, restaurants, associations, families, and personal illustrations.",
    "engraving.example2.aria": "Space for a photo of a cutting board engraved with a logo or illustration",
    "engraving.example3.title": "A gift to share",
    "engraving.example3.desc": "A handcrafted board becomes the centerpiece of a gift filled with food specialties and moments to share.",
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
    "pricing.sub": "Each piece is unique. The listed prices vary with wood, size and customization.",
    "pricing.length": "Length",
    "pricing.width": "Width",
    "pricing.sizeOnRequest": "Dimensions on request",
    "pricing.from": "from",
    "pricing.popular": "Most requested",
    "pricing.s.title": "Small",
    "pricing.s.desc": "Compact boards, perfect for bread, cheese, and appetizers.",
    "pricing.s.f1": "✦ Wood of your choice",
    "pricing.s.f2": "✦ Natural oil finish",
    "pricing.s.f3": "✦ Hand-sanded edges",
    "pricing.m.title": "Medium",
    "pricing.m.desc": "The ideal size for daily use.",
    "pricing.m.f1": "✦ Wood of your choice",
    "pricing.m.f2": "✦ Linseed oil finish",
    "pricing.m.f3": "✦ Customization available",
    "pricing.m.f4": "✦ Non-slip feet",
    "pricing.pizza.title": "Meter-long pizza",
    "pricing.pizza.desc": "An extra-long serving board designed for meter-long pizza, focaccia, and large appetizers.",
    "pricing.pizza.f1": "✦ Extra-long serving format",
    "pricing.pizza.f2": "✦ Selected solid wood",
    "pricing.pizza.f3": "✦ Natural food-safe finish",
    "pricing.pizza.f4": "✦ Engraving available",
    "pricing.l.title": "Large",
    "pricing.l.desc": "A generous board for serving and sharing with others.",
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
    "maint.3.desc": "Every 4–6 weeks, or when the wood looks dry, apply an oil made for cutting boards and suitable for food contact, following the product instructions.",
    "maint.3.freq": "Every 4–6 weeks",
    "maint.4.title": "Regeneration",
    "maint.4.desc": "If the wood shows signs of wear, gently sand it with fine abrasive paper (220 grit) following the grain, then reapply oil.",
    "maint.4.freq": "When necessary",
    "maint.tip.label": "Roby's tip:",
    "maint.tip.text": "A wooden cutting board is not just a kitchen tool — it's a companion for life.",
    "contact.label": "Let's talk",
    "contact.sub": "Complete the form to prepare an email with all the details.",
    "contact.form.title": "Request your personalized gift",
    "contact.form.intro": "Choose the board, wood, and engraving. Review the email and send it from your mail app.",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Your email",
    "contact.email.placeholder": "name@example.ch",
    "contact.email.help": "We use this address to reply to your request.",
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
    "contact.engraving.note": "If you have an engraving image, feel free to attach it to the prepared email.",
    "contact.notes": "Other details",
    "contact.notes.placeholder": "Shape, intended use, preferred deadline, or other requests",
    "contact.submit": "Open prepared email",
    "contact.privacy": "The form opens a prepared email in your mail app. Review and send it yourself; the site does not send or store your details.",
    "contact.mail.subject": "Request from the Robywood website",
    "contact.whatsapp.greeting": "Hello Roby!",
    "contact.whatsapp.intro": "I would like information about a cutting board or a personalized gift.",
    "contact.whatsapp.name": "Full name",
    "contact.whatsapp.email": "Reply email",
    "contact.whatsapp.size": "Size",
    "contact.whatsapp.wood": "Wood",
    "contact.whatsapp.engraving": "Engraving",
    "contact.whatsapp.notes": "Other details",
    "contact.whatsapp.attachment": "If available, I will attach an engraving image to this email.",
    "footer.tagline": "Personalized wooden gifts & laser engraving · Switzerland",
    "footer.copy": "© 2025 Roberto — All rights reserved",
    "access.skip": "Skip to content",
    "access.language": "Change language",
    "access.menu": "Navigation menu",
    "meta.title": "Robywood | Wooden gifts and laser engraving",
    "meta.description": "Handcrafted cutting boards, personalized wooden gifts and laser engraving made in Switzerland.",
    "hero.alt": "Collection of handcrafted wooden cutting boards",
    "about.alt": "Roberto’s workbench with wood and cutting boards in progress",
    "process.alt1": "Different shapes of unfinished boards in the workshop",
    "process.alt2": "Carpenter’s workbench with boards, tools and sawdust",
    "process.alt3": "Wood and templates selected for new cutting boards",
    "process.alt4": "Newly shaped cutting boards on the workbench",
    "gallery.solidOak": "Solid oak",
    "gallery.naturalShape": "Natural shape",
    "gallery.liveEdge": "Live edge",
    "gallery.handEngraving": "Artisan engraving",
    "gallery.signature": "Roby’s signature",
    "gallery.slim": "Slim profile",
    "gallery.pair": "Matching pair",
    "gallery.grain": "Distinctive grain",
    "gallery.shapes": "Natural shapes",
    "gallery.feetDetail": "Detail of the feet",
    "gallery.feet": "With feet",
    "gallery.compact": "Compact size",
    "gallery.unique": "One of a kind",
    "gallery.table": "At the table",
    "gallery.serving": "Serving board",
    "gallery.shaped": "Shaped by hand",
    "gallery.organic": "Organic shape",
    "gallery.long": "Long format",
    "gallery.extraLong": "Extra long",
    "gallery.reclaimed": "Reclaimed wood",
    "gallery.customEngraving": "Custom engraving",
    "gallery.reclaimedHandles": "Reclaimed handles",
    "gallery.trays": "Serving trays",
    "hero.secondary": "Request your gift",
    "gallery.sub": "Natural shapes, unique pieces and handcrafted details. Choose a category to find your favourite creation.",
    "gallery.results": "creations",
    "gallery.tables": "Tables",
    "gallery.humor": "Engraving with a smile",
    "gallery.cleanLines": "Clean lines",
    "gallery.batch": "A collection of unique pieces",
    "gallery.pizzaReady": "Pizza to share",
    "gallery.barkEdge": "Natural bark edges",
    "gallery.oliveTable": "Olive wood side table",
    "gallery.oliveGrain": "Olive wood grain",
    "gallery.barkBoard.alt": "Rectangular board without a handle and with natural bark edges",
    "gallery.oliveTableSide.alt": "Olive wood side table with a natural edge and black legs",
    "gallery.oliveTableTop.alt": "Top view of the olive wood side table showing its distinctive grain",
    "gallery.newServing.alt": "Serving board with a handle, cheese and cured meats",
    "gallery.newHumor.alt": "Board engraved with a humorous saying and four egg holders",
    "gallery.newSquare.alt": "Straight-edged board without a handle on a dark table",
    "gallery.newLong.alt": "Rectangular board without a handle viewed from the side",
    "gallery.newBatch.alt": "Collection of boards without handles with different shapes and wood grain",
    "gallery.newPizza.alt": "Extra-long board serving a meter-long pizza",
    "gift.text.alt": "Board engraved with the Italian phrase Taglia e sorridi",
    "gift.logo.alt": "Detail of the Hand Made by Roby logo engraved in wood",
    "gift.hamper.alt": "Board wrapped as a gift with food specialties",
    "contact.direct": "Message me directly"
  },
  "de": {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.gallery": "Galerie",
    "nav.engraving": "Lasergravur",
    "nav.gifts": "Geschenkideen",
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
    "gallery.item2.name": "Ovales Schneidebrett",
    "gallery.item3.name": "Schneidebrett mit Griff",
    "gallery.item4.name": "Mittleres Schneidebrett",
    "gallery.item5.name": "Personalisiertes Schneidebrett",
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
    "engraving.examples.sub": "Persönliche Botschaften, Logos und Geschenke zum Teilen: Entdecke echte Arbeiten aus meiner Werkstatt.",
    "engraving.placeholder": "Foto folgt",
    "engraving.example1.title": "Worte mit Bedeutung",
    "engraving.example1.desc": "Ein Name, eine Widmung oder ein besonderer Spruch: Eine Gravur macht dein Geschenk persönlich.",
    "engraving.example1.aria": "Platz für ein Foto eines Schneidebretts mit Namen, Datum oder Widmung",
    "engraving.example2.title": "Logos und Bilder",
    "engraving.example2.desc": "Für Unternehmen, Restaurants, Vereine, Familien und persönliche Illustrationen.",
    "engraving.example2.aria": "Platz für ein Foto eines Schneidebretts mit graviertem Logo oder Bild",
    "engraving.example3.title": "Ein Geschenk zum Teilen",
    "engraving.example3.desc": "Ein handgefertigtes Brett wird zur Grundlage eines Geschenks mit Spezialitäten und gemeinsamen Genussmomenten.",
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
    "pricing.sub": "Jedes Stück ist einzigartig. Die angegebenen Preise variieren je nach Holz, Größe und Personalisierung.",
    "pricing.length": "Länge",
    "pricing.width": "Breite",
    "pricing.sizeOnRequest": "Maße auf Anfrage",
    "pricing.from": "ab",
    "pricing.popular": "Am gefragtesten",
    "pricing.s.title": "Klein",
    "pricing.s.desc": "Kompakte Bretter, perfekt für Brot, Käse und Vorspeisen.",
    "pricing.s.f1": "✦ Holzart nach Wahl",
    "pricing.s.f2": "✦ Naturöl-Finish",
    "pricing.s.f3": "✦ Handgeschliffene Kanten",
    "pricing.m.title": "Mittel",
    "pricing.m.desc": "Das ideale Format für den täglichen Gebrauch.",
    "pricing.m.f1": "✦ Holzart nach Wahl",
    "pricing.m.f2": "✦ Leinöl-Finish",
    "pricing.m.f3": "✦ Personalisierung möglich",
    "pricing.m.f4": "✦ Rutschfeste Füße",
    "pricing.pizza.title": "Meterpizza",
    "pricing.pizza.desc": "Ein extralanges Servierbrett für Meterpizza, Focaccia und große Apéroplatten.",
    "pricing.pizza.f1": "✦ Extralanges Servierformat",
    "pricing.pizza.f2": "✦ Ausgewähltes Massivholz",
    "pricing.pizza.f3": "✦ Natürliche lebensmittelechte Oberfläche",
    "pricing.pizza.f4": "✦ Gravur möglich",
    "pricing.l.title": "Groß",
    "pricing.l.desc": "Ein großzügiges Brett zum Servieren und gemeinsamen Genießen.",
    "pricing.l.f1": "✦ Ausgewählte Edelhölzer",
    "pricing.l.f2": "✦ Individuelle Gravur",
    "pricing.l.f3": "✦ Geschenkbox inklusive",
    "pricing.l.f4": "✦ Echtheitszertifikat",
    "pricing.note": "Kontaktiere mich für ein individuelles Angebot. Ich fertige auch Auftragsarbeiten für Geschenke und besondere Anlässe an.",
    "maint.label": "Produktpflege",
    "maint.sub": "Ein gut gepflegtes Holzschneidebrett hält lange. Beachte diese einfachen Pflegetipps.",
    "maint.1.title": "Reinigung",
    "maint.1.desc": "Mit lauwarmem Wasser und milder Seife von Hand waschen. Niemals in Wasser einweichen oder in die Spülmaschine geben — das Holz könnte reißen.",
    "maint.1.freq": "Nach jedem Gebrauch",
    "maint.2.title": "Trocknung",
    "maint.2.desc": "Sofort mit einem weichen Tuch trocknen und das Brett senkrecht trocknen lassen. Direkte Sonneneinstrahlung und Wärmequellen vermeiden.",
    "maint.2.freq": "Sofort nach dem Waschen",
    "maint.3.title": "Ölen",
    "maint.3.desc": "Trage alle 4–6 Wochen oder bei trocken wirkendem Holz ein für Schneidebretter geeignetes, lebensmittelechtes Pflegeöl nach Herstellerangaben auf.",
    "maint.3.freq": "Alle 4–6 Wochen",
    "maint.4.title": "Regenerierung",
    "maint.4.desc": "Wenn das Holz Abnutzungserscheinungen zeigt, vorsichtig mit feinem Schleifpapier (Körnung 220) entlang der Maserung schleifen und anschließend neu ölen.",
    "maint.4.freq": "Bei Bedarf",
    "maint.tip.label": "Robys Tipp:",
    "maint.tip.text": "Ein Holzschneidebrett ist nicht nur ein Küchenwerkzeug — es ist ein Begleiter fürs Leben.",
    "contact.label": "Lass uns sprechen",
    "contact.sub": "Fülle das Formular aus, um eine E-Mail mit allen Angaben vorzubereiten.",
    "contact.form.title": "Persönliches Geschenk anfragen",
    "contact.form.intro": "Wähle Brett, Holz und Gravur. Prüfe die E-Mail und sende sie in deinem E-Mail-Programm ab.",
    "contact.firstName": "Vorname",
    "contact.lastName": "Nachname",
    "contact.email": "Deine E-Mail-Adresse",
    "contact.email.placeholder": "name@beispiel.ch",
    "contact.email.help": "Über diese Adresse antworten wir auf deine Anfrage.",
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
    "contact.engraving": "Möchtest du eine Gravur?",
    "contact.no": "Nein",
    "contact.yes": "Ja",
    "contact.engraving.note": "Für deine Gravur kannst du der vorbereiteten E-Mail gern ein Bild anhängen.",
    "contact.notes": "Weitere Angaben",
    "contact.notes.placeholder": "Form, Verwendungszweck, gewünschter Termin oder andere Wünsche",
    "contact.submit": "Vorbereitete E-Mail öffnen",
    "contact.privacy": "Das Formular öffnet eine vorausgefüllte E-Mail in deinem E-Mail-Programm. Prüfe und sende sie selbst; die Website sendet oder speichert deine Angaben nicht.",
    "contact.mail.subject": "Anfrage über die Robywood-Website",
    "contact.whatsapp.greeting": "Hallo Roby!",
    "contact.whatsapp.intro": "Ich interessiere mich für ein Schneidebrett oder ein persönliches Geschenk.",
    "contact.whatsapp.name": "Vor- und Nachname",
    "contact.whatsapp.email": "E-Mail für die Antwort",
    "contact.whatsapp.size": "Größe",
    "contact.whatsapp.wood": "Holz",
    "contact.whatsapp.engraving": "Gravur",
    "contact.whatsapp.notes": "Weitere Angaben",
    "contact.whatsapp.attachment": "Falls vorhanden, füge ich ein Bild für die Gravur als Anhang hinzu.",
    "footer.tagline": "Personalisierte Holzgeschenke & Lasergravuren · Schweiz",
    "footer.copy": "© 2025 Roberto — Alle Rechte vorbehalten",
    "access.skip": "Zum Inhalt springen",
    "access.language": "Sprache ändern",
    "access.menu": "Navigationsmenü",
    "meta.title": "Robywood | Holzgeschenke und Lasergravuren",
    "meta.description": "Handgefertigte Schneidebretter, persönliche Holzgeschenke und Lasergravuren aus der Schweiz.",
    "hero.alt": "Sammlung handgefertigter Holzschneidebretter",
    "about.alt": "Robertos Werkbank mit Holz und Schneidebrettern in Arbeit",
    "process.alt1": "Verschiedene Formen unbearbeiteter Bretter in der Werkstatt",
    "process.alt2": "Werkbank mit Brettern, Werkzeugen und Sägespänen",
    "process.alt3": "Holz und Schablonen für neue Schneidebretter",
    "process.alt4": "Frisch geformte Schneidebretter auf der Werkbank",
    "gallery.solidOak": "Massive Eiche",
    "gallery.naturalShape": "Natürliche Form",
    "gallery.liveEdge": "Naturkante",
    "gallery.handEngraving": "Handwerkliche Gravur",
    "gallery.signature": "Robys Signatur",
    "gallery.slim": "Schlankes Profil",
    "gallery.pair": "Passendes Paar",
    "gallery.grain": "Ausdrucksvolle Maserung",
    "gallery.shapes": "Natürliche Formen",
    "gallery.feetDetail": "Detail der Füße",
    "gallery.feet": "Mit Füßen",
    "gallery.compact": "Kompaktes Format",
    "gallery.unique": "Einzelstück",
    "gallery.table": "Auf dem Tisch",
    "gallery.serving": "Servierbrett",
    "gallery.shaped": "Von Hand geformt",
    "gallery.organic": "Organische Form",
    "gallery.long": "Langes Format",
    "gallery.extraLong": "Extralang",
    "gallery.reclaimed": "Wiederverwendetes Holz",
    "gallery.customEngraving": "Persönliche Gravur",
    "gallery.reclaimedHandles": "Wiederverwendete Griffe",
    "gallery.trays": "Serviertabletts",
    "hero.secondary": "Dein Geschenk anfragen",
    "gallery.sub": "Natürliche Formen, Einzelstücke und handgefertigte Details. Wähle eine Kategorie und entdecke dein Lieblingsstück.",
    "gallery.results": "Kreationen",
    "gallery.tables": "Tische",
    "gallery.humor": "Gravur mit einem Augenzwinkern",
    "gallery.cleanLines": "Klare Linien",
    "gallery.batch": "Eine Reihe von Einzelstücken",
    "gallery.pizzaReady": "Pizza zum Teilen",
    "gallery.barkEdge": "Natürliche Rindenkante",
    "gallery.oliveTable": "Beistelltisch aus Olivenholz",
    "gallery.oliveGrain": "Maserung des Olivenholzes",
    "gallery.barkBoard.alt": "Rechteckiges Brett ohne Griff mit natürlichen Rindenkanten",
    "gallery.oliveTableSide.alt": "Beistelltisch aus Olivenholz mit Naturkante und schwarzen Beinen",
    "gallery.oliveTableTop.alt": "Draufsicht auf den Olivenholztisch mit markanter Maserung",
    "gallery.newServing.alt": "Servierbrett mit Griff, Käse und Wurstspezialitäten",
    "gallery.newHumor.alt": "Brett mit humorvoller Gravur und vier Eierhaltern",
    "gallery.newSquare.alt": "Geradliniges Brett ohne Griff auf einem dunklen Tisch",
    "gallery.newLong.alt": "Rechteckiges Brett ohne Griff in seitlicher Ansicht",
    "gallery.newBatch.alt": "Bretter ohne Griff mit unterschiedlichen Formen und Maserungen",
    "gallery.newPizza.alt": "Extralanges Servierbrett mit frisch servierter Meterpizza",
    "gift.text.alt": "Brett mit dem eingravierten italienischen Spruch Taglia e sorridi",
    "gift.logo.alt": "Detail des ins Holz gravierten Schriftzugs Hand Made by Roby",
    "gift.hamper.alt": "Als Geschenk verpacktes Brett mit kulinarischen Spezialitäten",
    "contact.direct": "Schreib mir direkt"
  },
  "fr": {
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
    "engraving.examples.sub": "Messages personnels, logos et cadeaux à partager : découvrez des créations réalisées dans mon atelier.",
    "engraving.placeholder": "Photo à venir",
    "engraving.example1.title": "Des mots qui comptent",
    "engraving.example1.desc": "Un nom, une dédicace ou une phrase particulière : une gravure rend votre cadeau personnel.",
    "engraving.example1.aria": "Espace pour une photo de planche avec noms, date ou dédicace",
    "engraving.example2.title": "Logos et images",
    "engraving.example2.desc": "Pour les entreprises, restaurants, associations, familles et illustrations personnelles.",
    "engraving.example2.aria": "Espace pour une photo de planche gravée avec un logo ou une illustration",
    "engraving.example3.title": "Un cadeau à partager",
    "engraving.example3.desc": "Une planche artisanale devient la base d’un cadeau gourmand et de moments à partager.",
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
    "pricing.sub": "Chaque pièce est unique. Les prix indiqués varient selon le bois, les dimensions et la personnalisation.",
    "pricing.length": "Longueur",
    "pricing.width": "Largeur",
    "pricing.sizeOnRequest": "Dimensions sur demande",
    "pricing.from": "à partir de",
    "pricing.popular": "Le plus demandé",
    "pricing.s.title": "Petit",
    "pricing.s.desc": "Planches compactes, parfaites pour le pain, le fromage et les apéritifs.",
    "pricing.s.f1": "✦ Bois au choix",
    "pricing.s.f2": "✦ Fini à l'huile naturelle",
    "pricing.s.f3": "✦ Bords polis à la main",
    "pricing.m.title": "Moyen",
    "pricing.m.desc": "Le format idéal pour un usage quotidien.",
    "pricing.m.f1": "✦ Bois au choix",
    "pricing.m.f2": "✦ Fini à l'huile de lin",
    "pricing.m.f3": "✦ Personnalisation disponible",
    "pricing.m.f4": "✦ Pieds antidérapants",
    "pricing.pizza.title": "Pizza au mètre",
    "pricing.pizza.desc": "Une planche extra-longue conçue pour servir la pizza au mètre, les focaccias et les grands apéritifs.",
    "pricing.pizza.f1": "✦ Format de service extra-long",
    "pricing.pizza.f2": "✦ Bois massif sélectionné",
    "pricing.pizza.f3": "✦ Finition naturelle alimentaire",
    "pricing.pizza.f4": "✦ Gravure disponible",
    "pricing.l.title": "Grand",
    "pricing.l.desc": "Une grande planche pour servir et partager à plusieurs.",
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
    "maint.3.desc": "Toutes les 4 à 6 semaines, ou lorsque le bois semble sec, appliquez une huile adaptée aux planches et au contact alimentaire, en suivant les instructions du produit.",
    "maint.3.freq": "Toutes les 4 à 6 semaines",
    "maint.4.title": "Régénération",
    "maint.4.desc": "Si le bois montre des signes d'usure, poncez-le délicatement avec du papier abrasif fin (grain 220) en suivant le grain, puis réappliquez l'huile.",
    "maint.4.freq": "Si nécessaire",
    "maint.tip.label": "Conseil de Roby :",
    "maint.tip.text": "Une planche à découper en bois n'est pas seulement un outil de cuisine — c'est un compagnon de vie.",
    "contact.label": "Parlons-en",
    "contact.sub": "Remplissez le formulaire pour préparer un e-mail avec tous les détails.",
    "contact.form.title": "Demandez votre cadeau personnalisé",
    "contact.form.intro": "Choisissez la planche, le bois et la gravure. Vérifiez l'e-mail et envoyez-le depuis votre messagerie.",
    "contact.firstName": "Prénom",
    "contact.lastName": "Nom",
    "contact.email": "Votre e-mail",
    "contact.email.placeholder": "nom@exemple.ch",
    "contact.email.help": "Nous utilisons cette adresse pour répondre à votre demande.",
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
    "contact.engraving.note": "Si vous avez une image pour la gravure, vous pouvez la joindre à l'e-mail préparé.",
    "contact.notes": "Autres détails",
    "contact.notes.placeholder": "Forme, utilisation, délai souhaité ou autres demandes",
    "contact.submit": "Ouvrir l'e-mail préparé",
    "contact.privacy": "Le formulaire ouvre un e-mail prérempli dans votre messagerie. Vérifiez-le et envoyez-le vous-même ; le site n'envoie ni ne conserve vos données.",
    "contact.mail.subject": "Demande depuis le site Robywood",
    "contact.whatsapp.greeting": "Bonjour Roby !",
    "contact.whatsapp.intro": "Je souhaite des informations sur une planche ou un cadeau personnalisé.",
    "contact.whatsapp.name": "Nom complet",
    "contact.whatsapp.email": "E-mail pour la réponse",
    "contact.whatsapp.size": "Dimensions",
    "contact.whatsapp.wood": "Bois",
    "contact.whatsapp.engraving": "Gravure",
    "contact.whatsapp.notes": "Autres détails",
    "contact.whatsapp.attachment": "Si disponible, je joindrai une image pour la gravure à cet e-mail.",
    "footer.tagline": "Cadeaux personnalisés en bois & gravure laser · Suisse",
    "footer.copy": "© 2025 Roberto — Tous droits réservés",
    "access.skip": "Aller au contenu",
    "access.language": "Changer de langue",
    "access.menu": "Menu de navigation",
    "nav.gifts": "Idées cadeaux",
    "meta.title": "Robywood | Cadeaux en bois et gravure laser",
    "meta.description": "Planches artisanales, cadeaux personnalisés en bois et gravures laser réalisés à la main en Suisse.",
    "hero.alt": "Collection de planches artisanales en bois",
    "about.alt": "Établi de Roberto avec du bois et des planches en préparation",
    "process.alt1": "Différentes formes de planches brutes dans l’atelier",
    "process.alt2": "Établi avec des planches, des outils et de la sciure",
    "process.alt3": "Bois et gabarits sélectionnés pour de nouvelles planches",
    "process.alt4": "Planches fraîchement façonnées sur l’établi",
    "gallery.solidOak": "Chêne massif",
    "gallery.naturalShape": "Forme naturelle",
    "gallery.liveEdge": "Bord naturel",
    "gallery.handEngraving": "Gravure artisanale",
    "gallery.signature": "Signature de Roby",
    "gallery.slim": "Profil fin",
    "gallery.pair": "Paire assortie",
    "gallery.grain": "Veinage marqué",
    "gallery.shapes": "Formes naturelles",
    "gallery.feetDetail": "Détail des pieds",
    "gallery.feet": "Avec pieds",
    "gallery.compact": "Format compact",
    "gallery.unique": "Pièce unique",
    "gallery.table": "À table",
    "gallery.serving": "Planche de service",
    "gallery.shaped": "Façonnés à la main",
    "gallery.organic": "Forme organique",
    "gallery.long": "Format long",
    "gallery.extraLong": "Très long",
    "gallery.reclaimed": "Bois récupéré",
    "gallery.customEngraving": "Gravure personnalisée",
    "gallery.reclaimedHandles": "Poignées récupérées",
    "gallery.trays": "Plateaux de service",
    "hero.secondary": "Demander votre cadeau",
    "gallery.sub": "Formes naturelles, pièces uniques et détails faits main. Choisissez une catégorie pour découvrir votre création préférée.",
    "gallery.results": "créations",
    "gallery.tables": "Tables",
    "gallery.humor": "Une gravure pleine d’humour",
    "gallery.cleanLines": "Lignes épurées",
    "gallery.batch": "Une collection de pièces uniques",
    "gallery.pizzaReady": "Pizza à partager",
    "gallery.barkEdge": "Bords en écorce naturelle",
    "gallery.oliveTable": "Table d'appoint en olivier",
    "gallery.oliveGrain": "Veinage du bois d'olivier",
    "gallery.barkBoard.alt": "Planche rectangulaire sans poignée avec bords en écorce naturelle",
    "gallery.oliveTableSide.alt": "Table d'appoint en olivier aux bords naturels et pieds noirs",
    "gallery.oliveTableTop.alt": "Vue de dessus de la table en olivier et de son veinage marqué",
    "gallery.newServing.alt": "Planche avec poignée garnie de fromages et de charcuterie",
    "gallery.newHumor.alt": "Planche avec une gravure humoristique et quatre supports à œufs",
    "gallery.newSquare.alt": "Planche sans poignée aux lignes droites sur une table sombre",
    "gallery.newLong.alt": "Planche rectangulaire sans poignée vue de côté",
    "gallery.newBatch.alt": "Collection de planches sans poignée aux formes et veinages variés",
    "gallery.newPizza.alt": "Planche extra-longue avec une pizza au mètre prête à servir",
    "gift.text.alt": "Planche gravée avec la phrase italienne Taglia e sorridi",
    "gift.logo.alt": "Détail du logo Hand Made by Roby gravé dans le bois",
    "gift.hamper.alt": "Planche emballée en cadeau avec des spécialités gourmandes",
    "contact.direct": "Écrivez-moi directement"
  }
};

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
  tables: 'gallery.tables',
};

const configNode = document.getElementById('site-config');
if (!configNode?.textContent.trim()) {
  throw new Error('Website-Konfiguration fehlt. Bitte zuerst node scripts/build-site.cjs ausführen.');
}
const siteConfig = JSON.parse(configNode.textContent);
document.getElementById('email-direct').href = `mailto:${siteConfig.contactEmail}`;
document.getElementById('contact-email-label').textContent = siteConfig.contactEmail;
document.getElementById('instagram-direct').href = `https://www.instagram.com/${siteConfig.instagramUsername}/`;
document.getElementById('instagram-label').textContent = `@${siteConfig.instagramUsername}`;

function formatDimensions(size, lang) {
  if (size.lengthCm === null) return '';
  const number = new Intl.NumberFormat(lang);
  return `${number.format(size.lengthCm)} × ${number.format(size.widthCm)} cm`;
}

function updateConfiguredContent(lang, t) {
  document.querySelector('[data-config-stat="pieces"]').textContent = siteConfig.stats.pieces;
  document.querySelector('[data-config-stat="years"]').textContent = siteConfig.stats.years;

  document.querySelectorAll('.pricing-card[data-config-size]').forEach(card => {
    const size = siteConfig.sizes[card.dataset.configSize];
    card.querySelector('.price-amount').textContent = `CHF ${new Intl.NumberFormat(lang).format(size.priceChf)}`;
    let dimensions = card.querySelector('.pricing-dimensions');
    if (!dimensions) {
      dimensions = document.createElement('p');
      dimensions.className = 'pricing-dimensions';
      card.querySelector('.pricing-desc').after(dimensions);
    }
    dimensions.textContent = size.lengthCm === null
      ? t['pricing.sizeOnRequest']
      : `${t['pricing.length']} ${new Intl.NumberFormat(lang).format(size.lengthCm)} cm · ${t['pricing.width']} ${new Intl.NumberFormat(lang).format(size.widthCm)} cm`;
  });

  for (const size of ['small', 'medium', 'pizza', 'large']) {
    const option = document.querySelector(`#board-size option[value="${size}"]`);
    const dimensions = formatDimensions(siteConfig.sizes[size], lang);
    option.textContent = `${t[`contact.size.${size}`]}${dimensions ? ` · ${dimensions}` : ''}`;
  }

  const woodSelect = document.getElementById('wood-type');
  const selectedWood = woodSelect.value;
  woodSelect.querySelectorAll('option[data-config-wood]').forEach(option => option.remove());
  const customWood = woodSelect.querySelector('option[value="specific"]');
  siteConfig.woods.forEach((wood, index) => {
    const option = document.createElement('option');
    option.value = `wood-${index}`;
    option.dataset.configWood = '';
    option.textContent = wood[lang];
    woodSelect.insertBefore(option, customWood);
  });
  woodSelect.value = selectedWood;
}

let currentLang = 'it';
try {
  const savedLang = localStorage.getItem('lang');
  if (Object.hasOwn(translations, savedLang)) currentLang = savedLang;
} catch (_) {
  // Die Website bleibt auch bei gesperrtem Browserspeicher nutzbar.
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

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

  updateConfiguredContent(lang, t);

  document.querySelectorAll('.filter-btn[data-filter]').forEach(button => {
    const key = categoryTranslationKeys[button.dataset.filter];
    if (key && t[key] !== undefined) button.querySelector('.filter-label').textContent = t[key];
  });

  document.querySelectorAll('.gallery-item[data-cat]').forEach(item => {
    const key = categoryTranslationKeys[item.dataset.cat];
    if (!key || t[key] === undefined) return;
    item.querySelectorAll('.gallery-overlay > span, .gallery-caption > strong').forEach(label => {
      label.textContent = t[key];
    });
  });

  document.querySelectorAll('.gallery-item').forEach(item => {
    const image = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption em');
    if (!image.hasAttribute('data-i18n-alt')) {
      image.alt = `${t[categoryTranslationKeys[item.dataset.cat]]}: ${caption.textContent.trim()}`;
    }
  });
  document.title = t['meta.title'];
  document.querySelector('meta[name="description"]').content = t['meta.description'];
  document.querySelector('meta[property="og:description"]').content = t['meta.description'];
  document.querySelector('meta[property="og:title"]').content = t['meta.title'];
  document.querySelector('[data-i18n="footer.copy"]').textContent = t['footer.copy'].replace('2025', new Date().getFullYear());
  document.documentElement.lang = langMeta[lang].htmlLang;
  document.getElementById('lang-flag').textContent = langMeta[lang].flag;
  document.getElementById('lang-code').textContent = langMeta[lang].code;

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  currentLang = lang;
  updateGallerySummary();
  try { localStorage.setItem('lang', lang); } catch (_) {}
}

// Lang dropdown toggle
const langSwitcher = document.getElementById('lang-switcher');
const languageButton = document.getElementById('lang-current');
const setLanguageMenu = (open) => {
  langSwitcher.classList.toggle('open', open);
  languageButton.setAttribute('aria-expanded', String(open));
};
document.getElementById('lang-current').addEventListener('click', (e) => {
  e.stopPropagation();
  setLanguageMenu(!langSwitcher.classList.contains('open'));
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    applyLanguage(lang);
    setLanguageMenu(false);
    languageButton.focus({ preventScroll: true });
  });
});

document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) {
    setLanguageMenu(false);
  }
});

applyLanguage(currentLang);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navigationLinks = document.querySelectorAll('.nav-link');
const updateNavbarScrollState = () => {
  if (!navbar.classList.contains('menu-open')) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  const currentSection = [...document.querySelectorAll('section[id]')].findLast(section =>
    section.getBoundingClientRect().top <= navbar.offsetHeight + window.innerHeight * 0.2);
  navigationLinks.forEach(link => {
    const active = link.hash === `#${currentSection?.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll', updateNavbarScrollState, { passive: true });
updateNavbarScrollState();

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');
const setNavigationMenu = (open) => {
  hamburger.classList.toggle('open', open);
  navLinksEl.classList.toggle('open', open);
  navbar.classList.toggle('menu-open', open);
  navbar.classList.toggle('scrolled', !open && window.scrollY > 60);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
};
if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    setNavigationMenu(!navLinksEl.classList.contains('open'));
  });
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setNavigationMenu(false);
      updateNavbarScrollState();
    });
  });
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (langSwitcher.classList.contains('open')) {
      setLanguageMenu(false);
      languageButton.focus();
    } else if (navbar.classList.contains('menu-open')) {
      setNavigationMenu(false);
      hamburger.focus();
    }
  }
  if (event.key === 'Tab' && navbar.classList.contains('menu-open')) {
    const controls = [...navbar.querySelectorAll('a, button')].filter(el =>
      getComputedStyle(el).visibility !== 'hidden' && el.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
window.matchMedia('(min-width: 1280px)').addEventListener('change', event => {
  if (event.matches) setNavigationMenu(false);
});

// Intersection Observer for reveals
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// Gallery filter
function updateGallerySummary() {
  const visible = document.querySelectorAll('.gallery-item:not(.hidden)').length;
  document.getElementById('gallery-results').textContent = `${visible} ${translations[currentLang]['gallery.results']}`;
}
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterBtns.forEach(button => button.setAttribute('aria-pressed', String(button === btn)));
    const filter = btn.getAttribute('data-filter');
    galleryItems.forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.getAttribute('data-cat') !== filter);
    });
    updateGallerySummary();
  });
});
filterBtns.forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('active'))));
filterBtns.forEach(button => {
  const filter = button.dataset.filter;
  const count = [...galleryItems].filter(item => filter === 'all' || item.dataset.cat === filter).length;
  button.querySelector('.filter-count').textContent = count;
});

// E-Mail-Anfrage
const emailOrderForm = document.getElementById('email-order-form');
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
    input.disabled = !isActive;
  }
};

if (emailOrderForm) {
  const syncOrderFields = () => {
    setConditionalField(boardSizeSelect, 'custom', customSizeGroup, customSizeInput);
    setConditionalField(woodTypeSelect, 'specific', customWoodGroup, customWoodInput);
    engravingUploadNote.hidden = engravingSelect.value !== 'yes';
  };
  syncOrderFields();
  window.addEventListener('pageshow', syncOrderFields);
  emailOrderForm.addEventListener('reset', () => setTimeout(syncOrderFields, 0));
  boardSizeSelect.addEventListener('change', () => {
    setConditionalField(boardSizeSelect, 'custom', customSizeGroup, customSizeInput);
  });

  woodTypeSelect.addEventListener('change', () => {
    setConditionalField(woodTypeSelect, 'specific', customWoodGroup, customWoodInput);
  });

  engravingSelect.addEventListener('change', () => {
    syncOrderFields();
  });
  emailOrderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailOrderForm.reportValidity()) return;

    const t = translations[currentLang] || translations.it;
    const data = new FormData(emailOrderForm);
    const sizeKeys = {
      small: 'contact.size.small',
      medium: 'contact.size.medium',
      pizza: 'contact.size.pizza',
      large: 'contact.size.large',
      custom: 'contact.size.custom',
    };
    const sizeValue = data.get('size');
    const woodValue = data.get('wood');
    const engravingValue = data.get('engraving');
    const dimensions = siteConfig.sizes[sizeValue]
      ? formatDimensions(siteConfig.sizes[sizeValue], currentLang) : '';
    const sizeLabel = sizeValue === 'custom'
      ? `${t[sizeKeys[sizeValue]]}: ${data.get('customSize')}`
      : `${t[sizeKeys[sizeValue]]}${dimensions ? ` (${dimensions})` : ''}`;
    const woodLabel = woodValue === 'specific'
      ? `${t['contact.wood.specific']}: ${data.get('customWood')}`
      : siteConfig.woods[Number(String(woodValue).replace('wood-', ''))]?.[currentLang];

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
    const subject = encodeURIComponent(t['contact.mail.subject']);
    const body = encodeURIComponent(messageLines.join('\n'));
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  });
}

// Smooth scroll: align every target section at the viewport top.
// This guarantees the area above the floating navbar belongs to the new section, not the previous one.
const getRootPxVar = (name, fallback = 0) => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : fallback;
};

const getHashTarget = (hash) => {
  if (!hash || hash === '#') return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch (_) {
    return document.getElementById(hash.slice(1));
  }
};

const scrollSectionCleanly = (target, updateHash = true) => {
  const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
  const overlap = getRootPxVar('--anchor-overlap', 2);
  const top = Math.max(0, Math.round(absoluteTop + overlap));

  window.scrollTo({ top, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  if (target.id === 'main-content') target.focus({ preventScroll: true });

  if (updateHash && target.id && history.pushState) {
    history.pushState(null, '', `#${target.id}`);
  }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = getHashTarget(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      scrollSectionCleanly(target);
    }
  });
});

window.addEventListener('load', () => {
  const target = getHashTarget(window.location.hash);
  if (target) {
    requestAnimationFrame(() => scrollSectionCleanly(target, false));
  }
});

// Structured manual scroll: one physical gesture = one section stop.
// Exception: #gallery keeps native scrolling while there is gallery content above/below.
// The important part is the lock: wheel/trackpad fires many events per gesture, so we must
// ignore all follow-up events until the smooth scroll has settled.
const structuredScroll = (() => {
  const supportsFingerScrolling =
    navigator.maxTouchPoints > 0 ||
    'ontouchstart' in window ||
    window.matchMedia('(hover: none), (pointer: coarse)').matches;

  // Touch-capable devices keep completely native finger scrolling.
  if (supportsFingerScrolling || reducedMotion.matches) {
    document.documentElement.classList.remove('structured-scroll-enabled');
    return;
  }

  const footer = document.querySelector('.footer');
  const sections = [
    ...document.querySelectorAll('section'),
    ...(footer ? [footer] : []),
  ];
  if (!sections.length) return;

  document.documentElement.classList.add('structured-scroll-enabled');

  const WHEEL_THRESHOLD = 82;
  const EDGE_EPSILON = 10;
  const LOCK_TIMEOUT = 1350;
  const SETTLE_FRAMES_REQUIRED = 8;
  const SETTLE_DELTA = 0.75;

  let wheelAccum = 0;
  let isSnapping = false;
  let unlockTimer = null;

  const isInteractive = (el) => Boolean(el?.closest?.(
    'input, textarea, select, button, a, [contenteditable="true"], .lang-dropdown, .gallery-filters'
  ));

  const normalizeWheelDelta = (event) => {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
    return event.deltaY;
  };

  const canScrollWithinSection = (deltaY) => {
    const section = sections[getActiveIndex()];
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    if (deltaY > 0) return rect.bottom > window.innerHeight + EDGE_EPSILON;
    if (deltaY < 0) return rect.top < -EDGE_EPSILON;
    return false;
  };

  const getActiveIndex = () => {
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScrollY - EDGE_EPSILON) {
      return sections.length - 1;
    }

    const viewportProbe = Math.min(window.innerHeight * 0.35, 260);
    let bestIndex = 0;
    let bestScore = Infinity;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const containsProbe = rect.top <= viewportProbe && rect.bottom > viewportProbe;
      const score = containsProbe ? 0 : Math.abs(rect.top);
      if (score < bestScore) {
        bestScore = score;
        bestIndex = index;
      }
    });

    return bestIndex;
  };

  const releaseSnapLockWhenSettled = () => {
    clearTimeout(unlockTimer);

    let lastY = window.scrollY;
    let stableFrames = 0;
    const startedAt = performance.now();

    const tick = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) <= SETTLE_DELTA) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }
      lastY = currentY;

      if (stableFrames >= SETTLE_FRAMES_REQUIRED || performance.now() - startedAt > LOCK_TIMEOUT) {
        isSnapping = false;
        wheelAccum = 0;
        return;
      }

      requestAnimationFrame(tick);
    };

    unlockTimer = setTimeout(() => {
      isSnapping = false;
      wheelAccum = 0;
    }, LOCK_TIMEOUT + 150);

    requestAnimationFrame(tick);
  };

  const snapByDirection = (direction) => {
    if (!direction || isSnapping) return;

    const currentIndex = getActiveIndex();
    const targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
    if (targetIndex === currentIndex) {
      wheelAccum = 0;
      return;
    }

    isSnapping = true;
    wheelAccum = 0;
    scrollSectionCleanly(sections[targetIndex], true);
    releaseSnapLockWhenSettled();
  };

  window.addEventListener('wheel', (event) => {
    if (navbar.classList.contains('menu-open') || reducedMotion.matches) return;
    if (isInteractive(event.target)) return;
    if (event.ctrlKey || event.metaKey) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    const deltaY = normalizeWheelDelta(event);

    if (isSnapping) {
      event.preventDefault();
      return;
    }

    if (canScrollWithinSection(deltaY)) {
      wheelAccum = 0;
      return;
    }

    event.preventDefault();
    wheelAccum += deltaY;

    if (Math.abs(wheelAccum) >= WHEEL_THRESHOLD) {
      snapByDirection(Math.sign(wheelAccum));
    }
  }, { passive: false });

  window.addEventListener('keydown', (event) => {
    if (navbar.classList.contains('menu-open') || reducedMotion.matches) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (isInteractive(event.target)) return;
    const downKeys = ['ArrowDown', 'PageDown', 'Space'];
    const upKeys = ['ArrowUp', 'PageUp'];
    const direction = event.code === 'Space' && event.shiftKey ? -1
      : downKeys.includes(event.code) ? 1 : upKeys.includes(event.code) ? -1 : 0;
    if (!direction) return;
    if (isSnapping) {
      event.preventDefault();
      return;
    }

    if (canScrollWithinSection(direction)) return;

    event.preventDefault();
    snapByDirection(direction);
  });
})();

// Count-up stats
const stats = document.querySelectorAll('.stat-num');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const num = parseInt(el.textContent.replace(/[^0-9]/g, ''));
      const suffix = el.textContent.replace(/[0-9]/g, '');
      if (!isNaN(num) && !reducedMotion.matches) {
        let start = null;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / 1200, 1);
          const val = Math.round(num * (1 - Math.pow(1 - progress, 3)));
          el.textContent = val + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
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
    if (reducedMotion.matches || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
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
