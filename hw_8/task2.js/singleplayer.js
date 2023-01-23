"use strict";

const playButton = document.querySelector(".singleplayer");

playButton.addEventListener("click", playGame);

function playGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let userNumber = +prompt(
    "A number from 1 to 100 was determined. Let's guess it"
  );

  while (isNaN(userNumber)) {
    userNumber = +prompt("Enter the number");
  }

  while (userNumber !== randomNumber) {
    if (userNumber === 0) return;

    if (isNaN(userNumber)) {
      userNumber = +prompt("Enter the number");
    }

    if (userNumber > randomNumber) {
      alert("The hidden number is less");
      userNumber = +prompt("Try once more");
    }

    if (userNumber < randomNumber) {
      alert("The hidden number is greater");
      userNumber = +prompt("Try once more");
    }
  }
  if (userNumber === randomNumber) {
    alert(`Congratulations, you guessed the number ${randomNumber}`);
  }
}
