let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let messageContent = document.getElementById("message-content");
let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissors = document.getElementById("scissors");
let resetScore = document.getElementById("reset");
let buttons = [btnRock, btnPaper, btnScissors];

buttons.forEach((button) => button.addEventListener("click", playRound));
resetScore.addEventListener("click", resetGame);

function playComputer() {
  let possibilities = ["rock", "paper", "scissors"];
  let randNum = Math.round(Math.random() * 2);
  return possibilities[randNum];
}

function resetGame() {
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  messageContent.innerHTML = "";
}

// Plays a single round
function playRound(e) {
  let playerSelection = e.target.id;
  let playerCounter = Number(playerScore.innerHTML);
  let computerSelection = playComputer();
  let computerCounter = Number(computerScore.innerHTML);

  switch (playerSelection + "-" + computerSelection) {
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
      messageContent.innerHTML = "It's a draw";
      break;
    case "rock-paper":
    case "paper-scissors":
    case "scissors-rock":
      computerScore.innerHTML = `${computerCounter + 1}`;
      messageContent.innerHTML = "The computer wins...";
      break;
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
      playerScore.innerHTML = `${playerCounter + 1}`;
      messageContent.innerHTML = "You win!";
      break;
    default:
      return;
  }
}
