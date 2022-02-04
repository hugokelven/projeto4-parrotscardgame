let numberOfCards = null

// Select how many cards the player wants to play
function selectGame() {

    while (numberOfCards > 14 || numberOfCards < 4 || numberOfCards%2 !== 0) {

        numberOfCards = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")

    }

}

selectGame()

function comparador() {

	return Math.random() - 0.5; 

}

// Distributes the cards on the screen
function distributesCards() {

    const gifs = document.querySelectorAll(".gifs img")
    let main = document.querySelector("main")
    let card = document.querySelector(".card")
    let cardBack = document.querySelector(".card-back")

    main.innerHTML = ""

    for (let i = 0; i < numberOfCards/2; i++) {

        cardBack.innerHTML = ""
        cardBack.appendChild(gifs[i])
        main.appendChild(card.cloneNode(true))
        main.appendChild(card.cloneNode(true))

    }

    let newMain = document.querySelectorAll(".card")
    newMain = Array.from(newMain)
    newMain.sort(comparador)

    main.innerHTML = ""

    for (let j = 0; j < numberOfCards; j++) {

        main.appendChild(newMain[j].cloneNode(true))

    }

}

distributesCards()

let flipedCards = []

let numberOfturnedDownCards = 0

let numberOfCardsUp = 0

let gameTime = 0

// Counts the player game time
const interval = setInterval(() => {

    gameTime++
    
    const counter = document.querySelector(".game-time")
    counter.innerHTML = gameTime

}, 1000)

// Flips up a card
function flipCard(card) {

    if (!card.classList.contains("flip")) {
        
        flipedCards.push(card)
        card.classList.add("flip")

    } else { }

    compareCards()
}

// Compares if the two cards are equal
function compareCards() {

    const lastFlipedCard = flipedCards[flipedCards.length-1]
    const penultFlipedCard = flipedCards[flipedCards.length-2]

    if (flipedCards.length%2 === 0) {

        setTimeout(() => {

            if (!lastFlipedCard.isEqualNode(penultFlipedCard)) {

                lastFlipedCard.classList.remove("flip")
                penultFlipedCard.classList.remove("flip")
                numberOfturnedDownCards += 2

            } else { }
    
            numberOfFlips = flipedCards.length
            numberOfCardsUp = numberOfFlips - numberOfturnedDownCards
    
            if (numberOfCardsUp === parseInt(numberOfCards)) {

                alert(`Você ganhou em ${numberOfFlips} jogadas e em ${gameTime}s!`)

                restartGame()

            } else { }
    
        }, 1000)

    } else { }

}

// Asks the player if he/she wants to play again
function restartGame () {

    while (restartGame !== "s") {

        const restartGame = prompt("Gostaria de reiniciar a partida? (s ou n)")

        if (restartGame === "s") {

            document.location.reload(true);
            break

        } else if (restartGame === "n") {

            clearInterval(interval)
            break

        } else { }

    }

}