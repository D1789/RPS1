//declarations
let options = ["ROCK", "PAPER", "SCISSORS"];
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerScore = document.querySelector('#playerscore');
let computerScore = document.querySelector('#compscore');
let roundID = document.querySelector('#roundnumber');

//users choice event listeners
rock.addEventListener('click', round);
paper.addEventListener('click', round);
scissors.addEventListener('click', round);

//computers choice
function computerPlay() {
  let computerSelection = options[Math.floor(Math.random()*options.length)];
  return computerSelection.toUpperCase();
}

//outcome notifier
let outcomeWindow = document.querySelector(".outcomeWindow");
let result = document.createElement("div");
outcomeWindow.appendChild(result);

//one round
function round() {
  let computerChoice = computerPlay().toUpperCase();
  let playerChoice = this.id.toUpperCase();
  if (computerChoice === playerChoice) {
    result.textContent = "Draw! Both players selected " + playerChoice +"!";
    roundID.textContent = +roundID.textContent + 1;
} else if (
  (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
  (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
  (playerChoice === "PAPER" && computerChoice === "ROCK")
) {
  result.textContent = playerChoice + " beats " + computerChoice + "! You win this round!";
  playerScore.textContent = +playerScore.textContent + 1;
  roundID.textContent = +roundID.textContent + 1;
} else {
  result.textContent = computerChoice + " beats " + playerChoice + ". Sorry, you lose this round.";
  computerScore.textContent = +computerScore.textContent + 1;
  roundID.textContent = +roundID.textContent + 1;
}
if (playerScore.textContent == 5) {
  result.textContent = "Player beat computer!";
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  roundID.textContent = 0;
  alert("You Win!");
} else if (
   computerScore.textContent == 5
) {
  result.textContent = "Computer beat player!";
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  roundID.textContent = 0;
  alert("You Lose!");
}
}
