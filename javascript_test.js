
const listChoix = [
    ["✊", "✋", "✌️"],
    ["✊🏻", "✋🏻", "✌🏻"],
    ["✊🏽", "✋🏽", "✌🏽"],
    ["✊🏿", "✋🏿", "✌🏿"],
];

//Game
class Game {
    constructor() {
        this.afficherNomJoueur();
        this.afficherActionJoueur();
        this.afficherActionCpu();
        this.resultatMatch();
    }
    
    afficherNomJoueur() {
        const valeurNomJoueur = document.form01.nom.value;
        const resultatNomJoueur = document.querySelector(".nomJoueur")
        resultatNomJoueur.innerHTML = `<span>${valeurNomJoueur}</span>`;
    }

    afficherActionJoueur() {
        //Couleur Joueur
        const listCouleurPeau = document.form01.Peau;
        const couleurPeau = listCouleurPeau.value;
        //Action Joueur
        const choixMain = document.form01.action.selectedIndex;
        //Résultats Joueur
        const couleurJoueur = listChoix[couleurPeau];
        const actionJoueur = couleurJoueur[choixMain];
        //Affichage Joueur
        const resultatJoueur = document.querySelector(".choixJoueur");
        resultatJoueur.innerHTML = `<span>${actionJoueur}</span>`;
    }

    afficherActionCpu() {
        //Couleur CPU
        const couleurRandom = Math.round( Math.random() * 3 );
        const couleurCpu = listChoix[couleurRandom];

        //Action CPU
        const actionRandom = Math.round( Math.random() * 2 );
        const actionCpu = couleurCpu[actionRandom];

        //Affichage CPU
        const resultatCpu = document.querySelector(".choixCpu");
        resultatCpu.innerHTML = `<span>${actionCpu}</span>`;
        return actionRandom;
    }
}


//INTERACTION----------------------------------------------------------


//Jouer
const btnJouer = document.querySelector(".jouer");
const btnRejouer = document.querySelector(".btnRejouer");

btnJouer.addEventListener("click", () => {

//Disparaître Formulaire
    document.querySelector(".boxFormulaire").classList.add("none");
    document.querySelector(".fondFormulaire").classList.add("none");

    const game = new Game();
})


//Rejouer
btnRejouer.addEventListener("click", () =>{
    document.querySelector(".boxFormulaire").classList.remove("none");
    document.querySelector(".fondFormulaire").classList.remove("none");
})