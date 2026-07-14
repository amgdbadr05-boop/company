/* Pricing & Calculator Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.pricing = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const pricingPlans = [
      {
        name: isAr ? 'موقع ويب HTML/CSS' : 'HTML/CSS Website',
        price: '100',
        tech: 'HTML5 & CSS3',
        features: [
          isAr ? 'تصميم متجاوب بالكامل' : '100% Responsive Design',
          isAr ? 'كود دلالي سيو ممتاز' : 'Clean Semantics Markup',
          isAr ? 'سرعة تحميل فائقة ثوانٍ' : 'Sub-second Loading Speed',
          isAr ? 'خطوط مخصصة وجمالية' : 'Custom Fonts Styling',
          isAr ? 'صفحة هبوط رئيسية كاملة' : 'Single Landing Page focus'
        ],
        glow: 'glow-cyan',
        popular: false
      },
      {
        name: isAr ? 'موقع ويب تفاعلي كامل' : 'HTML/CSS/JS Website',
        price: '180',
        tech: 'Vanilla JavaScript',
        features: [
          isAr ? 'برمجة تفاعلية ديناميكية' : 'Dynamic Custom Scripts',
          isAr ? 'تأثيرات CSS وحركات انتقال' : 'CSS Transition Animations',
          isAr ? 'تصميم متوافق مع الجوال' : 'Responsive viewport tuning',
          isAr ? 'روابط وقوائم تشغيل متقدمة' : 'Interactive UI Elements',
          isAr ? 'أشكال وتنسيق عصري مميز' : 'Modern layouts aesthetics'
        ],
        glow: 'glow-purple',
        popular: true
      },
      {
        name: isAr ? 'تطبيق واجهة تفاعلي React/Vue' : 'React / Vue SPA',
        price: '350',
        tech: 'React.js / Vue.js',
        features: [
          isAr ? 'تطبيق ويب الصفحة الواحدة' : 'Single Page Application',
          isAr ? 'توجيه وتصفح فوري ديناميكي' : 'Async Router Components',
          isAr ? 'تخزين بيانات محلي' : 'LocalStorage State Saves',
          isAr ? 'مؤثرات بصرية متفاعلة جداً' : 'GSAP & ScrollTrigger support',
          isAr ? 'تحسين الأداء وسرعة المحرك' : 'Core Web Vitals Optimized'
        ],
        glow: 'glow-pink',
        popular: false
      },
      {
        name: isAr ? 'تطبيقات هيكلية متكاملة Angular' : 'Angular SPA',
        price: '450',
        tech: 'Angular Framework',
        features: [
          isAr ? 'تصميم تطبيقات ضخمة مهيكلة' : 'Structured Enterprise SPA',
          isAr ? 'تحقق متقدم من صحة النماذج' : 'Forms Validation rules',
          isAr ? 'واجهات لوحة تحكم تفاعلية' : 'Interactive Dashboard views',
          isAr ? 'رسوم بيانية وجداول ديناميكية' : 'Dynamic Charts & Tables',
          isAr ? 'توافق وأداء صارم وسريع' : 'High Speed rendering rules'
        ],
        glow: 'glow-cyan',
        popular: false
      }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'أسعارنا وخططنا' : 'Investments Structure'}</div>
          <h1 class="section-title">${isAr ? 'خطط أسعار واجهات الويب وحاسبة تفاعلية' : 'Transparent Frontend Pricing'}</h1>
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary);">
            ${isAr 
              ? 'خطط أسعار تنافسية مبنية على متطلبات الواجهة الأمامية، بالإضافة لحاسبة تفاعلية لتقدير تكاليف مشروعك لتبني معرض أعمالك الأول.' 
              : 'Explore our standard starting investments for frontend layout structures, or leverage our instant calculator below.'}
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid-3" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 6rem;">
          ${pricingPlans.map(plan => `
            <div class="glass-card ${plan.glow} reveal" style="display: flex; flex-direction: column; justify-content: space-between; position: relative;">
              ${plan.popular ? `
                <div style="position: absolute; top: 15px; right: 15px; background: var(--gradient-primary); color: var(--text-inverse); font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); text-transform: uppercase;">
                  ${isAr ? 'الأكثر طلباً' : 'Popular'}
                </div>
              ` : ''}
              <div>
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${plan.name}</h3>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 1.5rem;">${plan.tech}</div>
                
                <div style="display: flex; align-items: baseline; gap: 4px; margin-bottom: 2rem;">
                  <span style="font-size: 1rem; color: var(--text-secondary); font-weight: 600;">$</span>
                  <span style="font-size: 3rem; font-weight: 800; color: var(--text-primary); font-family: var(--font-en); line-height: 1;">${plan.price}</span>
                  <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">/ ${isAr ? 'تبدأ من' : 'starting'}</span>
                </div>
                
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2.5rem; font-size: 0.9rem;">
                  ${plan.features.map(f => `
                    <li style="display: flex; align-items: center; gap: 10px;">
                      <span style="color: var(--color-accent-1);">✓</span>
                      <span style="color: var(--text-secondary);">${f}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              
              <button class="pricing-order-btn btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}" style="width: 100%;">
                ${isAr ? 'اطلب الخدمة الآن' : 'Initiate Project'}
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Live Interactive Calculator Section -->
        <section class="reveal" style="margin-bottom: 6rem;">
          <div class="glass-card glow-purple" style="padding: 3rem;">
            <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 2rem; text-align: center;">
              ${isAr ? '🧮 حاسبة تكلفة الواجهات الفورية' : '🧮 Frontend Pricing Estimator'}
            </h2>
            
            <div class="grid-2" style="gap: 3rem;">
              <!-- Calculator Controllers -->
              <div>
                <div class="form-group">
                  <label class="form-label">${isAr ? '1. نوع الواجهة الأساسية المطلوبة' : '1. Core Frontend framework'}</label>
                  <select id="calc-framework" class="form-control">
                    <option value="100" selected>HTML/CSS Website ($100+)</option>
                    <option value="180">HTML/CSS/JavaScript Website ($180+)</option>
                    <option value="350">React SPA ($350+)</option>
                    <option value="350">Vue SPA ($350+)</option>
                    <option value="450">Angular SPA ($450+)</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label class="form-label" style="display: flex; justify-content: space-between;">
                    <span>${isAr ? '2. عدد الصفحات المطلوبة' : '2. Estimated Total Views / Pages'}</span>
                    <span id="calc-pages-val" style="font-family: var(--font-en); font-weight: bold; color: var(--color-accent-1);">5</span>
                  </label>
                  <input id="calc-pages" type="range" min="1" max="30" value="5" style="width:100%; cursor:pointer; accent-color: var(--color-accent-1);">
                </div>
                
                <div class="form-group">
                  <label class="form-label">${isAr ? '3. ميزات وتفاصيل إضافية' : '3. Visual Modules'}</label>
                  <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 10px;">
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                      <input type="checkbox" class="calc-addon" value="30" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <span>${isAr ? 'تأثيرات وحركات CSS Animations (+$30)' : 'CSS Transitions & Animations (+$30)'}</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                      <input type="checkbox" class="calc-addon" value="50" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <span>${isAr ? 'تنسيق باستخدام Tailwind CSS (+$50)' : 'Tailwind CSS Layout (+$50)'}</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                      <input type="checkbox" class="calc-addon" value="40" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <span>${isAr ? 'توفير التبديل بين الثيم الداكن والفاتح (+$40)' : 'Dark/Light Theme Switch (+$40)'}</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                      <input type="checkbox" class="calc-addon" value="50" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <span>${isAr ? 'دعم كامل للغة العربية RTL (+$50)' : 'RTL Arabic Language Support (+$50)'}</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                      <input type="checkbox" class="calc-addon" value="50" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <span>${isAr ? 'تحسين محركات البحث والتهيئة للظهور (SEO) (+$50)' : 'SEO Semantics & Schema tags (+$50)'}</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                      <input type="checkbox" class="calc-addon" value="70" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <span>${isAr ? 'مطابقة بكسل دقيقة لتصميم Figma (+$70)' : '100% Figma Pixel-Perfect Match (+$70)'}</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <!-- Result Visual Board -->
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: var(--radius-sm); border: 1px dashed var(--border-color); padding: 2rem; background: rgba(255,255,255,0.01);">
                <h3 style="font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 1rem;">
                  ${isAr ? 'التكلفة الإجمالية التقديرية للواجهة' : 'Estimated Investment'}
                </h3>
                <div style="display: flex; align-items: baseline; gap: 4px; margin-bottom: 1.5rem;">
                  <span style="font-size: 1.5rem; font-weight: 600; color: var(--color-accent-1);">$</span>
                  <span id="calc-total" style="font-size: 4rem; font-weight: 900; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: var(--font-en); line-height: 1;">225</span>
                </div>
                <p style="font-size: 0.85rem; text-align: center; color: var(--text-muted); margin-bottom: 2rem; max-width: 320px;">
                  ${isAr 
                    ? '*هذه التكلفة تقديرية أولية لتطوير الواجهات، يرجى تقديم طلب لمعرفة تفاصيل الجدول الزمني.' 
                    : '*This estimate is an architectural projection. Submit quote parameters below to lock in pricing.'}
                </p>
                <button id="calc-submit-btn" class="btn btn-primary" style="width: 100%;">${isAr ? 'تقديم طلب عرض سعر للواجهات' : 'Submit Estimation Request'}</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Comparative Table Grid -->
        <section class="reveal">
          <h2 style="font-size: 1.8rem; font-weight: 800; text-align: center; margin-bottom: 3rem;">
            ${isAr ? 'جدول مقارنة تفاصيل الميزات' : 'Feature Comparison Grid'}
          </h2>
          
          <div class="pricing-table-container">
            <table class="pricing-table">
              <thead>
                <tr>
                  <th>${isAr ? 'الميزة / الخدمة' : 'Service Feature'}</th>
                  <th>${isAr ? 'HTML/CSS' : 'HTML/CSS'}</th>
                  <th>${isAr ? 'تفاعلي JS' : 'HTML/CSS/JS'}</th>
                  <th>${isAr ? 'تطبيق React/Vue' : 'React/Vue SPA'}</th>
                  <th>${isAr ? 'تطبيق Angular' : 'Angular SPA'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${isAr ? 'أكواد HTML/CSS متوافقة ومقروءة' : 'Clean Semantics Codebase'}</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                </tr>
                <tr>
                  <td>${isAr ? 'حركات تفاعلية دقيقة' : 'Custom Web Animations'}</td>
                  <td class="feature-cross">-</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                </tr>
                <tr>
                  <td>${isAr ? 'تخزين بيانات محلي (LocalStorage)' : 'Client-side State Sync'}</td>
                  <td class="feature-cross">-</td>
                  <td class="feature-cross">-</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                </tr>
                <tr>
                  <td>${isAr ? 'متجاوب تماما مع الهواتف الذكية' : 'Responsive Mobile Layout'}</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                </tr>
                <tr>
                  <td>${isAr ? 'تحسين سرعة وتنقيب الكود' : 'Core Web Vitals Optimized'}</td>
                  <td class="feature-cross">-</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                </tr>
                <tr>
                  <td>${isAr ? 'دعم اتجاه الكتابة العربي (RTL)' : 'Bi-directional Layout Support'}</td>
                  <td class="feature-cross">-</td>
                  <td class="feature-cross">-</td>
                  <td class="feature-check">✓</td>
                  <td class="feature-check">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    `;
  },

  init(lang) {
    const orderButtons = document.querySelectorAll('.pricing-order-btn');
    orderButtons.forEach(btn => {
      btn.addEventListener('click', () => window.AetherRouter.navigateTo('quote'));
    });

    const frameworkSelect = document.getElementById('calc-framework');
    const pagesSlider = document.getElementById('calc-pages');
    const pagesVal = document.getElementById('calc-pages-val');
    const addonChecks = document.querySelectorAll('.calc-addon');
    const totalElem = document.getElementById('calc-total');
    const submitBtn = document.getElementById('calc-submit-btn');

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        window.AetherRouter.navigateTo('quote');
      });
    }

    function calculatePrice() {
      if (!frameworkSelect || !pagesSlider || !totalElem) return;

      const basePrice = parseInt(frameworkSelect.value, 10);
      const pagesCount = parseInt(pagesSlider.value, 10);
      pagesVal.textContent = pagesCount;

      // Tiered page cost
      let pageCost = 0;
      if (pagesCount <= 5) {
        pageCost = pagesCount * 25;
      } else if (pagesCount <= 15) {
        pageCost = (5 * 25) + ((pagesCount - 5) * 20);
      } else {
        pageCost = (5 * 25) + (10 * 20) + ((pagesCount - 15) * 15);
      }

      let addonsCost = 0;
      addonChecks.forEach(check => {
        if (check.checked) {
          addonsCost += parseInt(check.value, 10);
        }
      });

      const totalEstimate = basePrice + pageCost + addonsCost;
      totalElem.textContent = totalEstimate;
    }

    if (frameworkSelect) frameworkSelect.addEventListener('change', calculatePrice);
    if (pagesSlider) pagesSlider.addEventListener('input', calculatePrice);
    addonChecks.forEach(check => check.addEventListener('change', calculatePrice));

    calculatePrice();
  }
};
