(function () {
  const translations = {
    it: {
      head: {
        title: 'EtzahWeb | Soluzioni Digitali Premium',
        description: 'Studio freelance specializzato in siti, landing page e automazioni per aziende che vogliono vendere di piu.'
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
          body: 'Presenza digitale elegante, con SEO, contenuti scalabili e identita visiva coerente.',
          tag: 'Alta credibilita'
        },
        card3: {
          title: 'Automazioni & Funnel',
          body: 'Integrazione con CRM, WhatsApp e email per non perdere nessun lead.',
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
          label: 'Canale diretto',
          value: 'WhatsApp'
        }
      },
      form: {
        nameLabel: 'Nome completo',
        namePlaceholder: 'Es: Larissa Rocha',
        emailLabel: 'Email professionale',
        emailPlaceholder: 'tuo@azienda.com',
        phoneLabel: 'WhatsApp',
        phonePlaceholder: 'Es: +39 333 123 4567',
        companyLabel: 'Azienda',
        companyPlaceholder: 'Nome della tua azienda',
        messageLabel: 'Racconta il progetto',
        messagePlaceholder: 'Sito istituzionale, landing page, automazione...',
        submit: 'Invia proposta',
        sending: 'Invio in corso...',
        success: 'Messaggio inviato con successo! Ti risponderemo entro 24h.',
        error: 'Non e stato possibile inviare. Riprova tra poco.',
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
        refresh: 'Aggiorna',
        logout: 'Esci',
        loading: 'Caricamento messaggi...',
        emptyTitle: 'Nessun messaggio per ora',
        emptyBody: 'Quando arrivano nuovi lead, appariranno qui.',
        noneFound: 'Nessun messaggio trovato.',
        loaded: 'messaggi caricati.',
        error: 'Errore nel recupero messaggi. Verifica il login.',
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
          body: 'Integração com CRM, WhatsApp e email para não perder nenhum lead.',
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
          label: 'Canal direto',
          value: 'WhatsApp'
        }
      },
      form: {
        nameLabel: 'Nome completo',
        namePlaceholder: 'Ex: Larissa Rocha',
        emailLabel: 'Email profissional',
        emailPlaceholder: 'voce@empresa.com',
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
        authRequired: 'Faca login para enviar a mensagem.'
      },
      footer: {
        tagline: 'Construindo experiências digitais que geram receita e reputação.',
        contactTitle: 'Contato',
        linksTitle: 'Links',
        linksPrivacy: 'Privacidade',
        linksTerms: 'Termos',
        copyright: '© 2026 EtzahWeb. Todos os direitos reservados.'
      },
      login: {
        title: 'Área administrativa',
        subtitle: 'Acesse para visualizar as mensagens recebidas.',
        emailLabel: 'Usuario',
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
        refresh: 'Atualizar',
        logout: 'Sair',
        loading: 'Carregando mensagens...',
        emptyTitle: 'Sem mensagens ainda',
        emptyBody: 'Quando os leads chegarem, eles aparecem aqui.',
        noneFound: 'Nenhuma mensagem encontrada.',
        loaded: 'mensagens carregadas.',
        error: 'Erro ao buscar mensagens. Verifique o login.',
        leadName: 'Lead sem nome',
        emailLabel: 'Email',
        emailFallback: 'não informado',
        phoneLabel: 'WhatsApp',
        phoneFallback: 'não informado',
        companyLabel: 'Empresa',
        companyFallback: 'nao informada',
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
          body: 'Integrations with CRM, WhatsApp, and email so no lead is lost.',
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
          label: 'Direct channel',
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
        refresh: 'Refresh',
        logout: 'Log out',
        loading: 'Loading messages...',
        emptyTitle: 'No messages yet',
        emptyBody: 'When new leads arrive, they will appear here.',
        noneFound: 'No messages found.',
        loaded: 'messages loaded.',
        error: 'Error fetching messages. Please check login.',
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

    if (titleEl && langData.head?.title) {
      titleEl.textContent = langData.head.title;
    }

    if (metaDescription && langData.head?.description) {
      metaDescription.setAttribute('content', langData.head.description);
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
