document.addEventListener('DOMContentLoaded', function() {
    // Referencia al menú hamburguesa y los links de navegación
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle para el menú hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navegación suave al hacer clic en los enlaces del menú
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#3a5be0';
        } else {
            header.style.backgroundColor = '#4a6cf7';
        }
    });

    // Animación para las habilidades cuando entran en el viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-item, .project-container');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
            observer.observe(element);
        });
    }

    // Iniciar animaciones cuando la página esté cargada
    window.addEventListener('load', animateOnScroll);
});