//MOBILE MENU - STOP BODY SCROLL WHEN ACTIVE
const body = document.querySelector("body");
const menu = document.getElementById("toggle");
const nav = document.getElementById("nav");

function noScroll() {
  body.classList.toggle("stop-scroll");
}

menu.addEventListener("click", function () {
  body.classList.toggle("stop-scroll");
});

//MOBILE MENU - CLOSE IF ONE OF THE LINKS IS CLICKED
// Listen for any clicks on the menu
nav.addEventListener("click", function () {
  const target = event.target.tagName;
  // Make sure that the element being clicked is a link
  if (target !== "A") {
    return;
  }
  // Uncheck the checkbox
  menu.checked = false;
  !body.classList.toggle("stop-scroll");
});

//TESTIMONIALS SLIDER
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      initialSlide: 1,
      slidesPerView: 2.59,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});

//EMAIL FORM
const form = document.querySelector("form");
const email = document.getElementById("email");

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showError(input, "Email is not valid");
  } else {
    showSuccess(input);
  }
}

function showError(input, message) {
  const form = input.parentElement;
  form.className = "error";
  const small = form.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const form = input.parentElement;
  form.className = "success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail(email);
});
