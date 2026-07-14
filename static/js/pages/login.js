/* Client Login Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.login = {
  render(lang) {
    const isAr = lang === 'ar';

    return `
      <div class="page-view container" style="display: flex; align-items: center; justify-content: center; min-height: 70vh;">
        <div class="glass-card glow-cyan reveal" style="width: 100%; max-width: 420px; padding: 3rem 2.5rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <h2 style="font-size: 1.8rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 5px;">
              ${isAr ? 'تسجيل الدخول' : 'Client Login'}
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              ${isAr ? 'يرجى تسجيل الدخول لمتابعة تصفح معرض الأعمال أو إرسال الطلبات' : 'Please sign in to view the portfolio, contact us, or request quotes'}
            </p>
          </div>
          
          <form id="client-login-form">
            <div class="form-group">
              <label class="form-label">${isAr ? 'اسم المستخدم' : 'Username'}</label>
              <input type="text" id="client-username-input" class="form-control" required placeholder="username">
            </div>
            <div class="form-group">
              <label class="form-label">${isAr ? 'كلمة المرور' : 'Password'}</label>
              <input type="password" id="client-password-input" class="form-control" required placeholder="••••••••">
            </div>

            <div id="client-login-error" style="margin-bottom: 1.5rem; display: none; color: var(--color-accent-3); font-size: 0.9rem; font-weight: 600; text-align: center;"></div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 1.5rem;">
              ${isAr ? 'تسجيل الدخول' : 'Sign In'}
            </button>

            <div style="text-align: center; font-size: 0.85rem; color: var(--text-muted);">
              ${isAr ? 'ليس لديك حساب؟' : 'Don\'t have an account?'} 
              <span id="go-to-register-btn" style="color: var(--color-accent-1); cursor: pointer; font-weight: bold; text-decoration: underline;">
                ${isAr ? 'إنشاء حساب جديد' : 'Register now'}
              </span>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    const form = document.getElementById('client-login-form');
    const registerRedirectBtn = document.getElementById('go-to-register-btn');

    if (registerRedirectBtn) {
      registerRedirectBtn.addEventListener('click', () => {
        window.AetherRouter.navigateTo('registration');
      });
    }

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

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('client-username-input').value;
        const pass = document.getElementById('client-password-input').value;
        const errorBox = document.getElementById('client-login-error');

        fetch('/api/accounts/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') || ''
          },
          body: JSON.stringify({ username, password: pass })
        })
        .then(res => {
          if (!res.ok) throw new Error('Invalid credentials');
          return res.json();
        })
        .then(data => {
          window.AetherClientLoggedIn = true;
          window.AetherClientEmail = data.email;
          window.AetherClientName = data.username;
          
          if (typeof window.updateHeaderAuthUI === 'function') {
            window.updateHeaderAuthUI();
          }

          // If there is an intended route, redirect back to it!
          if (window.AetherIntendedRoute) {
            const dest = window.AetherIntendedRoute;
            window.AetherIntendedRoute = null;
            window.AetherRouter.navigateTo(dest);
          } else {
            window.AetherRouter.navigateTo('home');
          }
        })
        .catch(() => {
          if (errorBox) {
            errorBox.style.display = 'block';
            errorBox.textContent = isAr 
              ? '🚫 خطأ: اسم المستخدم أو كلمة المرور غير صحيحة.' 
              : '🚫 Error: Invalid username or password.';
          }
        });
      });
    }
  }
};
