/* Filterable Portfolio Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.portfolio = {
  render(lang) {
    const isAr = lang === 'ar';
    
    const filterTabs = [
      { id: 'all', label: isAr ? 'الكل' : 'All' },
      { id: 'vanilla', label: 'HTML, CSS, JS' },
      { id: 'react', label: 'React' },
      { id: 'vue', label: 'Vue' },
      { id: 'angular', label: 'Angular' }
    ];

    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'معرض الأعمال' : 'Our Portfolio'}</div>
          <h1 class="section-title">${isAr ? 'منصات رقمية صممت للتأثير والنمو' : 'Completed Frontend Creations'}</h1>
        </div>

        <!-- Filters -->
        <div class="reveal" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 4rem;">
          ${filterTabs.map((tab, idx) => `
            <button class="portfolio-filter-btn btn ${idx === 0 ? 'btn-primary' : 'btn-secondary'}" data-filter="${tab.id}" style="padding: 8px 20px; font-size: 0.9rem;">
              ${tab.label}
            </button>
          `).join('')}
        </div>

        <!-- Grid Case Studies -->
        <div id="portfolio-grid" class="grid-3" style="min-height: 200px;">
          <!-- Filled dynamically in init() -->
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    let portfolioItems = [];

    const grid = document.getElementById('portfolio-grid');
    const buttons = document.querySelectorAll('.portfolio-filter-btn');

    // Fetch projects from Django REST API
    fetch('/api/projects/')
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(data => {
        portfolioItems = data;
        displayItems('all');
      })
      .catch(err => {
        console.error('Failed to load portfolio items:', err);
        portfolioItems = [];
        displayItems('all');
      });

    function displayItems(filter = 'all') {
      if (!grid) return;
      
      const filtered = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);

      if (filtered.length === 0) {
        grid.style.display = 'block';
        grid.innerHTML = `
          <div class="glass-card glow-purple reveal" style="text-align: center; padding: 4rem 2rem; max-width: 600px; margin: 0 auto;">
            <i class="fas fa-folder-open" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1.5rem; display: block; filter: drop-shadow(0 0 10px var(--glow-color));"></i>
            <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">
              ${isAr ? 'لا توجد مشاريع حالياً' : 'No Projects Published'}
            </h3>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 2rem;">
              ${isAr 
                ? 'معرض الأعمال فارغ حالياً. يرجى تسجيل الدخول إلى لوحة التحكم (Admin Portal) لرفع مشاريع جديدة وعرضها هنا.' 
                : 'The portfolio is currently empty. Please log into the Admin Portal (link in footer) to add new projects.'}
            </p>
            <a href="#/dashboard" class="btn btn-primary">
              ${isAr ? 'الذهاب للوحة التحكم' : 'Access Admin Portal'}
            </a>
          </div>
        `;
        return;
      }

      grid.style.display = 'grid';
      grid.innerHTML = filtered.map((item, index) => {
        const parseLangString = (str) => {
          if (!str) return '';
          if (str.includes('|')) {
            const parts = str.split('|');
            return isAr ? parts[0].trim() : parts[1].trim();
          }
          return str;
        };

        const badge = item.badge || 'React & HTML';
        const client = parseLangString(item.client) || 'AetherCore Client';
        const title = parseLangString(item.title) || 'Untitled Project';
        const desc = parseLangString(item.description) || (isAr ? 'لا يوجد وصف متوفر.' : 'No description provided.');
        const glowClass = item.glow || 'glow-cyan';
        const imageUrl = item.image_url || (item.image ? item.image.trim() : '');

        return `
          <div class="glass-card ${glowClass} reveal" style="display: flex; flex-direction: column; justify-content: space-between; transition-delay: ${index * 0.05}s;">
            <div>
              <!-- Render project image if available -->
              ${imageUrl ? `
                <div style="width: 100%; height: 180px; overflow: hidden; border-radius: var(--radius-sm); margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                  <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: cover;" alt="${title}" onerror="this.style.display='none';">
                </div>
              ` : ''}
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <span class="badge" style="font-size: 0.75rem;">${badge}</span>
                <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">${client}</span>
              </div>
              <h3 style="font-size: 1.3rem; margin-bottom: 1rem; color: var(--text-primary);">${title}</h3>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">${desc}</p>
            </div>
            ${(item.live_url || item.link) ? `
              <a href="${item.live_url || item.link}" target="_blank" style="display: flex; align-items: center; gap: 8px; color: var(--color-accent-1); font-weight: 600; font-size: 0.9rem; border-top: 1px solid var(--border-color); padding-top: 15px; margin-top: 10px; text-decoration: none; width: fit-content; cursor: pointer;">
                <span>${isAr ? 'استعراض المشروع' : 'View Prototype'}</span>
                <span>${isAr ? '←' : '→'}</span>
              </a>
            ` : `
              <div style="display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-weight: 600; font-size: 0.9rem; border-top: 1px solid var(--border-color); padding-top: 15px; margin-top: 10px; opacity: 0.6; cursor: default;">
                <span>${isAr ? 'معاينة غير متوفرة' : 'Preview Unavailable'}</span>
              </div>
            `}
          </div>
        `;
      }).join('');

      // Trigger reveals
      setTimeout(() => {
        const reveals = grid.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05 });
        reveals.forEach(reveal => observer.observe(reveal));
      }, 50);
    }

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        buttons.forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary');

        const filterVal = button.getAttribute('data-filter');
        displayItems(filterVal);
      });
    });

    displayItems();
  }
};
