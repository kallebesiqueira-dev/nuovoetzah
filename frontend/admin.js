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
    card.innerHTML = `
      <h4>${m.nome || I18N.t('admin.leadName')}</h4>
      <p><strong>${I18N.t('admin.emailLabel')}:</strong> ${m.email || I18N.t('admin.emailFallback')}</p>
      <p><strong>${I18N.t('admin.messageLabel')}:</strong> ${m.messaggio || I18N.t('admin.messageFallback')}</p>
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

async function loadMessages() {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = 'login.html';
    return;
  }

  statusState = 'loading';
  updateStatus();
  messagesContainer.innerHTML = '';

  try {
    const res = await fetch(`${apiBase}/messaggi`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error('Falha ao carregar.');
    }

    const data = await res.json();
    cachedMessages = Array.isArray(data) ? data : [];

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
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
});

