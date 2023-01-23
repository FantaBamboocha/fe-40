"use strict";

const multiPlayerButton = document.querySelector(".multiplayer");
const multiPlayerContainer = document.querySelector(".multiplayer-container");

const multiPlayerButtonStart = document.createElement("button");
multiPlayerButtonStart.textContent = "Let's start";
multiPlayerButtonStart.classList.add("play-сontainer__button");

multiPlayerButton.addEventListener("click", selectPlayers);
multiPlayerButtonStart.addEventListener("click", startMultiplayer);

// Create difficulty options and add event listener
const difficultyOptions = document.querySelector(".difficulty-options");

const hardLevelButton = document.createElement("button");
hardLevelButton.textContent = "HARD";
hardLevelButton.classList.add("play-сontainer__button", "hard");

const easyLevelButton = document.createElement("button");
easyLevelButton.textContent = "EASY";
easyLevelButton.classList.add("play-сontainer__button", "easy");

difficultyOptions.addEventListener("click", (event) => {
  if (event.target.className === "play-сontainer__button easy") {
    userList.forEach((user) => {
      user.count = 30;
    });
  }

  if (event.target.className === "play-сontainer__button hard") {
    userList.forEach((user) => {
      user.count = 8;
    });
  }

  difficultyOptions.innerHTML = "";
  multiPlayerContainer.append(multiPlayerButtonStart);
});

// Сreate the ability to choose the number of players
const userList = [];

function selectPlayers() {
  let number = +prompt("Enter the number of players");

  while (isNaN(number)) {
    number = +prompt("Enter the number of players");
  }

  for (let i = 1; i <= number; i++) {
    let playerName = prompt(`Enter the name of player ${i}`);
    if (!playerName) return;

    userList.push({ playerName });
  }
  alert("Select difficulty level");
  difficultyOptions.append(easyLevelButton);
  difficultyOptions.append(hardLevelButton);
}

// Multiplayer

function startMultiplayer() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  while (userList.length > 0) {
    for (const user of userList) {
      let userNumber = +prompt(
        `${user.playerName}, guess the hidden number, ${user.count} tries left`
      );

      if (userNumber === 0) return;

      if (userNumber > randomNumber) {
        alert("The hidden number is less");
        user.count -= 1;
      }
      if (userNumber < randomNumber) {
        alert("The hidden number is greater");
        user.count -= 1;
      }
      if (user.count <= 0) {
        alert(`${user.playerName}, your tries are over`);
        userList.shift();
      }
      if (userNumber === randomNumber) {
        alert(
          `Congratulations, ${user.playerName} guessed the number ${randomNumber}`
        );
        userList.length = 0;
      }
    }
  }
  userList.length = 0;
  multiPlayerContainer.innerHTML = "";
  multiPlayerButtonStart.remove();
  return;
}
