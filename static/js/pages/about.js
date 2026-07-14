/* About Us Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.about = {
  render(lang) {
    const isAr = lang === 'ar';
    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'عن الشركة' : 'AetherCore Story'}</div>
          <h1 class="section-title">${isAr ? 'الريادة في صياغة واجهات رقمية مستقبيلية' : 'Architecting Digital Legacies'}</h1>
        </div>

        <!-- Introduction Grid -->
        <div class="grid-2 reveal" style="margin-bottom: 6rem; align-items: center;">
          <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; line-height: 1.4;">
              ${isAr 
                ? 'مجموعة من المصممين والمهندسين نسعى لإحداث ثورة في كيفية بناء الواجهات الأمامية الفاخرة.' 
                : 'A collective of elite frontend engineers, visual designers, and layout architects dedicated to crafting next-generation digital layouts.'}
            </h2>
            <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
              ${isAr
                ? 'تأسست إيثيركور تكنولوجيز لتجاوز الحدود التقليدية للتطوير. نحن لا نبني مجرد صفحات ويب؛ بل نقوم بصقل واجهات تفاعلية مذهلة تمنح علامتك التجارية القوة والانتشار وتضمن أسرع أداء وتوافقية.'
                : 'AetherCore was established to dismantle the boundaries of standard web layouts. We merge hardware-level client-side performance guidelines with luxury user experiences to elevate global organizations and ambitious start-ups alike.'}
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8;">
              ${isAr
                ? 'تتميز منهجيتنا بالدقة البالغة في تصميم واجهات المستخدم، ومطابقة الرسوم الدقيقة، وتحسين الكود البرمجي لضمان توافق محركات البحث والسرعة الفائقة.'
                : 'Our design philosophy is anchored in clean modular frontend code, highly optimized animations, and responsive styling that adapts dynamically across all screens.'}
            </p>
          </div>
          <div style="display: flex; justify-content: center; position: relative;">
            <!-- Futuristic Frame -->
            <div class="glass-card" style="width: 100%; max-width: 420px; border-radius: var(--radius-lg); overflow: hidden; padding: 0; box-shadow: var(--shadow-glow);">
              <div style="background: var(--gradient-primary); height: 10px; width: 100%;"></div>
              <div style="padding: 2.5rem;">
                <h3 style="margin-bottom: 1rem; color: var(--color-accent-1); font-family: var(--font-en); font-size: 1.6rem;">Æ Core Core values</h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.95rem;">
                  <li>
                    <strong style="color: var(--text-primary);">${isAr ? 'الإتقان البصري:' : 'Visual Mastery:'}</strong> 
                    <span style="color: var(--text-secondary);">${isAr ? 'كل بكسل محسوب ومصمم بدقة لراحة وتوجيه المستخدم.' : 'Every layout pixel is deliberately placed.'}</span>
                  </li>
                  <li>
                    <strong style="color: var(--text-primary);">${isAr ? 'الجمالية الفاخرة:' : 'Luxury Aesthetics:'}</strong> 
                    <span style="color: var(--text-secondary);">${isAr ? 'تصاميم حديثة ومستقبلية تترك انطباعاً أولياً مذهلاً.' : 'State-of-the-art visual schemes for high impact.'}</span>
                  </li>
                  <li>
                    <strong style="color: var(--text-primary);">${isAr ? 'سرعة الاستجابة:' : 'Peak Responsiveness:'}</strong> 
                    <span style="color: var(--text-secondary);">${isAr ? 'تحسين شامل للسرعة لضمان التصفح السريع والسهل.' : 'Optimized loading sequences and animations.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Vision & Mission -->
        <div class="grid-2 reveal" style="gap: 3rem; margin-bottom: 6rem;">
          <div class="glass-card glow-cyan">
            <h3 style="font-size: 1.4rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
              <span>👁️</span> ${isAr ? 'رؤيتنا' : 'Our Vision'}
            </h3>
            <p style="font-size: 0.95rem; line-height: 1.7;">
              ${isAr
                ? 'أن نكون المعيار العالمي الرائد لتطوير الواجهات الأمامية، وتوفير بيئة تدمج الفن بالتكنولوجيا لخلق واجهات مذهلة وسهلة الاستخدام.'
                : 'To establish AetherCore as the premier global design and frontend development suite, reshaping how humanity interacts with web pages.'}
            </p>
          </div>
          <div class="glass-card glow-purple">
            <h3 style="font-size: 1.4rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
              <span>🎯</span> ${isAr ? 'رسالتنا' : 'Our Mission'}
            </h3>
            <p style="font-size: 0.95rem; line-height: 1.7;">
              ${isAr
                ? 'تمكين العلامات التجارية من التميز الرقمي المطلق عن طريق تقديم واجهات ويب فائقة الجمال والتفاعل ومحسنة كلياً للأداء.'
                : 'To empower high-growth global enterprises by delivering custom frontend pipelines that run at peak efficiency, utilizing top-tier visual guidelines.'}
            </p>
          </div>
        </div>

        <!-- Interactive Timeline -->
        <div class="reveal">
          <h2 style="font-size: 2rem; font-weight: 800; text-align: center; margin-bottom: 4rem;">
            ${isAr ? 'خريطة طريق وأهداف عام ٢٠٢٦' : '2026 Core Roadmap'}
          </h2>
          
          <div class="timeline-container" style="position: relative; max-width: 800px; margin: 0 auto; padding: 20px 0;">
            <div style="position: absolute; width: 2px; background: var(--border-color); top: 0; bottom: 0; left: 50%; transform: translateX(-50%);"></div>
            
            <!-- Event 1 -->
            <div class="timeline-item" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 3rem; position: relative;">
              <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent-1); box-shadow: var(--shadow-glow); border: 2px solid var(--bg-primary);"></div>
              <div class="glass-card" style="width: 45%; margin-right: auto; padding: 1.5rem;">
                <div style="font-family: var(--font-en); font-weight: 800; color: var(--color-accent-1); margin-bottom: 0.5rem;">2026 - Q1</div>
                <h4 style="margin-bottom: 0.5rem;">${isAr ? 'التأسيس ورسم الهوية' : 'Foundation & Setup'}</h4>
                <p style="font-size: 0.85rem;">${isAr ? 'تأسيس إيثيركور تكنولوجيز لتغيير معايير تصميم الواجهات الأمامية والتركيز على السرعة المطلقة.' : 'Establishing AetherCore Technologies with a clear focus on frontend performance, speed, and design.'}</p>
              </div>
            </div>

            <!-- Event 2 -->
            <div class="timeline-item" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 3rem; position: relative; flex-direction: row-reverse;">
              <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent-2); box-shadow: var(--shadow-glow); border: 2px solid var(--bg-primary);"></div>
              <div class="glass-card" style="width: 45%; margin-left: auto; padding: 1.5rem;">
                <div style="font-family: var(--font-en); font-weight: 800; color: var(--color-accent-2); margin-bottom: 0.5rem;">2026 - Q2</div>
                <h4 style="margin-bottom: 0.5rem;">${isAr ? 'إطلاق نظام التسعير التفاعلي' : 'Calculator Release'}</h4>
                <p style="font-size: 0.85rem;">${isAr ? 'إطلاق حاسبة تقدير تكاليف الواجهات الفورية وإطلاق حزم التنسيق التفاعلية للعملاء.' : 'Launching our interactive frontend quote estimator and deploying customized client assets pipelines.'}</p>
              </div>
            </div>

            <!-- Event 3 -->
            <div class="timeline-item" style="display: flex; justify-content: space-between; align-items: center; width: 100%; position: relative;">
              <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent-3); box-shadow: var(--shadow-glow); border: 2px solid var(--bg-primary);"></div>
              <div class="glass-card" style="width: 45%; margin-right: auto; padding: 1.5rem;">
                <div style="font-family: var(--font-en); font-weight: 800; color: var(--color-accent-3); margin-bottom: 0.5rem;">2026 - Q3 & Beyond</div>
                <h4 style="margin-bottom: 0.5rem;">${isAr ? 'التعاون وتوسيع المعرض' : 'Client & Portfolio Expansion'}</h4>
                <p style="font-size: 0.85rem;">${isAr ? 'البدء في بناء ورفع نماذج معرض الأعمال والتعاون مع أول العملاء لتقديم تجارب ويب خلابة.' : 'Initiating project partnerships, growing our public portfolio showcase, and rendering custom prototypes.'}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <style>
        @media(max-width: 768px) {
          .timeline-container::before {
            left: 20px !important;
          }
          .timeline-item {
            flex-direction: row !important;
            padding-left: 40px;
          }
          .timeline-dot {
            left: 20px !important;
          }
          .timeline-item > .glass-card {
            width: 100% !important;
          }
        }
      </style>
    `;
  },

  init(lang) {
    // Static content
  }
};
