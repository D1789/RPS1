//declarations
let options = ["rock", "paper", "scissors"];
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//computers choice
function computerPlay() {
  let computerSelection = options[Math.floor(Math.random()*options.length)];
  return computerSelection.toLowerCase();
}

//users choice event listeners
rock.addEventListener('click',round);
paper.addEventListener('click',round);
scissors.addEventListener('click',round);

//
let outcome = document.querySelector(".outcome");
let result = document.createElement("div");
outcome.append(result);


//one round
function round() {
  let computerChoice = computerPlay().toUpperCase();
  let playerChoice = this.id.toUpperCase();
  if (computerChoice === playerChoice) {
    result.textContent = "Draw! Both players selected ${playerChoice}"
} else if (
  (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
  (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
  (playerChoice === "PAPER" && computerChoice === "ROCK")
) {
  result.textContent = "You WIN this round! Have a point!"
} else {
  result.textContent = "Sorry, you LOSE this round. Computer gets a point..."
}
}
