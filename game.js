function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock"
    } else if (num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let player;
    while (true) {
        player = prompt("Rock, paper, or scissors?");
        if (player && ["rock", "paper", "scissors"].includes(player.toLowerCase())) {
            return player.toLowerCase();
        }
        alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    }
}

function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }


function playGame() {
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
            return
        }
        if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            console.log(`You win! ${capitalize(playerChoice)} beats ${computerChoice}.`);
            humanScore++;
        } else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`);
        computerScore++;
        }
      }
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);    
    }
    if (humanScore === computerScore) {
        console.log("It's a tie!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("You win!")
    }
}
  
playGame();
  