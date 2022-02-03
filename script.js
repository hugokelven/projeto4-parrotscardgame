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
let numberOfturnedDownCards = 0

function flipCard(card) {
    if (!card.classList.contains("flip")) {
        flipedCards.push(card)
        card.classList.add("flip")
    } else { }

    compareCards()
}

function compareCards() {
    const lastFlipedCard = flipedCards[flipedCards.length-1]
    const penultFlipedCard = flipedCards[flipedCards.length-2]

    if (flipedCards.length%2 === 0) {
        setTimeout(function () {
            if (!lastFlipedCard.isEqualNode(penultFlipedCard)) {
                    lastFlipedCard.classList.remove("flip")
                    penultFlipedCard.classList.remove("flip")
                    numberOfturnedDownCards += 2
            } else { }
    
            numberOfFlips = flipedCards.length
            numberOfCardsUp = numberOfFlips - numberOfturnedDownCards
    
            if (numberOfCardsUp === parseInt(cardsNumber)) {
                alert(`Você ganhou em ${numberOfFlips} jogadas!`)
            } else { }
    
        }, 1000)
    } else { }
}