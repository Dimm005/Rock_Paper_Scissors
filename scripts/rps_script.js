function getComputerChoice () {
    let intChoice = Math.floor(Math.random() * 3);
    switch (intChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'Choice Error!';
    }
}

function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock') {
                return 'Draw! Rock vs rock!';
            } else if (computerSelection == 'paper') {
                return 'You lose! Paper covers rock!';
            } else {
                return 'You won! Rock beats scissors!'
            };
        case 'paper':
            if (computerSelection == 'paper') {
                return 'Draw! Paper vs paper!';
            } else if (computerSelection == 'scissors') {
                return 'You lose! Scissors cuts paper!';
            } else {
                return 'You won! Paper covers rock!'
            };
        default:
            if (computerSelection == 'scissors') {
                return 'Draw! Scissors vs scissors!';
            } else if (computerSelection == 'rock') {
                return 'You lose! Rock beats scissors!';
            } else {
                return 'You won! Scissors cuts paper!'
            };


    }
}


let playerSelection = 'paper';
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));