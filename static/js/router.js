/* Custom Client-Side Router (Hash-Based SPA) - AetherCore Technologies */

window.AetherRouter = {
  navigateTo(route) {
    window.location.hash = `#/${route}`;
  },

  renderCurrentRoute() {
    const config = window.AetherConfig;
    const hash = window.location.hash || '#/';
    let routeName = hash.replace(/^#\/?/, '') || config.ROUTES.HOME;
    
    // Clean query strings or arguments
    routeName = routeName.split('?')[0];

    const appViewport = document.getElementById('app-viewport');
    if (!appViewport) return;

    // Toggle footer visibility: hide if Admin Dashboard portal is loaded
    const footerElement = document.querySelector('.main-footer');
    if (footerElement) {
      if (routeName === config.ROUTES.DASHBOARD) {
        footerElement.style.display = 'none';
      } else {
        footerElement.style.display = 'block';
      }
    }

    // Scroll viewport smoothly to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update active state in navbar items
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const routeAttr = link.getAttribute('data-route');
      if (routeAttr === routeName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const lang = window.AetherLang.getLang();

    // Read pages from global namespace AetherPages
    try {
      const pageModule = window.AetherPages[routeName] || window.AetherPages['notfound'];
      
      // Render localized view into view frame
      appViewport.innerHTML = pageModule.render(lang);
      
      // If the view component supports initialization routines, run them
      if (typeof pageModule.init === 'function') {
        pageModule.init(lang);
      }
      
      // Bind IntersectionObserver reveals
      setTimeout(initScrollObserver, 120);
    } catch (error) {
      console.error('Page rendering failed:', error);
      const fallbackModule = window.AetherPages['notfound'];
      appViewport.innerHTML = fallbackModule.render(lang);
      fallbackModule.init(lang);
    }
  }
};

function initScrollObserver() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
  
  reveals.forEach(reveal => observer.observe(reveal));
}

// Watch navigation hashes
window.addEventListener('hashchange', () => {
  window.AetherRouter.renderCurrentRoute();
});
