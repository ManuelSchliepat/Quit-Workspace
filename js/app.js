// ============================================================
// MEN'S DAILY HQ — App Logic
// ============================================================

const STORAGE_KEY = 'mens-hq-settings-v1';

// App state
let activeCategory = null;
let settings = {};

// ── INIT ──────────────────────────────────────────────────
function init() {
  loadSettings();
  renderDate();
  renderGreeting();
  renderCategoryGrid();
  bindGlobalEvents();
}

// ── SETTINGS (localStorage) ───────────────────────────────
function loadSettings() {
  try {
    settings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    settings = {};
  }
  // Ensure every category has defaults
  CATEGORIES.forEach(cat => {
    if (!settings[cat.id]) {
      settings[cat.id] = {
        sections: DEFAULT_SECTIONS[cat.id] || cat.sections.slice(0, 3).map(s => s.id),
        tone: 'motivational',
        length: 'medium',
      };
    }
  });
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

// ── DATE & GREETING ───────────────────────────────────────
function renderDate() {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date-display').textContent =
    new Date().toLocaleDateString('en-US', opts);
}

function renderGreeting() {
  const h = new Date().getHours();
  const label = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('greeting').textContent =
    `${label}, Chief. Here's your daily brief.`;
}

// ── CATEGORY GRID ─────────────────────────────────────────
function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const isActive = activeCategory === cat.id;
    return `
      <div class="category-card${isActive ? ' active' : ''}"
           style="--cat-color: ${cat.color}"
           data-id="${cat.id}"
           role="button"
           tabindex="0"
           aria-label="Open ${cat.name} briefing">
        <span class="cat-tag">Daily</span>
        <span class="cat-icon-wrap">${cat.icon}</span>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-subtitle">${cat.subtitle}</div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => openBriefing(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openBriefing(card.dataset.id);
    });
  });
}

// ── BRIEFING PANEL ────────────────────────────────────────
function openBriefing(catId) {
  activeCategory = catId;
  renderCategoryGrid();

  const cat    = CATEGORIES.find(c => c.id === catId);
  const config = settings[catId];

  document.getElementById('briefing-icon').textContent = cat.icon;
  document.getElementById('briefing-title').textContent = `${cat.name} — Daily Briefing`;
  document.getElementById('briefing-date').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  renderBriefingBody(cat, config);
  renderBriefingFooter(config);

  const panel = document.getElementById('briefing-panel');
  panel.classList.remove('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderBriefingBody(cat, config) {
  const body = document.getElementById('briefing-body');

  const enabledSections = cat.sections.filter(s => config.sections.includes(s.id));

  if (enabledSections.length === 0) {
    body.innerHTML = `
      <p class="briefing-empty">
        No sections enabled for this category.<br>
        Click <strong>Settings</strong> above to choose what appears in your briefing.
      </p>`;
    return;
  }

  body.innerHTML = enabledSections.map((section, i) => {
    const entry = getDailyContent(section.id);
    if (!entry) return '';

    const text  = entry[config.length] || entry.medium || entry.brief;
    const color = SECTION_COLORS[i % SECTION_COLORS.length];

    return `
      <div class="briefing-section" style="--s-color: ${color}">
        <div class="s-label">${section.label}</div>
        <div class="s-body ${config.length}">${htmlify(text)}</div>
      </div>`;
  }).join('');
}

function renderBriefingFooter(config) {
  const bar = document.getElementById('tone-bar');
  bar.innerHTML = `
    <span>Briefing config:</span>
    <span class="footer-pill">🎯 ${cap(config.tone)}</span>
    <span class="footer-pill">📏 ${cap(config.length)}</span>
    <span class="footer-pill">📋 ${config.sections.length} section${config.sections.length !== 1 ? 's' : ''}</span>
    <span class="footer-pill">🔄 Rotates daily</span>`;
}

// Convert plain text to safe HTML (newlines, bullets)
function htmlify(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
    .replace(/• /g, '<span class="bullet">•</span> ');
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── SETTINGS MODAL ────────────────────────────────────────
function openSettings(catId) {
  const cat    = CATEGORIES.find(c => c.id === catId);
  const config = settings[catId];

  document.getElementById('settings-category-name').textContent =
    `${cat.icon}  ${cat.name}`;

  // Render section toggles
  document.getElementById('settings-sections').innerHTML =
    cat.sections.map(s => `
      <label class="section-toggle-item">
        <input type="checkbox" value="${s.id}"
          ${config.sections.includes(s.id) ? 'checked' : ''}>
        <span>${s.label}</span>
      </label>`).join('');

  document.getElementById('settings-tone').value   = config.tone;
  document.getElementById('settings-length').value = config.length;

  document.getElementById('settings-overlay').classList.remove('hidden');
}

function closeSettings() {
  document.getElementById('settings-overlay').classList.add('hidden');
}

function applySettings() {
  if (!activeCategory) return;

  const checked = Array.from(
    document.querySelectorAll('#settings-sections input[type=checkbox]:checked')
  ).map(el => el.value);

  settings[activeCategory].sections = checked;
  settings[activeCategory].tone     = document.getElementById('settings-tone').value;
  settings[activeCategory].length   = document.getElementById('settings-length').value;

  saveSettings();
  closeSettings();

  // Re-render briefing with new config
  const cat = CATEGORIES.find(c => c.id === activeCategory);
  renderBriefingBody(cat, settings[activeCategory]);
  renderBriefingFooter(settings[activeCategory]);
}

// ── GLOBAL EVENT BINDINGS ─────────────────────────────────
function bindGlobalEvents() {
  // Briefing panel controls
  document.getElementById('open-settings').addEventListener('click', () => {
    if (activeCategory) openSettings(activeCategory);
  });

  document.getElementById('close-briefing').addEventListener('click', () => {
    document.getElementById('briefing-panel').classList.add('hidden');
    activeCategory = null;
    renderCategoryGrid();
  });

  // Settings modal controls
  document.getElementById('close-settings').addEventListener('click', closeSettings);
  document.getElementById('settings-cancel').addEventListener('click', closeSettings);
  document.getElementById('settings-save').addEventListener('click', applySettings);

  // Close modal on backdrop click
  document.getElementById('settings-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('settings-overlay')) closeSettings();
  });

  // Close modal on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSettings();
  });
}

// ── START ─────────────────────────────────────────────────
init();
