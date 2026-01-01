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






const showcases = document.querySelectorAll(".project-showcase");

const showcaseObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

showcases.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  showcaseObserver.observe(section);
});





// ===== LIGHTBOX FUNCTIONALITY =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

// Close on click
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
});

// Close on ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }
});





// ===== BUTTON SCROLL REVEAL =====
const projectButtons = document.querySelectorAll(".project-buttons");

const buttonObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

projectButtons.forEach(btn => {
  btn.classList.add("hidden");
  buttonObserver.observe(btn);
});




// ===== SECTION REVEAL =====
const sections = document.querySelectorAll(".project-showcase");

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(sec => {
  sec.classList.add("section-hidden");
  sectionObserver.observe(sec);
});
