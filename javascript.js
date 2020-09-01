
const btnJouer = document.querySelector("#jouer");

btnJouer.addEventListener("click", () => {
    document.querySelector(".boxFormulaire").classList.add("none");
    document.querySelector(".fondFormulaire").classList.add("none");
})