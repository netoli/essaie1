/**
 * @description L'ajout des fonctions permettant d'empêcher le défilment du menu
 * de navigation quand le bouton burger est cocher et l'ajout d'animation sur l'écouteur
 * d'événement 'scroll'
 * @author Vernet Olivier
 */

// Déclaration et initialisation des variables
let leBoutonBurger = document.querySelector("#bouton-menu-burger");
let leBody = document.querySelector("body");
let lesMenus = document.querySelectorAll(".navigation .menu");

// Ajout des écouteurs d'événement
document.addEventListener("scroll", animationDefilement);
leBoutonBurger.addEventListener("click", empecherLeDefilement);

// Déclaration des fonctions
/**
 * Fonction gererLeDefilement ()
 * @description Cette fonction permet d'empêcher le défilement 
 * de la page quand le bouton burger est coché
 * @param void
 * @returns void
 */
function empecherLeDefilement(event) {
	if(leBoutonBurger.checked == true){ //Ici, l'événement est de type booléen; s'il est vrai, cela veut dire que le menu est affiché, donc la position de la zone d'affichage de la page reste figer
		document.body.style.position = 'fixed';
	}else{
		document.body.style.position = 'static';
	}
}//fin de la fonction


/**
 * Fonction fermerMenu ()
 * @description Cette fonction permet de fermer le menu de navigation du bouton burger
 * quand on clique sur l'un des menus de navigation
 * @param void
 * @returns void
 */
for(let unMenu of lesMenus) {
    unMenu.addEventListener('click', fermerMenu);

    function fermerMenu() {
        if(leBoutonBurger.checked == true) { //Ici, l'événement est de type booléen; s'il est vrai, cela veut dire que le menu est ouvert et une clique sur un des menus permet de le fermer
            leBoutonBurger.click();
        }
    }
}//fin de la fonction


/**
 * Fonction animationDefilement ()
 * @description Cette fonction permet de faire apparaitre des éléments
 * lors du défilement en fonction de la hauteur d'une section
 * @param void
 * @returns void
 */
function animationDefilement(){
    let hauteurViewport = window.innerHeight; // Permet de récupérer la hauteur de la zone d'affichage de la page web

    let lesFormes = document.querySelectorAll(".forme");
    console.log(lesFormes);

    for (let uneForme of lesFormes){
        let infoForme = uneForme.getBoundingClientRect(); //Permet de retourner un objet en fonction de sa taille et de sa position relative par rapport à la zone d'affichage.
        let basForme = infoForme.bottom; // Ici, on récupère les coordonnées de la base des formes

        if(basForme <= hauteurViewport){
            uneForme.style.opacity = "1";
            uneForme.style.translate = "0 0";
        } else {
            uneForme.style.opacity = "0";
            uneForme.style.translate = "-100% 0";
        }
    }
}//fin de la fonction
