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

function game() {

    var userPoints = 0, computerPoints = 0;

     while(userPoints < 5 && computerPoints < 5){
        let userSelection = window.prompt('Insert a choice below');
        let computerSelection = getComputerChoice();
        let state = playRound(userSelection, computerSelection);
        switch(state) {
            case 'You win!': userPoints++; break;
            case 'You lose!': computerPoints++;  break;
        }
        console.log(state);
        console.log(`User points:${userPoints}, Computer points ${computerPoints}`);
    }

    if(userPoints === 5) {console.log("You won! Bravo")} 
    else if(computerPoints === 5) {console.log("You lost! Better luck next time!")};
}

game();
