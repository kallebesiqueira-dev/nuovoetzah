const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');
const apiMeta = document.querySelector('meta[name="api-base"]');
const apiBase = apiMeta && apiMeta.content.trim()
  ? apiMeta.content.trim()
  : (window.location.port === '5500' ? 'http://127.0.0.1:3000' : '');
I18N.init({ fallback: 'it' });
I18N.onChange(() => {
  loginStatus.textContent = '';
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginStatus.textContent = I18N.t('login.verifying');

  const payload = {
    username: loginForm.username.value.trim(),
    password: loginForm.password.value
  };

  try {
    const res = await fetch(`${apiBase}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error('Credenciais invalidas.');
    }

    const data = await res.json();
    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
    }
    window.location.href = 'admin.html';
  } catch (error) {
    loginStatus.textContent = I18N.t('login.error');
  }
});
