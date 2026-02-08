// Modern hamburger menu toggle and close
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
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

I18N.init({ fallback: 'it' });
I18N.onChange(() => {
  statusEl.textContent = '';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusEl.textContent = I18N.t('form.sending');

  const formData = new FormData(form);
  const payload = {
    name: formData.get('nome'),
    email: formData.get('email'),
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
