// Matrix Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
matrix = matrix.split('');
let font_size = 10;
let columns = canvas.width / font_size;
let drops = [];
for (let x = 0; x < columns; x++)
    drops[x] = 1;
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = font_size + 'px arial';
    for (let i = 0; i < drops.length; i++) {
        let text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 35);

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / font_size;
    drops = [];
    for (let x = 0; x < columns; x++)
        drops[x] = 1;
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

const loadingBar = document.querySelector('.loading-bar');
        gsap.to(loadingBar, {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out"
        });

// Skill bars animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.width = `${progress}%`;
        }
    });
});

document.querySelectorAll('.skill-progress').forEach(bar => {
    observer.observe(bar);
});

// Particle system
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw(ctx) {
        ctx.fillStyle = '#00ff88';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particleCanvas = document.createElement('canvas');
const particleCtx = particleCanvas.getContext('2d');
document.querySelector('.particle-container').appendChild(particleCanvas);
particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

let particles = [];

function createParticles(e) {
    const mouseX = e.x;
    const mouseY = e.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(mouseX, mouseY));
    }
}

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw(particleCtx);
        if (particle.size <= 0.2) particles.splice(index, 1);
    });
    requestAnimationFrame(animateParticles);
}

window.addEventListener('mousemove', createParticles);
animateParticles();

// 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.three-canvas').appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    wireframe: true
});
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Glitch effect on hover
document.querySelectorAll('h1, h2, h3').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('glitch-effect');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('glitch-effect');
    });
});

// Smooth scroll with GSAP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, {
            duration: 1,
            scrollTo: target,
            ease: "power2.inOut"
        });
    });
});

// Parallax effect
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    gsap.to('.parallax-section', {
        x: moveX,
        y: moveY,
        duration: 0.5
    });
});

const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;
let isDark = true;

themeSwitcher.addEventListener('click', () => {
    isDark = !isDark;
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeSwitcher.textContent = isDark ? '🌓' : '🌔';
});

// Tilt Effect for Project Cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Form Submit Animation
const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
        form.reset();
    }, 3000);
});

// Card Flip Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Dynamic Skill Bar Animation
const updateSkillBars = () => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
};

// Intersection Observer for skill bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateSkillBars();
        }
    });
});

document.querySelectorAll('.skills').forEach(skillSection => {
    skillObserver.observe(skillSection);
});

// Enhanced Particle Effect
class EnhancedParticle extends Particle {
    constructor(x, y) {
        super(x, y);
        this.color = `hsl(${Math.random() * 60 + 120}, 100%, 50%)`;
        this.angle = Math.random() * Math.PI * 2;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Replace particle creation with enhanced particles
function createParticles(e) {
    const mouseX = e.x;
    const mouseY = e.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new EnhancedParticle(mouseX, mouseY));
    }
}

const neuralCanvas = document.querySelector('.neural-bg');
const neuralCtx = neuralCanvas.getContext('2d');

class NeuralNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.speed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < 0 || this.x > window.innerWidth) this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > window.innerHeight) this.angle = -this.angle;
    }

    draw() {
        neuralCtx.fillStyle = 'rgba(0,255,136,0.5)';
        neuralCtx.beginPath();
        neuralCtx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        neuralCtx.fill();

        this.connections.forEach(connection => {
            const distance = Math.hypot(this.x - connection.x, this.y - connection.y);
            if (distance < 150) {
                neuralCtx.strokeStyle = `rgba(0,255,136,${1 - distance/150})`;
                neuralCtx.beginPath();
                neuralCtx.moveTo(this.x, this.y);
                neuralCtx.lineTo(connection.x, connection.y);
                neuralCtx.stroke();
            }
        });
    }
}

// Initialize Neural Network
const nodes = [];
for (let i = 0; i < 50; i++) {
    const node = new NeuralNode(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
    );
    nodes.push(node);
}

nodes.forEach(node => {
    node.connections = nodes.filter(n => n !== node);
});

function animateNetwork() {
    neuralCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    nodes.forEach(node => {
        node.update();
        node.draw();
    });
    requestAnimationFrame(animateNetwork);
}

// Voice Commands
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    const voiceButton = document.querySelector('.voice-command');
    
    recognition.continuous = false;
    recognition.interimResults = false;

    voiceButton.addEventListener('click', () => {
        recognition.start();
        voiceButton.style.background = 'rgba(255,0,0,0.3)';
    });

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('projects')) {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('contact')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('about')) {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        }
    };

    recognition.onend = () => {
        voiceButton.style.background = 'rgba(0,255,136,0.2)';
    };
}

// Sound Visualization
const soundViz = document.querySelector('.sound-viz');
for (let i = 0; i < 50; i++) {
    const bar = document.createElement('div');
    bar.className = 'sound-bar';
    soundViz.appendChild(bar);
}

function animateSoundBars() {
    const bars = document.querySelectorAll('.sound-bar');
    bars.forEach(bar => {
        const height = Math.random() * 30 + 5;
        bar.style.height = `${height}px`;
    });
    requestAnimationFrame(animateSoundBars);
}

// Initialize everything
window.addEventListener('load', () => {
    neuralCanvas.width = window.innerWidth;
    neuralCanvas.height = window.innerHeight;
    animateNetwork();
    animateSoundBars();
});

// Text Distortion Effect
document.querySelectorAll('h1, h2, h3').forEach(element => {
    element.classList.add('hover-text-distort');
});

// Enhanced 3D Card Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `
            perspective(1000px) 
            rotateX(${angleX}deg) 
            rotateY(${angleY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
        
        const glare = card.querySelector('.card-glare') || document.createElement('div');
        if (!card.querySelector('.card-glare')) {
            glare.className = 'card-glare';
            card.appendChild(glare);
        }
        
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `
            radial-gradient(
                circle at ${glareX}% ${glareY}%, 
                rgba(255,255,255,0.1) 0%,
                rgba(255,255,255,0) 80%
            )
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        const glare = card.querySelector('.card-glare');
        if (glare) glare.remove();
    });
});

class QuantumParticle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.energy = Math.random();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.energy = Math.sin(Date.now() * 0.001 * this.speed) * 0.5 + 0.5;

        if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.energy, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity * this.energy})`;
        ctx.fill();
    }
}

// Initialize Quantum Field
const quantumCanvas = document.createElement('canvas');
const quantumCtx = quantumCanvas.getContext('2d');
document.querySelector('.quantum-field').appendChild(quantumCanvas);
quantumCanvas.width = window.innerWidth;
quantumCanvas.height = window.innerHeight;

const particle = Array.from({ length: 100 }, () => new QuantumParticle());

function animateQuantumField() {
    quantumCtx.clearRect(0, 0, quantumCanvas.width, quantumCanvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw(quantumCtx);
    });
    requestAnimationFrame(animateQuantumField);
}

// DNA Helix Animation
function createDNAHelix() {
    const helix = document.querySelector('.dna-helix');
    const particleCount = 30;
    const radius = 20;
    const verticalSpacing = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle1 = document.createElement('div');
        const particle2 = document.createElement('div');
        
        particle1.className = 'dna-particle';
        particle2.className = 'dna-particle';
        
        helix.appendChild(particle1);
        helix.appendChild(particle2);

        animateParticle(particle1, i, 0);
        animateParticle(particle2, i, Math.PI);
    }
}

function animateParticle(particle, index, offset) {
    const animate = () => {
        const time = Date.now() * 0.001;
        const y = index * 15;
        const x = Math.sin(time + index * 0.2 + offset) * 20;
        const z = Math.cos(time + index * 0.2 + offset) * 20;

        particle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        requestAnimationFrame(animate);
    };
    animate();
}

// HUD Updates
function updateHUD() {
    const fpsCounter = document.querySelector('.fps-counter');
    const coordinates = document.querySelector('.coordinates');
    const scrollProgress = document.querySelector('.scroll-progress');
    
    let fps = 0;
    let frameCount = 0;
    let lastTime = performance.now();

    document.addEventListener('mousemove', (e) => {
        coordinates.textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    });

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.textContent = `Progress: ${scrolled.toFixed(1)}%`;
    });

    function updateFPS() {
        const currentTime = performance.now();
        frameCount++;

        if (currentTime - lastTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = currentTime;
            fpsCounter.textContent = `FPS: ${fps}`;
        }
        requestAnimationFrame(updateFPS);
    }
    updateFPS();
}

// Initialize Holographic Menu
function initHoloMenu() {
    const holoItems = document.querySelectorAll('.holo-item');
    
    holoItems.forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            switch(action) {
                case 'home':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'projects':
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'contact':
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'theme':
                    toggleTheme();
                    break;
                case 'ar':
                    toggleAR();
                    break;
            }
        });
    });
}

// AR Mode
let arMode = false;
function toggleAR() {
    arMode = !arMode;
    document.body.classList.toggle('ar-mode');
    
    if (arMode) {
        initARElements();
    } else {
        removeARElements();
    }
}

function initARElements() {
    const overlay = document.querySelector('.ar-overlay');
    // Add AR markers and interactive elements
    document.querySelectorAll('.project-card').forEach(card => {
        const marker = document.createElement('div');
        marker.className = 'ar-marker';
        marker.style.position = 'absolute';
        const rect = card.getBoundingClientRect();
        marker.style.left = `${rect.left}px`;
        marker.style.top = `${rect.top}px`;
        overlay.appendChild(marker);
    });
}

// Initialize Everything
window.addEventListener('load', () => {
    createDNAHelix();
    animateQuantumField();
    updateHUD();
    initHoloMenu();
});

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.01;
        const x = deltaX * speed;
        const y = deltaY * speed;
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
});
