
/*const listChoix = [
    ["✊", "✋", "✌️"],
    ["✊🏻", "✋🏻", "✌🏻"],
    ["✊🏽", "✋🏽", "✌🏽"],
    ["✊🏿", "✋🏿", "✌🏿"],
];*/

//Game
class Game {
    constructor() {
        this.listChoix = [
            ["✊", "✋", "✌️"],
            ["✊🏻", "✋🏻", "✌🏻"],
            ["✊🏽", "✋🏽", "✌🏽"],
            ["✊🏿", "✋🏿", "✌🏿"],
        ];

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
        this.choixMain = document.form01.action.selectedIndex;
        //Résultats Joueur
        const couleurJoueur = this.listChoix[couleurPeau];
        const actionJoueur = couleurJoueur[this.choixMain];
        //Affichage Joueur
        const resultatJoueur = document.querySelector(".choixJoueur");
        resultatJoueur.innerHTML = `<span>${actionJoueur}</span>`;
    }

    afficherActionCpu() {
        //Couleur CPU
        const couleurRandom = Math.round( Math.random() * 3 );
        const couleurCpu = this.listChoix[couleurRandom];

        //Action CPU
        this.actionRandom = Math.round( Math.random() * 2 );
        const actionCpu = couleurCpu[this.actionRandom];

        //Affichage CPU
        const resultatCpu = document.querySelector(".choixCpu");
        resultatCpu.innerHTML = `<span>${actionCpu}</span>`;
    }

    resultatMatch() {

        const halfJoueur = document.querySelector(".joueur");
        const halfCpu = document.querySelector(".cpu");
        const resultat = document.querySelector(".resultat");

        if(this.choixMain == this.actionRandom) {
            halfJoueur.style.setProperty("--fondJoueur", "#3F88C5");
            halfCpu.style.setProperty("--fondCpu", "#3F88C5");
            resultat.innerHTML = "<span>Égalité</span>";
        }
        else if(
            this.choixMain == 0 && this.actionRandom == 1 ||
            this.choixMain == 1 && this.actionRandom == 2 ||
            this.choixMain == 2 && this.actionRandom == 0 ) {
                halfJoueur.style.setProperty("--fondJoueur", "#D16D82");
                halfCpu.style.setProperty("--fondCpu", "#7FD8BE");
                resultat.innerHTML = "<span>Défaite</span>";
            }
        else {
            halfJoueur.style.setProperty("--fondJoueur", "#7FD8BE");
            halfCpu.style.setProperty("--fondCpu", " #D16D82");
            resultat.innerHTML = "<span>Victoire</span>";
        }
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