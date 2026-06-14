/* Sticky sidebar nav — highlight active section on scroll */

const sections = document.querySelectorAll('.system-section');
const navLinks = document.querySelectorAll('.system-nav__link');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, {
    rootMargin: '-25% 0px -70% 0px',
    threshold: 0,
  });

  sections.forEach(section => observer.observe(section));
}
