document.addEventListener('DOMContentLoaded', () => {
    // Wait slightly to ensure index.js doesn't overwrite it immediately
    setTimeout(() => {
        const container = document.getElementById("particles-container");
        if (!container) return;
        
        container.innerHTML = '';
        
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        let isDark = document.documentElement.classList.contains('dark');
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    isDark = document.documentElement.classList.contains('dark');
                    initParticles();
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        const particleCount = Math.min(Math.floor(window.innerWidth / 15), 120);
        const connectionDistance = 160;
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = Math.random() * 2 + 1;
                this.color = isDark ? `rgba(139, 92, 246, ${Math.random() * 0.6 + 0.4})` : `rgba(79, 70, 229, ${Math.random() * 0.6 + 0.4})`;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        let mouse = { x: null, y: null, radius: 220 };
        // We have to add mouse listener to window since canvas is pointer-events-none
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        const r = isDark ? 139 : 79;
                        const g = isDark ? 92 : 70;
                        const b = isDark ? 246 : 229;
                        
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                
                if (mouse.x != null && mouse.y != null) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const r = isDark ? 236 : 14; 
                        const g = isDark ? 72 : 165;
                        const b = isDark ? 153 : 233;
                        
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${force * 0.6})`;
                        ctx.lineWidth = 1.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                        
                        particles[i].x += (dx/distance) * force * 1.5;
                        particles[i].y += (dy/distance) * force * 1.5;
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }

        resize();
        initParticles();
        animate();
    }, 100); // 100ms delay to let index.js run first
});