let playerScore = 0;
let pcScore = 0;
const buttons = document.querySelectorAll('.btns');
const para = document.querySelector('#para');

function getPcChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection) {
    let pcSelection = getPcChoice();
    let result = '';

    if (
        (playerSelection === 'rock' && pcSelection === 'scissors') ||
        (playerSelection === 'paper' && pcSelection === 'rock') ||
        (playerSelection === 'scissors' && pcSelection === 'paper')
    ) {
        playerScore++;
        result = `Yay you win! ${playerSelection} beats ${pcSelection} 
        Player score: ${playerScore} Computer score: ${pcScore}.`;

        if (playerScore === 5) {
            result = `You win the game! With a score of ${playerScore} to ${pcScore} YAY.`;
        }
    } else if (playerSelection === pcSelection) {
        result = `It's a draw you both got ${playerSelection} go again.`;
    } else {
        pcScore++;
        result = `You lose! ${pcSelection} beats ${playerSelection}
        Player score: ${playerScore} Computer score: ${pcScore}.`;

        if (pcScore === 5) {
            result = `The computer wins! With a score of ${pcScore} to ${playerScore} BOO.`;
        }
    }
    para.textContent = result;
    return;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});