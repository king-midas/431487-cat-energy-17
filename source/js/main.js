var showButton = document.querySelector(".js-main-nav__toggle");

var navMenu = document.querySelector(".main-nav__wrapper");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  navMenu.classList.add("js-main-nav--open ");
});
