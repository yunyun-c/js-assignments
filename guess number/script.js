let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "🚫 No number!";
    displayMessage("🚫 No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number! 🎉");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#ce9dd9";
    document.querySelector(".number").style.borderRadius = "35rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🔥 Too high" : "☃️ Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("⚡ You lost the game...");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "rgb(35, 16, 55)";
  document.querySelector(".number").style.borderRadius = "0rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
