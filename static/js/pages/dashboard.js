/* Admin Dashboard Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.dashboard = {
  render(lang) {
    const isAr = lang === 'ar';

    // 1. Decryption check gate (Verifying Django Auth Session)
    if (window.AetherAdminLoggedIn === undefined) {
      window.AetherAdminLoggedIn = 'checking';
      
      fetch('/api/accounts/status/')
        .then(res => res.json())
        .then(data => {
          window.AetherAdminLoggedIn = data.isAuthenticated;
          window.AetherRouter.renderCurrentRoute();
        })
        .catch(() => {
          window.AetherAdminLoggedIn = false;
          window.AetherRouter.renderCurrentRoute();
        });

      return `
        <div class="page-view container" style="display: flex; align-items: center; justify-content: center; min-height: 70vh;">
          <div style="text-align: center; color: var(--color-accent-1); font-weight: bold; font-size: 1.2rem;">
            ${isAr ? 'جاري فحص الصلاحيات الأمنية والاتصال بالخادم...' : 'Verifying secure decryption credentials...'}
          </div>
        </div>
      `;
    }

    // 2. Access Gate - Login form shown if unauthenticated
    if (!window.AetherAdminLoggedIn) {
      return `
        <div class="page-view container" style="display: flex; align-items: center; justify-content: center; min-height: 70vh;">
          <div class="glass-card glow-purple reveal" style="width: 100%; max-width: 450px; padding: 3rem 2.5rem;">
            <div style="text-align: center; margin-bottom: 2rem;">
              <div style="width: 110px; height: 110px; margin: 0 auto 1.5rem auto; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 10px var(--glow-color));">
                <img src="/static/assets/logo.png" alt="AetherCore Logo" style="width: 100%; height: 100%; object-fit: contain;">
              </div>
              <h2 style="font-size: 1.8rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 5px;">
                ${isAr ? 'بوابة المسؤول' : 'Admin Portal Gate'}
              </h2>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${isAr ? 'أدخل أوراق الاعتماد لفك تشفير المنصة' : 'Enter credentials to access admin interface'}</p>
            </div>
            
            <form id="db-login-form">
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم المستخدم' : 'Username'}</label>
                <input type="text" id="login-username" class="form-control" required placeholder="Username">
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'كلمة المرور' : 'Password'}</label>
                <input type="password" id="login-password" class="form-control" required placeholder="••••••••">
              </div>

              <div id="login-error" style="margin-bottom: 1.5rem; display: none; color: var(--color-accent-3); font-size: 0.9rem; font-weight: 600; text-align: center;"></div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                ${isAr ? 'فك التشفير ودخول البوابة' : 'Decrypt Node Access'}
              </button>
            </form>
          </div>
        </div>
      `;
    }

    const menuItems = [
      { id: 'stats', label: isAr ? 'الإحصائيات والتحليلات' : 'Overview & Analytics', icon: '<i class="fas fa-chart-simple"></i>' },
      { id: 'portfolio', label: isAr ? 'معرض الأعمال' : 'Portfolio Desk', icon: '<i class="fas fa-folder-open"></i>' },
      { id: 'messages', label: isAr ? 'الرسائل واستفسارات' : 'Visitor Inbox', icon: '<i class="fas fa-envelope"></i>' },
      { id: 'quotes', label: isAr ? 'طلبات العروض' : 'Quote Requests', icon: '<i class="fas fa-file-invoice-dollar"></i>' },
      { id: 'users', label: isAr ? 'أعضاء الفريق' : 'Team Registry', icon: '<i class="fas fa-users"></i>' },
      { id: 'clients', label: isAr ? 'العملاء المسجلين' : 'Clients Registry', icon: '<i class="fas fa-user-tag"></i>' },
      { id: 'settings', label: isAr ? 'إعدادات النظام' : 'System Settings', icon: '<i class="fas fa-sliders"></i>' }
    ];

    return `
      <div class="dashboard-container">
        <!-- Sidebar Navigation -->
        <aside class="db-sidebar">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">
            ${isAr ? 'لوحة التحكم للمسؤول' : 'Admin Operations'}
          </div>
          <ul class="db-menu">
            ${menuItems.map((item, idx) => `
              <li class="db-menu-item ${idx === 0 ? 'active' : ''}" data-section="${item.id}">
                <span>${item.icon}</span>
                <span>${item.label}</span>
              </li>
            `).join('')}
          </ul>
          
          <div style="margin-top: auto; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">AetherCore Portal v1.0</div>
            <button id="db-logout-btn" class="btn btn-secondary" style="width: 100%; padding: 8px 12px; font-size: 0.85rem;">
              ${isAr ? 'الخروج وتسجيل الخروج' : 'Log Out & Exit'}
            </button>
          </div>
        </aside>

        <!-- Dashboard Central Content Viewport -->
        <main id="db-content-viewport" class="db-content">
          <!-- Rendered dynamically -->
        </main>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';

    // Helper: CSRF Cookie extraction
    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }

    // 1. Auth Form Handling
    const loginForm = document.getElementById('db-login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('login-username').value;
        const pass = document.getElementById('login-password').value;
        const errorBox = document.getElementById('login-error');

        fetch('/api/accounts/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') || ''
          },
          body: JSON.stringify({ username: user, password: pass })
        })
        .then(res => {
          if (!res.ok) throw new Error('Invalid credentials');
          return res.json();
        })
        .then(() => {
          window.AetherAdminLoggedIn = true;
          window.AetherRouter.renderCurrentRoute();
        })
        .catch(() => {
          if (errorBox) {
            errorBox.style.display = 'block';
            errorBox.textContent = isAr 
              ? '🚫 خطأ: بيانات الدخول غير صحيحة.' 
              : '🚫 Access Denied: Invalid credentials.';
          }
        });
      });
      return;
    }

    // 2. Logout Action
    const logoutBtn = document.getElementById('db-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        fetch('/api/accounts/logout/', {
          method: 'POST',
          headers: {
            'X-CSRFToken': getCookie('csrftoken') || ''
          }
        })
        .finally(() => {
          window.AetherAdminLoggedIn = false;
          window.AetherRouter.renderCurrentRoute();
        });
      });
    }

    // 3. Dynamic database cached arrays
    let dbProjects = [];
    let dbMessages = [];
    let dbQuotes = [];
    let dbTeam = [];
    let dbClients = [];
    let dbPollingInterval = null;

    function getPipelineVal() {
      return localStorage.getItem('aether-stat-pipeline') || '0';
    }

    // Loader logic
    function loadAllDashboardData() {
      if (!window.AetherAdminLoggedIn || window.AetherAdminLoggedIn === 'checking') return;

      const viewport = document.getElementById('db-content-viewport');
      if (viewport) {
        viewport.innerHTML = `
          <div style="text-align: center; color: var(--color-accent-1); font-weight: bold; font-size: 1.2rem; padding: 4rem 0;">
            ${isAr ? 'جاري تحميل بيانات لوحة التحكم من الخادم...' : 'Syncing secure database nodes...'}
          </div>
        `;
      }

      Promise.all([
        fetch('/api/projects/').then(r => { if (!r.ok) throw new Error('Auth expired'); return r.json(); }),
        fetch('/api/contact/').then(r => { if (!r.ok) throw new Error('Auth expired'); return r.json(); }),
        fetch('/api/requests/').then(r => { if (!r.ok) throw new Error('Auth expired'); return r.json(); }),
        fetch('/api/team/').then(r => { if (!r.ok) throw new Error('Auth expired'); return r.json(); }),
        fetch('/api/accounts/clients/').then(r => { if (!r.ok) throw new Error('Auth expired'); return r.json(); })
      ])
      .then(([projects, messages, quotes, team, clients]) => {
        dbProjects = projects;
        dbMessages = messages;
        dbQuotes = quotes;
        dbTeam = team;
        dbClients = clients;
        
        renderSection('stats');
        startDashboardPolling();
      })
      .catch(err => {
        console.error('Error fetching dashboard data:', err);
        if (err.message === 'Auth expired') {
          window.AetherAdminLoggedIn = false;
          window.AetherRouter.renderCurrentRoute();
        } else {
          if (viewport) {
            viewport.innerHTML = `
              <div style="text-align: center; color: var(--color-accent-3); font-weight: bold; font-size: 1.2rem; padding: 4rem 0;">
                ${isAr ? '❌ فشل الاتصال بقاعدة البيانات: يرجى التحقق من تشغيل الخادم والاتصال بالـ API!' : '❌ Server synchronization offline. Please verify backend status.'}
              </div>
            `;
          }
        }
      });
    }

    function startDashboardPolling() {
      if (dbPollingInterval) clearInterval(dbPollingInterval);

      dbPollingInterval = setInterval(() => {
        if (!window.AetherAdminLoggedIn || !document.getElementById('db-content-viewport')) {
          clearInterval(dbPollingInterval);
          return;
        }

        Promise.all([
          fetch('/api/projects/').then(r => r.json()),
          fetch('/api/contact/').then(r => r.json()),
          fetch('/api/requests/').then(r => r.json()),
          fetch('/api/team/').then(r => r.json()),
          fetch('/api/accounts/clients/').then(r => r.json())
        ])
        .then(([projects, messages, quotes, team, clients]) => {
          const hasProjectsChanged = JSON.stringify(projects) !== JSON.stringify(dbProjects);
          const hasMessagesChanged = JSON.stringify(messages) !== JSON.stringify(dbMessages);
          const hasQuotesChanged = JSON.stringify(quotes) !== JSON.stringify(dbQuotes);
          const hasTeamChanged = JSON.stringify(team) !== JSON.stringify(dbTeam);
          const hasClientsChanged = JSON.stringify(clients) !== JSON.stringify(dbClients);

          if (hasProjectsChanged || hasMessagesChanged || hasQuotesChanged || hasTeamChanged || hasClientsChanged) {
            dbProjects = projects;
            dbMessages = messages;
            dbQuotes = quotes;
            dbTeam = team;
            dbClients = clients;

            const activeSection = document.querySelector('.db-menu-item.active');
            if (activeSection) {
              const sectionId = activeSection.getAttribute('data-section');
              const listSections = ['stats', 'portfolio', 'messages', 'quotes', 'clients'];
              if (listSections.includes(sectionId)) {
                const scrollPos = window.scrollY;
                renderSection(sectionId);
                window.scrollTo({ top: scrollPos, behavior: 'instant' });
              }
            }
          }
        })
        .catch(err => console.error("Silent dashboard polling failed:", err));
      }, 3000);
    }

    // Operational Sections
    const sections = {
      stats: () => {
        const portCount = dbProjects.length;
        const msgCount = dbMessages.length;
        const quoteCount = dbQuotes.length;
        const pipeline = getPipelineVal();

        return `
          <div class="db-header">
            <div>
              <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'إحصائيات واجهات الموقع' : 'Frontend UI Dashboard'}</h2>
              <p class="db-title-desc">${isAr ? 'مراقبة فورية لأداء تحميل الأكواد وتفاعلات استفسارات العملاء.' : 'Live feedback monitors tracking client layout requests.'}</p>
            </div>
          </div>
          
          <div class="db-stats-grid">
            <div class="db-stat-card">
              <div class="db-stat-info">
                <span class="db-stat-label">${isAr ? 'إجمالي الأرباح (يتحكم به المدير)' : 'Pipeline Value'}</span>
                <span class="db-stat-value">$${parseFloat(pipeline).toLocaleString()}</span>
                <span class="db-stat-label">${isAr ? 'تم الحفظ محلياً' : 'Saved locally'}</span>
              </div>
              <div class="db-stat-icon"><i class="fas fa-dollar-sign"></i></div>
            </div>
            
            <div class="db-stat-card">
              <div class="db-stat-info">
                <span class="db-stat-label">${isAr ? 'الرسائل النشطة (من العملاء)' : 'Dynamic Inquiries'}</span>
                <span class="db-stat-value">${msgCount}</span>
                <span class="db-stat-label">${isAr ? 'رسالة واردة' : 'Messages'}</span>
              </div>
              <div class="db-stat-icon"><i class="fas fa-envelope"></i></div>
            </div>

            <div class="db-stat-card">
              <div class="db-stat-info">
                <span class="db-stat-label">${isAr ? 'طلبات عروض الأسعار (من الحاسبة)' : 'Dynamic Quote Requests'}</span>
                <span class="db-stat-value">${quoteCount}</span>
                <span class="db-stat-label">${isAr ? 'طلب سعر مخصص' : 'Quote Submissions'}</span>
              </div>
              <div class="db-stat-icon"><i class="fas fa-file-invoice-dollar"></i></div>
            </div>
          </div>

          <div class="db-charts-grid">
            <div class="db-panel">
              <div class="db-panel-header">
                <h3 class="db-panel-title">${isAr ? 'مشاريع معرض الأعمال المرفوعة' : 'Portfolio Desk Projects'}</h3>
              </div>
              <div style="font-size: 1.1rem; padding: 1.5rem 0; font-weight:600; color: var(--color-accent-1);">
                ${isAr ? 'المشاريع المنشورة حالياً:' : 'Active website projects:'} <span style="font-size: 2rem; font-weight:800; font-family: var(--font-en); margin-left: 10px;">${portCount}</span>
              </div>
            </div>

            <div class="db-panel">
              <div class="db-panel-header">
                <h3 class="db-panel-title">${isAr ? 'نشاط محرك الواجهات' : 'Layout Engine Speed'}</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1rem;">
                <div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 5px;">
                    <span>Lighthouse Performance</span>
                    <span>99.8%</span>
                  </div>
                  <div style="width: 100%; height: 6px; background: var(--border-color); border-radius: 3px;">
                    <div style="width: 99.8%; height: 100%; background: var(--color-accent-1); border-radius: 3px;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      },
      portfolio: () => {
        return `
          <div class="db-header">
            <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'إدارة معرض الأعمال والمشاريع' : 'Manage Portfolio Desk'}</h2>
          </div>
          
          <div class="grid-2" style="gap: 2rem;">
            <!-- Form to Add Projects -->
            <div class="db-panel glow-cyan">
              <h3 style="margin-bottom: 1.5rem;">${isAr ? 'إضافة عمل جديد للمعرض' : 'Add New Portfolio Project'}</h3>
              <form id="db-portfolio-form">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 1.2rem;">
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label" style="font-weight:600;">${isAr ? 'عنوان المشروع (بالعربية)' : 'Project Title (AR)'}</label>
                    <input type="text" id="p-title-ar" class="form-control" required placeholder="مثال: متجر زينث">
                  </div>
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label" style="font-weight:600;">${isAr ? 'عنوان المشروع (بالإنجليزية)' : 'Project Title (EN)'}</label>
                    <input type="text" id="p-title-en" class="form-control" required placeholder="e.g. Zenith E-Commerce">
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 1.2rem;">
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label" style="font-weight:600;">${isAr ? 'اسم العميل (بالعربية)' : 'Client / Brand (AR)'}</label>
                    <input type="text" id="p-client-ar" class="form-control" required placeholder="مثال: شركة زينث">
                  </div>
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label" style="font-weight:600;">${isAr ? 'اسم العميل (بالإنجليزية)' : 'Client / Brand (EN)'}</label>
                    <input type="text" id="p-client-en" class="form-control" required placeholder="e.g. Zenith Inc">
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="form-label">${isAr ? 'تصنيف المشروع الرئيسي (الخدمة)' : 'Core Project Category'}</label>
                  <select id="p-category" class="form-control">
                    <option value="vanilla">HTML, CSS, JS</option>
                    <option value="react">HTML, CSS, JS (React)</option>
                    <option value="vue">HTML, CSS, JS (Vue)</option>
                    <option value="angular">HTML, CSS, JS (Angular)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">${isAr ? 'المكتبات وبيئات العمل المستخدمة' : 'Used CSS & JS Libraries'}</label>
                  <select id="p-library" class="form-control">
                    <option value="none">${isAr ? 'بدون مكتبة إضافية' : 'No Additional Library'}</option>
                    <option value="Sass">Sass</option>
                    <option value="Jquery">Jquery</option>
                    <option value="Bootstrap">Bootstrap</option>
                    <option value="Tailwind">Tailwind</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">${isAr ? 'رابط أو مسار معاينة المشروع' : 'Project Live URL or Subpath'}</label>
                  <input type="text" id="p-link" class="form-control" placeholder="e.g. https://...">
                </div>

                <div class="form-group">
                  <label class="form-label" style="font-weight:600;">${isAr ? 'وصف المشروع (بالعربية)' : 'Description (AR)'}</label>
                  <textarea id="p-desc-ar" class="form-control" rows="2" required placeholder="الوصف بالعربية..." style="resize:none;"></textarea>
                </div>
                <div class="form-group">
                  <label class="form-label" style="font-weight:600;">${isAr ? 'وصف المشروع (بالإنجليزية)' : 'Description (EN)'}</label>
                  <textarea id="p-desc-en" class="form-control" rows="2" required placeholder="Description in English..." style="resize:none;"></textarea>
                </div>

                <div id="p-upload-status" style="margin-bottom: 1rem; display:none; color: var(--color-accent-1); font-size: 0.9rem; font-weight:600;"></div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">${isAr ? 'نشر المشروع إلى المعرض فوراً' : 'Publish Project'}</button>
              </form>
            </div>

            <!-- List of Published Projects -->
            <div class="db-panel">
              <h3 style="margin-bottom: 1.5rem;">${isAr ? 'المشاريع المنشورة حالياً' : 'Currently Active Projects'}</h3>
              <div class="db-list" id="db-portfolio-list-wrapper">
                ${dbProjects.map((item) => {
                  const parseLang = (str) => {
                    if (!str) return '';
                    if (str.includes('|')) {
                      const parts = str.split('|');
                      return isAr ? parts[0].trim() : parts[1].trim();
                    }
                    return str;
                  };
                  return `
                    <div class="db-list-item" style="flex-direction: column; align-items: stretch; gap: 12px;">
                      <div class="db-list-details">
                        <span class="db-list-title" style="color:var(--color-accent-1); font-weight:700;">${parseLang(item.title)}</span>
                        <span class="db-list-meta">${item.badge} | ${parseLang(item.client)}</span>
                      </div>
                      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 10px; width: 100%;">
                        <button class="btn btn-secondary db-delete-portfolio-btn" data-id="${item.id}" style="padding: 4px 10px; font-size: 0.8rem; color: var(--color-accent-3); border-color: var(--color-accent-3);">
                          ${isAr ? 'حذف' : 'Purge'}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
                ${dbProjects.length === 0 ? `<p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">${isAr ? 'معرض الأعمال فارغ حالياً.' : 'No projects active.'}</p>` : ''}
              </div>
            </div>
          </div>
        `;
      },
      messages: () => {
        return `
          <div class="db-header">
            <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'استفسارات ورسائل العملاء الحية' : 'Dynamic Visitor Messages'}</h2>
          </div>
          <div class="db-panel">
            <div class="db-list">
              ${dbMessages.map(m => `
                <div class="db-list-item" style="opacity: ${m.read ? 0.7 : 1}; flex-direction: column; align-items: stretch; gap: 12px;">
                  <div class="db-list-details">
                    <span class="db-list-title" style="color: var(--color-accent-1); font-weight:bold;">[${m.subject}] ${m.name}</span>
                    <span class="db-list-meta">${m.email} ${m.phone ? `| ${m.phone}` : ''}</span>
                    <span class="db-list-meta" style="font-size: 0.8rem; color: var(--text-muted);">${new Date(m.created_date).toLocaleString()}</span>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 10px; width: 100%;">
                    <div style="display: flex; gap: 10px; align-items: center;">
                      <button class="btn btn-primary db-preview-msg-btn" data-id="${m.id}" style="padding: 4px 12px; font-size: 0.8rem; font-weight:600;">
                        ${isAr ? 'معاينة' : 'Preview'}
                      </button>
                      <span class="db-list-action delete-msg-btn" data-id="${m.id}" style="color:var(--color-accent-3); cursor:pointer; font-size:0.85rem;">
                        ${isAr ? 'حذف' : 'Purge'}
                      </span>
                    </div>
                    <span class="db-list-action toggle-read-btn" data-id="${m.id}" style="cursor:pointer; font-weight:600; font-size:0.85rem;">
                      ${m.read ? (isAr ? 'تمت القراءة' : 'Read') : (isAr ? 'تعليم كمقروء' : 'Mark Read')}
                    </span>
                  </div>
                </div>
              `).join('')}
              ${dbMessages.length === 0 ? `<p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">${isAr ? 'لا توجد رسائل واردة حالياً من العملاء.' : 'Inbox is empty.'}</p>` : ''}
            </div>
          </div>
        `;
      },
      quotes: () => {
        return `
          <div class="db-header">
            <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'طلبات عروض الأسعار المرسلة من الحاسبة' : 'Dynamic Quote Requests'}</h2>
          </div>
          <div class="db-panel">
            <div class="db-list">
              ${dbQuotes.map(q => `
                <div class="db-list-item" style="flex-direction: column; align-items: stretch; gap: 12px;">
                  <div class="db-list-details">
                    <span class="db-list-title" style="color: var(--color-accent-1); font-weight:bold;">${q.service_type}</span>
                    <span style="font-size: 0.9rem; color: var(--text-secondary);">${isAr ? 'العميل:' : 'Client:'} ${q.name} | ${q.email}</span>
                    <span class="db-list-meta">${isAr ? 'الصفحات المطلوبة:' : 'Pages Target:'} ${q.pages}</span>
                  </div>
                  <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between; flex-wrap: wrap; border-top: 1px solid var(--border-color); padding-top: 10px; width: 100%;">
                    <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                      ${q.status === 'new' ? `
                        <button class="btn btn-secondary db-ack-quote-btn" data-id="${q.id}" style="padding: 4px 10px; font-size: 0.8rem; color: var(--color-accent-1); border-color: var(--color-accent-1); font-weight:600;">
                          ${isAr ? 'تأكيد الاستلام' : 'Acknowledge'}
                        </button>
                      ` : `
                        <span style="font-size: 0.8rem; font-weight: 700; color: #00ff88; background: rgba(0, 255, 136, 0.1); padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(0, 255, 136, 0.2);">
                          ${isAr ? '✓ تم الاستلام' : '✓ Acknowledged'}
                        </span>
                      `}
                      <button class="btn btn-primary db-preview-quote-btn" data-id="${q.id}" style="padding: 4px 12px; font-size: 0.8rem; font-weight:600;">
                        ${isAr ? 'معاينة' : 'Preview'}
                      </button>
                      <button class="btn btn-secondary delete-quote-btn" data-id="${q.id}" style="padding: 4px 10px; font-size: 0.8rem; color: var(--color-accent-3); border-color: var(--color-accent-3);">
                        ${isAr ? 'حذف' : 'Purge'}
                      </button>
                    </div>
                    <div style="text-align: right; font-weight: 800; font-size: 1.25rem; color: var(--color-accent-2); font-family: var(--font-en);">
                      ${q.estimate}
                    </div>
                  </div>
                </div>
              `).join('')}
              ${dbQuotes.length === 0 ? `<p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">${isAr ? 'لا توجد عروض سعر مرسلة حالياً.' : 'No quotes submitted yet.'}</p>` : ''}
            </div>
          </div>
        `;
      },
      users: () => {
        return `
          <div class="db-header">
            <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'إدارة المستخدمين وأعضاء الفريق' : 'Team Members Desk'}</h2>
          </div>
          <div class="grid-2" style="gap: 2rem;">
            <div class="db-panel">
              <h3 style="margin-bottom: 1.5rem;">${isAr ? 'أعضاء الفريق النشطين' : 'Active Team Nodes'}</h3>
              <div class="db-list">
                ${dbTeam.map((t, idx) => `
                  <div class="db-list-item">
                    <div class="db-list-details">
                      <span class="db-list-title" style="font-weight:700;">${t.name}</span>
                      <span class="db-list-meta" style="color: var(--color-accent-1); font-weight:600; text-transform:uppercase;">${t.role}</span>
                      <span class="db-list-meta">${t.email}</span>
                    </div>
                    <!-- Allow delete only if NOT the main CEO/Founder Amgad Badr -->
                    ${idx > 0 ? `
                      <button class="btn btn-secondary db-delete-team-btn" data-id="${t.id}" style="padding: 4px 10px; font-size: 0.8rem; color: var(--color-accent-3); border-color: var(--color-accent-3);">
                        ${isAr ? 'حذف' : 'Dismiss'}
                      </button>
                    ` : `<span style="font-size:0.8rem; color:var(--text-muted); font-weight:bold;">${isAr ? 'المدير العام' : 'CEO Owner'}</span>`}
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="db-panel glow-cyan">
              <h3 style="margin-bottom: 1.5rem;">${isAr ? 'إضافة عضو جديد للفريق' : 'Add New Team Member'}</h3>
              <form id="db-team-form">
                <div class="form-group">
                  <input type="text" id="team-name" class="form-control" placeholder="${isAr ? 'الاسم بالكامل' : 'Full Name'}" required>
                </div>
                <div class="form-group">
                  <input type="text" id="team-role" class="form-control" placeholder="${isAr ? 'الدور / الوظيفة' : 'Job Role'}" required>
                </div>
                <div class="form-group">
                  <input type="email" id="team-email" class="form-control" placeholder="${isAr ? 'البريد الإلكتروني للعمل' : 'Work Email'}" required>
                </div>

                <!-- Languages Field -->
                <div class="form-group" style="margin-bottom: 1.2rem;">
                  <label class="form-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.85rem;">${isAr ? 'لغات البرمجة (اختر ما ينطبق):' : 'Programming Languages:'}</label>
                  <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 5px;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lang-check" value="HTML" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>HTML</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lang-check" value="HTML & CSS" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>HTML & CSS</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lang-check" value="HTML, CSS & JS" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>HTML, CSS & JS</span>
                    </label>
                  </div>
                </div>

                <!-- Libraries Field -->
                <div class="form-group" style="margin-bottom: 1.2rem;">
                  <label class="form-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.85rem;">${isAr ? 'المكتبات المستخدمة (اختر ما ينطبق):' : 'Libraries:'}</label>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; padding-left: 5px;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lib-check" value="Bootstrap" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>Bootstrap</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lib-check" value="Sass" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>Sass / SCSS</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lib-check" value="Tailwind" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>Tailwind</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-lib-check" value="jQuery" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>jQuery</span>
                    </label>
                  </div>
                </div>

                <!-- Frameworks Field -->
                <div class="form-group" style="margin-bottom: 1.2rem;">
                  <label class="form-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.85rem;">${isAr ? 'بيئات العمل / Frameworks (اختر ما ينطبق):' : 'Frameworks:'}</label>
                  <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 5px;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-fw-check" value="React" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>React</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-fw-check" value="Vue" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>Vue</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                      <input type="checkbox" class="team-fw-check" value="Angular" style="accent-color: var(--color-accent-1); width: 15px; height: 15px;">
                      <span>Angular</span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <textarea id="team-bio" class="form-control" rows="2" placeholder="${isAr ? 'نبذة مختصرة عن خبراته...' : 'Short bio...'}" required style="resize:none;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">${isAr ? 'إدراج العضو للفريق' : 'Save Member'}</button>
              </form>
            </div>
          </div>
        `;
      },
      clients: () => {
        return `
          <div class="db-header">
            <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'قائمة العملاء المسجلين بالمنصة' : 'Registered Clients Database'}</h2>
          </div>
          <div class="db-panel">
            <h3 style="margin-bottom: 1.5rem;">${isAr ? 'العملاء النشطين' : 'Active Client Nodes'}</h3>
            <div class="db-list">
              ${dbClients.map(c => `
                <div class="db-list-item" style="flex-direction: column; align-items: stretch; gap: 12px;">
                  <div class="db-list-details">
                    <span class="db-list-title" style="font-weight:700;">${c.first_name} ${c.last_name}</span>
                    <span class="db-list-meta" style="color: var(--color-accent-1); font-family: var(--font-en); font-weight: 600;">@${c.username}</span>
                    <span class="db-list-meta" style="color: var(--text-secondary);">${c.email}</span>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 10px; width: 100%;">
                    <div style="font-size:0.8rem; color:var(--text-muted); text-align: right;">
                      ${isAr ? 'تاريخ التسجيل:' : 'Joined:'} ${new Date(c.date_joined).toLocaleDateString()}
                    </div>
                    <button class="btn btn-secondary delete-client-btn" data-id="${c.id}" style="padding: 4px 10px; font-size: 0.8rem; color: var(--color-accent-3); border-color: var(--color-accent-3);">
                      ${isAr ? 'حذف' : 'Purge'}
                    </button>
                  </div>
                </div>
              `).join('')}
              ${dbClients.length === 0 ? `<p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">${isAr ? 'لا يوجد عملاء مسجلين حالياً.' : 'No registered clients found.'}</p>` : ''}
            </div>
          </div>
        `;
      },
      settings: () => {
        const pipeline = getPipelineVal();
        return `
          <div class="db-header">
            <h2 style="font-size: 1.8rem; font-weight: 800;">${isAr ? 'إعدادات النظام والتحليلات' : 'System Preferences'}</h2>
          </div>
          <div class="db-panel" style="max-width: 600px;">
            <h3 style="margin-bottom: 1.5rem;">${isAr ? 'التحكم باللوحة والأرباح' : 'UI & Pipeline Preferences'}</h3>
            
            <form id="db-pipeline-form">
              <div class="form-group">
                <label class="form-label">${isAr ? 'تحديث إجمالي قيمة الأرباح ($)' : 'Total Pipeline Value ($)'}</label>
                <input type="number" id="p-pipeline-input" class="form-control" value="${pipeline}" min="0" placeholder="e.g. 150000">
              </div>
              <button type="submit" class="btn btn-primary" style="margin-bottom: 2rem;">${isAr ? 'تحديث قيمة الأرباح' : 'Update Pipeline Value'}</button>
            </form>

            <div class="form-group" style="border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
              <label class="form-label">${isAr ? 'تبديل ألوان الموقع العام' : 'Toggle Visual Scheme'}</label>
              <button id="db-theme-toggle" class="btn btn-secondary" style="width: 100%;">
                ${isAr ? 'تبديل الثيم الداكن / الفاتح' : 'Toggle Theme'}
              </button>
            </div>
          </div>
        `;
      }
    };

    const viewport = document.getElementById('db-content-viewport');
    const menuItems = document.querySelectorAll('.db-menu-item');

    function renderSection(sectionId) {
      if (!viewport || !sections[sectionId]) return;
      viewport.innerHTML = sections[sectionId]();
      bindInnerEvents(sectionId);
    }

    function bindInnerEvents(sectionId) {
      // 1. Portfolio Actions
      if (sectionId === 'portfolio') {
        const form = document.getElementById('db-portfolio-form');
        if (form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const titleAr = document.getElementById('p-title-ar').value.trim();
            const titleEn = document.getElementById('p-title-en').value.trim();
            const clientAr = document.getElementById('p-client-ar').value.trim();
            const clientEn = document.getElementById('p-client-en').value.trim();
            const descAr = document.getElementById('p-desc-ar').value.trim();
            const descEn = document.getElementById('p-desc-en').value.trim();

            const title = `${titleAr} | ${titleEn}`;
            const client = `${clientAr} | ${clientEn}`;
            const desc = `${descAr} | ${descEn}`;

            const category = document.getElementById('p-category').value;
            const library = document.getElementById('p-library').value;
            let link = document.getElementById('p-link').value.trim();
            if (link && !/^https?:\/\//i.test(link)) {
              link = 'https://' + link;
            }
            const statusBox = document.getElementById('p-upload-status');

            let catLabel = 'HTML, CSS, JS';
            if (category === 'react') catLabel = 'React';
            if (category === 'vue') catLabel = 'Vue';
            if (category === 'angular') catLabel = 'Angular';
            const badge = library !== 'none' ? `${catLabel} & ${library}` : catLabel;

            const payload = {
              title,
              client,
              category,
              badge,
              description: desc,
              live_url: link,
              published: true,
              glow: 'glow-cyan'
            };

            if (statusBox) {
              statusBox.style.display = 'block';
              statusBox.style.color = 'var(--color-accent-1)';
              statusBox.textContent = isAr ? 'جاري نشر المشروع...' : 'Publishing project record...';
            }

            fetch('/api/projects/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') || ''
              },
              body: JSON.stringify(payload)
            })
            .then(res => {
              if (!res.ok) throw new Error('API write failed');
              return res.json();
            })
            .then(() => {
              loadAllDashboardData();
            })
            .catch(err => {
              console.error(err);
              if (statusBox) {
                statusBox.style.color = 'var(--color-accent-3)';
                statusBox.textContent = isAr ? '❌ فشل النشر بقاعدة البيانات!' : '❌ Database write failed!';
              }
            });
          });
        }

        const deleteButtons = document.querySelectorAll('.db-delete-portfolio-btn');
        deleteButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (confirm(isAr ? 'هل أنت متأكد من حذف المشروع؟' : 'Purge this project from the database?')) {
              fetch(`/api/projects/${id}/`, {
                method: 'DELETE',
                headers: {
                  'X-CSRFToken': getCookie('csrftoken') || ''
                }
              })
              .then(() => {
                loadAllDashboardData();
              });
            }
          });
        });
      }

      // 2. Message Actions
      if (sectionId === 'messages') {
        const previewButtons = document.querySelectorAll('.db-preview-msg-btn');
        previewButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            const msg = dbMessages.find(m => m.id === id);
            if (msg) {
              openMessagePreviewModal(msg);
            }
          });
        });

        const readButtons = document.querySelectorAll('.toggle-read-btn');
        readButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            const msg = dbMessages.find(m => m.id === id);
            if (msg) {
              fetch(`/api/contact/${id}/`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': getCookie('csrftoken') || ''
                },
                body: JSON.stringify({ read: !msg.read })
              })
              .then(() => {
                loadAllDashboardData();
              });
            }
          });
        });

        const deleteButtons = document.querySelectorAll('.delete-msg-btn');
        deleteButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            if (confirm(isAr ? 'هل أنت متأكد من حذف هذه الرسالة؟' : 'Purge this message?')) {
              fetch(`/api/contact/${id}/`, {
                method: 'DELETE',
                headers: {
                  'X-CSRFToken': getCookie('csrftoken') || ''
                }
              })
              .then(() => {
                loadAllDashboardData();
              });
            }
          });
        });
      }

      // 3. Quote Actions
      if (sectionId === 'quotes') {
        const previewQuoteButtons = document.querySelectorAll('.db-preview-quote-btn');
        previewQuoteButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            const quote = dbQuotes.find(q => q.id === id);
            if (quote) {
              openQuotePreviewModal(quote);
            }
          });
        });

        const ackButtons = document.querySelectorAll('.db-ack-quote-btn');
        ackButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            fetch(`/api/requests/${id}/`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') || ''
              },
              body: JSON.stringify({ status: 'accepted' })
            })
            .then(() => {
              loadAllDashboardData();
            });
          });
        });

        const deleteQuotes = document.querySelectorAll('.delete-quote-btn');
        deleteQuotes.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            if (confirm(isAr ? 'هل أنت متأكد من حذف طلب السعر؟' : 'Purge this quote request?')) {
              fetch(`/api/requests/${id}/`, {
                method: 'DELETE',
                headers: {
                  'X-CSRFToken': getCookie('csrftoken') || ''
                }
              })
              .then(() => {
                loadAllDashboardData();
              });
            }
          });
        });
      }

      // 4. Team Registry Actions
      if (sectionId === 'users') {
        const form = document.getElementById('db-team-form');
        if (form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('team-name').value;
            const role = document.getElementById('team-role').value;
            const email = document.getElementById('team-email').value;
            const bio = document.getElementById('team-bio').value;

            // Generate initials automatically from name
            const initials = name.trim().split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'Æ';

            const langs = [];
            document.querySelectorAll('.team-lang-check:checked').forEach(cb => langs.push(cb.value));

            const libs = [];
            document.querySelectorAll('.team-lib-check:checked').forEach(cb => libs.push(cb.value));

            const fws = [];
            document.querySelectorAll('.team-fw-check:checked').forEach(cb => fws.push(cb.value));

            const glows = ['glow-cyan', 'glow-purple', 'glow-pink'];
            const glow = glows[Math.floor(Math.random() * glows.length)];

            const payload = {
              name,
              role,
              email,
              initials,
              glow,
              bio,
              langs,
              libs,
              fws
            };

            fetch('/api/team/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') || ''
              },
              body: JSON.stringify(payload)
            })
            .then(res => {
              if (!res.ok) throw new Error('API write failed');
              return res.json();
            })
            .then(() => {
              loadAllDashboardData();
            })
            .catch(err => {
              console.error(err);
              alert(isAr ? '❌ فشل إضافة العضو!' : '❌ Failed to add member!');
            });
          });
        }

        const deleteTeam = document.querySelectorAll('.db-delete-team-btn');
        deleteTeam.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (confirm(isAr ? 'هل أنت متأكد من إنهاء عضوية هذا العضو؟' : 'Dismiss this member?')) {
              fetch(`/api/team/${id}/`, {
                method: 'DELETE',
                headers: {
                  'X-CSRFToken': getCookie('csrftoken') || ''
                }
              })
              .then(() => {
                loadAllDashboardData();
              });
            }
          });
        });
      }

      // 5. Clients Registry Actions
      if (sectionId === 'clients') {
        const deleteClients = document.querySelectorAll('.delete-client-btn');
        deleteClients.forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (confirm(isAr ? 'هل أنت متأكد من حذف هذا العميل تماماً من النظام؟' : 'Purge this client account completely?')) {
              fetch(`/api/accounts/clients/${id}/`, {
                method: 'DELETE',
                headers: {
                  'X-CSRFToken': getCookie('csrftoken') || ''
                }
              })
              .then(() => {
                loadAllDashboardData();
              });
            }
          });
        });
      }

      // 5. System Settings Actions
      if (sectionId === 'settings') {
        const pipelineForm = document.getElementById('db-pipeline-form');
        if (pipelineForm) {
          pipelineForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = document.getElementById('p-pipeline-input').value;
            localStorage.setItem('aether-stat-pipeline', val);
            alert(isAr ? '✓ تم تحديث قيمة الأرباح التقديرية بنجاح!' : '✓ Pipeline value updated successfully!');
            renderSection('settings');
          });
        }

        const toggleThemeBtn = document.getElementById('db-theme-toggle');
        if (toggleThemeBtn) {
          toggleThemeBtn.addEventListener('click', () => {
            window.AetherTheme.toggleTheme();
          });
        }
      }
    }

    // Modal view helper for Messages
    function openMessagePreviewModal(msg) {
      const modalOverlay = document.createElement('div');
      modalOverlay.id = 'msg-preview-modal-overlay';
      modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(8, 3, 37, 0.85);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        overflow-y: auto;
        z-index: 99999;
        padding: 40px 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;

      const modalContent = document.createElement('div');
      modalContent.className = 'glass-card glow-cyan';
      modalContent.style.cssText = `
        width: 100%;
        max-width: 550px;
        padding: 2.5rem;
        position: relative;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        text-align: ${isAr ? 'right' : 'left'};
        direction: ${isAr ? 'rtl' : 'ltr'};
      `;

      modalContent.innerHTML = `
        <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: var(--color-accent-1); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; text-align: ${isAr ? 'right' : 'left'};">
          ${isAr ? '📂 تفاصيل الرسالة الواردة' : '📂 Client Message Details'}
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.95rem; line-height: 1.6; text-align: ${isAr ? 'right' : 'left'};">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: ${isAr ? 'right' : 'left'};">
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'اسم العميل:' : 'Client Name:'}</strong>
              <span style="color: var(--text-secondary);">${msg.name}</span>
            </div>
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'البريد الإلكتروني للعميل:' : 'Corporate Email:'}</strong>
              <span style="color: var(--text-secondary); font-family: var(--font-en);">${msg.email}</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: ${isAr ? 'right' : 'left'};">
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'رقم الهاتف:' : 'Telephone Number:'}</strong>
              <span style="color: var(--text-secondary); font-family: var(--font-en); direction: ltr; display: inline-block;">${msg.phone || (isAr ? 'غير مسجل' : 'Not recorded')}</span>
            </div>
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'موضوع الرسالة:' : 'Subject Context:'}</strong>
              <span style="color: var(--color-accent-2);">${msg.subject}</span>
            </div>
          </div>

          <div style="border-top: 1px dashed var(--border-color); padding-top: 15px; margin-top: 5px; text-align: ${isAr ? 'right' : 'left'};">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 8px;">${isAr ? 'محتوى ونصوص الاستفسار:' : 'Bespoke Requirements Details:'}</strong>
            <div style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: var(--radius-xs); border: 1px solid var(--border-color); color: var(--text-secondary); white-space: pre-wrap; font-size: 0.9rem; text-align: ${isAr ? 'right' : 'left'};">${msg.message || msg.msg}</div>
          </div>
          
          <div style="font-size: 0.8rem; color: var(--text-muted); text-align: ${isAr ? 'left' : 'right'};">
            ${isAr ? 'تاريخ الاستلام:' : 'Received:'} ${new Date(msg.created_date).toLocaleString()}
          </div>
        </div>

        <button id="close-msg-modal-btn" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
          ${isAr ? 'إغلاق نافذة المعاينة' : 'Dismiss Preview'}
        </button>
      `;

      modalOverlay.appendChild(modalContent);
      document.body.appendChild(modalOverlay);

      setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
      }, 50);

      const closeBtn = modalOverlay.querySelector('#close-msg-modal-btn');
      closeBtn.addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });

      function closeModal() {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
          modalOverlay.remove();
        }, 300);
      }
    }

    // Modal view helper for Quotes
    function openQuotePreviewModal(quote) {
      const modalOverlay = document.createElement('div');
      modalOverlay.id = 'quote-preview-modal-overlay';
      modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(8, 3, 37, 0.85);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        overflow-y: auto;
        z-index: 99999;
        padding: 40px 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;

      const modalContent = document.createElement('div');
      modalContent.className = 'glass-card glow-purple';
      modalContent.style.cssText = `
        width: 100%;
        max-width: 600px;
        padding: 2.5rem;
        position: relative;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        text-align: ${isAr ? 'right' : 'left'};
        direction: ${isAr ? 'rtl' : 'ltr'};
      `;

      modalContent.innerHTML = `
        <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: var(--color-accent-1); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; text-align: ${isAr ? 'right' : 'left'};">
          ${isAr ? '🧾 تفاصيل ميزانية الواجهة المقدرة' : '🧾 Quote Request Details'}
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.95rem; line-height: 1.6; text-align: ${isAr ? 'right' : 'left'};">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: ${isAr ? 'right' : 'left'};">
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'العميل:' : 'Client:'}</strong>
              <span style="color: var(--text-secondary);">${quote.name}</span>
            </div>
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'البريد الإلكتروني للعمل:' : 'Email Address:'}</strong>
              <span style="color: var(--text-secondary); font-family: var(--font-en);">${quote.email}</span>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: ${isAr ? 'right' : 'left'};">
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'الهاتف:' : 'Phone Number:'}</strong>
              <span style="color: var(--text-secondary); font-family: var(--font-en);">${quote.phone || (isAr ? 'غير متوفر' : 'Not provided')}</span>
            </div>
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'تصنيف الواجهة الأساسي:' : 'Core Frontend Focus:'}</strong>
              <span style="color: var(--color-accent-2); font-weight:600;">${quote.service_type}</span>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: ${isAr ? 'right' : 'left'};">
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'عدد صفحات العرض:' : 'Pages Count:'}</strong>
              <span style="color: var(--text-secondary); font-family:var(--font-en); font-weight:700;">${quote.pages} ${isAr ? 'صفحات' : 'pages'}</span>
            </div>
            <div>
              <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${isAr ? 'رابط ملف Figma / الشركة:' : 'Figma / Corporate:'}</strong>
              <span>
                ${quote.company 
                  ? `<a href="${quote.company}" target="_blank" style="color:var(--color-accent-1); text-decoration:underline; font-family:var(--font-en);">${quote.company}</a>` 
                  : (isAr ? 'غير مرفق' : 'No link provided')}
              </span>
            </div>
          </div>

          ${quote.description ? `
            <div style="border-top: 1px dashed var(--border-color); padding-top: 15px; text-align: ${isAr ? 'right' : 'left'};">
              <strong style="color: var(--text-primary); display: block; margin-bottom: 6px;">${isAr ? 'ملاحظات وتفاصيل إضافية للمشروع:' : 'Bespoke Specifications:'}</strong>
              <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: var(--radius-xs); border: 1px solid var(--border-color); font-size:0.9rem; color:var(--text-secondary); white-space:pre-wrap; text-align: ${isAr ? 'right' : 'left'};">${quote.description}</div>
            </div>
          ` : ''}
          
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:15px; margin-top:10px; text-align: ${isAr ? 'right' : 'left'};">
            <span style="font-size:0.8rem; color:var(--text-muted);">${isAr ? 'تاريخ الحساب:' : 'Calculated on:'} ${new Date(quote.created_date).toLocaleString()}</span>
            <div style="text-align: ${isAr ? 'left' : 'right'};">
              <strong style="font-size:0.95rem; color:var(--text-secondary); margin-right:8px; ${isAr ? 'margin-left:8px;' : ''}">${isAr ? 'الميزانية المقدرة:' : 'Total Estimate:'}</strong>
              <span style="font-size:1.8rem; font-weight:900; color:var(--color-accent-1); font-family:var(--font-en);">${quote.estimate}</span>
            </div>
          </div>
        </div>

        <button id="close-quote-modal-btn" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
          ${isAr ? 'إغلاق نافذة المعاينة' : 'Dismiss Preview'}
        </button>
      `;

      modalOverlay.appendChild(modalContent);
      document.body.appendChild(modalOverlay);

      setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
      }, 50);

      const closeBtn = modalOverlay.querySelector('#close-quote-modal-btn');
      closeBtn.addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });

      function closeModal() {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
          modalOverlay.remove();
        }, 300);
      }
    }

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        renderSection(section);
      });
    });

    // Bootloader: Load all server entries dynamically
    loadAllDashboardData();
  }
};
