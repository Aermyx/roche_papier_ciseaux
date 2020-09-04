
//Game
class Game {
    constructor() {
        this.afficherNomJoueur();
        this.afficherActionJoueur();
        this.afficherActionCpu();
    }
    
    afficherNomJoueur() {
        const valeurNomJoueur = document.form01.nom.value;
        const resultatNomJoueur = document.querySelector(".nomJoueur")
        resultatNomJoueur.innerHTML = `<span>${valeurNomJoueur}</span>`;
    }

    afficherActionJoueur() {
        //Couleur
        const listCouleurPeau = document.form01.Peau;
        const couleurPeau = listCouleurPeau.value;
        //Action
        const choixMain = document.form01.action.selectedIndex;
        //Résultats
        const listChoix = [
            ["✊", "✋", "✌️"],
            ["✊🏻", "✋🏻", "✌🏻"],
            ["✊🏽", "✋🏽", "✌🏽"],
            ["✊🏿", "✋🏿", "✌🏿"],
        ];
        const couleurJoueur = listChoix[couleurPeau];
        const actionJoueur = couleurJoueur[choixMain];
        //Affichage
        const resultatJoueur = document.querySelector(".choixJoueur");
        resultatJoueur.innerHTML = `<span>${actionJoueur}</span>`;
    }

    afficherActionCpu() {
        const couleurCpu = listChoix[indexRandom];
        console.log(couleurCpu)
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