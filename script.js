let computerScore = 0;
let playerScore = 0;

let playerWinRound = "You won the round!";
let computerWinRound = "You lost the round!";
let draw = "It is a tie!";
let playerWins = "You won the game! Congratulations!";
let computerWins = "You lost the game! Sorry!";

function game() {
  for (let roundsPlayed = 0; roundsPlayed < 1000; roundsPlayed++) {
    playRound();
    if (playerScore > computerScore && playerScore === 5) {
      console.log(playerWins);
      //choice();
      break;
    }
    if (playerScore < computerScore && computerScore === 5) {
      console.log(computerWins);
      //choice();
      break;
    }
    let playerSelection = prompt(
      "Do you choose rock, paper, or scissors?"
    ).toLowerCase();
    const computerSelection = computerPlay();
    function computerPlay() {
      let random = Math.random();
      if (random <= 0.34) {
        return "rock";
      } else if (random <= 0.67) {
        return "paper";
      } else {
        return "scissors";
      }
    }

    console.log("Your Choice: " + playerSelection);
    console.log("Computer's Choice: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    const score =
      "Player Score: " + playerScore + " Computer Score: " + computerScore;
    console.log(score);
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return draw;
    }
    //checking rock
    if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return computerWinRound;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return playerWinRound;
    }
    //checking paper
    if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return playerWinRound;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      return computerWinRound;
    }
    //checking scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return computerWinRound;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return playerWinRound;
    }
  }
}

//let choice = prompt("Play again? Yes or no?").toLowerCase();
//    }
//    if ((choice = "yes")) {
//      resetGame();
//    }
//    if ((choice = "no")) {
//      return break;
//    }
//
//function resetGame() {
//  let computerScore = 0;
//  let playerScore = 0;
//  game();
//}

//let choice = prompt("Restart game, yes or no?").toLowerCase();
//  if (choice === "yes") {
//        return game();
//if (choice === "no") {
//        return alert("Thank you for playing!");
//      }
//        if (choice === "yes") {
//        return game();
//      }
//      if (choice === "no") {
//        return alert("Thank you for playing!");
