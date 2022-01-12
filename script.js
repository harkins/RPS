const computerSelectionDisplay = document.getElementById("computerSelection");
const playerSelectionDisplay = document.getElementById("playerSelection");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerScoreDisplay = document.getElementById("computerScore");
const playerScoreDisplay = document.getElementById("playerScore");
const messageDisplay = document.getElementById("message");
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
let result;
let message;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerSelectionDisplay.innerHTML = playerSelection;
    computerPlay();
    playRound();
    game();
  })
);

function computerPlay() {
  let random = Math.random();
  if (random <= 0.34) {
    computerSelection = "rock";
  } else if (random <= 0.67) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  computerSelectionDisplay.innerHTML = computerSelection;
}

function playRound() {
  if (playerSelection === computerSelection) {
    result = "It is a tie!";
  }
  //checking rock
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "You lost the round!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result = "You won the round!";
  }
  //checking paper
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result = "You won the round!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "You lost the round!";
  }
  //checking scissors
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result = "You lost the round!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result = "You won the round!";
  }
  resultDisplay.innerHTML = result;
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
}

function game() {
  for (let roundsPlayed = 0; roundsPlayed < 1000; roundsPlayed++) {
    if (playerScore > computerScore && playerScore === 5) {
      message =
        'You won the game! Congratulations! <br><br><button onclick="restartGame()">Click here to play again</button><br><br>';
      endGame();
    } else if (playerScore < computerScore && computerScore === 5) {
      message =
        'You lost the game! Sorry! <br><br><button onclick="restartGame()">Click here to play again</button><br><br>';
      endGame();
    } else {
      message = " ";
    }
    messageDisplay.innerHTML = message;
  }
}

function endGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function restartGame() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  playerSelectionDisplay.innerHTML = "";
  computerSelectionDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
  messageDisplay.innerHTML = " ";
}
