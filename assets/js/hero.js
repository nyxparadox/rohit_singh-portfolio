const heroImage = document.querySelector(".hero-image");
const heroImg = document.querySelector(".hero-image img");

if (heroImage) {
  heroImage.addEventListener("mousemove", (e) => {
    const rect = heroImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 25;
    const rotateY = ((x / rect.width) - 0.5) * -15;

    heroImg.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  heroImage.addEventListener("mouseleave", () => {
    heroImg.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
}
