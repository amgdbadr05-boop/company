/* Careers & Jobs Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.careers = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const jobsList = [
      {
        title: isAr ? 'مهندس واجهات أمامية أول (React)' : 'Senior Frontend Engineer (React)',
        location: isAr ? 'عن بعد / هجين' : 'Remote / Hybrid',
        type: isAr ? 'دوام كامل' : 'Full-time',
        experience: isAr ? '5+ سنوات' : '5+ Years Exp',
        desc: isAr 
          ? 'نبحث عن خبير في بيئة عمل React لبناء واجهات ويب فائقة الأداء وتصميم حركات دقيقة وانتقالات سلسة.'
          : 'Seeking a React expert to build modular UI layouts, state containers, and handle API syncing.'
      },
      {
        title: isAr ? 'مهندس واجهات خلفية رئيسي (Node.js/Python)' : 'Lead Systems Architect (Node/Python)',
        location: isAr ? 'مكتب الرياض (هجين)' : 'Riyadh Office (Hybrid)',
        type: isAr ? 'دوام كامل' : 'Full-time',
        experience: isAr ? '8+ سنوات' : '8+ Years Exp',
        desc: isAr
          ? 'قيادة وتصميم خوادم سحابية ضخمة معالجة للمعاملات وإدارة قواعد بيانات PostgreSQL و MongoDB.'
          : 'Lead architecture on high-performance REST APIs, event brokers, and database query caches.'
      },
      {
        title: isAr ? 'مصمم واجهات وتجربة مستخدم أول' : 'Senior UI/UX Creative Designer',
        location: isAr ? 'عن بعد بالكامل' : '100% Remote',
        type: isAr ? 'دوام كامل' : 'Full-time',
        experience: isAr ? '4+ سنوات' : '4+ Years Exp',
        desc: isAr
          ? 'تصميم واجهات وتطبيقات تفاعلية فاخرة من الصفر ومطابقة سلوك وتجربة المستخدم لمعايير التصميم العالمية.'
          : 'Craft responsive visual systems, interactive Figma flows, and micro-interactions for luxury sites.'
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'انضم لعائلتنا البرمجية' : 'Join Our Core Team'}</div>
          <h1 class="section-title">${isAr ? 'صمّم معنا مستقبل البرمجيات الفاخرة' : 'Build Next-Gen Platforms With Us'}</h1>
        </div>

        <!-- Jobs Grid -->
        <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 850px; margin: 0 auto 5rem auto;">
          ${jobsList.map((job, index) => `
            <div class="glass-card reveal" style="transition-delay: ${index * 0.05}s; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
              <div style="flex: 1; min-width: 280px;">
                <div style="display: flex; gap: 10px; margin-bottom: 0.8rem; flex-wrap: wrap;">
                  <span class="badge" style="font-size: 0.75rem;">${job.type}</span>
                  <span class="badge badge-cyan" style="font-size: 0.75rem;">${job.location}</span>
                  <span class="badge badge-pink" style="font-size: 0.75rem;">${job.experience}</span>
                </div>
                <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.8rem;">${job.title}</h3>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">${job.desc}</p>
              </div>
              
              <button class="careers-apply-btn btn btn-primary" data-title="${job.title}" style="padding: 12px 24px;">
                ${isAr ? 'تقدم للوظيفة الآن' : 'Apply For Node'}
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Application Modal Overlay -->
        <div id="careers-modal" class="modal-overlay">
          <div class="modal-content">
            <button id="modal-close-btn" class="modal-close">&times;</button>
            
            <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${isAr ? 'طلب تقديم لوظيفة' : 'Job Application Node'}
            </h2>
            <p id="modal-job-title" style="font-weight: 600; color: var(--text-secondary); margin-bottom: 2rem;">Senior React Engineer</p>
            
            <form id="careers-form">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الاسم الكامل' : 'Full Name'}</label>
                <input type="text" class="form-control" required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input type="email" class="form-control" required placeholder="john@example.com">
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'رابط السيرة الذاتية (Google Drive / Dropbox)' : 'Link to CV (Google Drive, Dropbox)'}</label>
                <input type="url" class="form-control" required placeholder="https://drive.google.com/...">
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'رسالة التقديم (اختياري)' : 'Cover Letter (Optional)'}</label>
                <textarea class="form-control" rows="3" placeholder="${isAr ? 'لماذا ترغب بالانضمام إلينا؟' : 'Why would you like to join AetherCore?'}" style="resize: none;"></textarea>
              </div>
              
              <div id="careers-form-status" style="margin-bottom: 1.5rem; display: none; font-size: 0.95rem; font-weight: 600;"></div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                ${isAr ? 'إرسال طلب التقديم' : 'Transmit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    const modal = document.getElementById('careers-modal');
    const modalTitle = document.getElementById('modal-job-title');
    const closeBtn = document.getElementById('modal-close-btn');
    const applyButtons = document.querySelectorAll('.careers-apply-btn');
    const form = document.getElementById('careers-form');
    const statusElem = document.getElementById('careers-form-status');

    applyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const jobTitle = btn.getAttribute('data-title');
        if (modalTitle) modalTitle.textContent = jobTitle;
        if (modal) modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      if (modal) modal.classList.remove('open');
      document.body.style.overflow = 'auto';
      if (form) form.reset();
      if (statusElem) statusElem.style.display = 'none';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!statusElem) return;

        statusElem.style.display = 'block';
        statusElem.style.color = 'var(--color-accent-1)';
        statusElem.textContent = isAr ? 'جاري إرسال طلبك للشبكة...' : 'Transmitting application metadata...';

        setTimeout(() => {
          statusElem.style.color = '#10b981';
          statusElem.textContent = isAr 
            ? '✓ تم إرسال طلبك بنجاح! سيتصل بك فريق التوظيف قريباً.' 
            : '✓ Transmission success! Our recruitment pipeline will contact you shortly.';
            
          setTimeout(closeModal, 2500);
        }, 1500);
      });
    }
  }
};
