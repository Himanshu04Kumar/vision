/**
 * Cepheus Website Interactions
 * Core Functionality: Scroll-triggered visibility updates (Reveal Animations)
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { 
  threshold: 0.1 
});

// Select and link observer tracking to all layout elements containing the '.reveal' class
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));