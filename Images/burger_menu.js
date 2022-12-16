const menu = document.querySelector(".toggle-nav");
const main = document.querySelector("main");

const burgerMenu = document.querySelector("#menu-burger");

menu.addEventListener("click", function () {
  main.classList.toggle("open");
  if (main.classList.contains("open")) {
    //menu.innerHTML = '<img src="assets/close.svg">Close';
    burgerMenu.setAttribute("class", "clicked");
  } else {
    //menu.innerHTML = '<img src="assets/menu.svg">Menu';
    burgerMenu.removeAttribute("class");
  }
});

burgerMenu.addEventListener("click", function () {
  main.classList.toggle("open");
  if (main.classList.contains("open")) {
    burgerMenu.setAttribute("class", "clicked");
  } else {
    burgerMenu.removeAttribute("class");
  }
});
