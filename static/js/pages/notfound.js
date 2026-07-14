/* 404 Not Found Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.notfound = {
  render(lang) {
    const isAr = lang === 'ar';
    return `
      <div class="page-view container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center;">
        <div class="reveal">
          <h1 style="font-size: 8rem; font-weight: 900; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; margin-bottom: 1rem; font-family: var(--font-en);">404</h1>
          <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">
            ${isAr ? 'عذراً، الصفحة غير موجودة' : 'Ecosystem Path Not Found'}
          </h2>
          <p style="max-width: 500px; margin-bottom: 2.5rem; color: var(--text-secondary);">
            ${isAr 
              ? 'المسار الذي تحاول الوصول إليه غير موجود في نظامنا. ربما تم نقله أو حذفه.' 
              : 'The digital node you are looking for does not exist in our ecosystem directory. It may have been relocated or deprecated.'}
          </p>
          <button id="notfound-home-btn" class="btn btn-primary">
            ${isAr ? 'العودة للرئيسية' : 'Return to Core Node'}
          </button>
        </div>
      </div>
    `;
  },

  init(lang) {
    const btn = document.getElementById('notfound-home-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        window.AetherRouter.navigateTo('home');
      });
    }
  }
};
