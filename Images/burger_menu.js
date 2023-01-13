//le code doit faire environ 6 lignes
/* SéLéCTION DES éLéMENTS HTML */
const main = document.querySelector("main");
const menu = document.querySelector(".toggle-nav");

/* GESTIONNAIRE D'éVéNEMENT*/
menu.addEventListener("click", function () {
  /*Faire une requête, ici balancer l'état du bouton. (ça marche déja le menu avec ça)
  (Ajouter ou enlever la classe "Open")*/
  main.classList.toggle("open");
  console.log("AMOGUS");
  //Le test
  // Si on clic, est-ce qu'il y a la classe "Open" dans la balise "main"
  // si oui, le bouton "Close" apparaît ainsi qu'une croix :
  if (main.classList.contains("open")) {
    menu.innerHTML = '<img src="assets/close.svg">Close';
    // Si non, le logo du "menu" s'affiche, et le menu burger apparaît :
  } else {
    menu.innerHTML = '<img src="assets/menu.svg">Menu';
  }
});
