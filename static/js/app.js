/* Application Entrypoint & Orchestration Script - AetherCore Technologies */

// Run setup routines on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Managers
  window.AetherTheme.initTheme();
  window.AetherLang.initLang();
  window.AetherParticles.initParticles();
  
  // Set up Header and Footer dynamic translation updates
  window.updateSharedTranslations();

  // Check client auth status immediately
  fetch('/api/accounts/status/')
    .then(res => res.json())
    .then(data => {
      window.AetherClientLoggedIn = data.isAuthenticated;
      if (data.isAuthenticated) {
        window.AetherClientEmail = data.email;
        window.AetherClientName = data.username;
      }
      window.updateHeaderAuthUI();
      window.AetherRouter.renderCurrentRoute();
    })
    .catch(() => {
      window.AetherClientLoggedIn = false;
      window.updateHeaderAuthUI();
      window.AetherRouter.renderCurrentRoute();
    });
  
  // Setup loader dismissal
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 1200);
  }

  // Setup scrolling trackers
  setupScrollTrackers();

  // Bind Navbar Header interactions
  bindHeaderControls();
});

function setupScrollTrackers() {
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');
  const header = document.querySelector('.header-nav');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // 1. Progress Bar width calculation
    if (scrollProgress && docHeight > 0) {
      const scrollPct = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = `${scrollPct}%`;
    }

    // 2. Header shrinking class addition
    if (header) {
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // 3. Back to Top visibility toggle
    if (backToTop) {
      if (scrollTop > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
  });

  // Smooth scroll back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function bindHeaderControls() {
  // Brand Logo Click
  const logo = document.getElementById('nav-brand-logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.AetherRouter.navigateTo('home');
      closeMobileMenu();
    });
  }

  // Theme Toggler
  const themeBtn = document.getElementById('nav-theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      window.AetherTheme.toggleTheme();
    });
  }

  // Language Switcher
  const langBtn = document.getElementById('nav-lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      window.AetherLang.toggleLang();
      window.updateSharedTranslations();
      window.updateHeaderAuthUI();
    });
  }

  // Hamburger menu toggle for mobile viewports
  const hamburger = document.getElementById('nav-hamburger-trigger');
  const navMenu = document.getElementById('header-nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      
      const spans = hamburger.querySelectorAll('span');
      if (navMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Navbar Links dynamic routing clicks
  const navLinks = document.querySelectorAll('.nav-link[data-route]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const route = link.getAttribute('data-route');
      window.AetherRouter.navigateTo(route);
      closeMobileMenu();
    });
  });
}

function closeMobileMenu() {
  const navMenu = document.getElementById('header-nav-menu');
  const hamburger = document.getElementById('nav-hamburger-trigger');
  if (navMenu && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    if (hamburger) {
      hamburger.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }
}

// Update translations across the static layout shells (Header & Footer)
window.updateSharedTranslations = function() {
  const lang = window.AetherLang.getLang();

  // Translate Navbar
  const navLinks = document.querySelectorAll('.nav-link[data-route]');
  navLinks.forEach(link => {
    const route = link.getAttribute('data-route');
    if (route) {
      link.textContent = window.AetherI18n.getTranslation(`nav.${route}`, lang);
    }
  });

  // Translate Footer
  const footerDesc = document.getElementById('footer-desc-text');
  const footerSolTitle = document.getElementById('footer-solutions-title');
  const footerCompTitle = document.getElementById('footer-company-title');
  const footerCopy = document.getElementById('footer-copy-text');
  const footerPrivacy = document.getElementById('footer-privacy-link');
  const footerTerms = document.getElementById('footer-terms-link');
  const footerDb = document.getElementById('footer-db-link');

  if (footerDesc) footerDesc.textContent = window.AetherI18n.getTranslation('footer.desc', lang);
  if (footerSolTitle) footerSolTitle.textContent = window.AetherI18n.getTranslation('footer.solutions', lang);
  if (footerCompTitle) footerCompTitle.textContent = window.AetherI18n.getTranslation('footer.company', lang);
  if (footerCopy) footerCopy.textContent = window.AetherI18n.getTranslation('footer.copyright', lang);
  if (footerPrivacy) footerPrivacy.textContent = window.AetherI18n.getTranslation('footer.privacy', lang);
  if (footerTerms) footerTerms.textContent = window.AetherI18n.getTranslation('footer.terms', lang);
  if (footerDb) footerDb.textContent = window.AetherI18n.getTranslation('footer.dashboard', lang);
};

// Dynamic Client Auth UI & Notifications Manager
window.updateHeaderAuthUI = function() {
  const wrapper = document.getElementById('auth-header-wrapper');
  if (!wrapper) return;

  const lang = window.AetherLang.getLang();
  const isAr = lang === 'ar';

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

  if (window.AetherClientLoggedIn === true) {
    wrapper.innerHTML = `
      <!-- Dynamic Notifications Bell -->
      <div style="position: relative;" id="client-notification-container">
        <button id="nav-bell-btn" style="font-size: 1.15rem; color: var(--text-primary); position: relative; width: auto; height: auto; padding: 0 8px; background: transparent; border: none; cursor: pointer;">
          🔔
          <span id="nav-bell-dot" style="display: none; position: absolute; top: -2px; right: -2px; width: 8px; height: 8px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 8px #00ff88;"></span>
        </button>
      </div>

      <!-- Request Quote Link -->
      <button class="nav-cta" id="nav-quote-cta">${isAr ? 'طلب عرض سعر' : 'Request Quote'}</button>

      <!-- Logout Button -->
      <button class="btn btn-secondary" id="nav-client-logout-btn" style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; color: var(--color-accent-3); border-color: var(--color-accent-3); background: transparent;">
        ${isAr ? 'خروج' : 'Logout'}
      </button>
    `;

    // Bind Bell Click to navigate directly to dedicated My Requests Hub
    const bellBtn = document.getElementById('nav-bell-btn');
    if (bellBtn) {
      bellBtn.addEventListener('click', () => {
        window.AetherRouter.navigateTo('notifications');
      });
    }

    // Start background status tracking polling
    if (typeof window.startGlobalStatusPolling === 'function') {
      window.startGlobalStatusPolling();
    }

    // Logout action
    const logoutBtn = document.getElementById('nav-client-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        fetch('/api/accounts/logout/', {
          method: 'POST',
          headers: {
            'X-CSRFToken': getCookie('csrftoken') || ''
          }
        })
        .finally(() => {
          window.AetherClientLoggedIn = false;
          window.AetherClientEmail = null;
          window.AetherClientName = null;
          if (window.globalPollingInterval) clearInterval(window.globalPollingInterval);
          window.updateHeaderAuthUI();
          window.AetherRouter.navigateTo('home');
        });
      });
    }

    // Quote CTA
    const quoteCta = document.getElementById('nav-quote-cta');
    if (quoteCta) {
      quoteCta.addEventListener('click', () => {
        window.AetherRouter.navigateTo('quote');
      });
    }

  } else {
    wrapper.innerHTML = `
      <button class="nav-cta" id="nav-quote-cta">${isAr ? 'طلب عرض سعر' : 'Request Quote'}</button>
      <button id="nav-client-login-btn" style="padding: 6px 14px; font-size: 0.8rem; font-weight: 700; color: var(--color-accent-1); border: 1px solid var(--color-accent-1); background: transparent; border-radius: var(--radius-xs); cursor: pointer; display: flex; align-items: center; justify-content: center; height: 35px; white-space: nowrap;">
        ${isAr ? 'تسجيل دخول' : 'Login'}
      </button>
    `;

    const loginBtn = document.getElementById('nav-client-login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        window.AetherRouter.navigateTo('login');
      });
    }

    const quoteCta = document.getElementById('nav-quote-cta');
    if (quoteCta) {
      quoteCta.addEventListener('click', () => {
        window.AetherRouter.navigateTo('quote');
      });
    }
  }
};

// Global Notifications Background Polling with Native Browser Push Alerts
window.globalPollingInterval = null;
window.globalPreviousStatuses = {};

window.startGlobalStatusPolling = function() {
  if (window.globalPollingInterval) clearInterval(window.globalPollingInterval);
  if (!window.AetherClientLoggedIn) return;

  const fetchStatus = () => {
    if (!window.AetherClientLoggedIn) {
      if (window.globalPollingInterval) clearInterval(window.globalPollingInterval);
      return;
    }
    fetch('/api/requests/my_requests/')
      .then(res => res.json())
      .then(data => {
        const acceptedRequests = data.filter(q => q.status !== 'new');
        const bellDot = document.getElementById('nav-bell-dot');
        if (bellDot) {
          bellDot.style.display = acceptedRequests.length > 0 ? 'block' : 'none';
        }

        const lang = window.AetherLang.getLang();
        const isAr = lang === 'ar';

        data.forEach(q => {
          const isAccepted = q.status !== 'new';
          // Check transition status (new -> accepted) to alert!
          if (window.globalPreviousStatuses[q.id] === 'new' && isAccepted) {
            if ('Notification' in window && Notification.permission === 'granted') {
              const title = isAr ? 'إيثيركور تكنولوجيز - تم استلام طلبك!' : 'AetherCore Technologies - Order Confirmed!';
              const options = {
                body: isAr 
                  ? `✓ تم تأكيد استلام طلبك لـ (${q.service_type}) بنجاح! اضغط للتواصل معنا عبر واتساب.` 
                  : `✓ Your request for (${q.service_type}) has been successfully confirmed by the admin! Tap to chat on WhatsApp.`,
                tag: `quote-${q.id}`
              };
              const notif = new Notification(title, options);
              notif.onclick = () => {
                window.focus();
                window.open('https://wa.me/62081214750878', '_blank');
              };
            }
          }
          window.globalPreviousStatuses[q.id] = q.status;
        });
      })
      .catch(err => console.error("Dynamic sync polling offline:", err));
  };

  fetchStatus();
  // Poll every 5 seconds for rapid instant updating!
  window.globalPollingInterval = setInterval(fetchStatus, 5000);
};
