/* Privacy Policy Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.privacy = {
  render(lang) {
    const isAr = lang === 'ar';
    return `
      <div class="page-view container" style="max-width: 800px; line-height: 1.8;">
        <div class="reveal">
          <h1 style="font-size: 2.2rem; margin-bottom: 2rem;">
            ${isAr ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy Policy & Data Protection'}
          </h1>
          
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            ${isAr
              ? 'تلتزم شركة إيثيركور تكنولوجيز بحماية خصوصيتك وضمان سرية البيانات والمعلومات التي تشاركها معنا أثناء زيارتك لموقعنا الإلكتروني.'
              : 'At AetherCore Technologies, we prioritize the protection and security of your corporate data assets. This privacy charter details how we harvest and safeguard metrics.'}
          </p>

          <h3 style="margin-top: 2rem; margin-bottom: 1rem;">${isAr ? '1. جمع المعلومات واستخدامها' : '1. Metric Gathering'}</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            ${isAr
              ? 'نقوم فقط بجمع البيانات الأساسية التي تقدمها لنا طواعية عبر نموذج طلب عرض السعر أو نموذج التواصل مثل الاسم والبريد الإلكتروني وتفاصيل المشروع.'
              : 'We collect metadata provided voluntarily during estimate inquiries or career applications. This is handled strictly to resolve project specs.'}
          </p>

          <h3 style="margin-top: 2rem; margin-bottom: 1rem;">${isAr ? '2. ملفات تعريف الارتباط والتعقب' : '2. Storage Cookies'}</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            ${isAr
              ? 'يستخدم الموقع ملفات تعريف الارتباط (Cookies) لحفظ إعداداتك المفضلة مثل الوضع الداكن واللغة المفضلة لتوفير تجربة استخدام أفضل في زياراتك المستقبلية.'
              : 'We store configuration flags within LocalStorage (such as theme and language attributes) to optimize rendering speed on subsequent visits.'}
          </p>

          <h3 style="margin-top: 2rem; margin-bottom: 1rem;">${isAr ? '3. مشاركة وحماية الأصول' : '3. Security Audits'}</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            ${isAr
              ? 'لا نقوم ببيع أو تأجير أو مشاركة بياناتك مع أي طرف ثالث لأغراض تجارية، وتخضع خوادمنا لأعلى معايير الحماية الأمنية المتاحة.'
              : 'No collected details are ever distributed or leased to third-party marketing entities. System logs are backed up on encrypted cloud databases.'}
          </p>
        </div>
      </div>
    `;
  },
  
  init(lang) {
    // Static content
  }
};
