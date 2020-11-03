'use strict';

console.log("Hello, I'm Front-end Developer HJ")


// navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeigt = navbar.getBoundingClientRect().height;

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}

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
  scrollIntoView(link);
});


// Handle click on "contact me" button on home

const homeContactMeBtn = document.querySelector(".home__contact");

homeContactMeBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
})


// Make home slowly fade to trasnparent as the window scrolls down.

const homeOpacity = document.querySelector(".home__container");
const homeHeigt = homeOpacity.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  // 1 - ( scrollY / 1080 ) 
  // console.log(1 - window.scrollY / homeHeigt);
  homeOpacity.style.opacity = 1.1 - window.scrollY / homeHeigt;
})


// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up")

document.addEventListener("scroll", () => {
  if(window.scrollY > homeHeigt) {
    arrowUp.classList.add("display");
    arrowUp.addEventListener("click", ()=> {
      scrollIntoView("#home");
    })
  } else {
    arrowUp.classList.remove("display");
  }
})
