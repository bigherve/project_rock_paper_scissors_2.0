function getUserChoice() {
    let userInput = prompt('Choose between rock, paper or scissors', '').toLowerCase();
    return userInput;
}

function getPcChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}