function getComputerChoice () {
    let intChoice = Math.floor(Math.random() * 3);
    switch (intChoice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Choice Error!';
    }
}

console.log(getComputerChoice())