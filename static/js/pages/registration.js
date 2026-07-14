/* Client Registration Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.registration = {
  render(lang) {
    const isAr = lang === 'ar';

    return `
      <div class="page-view container" style="display: flex; align-items: center; justify-content: center; min-height: 70vh;">
        <div class="glass-card glow-purple reveal" style="width: 100%; max-width: 450px; padding: 2.5rem 2.2rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <h2 style="font-size: 1.8rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 5px;">
              ${isAr ? 'إنشاء حساب جديد' : 'Client Registration'}
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              ${isAr ? 'سجل بياناتك للانضمام إلى منصة إيثيركور تكنولوجيز' : 'Join AetherCore Technologies client portal'}
            </p>
          </div>
          
          <form id="client-register-form">
            <div style="display: flex; gap: 10px; margin-bottom: 1rem;">
              <div style="flex: 1;">
                <label class="form-label">${isAr ? 'الاسم الأول' : 'First Name'}</label>
                <input type="text" id="reg-firstname" class="form-control" required placeholder="John">
              </div>
              <div style="flex: 1;">
                <label class="form-label">${isAr ? 'الاسم الأخير' : 'Last Name'}</label>
                <input type="text" id="reg-lastname" class="form-control" required placeholder="Doe">
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">${isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
              <input type="email" id="reg-email" class="form-control" required placeholder="john.doe@company.com">
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'اسم المستخدم' : 'Username'}</label>
              <input type="text" id="reg-username" class="form-control" required placeholder="johndoe">
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'كلمة المرور' : 'Password'}</label>
              <input type="password" id="reg-password" class="form-control" required placeholder="••••••••">
            </div>

            <div id="client-reg-error" style="margin-bottom: 1.5rem; display: none; color: var(--color-accent-3); font-size: 0.9rem; font-weight: 600; text-align: center;"></div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 1.5rem;">
              ${isAr ? 'إنشاء الحساب وتفعيل البوابة' : 'Register Account'}
            </button>

            <div style="text-align: center; font-size: 0.85rem; color: var(--text-muted);">
              ${isAr ? 'لديك حساب بالفعل؟' : 'Already have an account?'} 
              <span id="go-to-login-btn" style="color: var(--color-accent-1); cursor: pointer; font-weight: bold; text-decoration: underline;">
                ${isAr ? 'تسجيل الدخول' : 'Sign in'}
              </span>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    const form = document.getElementById('client-register-form');
    const loginRedirectBtn = document.getElementById('go-to-login-btn');

    if (loginRedirectBtn) {
      loginRedirectBtn.addEventListener('click', () => {
        window.AetherRouter.navigateTo('login');
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
        const firstName = document.getElementById('reg-firstname').value;
        const lastName = document.getElementById('reg-lastname').value;
        const email = document.getElementById('reg-email').value;
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const errorBox = document.getElementById('client-reg-error');

        const payload = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          username: username,
          password: password
        };

        fetch('/api/accounts/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') || ''
          },
          body: JSON.stringify(payload)
        })
        .then(res => {
          if (!res.ok) {
            return res.json().then(errData => {
              throw new Error(errData.detail || 'Registration failed');
            });
          }
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
        .catch(err => {
          if (errorBox) {
            errorBox.style.display = 'block';
            errorBox.textContent = isAr 
              ? `🚫 خطأ: ${err.message}` 
              : `🚫 Error: ${err.message}`;
          }
        });
      });
    }
  }
};
