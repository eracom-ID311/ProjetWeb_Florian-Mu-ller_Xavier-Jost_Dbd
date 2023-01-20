const boutons = document.querySelector(".Boutons_1_Survive");

var changeImage;

changeImage = "";

console.log("Image");

boutons.addEventListener("click", function () {
  if (changeImage == "Boutons_1_Survive") {
    boutons.classList.add("Boutons_2_Survive");
    changeImage = "Boutons_2_Survive";
  } else if (changeImage == "Boutons_2_Survive") {
    boutons.classList.add("Boutons_1_Survive");
    boutons.classList.remove("Boutons_2_Survive");
    changeImage = "Boutons_1_Survive";
  }
});
