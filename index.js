let player = {
  name: 'Christopher',
  chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''

let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard > 10) {
    return 10
  } else if (randomCard < 2) {
    return 11
  } else {
    return randomCard
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
  if (sum <= 20) {
    message = 'Hit?'
  } else if (sum === 21) {
    message = 'Blackjack!'
    hasBlackJack = true
  } else {
    message = 'Busted...'
    isAlive = false
  }

  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum
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
