/* Client Notifications and Requests tracking page - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.notifications = {
  pollingInterval: null,
  previousStatuses: {}, // Save previous request statuses to detect status transition changes!

  render(lang) {
    const isAr = lang === 'ar';
    return `
      <div class="page-view container" style="min-height: 80vh; padding: 4rem 2rem;">
        <div class="reveal" style="max-width: 900px; margin: 0 auto;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h2 style="font-size: 2rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                ${isAr ? 'مركز طلباتي والتنبيهات' : 'My Requests Hub'}
              </h2>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 5px;">
                ${isAr ? 'تابع حالة طلبات عروض الأسعار واستفساراتك البرمجية مباشرة' : 'Track your active project quote requests and status updates in real-time'}
              </p>
            </div>
            <button id="enable-native-notif-btn" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.8rem; display: none; color: var(--color-accent-1); border-color: var(--color-accent-1); background: transparent;">
              🔔 ${isAr ? 'تفعيل إشعارات الهاتف / المتصفح' : 'Enable Native Notifications'}
            </button>
          </div>

          <div id="client-notif-hub-list" style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="text-align: center; color: var(--color-accent-1); font-weight: bold; padding: 3rem 0;">
              ${isAr ? 'جاري تحميل الطلبات وتحديث الحالة...' : 'Syncing quote requests...'}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    const container = document.getElementById('client-notif-hub-list');
    const notifBtn = document.getElementById('enable-native-notif-btn');

    // Handle Native Notification Permissions Request
    if ('Notification' in window) {
      if (Notification.permission === 'default') {
        if (notifBtn) {
          notifBtn.style.display = 'block';
          notifBtn.addEventListener('click', () => {
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                notifBtn.style.display = 'none';
              }
            });
          });
        }
      }
    }

    const fetchRequests = () => {
      if (!document.getElementById('client-notif-hub-list')) {
        if (this.pollingInterval) clearInterval(this.pollingInterval);
        return;
      }
      fetch('/api/requests/my_requests/')
        .then(res => res.json())
        .then(data => {
          if (!container) return;
          if (data.length === 0) {
            container.innerHTML = `
              <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1.5rem;">
                  ${isAr ? 'لم تقم بتقديم أي طلبات عرض سعر بعد!' : 'You have not submitted any quote requests yet!'}
                </p>
                <button class="btn btn-primary" id="hub-start-quote-btn" style="padding: 10px 20px;">
                  ${isAr ? 'احسب تكلفة مشروعك الآن' : 'Calculate project quote'}
                </button>
              </div>
            `;
            const cta = document.getElementById('hub-start-quote-btn');
            if (cta) {
              cta.addEventListener('click', () => {
                window.AetherRouter.navigateTo('quote');
              });
            }
            return;
          }

          // Render list of quote requests
          container.innerHTML = data.map(q => {
            const isAccepted = q.status !== 'new';
            
            // If the status has transitioned from 'new' to 'accepted', show native desktop notification!
            if (this.previousStatuses[q.id] === 'new' && isAccepted) {
              this.showNativeNotification(q, isAr);
            }
            // Store status for the next polling comparison
            this.previousStatuses[q.id] = q.status;

            return `
              <div class="glass-card" style="padding: 2rem; border-left: 4px solid ${isAccepted ? '#00ff88' : '#ffcc00'}; border-right: ${isAr ? `4px solid ${isAccepted ? '#00ff88' : '#ffcc00'}` : 'none'};">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; direction: ${isAr ? 'rtl' : 'ltr'};">
                  <div>
                    <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--color-accent-1); font-weight: 700; letter-spacing: 1px;">
                      ${isAr ? 'طلب عرض سعر رقم #' : 'QUOTE REQUEST #'}${q.id}
                    </span>
                    <h3 style="font-size: 1.4rem; font-weight: 800; margin-top: 5px; color: var(--text-primary);">
                      ${q.service_type}
                    </h3>
                  </div>
                  <div>
                    ${isAccepted ? `
                      <span style="font-size: 0.85rem; font-weight: bold; color: #00ff88; background: rgba(0, 255, 136, 0.1); padding: 6px 14px; border-radius: 4px; border: 1px solid rgba(0, 255, 136, 0.2); display: inline-block;">
                        ${isAr ? '✓ تم الاستلام والتأكيد' : '✓ Acknowledged & Received'}
                      </span>
                    ` : `
                      <span style="font-size: 0.85rem; font-weight: bold; color: #ffcc00; background: rgba(255, 204, 0, 0.1); padding: 6px 14px; border-radius: 4px; border: 1px solid rgba(255, 204, 0, 0.2); display: inline-block;">
                        ${isAr ? '⏳ قيد المراجعة' : '⏳ Pending Review'}
                      </span>
                    `}
                  </div>
                </div>

                <div class="grid-3" style="gap: 1.5rem; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.02); border-radius: var(--radius-xs); direction: ${isAr ? 'rtl' : 'ltr'};">
                  <div>
                    <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${isAr ? 'الميزانية المقدرة' : 'Estimate'}</span>
                    <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-accent-2);">${q.estimate}</span>
                  </div>
                  <div>
                    <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${isAr ? 'الصفحات المطلوبة' : 'Pages Target'}</span>
                    <span style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">${q.pages}</span>
                  </div>
                  <div>
                    <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${isAr ? 'تاريخ التقديم' : 'Submitted on'}</span>
                    <span style="font-size: 1.05rem; font-weight: 600; color: var(--text-secondary);">${new Date(q.created_date || Date.now()).toLocaleDateString()}</span>
                  </div>
                </div>

                <div style="margin-bottom: 1.5rem; text-align: ${isAr ? 'right' : 'left'}; direction: ${isAr ? 'rtl' : 'ltr'};">
                  <h4 style="font-size: 0.9rem; margin-bottom: 6px; color: var(--text-primary); font-weight: bold;">
                    ${isAr ? 'تفاصيل المشروع والمميزات المختارة:' : 'Project Details & Chosen Addons:'}
                  </h4>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; white-space: pre-line;">
                    ${q.description}
                  </p>
                </div>

                ${isAccepted ? `
                  <div style="border-top: 1px solid var(--border-color); padding-top: 1.5rem; display: flex; justify-content: ${isAr ? 'flex-start' : 'flex-end'};">
                    <a href="https://wa.me/62081214750878" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: white; background: #25d366; border: none; font-weight: bold; padding: 10px 20px;">
                      <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i>
                      ${isAr ? '💬 تواصل واتساب لمناقشة التفاصيل وبدء المشروع' : '💬 Chat via WhatsApp & Start Project'}
                    </a>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('');
        })
        .catch(err => {
          console.error(err);
          if (container) {
            container.innerHTML = `<p style="color:var(--color-accent-3); text-align:center; padding:2rem 0;">${isAr ? '❌ فشل الاتصال بقاعدة البيانات.' : '❌ Offline mode.'}</p>`;
          }
        });
    };

    // Initial load
    fetchRequests();

    // Start background polling to update status dynamically without reload (every 5 seconds)
    if (this.pollingInterval) clearInterval(this.pollingInterval);
    this.pollingInterval = setInterval(fetchRequests, 5000);
  },

  showNativeNotification(q, isAr) {
    if ('Notification' in window && Notification.permission === 'granted') {
      const title = isAr ? 'إيثيركور تكنولوجيز - تحديث حالة الطلب' : 'AetherCore Technologies - Order Update';
      const options = {
        body: isAr 
          ? `✓ تم تأكيد استلام طلبك لـ (${q.service_type}) بنجاح! اضغط للتواصل معنا عبر واتساب.` 
          : `✓ Your request for (${q.service_type}) has been acknowledged! Tap to chat via WhatsApp.`,
        tag: `quote-${q.id}`
      };
      
      const notif = new Notification(title, options);
      notif.onclick = () => {
        window.focus();
        window.open('https://wa.me/62081214750878', '_blank');
      };
    }
  }
};
