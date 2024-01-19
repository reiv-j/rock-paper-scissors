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

function playRound() {
    let playerSelection = prompt("What's your choice?").toLowerCase()
    let computerSelection = getComputerChoice();

    console.log("Player selection: ", playerSelection);
    console.log("Computer selection: ", computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                return "Player wins!";
            } else {
                return "Computer wins!";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "Player wins!";
            } else {
                return "Computer wins!";
            }
        } else {
            if (computerSelection === "paper") {
                return "Player wins!";
            } else {
                return "Computer wins!"
            }
        }
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

