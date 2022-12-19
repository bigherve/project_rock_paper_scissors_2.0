function getUserChoice() {
    let userInput = prompt('Choose between rock, paper or scissors', '').toLowerCase();
    return userInput;
}

function getPcChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

let playerScore = 0;
let pcScore = 0;

function playRound(playerSelection, pcSelection) {
    playerSelection = getUserChoice();
    pcSelection = getPcChoice();
    if (playerSelection === 'rock' && pcSelection === 'paper') {
        alert('You lose!');
        pcScore++;
    } else if (playerSelection === 'rock' && pcSelection === 'scissors') {
        alert('You win!');
        playerScore++;
    } else if (playerSelection === 'paper' && pcSelection === 'rock') {
        alert('You win!');
        playerScore++;
    } else if (playerSelection === 'paper' && pcSelection === 'scissors') {
        alert('You lose!');
        pcScore++;
    } else if (playerSelection === 'scissors' && pcSelection === 'rock') {
        alert('You lose!');
        pcScore++;
    } else if (playerSelection === 'scissors' && pcSelection === 'paper') {
        alert('You win!');
        playerScore++;
    } else if (playerSelection === 'rock' && pcSelection === 'rock' ||
        playerSelection === 'paper' && pcSelection === 'paper' ||
        playerSelection === 'scissors' && pcSelection === 'scissors') {
        alert('It\'s a draw');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > pcScore) {
        alert(`You win ${playerScore} to ${pcScore}`);
    } else if (playerScore < pcScore) {
        alert(`You lose ${pcScore} to ${playerScore}`);
    } else {
        alert('It\'s a draw');
    }
    console.log(`playerScore ${playerScore} pcScore ${pcScore}`);
}

game();