/* Request Quote Form Wizard Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.quote = {
  render(lang) {
    const isAr = lang === 'ar';
    
    // Frontend dynamic addons configuration list
    const addons = [
      { id: 'add-resp', val: 0, labelAr: 'تصميم متجاوب بالكامل مع كافة الشاشات (Responsive) (مجاني)', labelEn: 'Fully Responsive multi-device layout (Free)' },
      { id: 'add-tailwind', val: 50, labelAr: 'تنسيق باستخدام Tailwind CSS (+$50)', labelEn: 'Tailwind CSS Styling (+$50)' },
      { id: 'add-bootstrap', val: 30, labelAr: 'تنسيق باستخدام Bootstrap (+$30)', labelEn: 'Bootstrap Framework CSS (+$30)' },
      { id: 'add-sass', val: 30, labelAr: 'كود SCSS / Sass مهيكل (+$30)', labelEn: 'Sass/SCSS structured styling (+$30)' },
      { id: 'add-jquery', val: 40, labelAr: 'برمجة تفاعلية بمكتبة jQuery (+$40)', labelEn: 'jQuery library actions (+$40)' },
      { id: 'add-theme', val: 40, labelAr: 'توفير التبديل بين الثيم الداكن والفاتح (+$40)', labelEn: 'Theme switch (Dark/Light mode) (+$40)' },
      { id: 'add-rtl', val: 50, labelAr: 'دعم اتجاه الكتابة العربي بالكامل RTL (+$50)', labelEn: 'Full RTL layout sync (+$50)' },
      { id: 'add-anim', val: 30, labelAr: 'تأثيرات وحركات انتقالية CSS Animations (+$30)', labelEn: 'Transition animations using CSS (+$30)' },
      { id: 'add-gsap', val: 80, labelAr: 'مؤثرات بصرية متقدمة بمكتبة GSAP (+$80)', labelEn: 'GSAP advanced animations (+$80)' },
      { id: 'add-trigger', val: 60, labelAr: 'حركات مرتبطة بالتمرير ScrollTrigger (+$60)', labelEn: 'ScrollTrigger scrolling actions (+$60)' },
      { id: 'add-three', val: 180, labelAr: 'مؤثرات ثلاثية أبعاد متقدمة Three.js 3D (+$180)', labelEn: 'Three.js 3D graphics integration (+$180)' },
      { id: 'add-seo', val: 50, labelAr: 'تهيئة محركات البحث المتقدمة وبناء الميتا (SEO) (+$50)', labelEn: 'Semantic SEO tags & meta configuration (+$50)' },
      { id: 'add-a11y', val: 60, labelAr: 'دعم قارئ الشاشة وذوي الاحتياجات (Accessibility) (+$60)', labelEn: 'Accessibility checks & ARIA roles (+$60)' },
      { id: 'add-lighthouse', val: 50, labelAr: 'تحسين أداء وتحميل مؤشرات Lighthouse (+$50)', labelEn: 'Lighthouse audits speed optimization (+$50)' },
      { id: 'add-perf', val: 40, labelAr: 'تقليص وضغط الأكواد لتسريع الاستجابة (+$40)', labelEn: 'Performance asset minification (+$40)' },
      { id: 'add-api', val: 40, labelAr: 'ربط واجهات البيانات والـ APIs (+$40)', labelEn: 'API endpoints integration (+$40)' },
      { id: 'add-auth', val: 60, labelAr: 'واجهات تسجيل الدخول والتسجيل (Authentication UI) (+$60)', labelEn: 'User login & registration interfaces (+$60)' },
      { id: 'add-dash', val: 120, labelAr: 'واجهة لوحة تحكم داخلية للموقع (Dashboard UI) (+$120)', labelEn: 'Interactive Dashboard UI template (+$120)' },
      { id: 'add-charts', val: 40, labelAr: 'رسوم بيانية وإحصائية تفاعلية (Charts) (+$40)', labelEn: 'Data visualization SVG charts (+$40)' },
      { id: 'add-tables', val: 40, labelAr: 'جداول بيانات تفاعلية مع فرز وبحث (Tables) (+$40)', labelEn: 'Dynamic data tables with search/filter (+$40)' },
      { id: 'add-forms', val: 30, labelAr: 'التحقق من صحة المدخلات في النماذج (Forms Validation) (+$30)', labelEn: 'Form input validator & errors check (+$30)' },
      { id: 'add-multilang', val: 50, labelAr: 'دعم ترجمة الموقع لعدة لغات (Multi Language) (+$50)', labelEn: 'Multi-lingual localizations translations (+$50)' },
      { id: 'add-figma', val: 70, labelAr: 'مطابقة بكسل دقيقة لتصميم Figma (+$70)', labelEn: '100% Figma pixel-perfect alignment (+$70)' }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'احصل على عرض سعر مخصص للواجهات' : 'System Pricing Node'}</div>
          <h1 class="section-title">${isAr ? 'صمّم مقاييس واجهة موقعك وتقدير التكلفة' : 'Configure Project Estimation'}</h1>
        </div>

        <!-- Main Step Grid -->
        <div class="grid-2" style="gap: 3rem; margin-bottom: 5rem;">
          <!-- Step Wizard Form -->
          <div class="reveal-left">
            <div class="glass-card glow-purple">
              
              <!-- Step Indicators -->
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
                <span id="step-tab-1" class="badge" style="font-size: 0.8rem;">${isAr ? '1. التصنيف' : '1. Architecture'}</span>
                <span id="step-tab-2" class="badge badge-cyan" style="font-size: 0.8rem; opacity: 0.5;">${isAr ? '2. الميزات' : '2. Specifications'}</span>
                <span id="step-tab-3" class="badge badge-pink" style="font-size: 0.8rem; opacity: 0.5;">${isAr ? '3. التواصل' : '3. Credentials'}</span>
              </div>

              <form id="quote-wizard-form">
                <!-- Step 1 Content -->
                <div id="wizard-step-1">
                  <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem;">${isAr ? 'اختر تصنيف واجهة المشروع الأساسي' : 'Select Core Frontend Focus'}</h3>
                  
                  <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                    <label class="glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 15px; cursor: pointer; border-radius: var(--radius-sm);">
                      <input type="radio" name="project-type" value="100" checked style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <div>
                        <h4 style="font-size: 1rem; margin-bottom: 2px;">HTML/CSS Website ($100)</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">${isAr ? 'صفحات هبوط ومواقع تعريفية ثابتة بسيطة وأنيقة' : 'Sleek luxury landing pages and static content websites.'}</p>
                      </div>
                    </label>

                    <label class="glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 15px; cursor: pointer; border-radius: var(--radius-sm);">
                      <input type="radio" name="project-type" value="180" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <div>
                        <h4 style="font-size: 1rem; margin-bottom: 2px;">HTML/CSS/JavaScript Website ($180)</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">${isAr ? 'مواقع ديناميكية تفاعلية مبنية بالـ JavaScript الخام' : 'Dynamic websites built with clean custom vanilla JavaScript.'}</p>
                      </div>
                    </label>

                    <label class="glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 15px; cursor: pointer; border-radius: var(--radius-sm);">
                      <input type="radio" name="project-type" value="350" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <div>
                        <h4 style="font-size: 1rem; margin-bottom: 2px;">React SPA ($350)</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">${isAr ? 'تطبيق ويب متطور وتفاعلي مبني بمكتبة React' : 'Modern high-performance reactive Single Page Application in React.'}</p>
                      </div>
                    </label>

                    <label class="glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 15px; cursor: pointer; border-radius: var(--radius-sm);">
                      <input type="radio" name="project-type" value="350" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <div>
                        <h4 style="font-size: 1rem; margin-bottom: 2px;">Vue SPA ($350)</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">${isAr ? 'تطبيقات صفحة واحدة تفاعلية وسريعة مبنية بـ Vue' : 'Fast responsive custom user dashboard/SPA using Vue framework.'}</p>
                      </div>
                    </label>

                    <label class="glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 15px; cursor: pointer; border-radius: var(--radius-sm);">
                      <input type="radio" name="project-type" value="450" style="width: 18px; height: 18px; accent-color: var(--color-accent-1);">
                      <div>
                        <h4 style="font-size: 1rem; margin-bottom: 2px;">Angular SPA ($450)</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">${isAr ? 'تطبيقات مؤسسات ضخمة متكاملة مبنية بـ Angular' : 'Robust structured application architectures using Angular.'}</p>
                      </div>
                    </label>
                  </div>
                  
                  <button type="button" id="next-btn-1" class="btn btn-primary" style="width: 100%;">${isAr ? 'المرحلة التالية' : 'Next Configuration'}</button>
                </div>

                <!-- Step 2 Content -->
                <div id="wizard-step-2" style="display: none;">
                  <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem;">${isAr ? 'حدد الميزات والخيارات المطلوبة' : 'Select Frontend Features'}</h3>
                  
                  <div class="form-group" style="margin-bottom: 2rem;">
                    <label class="form-label" style="display: flex; justify-content: space-between;">
                      <span>${isAr ? 'عدد الصفحات المطلوبة' : 'Estimated Total Views'}</span>
                      <span id="wizard-pages-val" style="font-family: var(--font-en); font-weight: bold; color: var(--color-accent-1);">8</span>
                    </label>
                    <input id="wizard-pages" type="range" min="1" max="40" value="8" style="width:100%; cursor:pointer; accent-color: var(--color-accent-1);">
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label" style="margin-bottom: 1rem;">${isAr ? 'اختر ميزات الواجهة الإضافية (حدد ما ينطبق):' : 'Select UI Modules:'}</label>
                    <div style="display: flex; flex-direction: column; gap: 0.9rem; margin-top: 10px; max-height: 280px; overflow-y: auto; padding-right: 10px; border-radius: var(--radius-xs); border: 1px solid var(--border-color); padding: 15px; background: rgba(255,255,255,0.01);">
                      ${addons.map(addon => `
                        <label style="display: flex; align-items: flex-start; gap: 10px; cursor: pointer; font-size: 0.9rem; color: var(--text-secondary);">
                          <input type="checkbox" class="wizard-addon-check" value="${addon.val}" id="${addon.id}" data-label-ar="${addon.labelAr}" data-label-en="${addon.labelEn}" style="width: 18px; height: 18px; margin-top: 2px; accent-color: var(--color-accent-1);">
                          <span>${isAr ? addon.labelAr : addon.labelEn}</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>
                  
                  <div style="display: flex; gap: 15px; margin-top: 2.5rem;">
                    <button type="button" id="prev-btn-2" class="btn btn-secondary" style="flex: 1;">${isAr ? 'الخلف' : 'Previous'}</button>
                    <button type="button" id="next-btn-2" class="btn btn-primary" style="flex: 2;">${isAr ? 'المرحلة التالية' : 'Next'}</button>
                  </div>
                </div>

                <!-- Step 3 Content -->
                <div id="wizard-step-3" style="display: none;">
                  <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem;">${isAr ? 'معلومات الاتصال بالمسؤول' : 'Credentials Info'}</h3>
                  
                  <div class="form-group">
                    <label class="form-label">${isAr ? 'الاسم بالكامل' : 'Contact Name'}</label>
                    <input type="text" id="wizard-name" class="form-control" required placeholder="John Doe">
                  </div>
                  <div class="form-group">
                    <label class="form-label">${isAr ? 'البريد الإلكتروني للعمل' : 'Corporate Email'}</label>
                    <input type="email" id="wizard-email" class="form-control" required placeholder="j.doe@company.com">
                  </div>
                  <div class="form-group">
                    <label class="form-label">${isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                    <div style="display: flex; gap: 10px;">
                      <input type="text" id="wizard-country-code" class="form-control" required placeholder="+62" style="width: 85px; text-align: center; font-family: var(--font-en);">
                      <input type="tel" id="wizard-phone" class="form-control" style="flex: 1;" required placeholder="0812-1475-0878">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label">${isAr ? 'رابط ملف التصميم Figma (اختياري)' : 'Figma Link (Optional)'}</label>
                    <input type="url" id="wizard-figma" class="form-control" placeholder="https://figma.com/file/...">
                  </div>
                  <div class="form-group">
                    <label class="form-label">${isAr ? 'تفاصيل إضافية للمشروع' : 'Bespoke Requirements Context'}</label>
                    <textarea id="wizard-notes" class="form-control" rows="3" required placeholder="${isAr ? 'اكتب باختصار متطلبات الواجهة للشركة...' : 'Briefly describe your objectives...'}" style="resize: none;"></textarea>
                  </div>
                  
                  <div id="wizard-status" style="margin-bottom: 1.5rem; display: none; font-size: 0.95rem; font-weight: 600;"></div>
                  
                  <div style="display: flex; gap: 15px;">
                    <button type="button" id="prev-btn-3" class="btn btn-secondary" style="flex: 1;">${isAr ? 'الخلف' : 'Previous'}</button>
                    <button type="submit" class="btn btn-primary" style="flex: 2;">${isAr ? 'إرسال طلب السعر' : 'Transmit Project Spec'}</button>
                  </div>
                </div>

              </form>
            </div>
          </div>

          <!-- Result Summary Board -->
          <div class="reveal-right" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="glass-card glow-cyan" style="text-align: center;">
              <h3 style="font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 1rem;">
                ${isAr ? 'ملخص ميزانية الواجهة المقدرة' : 'Estimate Summary Node'}
              </h3>
              
              <div style="display: flex; align-items: baseline; justify-content: center; gap: 4px; margin-bottom: 1.5rem;">
                <span style="font-size: 1.5rem; font-weight: 600; color: var(--color-accent-1);">$</span>
                <span id="wizard-total" style="font-size: 4rem; font-weight: 900; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: var(--font-en); line-height: 1;">245</span>
              </div>
              
              <div style="text-align: left; ${isAr ? 'text-align: right;' : ''} margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 20px;">
                <h4 style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 10px;">${isAr ? 'تفاصيل الميزانية التقديرية:' : 'Calculation Breakdown:'}</h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: var(--text-muted);">
                  <li style="display: flex; justify-content: space-between;">
                    <span>${isAr ? 'تصنيف الواجهة الأساسي:' : 'Frontend Frame Node:'}</span>
                    <span id="breakdown-base" style="color: var(--text-primary); font-family: var(--font-en); font-weight: 600;">$100</span>
                  </li>
                  <li style="display: flex; justify-content: space-between;">
                    <span>${isAr ? 'تكلفة الصفحات المحددة:' : 'Layout Renderings:'}</span>
                    <span id="breakdown-pages" style="color: var(--text-primary); font-family: var(--font-en); font-weight: 600;">$145</span>
                  </li>
                  <li style="display: flex; justify-content: space-between;">
                    <span>${isAr ? 'خيارات الواجهة الإضافية:' : 'Frontend Custom Addons:'}</span>
                    <span id="breakdown-sla" style="color: var(--text-primary); font-family: var(--font-en); font-weight: 600;">$0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    const radioInputs = document.querySelectorAll('input[name="project-type"]');
    const pagesSlider = document.getElementById('wizard-pages');
    const pagesVal = document.getElementById('wizard-pages-val');
    const addonCheckboxes = document.querySelectorAll('.wizard-addon-check');
    
    const totalElem = document.getElementById('wizard-total');
    const baseBreakdown = document.getElementById('breakdown-base');
    const pagesBreakdown = document.getElementById('breakdown-pages');
    const slaBreakdown = document.getElementById('breakdown-sla');

    const step1 = document.getElementById('wizard-step-1');
    const step2 = document.getElementById('wizard-step-2');
    const step3 = document.getElementById('wizard-step-3');

    const tab1 = document.getElementById('step-tab-1');
    const tab2 = document.getElementById('step-tab-2');
    const tab3 = document.getElementById('step-tab-3');

    const next1 = document.getElementById('next-btn-1');
    const next2 = document.getElementById('next-btn-2');
    const prev2 = document.getElementById('prev-btn-2');
    const prev3 = document.getElementById('prev-btn-3');
    const form = document.getElementById('quote-wizard-form');
    const statusElem = document.getElementById('wizard-status');

    function calculateWizardPrice() {
      if (!pagesSlider || !totalElem) return;

      let baseVal = 100;
      radioInputs.forEach(radio => {
        if (radio.checked) {
          baseVal = parseInt(radio.value, 10);
        }
      });

      const pagesCount = parseInt(pagesSlider.value, 10);
      pagesVal.textContent = pagesCount;
      
      // Calculate tiered page cost
      let pagesCost = 0;
      if (pagesCount <= 5) {
        pagesCost = pagesCount * 25;
      } else if (pagesCount <= 15) {
        pagesCost = (5 * 25) + ((pagesCount - 5) * 20);
      } else {
        pagesCost = (5 * 25) + (10 * 20) + ((pagesCount - 15) * 15);
      }

      // Sum checked checkboxes
      let addonsCost = 0;
      addonCheckboxes.forEach(check => {
        if (check.checked) {
          addonsCost += parseInt(check.value, 10);
        }
      });

      const finalEstimate = baseVal + pagesCost + addonsCost;
      
      totalElem.textContent = finalEstimate;
      if (baseBreakdown) baseBreakdown.textContent = `$${baseVal}`;
      if (pagesBreakdown) pagesBreakdown.textContent = `$${pagesCost}`;
      if (slaBreakdown) slaBreakdown.textContent = `$${addonsCost}`;
    }

    radioInputs.forEach(radio => radio.addEventListener('change', calculateWizardPrice));
    if (pagesSlider) pagesSlider.addEventListener('input', calculateWizardPrice);
    addonCheckboxes.forEach(check => check.addEventListener('change', calculateWizardPrice));

    // Wizard navigation controls
    if (next1 && step1 && step2 && tab1 && tab2) {
      next1.addEventListener('click', () => {
        step1.style.display = 'none';
        step2.style.display = 'block';
        tab1.style.opacity = '0.5';
        tab2.style.opacity = '1';
      });
    }

    if (next2 && step2 && step3 && tab2 && tab3) {
      next2.addEventListener('click', () => {
        step2.style.display = 'none';
        step3.style.display = 'block';
        tab2.style.opacity = '0.5';
        tab3.style.opacity = '1';
      });
    }

    if (prev2 && step1 && step2 && tab1 && tab2) {
      prev2.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
        tab2.style.opacity = '0.5';
        tab1.style.opacity = '1';
      });
    }

    if (prev3 && step2 && step3 && tab2 && tab3) {
      prev3.addEventListener('click', () => {
        step3.style.display = 'none';
        step2.style.display = 'block';
        tab3.style.opacity = '0.5';
        tab2.style.opacity = '1';
      });
    }

    // Submit and store quote in localStorage (fully dynamic)
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('wizard-name').value;
        const email = document.getElementById('wizard-email').value;
        const countryCode = document.getElementById('wizard-country-code').value;
        const phoneNum = document.getElementById('wizard-phone').value;
        const phone = countryCode + ' ' + phoneNum;
        const figma = document.getElementById('wizard-figma').value;
        const notes = document.getElementById('wizard-notes').value;

        // Core values
        let typeLabel = 'HTML/CSS Website';
        let basePrice = 100;
        radioInputs.forEach(radio => {
          if (radio.checked) {
            basePrice = parseInt(radio.value, 10);
            if (basePrice === 100) typeLabel = 'HTML/CSS Website';
            if (basePrice === 180) typeLabel = 'HTML/CSS/JavaScript Website';
            if (basePrice === 350) {
              // Distinguish react vs vue by radio label text or index
              const parentText = radio.parentElement.textContent;
              if (parentText.includes('React')) typeLabel = 'React SPA';
              else typeLabel = 'Vue SPA';
            }
            if (basePrice === 450) typeLabel = 'Angular SPA';
          }
        });

        const pages = parseInt(pagesSlider.value, 10);

        // Fetch selected addons labels
        const selectedAddons = [];
        addonCheckboxes.forEach(check => {
          if (check.checked) {
            selectedAddons.push(isAr ? check.getAttribute('data-label-ar') : check.getAttribute('data-label-en'));
          }
        });

        const finalTotal = totalElem.textContent;

        let fullDescription = notes || '';
        if (selectedAddons.length > 0) {
          fullDescription += "\n\n المميزات المطلوبة (Selected Addons):\n- " + selectedAddons.join("\n- ");
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

        const payload = {
          name: name,
          email: email,
          phone: phone,
          company: figma || '',
          country: countryCode,
          service_type: typeLabel,
          budget: `$${finalTotal}`,
          deadline: '',
          description: fullDescription,
          pages: pages,
          estimate: `$${finalTotal}`
        };

        try {
          if (statusElem) {
            statusElem.style.display = 'block';
            statusElem.style.color = 'var(--color-accent-1)';
            statusElem.textContent = isAr ? 'جاري تشفير وإرسال عرض السعر المخصص...' : 'Encrypting and saving quote request details...';
          }

          fetch('/api/requests/', {
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
            if (statusElem) {
              statusElem.style.color = 'var(--color-accent-1)';
              statusElem.textContent = isAr 
                ? '✓ تم حفظ وإرسال طلب عرض السعر بنجاح! سيتم التواصل معك قريباً.' 
                : '✓ Quote request compiled & saved successfully! We will connect soon.';
            }
            form.reset();
            addonCheckboxes.forEach(c => c.checked = false);
            calculateWizardPrice();
            
            // Redirect to home after 2 seconds
            setTimeout(() => {
              window.AetherRouter.navigateTo('home');
            }, 2500);
          })
          .catch(err => {
            console.error(err);
            if (statusElem) {
              statusElem.style.color = 'var(--color-accent-3)';
              statusElem.textContent = isAr 
                ? '❌ فشل إرسال الطلب: يرجى التحقق من اتصالك بالشبكة!' 
                : '❌ Submission failed: Please verify your database and network connection.';
            }
          });

        } catch (err) {
          console.error(err);
        }
      });
    }

    calculateWizardPrice();
  }
};
