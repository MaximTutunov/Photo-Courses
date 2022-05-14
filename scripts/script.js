const arrowBtn = document.querySelector(".header__logo");

arrowBtn.addEventListener("click", function (evt) {
  arrowBtn.classList.toggle("header__logo_active");
});

const headerBtn = document.querySelector(".header__hamburger-button");

const menuIcon = document.querySelector(".header__menuIcon");

const closeIcon = document.querySelector(".header__closeIcon");
const arrow = document.querySelector(".header__logo");
const menu = document.querySelector(".header__nav");

let popupCounterMobile = 0;
let popupCounterTablet = 0;

headerBtn.addEventListener("click", function (evt) {
  if (window.innerWidth > 768 && popupCounterTablet===1) {
    menuIcon.classList.toggle("header__menuIcon-hidden");
    closeIcon.classList.toggle("header__closeIcon-hidden");
    arrow.classList.toggle("header__logo-hidden");
    menu.classList.toggle("header__nav-active");
    popupCounterTablet = 0;
  }
  else if (window.innerWidth > 768) {
    menuIcon.classList.toggle("header__menuIcon-hidden");
    closeIcon.classList.toggle("header__closeIcon-hidden");
    arrow.classList.toggle("header__logo-hidden");
    menu.classList.toggle("header__nav-active");
    popupCounterTablet = 1;
    
  } 
    else {
    menuIcon.classList.toggle("header__menuIcon-hidden");
    closeIcon.classList.toggle("header__closeIcon-hidden");
    menu.classList.toggle("header__nav-active");
    popupCounterMobile = 1;
    
  }
});

window.addEventListener("resize", () => {
  if (popupCounterMobile === 1 && window.innerWidth > 768) {
   
    menuIcon.classList.toggle("header__menuIcon-hidden");
    closeIcon.classList.toggle("header__closeIcon-hidden");
    menu.classList.toggle("header__nav-active");
    popupCounterMobile = 0;
    
  }
});

window.addEventListener("resize", () => {
  if (
    popupCounterTablet === 1 &&
    window.innerWidth < 768
  ) { 
    
    menuIcon.classList.toggle("header__menuIcon-hidden");
    closeIcon.classList.toggle("header__closeIcon-hidden");
    arrow.classList.remove("header__logo-hidden");
    menu.classList.toggle("header__nav-active");
    popupCounterTablet = 0;
  }
});

const submitForm = document.querySelector(".footer__emailform");
const submitBtn = submitForm.querySelector(".footer__button");


submitForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  submitBtn.textContent ="Спасибо!";
  submitBtn.classList.add("footer__button_success")
  console.log(submitBtn);
});

