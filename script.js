let cardsNumber = null

function selectGame() {
    cardsNumber = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")

    while (cardsNumber > 14 || cardsNumber < 4 || cardsNumber%2 !== 0) {
        cardsNumber = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")
    }
}

selectGame()

function comparador() { 
	return Math.random() - 0.5; 
}

function displayCards() {
    const gifs = document.querySelectorAll(".gifs img")
    let main = document.querySelector("main")
    let card = document.querySelector(".card")
    let cardBack = document.querySelector(".card-back")

    main.innerHTML = ""

    for (let i = 0; i < cardsNumber/2; i++) {
        cardBack.innerHTML = ""
        cardBack.appendChild(gifs[i])
        main.appendChild(card.cloneNode(true))
        main.appendChild(card.cloneNode(true))
    }

    let newMain = document.querySelectorAll(".card")
    newMain = Array.from(newMain)
    newMain.sort(comparador)

    main.innerHTML = ""

    for (let j = 0; j < cardsNumber; j++) {
        main.appendChild(newMain[j].cloneNode(true))
    }
}

displayCards()

let flipedCards = []

function flipCard(card) {
    if (!card.classList.contains("flip")) {
        flipedCards.push(card)
        card.classList.add("flip")
    } else { }

    if (flipedCards.length%2 === 0) {
        compareCards()
    } else { }
}

function compareCards() {
    const lastFlipedCard = flipedCards[flipedCards.length-1]
    const penultFlipedCard = flipedCards[flipedCards.length-2]

    if (!lastFlipedCard.isEqualNode(penultFlipedCard)) {
        setTimeout(function () {
            lastFlipedCard.classList.remove("flip")
            penultFlipedCard.classList.remove("flip")
        }, 1000)
    }
}