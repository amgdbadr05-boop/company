/* Services Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.services = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const servicesList = [
      {
        icon: '<i class="fab fa-figma" style="color: #F24E1E;"></i>',
        title: 'Figma UI/UX Prototyping',
        desc: isAr 
          ? 'تصميم واجهات وتجربة مستخدم فاخرة وتفاعلية بالكامل باستخدام Figma قبل الانتقال لكتابة الكود.'
          : 'Crafting responsive wireframes, premium component design tokens, and luxury visual mockups in Figma.'
      },
      {
        icon: '<i class="fab fa-html5" style="color: #E34F26;"></i>',
        title: 'HTML5 & CSS3 Structural Layouts',
        desc: isAr
          ? 'بناء هياكل مواقع ويب دلالية (Semantic HTML) وتنسيقات متجاوبة وسريعة وخالية من المشاكل.'
          : 'Developing pixel-perfect layout nodes using clean semantics, flexbox, grid, and modular variables.'
      },
      {
        icon: '<i class="fab fa-js" style="color: #F7DF1E;"></i>',
        title: 'Vanilla JavaScript (ES6+) Apps',
        desc: isAr
          ? 'برمجة منطق الموقع التفاعلي والراوتر والتطبيقات المعقدة بالاعتماد على الجافا سكربت الأصلية والنقية.'
          : 'Native client-side logic scripts, dynamic SPA routing, and event orchestration without framework bloat.'
      },
      {
        icon: '<i class="fab fa-react" style="color: #61DAFB; animation: fa-spin 15s infinite linear;"></i>',
        title: 'React.js Single Page Systems',
        desc: isAr
          ? 'إنشاء واجهات وتطبيقات تفاعلية متقدمة ومكونات قابلة لإعادة الاستخدام بالاعتماد على React.'
          : 'Building modular component pipelines, hooks integration, and client state managers in React.'
      },
      {
        icon: '<i class="fab fa-vuejs" style="color: #4FC08D;"></i>',
        title: 'Vue.js Reactive Interfaces',
        desc: isAr
          ? 'تطوير صفحات ويب مرنة وسهلة الصيانة وتتفاعل فوراً مع مدخلات المستخدمين بالاعتماد على Vue.'
          : 'Constructing performant web views, reactive data flows, and fluid layouts with Vue framework.'
      },
      {
        icon: '<i class="fab fa-angular" style="color: #DD0031;"></i>',
        title: 'Angular Enterprise Architectures',
        desc: isAr
          ? 'بناء منصات ويب عملاقة للشركات الكبرى تتسم بالقوة والأمان والتكامل التام بالاعتماد على Angular.'
          : 'Designing structured scalable frontend ecosystems utilizing Angular dependency injection.'
      },
      {
        icon: '<i class="fas fa-wind" style="color: #38BDF8;"></i>',
        title: 'Tailwind CSS Utility Styling',
        desc: isAr
          ? 'تنسيق صفحات الويب وتنسيق أبعادها بدقة وسرعة باستخدام فئات Tailwind لتسهيل وتسريع التحميل.'
          : 'Rapid styling optimization with zero custom CSS file overhead, ensuring modular layout delivery.'
      },
      {
        icon: '<i class="fab fa-sass" style="color: #CC6699;"></i>',
        title: 'Sass / SCSS Nested Stylesheets',
        desc: isAr
          ? 'هيكلة وإدارة ملفات التنسيق الضخمة للمواقع الاحترافية باستخدام برمجية Sass المنظمة.'
          : 'Structuring massive stylesheet architectures with nested scopes, variables, and mixin utilities.'
      },
      {
        icon: '<i class="fab fa-bootstrap" style="color: #7952B3;"></i>',
        title: 'Bootstrap Framework Responsive Grids',
        desc: isAr
          ? 'تصميم واجهات مواقع متوافقة وسريعة البناء مع شاشات الموبايل والتابلت بالاعتماد على Bootstrap.'
          : 'Integrating responsive layout grids and default components to ensure cross-device consistency.'
      },
      {
        icon: '<i class="fas fa-code" style="color: #0769AD;"></i>',
        title: 'jQuery Legacy DOM Modernization',
        desc: isAr
          ? 'تحديث وصيانة الأكواد القديمة المعتمدة على مكتبة jQuery وتسريع أدائها أو تحويلها للمكتبات الحديثة.'
          : 'Maintaining, refactoring, and optimizing legacy DOM structures to modern JS standards.'
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'بيئات عملنا وخدماتنا' : 'Our Production Environments'}</div>
          <h1 class="section-title">${isAr ? 'تقنيات الواجهات الأمامية التي نحترف صياغتها' : 'Bespoke Frontend Services'}</h1>
        </div>

        <!-- Services Grid -->
        <div class="grid-3" style="margin-bottom: 5rem;">
          ${servicesList.map((service, index) => `
            <div class="glass-card glow-cyan reveal" style="transition-delay: ${index * 0.05}s; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 2.5rem; margin-bottom: 1.5rem; display: inline-block;">${service.icon}</div>
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary);">${service.title}</h3>
                <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">${service.desc}</p>
              </div>
              <button class="service-quote-btn btn btn-secondary" style="width: 100%; border-radius: var(--radius-sm); padding: 10px;">
                ${isAr ? 'استفسر عن هذه التقنية' : 'Request Consultation'}
              </button>
            </div>
          `).join('')}
        </div>

        <!-- CTA -->
        <div class="glass-card glow-purple reveal" style="text-align: center; padding: 4rem 2rem;">
          <h2 style="font-size: 2rem; margin-bottom: 1rem;">${isAr ? 'هل لديك تصميم تريد تحويله لموقع ويب مذهل؟' : 'Ready to Build Your Digital Legacy?'}</h2>
          <p style="max-width: 600px; margin: 0 auto 2.5rem auto; color: var(--text-secondary);">
            ${isAr 
              ? 'تواصل معنا اليوم للحديث عن تفاصيل مشروعك والحصول على دراسة مبدئية للتكلفة ومدة التنفيذ.' 
              : 'Schedule a discovery session with our frontend architects to receive a detailed cost breakdown and timeline proposal.'}
          </p>
          <button id="services-quote-cta" class="btn btn-primary">${isAr ? 'ابدأ مشروعك الآن' : 'Initiate Project'}</button>
        </div>
      </div>
    `;
  },

  init(lang) {
    const quoteCta = document.getElementById('services-quote-cta');
    if (quoteCta) {
      quoteCta.addEventListener('click', () => window.AetherRouter.navigateTo('quote'));
    }

    const serviceButtons = document.querySelectorAll('.service-quote-btn');
    serviceButtons.forEach(btn => {
      btn.addEventListener('click', () => window.AetherRouter.navigateTo('quote'));
    });
  }
};
