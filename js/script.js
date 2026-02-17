// on définit deux fonctions avant de commencer utilisée à la fin 

function removeLoadingScreen() {
  //document.getgetElementsByClassName = all elements with class
  // Prend le loader et le stocke dans une variable
  const loader = document.getElementsByClassName("loader")[0];
  // Prend la bannière et la stocke dans une variable
  const title = document.getElementsByClassName("title")[0];
  // Prend le body et le stocke dans une variable
  const body = document.body;

  // cacher le loader en  lui ajoutant 'hidden'
  loader.classList.add("hidden");
  // rendre le body = flex box.
  body.classList.add("flex");
  // enelver height100 class qui met la hauteur à 100%.
  title.classList.remove("height100");
}


// début du script.

window.onload = function () {
  // prend tous les éléments avec la classe 'main-item' et les stocke dans la variable constante 'main'
  const main = document.getElementsByClassName("main-item");
  // prend tous les éléments avec la classe 'secondaire' et les stocke dans la variable constante 'secondaire'
  const secondary = document.getElementsByClassName("secondary");
  const display = document.getElementsByClassName("Bottom")

  // menu déroulant
  for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("mouseover", function () {
      // qd la souris passe sur une icone de continent ensuite

      // montrer le sous-menu (nom des villes)

      secondary[i].classList.remove("hidden");
      secondary[i].classList.add("show");
    });
    main[i].addEventListener("mouseout", function () {
      // qd la souris quitte une icone de continent ensuite
      
      // cacher le nom des villes
      secondary[i].classList.remove("show");
      secondary[i].classList.add("hidden");
    });
  }


  /* Après 0,5 seconde de chargement de la page, enlever l'écran de chargement*/
  setTimeout(removeLoadingScreen, 500);

};
