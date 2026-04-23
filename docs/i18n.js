(function () {
  const translations = {
    it: {
      head: {
        title: 'EtzahWeb | Siti Web, Landing Page, SEO e Automazioni',
        description: 'Studio digitale specializzato in siti web su misura, landing page ad alta conversione, SEO tecnica e automazioni.'
      },
      nav: {
        home: 'Home',
        services: 'Servizi',
        portfolio: 'Portfolio',
        blog: 'Blog',
        faq: 'FAQ',
        process: 'Processo',
        pricing: 'Prezzi',
        contact: 'Contatto'
      },
      hero: {
        eyebrow: 'Progetti su misura per brand ambiziosi',
        title: 'Aumenta le tue vendite e raggiungi più clienti con un sito professionale.',
        titleLine1: 'Aumenta le tue vendite',
        titleLine2: 'e raggiungi più clienti',
        titleLine3: 'con un sito professionale.',
        subtitle: 'Design strategico, performance e automazioni per accelerare le vendite, costruire autorevolezza e semplificare il funnel.',
        ctaPrimary: 'Richiedi un preventivo',
        ctaSecondary: 'Chi siamo',
        metric1: 'Lead in 90 giorni',
        metric2: 'per la prima consegna',
        metric3: 'valutazione media',
        dashboard: 'Dashboard Live',
        status: 'Online',
        conversion: 'Conversione',
        ticket: 'Ticket',
        ticketValue: 'EUR 8.400'
      },
      services: {
        title: 'Servizi che aumentano il tuo fatturato',
        subtitle: 'Architettura digitale completa per chi ha bisogno di risultati rapidi e sostenibili.',
        card1: {
          title: 'Landing Page Premium',
          body: 'Pagine focalizzate sulla conversione con copy strategico e performance sopra 95 su Lighthouse.',
          tag: 'Consegna rapida'
        },
        card2: {
          title: 'Siti istituzionali',
          body: 'Presenza digitale elegante, con SEO, contenuti scalabili e identità visiva coerente.',
          tag: 'Alta credibilità'
        },
        card3: {
          title: 'Automazioni & Funnel',
          body: 'Integrazione con CRM, WhatsApp + Email per non perdere nessun lead.',
          tag: 'Processi intelligenti'
        }
      },
      about: {
        titleLine1: 'Cosa Possiamo Creare',
        titleLine2: 'Per Il Tuo',
        titleAccent: 'Business',
        intro: "Un sito va oltre una semplice pagina online. E la porta d'ingresso del tuo brand: presenta i tuoi servizi, rafforza la tua credibilita e ti aiuta a trasformare visite in richieste concrete.",
        card1: {
          title: 'Sito istituzionale',
          body: 'Presenta la tua azienda, i tuoi servizi e i tuoi punti di forza con una presenza chiara, professionale e facile da navigare.'
        },
        card2: {
          title: 'Landing Page',
          body: 'Pagine studiate per campagne, offerte o lanci specifici, con una struttura pensata per aumentare contatti e conversioni.'
        },
        card3: {
          title: 'E-commerce',
          body: "Vendi online con un negozio elegante, veloce e ottimizzato per guidare il cliente fino all'acquisto."
        },
        card4: {
          title: 'Blog e notizie',
          body: 'Crea un\'area editoriale per articoli, aggiornamenti e contenuti SEO che rafforzano autorevolezza e visibilita.'
        },
        card5: {
          title: 'Biglietto digitale',
          body: 'Una presenza compatta e moderna da condividere subito con clienti e contatti, perfetta per social e networking.'
        },
        card6: {
          title: 'Sito personalizzato',
          body: 'Soluzioni su misura per esigenze specifiche, con design, funzionalita e struttura costruiti intorno al tuo business.'
        },
        cta: 'Voglio creare il mio sito',
        real: {
          title: 'Portfolio e recensioni reali',
          body: 'La trasparenza è alla base del nostro lavoro. Mettiamo a disposizione portfolio verificabili e recensioni autentiche dei nostri clienti, perché i risultati parlano più di qualsiasi promessa.',
          intro: 'Seguiamo ogni progetto in modo completo:',
          item1: 'Analisi e strategia',
          item2: 'Web design professionale',
          item3: 'Sviluppo tecnico',
          item4: 'Ottimizzazione SEO',
          item5: 'Integrazione WhatsApp, moduli e strumenti di conversione',
          outro: 'Con EtzahWeb hai un unico partner per tutto il processo digitale.'
        },
        exp: {
          title: 'Esperienza comprovata',
          body: 'Collaboriamo con attività locali, professionisti e imprese che desiderano migliorare la propria presenza online. L’esperienza maturata in diversi settori ci permette di creare soluzioni efficaci, mirate e orientate al mercato reale.'
        },
        quote: {
          title: 'Preventivi trasparenti',
          body: 'Nessuna sorpresa, nessun costo nascosto. Forniamo preventivi dettagliati e chiari, così sai esattamente cosa stai acquistando e quale valore stai ricevendo.'
        },
        support: {
          title: 'Supporto anche dopo il lancio',
          body: 'Il nostro lavoro non finisce con la pubblicazione del sito. Offriamo assistenza tecnica e supporto post-lancio per garantire sicurezza, aggiornamenti e continuità operativa.'
        },
        tech: {
          title: 'Tecnologie moderne e sicure',
          body: 'Utilizziamo piattaforme aggiornate, sicure e scalabili, progettate per crescere insieme alla tua attività e garantire performance elevate nel tempo.'
        },
        custom: {
          title: 'Siti su misura, non template generici',
          body: 'Ogni progetto è personalizzato. Non utilizziamo soluzioni standardizzate: il tuo sito deve rappresentare la tua identità, i tuoi valori e i tuoi obiettivi di business.'
        }
      },
      founder: {
        title: 'Chi sono',
        imageAlt: 'Ritratto di Kallebe Gallo',
        p1Intro: 'Mi chiamo',
        p1FirstName: 'Kallebe',
        p1LastName: 'Gallo',
        p1Line2Rest: ' e sono Full Stack',
        p1Line3: 'Developer e fondatore di EtzahWeb.',
        p2Lead: 'Negli ultimi 5 anni',
        p2Rest: " mi sono dedicato alla realizzazione di siti web moderni, responsive e coinvolgenti, capaci di offrire sia alte prestazioni sia un'esperienza utente eccellente. Il mio percorso nello sviluppo è iniziato con una forte curiosità verso il modo in cui vengono costruiti i prodotti digitali, trasformandosi presto in un percorso professionale focalizzato sulla creazione di soluzioni web complete, dall'architettura backend alle interfacce visibili agli utenti.",
        p3Lead: 'Sistemi sicuri, applicazioni scalabili e design responsive',
        p3Rest: ' fanno parte del mio lavoro quotidiano. Sviluppo piattaforme visivamente curate e adattate a esigenze diverse, garantendo che ogni interazione sia fluida, intuitiva e coerente su ogni dispositivo.',
        p4Lead: 'Con EtzahWeb, il mio obiettivo',
        p4Rest: ' è offrire soluzioni digitali di alta qualità che uniscano eccellenza tecnica e design creativo, aiutando le aziende a crescere e a costruire una presenza online forte e autorevole.'
      },
      process: {
        title: 'Processo chiaro, senza giri di parole',
        subtitle: 'Dal briefing alla consegna finale, segui tutto con trasparenza.',
        step1: {
          title: 'Briefing strategico',
          body: 'Analizziamo pubblico, proposta di valore e obiettivi.'
        },
        step2: {
          title: 'Design e copy',
          body: 'Layout premium con testi persuasivi e prova sociale.'
        },
        step3: {
          title: 'Sviluppo',
          body: 'Codice pulito, ottimizzato e pronto a scalare.'
        },
        step4: {
          title: 'Consegna e supporto',
          body: 'Training, ultimi ritocchi e accompagnamento iniziale.'
        }
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Scopri alcuni siti professionali che ho realizzato.',
        viewProject: 'Vedi progetto',
        item1: {
          mediaAria: 'Apri immagine Portfolio Academia',
          mediaAlt: 'Portfolio Academia',
          projectAlt: 'Progetto Academia',
          title: 'North Peak Gold',
          body: 'Landing premium per brand fitness con visual forte, credibilità immediata e CTA ad alta conversione.',
          tag: 'Fitness Premium'
        },
        item2: {
          mediaAria: 'Apri immagine Portfolio Curso',
          mediaAlt: 'Portfolio Curso',
          projectAlt: 'Progetto Curso',
          title: 'Serfrontend',
          body: 'Pagina corso con proposta chiara, prova sociale e percorso utente ottimizzato per aumentare le iscrizioni.',
          tag: 'Corso Online'
        },
        item3: {
          mediaAria: 'Apri immagine Portfolio Dentista',
          mediaAlt: 'Portfolio Dentista',
          projectAlt: 'Progetto Dentista',
          title: 'Odentrics',
          body: 'Sito odontoiatrico elegante con focus su fiducia clinica, servizi principali e prenotazione semplificata.',
          tag: 'Dental Care'
        },
        item4: {
          mediaAria: 'Apri immagine Portfolio Garage',
          mediaAlt: 'Portfolio Garage',
          projectAlt: 'Progetto Garage',
          title: 'Garage Ticino',
          body: 'Presenza digitale per officina premium con servizi ben strutturati e contatto rapido per appuntamenti.',
          tag: 'Automotive'
        },
        item5: {
          mediaAria: 'Apri immagine Portfolio Hamburguer',
          mediaAlt: 'Portfolio Hamburguer',
          projectAlt: 'Progetto Hamburguer',
          title: 'Bella Burguer Atelier',
          body: 'Vetrina food ad alto impatto con storytelling del brand e flusso veloce per ordini e prenotazioni.',
          tag: 'Burguer Gourmet'
        },
        item6: {
          mediaAria: 'Apri immagine Portfolio Imobiliaria',
          mediaAlt: 'Portfolio Imobiliaria',
          projectAlt: 'Progetto Imobiliaria',
          title: 'Imperium',
          body: 'Sito immobiliare con presentazione autorevole, immobili in evidenza e CTA commerciali ben distribuite.',
          tag: 'Real Estate'
        },
        item7: {
          mediaAria: 'Apri immagine Portfolio Jardim',
          mediaAlt: 'Portfolio Jardim',
          projectAlt: 'Progetto Jardim',
          title: 'Verde Vivo',
          body: 'Web design per servizi green con identità naturale, copy diretto e focus sulla richiesta di preventivo.',
          tag: 'Green Services'
        },
        item8: {
          mediaAria: 'Apri immagine Portfolio Pizza',
          mediaAlt: 'Portfolio Pizza',
          projectAlt: 'Progetto Pizza',
          title: "Forno d'Oro",
          body: 'Pagina ristorante orientata alle vendite con menu in evidenza, offerte strategiche e contatto immediato.',
          tag: 'Pizzeria'
        },
        item9: {
          mediaAria: 'Apri immagine Portfolio Salone',
          mediaAlt: 'Portfolio Salone',
          projectAlt: 'Progetto Salone',
          title: 'Vittorino Baber',
          body: 'Presenza digitale barber con immagine premium, servizi chiari e percorso semplice per prenotazioni.',
          tag: 'Barber Shop'
        }
      },
      pricing: {
        title: 'Prezzi chiari, valore reale',
        subtitle: 'Tre pacchetti per partire subito con un sito elegante e pronto a vendere.',
        basic: {
          tier: 'Basic',
          item1: 'Landing page essenziale',
          item2: 'Design personalizzato',
          item3: 'SEO base e performance',
          item4: 'Consegna rapida'
        },
        premium: {
          tier: 'Premium',
          item1: 'Sezione servizi + CTA',
          item2: 'Copy strategico',
          item3: 'Ottimizzazione conversione',
          item4: 'Supporto 7 giorni'
        },
        gold: {
          tier: 'Gold',
          item1: 'Multipage o landing avanzata',
          item2: 'Animazioni premium',
          item3: 'Setup analytics',
          item4: 'Supporto 14 giorni'
        }
      },
      reviews: {
        sectionTitle: 'Recensioni clienti',
        sectionSubtitle: 'Opinioni reali di aziende e professionisti che hanno scelto EtzahWeb per migliorare presenza online.',
        kicker: 'Nostre recensioni',
        swipeHint: 'Scorri per vedere più recensioni →',
        excellent: 'ECCELLENTE',
        count: 'In base a 15 recensioni verificate',
        google: 'Google',
        starsAria: 'Valutazione 5 su 5',
        prevAria: 'Recensione precedente',
        nextAria: 'Recensione successiva',
        item1Meta: '4 settimane fa',
        item1Quote: 'Prenotazione semplice, comunicazione professionale e consegna impeccabile. Il sito trasmette subito più valore al brand.',
        item2Meta: '5 settimane fa',
        item2Quote: 'Layout elegante, processo chiaro e supporto veloce. Le richieste dal sito sono aumentate già nel primo mese.',
        item3Meta: '6 settimane fa',
        item3Quote: 'Sito veloce, messaggio commerciale più chiaro e molte più richieste qualificate. Lavoro molto professionale.',
        item4Meta: '7 settimane fa',
        item4Quote: "Esperienza curata dall'inizio alla fine. Identità visiva più forte e contatti molto meglio organizzati.",
        item5Meta: '8 settimane fa',
        item5Quote: 'Strategia chiara, struttura premium e copy efficace. Ora il sito comunica autorevolezza in pochi secondi.',
        item6Meta: '2 mesi fa',
        item6Quote: 'Design raffinato e percorso utente pulito. I clienti trovano subito i servizi e ci contattano più facilmente.',
        item7Meta: '2 mesi fa',
        item7Quote: 'Finalmente un sito semplice da gestire e bello da vedere. Menu, offerte e contatti sono molto più efficaci.',
        item8Meta: '2 mesi fa',
        item8Quote: 'Immagine più moderna, informazioni chiare e prenotazione molto più intuitiva. Ottimo equilibrio tra estetica e funzionalità.',
        item9Meta: '2 mesi fa',
        item9Quote: 'Landing molto più convincente e ordinata. Ora le persone capiscono subito il servizio e chiedono informazioni.',
        item10Meta: '2 mesi fa',
        item10Quote: 'Molto attenti ai dettagli e al posizionamento del brand. Il sito ora sembra davvero allineato al nostro livello.',
        item11Meta: '2 mesi fa',
        item11Quote: 'Visual forte, caricamento rapido e contatto immediato. Esattamente il salto di qualità che cercavamo.',
        item12Meta: '3 mesi fa',
        item12Quote: 'Sito luminoso, credibile e molto più ordinato. Anche l\'esperienza da mobile è stata curata davvero bene.',
        item13Meta: '3 mesi fa',
        item13Quote: 'Presentazione più autorevole, schede più leggibili e funnel commerciale più chiaro. Servizio serio e puntuale.',
        item14Meta: '3 mesi fa',
        item14Quote: 'Molto soddisfatta del risultato: design pulito, atmosfera giusta e navigazione più semplice per i clienti.',
        item15Meta: '3 mesi fa',
        item15Quote: 'Competenza tecnica evidente e ottima organizzazione del progetto. Il nuovo sito comunica più fiducia e converte meglio.'
      },
      benefits: {
        titlePrefix: 'COME UN SITO',
        titleHighlight: 'PROFESSIONALE',
        titleSuffixLead: 'AIUTA IL TUO',
        titleSuffixAccent: 'BUSINESS?',
        subtitle: '6 ragioni per cui un sito e essenziale per far crescere il tuo business.',
        item1: {
          title: 'Fatti trovare',
          body: 'Porta online la tua azienda e mostra prodotti o servizi a nuovi clienti, ogni giorno.'
        },
        item2: {
          title: 'Vendi di più',
          body: 'Presenta la tua offerta in modo chiaro e accompagna il cliente fino al contatto o all\'acquisto.'
        },
        item3: {
          title: 'Credibilità immediata',
          body: 'Un sito professionale trasmette fiducia, serietà e valore già nei primi secondi.'
        },
        item4: {
          title: 'Marketing più forte',
          body: 'Collega campagne, social e annunci a una base solida pensata per convertire meglio.'
        },
        item5: {
          title: 'Lavora anche di notte',
          body: 'Il tuo sito continua a presentare il business e raccogliere richieste anche quando sei offline.'
        },
        item6: {
          title: 'Resta davanti',
          body: 'Una presenza moderna e curata ti aiuta a distinguerti e restare competitivo nel tuo settore.'
        }
      },
      blog: {
        sectionTitle: 'Blog',
        sectionSubtitle: 'Perché il design responsivo è essenziale per attirare più clienti online.',
        articleTitle: 'L\'importanza del design responsivo per attirare più clienti',
        imageAlt: 'Copertina articolo sul design responsivo',
        intro: 'Nel mondo digitale di oggi, dove accessibilità ed esperienza utente sono decisive per il successo online, il design responsivo è diventato un elemento essenziale per qualsiasi sito. Offrire un\'esperienza coerente e di qualità su dispositivi diversi è fondamentale per attrarre e fidelizzare clienti.',
        whatTitle: 'Che cos\'è il design responsivo?',
        whatBody: 'Il design responsivo è un approccio al web design che fa sì che un sito si adatti e funzioni perfettamente su una varietà di dispositivi e dimensioni di schermo, dai desktop e laptop fino a smartphone e tablet. Questo avviene tramite layout flessibili, immagini ridimensionabili e media queries che regolano lo stile in base al dispositivo dell\'utente.',
        uxTitle: 'L\'esperienza utente al primo posto',
        uxBody: 'Uno dei maggiori vantaggi del design responsivo è il miglioramento dell\'esperienza utente. Quando i visitatori entrano in un sito che si adatta perfettamente al loro dispositivo, la navigazione diventa più intuitiva, rapida e piacevole. Non devono zoomare o scorrere lateralmente per leggere i contenuti, e questo riduce l\'attrito che spesso allontana potenziali clienti.',
        mobileTitle: 'L\'importanza del mobile-first',
        mobileBody: 'Con l\'aumento dell\'uso dei dispositivi mobili per accedere a internet, adottare un approccio mobile-first è diventato essenziale. Significa progettare prima per il mobile e poi espandere l\'esperienza su desktop e altri schermi. In questo modo il sito risponde meglio al comportamento reale degli utenti e può generare più conversioni.',
        seoTitle: 'Impatto su SEO e visibilità online',
        seoBody: 'Oltre a migliorare l\'esperienza utente, il design responsivo ha un impatto positivo anche sulla SEO. I motori di ricerca, come Google, privilegiano i siti ottimizzati per il mobile, e avere un unico URL per tutte le versioni del sito semplifica l\'indicizzazione. Questo può tradursi in maggiore visibilità, più traffico organico e più opportunità di business.',
        whyTitle: 'Ma perché il design responsivo è così importante?',
        point1Title: 'Esperienza utente superiore:',
        point1Body: 'un sito responsivo garantisce una navigazione piacevole e intuitiva su ogni dispositivo, aumentando il tempo di permanenza, l\'engagement e la probabilità di ritorno.',
        point2Title: 'Più conversioni e vendite:',
        point2Body: 'una struttura chiara e accessibile facilita contatti, richieste e acquisti, trasformando più visitatori in clienti.',
        point3Title: 'Miglior posizionamento nei motori di ricerca:',
        point3Body: 'Google e gli altri motori di ricerca favoriscono i siti responsivi, aumentando le possibilità di apparire tra i primi risultati.',
        point4Title: 'Pubblico più ampio:',
        point4Body: 'un sito responsivo raggiunge utenti che navigano soprattutto da smartphone, oggi la parte più grande del traffico internet.',
        point5Title: 'Immagine del brand più forte:',
        point5Body: 'mostra professionalità, attenzione al mercato e cura dell\'esperienza utente, aumentando fiducia e credibilità.',
        conclusionTitle: 'Conclusione',
        conclusionBody: 'In un mondo sempre più connesso e mobile, il design responsivo non è più un optional. È una necessità per qualsiasi azienda che voglia attrarre, coinvolgere e convertire il proprio pubblico. Quando crei o aggiorni il tuo sito, dare priorità al design responsivo significa investire in credibilità, visibilità online e risultati concreti.'
      },
      faq: {
        sectionTitle: 'FAQ - Domande Frequenti',
        item1: {
          question: 'Qual e l\'importanza di un sito per la mia azienda?',
          answer: 'Un sito professionale aumenta credibilita, facilita il contatto con nuovi clienti e mantiene la tua azienda visibile 24 ore su 24. E uno strumento commerciale che rafforza il brand e aiuta a trasformare visite in richieste reali.'
        },
        item2: {
          question: 'Che cos\'e l\'hosting di un sito?',
          answer: 'L\'hosting e il servizio che mantiene il tuo sito online su un server. In pratica, e lo spazio dove vivono i file del sito e da cui i visitatori possono accedervi in qualsiasi momento.'
        },
        item3: {
          question: 'Quanto costa sviluppare un sito?',
          answer: 'Il costo dipende da obiettivi, numero di pagine, livello di personalizzazione e funzionalita necessarie. Un sito istituzionale semplice costa meno di un e-commerce o di una landing page con integrazioni avanzate.'
        },
        item4: {
          question: 'Che cos\'e un\'email professionale?',
          answer: 'E un indirizzo email personalizzato con il dominio della tua azienda, ad esempio nome@tuoazienda.com. Trasmette piu fiducia, rafforza l\'immagine del brand e rende la comunicazione piu professionale.'
        },
        item5: {
          question: 'Quali costi ho per mantenere un sito?',
          answer: 'I costi principali sono dominio, hosting ed eventuale manutenzione tecnica o aggiornamenti. In alcuni progetti possono aggiungersi strumenti extra come email professionale, backup, SEO o integrazioni specifiche.'
        },
        item6: {
          question: 'Che cos\'e il dominio di un sito?',
          answer: 'Il dominio e l\'indirizzo del tuo sito su internet, ad esempio etzahweb.com. E il nome che le persone digitano per trovarti online e rappresenta una parte importante della tua identita digitale.'
        },
        item7: {
          question: 'Il mio sito apparira su Google?',
          answer: 'Si, dopo l\'indicizzazione da parte di Google il sito puo comparire nei risultati di ricerca. Tuttavia, per ottenere maggiore visibilita servono struttura corretta, contenuti ben scritti, velocita, SEO tecnica e continuita nel tempo.'
        },
        item8: {
          question: 'Quale dominio dovrei scegliere?',
          answer: 'La scelta migliore e un dominio breve, facile da ricordare, semplice da scrivere e coerente con il nome della tua attivita. Quando possibile, conviene evitare trattini, termini complessi o varianti difficili da comunicare.'
        },
        item9: {
          question: 'Qual e la differenza tra sito istituzionale, negozio online, blog e landing page?',
          answer: 'Il sito istituzionale presenta azienda e servizi; il negozio online vende prodotti; il blog pubblica contenuti e articoli; la landing page e una pagina focalizzata su una sola offerta o campagna, progettata per generare conversioni specifiche.'
        },
        item10: {
          question: 'Che cos\'e la SEO?',
          answer: 'SEO significa ottimizzazione per i motori di ricerca. Comprende struttura tecnica, contenuti, performance e strategia di parole chiave per aiutare il tuo sito a posizionarsi meglio su Google e attirare traffico qualificato.'
        }
      },
      contact: {
        title: 'Mettiamo online il tuo progetto?',
        subtitle: 'Invia i tuoi dati e ricevi risposta entro 24h con una proposta chiara.',
        card1: {
          label: 'Canale ',
          value: 'Instagram'
        },
        card2: {
          label: 'Canale ',
          value: 'WhatsApp'
        },
        mapLabel: 'Posizione ',
        mapValue: 'Bellinzona, Svizzera',
        mapLink: 'Apri su Google Maps'
      },
      form: {
        nameLabel: 'Nome completo',
        namePlaceholder: 'Es: Pietro Bernasconi',
        emailLabel: 'Email professionale',
        emailPlaceholder: 'tuo@azienda.com',
        phoneLabel: 'WhatsApp',
        phonePlaceholder: 'Es: +41 79 839 9268',
        companyLabel: 'Azienda',
        companyPlaceholder: 'Nome della tua azienda',
        messageLabel: 'Racconta il progetto',
        messagePlaceholder: 'Sito istituzionale, landing page, automazione...',
        submit: 'Invia proposta',
        sending: 'Invio in corso...',
        success: 'Messaggio inviato con successo! Ti risponderemo entro 24h.',
        error: 'Non è stato possibile inviare. Riprova tra poco.',
        authRequired: 'Fai login per inviare il messaggio.'
      },
      footer: {
        tagline: 'Costruiamo esperienze digitali che generano ricavi e reputazione.',
        contactTitle: 'Contatto',
        linksTitle: 'Link',
        linksPrivacy: 'Privacy',
        linksTerms: 'Termini',
        copyright: '© 2026 EtzahWeb. Tutti i diritti riservati.'
      },
      footerShowcase: {
        brandDescription: 'EtzahWeb è uno studio digitale specializzato in siti web professionali, strategie orientate ai risultati e supporto continuo per aziende e professionisti.',
        quickTitle: 'Link veloci',
        home: 'Home',
        about: 'Chi siamo',
        services: 'Servizi',
        portfolio: 'Portfolio',
        blog: 'Blog',
        faq: 'FAQ',
        quote: 'Richiedi un preventivo',
        servicesTitle: 'Servizi',
        service1: 'Creazioni siti web su misura',
        service2: 'Landing page ad alta conversione',
        service3: 'SEO tecnica e ottimizzazione',
        service4: 'Automazioni e integrazioni',
        contactInfoTitle: 'Informazioni di contatto',
        contactInfoBody: 'Sentitevi liberi di contattarci e raggiungerci.',
        privacyPolicy: 'Privacy & Policy'
      },
      ui: {
        menuAria: 'Menu',
        languageAria: 'Language',
        scrollDownAria: 'Scorri verso il basso',
        lightboxDialogAria: 'Visualizzazione immagine portfolio',
        lightboxCloseAria: 'Chiudi immagine'
      },
      cookie: {
        title: 'Informativa',
        bodyPrefix: 'Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per altre finalità come specificato nella',
        policyLink: 'cookie policy',
        bodySuffix: '.',
        learnMore: 'Scopri di più',
        accept: 'Accetta',
        bannerAriaLabel: 'Informativa cookie',
        closeAriaLabel: 'Chiudi informativa cookie'
      },
      privacy: {
        headTitle: 'Informativa sulla Privacy | EtzahWeb',
        headDescription: 'Informativa sulla privacy di EtzahWeb.',
        title: 'Informativa sulla Privacy',
        updated: 'Aggiornata al 07/02/2026.',
        intro: 'EtzahWeb tratta i dati personali forniti tramite il modulo di contatto per rispondere alle richieste, inviare preventivi e gestire le comunicazioni commerciali.',
        dataTitle: 'Dati raccolti',
        dataBody: 'Nome, email, azienda e messaggio inviato volontariamente.',
        purposeTitle: 'Finalità del trattamento',
        purposeBody: 'Contattare il lead, preparare proposte, migliorare il servizio e adempiere a eventuali obblighi legali.',
        retentionTitle: 'Conservazione',
        retentionBody: 'I dati vengono conservati per il tempo necessario a gestire la richiesta e per eventuali obblighi amministrativi.',
        rightsTitle: "Diritti dell'interessato",
        rightsBody: 'Puoi richiedere accesso, rettifica o cancellazione dei dati scrivendo a contato@etzahweb.com.',
        contactTitle: 'Contatto',
        contactBody: 'Per qualsiasi domanda, scrivi a contato@etzahweb.com.'
      },
      terms: {
        headTitle: 'Termini di Servizio | EtzahWeb',
        headDescription: 'Termini di servizio di EtzahWeb.',
        title: 'Termini di Servizio',
        updated: 'Aggiornati al 07/02/2026.',
        scopeTitle: 'Ambito',
        scopeBody: "Questi termini regolano l'uso del sito EtzahWeb e la richiesta di preventivi o servizi digitali.",
        proposalsTitle: 'Proposte e pagamenti',
        proposalsBody: 'Le proposte sono inviate su richiesta. I pagamenti, le scadenze e le condizioni specifiche sono definite nel contratto o nella proposta approvata.',
        liabilityTitle: 'Responsabilità',
        liabilityBody: 'EtzahWeb non è responsabile per interruzioni del servizio dovute a cause di forza maggiore o a terze parti.',
        ipTitle: 'Proprietà intellettuale',
        ipBody: 'Testi, layout e materiali creati restano di proprietà di EtzahWeb finché non vengono saldati i compensi concordati.',
        changesTitle: 'Modifiche',
        changesBody: 'I termini possono essere aggiornati. Le versioni pubblicate su questa pagina sono quelle valide.',
        contactTitle: 'Contatto',
        contactBody: 'Per domande sui termini, scrivi a contato@etzahweb.com.'
      },
      login: {
        headTitle: 'Area interna | EtzahWeb',
        headDescription: 'Area interna disattivata nella versione statica del sito EtzahWeb.',
        title: 'Area interna rimossa',
        subtitle: 'Questo sito ora funziona senza backend. I messaggi del modulo vengono inviati direttamente a contato@etzahweb.com.',
        emailLabel: 'Utente',
        emailPlaceholder: 'admin',
        passwordLabel: 'Password',
        passwordPlaceholder: '********',
        submit: 'Entra',
        verifying: 'Verifica in corso...',
        error: 'Email o password non corretti.'
      },
      admin: {
        headTitle: 'Informazioni | EtzahWeb',
        headDescription: 'Pagina informativa della versione statica EtzahWeb.',
        title: 'Inbox rimossa',
        subtitle: 'Nella versione statica del sito, i contatti arrivano direttamente via email e non vengono salvati in un pannello interno.',
        titleInbox: 'Messaggi ricevuti',
        subtitleInbox: 'Segui i lead e rispondi rapidamente.',
        titleTrash: 'Messaggi eliminati',
        subtitleTrash: 'Gestisci i messaggi spostati nel cestino.',
        inboxBtn: 'In arrivo',
        trashBtn: 'Cestino',
        refresh: 'Aggiorna',
        logout: 'Esci',
        loading: 'Caricamento messaggi...',
        emptyTitle: 'Ricezione diretta via email',
        emptyBody: 'Usa il modulo principale della home per ricevere nuove richieste su contato@etzahweb.com.',
        trashEmptyTitle: 'Nessun messaggio nel cestino',
        trashEmptyBody: 'I messaggi eliminati appariranno qui.',
        noneFound: 'Nessun messaggio trovato.',
        trashNoneFound: 'Nessun messaggio nel cestino.',
        loaded: 'messaggi caricati.',
        error: 'Errore nel recupero messaggi. Verifica il login.',
        deleteBtn: 'Sposta nel cestino',
        purgeBtn: 'Elimina',
        deleteConfirm: 'Spostare il messaggio nel cestino?',
        purgeConfirm: 'Eliminare definitivamente il messaggio?',
        deletedStatus: 'Messaggio spostato nel cestino.',
        purgedStatus: 'Messaggio eliminato definitivamente.',
        actionError: 'Non è stato possibile aggiornare il messaggio.',
        leadName: 'Lead senza nome',
        emailLabel: 'Email',
        emailFallback: 'non fornita',
        phoneLabel: 'WhatsApp',
        phoneFallback: 'non fornito',
        companyLabel: 'Azienda',
        companyFallback: 'non fornita',
        messageLabel: 'Messaggio',
        messageFallback: 'Nessun messaggio',
        actionsAria: 'Azioni amministrative'
      }
    },
    pt: {
      head: {
        title: 'EtzahWeb | Sites, Landing Pages, SEO e Automações',
        description: 'Estúdio digital especializado em sites sob medida, landing pages de alta conversão, SEO técnico e automações.'
      },
      nav: {
        home: 'Home',
        services: 'Serviços',
        portfolio: 'Portfólio',
        blog: 'Blog',
        faq: 'FAQ',
        process: 'Processo',
        pricing: 'Preços',
        contact: 'Contato'
      },
      hero: {
        eyebrow: 'Projetos sob medida para marcas ambiciosas',
        title: 'Aumente suas vendas e alcance mais clientes com um site profissional.',
        titleLine1: 'Aumente suas vendas',
        titleLine2: 'e alcance mais clientes',
        titleLine3: 'com um site profissional.',
        subtitle: 'Design estratégico, performance e automações para acelerar vendas, gerar autoridade e simplificar seu funil.',
        ctaPrimary: 'Solicitar orçamento',
        ctaSecondary: 'Quem somos',
        metric1: 'Leads em 90 dias',
        metric2: 'para primeira entrega',
        metric3: 'avaliação média',
        dashboard: 'Dashboard Live',
        status: 'Online',
        conversion: 'Conversão',
        ticket: 'Tickets',
        ticketValue: 'R$ 8.400'
      },
      services: {
        title: 'Serviços que impulsionam sua receita',
        subtitle: 'Arquitetura digital completa para quem precisa de resultados rápidos e sustentáveis.',
        card1: {
          title: 'Landing Pages Premium',
          body: 'Páginas focadas em conversão com copy estratégica e desempenho acima de 95 no Lighthouse.',
          tag: 'Entrega rápida'
        },
        card2: {
          title: 'Sites Institucionais',
          body: 'Presença digital elegante, com SEO, conteúdo escalável e identidade visual coerente.',
          tag: 'Alta credibilidade'
        },
        card3: {
          title: 'Automações & Funis',
          body: 'Integração com CRM, WhatsApp + Email para não perder nenhum lead.',
          tag: 'Processos inteligentes'
        }
      },
      about: {
        titleLine1: 'O Que Podemos Criar',
        titleLine2: 'Para O Seu',
        titleAccent: 'Negocio',
        intro: 'Um site vai alem de uma pagina online. Ele e a porta de entrada da sua marca: apresenta seus servicos, fortalece sua credibilidade e transforma visitas em pedidos reais.',
        card1: {
          title: 'Site institucional',
          body: 'Apresente sua empresa, seus servicos e seus diferenciais com uma presenca clara, profissional e facil de navegar.'
        },
        card2: {
          title: 'Landing Pages',
          body: 'Paginas pensadas para campanhas, ofertas ou lancamentos, com estrutura focada em gerar mais contatos e conversoes.'
        },
        card3: {
          title: 'Loja virtual',
          body: 'Venda online com uma loja elegante, rapida e otimizada para conduzir o cliente ate a compra.'
        },
        card4: {
          title: 'Blog e noticias',
          body: 'Crie uma area editorial para artigos, atualizacoes e conteudos SEO que reforcam autoridade e visibilidade.'
        },
        card5: {
          title: 'Cartao digital',
          body: 'Uma presenca compacta e moderna para compartilhar com clientes e contatos, perfeita para redes sociais e networking.'
        },
        card6: {
          title: 'Site personalizado',
          body: 'Solucoes sob medida para necessidades especificas, com design, funcionalidades e estrutura criados para o seu negocio.'
        },
        cta: 'Quero criar meu site',
        real: {
          title: 'Portfólio e avaliações reais',
          body: 'Transparência é a base do nosso trabalho. Disponibilizamos portfólios verificáveis e avaliações autênticas dos nossos clientes, porque resultados falam mais que promessas.'
        },
        full: {
          title: 'Serviços completos, do design ao desenvolvimento',
          intro: 'Acompanhamos cada projeto de forma completa:',
          item1: 'Análise e estratégia',
          item2: 'Web design profissional',
          item3: 'Desenvolvimento técnico',
          item4: 'Otimização SEO',
          item5: 'Integração com WhatsApp, formulários e ferramentas de conversão',
          outro: 'Com a EtzahWeb, você tem um parceiro único para todo o processo digital.'
        },
        exp: {
          title: 'Experiência comprovada',
          body: 'Trabalhamos com negócios locais, profissionais e empresas que desejam melhorar sua presença online. A experiência em diferentes setores permite criar soluções eficazes, direcionadas e orientadas ao mercado real.'
        },
        quote: {
          title: 'Orçamentos transparentes',
          body: 'Sem surpresas, sem custos ocultos. Fornecemos propostas detalhadas e claras, para você saber exatamente o que está contratando e qual valor está recebendo.'
        },
        support: {
          title: 'Suporte também após o lançamento',
          body: 'Nosso trabalho não termina com a publicação do site. Oferecemos suporte técnico e pós-lançamento para garantir segurança, atualizações e continuidade operacional.'
        },
        tech: {
          title: 'Tecnologias modernas e seguras',
          body: 'Utilizamos plataformas atualizadas, seguras e escaláveis, preparadas para crescer com o seu negócio e manter alta performance ao longo do tempo.'
        },
        custom: {
          title: 'Sites sob medida, não templates genéricos',
          body: 'Cada projeto é personalizado. Não usamos soluções padronizadas: seu site deve representar sua identidade, seus valores e seus objetivos de negócio.'
        }
      },
      founder: {
        title: 'Quem sou',
        imageAlt: 'Retrato de Kallebe Gallo',
        p1Intro: 'Meu nome é',
        p1FirstName: 'Kallebe',
        p1LastName: 'Gallo',
        p1Line2Rest: ' e sou Desenvolvedor',
        p1Line3: 'Full Stack e fundador da EtzahWeb.',
        p2Lead: 'Nos últimos 5 anos',
        p2Rest: ' tenho me dedicado a criar sites modernos, responsivos e envolventes, capazes de entregar alta performance e uma excelente experiência de uso. Minha jornada no desenvolvimento começou com uma forte curiosidade sobre como os produtos digitais são construídos e rapidamente se transformou em um caminho profissional focado na criação de soluções web completas, da arquitetura backend até as interfaces que o usuário vê e utiliza.',
        p3Lead: 'Sistemas seguros, aplicações escaláveis e design responsivo',
        p3Rest: ' fazem parte do meu trabalho diário. Desenvolvo plataformas visualmente marcantes e adaptadas a diferentes necessidades, garantindo que cada interação seja fluida, intuitiva e consistente em qualquer dispositivo.',
        p4Lead: 'Com a EtzahWeb, meu objetivo',
        p4Rest: ' é oferecer soluções digitais de alta qualidade que unam excelência técnica e design criativo, ajudando empresas a crescer e a construir uma presença online forte e profissional.'
      },
      process: {
        title: 'Processo claro, sem enrolação',
        subtitle: 'Do diagnóstico a entrega final, você acompanha tudo com transparência.',
        step1: {
          title: 'Briefing estratégico',
          body: 'Entendemos seu público, proposta de valor e metas.'
        },
        step2: {
          title: 'Design e copy',
          body: 'Layout premium com texto persuasivo e prova social.'
        },
        step3: {
          title: 'Desenvolvimento',
          body: 'Código limpo, otimizado e pronto para escalar.'
        },
        step4: {
          title: 'Entrega e suporte',
          body: 'Treinamento, ajustes finais e acompanhamento inicial.'
        }
      },
      portfolio: {
        title: 'Portfólio',
        subtitle: 'Conheça alguns sites profissionais que já criei.',
        viewProject: 'Ver projeto',
        item1: {
          mediaAria: 'Abrir imagem do portfólio Academia',
          mediaAlt: 'Portfólio Academia',
          projectAlt: 'Projeto Academia',
          title: 'North Peak Gold',
          body: 'Landing premium para marca fitness com visual forte, credibilidade imediata e CTA de alta conversão.',
          tag: 'Fitness Premium'
        },
        item2: {
          mediaAria: 'Abrir imagem do portfólio Curso',
          mediaAlt: 'Portfólio Curso',
          projectAlt: 'Projeto Curso',
          title: 'Serfrontend',
          body: 'Página de curso com proposta clara, prova social e jornada otimizada para aumentar inscrições.',
          tag: 'Curso Online'
        },
        item3: {
          mediaAria: 'Abrir imagem do portfólio Dentista',
          mediaAlt: 'Portfólio Dentista',
          projectAlt: 'Projeto Dentista',
          title: 'Odentrics',
          body: 'Site odontológico elegante com foco em confiança clínica, serviços principais e agendamento simplificado.',
          tag: 'Dental Care'
        },
        item4: {
          mediaAria: 'Abrir imagem do portfólio Garage',
          mediaAlt: 'Portfólio Garage',
          projectAlt: 'Projeto Garage',
          title: 'Garage Ticino',
          body: 'Presença digital para oficina premium com serviços bem estruturados e contato rápido para agendamentos.',
          tag: 'Automotivo'
        },
        item5: {
          mediaAria: 'Abrir imagem do portfólio Hamburguer',
          mediaAlt: 'Portfólio Hamburguer',
          projectAlt: 'Projeto Hamburguer',
          title: 'Bella Burguer Atelier',
          body: 'Vitrine food de alto impacto com storytelling da marca e fluxo rápido para pedidos e reservas.',
          tag: 'Hamburguer Gourmet'
        },
        item6: {
          mediaAria: 'Abrir imagem do portfólio Imobiliaria',
          mediaAlt: 'Portfólio Imobiliaria',
          projectAlt: 'Projeto Imobiliaria',
          title: 'Imperium',
          body: 'Site imobiliário com apresentação de autoridade, imóveis em destaque e CTAs comerciais bem distribuídas.',
          tag: 'Imobiliário'
        },
        item7: {
          mediaAria: 'Abrir imagem do portfólio Jardim',
          mediaAlt: 'Portfólio Jardim',
          projectAlt: 'Projeto Jardim',
          title: 'Verde Vivo',
          body: 'Web design para serviços verdes com identidade natural, copy direto e foco no pedido de orçamento.',
          tag: 'Serviços Verdes'
        },
        item8: {
          mediaAria: 'Abrir imagem do portfólio Pizza',
          mediaAlt: 'Portfólio Pizza',
          projectAlt: 'Projeto Pizza',
          title: "Forno d'Oro",
          body: 'Página de restaurante orientada a vendas com menu em destaque, ofertas estratégicas e contato imediato.',
          tag: 'Pizzaria'
        },
        item9: {
          mediaAria: 'Abrir imagem do portfólio Salone',
          mediaAlt: 'Portfólio Salone',
          projectAlt: 'Projeto Salone',
          title: 'Vittorino Baber',
          body: 'Presença digital barber com imagem premium, serviços claros e percurso simples para agendamentos.',
          tag: 'Barbearia'
        }
      },
      pricing: {
        title: 'Preços claros, valor real',
        subtitle: 'Três pacotes para começar agora com um site elegante e pronto para vender.',
        basic: {
          tier: 'Basic',
          item1: 'Landing page essencial',
          item2: 'Design personalizado',
          item3: 'SEO base e performance',
          item4: 'Entrega rápida'
        },
        premium: {
          tier: 'Premium',
          item1: 'Seção de serviços + CTA',
          item2: 'Copy estratégico',
          item3: 'Otimização de conversão',
          item4: 'Suporte por 7 dias'
        },
        gold: {
          tier: 'Gold',
          item1: 'Multipage ou landing avançada',
          item2: 'Animações premium',
          item3: 'Setup de analytics',
          item4: 'Suporte por 14 dias'
        }
      },
      reviews: {
        sectionTitle: 'Avaliações de clientes',
        sectionSubtitle: 'Opiniões reais de empresas e profissionais que escolheram a EtzahWeb para melhorar a presença online.',
        kicker: 'Nossas avaliações',
        swipeHint: 'Arraste para ver mais avaliações →',
        excellent: 'EXCELENTE',
        count: 'Com base em 15 avaliações verificadas',
        google: 'Google',
        starsAria: 'Avaliação 5 de 5',
        prevAria: 'Avaliação anterior',
        nextAria: 'Próxima avaliação',
        item1Meta: 'há 4 semanas',
        item1Quote: 'Agendamento simples, comunicação profissional e entrega impecável. O site transmite muito mais valor para a marca.',
        item2Meta: 'há 5 semanas',
        item2Quote: 'Layout elegante, processo claro e suporte rápido. Os contatos pelo site aumentaram já no primeiro mês.',
        item3Meta: 'há 6 semanas',
        item3Quote: 'Site rápido, mensagem comercial mais clara e muito mais pedidos qualificados. Trabalho muito profissional.',
        item4Meta: 'há 7 semanas',
        item4Quote: 'Experiência bem conduzida do início ao fim. Identidade visual mais forte e contatos muito melhor organizados.',
        item5Meta: 'há 8 semanas',
        item5Quote: 'Estratégia clara, estrutura premium e copy eficiente. Agora o site transmite autoridade em poucos segundos.',
        item6Meta: 'há 2 meses',
        item6Quote: 'Design refinado e navegação limpa. Os clientes encontram os serviços com facilidade e entram em contato mais rápido.',
        item7Meta: 'há 2 meses',
        item7Quote: 'Finalmente um site fácil de gerenciar e bonito de ver. Cardápio, ofertas e contatos ficaram muito mais eficientes.',
        item8Meta: 'há 2 meses',
        item8Quote: 'Imagem mais moderna, informações claras e agendamento muito mais intuitivo. Ótimo equilíbrio entre estética e função.',
        item9Meta: 'há 2 meses',
        item9Quote: 'Landing page muito mais convincente e organizada. Agora as pessoas entendem o serviço rapidamente e pedem informações.',
        item10Meta: 'há 2 meses',
        item10Quote: 'Muito cuidado com os detalhes e com o posicionamento da marca. O site agora parece realmente no nosso nível.',
        item11Meta: 'há 2 meses',
        item11Quote: 'Visual forte, carregamento rápido e contato imediato. Exatamente o salto de qualidade que estávamos procurando.',
        item12Meta: 'há 3 meses',
        item12Quote: 'Site mais leve, confiável e bem organizado. A experiência no mobile também ficou excelente.',
        item13Meta: 'há 3 meses',
        item13Quote: 'Apresentação mais profissional, páginas mais legíveis e funil comercial mais claro. Serviço sério e pontual.',
        item14Meta: 'há 3 meses',
        item14Quote: 'Muito satisfeita com o resultado: design limpo, atmosfera certa e navegação mais simples para os clientes.',
        item15Meta: 'há 3 meses',
        item15Quote: 'Competência técnica evidente e ótima organização do projeto. O novo site transmite mais confiança e converte melhor.'
      },
      benefits: {
        titlePrefix: 'COMO UM SITE',
        titleHighlight: 'PROFISSIONAL',
        titleSuffixLead: 'AJUDA O SEU',
        titleSuffixAccent: 'NEGÓCIO?',
        subtitle: '6 razões pelas quais um site profissional é essencial para o seu negócio',
        item1: {
          title: 'Seja encontrado',
          body: 'Crie sua empresa online e mostre seus produtos e serviços para o mundo, 24/7.'
        },
        item2: {
          title: 'Venda mais',
          body: 'Ofereça seus produtos ou serviços online e facilite a compra para seus clientes.'
        },
        item3: {
          title: 'Credibilidade instantânea',
          body: 'Ganhe a confiança dos clientes com um site profissional que mostre a seriedade do seu negócio.'
        },
        item4: {
          title: 'Marketing imbatível',
          body: 'Atraia novos clientes e fidelize os existentes com ferramentas poderosas e personalizadas.'
        },
        item5: {
          title: 'Venda sem parar',
          body: 'Seu site trabalha para você 24 horas por dia, 7 dias por semana, mesmo quando você está dormindo.'
        },
        item6: {
          title: 'Fique à frente',
          body: 'Seja competitivo e supere seus concorrentes com um site moderno e eficiente.'
        }
      },
      blog: {
        sectionTitle: 'Blog',
        sectionSubtitle: 'Por que o design responsivo é essencial para atrair mais clientes online.',
        articleTitle: 'A importância do design responsivo para atrair mais clientes',
        imageAlt: 'Capa do artigo sobre design responsivo',
        intro: 'No mundo digital de hoje, onde a acessibilidade e a experiência do usuário são cruciais para o sucesso online, o design responsivo emergiu como um elemento essencial para qualquer site. A capacidade de oferecer uma experiência consistente e de qualidade em diferentes dispositivos é fundamental para atrair e reter clientes.',
        whatTitle: 'O que é design responsivo?',
        whatBody: 'O design responsivo é uma abordagem de design web que garante que um site se adapte e funcione perfeitamente em uma variedade de dispositivos e tamanhos de tela, desde desktops e laptops até smartphones e tablets. Isso é alcançado por meio de layouts flexíveis, imagens redimensionáveis e media queries, que ajustam o estilo e o layout com base nas características do dispositivo do usuário.',
        uxTitle: 'A experiência do usuário em primeiro lugar',
        uxBody: 'Um dos principais benefícios do design responsivo é a melhoria da experiência do usuário. Quando os visitantes acessam um site que se adapta perfeitamente ao seu dispositivo, a navegação se torna mais agradável, intuitiva e eficiente. Não há necessidade de zoom excessivo ou rolagem horizontal para consumir o conteúdo, o que reduz atrito e aumenta o engajamento.',
        mobileTitle: 'A importância do mobile-first',
        mobileBody: 'Com o aumento do uso de dispositivos móveis para acessar a internet, adotar uma abordagem mobile-first tornou-se essencial. Isso significa projetar primeiro para a experiência móvel e depois expandir para desktops e outros dispositivos. Ao priorizar a versão móvel, você responde melhor ao comportamento atual dos usuários e pode conquistar taxas de conversão mais altas.',
        seoTitle: 'Impacto no SEO e na visibilidade online',
        seoBody: 'Além de melhorar a experiência do usuário, o design responsivo também impacta positivamente o SEO. Motores de busca como o Google favorecem sites otimizados para dispositivos móveis, e ter uma única URL para todas as versões simplifica a indexação. Isso pode gerar melhor posicionamento, mais tráfego orgânico e mais oportunidades de negócio.',
        whyTitle: 'Mas por que o design responsivo é tão importante?',
        point1Title: 'Experiência do usuário incomparável:',
        point1Body: 'um site responsivo garante que seus visitantes tenham uma experiência agradável e intuitiva em qualquer dispositivo, aumentando permanência, engajamento e retorno.',
        point2Title: 'Aumento nas conversões e vendas:',
        point2Body: 'uma navegação mais clara e acessível facilita contatos, compras e pedidos, convertendo mais visitantes em clientes.',
        point3Title: 'Melhor posicionamento nos resultados de busca:',
        point3Body: 'Google e outros mecanismos de busca priorizam sites responsivos, aumentando as chances de aparecer nas primeiras posições.',
        point4Title: 'Alcance de um público mais amplo:',
        point4Body: 'um site responsivo permite alcançar também quem acessa a internet principalmente pelo celular, hoje a maior parte dos usuários.',
        point5Title: 'Fortalecimento da imagem da marca:',
        point5Body: 'mostra profissionalismo, cuidado com a experiência do usuário e atenção às tendências do mercado, aumentando confiança e credibilidade.',
        conclusionTitle: 'Conclusão',
        conclusionBody: 'Em um mundo cada vez mais conectado e móvel, o design responsivo deixou de ser opcional. Ele é uma necessidade para qualquer negócio que queira atrair, envolver e converter seu público. Ao criar ou atualizar o seu site, priorizar o design responsivo significa investir em credibilidade, visibilidade online e resultados concretos.'
      },
      faq: {
        sectionTitle: 'FAQ - Perguntas Frequentes',
        item1: {
          question: 'Qual a importância de um site para minha empresa?',
          answer: 'Um site profissional aumenta a credibilidade, facilita o contato com novos clientes e mantém a sua empresa visível 24 horas por dia. Ele funciona como uma ferramenta comercial que fortalece a marca e ajuda a transformar visitas em oportunidades reais.'
        },
        item2: {
          question: 'O que é hospedagem de site?',
          answer: 'Hospedagem é o serviço que mantém o seu site online em um servidor. Em outras palavras, é o espaço onde os arquivos do site ficam armazenados para que qualquer pessoa possa acessá-lo pela internet.'
        },
        item3: {
          question: 'Quanto custa para desenvolver um site?',
          answer: 'O valor depende dos objetivos do projeto, quantidade de páginas, nível de personalização e funcionalidades necessárias. Um site institucional simples custa menos do que uma loja virtual ou uma landing page com integrações mais avançadas.'
        },
        item4: {
          question: 'O que é E-mail Profissional?',
          answer: 'É um endereço de email personalizado com o domínio da sua empresa, por exemplo nome@suaempresa.com. Ele transmite mais confiança, reforça a imagem da marca e torna a comunicação mais profissional.'
        },
        item5: {
          question: 'Quais os gastos eu tenho para manter um site?',
          answer: 'Os custos mais comuns são domínio, hospedagem e possível manutenção técnica ou atualizações. Dependendo do projeto, também podem existir custos extras com email profissional, backup, SEO ou ferramentas integradas.'
        },
        item6: {
          question: 'O que é o Domínio de um site?',
          answer: 'Domínio é o endereço do seu site na internet, como etzahweb.com. É o nome que as pessoas digitam para encontrar sua empresa online e faz parte importante da sua identidade digital.'
        },
        item7: {
          question: 'Meu site irá aparecer no sistema de busca do Google?',
          answer: 'Sim, depois que o Google indexa o site ele pode aparecer nos resultados de busca. Mas para ganhar mais visibilidade é preciso ter boa estrutura, conteúdo relevante, velocidade, SEO técnico e consistência ao longo do tempo.'
        },
        item8: {
          question: 'Qual domínio eu devo escolher?',
          answer: 'O ideal é escolher um domínio curto, fácil de lembrar, simples de escrever e alinhado ao nome do seu negócio. Sempre que possível, vale evitar hífens, palavras complicadas ou variações difíceis de comunicar.'
        },
        item9: {
          question: 'Qual a diferença entre site institucional, loja virtual, blog e LP?',
          answer: 'O site institucional apresenta a empresa e os serviços; a loja virtual vende produtos; o blog publica conteúdos e artigos; e a landing page é uma página focada em uma única oferta ou campanha, criada para gerar uma conversão específica.'
        },
        item10: {
          question: 'O que é SEO?',
          answer: 'SEO significa otimização para mecanismos de busca. Envolve estrutura técnica, conteúdo, performance e estratégia de palavras-chave para ajudar seu site a aparecer melhor no Google e atrair tráfego qualificado.'
        }
      },
      contact: {
        title: 'Vamos colocar seu projeto no ar?',
        subtitle: 'Envie seus dados e retorno em até 24h com uma proposta clara e objetiva.',
        card1: {
          label: 'Canal ',
          value: 'Instagram'
        },
        card2: {
          label: 'Canal ',
          value: 'WhatsApp'
        },
        mapLabel: 'Localização ',
        mapValue: 'Bellinzona, Suíça',
        mapLink: 'Abrir no Google Maps'
      },
      form: {
        nameLabel: 'Nome completo',
        namePlaceholder: 'Ex: Larissa Rocha',
        emailLabel: 'Email profissional',
        emailPlaceholder: 'você@empresa.com',
        phoneLabel: 'WhatsApp',
        phonePlaceholder: 'Ex: +55 11 99999-9999',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Nome da sua empresa',
        messageLabel: 'Conte sobre o projeto',
        messagePlaceholder: 'Site institucional, landing page, automação...',
        submit: 'Enviar proposta',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Retornaremos em até 24h.',
        error: 'Não foi possível enviar. Tente novamente em instantes.',
        authRequired: 'Faça login para enviar a mensagem.'
      },
      footer: {
        tagline: 'Construindo experiências digitais que geram receita e reputação.',
        contactTitle: 'Contato',
        linksTitle: 'Links',
        linksPrivacy: 'Privacidade',
        linksTerms: 'Termos',
        copyright: '© 2026 EtzahWeb. Todos os direitos reservados.'
      },
      footerShowcase: {
        brandDescription: 'A EtzahWeb é um estúdio digital especializado em sites profissionais, estratégias orientadas a resultados e suporte contínuo para empresas e profissionais.',
        quickTitle: 'Links rápidos',
        home: 'Home',
        about: 'Quem somos',
        services: 'Serviços',
        portfolio: 'Portfólio',
        blog: 'Blog',
        faq: 'FAQ',
        quote: 'Solicitar orçamento',
        servicesTitle: 'Serviços',
        service1: 'Criação de sites sob medida',
        service2: 'Landing pages de alta conversão',
        service3: 'SEO técnico e otimização',
        service4: 'Automações e integrações',
        contactInfoTitle: 'Informações de contato',
        contactInfoBody: 'Fique à vontade para entrar em contato conosco.',
        privacyPolicy: 'Privacidade e Política'
      },
      ui: {
        menuAria: 'Menu',
        languageAria: 'Idioma',
        scrollDownAria: 'Role para baixo',
        lightboxDialogAria: 'Visualização da imagem do portfólio',
        lightboxCloseAria: 'Fechar imagem'
      },
      cookie: {
        title: 'Informativo',
        bodyPrefix: 'Nós e terceiros selecionados usamos cookies ou tecnologias semelhantes para finalidades técnicas e, com o seu consentimento, também para outras finalidades conforme especificado na',
        policyLink: 'política de cookies',
        bodySuffix: '.',
        learnMore: 'Saiba mais',
        accept: 'Aceitar',
        bannerAriaLabel: 'Aviso de cookies',
        closeAriaLabel: 'Fechar aviso de cookies'
      },
      privacy: {
        headTitle: 'Política de Privacidade | EtzahWeb',
        headDescription: 'Política de privacidade da EtzahWeb.',
        title: 'Política de Privacidade',
        updated: 'Atualizada em 07/02/2026.',
        intro: 'A EtzahWeb trata os dados pessoais fornecidos pelo formulário de contato para responder solicitações, enviar propostas e gerenciar comunicações comerciais.',
        dataTitle: 'Dados coletados',
        dataBody: 'Nome, email, empresa e mensagem enviada voluntariamente.',
        purposeTitle: 'Finalidade do tratamento',
        purposeBody: 'Contatar o lead, preparar propostas, melhorar o serviço e cumprir eventuais obrigações legais.',
        retentionTitle: 'Retenção',
        retentionBody: 'Os dados são armazenados pelo tempo necessário para tratar a solicitação e por obrigações administrativas.',
        rightsTitle: 'Direitos do titular',
        rightsBody: 'Você pode solicitar acesso, retificação ou exclusão dos dados escrevendo para contato@etzahweb.com.',
        contactTitle: 'Contato',
        contactBody: 'Para qualquer dúvida, escreva para contato@etzahweb.com.'
      },
      terms: {
        headTitle: 'Termos de Serviço | EtzahWeb',
        headDescription: 'Termos de serviço da EtzahWeb.',
        title: 'Termos de Serviço',
        updated: 'Atualizados em 07/02/2026.',
        scopeTitle: 'Escopo',
        scopeBody: 'Estes termos regulam o uso do site EtzahWeb e a solicitação de orçamentos ou serviços digitais.',
        proposalsTitle: 'Propostas e pagamentos',
        proposalsBody: 'As propostas são enviadas sob solicitação. Pagamentos, prazos e condições específicas são definidos no contrato ou na proposta aprovada.',
        liabilityTitle: 'Responsabilidade',
        liabilityBody: 'A EtzahWeb não se responsabiliza por interrupções do serviço por motivos de força maior ou terceiros.',
        ipTitle: 'Propriedade intelectual',
        ipBody: 'Textos, layout e materiais criados permanecem propriedade da EtzahWeb até o pagamento integral.',
        changesTitle: 'Alterações',
        changesBody: 'Os termos podem ser atualizados. As versões publicadas nesta página são as vigentes.',
        contactTitle: 'Contato',
        contactBody: 'Para dúvidas sobre os termos, escreva para contato@etzahweb.com.'
      },
      login: {
        headTitle: 'Área interna | EtzahWeb',
        headDescription: 'Área interna desativada na versão estática do site EtzahWeb.',
        title: 'Área interna removida',
        subtitle: 'Este site agora funciona sem backend. As mensagens do formulário são enviadas diretamente para contato@etzahweb.com.',
        emailLabel: 'Usuário',
        emailPlaceholder: 'admin',
        passwordLabel: 'Senha',
        passwordPlaceholder: '********',
        submit: 'Entrar',
        verifying: 'Verificando...',
        error: 'Email ou senha incorretos.'
      },
      admin: {
        headTitle: 'Informações | EtzahWeb',
        headDescription: 'Página informativa da versão estática da EtzahWeb.',
        title: 'Caixa de mensagens removida',
        subtitle: 'Na versão estática do site, os contatos chegam diretamente por email e não ficam salvos em um painel interno.',
        titleInbox: 'Mensagens recebidas',
        subtitleInbox: 'Acompanhe leads e responda rapidamente.',
        titleTrash: 'Mensagens na lixeira',
        subtitleTrash: 'Gerencie os itens removidos da caixa de entrada.',
        inboxBtn: 'Entrada',
        trashBtn: 'Lixeira',
        refresh: 'Atualizar',
        logout: 'Sair',
        loading: 'Carregando mensagens...',
        emptyTitle: 'Recebimento direto por email',
        emptyBody: 'Use o formulário principal da home para receber novas solicitações em contato@etzahweb.com.',
        trashEmptyTitle: 'Lixeira vazia',
        trashEmptyBody: 'As mensagens apagadas aparecem aqui.',
        noneFound: 'Nenhuma mensagem encontrada.',
        trashNoneFound: 'Nenhuma mensagem na lixeira.',
        loaded: 'mensagens carregadas.',
        error: 'Erro ao buscar mensagens. Verifique o login.',
        deleteBtn: 'Mover para lixeira',
        purgeBtn: 'Excluir',
        deleteConfirm: 'Mover esta mensagem para a lixeira?',
        purgeConfirm: 'Excluir definitivamente esta mensagem?',
        deletedStatus: 'Mensagem movida para a lixeira.',
        purgedStatus: 'Mensagem excluída definitivamente.',
        actionError: 'Não foi possível atualizar a mensagem.',
        leadName: 'Lead sem nome',
        emailLabel: 'Email',
        emailFallback: 'não informado',
        phoneLabel: 'WhatsApp',
        phoneFallback: 'não informado',
        companyLabel: 'Empresa',
        companyFallback: 'não informada',
        messageLabel: 'Mensagem',
        messageFallback: 'Sem mensagem',
        actionsAria: 'Ações administrativas'
      }
    },
    en: {
      head: {
        title: 'EtzahWeb | Websites, Landing Pages, SEO & Automation',
        description: 'Digital studio specialized in custom websites, high-converting landing pages, technical SEO, and automation.'
      },
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        blog: 'Blog',
        faq: 'FAQ',
        process: 'Process',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      hero: {
        eyebrow: 'Custom projects for ambitious brands',
        title: 'Increase your sales and reach more clients with a professional website.',
        titleLine1: 'Increase your sales and reach more clients',
        titleLine2: 'with a professional website.',
        titleLine3: '',
        subtitle: 'Strategic design, performance, and automation to accelerate sales, build authority, and simplify your funnel.',
        ctaPrimary: 'Request a quote',
        ctaSecondary: 'About us',
        metric1: 'Leads in 90 days',
        metric2: 'to first delivery',
        metric3: 'average rating',
        dashboard: 'Live Dashboard',
        status: 'Online',
        conversion: 'Conversion',
        ticket: 'Tickets',
        ticketValue: 'USD 8,400'
      },
      services: {
        title: 'Services that grow your revenue',
        subtitle: 'Complete digital architecture for teams that need fast, sustainable results.',
        card1: {
          title: 'Premium Landing Pages',
          body: 'Conversion-focused pages with strategic copy and 95+ Lighthouse performance.',
          tag: 'Fast delivery'
        },
        card2: {
          title: 'Company Websites',
          body: 'Elegant digital presence with SEO, scalable content, and coherent visual identity.',
          tag: 'High credibility'
        },
        card3: {
          title: 'Automation & Funnels',
          body: 'Integrations with CRM, WhatsApp + Email so no lead is lost.',
          tag: 'Smart processes'
        }
      },
      about: {
        titleLine1: 'What We Can Create',
        titleLine2: 'For Your',
        titleAccent: 'Business',
        intro: 'A website goes far beyond a simple online page. It is the front door to your brand: it presents your services, strengthens your credibility, and helps turn visits into real inquiries.',
        card1: {
          title: 'Company website',
          body: 'Present your business, services, and strengths with a clear, professional presence that is easy to navigate.'
        },
        card2: {
          title: 'Landing Pages',
          body: 'Pages designed for campaigns, offers, or launches, with a structure built to increase leads and conversions.'
        },
        card3: {
          title: 'Online store',
          body: 'Sell online with an elegant, fast store optimized to guide your customer smoothly to purchase.'
        },
        card4: {
          title: 'Blog and news',
          body: 'Create an editorial area for articles, updates, and SEO content that builds authority and visibility.'
        },
        card5: {
          title: 'Digital card',
          body: 'A compact, modern presence to share instantly with clients and contacts, ideal for social media and networking.'
        },
        card6: {
          title: 'Custom website',
          body: 'Tailor-made solutions for specific needs, with design, features, and structure built around your business.'
        },
        cta: 'I want to create my website',
        real: {
          title: 'Real portfolio and reviews',
          body: 'Transparency is at the core of our work. We provide verifiable portfolios and authentic client reviews, because results speak louder than promises.'
        },
        full: {
          title: 'Complete services, from design to development',
          intro: 'We manage every project end to end:',
          item1: 'Analysis and strategy',
          item2: 'Professional web design',
          item3: 'Technical development',
          item4: 'SEO optimization',
          item5: 'WhatsApp, forms, and conversion tool integrations',
          outro: 'With EtzahWeb, you get one partner for the entire digital process.'
        },
        exp: {
          title: 'Proven experience',
          body: 'We work with local businesses, professionals, and companies that want to improve their online presence. Our cross-industry experience helps us build effective, targeted, market-oriented solutions.'
        },
        quote: {
          title: 'Transparent quotes',
          body: 'No surprises and no hidden costs. We provide clear, detailed proposals so you know exactly what you are buying and what value you are getting.'
        },
        support: {
          title: 'Support after launch',
          body: 'Our work does not end when the site goes live. We provide technical and post-launch support to ensure security, updates, and operational continuity.'
        },
        tech: {
          title: 'Modern and secure technologies',
          body: 'We use up-to-date, secure, scalable platforms designed to grow with your business and keep strong performance over time.'
        },
        custom: {
          title: 'Custom websites, not generic templates',
          body: 'Every project is custom. We do not use standardized solutions: your website should reflect your identity, values, and business goals.'
        }
      },
      founder: {
        title: 'Who I Am',
        imageAlt: 'Portrait of Kallebe Gallo',
        p1Intro: 'My name is',
        p1FirstName: 'Kallebe',
        p1LastName: 'Gallo',
        p1Line2Rest: ' and I am a Full Stack',
        p1Line3: 'Developer and founder of EtzahWeb.',
        p2Lead: 'Over the past 5 years',
        p2Rest: ' I have been dedicated to building modern, responsive, and engaging websites that deliver both strong performance and an excellent user experience. My journey in development started with a deep curiosity for how digital products are built, which quickly turned into a professional path focused on creating complete web solutions, from backend architecture to user-facing interfaces.',
        p3Lead: 'Secure systems, scalable applications, and responsive design',
        p3Rest: ' are part of my daily work. I build visually refined platforms tailored to different needs, ensuring that every interaction feels smooth, intuitive, and consistent across devices.',
        p4Lead: 'With EtzahWeb, my goal',
        p4Rest: ' is to provide high-quality digital solutions that combine technical excellence with creative design, helping businesses grow and establish a strong online presence.'
      },
      process: {
        title: 'Clear process, no fluff',
        subtitle: 'From discovery to final delivery, you track everything with transparency.',
        step1: {
          title: 'Strategic briefing',
          body: 'We map your audience, value proposition, and goals.'
        },
        step2: {
          title: 'Design and copy',
          body: 'Premium layout with persuasive messaging and social proof.'
        },
        step3: {
          title: 'Development',
          body: 'Clean, optimized code ready to scale.'
        },
        step4: {
          title: 'Delivery and support',
          body: 'Training, final tweaks, and early support.'
        }
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Explore some professional websites I have created.',
        viewProject: 'View project',
        item1: {
          mediaAria: 'Open Academia portfolio image',
          mediaAlt: 'Academia portfolio',
          projectAlt: 'Academia project',
          title: 'North Peak Gold',
          body: 'Premium landing page for a fitness brand with strong visuals, instant credibility, and high-converting CTAs.',
          tag: 'Premium Fitness'
        },
        item2: {
          mediaAria: 'Open Curso portfolio image',
          mediaAlt: 'Curso portfolio',
          projectAlt: 'Curso project',
          title: 'Serfrontend',
          body: 'Course page with a clear offer, social proof, and an optimized journey to increase enrollments.',
          tag: 'Online Course'
        },
        item3: {
          mediaAria: 'Open Dentista portfolio image',
          mediaAlt: 'Dentista portfolio',
          projectAlt: 'Dentista project',
          title: 'Odentrics',
          body: 'Elegant dental website focused on clinical trust, key services, and simplified booking.',
          tag: 'Dental Care'
        },
        item4: {
          mediaAria: 'Open Garage portfolio image',
          mediaAlt: 'Garage portfolio',
          projectAlt: 'Garage project',
          title: 'Garage Ticino',
          body: 'Digital presence for a premium garage with structured services and quick appointment contact.',
          tag: 'Automotive'
        },
        item5: {
          mediaAria: 'Open Hamburguer portfolio image',
          mediaAlt: 'Hamburguer portfolio',
          projectAlt: 'Hamburguer project',
          title: 'Bella Burguer Atelier',
          body: 'High-impact food showcase with strong brand storytelling and fast flows for orders and bookings.',
          tag: 'Gourmet Burger'
        },
        item6: {
          mediaAria: 'Open Imobiliaria portfolio image',
          mediaAlt: 'Imobiliaria portfolio',
          projectAlt: 'Imobiliaria project',
          title: 'Imperium',
          body: 'Real estate website with strong positioning, featured properties, and well-placed commercial CTAs.',
          tag: 'Real Estate'
        },
        item7: {
          mediaAria: 'Open Jardim portfolio image',
          mediaAlt: 'Jardim portfolio',
          projectAlt: 'Jardim project',
          title: 'Verde Vivo',
          body: 'Web design for green services with natural identity, direct copy, and quote-focused conversion.',
          tag: 'Green Services'
        },
        item8: {
          mediaAria: 'Open Pizza portfolio image',
          mediaAlt: 'Pizza portfolio',
          projectAlt: 'Pizza project',
          title: "Forno d'Oro",
          body: 'Restaurant page built for sales with highlighted menu, strategic offers, and immediate contact.',
          tag: 'Pizzeria'
        },
        item9: {
          mediaAria: 'Open Salone portfolio image',
          mediaAlt: 'Salone portfolio',
          projectAlt: 'Salone project',
          title: 'Vittorino Baber',
          body: 'Barber digital presence with premium branding, clear services, and an easy booking path.',
          tag: 'Barber Shop'
        }
      },
      pricing: {
        title: 'Clear pricing, real value',
        subtitle: 'Three packages to launch quickly with an elegant, sales-ready website.',
        basic: {
          tier: 'Basic',
          item1: 'Essential landing page',
          item2: 'Custom design',
          item3: 'Basic SEO and performance',
          item4: 'Fast delivery'
        },
        premium: {
          tier: 'Premium',
          item1: 'Services section + CTA',
          item2: 'Strategic copywriting',
          item3: 'Conversion optimization',
          item4: '7-day support'
        },
        gold: {
          tier: 'Gold',
          item1: 'Multipage or advanced landing',
          item2: 'Premium animations',
          item3: 'Analytics setup',
          item4: '14-day support'
        }
      },
      reviews: {
        sectionTitle: 'Client reviews',
        sectionSubtitle: 'Real feedback from companies and professionals who chose EtzahWeb to improve their online presence.',
        kicker: 'Our reviews',
        swipeHint: 'Swipe to see more reviews →',
        excellent: 'EXCELLENT',
        count: 'Based on 15 verified reviews',
        google: 'Google',
        starsAria: '5 out of 5 rating',
        prevAria: 'Previous review',
        nextAria: 'Next review',
        item1Meta: '4 weeks ago',
        item1Quote: 'Simple booking, professional communication and flawless delivery. The site gives the brand much more value right away.',
        item2Meta: '5 weeks ago',
        item2Quote: 'Elegant layout, clear process and fast support. Website inquiries increased in the very first month.',
        item3Meta: '6 weeks ago',
        item3Quote: 'Fast website, clearer commercial message and many more qualified requests. Very professional work.',
        item4Meta: '7 weeks ago',
        item4Quote: 'A carefully managed experience from start to finish. Stronger visual identity and much better organized contacts.',
        item5Meta: '8 weeks ago',
        item5Quote: 'Clear strategy, premium structure and effective copy. The site now communicates authority within seconds.',
        item6Meta: '2 months ago',
        item6Quote: 'Refined design and a clean user journey. Clients find services quickly and contact us more easily.',
        item7Meta: '2 months ago',
        item7Quote: 'Finally a website that is easy to manage and beautiful to see. Menu, offers and contact flow work much better now.',
        item8Meta: '2 months ago',
        item8Quote: 'More modern image, clear information and a much more intuitive booking flow. Great balance between aesthetics and function.',
        item9Meta: '2 months ago',
        item9Quote: 'A much more convincing and organized landing page. People now understand the service quickly and ask for information.',
        item10Meta: '2 months ago',
        item10Quote: 'A lot of attention to detail and brand positioning. The site now truly feels aligned with our level.',
        item11Meta: '2 months ago',
        item11Quote: 'Strong visual presence, fast loading and immediate contact flow. Exactly the quality jump we were looking for.',
        item12Meta: '3 months ago',
        item12Quote: 'A brighter, more credible and better organized website. The mobile experience was also handled really well.',
        item13Meta: '3 months ago',
        item13Quote: 'More authoritative presentation, easier-to-read pages and a clearer sales funnel. Serious and punctual service.',
        item14Meta: '3 months ago',
        item14Quote: 'Very happy with the result: clean design, the right atmosphere and simpler navigation for clients.',
        item15Meta: '3 months ago',
        item15Quote: 'Clear technical competence and excellent project organization. The new site inspires more trust and converts better.'
      },
      benefits: {
        titlePrefix: 'HOW A',
        titleHighlight: 'PROFESSIONAL',
        titleSuffixLead: 'WEBSITE HELPS YOUR',
        titleSuffixAccent: 'BUSINESS?',
        subtitle: '6 reasons why a website is essential for your business',
        item1: {
          title: 'Be found',
          body: 'Put your business online and show your products or services to more people, every day.'
        },
        item2: {
          title: 'Sell more',
          body: 'Present your offer clearly and make it easier for clients to contact you or buy from you.'
        },
        item3: {
          title: 'Instant credibility',
          body: 'A professional website builds trust and shows the seriousness of your business right away.'
        },
        item4: {
          title: 'Stronger marketing',
          body: 'Connect ads, social media, and campaigns to a solid destination built to convert better.'
        },
        item5: {
          title: 'Sell all the time',
          body: 'Your website keeps presenting your business and capturing leads even when you are offline.'
        },
        item6: {
          title: 'Stay ahead',
          body: 'A modern and efficient presence helps you stand out and stay competitive in your market.'
        }
      },
      blog: {
        sectionTitle: 'Blog',
        sectionSubtitle: 'Why responsive design is essential to attract more customers online.',
        articleTitle: 'The importance of responsive design to attract more customers',
        imageAlt: 'Responsive design article cover',
        intro: 'In today\'s digital world, where accessibility and user experience are crucial to online success, responsive design has become an essential element for any website. The ability to deliver a consistent, high-quality experience across different devices is fundamental to attracting and retaining customers.',
        whatTitle: 'What is responsive design?',
        whatBody: 'Responsive design is a web design approach that ensures a website adapts and works smoothly across a wide range of devices and screen sizes, from desktops and laptops to smartphones and tablets. This is achieved through flexible layouts, scalable images, and media queries that adjust the site based on the user\'s device.',
        uxTitle: 'User experience comes first',
        uxBody: 'One of the biggest advantages of responsive design is the improvement of user experience. When visitors land on a site that fits perfectly on their device, navigation becomes smoother, more intuitive, and more enjoyable. There is no need for excessive zooming or horizontal scrolling, which reduces friction and keeps users engaged.',
        mobileTitle: 'The importance of mobile-first',
        mobileBody: 'With the growth of mobile internet usage, adopting a mobile-first approach has become essential. This means designing the site first for mobile and then expanding it to desktops and other devices. By prioritizing the mobile version, you align the experience with real user behavior and open the door to higher conversion rates.',
        seoTitle: 'Impact on SEO and online visibility',
        seoBody: 'Besides improving user experience, responsive design also has a positive impact on SEO. Search engines such as Google favor mobile-optimized websites, and having one URL for all versions simplifies indexing. This can lead to better rankings, more organic traffic, and more business opportunities.',
        whyTitle: 'But why is responsive design so important?',
        point1Title: 'Outstanding user experience:',
        point1Body: 'a responsive website gives visitors a pleasant and intuitive experience on any device, increasing engagement, time on site, and the chance of returning.',
        point2Title: 'More conversions and sales:',
        point2Body: 'clearer navigation and better accessibility make it easier for visitors to contact you, request quotes, or buy.',
        point3Title: 'Better search result positioning:',
        point3Body: 'Google and other search engines prioritize responsive sites, improving your chances of appearing among the top results.',
        point4Title: 'Broader audience reach:',
        point4Body: 'a responsive website lets you reach people who browse mainly on mobile devices, now the largest share of internet users.',
        point5Title: 'Stronger brand image:',
        point5Body: 'it shows professionalism, care for user experience, and attention to market expectations, increasing trust and credibility.',
        conclusionTitle: 'Conclusion',
        conclusionBody: 'In an increasingly connected and mobile world, responsive design is no longer optional. It is a necessity for any business that wants to attract, engage, and convert its target audience. When creating or updating your website, prioritizing responsive design means investing in credibility, online visibility, and real results.'
      },
      faq: {
        sectionTitle: 'FAQ - Frequently Asked Questions',
        item1: {
          question: 'Why is a website important for my business?',
          answer: 'A professional website increases credibility, makes it easier for new customers to contact you, and keeps your business visible 24/7. It works as a commercial tool that strengthens your brand and turns visits into real opportunities.'
        },
        item2: {
          question: 'What is website hosting?',
          answer: 'Hosting is the service that keeps your website online on a server. In practice, it is the space where your site files are stored so people can access them on the internet at any time.'
        },
        item3: {
          question: 'How much does it cost to build a website?',
          answer: 'The price depends on your goals, number of pages, level of customization, and required features. A simple company website costs less than an online store or a landing page with advanced integrations.'
        },
        item4: {
          question: 'What is a professional email?',
          answer: 'It is a custom email address using your company domain, such as name@yourcompany.com. It builds more trust, reinforces your brand image, and makes communication look more professional.'
        },
        item5: {
          question: 'What costs are involved in maintaining a website?',
          answer: 'The most common costs are domain, hosting, and possible technical maintenance or updates. Depending on the project, there may also be extra costs for professional email, backup, SEO, or integrated tools.'
        },
        item6: {
          question: 'What is a website domain?',
          answer: 'A domain is your website address on the internet, such as etzahweb.com. It is the name people type to find your business online and an important part of your digital identity.'
        },
        item7: {
          question: 'Will my website appear in Google search?',
          answer: 'Yes, once Google indexes your website it can appear in search results. But to gain stronger visibility, you need good structure, relevant content, speed, technical SEO, and consistency over time.'
        },
        item8: {
          question: 'Which domain should I choose?',
          answer: 'The best choice is a short domain that is easy to remember, simple to type, and aligned with your business name. Whenever possible, avoid hyphens, complex words, or variations that are hard to communicate.'
        },
        item9: {
          question: 'What is the difference between a company website, online store, blog, and landing page?',
          answer: 'A company website presents your business and services; an online store sells products; a blog publishes content and articles; and a landing page is focused on a single offer or campaign designed to generate a specific conversion.'
        },
        item10: {
          question: 'What is SEO?',
          answer: 'SEO stands for search engine optimization. It includes technical structure, content, performance, and keyword strategy to help your website rank better on Google and attract qualified traffic.'
        }
      },
      contact: {
        title: 'Ready to launch your project?',
        subtitle: 'Send your details and get a reply within 24h with a clear proposal.',
        card1: {
          label: 'Channel ',
          value: 'Instagram'
        },
        card2: {
          label: 'Channel ',
          value: 'WhatsApp'
        },
        mapLabel: 'Location ',
        mapValue: 'Bellinzona, Switzerland',
        mapLink: 'Open in Google Maps'
      },
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'e.g. Larissa Rocha',
        emailLabel: 'Business email',
        emailPlaceholder: 'you@company.com',
        phoneLabel: 'WhatsApp',
        phonePlaceholder: 'e.g. +1 555 123 4567',
        companyLabel: 'Company',
        companyPlaceholder: 'Your company name',
        messageLabel: 'Tell us about the project',
        messagePlaceholder: 'Company website, landing page, automation...',
        submit: 'Send proposal',
        sending: 'Sending...',
        success: 'Message sent successfully! We will reply within 24h.',
        error: 'Unable to send. Please try again shortly.',
        authRequired: 'Please log in to send the message.'
      },
      footer: {
        tagline: 'Building digital experiences that generate revenue and reputation.',
        contactTitle: 'Contact',
        linksTitle: 'Links',
        linksPrivacy: 'Privacy',
        linksTerms: 'Terms',
        copyright: '© 2026 EtzahWeb. All rights reserved.'
      },
      footerShowcase: {
        brandDescription: 'EtzahWeb is a digital studio specialized in professional websites, results-driven strategies, and ongoing support for companies and professionals.',
        quickTitle: 'Quick links',
        home: 'Home',
        about: 'About us',
        services: 'Services',
        portfolio: 'Portfolio',
        blog: 'Blog',
        faq: 'FAQ',
        quote: 'Request a quote',
        servicesTitle: 'Services',
        service1: 'Custom website creation',
        service2: 'High-converting landing pages',
        service3: 'Technical SEO and optimization',
        service4: 'Automation and integrations',
        contactInfoTitle: 'Contact information',
        contactInfoBody: 'Feel free to contact and reach us.',
        privacyPolicy: 'Privacy & Policy'
      },
      ui: {
        menuAria: 'Menu',
        languageAria: 'Language',
        scrollDownAria: 'Scroll down',
        lightboxDialogAria: 'Portfolio image preview',
        lightboxCloseAria: 'Close image'
      },
      cookie: {
        title: 'Notice',
        bodyPrefix: 'We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the',
        policyLink: 'cookie policy',
        bodySuffix: '.',
        learnMore: 'Learn more',
        accept: 'Accept',
        bannerAriaLabel: 'Cookie notice',
        closeAriaLabel: 'Close cookie notice'
      },
      privacy: {
        headTitle: 'Privacy Policy | EtzahWeb',
        headDescription: 'Privacy policy for EtzahWeb.',
        title: 'Privacy Policy',
        updated: 'Updated on 07/02/2026.',
        intro: 'EtzahWeb processes the personal data provided via the contact form to respond to requests, send proposals, and manage commercial communications.',
        dataTitle: 'Data collected',
        dataBody: 'Name, email, company, and the message submitted voluntarily.',
        purposeTitle: 'Purpose of processing',
        purposeBody: 'Contact the lead, prepare proposals, improve the service, and comply with legal obligations when applicable.',
        retentionTitle: 'Retention',
        retentionBody: 'Data is stored for the time needed to handle the request and for administrative obligations when applicable.',
        rightsTitle: 'Data subject rights',
        rightsBody: 'You can request access, correction, or deletion of data by writing to contato@etzahweb.com.',
        contactTitle: 'Contact',
        contactBody: 'For any questions, write to contato@etzahweb.com.'
      },
      terms: {
        headTitle: 'Terms of Service | EtzahWeb',
        headDescription: 'Terms of service for EtzahWeb.',
        title: 'Terms of Service',
        updated: 'Updated on 07/02/2026.',
        scopeTitle: 'Scope',
        scopeBody: 'These terms govern the use of the EtzahWeb site and the request for quotes or digital services.',
        proposalsTitle: 'Proposals and payments',
        proposalsBody: 'Proposals are sent upon request. Payments, deadlines, and specific conditions are defined in the contract or approved proposal.',
        liabilityTitle: 'Liability',
        liabilityBody: 'EtzahWeb is not responsible for service interruptions due to force majeure or third parties.',
        ipTitle: 'Intellectual property',
        ipBody: 'Texts, layouts, and materials created remain the property of EtzahWeb until agreed fees are fully paid.',
        changesTitle: 'Changes',
        changesBody: 'The terms may be updated. The versions published on this page are the valid ones.',
        contactTitle: 'Contact',
        contactBody: 'For questions about the terms, write to contato@etzahweb.com.'
      },
      login: {
        headTitle: 'Internal Area | EtzahWeb',
        headDescription: 'Internal area disabled in the static version of the EtzahWeb website.',
        title: 'Internal area removed',
        subtitle: 'This website now runs without a backend. Form messages are delivered directly to contato@etzahweb.com.',
        emailLabel: 'Username',
        emailPlaceholder: 'admin',
        passwordLabel: 'Password',
        passwordPlaceholder: '********',
        submit: 'Sign in',
        verifying: 'Checking...',
        error: 'Incorrect email or password.'
      },
      admin: {
        headTitle: 'Information | EtzahWeb',
        headDescription: 'Informational page for the static version of EtzahWeb.',
        title: 'Inbox removed',
        subtitle: 'In the static version of the site, contacts are delivered directly by email and are not stored in an internal dashboard.',
        titleInbox: 'Received messages',
        subtitleInbox: 'Track leads and respond quickly.',
        titleTrash: 'Trash',
        subtitleTrash: 'Manage messages moved to the trash.',
        inboxBtn: 'Inbox',
        trashBtn: 'Trash',
        refresh: 'Refresh',
        logout: 'Log out',
        loading: 'Loading messages...',
        emptyTitle: 'Direct email delivery',
        emptyBody: 'Use the main homepage form to receive new requests at contato@etzahweb.com.',
        trashEmptyTitle: 'Trash is empty',
        trashEmptyBody: 'Deleted messages will appear here.',
        noneFound: 'No messages found.',
        trashNoneFound: 'No messages in trash.',
        loaded: 'messages loaded.',
        error: 'Error fetching messages. Please check login.',
        deleteBtn: 'Move to trash',
        purgeBtn: 'Delete',
        deleteConfirm: 'Move this message to trash?',
        purgeConfirm: 'Delete this message permanently?',
        deletedStatus: 'Message moved to trash.',
        purgedStatus: 'Message deleted permanently.',
        actionError: 'Unable to update the message.',
        leadName: 'Unnamed lead',
        emailLabel: 'Email',
        emailFallback: 'not provided',
        phoneLabel: 'WhatsApp',
        phoneFallback: 'not provided',
        companyLabel: 'Company',
        companyFallback: 'not provided',
        messageLabel: 'Message',
        messageFallback: 'No message',
        actionsAria: 'Admin actions'
      }
    }
  };

  const listeners = new Set();
  let currentLang = 'it';

  const getNestedValue = (obj, path) => path.split('.').reduce((acc, key) => acc && acc[key], obj);

  const setDocumentHead = (langData) => {
    const titleEl = document.querySelector('title[data-i18n-title]');
    const metaDescription = document.querySelector('meta[data-i18n-description]');

    if (titleEl) {
      const titleKey = titleEl.getAttribute('data-i18n-title');
      const titleValue = titleKey ? getNestedValue(langData, titleKey) : langData.head?.title;
      if (typeof titleValue === 'string') {
        titleEl.textContent = titleValue;
      }
    }

    if (metaDescription) {
      const descriptionKey = metaDescription.getAttribute('data-i18n-description');
      const descriptionValue = descriptionKey
        ? getNestedValue(langData, descriptionKey)
        : langData.head?.description;
      if (typeof descriptionValue === 'string') {
        metaDescription.setAttribute('content', descriptionValue);
      }
    }

    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const key = el.getAttribute('data-i18n-content');
      const value = getNestedValue(langData, key);
      if (typeof value === 'string') {
        el.setAttribute('content', value);
      }
    });
  };

  const updateButtons = (lang) => {
    document.querySelectorAll('.lang-btn').forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.setAttribute('aria-pressed', String(isActive));
      button.setAttribute('aria-selected', String(isActive));
    });
  };

  const updateCurrent = (lang) => {
    document.querySelectorAll('[data-lang-switch]').forEach((switchEl) => {
      const current = switchEl.querySelector('.lang-current');
      const label = current?.querySelector('.lang-label');
      const flag = current?.querySelector('.flag');

      if (!current || !label || !flag) return;

      label.textContent = lang.toUpperCase();
      flag.classList.remove('flag-it', 'flag-pt', 'flag-en');
      flag.classList.add(`flag-${lang}`);
    });
  };

  const applyTranslations = (lang) => {
    const langData = translations[lang] || translations.it;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    setDocumentHead(langData);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(langData, key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = getNestedValue(langData, key);
      if (typeof value === 'string') {
        el.setAttribute('placeholder', value);
      }
    });

    const attributeMappings = [
      ['data-i18n-aria-label', 'aria-label'],
      ['data-i18n-title-attr', 'title'],
      ['data-i18n-alt', 'alt'],
      ['data-i18n-data-lightbox-alt', 'data-lightbox-alt']
    ];

    attributeMappings.forEach(([dataAttr, targetAttr]) => {
      document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
        const key = el.getAttribute(dataAttr);
        const value = getNestedValue(langData, key);
        if (typeof value === 'string') {
          el.setAttribute(targetAttr, value);
        }
      });
    });

    updateButtons(lang);
    updateCurrent(lang);
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) {
      return;
    }
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    document.querySelectorAll('[data-lang-switch]').forEach((switchEl) => {
      const current = switchEl.querySelector('.lang-current');
      switchEl.classList.remove('open');
      if (current) current.setAttribute('aria-expanded', 'false');
    });
    listeners.forEach((handler) => handler(lang));
  };

  const init = (options = {}) => {
    const fallback = options.fallback || 'it';
    const safeLang = translations[fallback] ? fallback : 'it';
    const storedLang = localStorage.getItem('lang');
    const initialLang = translations[storedLang] ? storedLang : safeLang;

    document.querySelectorAll('[data-lang-switch]').forEach((switchEl) => {
      const current = switchEl.querySelector('.lang-current');
      const menu = switchEl.querySelector('.lang-menu');

      if (!current || !menu) return;

      current.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = switchEl.classList.toggle('open');
        current.setAttribute('aria-expanded', String(isOpen));
      });

      menu.addEventListener('click', (event) => {
        if (event.target.closest('.lang-btn')) {
          switchEl.classList.remove('open');
          current.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('[data-lang-switch]').forEach((switchEl) => {
        const current = switchEl.querySelector('.lang-current');
        switchEl.classList.remove('open');
        if (current) current.setAttribute('aria-expanded', 'false');
      });
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
      });
    });

    setLanguage(initialLang);
  };

  const onChange = (handler) => {
    if (typeof handler === 'function') {
      listeners.add(handler);
    }
    return () => listeners.delete(handler);
  };

  const t = (key, fallback = '') => {
    const langData = translations[currentLang] || translations.it;
    const value = getNestedValue(langData, key);
    return typeof value === 'string' ? value : fallback;
  };

  window.I18N = {
    init,
    onChange,
    setLanguage,
    t,
    getCurrentLang: () => currentLang
  };
})();
