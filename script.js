function computerPlay() {
    const MOVES = ['Rock', 'Paper', 'Scissors'];
    let choice = MOVES[Math.floor(Math.random()*MOVES.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (ps === 'Rock' && computerSelection === 'Scissors' ||
    ps === 'Paper' && computerSelection === 'Rock' ||
    ps === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${ps} beats ${computerSelection}.`;
    } else if (ps === 'Rock' && computerSelection === 'Paper' ||
    ps === 'Paper' && computerSelection === 'Scissors' ||
    ps === 'Scissors' && computerSelection === 'Rock') {
        return `You lose. ${computerSelection} beats ${ps}.`;
    } else {
        return 'It\'s a tie!.';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Pick a hand (Rock, Paper, Scissors): ', '');
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith('You win')) {
            playerScore += 1;
            console.log('You win this round.');
        } else if (result.startsWith('You lose')) {
            computerScore += 1;
            console.log('You lose this round.');
        } else {
            console.log('You tied this round.')
        }
        console.log(`Score: ${playerScore} - ${computerScore}.`);
    }
    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (computerScore > playerScore) {
        console.log('You lose.');
    } else {
        console.log('It\'s a tie.');
    }
    console.log(`Final Score: ${playerScore} - ${computerScore}`);
}

game();