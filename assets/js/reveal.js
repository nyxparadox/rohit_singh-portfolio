// const revealElements =
//   document.querySelectorAll(".reveal");

// const revealObserver =
//   new IntersectionObserver(

//     (entries) => {

//       entries.forEach((entry) => {

//         if (entry.isIntersecting) {
//           entry.target.classList.add("active");
//         }

//       });

//     },

//     {
//       threshold: 0.15,
//     }

//   );

// revealElements.forEach((element) => {
//   revealObserver.observe(element);
// });



// const reveals = document.querySelectorAll(".reveal");

// const revealOnScroll = () => {

//   reveals.forEach((el, index) => {

//     const top =
//       el.getBoundingClientRect().top;

//     if (top < window.innerHeight - 80) {

//       setTimeout(() => {
//         el.classList.add("active");
//       }, index * 35);

//     }

//   });

// };

// window.addEventListener("scroll", revealOnScroll);

// revealOnScroll();



const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  reveals.forEach((el) => {

    const top =
      el.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {

      el.classList.add("active");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();