let wonText = document.querySelector('#wonText');
let lostText = document.querySelector('#lostText');
let resultsText = document.querySelector('#resultsText')
let reloadBtn = document.querySelector('#reloadBtn')
const btn = document.querySelectorAll('.btn')
playerWins = 0;
computerWins = 0;
let totalRounds = 0;
let playerChoice;
let computerChoice;

//reload button
reloadBtn.addEventListener('click', () => {
    location.reload();
})

//PlayerChoice
btn.forEach(button => button.addEventListener('click', ()=> {
    playerChoice = button.textContent;
    computerSelection();
    playRound();
    wonText.textContent = `Won: ${playerWins}`;
    lostText.textContent = `Lost: ${computerWins}`;
    resultsText.textContet = `Total Rounds: ${totalRounds}`;
    if (totalRounds === 5 && playerWins > computerWins){
        alert('Game is over! You\'ve Won' );
        btn.forEach(button => button.disabled = true);
    }else if (totalRounds === 5 && playerWins < computerWins) 
    {alert('Game is over! You\'ve Lost' );
    btn.forEach(button => button.disabled = true);
}else if (totalRounds === 5 && playerWins === computerWins) 
{alert('Game is over! Is a TIE!' );
btn.forEach(button => button.disabled = true);}

}));

//ComputerChoice
function computerSelection(){
    const randomNumber= Math.floor(Math.random()*3)+1;
    switch (randomNumber){
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
}
//Play a round.
function playRound(){
        computerSelection();
        totalRounds++;


        if (computerChoice == playerChoice) {
            wonText.textContent = `Won: ${playerWins}`;
            lostText.textContent = `Lost: ${computerWins}`;
            resultsText.textContent = `Total Rounds: ${totalRounds}`;
            return 'Is a Tie';
        } else if ((playerChoice == 'paper' && computerChoice == 'rock') ||
            (playerChoice == 'rock' && computerChoice == 'scissors') ||
            (playerChoice == 'scissors' && computerChoice == 'paper')) {
            playerWins++;
            wonText.textContent = `Won: ${playerWins}`;
            lostText.textContent = `Lost: ${computerWins}`;
            resultsText.textContent = `Total Rounds: ${totalRounds}`;
            return 'You Win';
        } else {
            computerWins++;
            wonText.textContent = `Won: ${playerWins}`;
            lostText.textContent = `Lost: ${computerWins}`;
            resultsText.textContent = `Total Rounds: ${totalRounds}`;
            return 'You Lose';
        }
       
    }