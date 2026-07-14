/* Technologies Showcase Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.technologies = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const techCategories = [
      {
        title: isAr ? 'أطر عمل ومكتبات الواجهة (Frameworks & Libraries)' : 'JS Frameworks & Libraries',
        desc: isAr ? 'مجموعة الأدوات التي نستخدمها لبناء واجهات برمجية تفاعلية وسلسة للغاية.' : 'Core tools used to design interactive component pipelines and state management.',
        items: [
          { name: 'React', level: 98, role: 'Immersive SPAs' },
          { name: 'Vue.js', level: 95, role: 'Reactive Interfaces' },
          { name: 'Angular', level: 90, role: 'Enterprise Platforms' },
          { name: 'jQuery', level: 85, role: 'Legacy DOM Support' }
        ]
      },
      {
        title: isAr ? 'اللغات الأساسية ومحركات البناء (Core & Tooling)' : 'Bedrock Tech & Bundling',
        desc: isAr ? 'اللغات والمترجمات الأساسية لضمان سرعة تحميل الأكواد وتوافقها.' : 'The core scripts, tags, and bundling engines powering site loads.',
        items: [
          { name: 'JavaScript (ES6+)', level: 100, role: 'Native Logic & Routing' },
          { name: 'HTML5 & CSS3', level: 100, role: 'Semantic Layout & Grid' },
          { name: 'Vite / Webpack', level: 95, role: 'Asset Bundling & Speed Tuning' }
        ]
      },
      {
        title: isAr ? 'التصميم وأنظمة التنسيق (Styling & Design)' : 'Design Systems & Styling',
        desc: isAr ? 'الأدوات التي نعتمد عليها لتشكيل المظهر البصري المتناسق والفاخر للمواقع.' : 'Collaborative workspaces and layout utility systems.',
        items: [
          { name: 'Figma', level: 98, role: 'UI/UX Prototyping' },
          { name: 'Tailwind CSS', level: 95, role: 'Utility Responsive Styling' },
          { name: 'Sass / SCSS', level: 92, role: 'Preprocessed Stylesheets' },
          { name: 'Bootstrap', level: 88, role: 'Responsive Grid Layouts' }
        ]
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'التقنيات المستخدمة' : 'Technical Stack'}</div>
          <h1 class="section-title">${isAr ? 'توافق تام بين الخدمات والأدوات البرمجية' : 'Our Unified Frontend Stack'}</h1>
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary);">
            ${isAr 
              ? 'مجموعة التقنيات الكاملة التي نستخدمها في تصميم وتطوير المواقع والواجهات، متطابقة بالكامل مع خدماتنا.' 
              : 'Our comprehensive frontend technology stack, aligned to deliver premium pixel-perfect user views.'}
          </p>
        </div>

        <!-- Categories Container -->
        <div style="display: flex; flex-direction: column; gap: 5rem;">
          ${techCategories.map((category, catIdx) => `
            <div class="reveal" style="transition-delay: ${catIdx * 0.1}s;">
              <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 10px;">
                  <span style="display: inline-block; width: 8px; height: 24px; background: var(--gradient-primary); border-radius: var(--radius-xs);"></span>
                  ${category.title}
                </h2>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-left: 18px;">${category.desc}</p>
              </div>
              
              <div class="grid-3" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                ${category.items.map((tech, techIdx) => `
                  <div class="glass-card glow-cyan" style="padding: 1.8rem; display: flex; flex-direction: column; gap: 1.2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);">${tech.name}</h3>
                      <span class="badge" style="font-size: 0.75rem; font-family: var(--font-en);">${tech.level}%</span>
                    </div>
                    <div>
                      <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px; font-weight: 600; text-transform: uppercase;">
                        ${isAr ? 'الاستخدام الأساسي' : 'Primary Use Case'}
                      </div>
                      <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 500;">
                        ${tech.role}
                      </div>
                    </div>
                    <!-- Progress Bar -->
                    <div style="width: 100%; height: 4px; background: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
                      <div style="width: ${tech.level}%; height: 100%; background: var(--gradient-primary); border-radius: var(--radius-full);"></div>
                    </div>
                  </div>
                `).join('')}
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
