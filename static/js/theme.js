/* Theme Manager (Dark/Light Toggling) - AetherCore Technologies */

window.AetherTheme = {
  initTheme() {
    const config = window.AetherConfig;
    const savedTheme = localStorage.getItem(config.storageThemeKey) || config.defaultTheme;
    this.setTheme(savedTheme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    let nextTheme = 'dark';
    if (currentTheme === 'dark') {
      nextTheme = 'light';
    } else if (currentTheme === 'light') {
      nextTheme = 'gold';
    } else {
      nextTheme = 'dark';
    }
    this.setTheme(nextTheme);
  },

  setTheme(theme) {
    const config = window.AetherConfig;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(config.storageThemeKey, theme);
    
    // SVG Icons representing modes
    const moonIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    
    const sunIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;

    const crownIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor"></path>
        <rect x="3" y="18" width="18" height="2" rx="1" fill="currentColor"></rect>
      </svg>
    `;

    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(toggle => {
      if (theme === 'dark') {
        toggle.innerHTML = sunIcon;
        toggle.setAttribute('title', 'Switch to Light Mode');
      } else if (theme === 'light') {
        toggle.innerHTML = crownIcon;
        toggle.setAttribute('title', 'Switch to Gold Mode');
      } else {
        toggle.innerHTML = moonIcon;
        toggle.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }
};
