
//Game
class Game {
    constructor() {
        this.afficherNomJoueur();
        this.couleurJoueur();
    }
    
    afficherNomJoueur() {
        const valeurNomJoueur = document.form01.nom.value;
        const resultatNomJoueur = document.querySelector(".nomJoueur")
        resultatNomJoueur.innerHTML = `<span>${valeurNomJoueur}</span>`;
    }

    couleurJoueur() {
        const listCouleurJoueur = document.form01.Peau;
        let couleurJoueur = "";
        couleurJoueur = listCouleurJoueur.value;
        console.log(couleurJoueur);
        return couleurJoueur;
        
    }
}
const game = new Game();


//INTERACTION----------------------------------------------------------


//Jouer
const btnJouer = document.querySelector("#jouer");
const btnRejouer = document.querySelector(".btnRejouer");

btnJouer.addEventListener("click", () => {

//Nom du Joueur
    
//Couleur Joueur


//Choix Joueur
let choixJoueur = document.form01.action.selectedIndex;
let jeuJoueur = "";

/*if(couleurJoueur == 0 && choixJoueur == 0) {
    jeuJoueur = "✊";
}
else if(couleurJoueur == 0 && choixJoueur == 1) {
    jeuJoueur = "✋";
}
else if(couleurJoueur == 0 && choixJoueur == 2) {
    jeuJoueur = "✌️";
}
else if(couleurJoueur == 1 && choixJoueur == 0) {
    jeuJoueur = "✊🏻";
}
else if(couleurJoueur == 1 && choixJoueur == 1) {
    jeuJoueur = "✋🏻";
}
else if(couleurJoueur == 1 && choixJoueur == 2) {
    jeuJoueur = "✌🏻";
}
else if(couleurJoueur == 2 && choixJoueur == 0) {
    jeuJoueur = "✊🏽";
}
else if(couleurJoueur == 2 && choixJoueur == 1) {
    jeuJoueur = "✋🏽";
}
else if(couleurJoueur == 2 && choixJoueur == 2) {
    jeuJoueur = "✌🏽";
}
else if(couleurJoueur == 3 && choixJoueur == 0) {
    jeuJoueur = "✊🏿";
}
else if(couleurJoueur == 3 && choixJoueur == 1) {
    jeuJoueur = "✋🏿";
}
else {
    jeuJoueur = "✌🏿";
}*/

//Résultat Joueur
const actionJoueur = document.querySelector(".choixJoueur");
actionJoueur.innerHTML = `<span>${jeuJoueur}</span>`;

//Disparaître Formulaire
    document.querySelector(".boxFormulaire").classList.add("none");
    document.querySelector(".fondFormulaire").classList.add("none");

    new Game();
})


//Rejouer
btnRejouer.addEventListener("click", () =>{
    document.querySelector(".boxFormulaire").classList.remove("none");
    document.querySelector(".fondFormulaire").classList.remove("none");
})