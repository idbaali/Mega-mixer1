const listeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony", "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];

const sizerBot = document.getElementById("sizer");
const selectList = document.getElementById("numberSelect");
const maBouton = document.getElementById("boutonInitialiser");
const bienPlacer = document.getElementById("boutonPlacer");

listeApprenants.forEach((apprenant) => {
    const newDivApp = document.createElement('div');
    newDivApp.classList.add("flipcard");
    newDivApp.classList.add("h");
    newDivApp.innerHTML = `<div class="front interrogation">
    ?
</div>
<div class="back smiley" style='background-image: url("images/smiley/smiley-10.png");'>
    <div class="prenom">Prénom</div>
    <div class="nom">Nom</div>
</div>`;
    sizerBot.appendChild(newDivApp);
})

selectList.addEventListener("change", (event) => {
    // alert(event.target.value);
    sizerBot.style.width = event.target.value + "px";
});

bienPlacer.addEventListener("click", (Event) => {
    const tableauMelange = _.shuffle(listeApprenants); // suffle c'est pour melanger les tableaux
    //console.log(tableauMelange);
    allCards = document.querySelectorAll(".flipcard");
    allCards.forEach((card, index) => {
        card.classList.toggle('flip');
        card.querySelector(".prenom").textContent = tableauMelange[index].split(" ")[1];
        card.querySelector(".nom").textContent = tableauMelange[index].split(" ")[0];
    })
    selectList.disabled =true;
    bienPlacer.disabled = true;
    maBouton.disabled = false;
});

maBouton.addEventListener("click", (Event) => {
    allCards = document.querySelectorAll(".flipcard");
    allCards.forEach((card, index) => {
        card.classList.toggle('flip');
    })
    selectList.disabled =false;
    bienPlacer.disabled = false;
    maBouton.disabled = true;
})

