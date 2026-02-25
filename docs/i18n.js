(function () {
  const translations = {
    it: {
      head: {
        title: 'EtzahWeb | Siti Web, Landing Page, SEO e Automazioni',
        description: 'Studio digitale specializzato in siti web su misura, landing page ad alta conversione, SEO tecnica e automazioni.'
      },
      nav: {
        services: 'Servizi',
        portfolio: 'Portfolio',
        process: 'Processo',
        pricing: 'Prezzi',
        contact: 'Contatto'
      },
      hero: {
        eyebrow: 'Progetti su misura per brand ambiziosi',
        title: 'Trasforma il tuo sito in una macchina di conversione.',
        subtitle: 'Design strategico, performance e automazioni per accelerare le vendite, costruire autorevolezza e semplificare il funnel.',
        ctaPrimary: 'Voglio un preventivo',
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
        title: 'Chi Siamo – EtzahWeb',
        intro: 'EtzahWeb nasce con un obiettivo chiaro: aiutare professionisti e aziende a crescere online con siti web moderni, efficaci e realmente orientati ai risultati. Crediamo che un sito web non sia solo una vetrina, ma uno strumento strategico per generare contatti, aumentare la credibilità e distinguersi dalla concorrenza.',
        real: {
          title: 'Portfolio e recensioni reali',
          body: 'La trasparenza è alla base del nostro lavoro. Mettiamo a disposizione portfolio verificabili e recensioni autentiche dei nostri clienti, perché i risultati parlano più di qualsiasi promessa.'
        },
        full: {
          title: 'Servizi completi, dal design allo sviluppo',
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
        title: 'Portfolio e recensioni verificabili',
        subtitle: 'Valuta lavori reali, opinioni dei clienti e il livello di personalizzazione prima di scegliere il partner giusto.',
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
        sectionSubtitle: 'Testimonianze utili per verificare affidabilità, comunicazione e supporto dopo il lancio.',
        kicker: 'Nostre recensioni',
        swipeHint: 'Scorri per vedere più recensioni →',
        excellent: 'ECCELLENTE',
        count: 'In base a 9 recensioni',
        google: 'Google',
        starsAria: 'Valutazione 5 su 5',
        prevAria: 'Recensione precedente',
        nextAria: 'Recensione successiva',
        item1Meta: 'Andrea Morforio · 3 mesi fa',
        item1Quote: 'Ho affidato a EtzahWeb la realizzazione del mio sito e sono rimasto molto soddisfatto per qualità e tempi.',
        item2Meta: 'RedParrucchieri · 6 mesi fa',
        item2Quote: "Processo chiaro dall'inizio alla fine. Layout elegante e conversioni migliorate già nelle prime settimane.",
        item3Meta: 'C. U. · 6 mesi fa',
        item3Quote: 'Esperienza eccezionale: comunicazione rapida, struttura professionale e supporto concreto dopo il lancio.',
        item4Meta: 'Blend Milano · 7 mesi fa',
        item4Quote: 'Abbiamo incaricato EtzahWeb e il risultato è stato superiore alle aspettative: design premium e codice pulito.',
        item5Meta: 'Cliente verificato · 5 mesi fa',
        item5Quote: 'Brand valorizzato con un sito moderno e veloce. Ordini online aumentati e customer journey più semplice.',
        item6Meta: 'Cliente verificato · 4 mesi fa',
        item6Quote: 'Preventivo trasparente e alta competenza tecnica. Perfetto equilibrio tra immagine, performance e SEO.'
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
        }
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
        about: 'Chi siamo',
        services: 'Servizi',
        portfolio: 'Portfolio',
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
        headTitle: 'Login | EtzahWeb',
        headDescription: 'Accesso amministrativo EtzahWeb.',
        title: 'Area amministrativa',
        subtitle: 'Accedi per visualizzare i messaggi ricevuti.',
        emailLabel: 'Utente',
        emailPlaceholder: 'admin',
        passwordLabel: 'Password',
        passwordPlaceholder: '********',
        submit: 'Entra',
        verifying: 'Verifica in corso...',
        error: 'Email o password non corretti.'
      },
      admin: {
        headTitle: 'Pannello Admin | EtzahWeb',
        headDescription: 'Pannello amministrativo EtzahWeb.',
        title: 'Messaggi ricevuti',
        subtitle: 'Segui i lead e rispondi rapidamente.',
        titleInbox: 'Messaggi ricevuti',
        subtitleInbox: 'Segui i lead e rispondi rapidamente.',
        titleTrash: 'Messaggi eliminati',
        subtitleTrash: 'Gestisci i messaggi spostati nel cestino.',
        inboxBtn: 'In arrivo',
        trashBtn: 'Cestino',
        refresh: 'Aggiorna',
        logout: 'Esci',
        loading: 'Caricamento messaggi...',
        emptyTitle: 'Nessun messaggio per ora',
        emptyBody: 'Quando arrivano nuovi lead, appariranno qui.',
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
        services: 'Serviços',
        portfolio: 'Portfólio',
        process: 'Processo',
        pricing: 'Preços',
        contact: 'Contato'
      },
      hero: {
        eyebrow: 'Projetos sob medida para marcas ambiciosas',
        title: 'Transforme seu site em uma máquina de conversão.',
        subtitle: 'Design estratégico, performance e automações para acelerar vendas, gerar autoridade e simplificar seu funil.',
        ctaPrimary: 'Quero um orçamento',
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
        title: 'Quem Somos – EtzahWeb',
        intro: 'A EtzahWeb nasceu com um objetivo claro: ajudar profissionais e empresas a crescer online com sites modernos, eficazes e orientados a resultados. Acreditamos que um site não é apenas vitrine, mas uma ferramenta estratégica para gerar contatos, aumentar credibilidade e se destacar da concorrência.',
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
        title: 'Portfólio e avaliações verificáveis',
        subtitle: 'Analise trabalhos reais, opiniões de clientes e nível de personalização antes de escolher o parceiro ideal.',
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
        sectionSubtitle: 'Depoimentos úteis para verificar confiabilidade, comunicação e suporte após o lançamento.',
        kicker: 'Nossas avaliações',
        swipeHint: 'Arraste para ver mais avaliações →',
        excellent: 'EXCELENTE',
        count: 'Com base em 9 avaliações',
        google: 'Google',
        starsAria: 'Avaliação 5 de 5',
        prevAria: 'Avaliação anterior',
        nextAria: 'Próxima avaliação',
        item1Meta: 'Andrea Morforio · há 3 meses',
        item1Quote: 'Confiei à EtzahWeb a criação do meu site e fiquei muito satisfeito com qualidade e prazo.',
        item2Meta: 'RedParrucchieri · há 6 meses',
        item2Quote: 'Processo claro do início ao fim. Layout elegante e conversões melhores já nas primeiras semanas.',
        item3Meta: 'C. U. · há 6 meses',
        item3Quote: 'Experiência excelente: comunicação rápida, estrutura profissional e suporte real após o lançamento.',
        item4Meta: 'Blend Milano · há 7 meses',
        item4Quote: 'Contratamos a EtzahWeb e o resultado superou as expectativas: design premium e código limpo.',
        item5Meta: 'Cliente verificado · há 5 meses',
        item5Quote: 'Marca valorizada com um site moderno e rápido. Pedidos online cresceram e a jornada ficou mais simples.',
        item6Meta: 'Cliente verificado · há 4 meses',
        item6Quote: 'Orçamento transparente e alta competência técnica. Equilíbrio perfeito entre imagem, performance e SEO.'
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
        }
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
        about: 'Quem somos',
        services: 'Serviços',
        portfolio: 'Portfólio',
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
        headTitle: 'Login | EtzahWeb',
        headDescription: 'Acesso administrativo EtzahWeb.',
        title: 'Área administrativa',
        subtitle: 'Acesse para visualizar as mensagens recebidas.',
        emailLabel: 'Usuário',
        emailPlaceholder: 'admin',
        passwordLabel: 'Senha',
        passwordPlaceholder: '********',
        submit: 'Entrar',
        verifying: 'Verificando...',
        error: 'Email ou senha incorretos.'
      },
      admin: {
        headTitle: 'Painel Admin | EtzahWeb',
        headDescription: 'Painel administrativo EtzahWeb.',
        title: 'Mensagens recebidas',
        subtitle: 'Acompanhe leads e responda rapidamente.',
        titleInbox: 'Mensagens recebidas',
        subtitleInbox: 'Acompanhe leads e responda rapidamente.',
        titleTrash: 'Mensagens na lixeira',
        subtitleTrash: 'Gerencie os itens removidos da caixa de entrada.',
        inboxBtn: 'Entrada',
        trashBtn: 'Lixeira',
        refresh: 'Atualizar',
        logout: 'Sair',
        loading: 'Carregando mensagens...',
        emptyTitle: 'Sem mensagens ainda',
        emptyBody: 'Quando os leads chegarem, eles aparecem aqui.',
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
        services: 'Services',
        portfolio: 'Portfolio',
        process: 'Process',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      hero: {
        eyebrow: 'Custom projects for ambitious brands',
        title: 'Turn your website into a conversion machine.',
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
        title: 'About Us – EtzahWeb',
        intro: 'EtzahWeb was created with a clear goal: helping professionals and companies grow online with modern, effective, results-driven websites. We believe a website is not just a showcase, but a strategic tool to generate leads, increase credibility, and stand out from competitors.',
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
        title: 'Verifiable portfolio and reviews',
        subtitle: 'Review real projects, client feedback, and customization level before choosing the right partner.',
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
        sectionSubtitle: 'Testimonials that help verify reliability, communication, and post-launch support.',
        kicker: 'Our reviews',
        swipeHint: 'Swipe to see more reviews →',
        excellent: 'EXCELLENT',
        count: 'Based on 9 reviews',
        google: 'Google',
        starsAria: '5 out of 5 rating',
        prevAria: 'Previous review',
        nextAria: 'Next review',
        item1Meta: 'Andrea Morforio · 3 months ago',
        item1Quote: 'I trusted EtzahWeb with my website and I was very satisfied with both quality and delivery time.',
        item2Meta: 'RedParrucchieri · 6 months ago',
        item2Quote: 'Clear process from start to finish. Elegant layout and improved conversions in the first weeks.',
        item3Meta: 'C. U. · 6 months ago',
        item3Quote: 'Excellent experience: fast communication, professional structure, and real post-launch support.',
        item4Meta: 'Blend Milano · 7 months ago',
        item4Quote: 'We hired EtzahWeb and the outcome exceeded expectations: premium design and clean code.',
        item5Meta: 'Verified client · 5 months ago',
        item5Quote: 'Brand value increased with a modern, fast website. Online orders grew and the customer journey became simpler.',
        item6Meta: 'Verified client · 4 months ago',
        item6Quote: 'Transparent quote and high technical competence. Perfect balance of image, performance, and SEO.'
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
        }
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
        about: 'About us',
        services: 'Services',
        portfolio: 'Portfolio',
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
        headTitle: 'Login | EtzahWeb',
        headDescription: 'EtzahWeb admin access.',
        title: 'Admin area',
        subtitle: 'Access to view received messages.',
        emailLabel: 'Username',
        emailPlaceholder: 'admin',
        passwordLabel: 'Password',
        passwordPlaceholder: '********',
        submit: 'Sign in',
        verifying: 'Checking...',
        error: 'Incorrect email or password.'
      },
      admin: {
        headTitle: 'Admin Panel | EtzahWeb',
        headDescription: 'EtzahWeb administration panel.',
        title: 'Received messages',
        subtitle: 'Track leads and respond quickly.',
        titleInbox: 'Received messages',
        subtitleInbox: 'Track leads and respond quickly.',
        titleTrash: 'Trash',
        subtitleTrash: 'Manage messages moved to the trash.',
        inboxBtn: 'Inbox',
        trashBtn: 'Trash',
        refresh: 'Refresh',
        logout: 'Log out',
        loading: 'Loading messages...',
        emptyTitle: 'No messages yet',
        emptyBody: 'When new leads arrive, they will appear here.',
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
