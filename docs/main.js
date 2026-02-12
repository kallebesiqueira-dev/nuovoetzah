// Modern hamburger menu toggle and close
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const normalizeContactNavLinks = () => {
  const contactNavLinks = document.querySelectorAll('.nav a[href="#contato"], .nav a[href="index.html#contato"]');
  contactNavLinks.forEach((link) => {
    link.classList.remove('btn', 'btn-outline');
  });
};

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
const apiMeta = document.querySelector('meta[name="api-base"]');
const apiBase = apiMeta && apiMeta.content.trim()
  ? apiMeta.content.trim()
  : (window.location.port === '5500' ? 'http://127.0.0.1:3000' : '');
const isHomePage = document.body.classList.contains('home-page');
const isLuxuryMinimal = document.body.classList.contains('luxury-minimal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

I18N.init({ fallback: 'it' });
I18N.onChange(() => {
  if (statusEl) {
    statusEl.textContent = '';
  }
});

if (form && statusEl) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusEl.textContent = I18N.t('form.sending');

    const formData = new FormData(form);
    const payload = {
      name: formData.get('nome'),
      email: formData.get('email'),
      phone: formData.get('telefone') || '',
      company: formData.get('empresa') || '',
      message: formData.get('mensagem') || ''
    };

    try {
      const response = await fetch(`${apiBase}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
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
  const revealTargets = document.querySelectorAll(
    '.section .card, .section .step, .section .pricing-card, .section .mini-card, .section .form-card, .hero-card'
  );
  const cinematicSections = document.querySelectorAll('.home-page .hero, .home-page .section');

  revealTargets.forEach((element) => {
    element.classList.add('reveal-item');
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((element) => {
      element.classList.add('is-visible');
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
