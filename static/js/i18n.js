/* Translation Dictionary (EN & AR) - AetherCore Technologies */

window.AetherI18n = {
  translations: {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        technologies: 'Tech Stack',
        portfolio: 'Portfolio',
        pricing: 'Pricing',
        team: 'Team',
        contact: 'Contact',
        quote: 'Request Quote',
        dashboard: 'Portal'
      },
      footer: {
        desc: 'Creating next-generation frontend ecosystems. We combine deep client-side engineering with luxury UI/UX aesthetics to build platforms that elevate your global influence.',
        solutions: 'Frontend Solutions',
        company: 'Company',
        newsletter: 'Newsletter',
        subscribe: 'Subscribe',
        placeholder: 'Enter your email...',
        copyright: '© 2026 AetherCore Technologies. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        dashboard: 'Admin Portal'
      },
      common: {
        loading: 'Loading AetherCore...',
        exploreBtn: 'Explore Ecosystem',
        backToTop: 'Back to Top',
        learnMore: 'Learn More',
        viewAll: 'View All',
        send: 'Send Message',
        submitting: 'Sending...',
        success: 'Success!',
        error: 'Error!',
        readTime: 'min read',
        applyNow: 'Apply Now',
        contactUs: 'Contact Us',
        pricingTabTitle: 'Service Price Plans'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        technologies: 'التقنيات',
        portfolio: 'معرض أعمالنا',
        pricing: 'الأسعار',
        team: 'الفريق',
        contact: 'اتصل بنا',
        quote: 'طلب عرض سعر',
        dashboard: 'البوابة'
      },
      footer: {
        desc: 'نبتكر واجهات رقمية من الجيل القادم. نجمع بين جماليات التصميم وتجربة المستخدم الفاخرة لتطوير مواقع وتطبيقات ترفع من قيمتك السوقية.',
        solutions: 'حلول الواجهة الأمامية',
        company: 'الشركة',
        newsletter: 'النشرة البريدية',
        subscribe: 'اشترك الآن',
        placeholder: 'أدخل بريدك الإلكتروني...',
        copyright: '© 2026 إيثيركور تكنولوجيز. جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'الشروط والأحكام',
        dashboard: 'لوحة التحكم للمسؤول'
      },
      common: {
        loading: 'جاري تحميل إيثيركور...',
        exploreBtn: 'استكشف بيئتنا البرمجية',
        backToTop: 'الرجوع للأعلى',
        learnMore: 'اقرأ المزيد',
        viewAll: 'عرض الكل',
        send: 'إرسال الرسالة',
        submitting: 'جاري الإرسال...',
        success: 'تم بنجاح!',
        error: 'حدث خطأ ما!',
        readTime: 'دقائق قراءة',
        applyNow: 'تقدم للوظيفة',
        contactUs: 'اتصل بنا',
        pricingTabTitle: 'خطط أسعار الخدمات'
      }
    }
  },
  
  getTranslation(key, lang = 'en') {
    const keys = key.split('.');
    let obj = this.translations[lang];
    for (const k of keys) {
      if (obj && obj[k] !== undefined) {
        obj = obj[k];
      } else {
        let fallbackObj = this.translations['en'];
        for (const fk of keys) {
          if (fallbackObj && fallbackObj[fk] !== undefined) {
            fallbackObj = fallbackObj[fk];
          } else {
            return key;
          }
        }
        return fallbackObj;
      }
    }
    return obj;
  }
};
