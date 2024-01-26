const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const newGameBtn = document.querySelector("#new-game-btn");

let playerScore = 0;
let computerScore = 0;

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
        messageDisplay.textContent = `It's a tie! Player chose ${playerSelection.toUpperCase()}. Computer chose ${computerSelection.toUpperCase()}`

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

function checkWin() {
    if (playerScore === 5) {
        messageDisplay.textContent = "***** PLAYER WINS!!!!! *****";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore === 5) {
        messageDisplay.textContent = "***** COMPUTER WINS!!!!! *****";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    messageDisplay.textContent = "Make a choice:";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

newGameBtn.addEventListener("click", newGame);

rockBtn.addEventListener("click", function () {
    playRound("rock");
    checkWin();
})
paperBtn.addEventListener("click", function () {
    playRound("paper");
    checkWin();
})
scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
    checkWin();
})