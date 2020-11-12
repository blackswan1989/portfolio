"use strict";

console.log(
  "%c Hello, I'm Front-end Developer HyoJin ",
  "color:black; font-size:14px; background:white"
);
console.log(
  "%c If you are interested in me, please contact me. ",
  "color:black; font-size:14px; background:white"
);
console.log(
  "%c My cell phone number is ",
  "color:black; font-size:14px; background:white"
);
console.log(
  "%c 010 7194 3925 ",
  "color:black; font-size:16px; background:white"
);
console.log(
  "%c Thank you, have a nice day. ",
  "color:black; font-size:14px; background:white"
);

// Back to top Btn
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

const backToTop = document.querySelector(".back-button__btn");

backToTop.addEventListener("click", () => {
  scrollIntoView(".header");
});

// Menu button toggle
const toggleMenu = document.querySelector(".tg-active");

const navbarToggleBtn = document.querySelector(".toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  toggleMenu.classList.toggle("toggle-active");
});
