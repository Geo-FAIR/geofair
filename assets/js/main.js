
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Active tab highlighting
  let path = window.location.pathname.split('/').pop();
  if (!path || path === '') path = 'index.html';
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === 'index.html' && (href === '/' || href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // Handle discipline dropdown active state
  const disciplinePages = ['ocean-sciences.html','hydrology.html','seismology.html'];
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const submenuLinks = document.querySelectorAll('.dropdown-menu a');
  if (disciplinePages.includes(path)) {
    dropdownToggle.classList.add('active');
    submenuLinks.forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  }

  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Dropdown open/close for mobile
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    dropdownToggle.setAttribute('aria-expanded', String(!expanded));
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
