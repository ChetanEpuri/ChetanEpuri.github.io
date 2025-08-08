document.addEventListener('DOMContentLoaded', function() {
    // Create minimal floating particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Alternate between neon and green
        if (Math.random() < 0.7) {
            particle.classList.add('neon');
        } else {
            particle.classList.add('green');
        }
        
        // Random horizontal position
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.bottom = '0px';
        
        // Minimal horizontal drift
        const drift = (Math.random() - 0.5) * 50;
        particle.style.setProperty('--drift', drift + 'px');
        
        document.body.appendChild(particle);
        
        // Trigger animation
        setTimeout(() => {
            particle.classList.add('active');
        }, 10);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }
    
    // Create particles at regular intervals
    setInterval(createParticle, 300);
    
    // Smooth scroll for back to top
    const backToTop = document.querySelector('.back-to-top a');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Add hover effects to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Enhanced glow effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const name = document.querySelector('.name');
        
        if (scrolled > 100) {
            name.style.transform = `translateY(${rate}px)`;
            name.style.opacity = Math.max(0.3, 1 - scrolled / 500);
        } else {
            name.style.transform = 'translateY(0)';
            name.style.opacity = 1;
        }
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add project hover effects
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#001122';
            this.style.borderLeft = '3px solid #00ffff';
            this.style.paddingLeft = '20px';
            this.style.transition = 'all 0.3s ease';
            this.style.borderRadius = '5px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.borderLeft = 'none';
            this.style.paddingLeft = '0';
        });
    });
    
    // Add skill category hover effects
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const title = this.querySelector('h4');
            title.style.transform = 'scale(1.05)';
            title.style.transition = 'transform 0.3s ease';
        });
        
        category.addEventListener('mouseleave', function() {
            const title = this.querySelector('h4');
            title.style.transform = 'scale(1)';
        });
    });
    
    // Add parallax effect to career objective
    const careerObj = document.querySelector('.career-objective');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        careerObj.style.transform = `translateY(${rate}px)`;
    });
});
