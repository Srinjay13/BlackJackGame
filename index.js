let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

function playforblackjack() {
    var audio = new Audio('K3RTHA7-game-win-horns.mp3');
    audio.play();
  }

function playforloosing() {
    var audio = new Audio('mixkit-player-losing-or-failing-2042.wav');
    audio.play();
  }

function applause(){
    var audio = new Audio('mixkit-cheering-crowd-loud-whistle-610.wav');
    audio.play();
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤔"
    } else if (sum === 21) {
        message = "HURRAY ! You've got Blackjack 🏆!"
        hasBlackJack = true
        playforblackjack();
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        playforloosing();
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
applause();



