'use strict';

console.log("Hello, I'm Front-end Developer HJ")


// navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeigt = navbar.getBoundingClientRect().height

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(`navbar height : ${navbarHeigt}`);
  if(window.scrollY > navbarHeigt) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})