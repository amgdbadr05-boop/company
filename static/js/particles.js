/* Futuristic Canvas Particle Animation Background - AetherCore Technologies */

window.AetherParticles = {
  initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.6 + 0.2;
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }
      
      draw() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        const fillStyle = theme === 'dark' 
          ? `rgba(0, 242, 254, ${this.alpha})` 
          : `rgba(59, 130, 246, ${this.alpha * 0.8})`;
          
        ctx.fillStyle = fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    function init() {
      particlesArray = [];
      const density = 15000;
      const numberOfParticles = Math.min(120, Math.floor((canvas.width * canvas.height) / density));
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
        particlesArray[i].y = Math.random() * canvas.height;
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 250);
    });
  }
};
