/* Home Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.home = {
  render(lang) {
    const isAr = lang === 'ar';
    return `
      <div class="page-view">
        <!-- Hero Section -->
        <section class="container" style="padding-top: 100px; padding-bottom: 60px; min-height: calc(85vh - 80px); display: flex; align-items: center;">
          <div class="grid-2" style="align-items: center; width: 100%;">
            <div class="reveal-left">
              <div class="badge badge-cyan hero-badge">
                ${isAr ? 'الجيل القادم من تصميم الواجهات الأمامية' : 'Next-Gen Frontend Engineering'}
              </div>
              <h1 class="hero-title">
                ${isAr ? 'نحن نبني' : 'We Architect'} <br>
                <span id="hero-typewriter" style="background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></span><span class="typewriter-cursor">|</span>
              </h1>
              <p class="hero-desc">
                ${isAr 
                  ? 'منصة تصميم متكاملة لابتكار وتطوير الواجهات البرمجية الفاخرة والمواقع التفاعلية ذات السرعة العالية والتصميم الخلاب.' 
                  : 'A premium engineering house crafting high-performance user applications, interactive visual components, and luxury digital interfaces.'}
              </p>
              <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                <button id="hero-quote-btn" class="btn btn-primary">${isAr ? 'طلب عرض سعر فوري' : 'Request Estimate'}</button>
                <button id="hero-portfolio-btn" class="btn btn-secondary">${isAr ? 'معرض الأعمال' : 'View Ecosystem'}</button>
              </div>
            </div>
            
            <div class="reveal-right" style="position: relative; display: flex; justify-content: center;">
              <!-- Interactive Rotating Geometry Box representing AetherCore Core -->
              <div class="glass-card" style="width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 50%; box-shadow: var(--shadow-glow); background: rgba(8, 3, 37, 0.4);">
                <div style="position: absolute; width: 80%; height: 80%; border: 2px dashed var(--color-accent-1); border-radius: 50%; animation: rotate-dashed 20s infinite linear;"></div>
                <div style="position: absolute; width: 60%; height: 60%; border: 1px solid var(--color-accent-2); border-radius: 50%; animation: rotate-solid 15s infinite linear reverse;"></div>
                <div style="width: 175px; height: 175px; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 20px var(--glow-color));">
                  <img src="/static/assets/logo.png" alt="AetherCore Logo" style="width: 100%; height: 100%; object-fit: contain;">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Stat Section -->
        <section style="background: rgba(255,255,255,0.01); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); padding: 60px 0;">
          <div class="container">
            <div class="stats-grid">
              <div class="reveal" style="transition-delay: 0.1s;">
                <div class="stat-num" data-target="150" style="font-size: 3rem; font-weight: 800; color: var(--color-accent-1); font-family: var(--font-en);">0</div>
                <p style="font-size: 0.95rem; font-weight: 600; text-transform: uppercase; margin-top: 0.5rem; letter-spacing: 1px;">
                  ${isAr ? 'موقع وواجهة مكتملة' : 'Ecosystem Interfaces'}
                </p>
              </div>
              <div class="reveal" style="transition-delay: 0.2s;">
                <div class="stat-num" data-target="30" style="font-size: 3rem; font-weight: 800; color: var(--color-accent-2); font-family: var(--font-en);">0</div>
                <p style="font-size: 0.95rem; font-weight: 600; text-transform: uppercase; margin-top: 0.5rem; letter-spacing: 1px;">
                  ${isAr ? 'مهندس واجهات ومصمم' : 'UI Engineers'}
                </p>
              </div>
              <div class="reveal" style="transition-delay: 0.3s;">
                <div class="stat-num" data-target="100" style="font-size: 3rem; font-weight: 800; color: var(--color-accent-3); font-family: var(--font-en);">0</div>
                <p style="font-size: 0.95rem; font-weight: 600; text-transform: uppercase; margin-top: 0.5rem; letter-spacing: 1px;">
                  ${isAr ? 'سرعة أداء Lighthouse' : 'Lighthouse Speed Target'}
                </p>
              </div>
              <div class="reveal" style="transition-delay: 0.4s;">
                <div class="stat-num" data-target="15" style="font-size: 3rem; font-weight: 800; color: var(--color-accent-1); font-family: var(--font-en);">0</div>
                <p style="font-size: 0.95rem; font-weight: 600; text-transform: uppercase; margin-top: 0.5rem; letter-spacing: 1px;">
                  ${isAr ? 'جائزة تصميم عالمية' : 'Design Awards'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- core Highlights -->
        <section class="container" style="padding-top: 100px; padding-bottom: 100px;">
          <div class="section-header">
            <div class="section-subtitle">${isAr ? 'ميزاتنا الرئيسية' : 'Why AetherCore'}</div>
            <h2 class="section-title">${isAr ? 'قمة جودة البناء البرمجي والجمالية' : 'Elevated Digital Standards'}</h2>
          </div>
          <div class="grid-3">
            <div class="glass-card glow-cyan reveal">
              <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">
                ${isAr ? '01. تصميم فاخر وتجربة مستخدم غامرة' : '01. Immersive Luxury UI'}
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.7;">
                ${isAr 
                  ? 'نصمم واجهات تأسر الحواس باستخدام الجلاسمورفيزم والتدرجات اللونية الفاخرة والتفاعلات الدقيقة التي تعطي طابعاً فريداً لكل شاشة.' 
                  : 'Custom-crafted interfaces utilizing soft glassmorphic panels, glowing radial lights, and micro-interactions optimized for luxury brands.'}
              </p>
            </div>
            <div class="glass-card glow-purple reveal" style="transition-delay: 0.15s;">
              <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">
                ${isAr ? '02. أحدث مكتبات وأطر عمل الواجهة' : '02. Modern Client-Side SPAs'}
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.7;">
                ${isAr 
                  ? 'بناء تطبيقات الصفحة الواحدة التفاعلية والسلسة بالاعتماد على React و Vue لسرعة تحميل وتصفح فورية.' 
                  : 'Crafting highly reactive single-page applications utilizing React & Vue to ensure instant browser navigations.'}
              </p>
            </div>
            <div class="glass-card glow-pink reveal" style="transition-delay: 0.3s;">
              <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">
                ${isAr ? '03. سرعة توافقية متناهية وسيو' : '03. High Performance & SEO'}
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.7;">
                ${isAr 
                  ? 'تحسين شامل لأداء الأكواد لسرعة تحميل تقل عن الثانية مع المحافظة على أعلى معايير السيو (SEO) لضمان الصدارة في محركات البحث.' 
                  : 'Every line of code is minified and structured for sub-second paint times, ensuring search indexing compliance and speed.'}
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>
        @keyframes rotate-dashed {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes rotate-solid {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media(max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      </style>
    `;
  },

  init(lang) {
    // Set up button navigations
    document.getElementById('hero-quote-btn').addEventListener('click', () => window.AetherRouter.navigateTo('quote'));
    document.getElementById('hero-portfolio-btn').addEventListener('click', () => window.AetherRouter.navigateTo('portfolio'));

    // Start typewriter effect
    const isAr = lang === 'ar';
    const typewriterStrings = isAr ? [
      'الواجهات الرقمية الفاخرة',
      'تطبيقات الصفحة الواحدة SPAs',
      'تحويل تصاميم فيجما لكود',
      'لوحات التحكم التفاعلية'
    ] : [
      'Luxury Frontend Panels',
      'Interactive React SPAs',
      'Figma-to-HTML conversions',
      'Beautiful Custom Dashboards'
    ];

    let stringIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typewriterElem = document.getElementById('hero-typewriter');

    function typeEffect() {
      if (!typewriterElem) return;
      const currentStr = typewriterStrings[stringIdx];
      
      if (isDeleting) {
        typewriterElem.textContent = currentStr.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typewriterElem.textContent = currentStr.substring(0, charIdx + 1);
        charIdx++;
      }

      let delay = isDeleting ? 40 : 100;

      if (!isDeleting && charIdx === currentStr.length) {
        delay = 1800; // Hold full word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        stringIdx = (stringIdx + 1) % typewriterStrings.length;
        delay = 400; // Pause before typing next word
      }

      setTimeout(typeEffect, delay);
    }

    typeEffect();

    // Start counters
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const step = Math.ceil(target / 50);
      let count = 0;
      
      function updateCounter() {
        count += step;
        if (count >= target) {
          counter.textContent = target + '+';
        } else {
          counter.textContent = count;
          requestAnimationFrame(updateCounter);
        }
      }
      updateCounter();
    });
  }
};
