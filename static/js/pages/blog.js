/* Blog Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.blog = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const posts = [
      {
        title: isAr 
          ? 'مستقبل أداء الويب: تطبيقات الصفحة الواحدة مقارنة بالبناء الأصيل' 
          : 'The Future of Web Performance: SPA vs Native Core Frameworks',
        desc: isAr
          ? 'تحليل شامل لكيفية تحسين سرعة تحميل تطبيقات الويب واختيار معمارية التسيير المناسبة لمتصفحات الجيل القادم.'
          : 'An in-depth look at client-side routing, code splitting, and how node density affects paint times.',
        category: isAr ? 'هندسة الأداء' : 'Performance',
        date: 'July 10, 2026',
        read: '6'
      },
      {
        title: isAr
          ? 'لماذا تفضل الشركات الكبرى تصاميم الوضع الداكن الفاخر؟'
          : 'Why Premium Global Brands Choose Dark-Theme Visual Systems',
        desc: isAr
          ? 'دراسة سيكولوجية الألوان والتدرجات الضوئية وتأثيرها على راحة العين ومعدل البقاء داخل المواقع الإلكترونية.'
          : 'Exploring HSL color palettes, glow shadows, and design choices that convey luxury and technology.',
        category: isAr ? 'تصميم واجهات' : 'UI/UX Design',
        date: 'July 05, 2026',
        read: '4'
      },
      {
        title: isAr
          ? 'توسيع خدمات Node.js المصغرة لمعالجة مئات آلاف الطلبات'
          : 'Scaling Node.js Microservices For Massive Traffic Spikes',
        desc: isAr
          ? 'كيفية إعداد خوادم Express.js وحل اختناقات قواعد البيانات باستخدام تقنيات الكاش المتطورة والربط المتوازي.'
          : 'Practical techniques using Redis caches, cluster pooling, and custom event loops to safeguard data.',
        category: isAr ? 'خوادم وسحابي' : 'Backend & Cloud',
        date: 'June 28, 2026',
        read: '8'
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'المدونة البرمجية' : 'Engineering Insights'}</div>
          <h1 class="section-title">${isAr ? 'مقالات وأفكار من فريقنا الهندسي' : 'AetherCore Insights & Architecture'}</h1>
        </div>

        <!-- Blog Grid -->
        <div class="grid-3">
          ${posts.map((post, index) => `
            <div class="glass-card glow-cyan reveal" style="transition-delay: ${index * 0.05}s; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                  <span class="badge" style="font-size: 0.75rem;">${post.category}</span>
                  <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-en); font-weight: 500;">${post.date}</span>
                </div>
                <h3 style="font-size: 1.3rem; margin-bottom: 1rem; color: var(--text-primary); line-height: 1.4;">${post.title}</h3>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">${post.desc}</p>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 15px; margin-top: 10px;">
                <span style="font-size: 0.85rem; color: var(--color-accent-1); font-weight: 600; cursor: pointer;">
                  ${isAr ? 'اقرأ المقال كاملاً' : 'Read Article'}
                </span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-en); font-weight: 500;">
                  ${post.read} ${isAr ? 'دقائق قراءة' : 'min read'}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  init(lang) {
    // Static content
  }
};
