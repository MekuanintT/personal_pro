// Fade in sections using IntersectionObserver with a scroll fallback
const sections = document.querySelectorAll('.section');

function applyHiddenStyle(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
}

function revealElement(el) {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
}

// Apply initial hidden state
sections.forEach(applyHiddenStyle);

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealElement(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
} else {
    // Fallback for older browsers: simple scroll + resize check
    const revealOnScroll = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                revealElement(section);
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('resize', revealOnScroll);
    // run once on load
    revealOnScroll();
}

// …existing reveal code…

// menu-toggle for small screens
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // optionally close when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    });
}
