/* Team Members Page Component - AetherCore Technologies */

window.AetherPages = window.AetherPages || {};

window.AetherPages.team = {
  render(lang) {
    const isAr = lang === 'ar';
    
    return `
      <div class="page-view container">
        <!-- Header -->
        <div class="section-header reveal">
          <div class="section-subtitle">${isAr ? 'عقول هندسية مبدعة' : 'Core Brain Trust'}</div>
          <h1 class="section-title">${isAr ? 'الفريق القيادي لشركة إيثيركور' : 'Architects of Our Digital Ecosystem'}</h1>
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary);">
            ${isAr 
              ? 'نخبة من كبار المهندسين والمصممين الملتزمين بالتميز وحريصين على صياغة أدق الأكواد البرمجية.' 
              : 'A hand-picked team of veteran developers and systems designers committed to absolute engineering rigor.'}
          </p>
        </div>

        <!-- Team Members Grid -->
        <div id="team-members-grid" class="grid-3" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2.5rem;">
          <!-- Loaded dynamically from localStorage in init() -->
        </div>
      </div>
    `;
  },

  init(lang) {
    const isAr = lang === 'ar';
    let team = [];
    const defaultTeam = [
      {
        name: isAr ? 'أمجد بدر' : 'Amgad Badr',
        role: isAr ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
        bio: isAr 
          ? 'مؤسس شركة إيثيركور تكنولوجيز. خبير ومتخصص في صياغة الواجهات الرقمية وتطوير الأنظمة البصرية الفاخرة.'
          : 'Founder of AetherCore Technologies. Specializing in luxury frontend architectures and responsive systems.',
        glow: 'glow-cyan',
        initials: 'AB',
        langs: ['HTML, CSS & JS'],
        libs: ['Tailwind', 'Sass', 'Bootstrap', 'jQuery'],
        fws: ['React', 'Vue', 'Angular']
      }
    ];

    const grid = document.getElementById('team-members-grid');

    function renderGrid() {
      if (!grid) return;
      grid.innerHTML = team.map((member, index) => {
        const initials = member.initials || (member.name ? member.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'Æ');
        const glow = member.glow || 'glow-cyan';
        const bioText = member.bio || (isAr ? 'مهندس واجهات برمجية في إيثيركور تكنولوجيز.' : 'Frontend engineer at AetherCore Technologies.');
        
        return `
          <div class="glass-card ${glow} reveal" style="transition-delay: ${index * 0.05}s; text-align: center; display: flex; flex-direction: column; align-items: center;">
            <!-- initials avatar -->
            <div style="width: 90px; height: 90px; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 800; color: var(--text-inverse); margin-bottom: 1.5rem; box-shadow: var(--shadow-glow); font-family: var(--font-en);">
              ${initials}
            </div>
            
            <h3 style="font-size: 1.3rem; color: var(--text-primary); margin-bottom: 0.3rem;">${member.name}</h3>
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1.2rem;">
              ${member.role}
            </div>
            
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.2rem;">${bioText}</p>
            
            <!-- Qualifications Tag Badges -->
            ${(member.langs || member.libs || member.fws) ? `
              <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 1.5rem; max-width: 100%;">
                ${member.langs ? member.langs.map(l => `<span class="badge" style="font-size: 0.7rem; padding: 2px 8px; background: rgba(0, 242, 254, 0.1); color: var(--color-accent-1); border: 1px solid rgba(0, 242, 254, 0.2);">${l}</span>`).join('') : ''}
                ${member.libs ? member.libs.map(l => `<span class="badge" style="font-size: 0.7rem; padding: 2px 8px; background: rgba(138, 43, 226, 0.1); color: var(--color-accent-2); border: 1px solid rgba(138, 43, 226, 0.2);">${l}</span>`).join('') : ''}
                ${member.fws ? member.fws.map(f => `<span class="badge" style="font-size: 0.7rem; padding: 2px 8px; background: rgba(255, 0, 127, 0.1); color: var(--color-accent-3); border: 1px solid rgba(255, 0, 127, 0.2);">${f}</span>`).join('') : ''}
              </div>
            ` : ''}
            
            <div style="display: flex; gap: 15px; justify-content: center;">
              <span style="font-size: 1.2rem; cursor: pointer; color: var(--text-muted);">🔗</span>
              <span style="font-size: 1.2rem; cursor: pointer; color: var(--text-muted);">📧</span>
              <span style="font-size: 1.2rem; cursor: pointer; color: var(--text-muted);">💻</span>
            </div>
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

    // Fetch team members from Django REST API
    fetch('/api/team/')
      .then(res => {
        if (!res.ok) throw new Error('API failure');
        return res.json();
      })
      .then(data => {
        team = data.length > 0 ? data : defaultTeam;
        renderGrid();
      })
      .catch(err => {
        console.error(err);
        team = defaultTeam;
        renderGrid();
      });
  }
};
