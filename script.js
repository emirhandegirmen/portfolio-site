document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklendiğinde animasyonları başlat
    animateOnScroll();
    initParallaxEffect();
});

// Scroll animasyonları
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });
}

// Parallax efekti
function initParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const posX = (clientX - centerX) / centerX;
        const posY = (clientY - centerY) / centerY;

        // Profil fotoğrafı parallax efekti
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.style.transform = `translate(${posX * 10}px, ${posY * 10}px)`;
        }

        // Arka plan animasyonu parallax efekti
        const background = document.querySelector('.background-animation');
        if (background) {
            background.style.transform = `translate(${posX * 20}px, ${posY * 20}px)`;
        }
    });
}

// Skill ikonları için hover efekti
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Sosyal medya butonları için hover efekti
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});
