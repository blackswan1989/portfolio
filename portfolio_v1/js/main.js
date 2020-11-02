'use strict';

console.log("Hello, I'm Front-end Developer HJ")


// navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeigt = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(`navbar height : ${navbarHeigt}`);
  if(window.scrollY > navbarHeigt) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling when click on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link; // 클릭한 data-link를 link로 정의
  if(link == null) {
    return;
  }
  console.log(event.target.dataset.link);

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
});

