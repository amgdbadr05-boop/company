/* Contact Us Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.contact = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const contactFaq = [
      {
        q: isAr ? 'ما هي سرعة الاستجابة للاستفسارات الواردة؟' : 'What is the average response time?',
        a: isAr 
          ? 'نقوم بمراجعة كافة تفاصيل التصاميم والاستفسارات والرد عليها ببروتوكول تفصيلي خلال أقل من 12 ساعة.' 
          : 'Our accounts team reviews design specifications and replies within 12 business hours.'
      },
      {
        q: isAr ? 'هل تقدمون اجتماعات تخطيطية مرئية عبر الإنترنت؟' : 'Do you schedule design consulting sessions?',
        a: isAr
          ? 'نعم، يسعدنا التنسيق لعقد جلسات عمل مرئية عبر Zoom أو Google Meet لمراجعة ملفات Figma وتنسيق متطلبات الواجهة.'
          : 'Yes. We routinely schedule Google Meet or Zoom sessions to review Figma prototypes and scope layouts.'
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'تواصل معنا' : 'Access Node'}</div>
          <h1 class="section-title">${isAr ? 'افتح قنوات الاتصال بمستشارينا' : 'Establish Connection'}</h1>
        </div>

        <!-- Main Grid Layout -->
        <div class="grid-2" style="margin-bottom: 6rem; gap: 3rem;">
          <!-- Contact details & Map -->
          <div class="reveal-left" style="display: flex; flex-direction: column; gap: 2rem;">
            <div class="glass-card glow-cyan" style="padding: 2.2rem;">
              <h3 style="font-size: 1.3rem; margin-bottom: 1.5rem;">${isAr ? 'معلومات الاتصال المباشرة' : 'Direct Core Links'}</h3>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 15px; font-size: 0.95rem;">
                <li style="display: flex; align-items: center; gap: 12px;">
                  <i class="fas fa-location-dot" style="color: var(--color-accent-1); font-size: 1.1rem; width: 20px;"></i>
                  <a href="https://maps.app.goo.gl/NYDgFKnpqRpEmFGG6?g_st=ac" target="_blank" style="color: var(--text-primary); text-decoration: underline;">
                    ${isAr ? 'الموقع الجغرافي للشركة على الخريطة' : 'Click to View Location Map'}
                  </a>
                </li>
                <li style="display: flex; align-items: center; gap: 12px;">
                  <i class="fas fa-phone" style="color: var(--color-accent-1); font-size: 1.1rem; width: 20px;"></i>
                  <a href="tel:+6281214750878" style="color: var(--text-primary); font-family: var(--font-en); direction: ltr; font-weight: 600;">+62 0812-1475-0878</a>
                </li>
                <li style="display: flex; align-items: center; gap: 12px;">
                  <i class="fas fa-envelope" style="color: var(--color-accent-1); font-size: 1.1rem; width: 20px;"></i>
                  <a href="mailto:aether.core.techno@gmail.com" style="color: var(--text-primary); font-family: var(--font-en); font-weight: 600;">aether.core.techno@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <!-- Real Dynamic Dark Google Maps Embed Card -->
            <div class="glass-card glow-cyan" style="padding: 0; height: 300px; overflow: hidden; border-radius: var(--radius-md); border: 1px solid var(--border-color); position: relative; box-shadow: var(--shadow-glow);">
              <iframe 
                src="https://maps.google.com/maps?q=-6.890881,106.886683&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style="border:0; filter: grayscale(1) invert(0.9) contrast(1.2);" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
              <!-- Click to redirect helper link -->
              <a href="https://maps.app.goo.gl/NYDgFKnpqRpEmFGG6?g_st=ac" target="_blank" style="position: absolute; bottom: 15px; left: 15px; z-index: 10; font-family: var(--font-en); font-size: 0.8rem; background: rgba(8, 3, 37, 0.85); border: 1px solid var(--border-color); color: var(--color-accent-1); text-decoration: none; padding: 6px 14px; border-radius: var(--radius-xs); font-weight: 600;">
                ${isAr ? '🔗 فتح في خرائط Google' : '🔗 Open Google Maps'}
              </a>
            </div>
          </div>
          
          <!-- Contact Form Card -->
          <div class="reveal-right">
            <div class="glass-card glow-purple" style="padding: 2.2rem;">
              <h3 style="font-size: 1.3rem; margin-bottom: 1.5rem;">${isAr ? 'إرسال استفسار فوري' : 'Send Technical Inquiry'}</h3>
              
              <form id="contact-form">
                <div class="form-group">
                  <label class="form-label">${isAr ? 'الاسم بالكامل' : 'Full Name'}</label>
                  <input type="text" id="contact-name" class="form-control" required placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                  <input type="email" id="contact-email" class="form-control" required placeholder="john@example.com">
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                  <input type="tel" id="contact-phone" class="form-control" required placeholder="+62 0812 14750878">
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'موضوع الرسالة' : 'Subject Context'}</label>
                  <input type="text" id="contact-subject" class="form-control" required placeholder="Service Inquiry">
                </div>
                <div class="form-group">
                  <label class="form-label">${isAr ? 'نص الرسالة' : 'Message details'}</label>
                  <textarea id="contact-msg" class="form-control" rows="4" required placeholder="${isAr ? 'اكتب تفاصيل استفسارك هنا...' : 'Outline your system requirements...'}" style="resize: none;"></textarea>
                </div>
                
                <div id="contact-status" style="margin-bottom: 1.5rem; display: none; font-size: 0.95rem; font-weight: 600;"></div>
                
                <button type="submit" class="btn btn-primary" style="width: 100%;">
                  ${isAr ? 'إرسال الرسالة للمسؤول' : 'Initiate Transmission'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- FAQ section -->
        <section class="reveal" style="max-width: 750px; margin: 0 auto;">
          <h2 style="font-size: 1.6rem; font-weight: 800; text-align: center; margin-bottom: 2.5rem;">
            ${isAr ? 'أسئلة سريعة حول التواصل' : 'Operational FAQ'}
          </h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${contactFaq.map(faq => `
              <div class="glass-card" style="padding: 1.8rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.6rem;">${faq.q}</h4>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!status) return;

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const phone = document.getElementById('contact-phone').value;
        const subject = document.getElementById('contact-subject').value;
        const msg = document.getElementById('contact-msg').value;

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

        const payload = {
          name,
          email,
          phone,
          subject,
          message: msg
        };

        // Visual success display routine
        status.style.display = 'block';
        status.style.color = 'var(--color-accent-1)';
        status.textContent = isAr ? 'جاري إرسال الرسالة...' : 'Transmitting message packets...';

        fetch('/api/contact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') || ''
          },
          body: JSON.stringify(payload)
        })
        .then(response => {
          if (!response.ok) throw new Error('API failure');
          return response.json();
        })
        .then(() => {
          status.style.color = '#10b981';
          status.textContent = isAr 
            ? '✓ تم إرسال رسالتك للمسؤول بنجاح! سنرد عليك في أقرب وقت.' 
            : '✓ Connection established! Your inquiry has been sent to our accounts desk.';
          form.reset();
          setTimeout(() => {
            status.style.display = 'none';
          }, 3500);
        })
        .catch(err => {
          console.error(err);
          status.style.color = 'var(--color-accent-3)';
          status.textContent = isAr 
            ? '❌ فشل الإرسال: يرجى التحقق من اتصالك بالشبكة!' 
            : '❌ Transmission failed. Please verify your internet connection.';
        });
      });
    }
  }
};
