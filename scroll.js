var scrolled;
var val;

window.addEventListener("scroll", function () {
scrolled = window.pageYOffset;

val = scrolled * 0.5;

if (val >= 230) {
