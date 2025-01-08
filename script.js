/* script.js */
// Smooth Scroll Functionality
const links = document.querySelectorAll('nav a[href^="#"], .hero a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
