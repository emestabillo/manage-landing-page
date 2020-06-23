// var swiper = new Swiper(".swiper-container", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 42,
  speed: 1000,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});
