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

let buttons = document.querySelectorAll('.buttons-section button');
let result = document.querySelector('.result-section');
var userPoints = 0, computerPoints = 0;
let computerSpan = document.querySelector('#computerPoints');
let userSpan = document.querySelector('#userPoints');
let stateDiv = document.querySelector('.state');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        game(button.value);     
    })
});

window.addEventListener('mousemove', e => {
    e.preventDefault();

    if(userPoints === 5 || computerPoints === 5) {
        result.innerHTML = `<a href="index.html"><button>Try again?</button></a>`;
        buttons.forEach(button => {
            button.disabled = 'true';
        })
    }
});

function game(userChoice) {

    let computerSelection = getComputerChoice();
    let state = playRound(userChoice, computerSelection);
    switch(state) {
        case 'You win!': userPoints++; break;
        case 'You lose!': computerPoints++;  break;
    }
    userSpan.innerHTML = userPoints;
    computerSpan.innerHTML = computerPoints;
    stateDiv.innerHTML = state;

    if(userPoints === 5) {result.innerHTML = `<p>"You won! Bravo"</p>`} 
    else if(computerPoints === 5) {result.innerHTML = '<p>You lost! Better luck next time!</p>'};
}