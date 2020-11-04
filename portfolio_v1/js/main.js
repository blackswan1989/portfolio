'use strict';

console.log("Hello, I'm Front-end Developer HJ")


// 1. navbar transparent when it is on the top
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


// 2. Handle scrolling when click on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link || target.parentNode.dataset.link; // 클릭한 data-link를 link로 정의
  if(link == null) {
    return;
  }
  navbarMenu.classList.remove("toggle-active")
  // console.log(event.target.dataset.link);
  scrollIntoView(link);
});


// 3. menu button toggle
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("toggle-active");
})


// 4. Handle click on "contact me" button on home
const homeContactMeBtn = document.querySelector(".home__contact");

homeContactMeBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
})


// 5. Make home slowly fade to trasnparent as the window scrolls down.
const homeOpacity = document.querySelector(".home__container");
const homeHeigt = homeOpacity.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  // 1 - ( scrollY / 1080 ) 
  // console.log(1 - window.scrollY / homeHeigt);
  homeOpacity.style.opacity = 3 - window.scrollY / homeHeigt;
})


// 6. Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up")

document.addEventListener("scroll", () => {
  if(window.scrollY > homeHeigt) {
    arrowUp.classList.add("display");
  } else {
    arrowUp.classList.remove("display");
  }
})

arrowUp.addEventListener("click", ()=> {
  scrollIntoView("#home");
})


// 7. Project categories filter & projects
const workCategories = document.querySelector(".work__categories");
const workProjects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project"); // 각각의 프로젝트들을 배열로 받아온다.

workCategories.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if(filter == null) {
    return;
  }
  // console.log(filter);

  // 카테고리 버튼 클릭시 select가 변경되도록.
  const active = document.querySelector(".categories__btn.selected");
  active.classList.remove("selected");
  const target = event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("selected");


  // 카테고리 버튼 클릭시 projects에 에니메이션 발생되도록.
  workProjects.classList.add("ani-out");
  setTimeout(() => {
    workProjects.classList.remove("ani-out");
  }, 300)

  projects.forEach((project) => {
    // console.log(project.dataset.type);
    //filter가 전부 다(*) 이거나 filter가 dataType과 매치가 되면 필터링 된 것을 보여주어야 하므로 숨겨야될것들을 remove해주고, 매치되지 않으면(else) 보여주지 말아야 하므로 숨겨야될것들을 add해준다.
    if(filter === '*' || filter === project.dataset.type) {
      project.classList.remove("hide")
    } else {
      project.classList.add("hide")
    }
  })
});

