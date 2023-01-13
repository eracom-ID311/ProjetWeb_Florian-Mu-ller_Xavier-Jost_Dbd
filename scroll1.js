(function () {
  var fig = document.querySelectorAll("figure")[0];
  var fig2 = document.querySelectorAll(".Scroll2")[0];
  var fig3 = document.querySelectorAll(".Scroll3")[0];

  function effet() {
    var posScroll = this.pageYOffset;
    if (posScroll >= 500) {
      fig.style.right = 0;
      fig.style.opacity = 1;
    }

    if (posScroll >= 1200) {
      fig2.style.left = 0;
      fig2.style.opacity = 1;
    }

    if (posScroll >= 2200) {
      fig3.style.right = 0;
      fig3.style.opacity = 1;
    }
  }
  window.addEventListener("scroll", effet);
})();
