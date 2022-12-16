const Personnage = document.getElementsByClassName(".Personnage");

var scrolled;
var val;

window.addEventListener("scroll", function () {
  scrolled = window.pageYOffset;

  val = scrolled * 0.5;

  if (val >= 230) {
    Personnage.style.opacity = 0;
  } else {
    Personnage.style.opacity = 1;
  }
});
