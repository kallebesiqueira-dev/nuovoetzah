const messagesContainer = document.getElementById('messages');
const adminStatus = document.getElementById('adminStatus');
const adminTitle = document.getElementById('adminTitle');
const adminSubtitle = document.getElementById('adminSubtitle');
const inboxBtn = document.getElementById('inboxBtn');
const trashBtn = document.getElementById('trashBtn');
const refreshBtn = document.getElementById('refreshBtn');
const logoutBtn = document.getElementById('logoutBtn');
let cachedMessages = [];
let statusState = 'idle';
let currentView = 'inbox';
const apiMeta = document.querySelector('meta[name="api-base"]');
const apiBase = apiMeta && apiMeta.content.trim()
  ? apiMeta.content.trim()
  : (window.location.port === '5500' ? 'http://127.0.0.1:3000' : '');

I18N.init({ fallback: 'it' });
updateHeader();
updateStatus();
renderMessages(cachedMessages);
loadMessages();
I18N.onChange(() => {
  updateHeader();
  updateStatus();
  renderMessages(cachedMessages);
});

function renderEmpty() {
  const isTrash = currentView === 'trash';
  const titleKey = isTrash ? 'admin.trashEmptyTitle' : 'admin.emptyTitle';
  const bodyKey = isTrash ? 'admin.trashEmptyBody' : 'admin.emptyBody';
  messagesContainer.innerHTML = `
    <div class="message-card">
      <h4>${I18N.t(titleKey)}</h4>
      <p>${I18N.t(bodyKey)}</p>
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
    const actionLabel = currentView === 'trash'
      ? I18N.t('admin.purgeBtn')
      : I18N.t('admin.deleteBtn');
    const actionName = currentView === 'trash' ? 'purge' : 'delete';
    card.innerHTML = `
      <h4>${m.name || m.username || I18N.t('admin.leadName')}</h4>
      <p><strong>${I18N.t('admin.emailLabel')}:</strong> ${m.email || I18N.t('admin.emailFallback')}</p>
      <p><strong>${I18N.t('admin.phoneLabel')}:</strong> ${m.phone || I18N.t('admin.phoneFallback')}</p>
      <p><strong>${I18N.t('admin.companyLabel')}:</strong> ${m.company || I18N.t('admin.companyFallback')}</p>
      <p><strong>${I18N.t('admin.messageLabel')}:</strong> ${messageText || I18N.t('admin.messageFallback')}</p>
      <div class="message-actions">
        <button class="btn btn-outline btn-icon" type="button" data-action="${actionName}" data-id="${m._id}" title="${actionLabel}" aria-label="${actionLabel}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 7h14" />
            <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            <path d="M7 7l1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
          </svg>
        </button>
      </div>
    `;
    messagesContainer.appendChild(card);
  });
}

function updateHeader() {
  if (!adminTitle || !adminSubtitle) return;
  if (currentView === 'trash') {
    adminTitle.textContent = I18N.t('admin.titleTrash');
    adminSubtitle.textContent = I18N.t('admin.subtitleTrash');
  } else {
    adminTitle.textContent = I18N.t('admin.titleInbox');
    adminSubtitle.textContent = I18N.t('admin.subtitleInbox');
  }
}

function updateStatus() {
  if (statusState === 'loading') {
    adminStatus.textContent = I18N.t('admin.loading');
    return;
  }

  if (statusState === 'none') {
    adminStatus.textContent = I18N.t(
      currentView === 'trash' ? 'admin.trashNoneFound' : 'admin.noneFound'
    );
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

async function authorizedFetch(url, options = {}) {
  const token = getAccessToken();
  if (!token) return null;

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 401 && res.status !== 403) {
    return res;
  }

  const refreshed = await refreshAccessToken();
  if (!refreshed) return res;

  const retryToken = getAccessToken();
  if (!retryToken) return res;

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${retryToken}`,
    },
  });
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
  const query = currentView === 'trash' ? '?trash=true' : '';
  return authorizedFetch(`${apiBase}/api/messages${query}`);
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
    const res = await fetchMessages();

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

async function deleteMessage(id, action) {
  const confirmKey = action === 'purge' ? 'admin.purgeConfirm' : 'admin.deleteConfirm';
  if (!window.confirm(I18N.t(confirmKey))) {
    return;
  }

  const path = action === 'purge'
    ? `${apiBase}/api/messages/${id}/purge`
    : `${apiBase}/api/messages/${id}`;

  try {
    const res = await authorizedFetch(path, { method: 'DELETE' });
    if (!res || !res.ok) {
      throw new Error('Falha ao apagar.');
    }

    adminStatus.textContent = I18N.t(
      action === 'purge' ? 'admin.purgedStatus' : 'admin.deletedStatus'
    );
    loadMessages();
  } catch (error) {
    adminStatus.textContent = I18N.t('admin.actionError');
  }
}

function setView(view) {
  currentView = view;
  updateHeader();
  updateStatus();
  if (inboxBtn && trashBtn) {
    inboxBtn.classList.toggle('btn-outline', view === 'inbox');
    inboxBtn.classList.toggle('btn-ghost', view !== 'inbox');
    trashBtn.classList.toggle('btn-outline', view === 'trash');
    trashBtn.classList.toggle('btn-ghost', view !== 'trash');
  }
  loadMessages();
}

messagesContainer.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const action = target.getAttribute('data-action');
  const id = target.getAttribute('data-id');
  if (!action || !id) return;
  deleteMessage(id, action);
});

refreshBtn.addEventListener('click', loadMessages);
if (inboxBtn) inboxBtn.addEventListener('click', () => setView('inbox'));
if (trashBtn) trashBtn.addEventListener('click', () => setView('trash'));
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

