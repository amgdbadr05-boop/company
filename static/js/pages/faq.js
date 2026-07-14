/* FAQ Accordion Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.faq = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const faqData = [
      {
        q: isAr 
          ? 'ما هي اللغات والتقنيات التي تتخصص فيها الشركة؟' 
          : 'What core technologies do you specialize in?',
        a: isAr
          ? 'نحن نعمل بشكل أساسي على تطوير الواجهات الأمامية باستخدام HTML5, CSS3, JavaScript, React, Vue, و Angular. وللواجهات الخلفية نعتمد على Node.js (Express) و Python (Django)، بالإضافة لإدارة قواعد البيانات مثل PostgreSQL, MySQL, و MongoDB.'
          : 'Our engineering house focuses on React, Vue, Angular, and Vanilla ES6+ JS for frontend environments. For servers, we utilize Node.js (Express) and Python (Django), backed by PostgreSQL, MySQL, and MongoDB schemas.'
      },
      {
        q: isAr
          ? 'هل تقدم الشركة خدمات الدعم والصيانة بعد إطلاق الموقع؟'
          : 'Do you provide support and maintenance post-deployment?',
        a: isAr
          ? 'نعم، بكل تأكيد. نحن نقدم باقات صيانة شهرية ودعم فني مخصص يشمل تحديثات الحزم الأمنية، وإصلاح الأخطاء الطارئة، وتحسين الأداء لمطابقة أي تحديثات في المتصفحات وخوادم الاستضافة.'
          : 'Yes. We offer recurring SLA packages that guarantee direct server support, package upgrades, security audits, database indexing, and general updates to adapt to system improvements.'
      },
      {
        q: isAr
          ? 'كيف يتم تحديد تكلفة المشروع والجدول الزمني للتنفيذ؟'
          : 'How do you determine project cost and timelines?',
        a: isAr
          ? 'نقوم بدراسة متطلبات مشروعك بدقة متناهية، وبناءً على عدد الصفحات ونوع التقنيات المستخدمة وحجم العمليات المطلوبة، نقوم بتقديم عرض سعر تفصيلي وجدول زمني واضح للمراحل المختلفة (Milestones).'
          : 'After a thorough discovery session mapping your feature sets, we draft a proposal outlining milestone phases and flat-rate costs. You can also use our instant calculator on the Pricing page for estimates.'
      },
      {
        q: isAr
          ? 'هل يمكنكم تطوير وتحديث موقع قائم بالفعل أم تبنون من الصفر فقط؟'
          : 'Can you work on existing systems or only build from scratch?',
        a: isAr
          ? 'يمكننا العمل على تحديث وتحسين الأنظمة القائمة وتطوير واجهاتها أو تسريع أدائها وحل مشاكل قواعد البيانات بها، وكذلك بناء الأنظمة الجديدة كلياً من الصفر حسب رغبة العميل واحتياجاته.'
          : 'We frequently integrate into legacy codebases to upgrade APIs, refactor frontends, or cache slow databases. We also build entirely new systems from scratch tailored to specifications.'
      }
    ];

    return `
      <div class="page-view container" style="max-width: 800px;">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'الأسئلة الشائعة' : 'Support Hub'}</div>
          <h1 class="section-title">${isAr ? 'إجابات حول خدماتنا وتفاصيل العمل' : 'Frequently Asked Inquiries'}</h1>
        </div>

        <!-- FAQ List -->
        <div class="reveal" style="display: flex; flex-direction: column; gap: 1rem;">
          ${faqData.map((faq, index) => `
            <div class="accordion-item" data-index="${index}">
              <div class="accordion-header">
                <span>${faq.q}</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  init(lang) {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        items.forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
};
