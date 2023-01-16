const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const wonlostElemtnt = document.createElement("p");

let totalAttempt = 5;
let attempt = 0;
let totalWons = 0;
let totalLosts = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  attempt++;
  if (attempt == 5) {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempt < 6) {
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining attempts: ${
      totalAttempt - attempt
    }`;
  }

  guessingNumber.value = "";
});

function checkResult(guessNumber) {
  const randomNumber = getRandomNumber(5);

  if (guessNumber === randomNumber) {
    resultText.innerHTML = `You have won`;
    totalWons++;
  } else {
    resultText.innerHTML = ` You have lost; random number was: ${randomNumber}`;
    totalLosts++;
  }

  wonlostElemtnt.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
  wonlostElemtnt.classList.add("large-text");
  cardBody.appendChild(wonlostElemtnt);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
