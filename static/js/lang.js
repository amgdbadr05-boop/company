/* Language Manager (Translation & Direction Toggling) - AetherCore Technologies */

window.AetherLang = {
  initLang() {
    const config = window.AetherConfig;
    const savedLang = localStorage.getItem(config.storageLangKey) || config.defaultLang;
    this.setLang(savedLang);
  },

  toggleLang() {
    const currentLang = this.getLang();
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    this.setLang(nextLang);
  },

  setLang(lang) {
    const config = window.AetherConfig;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem(config.storageLangKey, lang);

    // Update text label on toggle buttons
    const toggles = document.querySelectorAll('.lang-toggle-btn');
    toggles.forEach(toggle => {
      toggle.textContent = lang === 'en' ? 'العربية' : 'English';
    });

    // Re-render the active route content
    if (window.AetherRouter && window.AetherRouter.renderCurrentRoute) {
      window.AetherRouter.renderCurrentRoute();
    }
  },

  getLang() {
    const config = window.AetherConfig;
    return document.documentElement.getAttribute('lang') || config.defaultLang;
  }
};
