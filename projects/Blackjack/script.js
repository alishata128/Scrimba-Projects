let firstCard, secondCard, sum, hasBlackjack, isAlive, x, y, cards, ten;

cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

ten = ["Jack", "Queen", "King"];
randTen = Math.floor(Math.random() * ten.length);
cards[9] = ten[randTen];

firstCard = 10;
secondCard = 11;
hasBlackjack = false;
isAlive = true;
let message = "";

let player = {
  name: "Ali",
  chips: 145,
};

function add(m, n) {
  sum = m + n;
  return sum;
}

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");
const playerEl = document.getElementById("player-el");

function getRandCards() {
  return Math.floor(Math.random() * 13) + 1;
}

function startGame(x, y) {
  playerEl.textContent = player.name + ": " + player.chips;
  let sum = add(x, y);
  cardEl.textContent = "Cards: " + x + ", " + y;
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "You 've got Blackjack! 🥳";
    hasBlackjack = true;
  } else {
    //if (sum > 21)
    message = "You 're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  /* let randCardGroup = [firstCard, secondCard];
  let card = Math.floor(Math.random() * 12);

  let randCard = Math.floor(Math.random() * randCardGroup.length);

  startGame(card, randCardGroup[randCard]);
  console.log(
    "the card is: ",
    card,
    " | ",
    "the random card is: ",
    randCardGroup[randCard]
  );

  */
  let newRandCard = getRandCards();
  return newRandCard;
}

console.log(message);
