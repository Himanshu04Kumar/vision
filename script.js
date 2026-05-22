/**
 * Cepheus Confidential Site Interactions
 * Performance Optimized Animation Framework
 */

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Matches design token class exactly
      }
    });
  }, { 
    threshold: 0.15 
  });

  // Target and track all viewport-bound components
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});