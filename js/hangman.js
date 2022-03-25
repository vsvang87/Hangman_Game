const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("wrong-letters");

const figureParts = document.querySelectorAll("figure-part");

//Words to solve for game
const words = [
  "Moses",
  "Elijah",
  "David",
  "Samson",
  "Peter",
  "Mark",
  "Luke",
  "John",
  "James",
  "Abraham",
  "Esau",
  "Jacob",
  "Solomon",
];

//generate random word from array
let selectedWord = words[Math.floor(Math.random() * words.length)];

//guess correct letters
const correctLetters = ["a", "J", "m"];
//guess wrong letters
const wrongLetters = [];

//show hidden word
function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) => `
            <span class="letter">${
              correctLetters.includes(letter) ? letter : ""
            }</span>`
    )
    .join("")}`;

  const innerWord = wordEl.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "You Won!";
    popup.style.display = "flex";
  }
}
