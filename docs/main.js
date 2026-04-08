// Modern hamburger menu toggle and close
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const normalizeLegacyHash = () => {
  const hashMap = {
    '#servicos': '#servizi',
    '#contato': '#contatto'
  };

  const nextHash = hashMap[window.location.hash];
  if (nextHash) {
    window.location.replace(nextHash);
  }
};

const normalizeContactNavLinks = () => {
  const contactNavLinks = document.querySelectorAll(
    '.nav a[href="#contatto"], .nav a[href="index.html#contatto"], .nav a[href="#contato"], .nav a[href="index.html#contato"]'
  );
  contactNavLinks.forEach((link) => {
    link.classList.remove('btn', 'btn-outline');
  });
};

normalizeLegacyHash();
normalizeContactNavLinks();

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', (!expanded).toString());
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu on link click or outside click
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const formEndpoint = form?.getAttribute('action') || 'https://formsubmit.co/ajax/6bd2ada033bd47ab703548d1b8da98db';
const isHomePage = document.body.classList.contains('home-page');
const isLuxuryMinimal = document.body.classList.contains('luxury-minimal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cookieBanner = document.querySelector('[data-cookie-banner]');
const cookieAcceptButtons = document.querySelectorAll('[data-cookie-accept]');
const cookieCloseButton = document.querySelector('[data-cookie-close]');
const cookieConsentKey = 'etzah_cookie_consent';
const heroTitleSequence = document.querySelector('[data-hero-title-sequence]');
const heroPrimaryCta = document.querySelector('.hero-actions .btn-primary[data-i18n="hero.ctaPrimary"]');
const aboutSectionCta = document.querySelector('.about-section-btn[data-i18n="about.cta"]');
const contactSectionTitle = document.querySelector('#contatto .contact-copy h2[data-i18n="contact.title"]');
let heroTitleSequenceTimeout = 0;

const updateHeroMobileCtaLabel = () => {
  if (!heroPrimaryCta) {
    return;
  }

  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const lang = I18N.getCurrentLang();

  if (isMobile && lang === 'pt') {
    heroPrimaryCta.textContent = 'Peça já!';
    return;
  }

  if (isMobile && lang === 'it') {
    heroPrimaryCta.textContent = 'Preventivo';
    return;
  }

  heroPrimaryCta.textContent = I18N.t('hero.ctaPrimary');
};

const updateAboutMobileCtaLabel = () => {
  if (!aboutSectionCta) {
    return;
  }

  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const lang = I18N.getCurrentLang();

  if (isMobile && lang === 'pt') {
    aboutSectionCta.textContent = 'Quero meu site';
    return;
  }

  if (isMobile && lang === 'it') {
    aboutSectionCta.textContent = 'Voglio il mio sito';
    return;
  }

  if (isMobile && lang === 'en') {
    aboutSectionCta.textContent = 'I want my website';
    return;
  }

  aboutSectionCta.textContent = I18N.t('about.cta');
};

const updateContactMobileTitle = () => {
  if (!contactSectionTitle) {
    return;
  }

  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const lang = I18N.getCurrentLang();

  if (isMobile && lang === 'pt') {
    contactSectionTitle.innerHTML = 'Vamos colocar seu<br>projeto no ar?';
    return;
  }

  if (isMobile && lang === 'it') {
    contactSectionTitle.innerHTML = 'Mettiamo online<br>il tuo progetto?';
    return;
  }

  if (isMobile && lang === 'en') {
    contactSectionTitle.innerHTML = 'Ready to launch<br>your project?';
    return;
  }

  contactSectionTitle.textContent = I18N.t('contact.title');
};

const startHeroTitleSequence = () => {
  if (!heroTitleSequence) {
    return;
  }

  const lines = Array.from(heroTitleSequence.querySelectorAll('.hero-title-line'));

  window.clearTimeout(heroTitleSequenceTimeout);

  if (!lines.length) {
    return;
  }

  if (prefersReducedMotion) {
    lines.forEach((line) => {
      line.classList.add('is-visible');
    });
    return;
  }

  lines.forEach((line) => {
    line.classList.remove('is-visible');
  });

  const revealLine = (index) => {
    if (!lines[index]) {
      return;
    }

    lines[index].classList.add('is-visible');

    if (index < lines.length - 1) {
      heroTitleSequenceTimeout = window.setTimeout(() => {
        revealLine(index + 1);
      }, 2000);
      return;
    }

    heroTitleSequenceTimeout = window.setTimeout(() => {
      lines.forEach((line) => {
        line.classList.remove('is-visible');
      });

      heroTitleSequenceTimeout = window.setTimeout(() => {
        revealLine(0);
      }, 220);
    }, 3200);
  };

  revealLine(0);
};

I18N.init({ fallback: 'it' });
I18N.onChange(() => {
  if (statusEl) {
    statusEl.textContent = '';
  }

  if (cookieBanner) {
    cookieBanner.setAttribute('aria-label', I18N.t('cookie.bannerAriaLabel', 'Cookie notice'));
  }

  if (cookieCloseButton) {
    cookieCloseButton.setAttribute('aria-label', I18N.t('cookie.closeAriaLabel', 'Close cookie notice'));
  }

  updateHeroMobileCtaLabel();
  updateAboutMobileCtaLabel();
  updateContactMobileTitle();
  startHeroTitleSequence();
});

window.addEventListener('resize', updateHeroMobileCtaLabel);
window.addEventListener('resize', updateAboutMobileCtaLabel);
window.addEventListener('resize', updateContactMobileTitle);
updateHeroMobileCtaLabel();
updateAboutMobileCtaLabel();
updateContactMobileTitle();
startHeroTitleSequence();

if (cookieBanner) {
  cookieBanner.setAttribute('aria-label', I18N.t('cookie.bannerAriaLabel', 'Cookie notice'));
}

if (cookieCloseButton) {
  cookieCloseButton.setAttribute('aria-label', I18N.t('cookie.closeAriaLabel', 'Close cookie notice'));
}

const setCookieConsent = () => {
  try {
    localStorage.setItem(cookieConsentKey, 'accepted');
  } catch (error) {
    // noop
  }
};

const hasCookieConsent = () => {
  try {
    return localStorage.getItem(cookieConsentKey) === 'accepted';
  } catch (error) {
    return false;
  }
};

if (cookieBanner && cookieAcceptButtons.length) {
  const hideBanner = () => {
    cookieBanner.classList.remove('is-visible');
    window.setTimeout(() => {
      cookieBanner.hidden = true;
    }, 280);
  };

  const acceptConsent = () => {
    setCookieConsent();
    hideBanner();
  };

  cookieAcceptButtons.forEach((button) => {
    button.addEventListener('click', acceptConsent);
  });

  if (!hasCookieConsent()) {
    cookieBanner.hidden = false;
    requestAnimationFrame(() => {
      cookieBanner.classList.add('is-visible');
    });
  }
}

if (form && statusEl) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusEl.textContent = I18N.t('form.sending');

    const formData = new FormData(form);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar.');
      }

      statusEl.textContent = I18N.t('form.success');
      form.reset();
    } catch (error) {
      statusEl.textContent = I18N.t('form.error');
    }
  });
}

if (isHomePage) {
  const faqGrid = document.querySelector('.faq-grid');
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));

  if (faqGrid && faqItems.length) {
    const leftColumn = document.createElement('div');
    const rightColumn = document.createElement('div');

    leftColumn.className = 'faq-column';
    rightColumn.className = 'faq-column';

    faqItems.forEach((item, index) => {
      if (index % 2 === 0) {
        leftColumn.appendChild(item);
      } else {
        rightColumn.appendChild(item);
      }
    });

    faqGrid.replaceChildren(leftColumn, rightColumn);
  }

  const revealSelector = [
    '.home-page main > .section .section-title',
    '.home-page main > .section .about-section-cta',
    '.home-page main > .section .founder-media',
    '.home-page main > .section .founder-copy',
    '.home-page main > .section .portfolio-showcase-item',
    '.home-page main > .section .reviews-summary',
    '.home-page main > .section .reviews-slider-shell',
    '.home-page main > .section .business-benefit-card',
    '.home-page main > .section .blog-copy',
    '.home-page main > .section .blog-media',
    '.home-page main > .section .faq-item',
    '.home-page main > .section .contact-copy',
    '.home-page main > .section .contact-map-card',
    '.section .card',
    '.section .step',
    '.section .pricing-card',
    '.section .mini-card',
    '.section .form-card',
    '.hero-card'
  ].join(', ');
  const revealTargets = Array.from(document.querySelectorAll(revealSelector));
  const cinematicSections = document.querySelectorAll('.home-page .hero, .home-page .section');
  const heroSection = document.querySelector('.home-page.azure-showcase .hero');
  const staggerGroups = document.querySelectorAll(
    '.about-services-grid, .portfolio-showcase-grid, .business-benefits-grid, .faq-grid .faq-column, .contact-cards, .founder-grid, .blog-grid'
  );

  revealTargets.forEach((element) => {
    element.classList.add('reveal-item');
  });

  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((element, index) => {
      if (!element.classList.contains('reveal-item')) {
        element.classList.add('reveal-item');
      }

      element.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`);
    });
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((element) => {
      element.classList.add('is-visible');
    });
    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((element) => {
        element.classList.add('is-visible');
      });
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealTargets.forEach((element) => {
      revealObserver.observe(element);
    });

    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((element) => {
        revealObserver.observe(element);
      });
    });
  }

  if (faqItems.length) {
    faqItems.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) {
          return;
        }

        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      });
    });
  }

  if (!prefersReducedMotion && !isLuxuryMinimal) {
    const auroraEl = document.querySelector('.bg-aurora');
    const gridEl = document.querySelector('.bg-grid');
    const orbitEl = document.querySelector('.bg-orbit');
    const cursorGlowEl = document.querySelector('.cursor-glow');
    const magneticTargets = document.querySelectorAll('.hero-actions .btn, .social-link, .pricing-card.featured');

    let pointerX = 0;
    let pointerY = 0;
    let pointerClientX = window.innerWidth / 2;
    let pointerClientY = window.innerHeight / 2;
    let scrollY = window.scrollY;
    let ticking = false;

    magneticTargets.forEach((element) => {
      element.classList.add('magnetic');

      element.addEventListener('mousemove', (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        element.style.setProperty('--mx', `${offsetX * 0.12}px`);
        element.style.setProperty('--my', `${offsetY * 0.12}px`);
      });

      element.addEventListener('mouseleave', () => {
        element.style.setProperty('--mx', '0px');
        element.style.setProperty('--my', '0px');
      });
    });

    const applyParallax = () => {
      ticking = false;

      const x1 = pointerX * 12;
      const y1 = pointerY * 10 + scrollY * 0.015;
      const x2 = pointerX * -8;
      const y2 = pointerY * -6 + scrollY * 0.008;

      if (cursorGlowEl) {
        cursorGlowEl.style.transform = `translate3d(${pointerClientX - 140}px, ${pointerClientY - 140}px, 0)`;
      }

      if (auroraEl) {
        auroraEl.style.transform = `translate3d(${x1}px, ${y1}px, 0)`;
      }

      if (gridEl) {
        gridEl.style.transform = `translate3d(${x2}px, ${y2}px, 0)`;
      }

      if (orbitEl) {
        orbitEl.style.transform = `translate3d(${pointerX * -14}px, ${pointerY * 14 + scrollY * 0.02}px, 0)`;
      }

      cinematicSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.5;
        const sectionCenter = rect.top + rect.height * 0.5;
        const distance = (sectionCenter - viewportCenter) / window.innerHeight;
        const clamped = Math.max(-1, Math.min(1, distance));
        section.style.setProperty('--section-shift', String(clamped * -18));
      });
    };

    const requestParallaxFrame = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyParallax);
      }
    };

    window.addEventListener('mousemove', (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      pointerX = x - 0.5;
      pointerY = y - 0.5;
      pointerClientX = event.clientX;
      pointerClientY = event.clientY;
      document.body.classList.add('cursor-active');
      requestParallaxFrame();
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-active');
    });

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      requestParallaxFrame();
    }, { passive: true });

    requestParallaxFrame();
  }
}

const portfolioCarousel = document.querySelector('[data-portfolio-carousel]');

if (portfolioCarousel) {
  const portfolioItems = Array.from(portfolioCarousel.querySelectorAll('[data-portfolio-item]'));
  const intervalMs = Number(portfolioCarousel.getAttribute('data-interval')) || 10000;

  let activeIndex = 0;
  let autoRotateId = null;

  const setActiveCard = (nextIndex) => {
    if (!portfolioItems.length) {
      return;
    }

    portfolioItems.forEach((item, index) => {
      item.classList.toggle('is-active', index === nextIndex);
    });

    activeIndex = nextIndex;
  };

  const nextCard = () => {
    if (!portfolioItems.length) {
      return;
    }

    const nextIndex = (activeIndex + 1) % portfolioItems.length;
    setActiveCard(nextIndex);
  };

  const startAutoRotate = () => {
    if (prefersReducedMotion || portfolioItems.length < 2) {
      return;
    }

    if (autoRotateId) {
      window.clearInterval(autoRotateId);
    }

    autoRotateId = window.setInterval(nextCard, intervalMs);
  };

  const stopAutoRotate = () => {
    if (!autoRotateId) {
      return;
    }

    window.clearInterval(autoRotateId);
    autoRotateId = null;
  };

  setActiveCard(0);
  startAutoRotate();

  portfolioCarousel.addEventListener('mouseenter', stopAutoRotate);
  portfolioCarousel.addEventListener('mouseleave', startAutoRotate);
  portfolioCarousel.addEventListener('focusin', stopAutoRotate);
  portfolioCarousel.addEventListener('focusout', (event) => {
    if (!portfolioCarousel.contains(event.relatedTarget)) {
      startAutoRotate();
    }
  });

  portfolioItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      setActiveCard(index);
    });
  });
}

const lightbox = document.querySelector('[data-portfolio-lightbox]');
const lightboxImage = lightbox ? lightbox.querySelector('[data-lightbox-image]') : null;
const lightboxCloseControls = lightbox ? lightbox.querySelectorAll('[data-lightbox-close]') : [];

if (lightbox && lightboxImage) {
  const openLightbox = (source, altText) => {
    lightboxImage.src = source;
    lightboxImage.alt = altText || 'Portfolio image';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-lightbox-src]');
    if (!trigger) {
      return;
    }

    event.preventDefault();
    openLightbox(trigger.getAttribute('data-lightbox-src'), trigger.getAttribute('data-lightbox-alt'));
  });

  lightboxCloseControls.forEach((control) => {
    control.addEventListener('click', closeLightbox);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

const headerBackground = document.querySelector('[data-header-bg]');

if (headerBackground) {
  const slideA = headerBackground.querySelector('[data-header-slide-a]');
  const slideB = headerBackground.querySelector('[data-header-slide-b]');
  const headerImages = [
    'img2/hero.png'
  ];

  if (slideA && headerImages.length) {
    let activeSlide = slideA;

    const applyImage = (slide, source) => {
      slide.style.backgroundImage = `url("${source}")`;
    };

    applyImage(activeSlide, headerImages[0]);
    activeSlide.classList.add('is-active');

    if (slideB) {
      slideB.style.backgroundImage = 'none';
      slideB.classList.remove('is-active');
    }
  }

  const heroSection = document.querySelector('.hero');

  if (heroSection && !prefersReducedMotion) {
    let heroScrollFrame = 0;

    const updateHeroBackgroundShift = () => {
      const heroHeight = heroSection.offsetHeight || 1;
      const progress = Math.max(0, Math.min(1, window.scrollY / heroHeight));
      const shiftY = Math.round(progress * 120);

      heroSection.style.setProperty('--hero-bg-shift', `${shiftY}px`);
      heroScrollFrame = 0;
    };

    const requestHeroBackgroundShift = () => {
      if (heroScrollFrame) {
        return;
      }

      heroScrollFrame = window.requestAnimationFrame(updateHeroBackgroundShift);
    };

    updateHeroBackgroundShift();
    window.addEventListener('scroll', requestHeroBackgroundShift, { passive: true });
    window.addEventListener('resize', requestHeroBackgroundShift);
  }
}

const reviewSlider = document.querySelector('[data-review-slider]');

if (reviewSlider) {
  const reviewTrack = reviewSlider.querySelector('[data-review-track]');

  if (reviewTrack) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const originalCards = Array.from(reviewTrack.querySelectorAll('.review-card'));
    let animationFrameId = 0;
    let lastTimestamp = 0;
    let marqueeOffset = 0;
    let pauseMarquee = false;
    let trackResetWidth = 0;

    const clearClones = () => {
      reviewTrack.querySelectorAll('[data-review-clone="true"]').forEach((card) => {
        card.remove();
      });
    };

    const buildMarquee = () => {
      clearClones();
      originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.dataset.reviewClone = 'true';
        clone.setAttribute('aria-hidden', 'true');
        reviewTrack.appendChild(clone);
      });
    };

    const measureResetWidth = () => {
      const firstClone = reviewTrack.querySelector('[data-review-clone="true"]');
      if (firstClone) {
        trackResetWidth = firstClone.offsetLeft;
      }

      if (!trackResetWidth) {
        trackResetWidth = originalCards.reduce((sum, card) => sum + card.offsetWidth, 0);
      }
    };

    const renderTrack = () => {
      reviewTrack.style.transform = `translate3d(${marqueeOffset}px, 0, 0)`;
    };

    const stepMarquee = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!pauseMarquee && !prefersReducedMotion && trackResetWidth > 0) {
        marqueeOffset -= delta * 0.04;

        if (Math.abs(marqueeOffset) >= trackResetWidth) {
          marqueeOffset += trackResetWidth;
        }

        renderTrack();
      }

      animationFrameId = window.requestAnimationFrame(stepMarquee);
    };

    const refreshMarquee = () => {
      marqueeOffset = 0;
      lastTimestamp = 0;
      measureResetWidth();
      renderTrack();
    };

    buildMarquee();
    refreshMarquee();

    reviewSlider.addEventListener('mouseenter', () => {
      pauseMarquee = true;
    });

    reviewSlider.addEventListener('mouseleave', () => {
      pauseMarquee = false;
    });

    reviewSlider.addEventListener('focusin', () => {
      pauseMarquee = true;
    });

    reviewSlider.addEventListener('focusout', () => {
      pauseMarquee = false;
    });

    reviewSlider.addEventListener('touchstart', () => {
      pauseMarquee = true;
    }, { passive: true });

    reviewSlider.addEventListener('touchend', () => {
      pauseMarquee = false;
    }, { passive: true });

    window.addEventListener('resize', refreshMarquee, { passive: true });
    window.addEventListener('orientationchange', refreshMarquee, { passive: true });
    window.addEventListener('load', refreshMarquee, { passive: true });

    if (typeof ResizeObserver === 'function') {
      const sliderResizeObserver = new ResizeObserver(() => {
        refreshMarquee();
      });
      sliderResizeObserver.observe(reviewSlider);
      sliderResizeObserver.observe(reviewTrack);
    }

    if (!prefersReducedMotion) {
      animationFrameId = window.requestAnimationFrame(stepMarquee);
    }
  }
}
