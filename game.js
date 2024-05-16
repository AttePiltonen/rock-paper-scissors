function getComputerChoice() {
    num = Math.floor(Math.random() * 3)
    if (num === 0) {
        return "Rock"
    } else if (num === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const player = prompt("Rock, paper, or scissors?");
    return player.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  