// =====================================================
// THEME TOGGLE (Dark / Light Mode with localStorage)
// =====================================================
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// Load saved theme or default to system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// =====================================================
// MOBILE NAV TOGGLE
// =====================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = navToggle.querySelector('i');
  icon.className = navLinks.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.querySelector('i').className = 'fa-solid fa-bars';
  });
});

// =====================================================
// TYPING EFFECT
// =====================================================
const typingEl = document.getElementById('typing');
const roles = [
  'Data Analyst',
  'Business Analytics Graduate',
  'Salesforce Developer (Apex & Flow)',
  'IT Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// =====================================================
// SCROLL REVEAL ANIMATIONS (data-aos)
// =====================================================
const aosElements = document.querySelectorAll('[data-aos]');

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-show');
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

aosElements.forEach(el => aosObserver.observe(el));

// =====================================================
// SKILL BAR ANIMATION
// =====================================================
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.dataset.width + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// =====================================================
// COUNTER ANIMATION (About Stats)
// =====================================================
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.dataset.target, 10);
      let current = 0;
      const increment = Math.max(target / 60, 1);

      const update = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// =====================================================
// NAVBAR SHADOW ON SCROLL + BACK TO TOP BUTTON
// =====================================================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================================================
// LIGHTBOX FOR GALLERY & CERTIFICATES
// =====================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item img, .cert-img img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});

// =====================================================
// CONTACT FORM (Demo - Formspree-ready)
// =====================================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // NOTE: To make this form functional on GitHub Pages,
  // sign up at https://formspree.io, get your form endpoint,
  // and set the form's "action" attribute + method="POST".
  // Example:
  // <form id="contactForm" action="https://formspree.io/f/yourFormID" method="POST">

  const name = document.getElementById('name').value;

  formStatus.textContent = `Thanks, ${name}! Your message has been noted (connect a form service like Formspree to enable real email delivery).`;
  formStatus.style.color = 'var(--primary)';

  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = '';
  }, 6000);
});

// =====================================================
// FOOTER YEAR
// =====================================================
document.getElementById('year').textContent = new Date().getFullYear();
