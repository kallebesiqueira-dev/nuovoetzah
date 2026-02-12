(function () {
  const translations = {
    it: {
      head: {
        title: 'EtzahWeb | Soluzioni Digitali Premium',
        description: 'Studio freelance specializzato in siti, landing page e automazioni per aziende che vogliono vendere di più.'
      },
      nav: {
        services: 'Servizi',
        process: 'Processo',
        pricing: 'Prezzi',
        contact: 'Contatto'
      },
      hero: {
        eyebrow: 'Progetti su misura per brand ambiziosi',
        title: 'Trasforma il tuo sito in una macchina di conversione.',
        subtitle: 'Design strategico, performance e automazioni per accelerare le vendite, costruire autorevolezza e semplificare il funnel.',
        ctaPrimary: 'Voglio un preventivo',
        ctaSecondary: 'Vedi risultati',
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
      contact: {
        title: 'Mettiamo online il tuo progetto?',
        subtitle: 'Invia i tuoi dati e ricevi risposta entro 24h con una proposta chiara.',
        card1: {
          label: 'Canale Instagram',
          value: '7-14 giorni'
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
        messageFallback: 'Nessun messaggio'
      }
    },
    pt: {
      head: {
        title: 'EtzahWeb | Soluções Digitais Premium',
        description: 'Studio freelance especializado em sites, landing pages e automações para negócios que querem vender mais.'
      },
      nav: {
        services: 'Serviços',
        process: 'Processo',
        pricing: 'Preços',
        contact: 'Contato'
      },
      hero: {
        eyebrow: 'Projetos sob medida para marcas ambiciosas',
        title: 'Transforme seu site em uma máquina de conversão.',
        subtitle: 'Design estratégico, performance e automações para acelerar vendas, gerar autoridade e simplificar seu funil.',
        ctaPrimary: 'Quero um orçamento',
        ctaSecondary: 'Ver resultados',
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
      contact: {
        title: 'Vamos colocar seu projeto no ar?',
        subtitle: 'Envie seus dados e retorno em até 24h com uma proposta clara e objetiva.',
        card1: {
          label: 'Canal Instagram',
          value: '7 a 14 dias'
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
        messageFallback: 'Sem mensagem'
      }
    },
    en: {
      head: {
        title: 'EtzahWeb | Premium Digital Solutions',
        description: 'EtzahWeb specializes in websites, landing pages and automation for businesses that want to sell more.'
      },
      nav: {
        services: 'Services',
        process: 'Process',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      hero: {
        eyebrow: 'Custom projects for ambitious brands',
        title: 'Turn your website into a conversion machine.',
        subtitle: 'Strategic design, performance, and automation to accelerate sales, build authority, and simplify your funnel.',
        ctaPrimary: 'Request a quote',
        ctaSecondary: 'See results',
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
      contact: {
        title: 'Ready to launch your project?',
        subtitle: 'Send your details and get a reply within 24h with a clear proposal.',
        card1: {
          label: 'Instagram channel',
          value: '7 to 14 days'
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
        messageFallback: 'No message'
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

    setLanguage(safeLang);
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
