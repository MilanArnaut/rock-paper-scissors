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
