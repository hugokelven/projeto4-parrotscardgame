let numeroDeCartas = null

function selecionarJogo() {
    numeroDeCartas = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")

    while (numeroDeCartas > 14 || numeroDeCartas < 4 || numeroDeCartas%2 !== 0) {
        numeroDeCartas = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")
    }
}

selecionarJogo()

function comparador() { 
	return Math.random() - 0.5; 
}

function gerarCartas() {
    const gifs = document.querySelectorAll(".gifs img")
    let main = document.querySelector("main")
    let card = document.querySelector(".card")
    let cardBack = document.querySelector(".card-back")

    main.innerHTML = ""

    let cards = []

    for (let i = 0; i < numeroDeCartas/2; i++) {
        cardBack.innerHTML = ""
        cardBack.appendChild(gifs[i])
        main.appendChild(card.cloneNode(true))
        main.appendChild(card.cloneNode(true))
    }

    let newMain = document.querySelectorAll(".card")
    newMain = Array.from(newMain)
    newMain.sort(comparador)

    main.innerHTML = ""

    for (let j = 0; j < numeroDeCartas; j++) {
        main.appendChild(newMain[j].cloneNode(true))
    }
}

gerarCartas()