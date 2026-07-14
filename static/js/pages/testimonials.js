/* Testimonials Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.testimonials = {
  render(lang) {
    const isAr = lang === 'ar';
    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'آراء شركائنا' : 'Client Testimonials'}</div>
          <h1 class="section-title">${isAr ? 'ماذا يقولون عن تجربتهم معنا' : 'Validations From Our Partners'}</h1>
        </div>

        <!-- Testimonial Carousel Container -->
        <div class="reveal" style="max-width: 700px; margin: 0 auto; position: relative;">
          <div id="testimonial-slider" class="glass-card glow-cyan" style="padding: 3.5rem; min-height: 280px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
            <!-- Slider elements injected in init() -->
          </div>

          <!-- Slider Navigation Controls -->
          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 2rem;">
            <button id="slider-prev-btn" class="btn btn-secondary" style="width: 45px; height: 45px; border-radius: 50%; padding: 0;">
              ${isAr ? '→' : '←'}
            </button>
            <button id="slider-next-btn" class="btn btn-secondary" style="width: 45px; height: 45px; border-radius: 50%; padding: 0;">
              ${isAr ? '←' : '→'}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    
    const reviews = [
      {
        text: isAr 
          ? '«أعادت إيثيركور بناء واجهة منصتنا للتجارة الإلكترونية، فانخفض زمن تحميل الصفحات بنسبة 65%. لقد قدموا لنا درساً حقيقياً في هندسة الأداء العالي والجمال البصري.»'
          : '"AetherCore rebuilt our luxury retail gateway, dropping page load times by 65%. It was an absolute masterclass in performance tuning and user experience design."',
        author: isAr ? 'سارة جينكينز' : 'Sarah Jenkins',
        position: isAr ? 'مديرة التقنية في لوكس تشين' : 'CTO at LuxChain LLC',
        avatar: 'SJ'
      },
      {
        text: isAr
          ? '«الدقة والأمان كانت عوامل أساسية لنجاح مشروعنا المشترك. لوحة التحكم السحابية المخصصة التي صمموها لنا توفر للفريق إحصائيات فورية وتسهل إدارة مئات الطلبات يومياً.»'
          : '"Masterful systems design and bulletproof API integration. The custom control panel they provided handles thousands of daily data records without a single trace of latency."',
        author: isAr ? 'كريم محمود' : 'Kariem Mahmoud',
        position: isAr ? 'نائب رئيس التكنولوجيا في الرياض التقنية' : 'VP of Engineering at Riyadh FinTech',
        avatar: 'KM'
      },
      {
        text: isAr
          ? '«كود نظيف جداً وتوثيق ممتاز للمسارات الأمنية. تمكنا من ربط تطبيقات الموبايل بالواجهات الخلفية في أقل من أسبوع بفضل سرعة استجابة فريقهم ودعمهم الفني الراقي.»'
          : '"Clean code architecture and immaculate REST documentation. We synced our mobile applications to their backend service engine in less than a week. Highly recommended."',
        author: isAr ? 'مايكل تشانغ' : 'Michael Chang',
        position: isAr ? 'رئيس قسم المنتجات في فيلو لوجستيكس' : 'Head of Products at Velo Logistics',
        avatar: 'MC'
      }
    ];

    let currentIdx = 0;
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');

    function updateSlider() {
      if (!slider) return;
      const review = reviews[currentIdx];
      
      slider.style.opacity = '0';
      slider.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        slider.innerHTML = `
          <div style="font-size: 3rem; color: var(--color-accent-1); line-height: 1; margin-bottom: 1.5rem; font-family: Georgia, serif;">“</div>
          <p style="font-size: 1.15rem; line-height: 1.8; font-style: italic; color: var(--text-primary); margin-bottom: 2rem;">
            ${review.text}
          </p>
          <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
            <div style="width: 45px; height: 45px; border-radius: 50%; background: var(--gradient-primary); color: var(--text-inverse); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.95rem; font-family: var(--font-en);">
              ${review.avatar}
            </div>
            <div style="text-align: left; ${isAr ? 'text-align: right;' : ''}">
              <h4 style="font-size: 1rem; color: var(--text-primary);">${review.author}</h4>
              <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${review.position}</div>
            </div>
          </div>
        `;
        slider.style.opacity = '1';
        slider.style.transform = 'translateY(0)';
      }, 200);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIdx = (currentIdx - 1 + reviews.length) % reviews.length;
        updateSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % reviews.length;
        updateSlider();
      });
    }

    updateSlider();
  }
};
