// Function to get the computer's choice
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to capitalize the first letter of a string
function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function to play a single round of the game

// Function to play the game
function playGame() {
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
            return;
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

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
    });

    paper.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
    });

    scissors.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
    });
}

// Initialize the game
playGame();
