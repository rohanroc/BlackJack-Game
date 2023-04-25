let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false


function getRandomCard() {
    let randomNo = Math.random() * 13
    let finalNo = Math.floor(randomNo) + 1
    if (finalNo > 10) {
        return 10
    }
    else if (finalNo === 1) {
        return 11
    }
    else {
        return finalNo
    }
}


// 1. Declare a variable called message and assign its value to an empty string
// 2. reassign the message variable to the string we're logging out

let message = ""

// 1. store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

//  store the sum-el paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

//  store the cards-el paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    console.log("clicked")
    if (sum <= 20) {
        message = "Do you want to draw a new caard? :)"
    }
    else if (sum === 21) {
        message = "Wohoo! you've got Blackjack! :>>"
        hasBlackJack = true
    }
    else {
        message = "you're out of the game! :<<"
        isAlive = false
    }
    // 2. display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("click")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

