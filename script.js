function getComputerChoice() {

    let choice;
    let number = Math.floor(Math.random() * 100) % 3;

    switch(number) {
        case 0: choice = 'rock'; break;
        case 1: choice = 'paper'; break;
        case 2: choice = 'scissors'; break;
    }

    return choice;
}

function playRound(userSelection, computerSelection) {
    
    userSelection = userSelection.toLowerCase();

    if(userSelection == computerSelection) {
        return "It's a draw!";
    }

    switch(userSelection) {
        case 'rock': if (computerSelection == 'paper') {return "You lose!"} else {return "You win!"}; break;
        case 'paper': if(computerSelection == 'scissors') {return "You lose!"} else {return "You win!"}; break;
        case 'scissors': if(computerSelection == 'rock') {return "You lose!"} else {return "You win!"}; break;
    }
}
