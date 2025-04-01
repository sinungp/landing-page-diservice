// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
const revealElements = () => {
    const elements = document.querySelectorAll('.feature-card, .contact-form, .stat-card, .service-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for scroll reveal
document.querySelectorAll('.feature-card, .contact-form').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

// Listen for scroll events
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// Animasi untuk stat numbers
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-card h3');
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16);
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.innerText = Math.round(count) + '%';
                requestAnimationFrame(updateCount);
            } else {
                stat.innerText = target + '%';
            }
        };
        updateCount();
    });
};

// Inisialisasi animasi hero
const initHeroAnimations = () => {
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content p');
    
    if (heroTitle && heroText) {
        heroTitle.style.opacity = '1';
        heroText.style.opacity = '1';
    }
};

// Initialize animations
window.addEventListener('load', () => {
    revealElements();
    animateStats();
    initHeroAnimations(); // Tambahkan ini
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
    });
});
