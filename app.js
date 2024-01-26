function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return 'rock';
    } else if (rand === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        messageDisplay.textContent = `It's a tie! Player chose ${playerSelection}. Computer chose ${computerSelection}`

    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                messageDisplay.textContent = `Player chose ROCK. Computer chose SCISSORS`
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            } else {
                messageDisplay.textContent = `Player chose ROCK. Computer chose PAPER`
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                messageDisplay.textContent = `Player chose PAPER. Computer chose ROCK`
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            } else {
                messageDisplay.textContent = `Player chose PAPER. Computer chose SCISSORS`
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            }
        } else {
            if (computerSelection === "paper") {
                messageDisplay.textContent = `Player chose SCISSORS. Computer chose PAPER`
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            } else {
                messageDisplay.textContent = `Player chose SCISSORS. Computer chose ROCK`
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            }
        }
    }
}


const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message");

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", function () {
    playRound("rock");
})
paperBtn.addEventListener("click", function () {
    playRound("paper");
})
scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
})