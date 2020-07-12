//MOBILE MENU ACTIVE - STOP BODY SCROLL
const body = document.querySelector("body");
const menu = document.getElementById("toggle");

menu.addEventListener("click", function () {
  body.classList.toggle("stop-scroll");
});

//TESTIMONIALS SLIDER
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 32,
  speed: 1000,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   992: {
  //     slidesPerView: 2.8,
  //     spaceBetween: 35,
  //   },
  // },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});
