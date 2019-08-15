var showButton = document.querySelector(".js-main-nav__toggle");

var navMenu = document.querySelector(".main-nav__wrapper");

var burgerPicClose = document.querySelector(".main-nav__burger-icon--closed");

var burgerPicBurger = document.querySelector(".main-nav__burger-icon--open");

navMenu.classList.remove("js-main-nav__wrapper--opened");

showButton.addEventListener("click", function(evt){
  evt.preventDefault();
  navMenu.classList.toggle("js-main-nav--open");
  burgerPicClose.classList.toggle("js-main-nav__icon-show");
  burgerPicBurger.classList.toggle("js-main-nav__icon-hide");
});
