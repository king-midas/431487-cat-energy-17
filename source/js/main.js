var showButton = document.querySelector(".js-main-nav__toggle");

var navMenu = document.querySelector(".main-nav__wrapper");

showButton.addEventListener("click", function(evt){
  evt.preventDefault();
  navMenu.classList.toggle("js-main-nav--open");
});
