const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

skillCards.forEach(card => skillObserver.observe(card));




// ================= PROJECTS SCROLL ANIMATION =================

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

projectCards.forEach((card) => projectObserver.observe(card));





// About page animation
const aboutCards = document.querySelectorAll(".about-card, .timeline-item");

aboutCards.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
});

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

aboutCards.forEach(el => aboutObserver.observe(el));
