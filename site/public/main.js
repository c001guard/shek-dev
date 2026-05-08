document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');
  const observed = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observed.has(entry.target)) {
        observed.add(entry.target);
        const row = entry.target.closest('.bar');
        const level = row ? row.dataset.level : 0;
        entry.target.style.setProperty('--w', level + '%');
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => observer.observe(bar));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const header = document.querySelector('.header');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 100) {
      header.style.borderBottomColor = 'rgba(67,76,94,0.7)';
    } else {
      header.style.borderBottomColor = 'rgba(67,76,94,0.3)';
    }
    lastScroll = current;
  }, { passive: true });
});
