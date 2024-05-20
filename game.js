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

// Function to play the game
function playGame() {
    // Function to play a single round of the game
    function playRound(playerChoice, computerChoice) {
        const resultText = document.createElement("p");
        if (playerChoice === computerChoice) {
            resultText.textContent = "It's a tie!";
            results.appendChild(resultText);
            return;
        }
        if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            resultText.textContent = `You win! ${capitalize(playerChoice)} beats ${computerChoice}.`;
            results.appendChild(resultText);
            humanScore++;
        } else {
            resultText.textContent = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`;
            results.appendChild(resultText);
            computerScore++;
        }
        updateScores();
        checkWinner();
    }
    
    // Function to update the scores on the page
    function updateScores() {
        scoreText.textContent = `You: ${humanScore} - Artificial Intelligence: ${computerScore}`;
    }
    
    // Function to check if there is a winner
    function checkWinner() {
        if (humanScore === 5) {
            const winnerText = document.createElement("p");
            winnerText.textContent = "Congratulations! You won the game!";
            results.appendChild(winnerText);
            disableButtons();
        } else if (computerScore === 5) {
            const winnerText = document.createElement("p");
            winnerText.textContent = "AI wins! Better luck next time!";
            results.appendChild(winnerText);
            disableButtons();
        }
    }
    
    // Function to reset the game
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        results.innerHTML = '';
        updateScores();
        enableButtons();
        results.appendChild(scoreText);
    }

    // Function to disable the buttons when the game ends
    function disableButtons() {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    
    // Function to enable the buttons
    function enableButtons() {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }
    
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    const results = document.querySelector(".results");
    const scoreText = document.createElement("p");
    results.appendChild(scoreText);
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", resetGame);

    updateScores();

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
