const lightbox =
  document.getElementById("lightbox");

if (lightbox) {

  const lightboxImg =
    lightbox.querySelector("img");

  const projectImages =
    document.querySelectorAll(".project-image");

  projectImages.forEach((img) => {

    img.addEventListener("click", () => {

      lightboxImg.src = img.src;

      lightbox.classList.add("active");

    });

  });

  lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    lightboxImg.src = "";

  });

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

      lightbox.classList.remove("active");

      lightboxImg.src = "";

    }

  });

}