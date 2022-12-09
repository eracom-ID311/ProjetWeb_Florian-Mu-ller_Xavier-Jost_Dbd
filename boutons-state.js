const Boutons = document.querySelector(".Boutons");

var boutonLogo;

squareColor = " ";

square.addEventListener("click", function () {
  console.log("POISSON LOL");

  if (squareColor == " ") {
    square.classList.add("noir");
    squareColor = "noir";
  } else if (squareColor == "noir") {
    square.classList.add("rouge");
    square.classList.remove("noir");
    squareColor = "rouge";
  } else if (squareColor == "rouge") {
    square.classList.remove("rouge");
    squareColor = " ";
  }
});
