const messagesContainer = document.getElementById('messages');
const adminStatus = document.getElementById('adminStatus');
const refreshBtn = document.getElementById('refreshBtn');
const logoutBtn = document.getElementById('logoutBtn');
let cachedMessages = [];
let statusState = 'idle';
const apiMeta = document.querySelector('meta[name="api-base"]');
const apiBase = apiMeta && apiMeta.content.trim()
  ? apiMeta.content.trim()
  : (window.location.port === '5500' ? 'http://127.0.0.1:3000' : '');

I18N.init({ fallback: 'it' });
updateStatus();
renderMessages(cachedMessages);
loadMessages();
I18N.onChange(() => {
  updateStatus();
  renderMessages(cachedMessages);
});

function renderEmpty() {
  messagesContainer.innerHTML = `
    <div class="message-card">
      <h4>${I18N.t('admin.emptyTitle')}</h4>
      <p>${I18N.t('admin.emptyBody')}</p>
    </div>
  `;
}

function renderMessages(messages) {
  messagesContainer.innerHTML = '';

  if (!Array.isArray(messages) || messages.length === 0) {
    renderEmpty();
    return;
  }

  messages.forEach((m) => {
    const card = document.createElement('article');
    card.className = 'message-card';
    const messageText = m.message || m.text || '';
    card.innerHTML = `
      <h4>${m.name || m.username || I18N.t('admin.leadName')}</h4>
      <p><strong>${I18N.t('admin.emailLabel')}:</strong> ${m.email || I18N.t('admin.emailFallback')}</p>
      <p><strong>${I18N.t('admin.companyLabel')}:</strong> ${m.company || I18N.t('admin.companyFallback')}</p>
      <p><strong>${I18N.t('admin.messageLabel')}:</strong> ${messageText || I18N.t('admin.messageFallback')}</p>
    `;
    messagesContainer.appendChild(card);
  });
}

function updateStatus() {
  if (statusState === 'loading') {
    adminStatus.textContent = I18N.t('admin.loading');
    return;
  }

  if (statusState === 'none') {
    adminStatus.textContent = I18N.t('admin.noneFound');
    return;
  }

  if (statusState === 'error') {
    adminStatus.textContent = I18N.t('admin.error');
    return;
  }

  if (statusState === 'loaded') {
    adminStatus.textContent = `${cachedMessages.length} ${I18N.t('admin.loaded')}`;
  }
}

function getAccessToken() {
  return localStorage.getItem('accessToken') || localStorage.getItem('token');
}

function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
  localStorage.removeItem('token');
}

async function refreshAccessToken() {
  const res = await fetch(`${apiBase}/api/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  });

  if (!res.ok) {
    return false;
  }

  const data = await res.json();
  if (data.accessToken) {
    setAccessToken(data.accessToken);
    return true;
  }

  return false;
}

async function fetchMessages() {
  const token = getAccessToken();
  if (!token) return null;

  return fetch(`${apiBase}/api/messages`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

async function loadMessages() {
  const token = getAccessToken();

  if (!token) {
    window.location.href = 'login.html';
    return;
  }

  statusState = 'loading';
  updateStatus();
  messagesContainer.innerHTML = '';

  try {
    let res = await fetchMessages();

    if (res && (res.status === 401 || res.status === 403)) {
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        res = await fetchMessages();
      }
    }

    if (!res || !res.ok) {
      throw new Error('Falha ao carregar.');
    }

    const data = await res.json();
    cachedMessages = Array.isArray(data.items) ? data.items : [];

    if (cachedMessages.length === 0) {
      statusState = 'none';
      updateStatus();
      renderEmpty();
      return;
    }

    statusState = 'loaded';
    renderMessages(cachedMessages);
    updateStatus();
  } catch (error) {
    statusState = 'error';
    updateStatus();
    renderEmpty();
  }
}

refreshBtn.addEventListener('click', loadMessages);
logoutBtn.addEventListener('click', async () => {
  try {
    await fetch(`${apiBase}/api/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
  } catch (error) {
    // Ignorar falha de rede ao sair.
  }

  localStorage.removeItem('token');
  localStorage.removeItem('accessToken');
  window.location.href = 'login.html';
});

