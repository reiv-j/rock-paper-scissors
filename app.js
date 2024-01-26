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

    console.log("Player selection: ", playerSelection);
    console.log("Computer selection: ", computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                console.log("Player wins!");
            } else {
                console.log("Computer wins!");
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("Player wins!");
            } else {
                console.log("Computer wins!");
            }
        } else {
            if (computerSelection === "paper") {
                console.log("Player wins!");
            } else {
                console.log("Computer wins!");
            }
        }
    }
}


