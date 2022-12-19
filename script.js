function getUserChoice() {
    let userInput = prompt('Choose between rock, paper or scissors', '').toLowerCase();
    return userInput;
}

function getPcChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection, pcSelection) {
    playerSelection = getUserChoice();
    pcSelection = getPcChoice();
    if (playerSelection === 'rock' && pcSelection === 'paper') {
        alert('You lose!');
    } else if (playerSelection === 'rock' && pcSelection === 'scissors') {
        alert('You win!');
    } else if (playerSelection === 'paper' && pcSelection === 'rock') {
        alert('You win!');
    } else if (playerSelection === 'paper' && pcSelection === 'scissors') {
        alert('You lose!');
    } else if (playerSelection === 'scissors' && pcSelection === 'rock') {
        alert('You lose!');
    } else if (playerSelection === 'scissors' && pcSelection === 'paper') {
        alert('You win!');
    } else if (playerSelection === 'rock' && pcSelection === 'rock' ||
        playerSelection === 'paper' && pcSelection === 'paper' ||
        playerSelection === 'scissors' && pcSelection === 'scissors') {
        alert('It\'s a draw');
    }
}