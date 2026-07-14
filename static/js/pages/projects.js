/* Projects Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.projects = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const projects = [
      {
        name: isAr ? 'محفظة أورا الرقمية' : 'Aura Crypto Wallet WebApp',
        category: isAr ? 'تطوير واجهات' : 'Frontend Dev',
        progress: 92,
        status: isAr ? 'مرحلة الفحص النهائي' : 'Final QA Inspection',
        desc: isAr 
          ? 'بناء لوحة تحكم وسحابة لمحفظة عملات مشفرة متطورة تدعم تشفير المفاتيح والاتصال السريع بالـ APIs.'
          : 'Sleek luxury design panel integrated with multi-blockchain web sockets. Nearing final release.',
        color: 'var(--color-accent-1)'
      },
      {
        name: isAr ? 'كرونوس لإدارة المستندات' : 'Kronos Document Pipelines',
        category: isAr ? 'برمجة خوادم' : 'Backend & Automation',
        progress: 65,
        status: isAr ? 'كتابة الأكواد والاختبار' : 'System Logic Integration',
        desc: isAr
          ? 'أتمتة أرشفة وتدقيق مئات آلاف الملفات يومياً وتشفيرها سحابياً باستخدام لغة Python.'
          : 'Enterprise workflow automation indexing corporate assets. Developed in Python and FastAPI.',
        color: 'var(--color-accent-2)'
      },
      {
        name: isAr ? 'بوابة هيليوس العقارية' : 'Helios Real Estate Exchange',
        category: isAr ? 'موقع ويب متكامل' : 'Full Stack Web App',
        progress: 100,
        status: isAr ? 'تم النشر بنجاح' : 'Deployed & Live',
        desc: isAr
          ? 'منصة بيع وتأجير العقارات الفاخرة تدعم الخرائط التفاعلية وإمكانية الحجز المباشر بالكامل.'
          : 'Luxury property listing board featuring rich filtering systems. Fully operational on stable cloud containers.',
        color: 'var(--color-accent-3)'
      },
      {
        name: isAr ? 'نظام فيستا اللوجستي' : 'Vesta Freight Logistics Core',
        category: isAr ? 'قواعد بيانات وسحابي' : 'Database & Cloud Integration',
        progress: 25,
        status: isAr ? 'مرحلة التصميم والتخطيط' : 'Database Architecture Design',
        desc: isAr
          ? 'إعادة هيكلة قواعد البيانات الضخمة وبناء نظام استعلام فائق السرعة يعتمد على PostgreSQL.'
          : 'Drafting entity relationships and cache strategies to process massive real-time supply manifests.',
        color: 'var(--color-accent-1)'
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'حالة المشاريع الحالية' : 'Live Development Hub'}</div>
          <h1 class="section-title">${isAr ? 'نظام تتبع حالة المشاريع النشطة' : 'Active Projects Tracker'}</h1>
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary);">
            ${isAr 
              ? 'نحن نؤمن بالشفافية الكاملة. هنا يمكنك تتبع حالة وتقدم أهم المشاريع النشطة التي يعمل عليها فريقنا حالياً.' 
              : 'Transparency is our core standard. Explore real-time progress details across some of our active systems currently in construction.'}
          </p>
        </div>

        <!-- Projects Trackers -->
        <div style="display: flex; flex-direction: column; gap: 2.5rem; max-width: 850px; margin: 0 auto;">
          ${projects.map((project, index) => `
            <div class="glass-card reveal" style="transition-delay: ${index * 0.05}s;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                <div>
                  <span class="badge" style="margin-bottom: 8px;">${project.category}</span>
                  <h3 style="font-size: 1.4rem; color: var(--text-primary);">${project.name}</h3>
                </div>
                <div style="text-align: right;">
                  <div style="font-weight: 700; color: ${project.color}; font-size: 1.1rem; font-family: var(--font-en);">${project.progress}%</div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">${project.status}</div>
                </div>
              </div>
              
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.8rem; line-height: 1.7;">${project.desc}</p>
              
              <!-- Progress Bar Frame -->
              <div style="width: 100%; height: 8px; background: var(--border-color); border-radius: var(--radius-full); overflow: hidden; position: relative;">
                <div style="width: ${project.progress}%; height: 100%; background: ${project.color}; border-radius: var(--radius-full); animation: progress-fill-ani 1.5s ease-out forwards;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <style>
        @keyframes progress-fill-ani {
          from { width: 0%; }
        }
      </style>
    `;
  },

  init(lang) {
    // Static content
  }
};
