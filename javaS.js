function getComputerChoice(){
    let randomNumber = 1 + Math.floor(Math.random() * 3);
    if (randomNumber == 1){
        return 'rock'
    }
    if (randomNumber == 2){
        return 'paper'
    }
    if (randomNumber == 3){
        return 'scissors'
    };
};
const playerSelection = prompt('Rock, Paper or Scissors?')

if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors'){
    alert('Error! Reload page and  either  choose Rock,Paper or Scissors.')}

const computerSelection = getComputerChoice()

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return 'Is a TIE';
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return ' You Win, Paper beats Rock'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return ' You Lose. Scissors beats Paper'
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return ' You Lose, Paper beats Rock'
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return ' You Win, Rock beats Scissors'
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return ' You Win, Scissors beats Paper'
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return ' You Lose, Rock beats Scissors'
    }
};

function playGame(playerSelection,computerSelection){
    let playerWins = 0;
    let computerWins = 0;
    const round1 = playRound(playerSelection,getComputerChoice())
    const round2 = playRound(playerSelection,getComputerChoice())
    const round3 = playRound(playerSelection,getComputerChoice())
    const round4 = playRound(playerSelection,getComputerChoice())
    const round5 = playRound(playerSelection,getComputerChoice())
    console.log(' Round 1:', round1)
    if ( round1.startsWith(' You Win')){
        playerWins++
    }else if (round1.startsWith(' You Lose')){
        computerWins++
    }else if (round1.startsWith('Is a')){
        computerWins++ , playerWins++
    };
    console.log(' Round 2:', round2)

    if ( round2.startsWith(' You Win')){
        playerWins++
    }else if (round2.startsWith(' You Lose')){
        computerWins++
    }else if (round2.startsWith('Is a')){
        computerWins++ , playerWins++
    };
    console.log(' Round 3:', round3)

    if ( round3.startsWith(' You Win')){
        playerWins++
    }else if (round3.startsWith(' You Lose')){
        computerWins++
    }else if (round3.startsWith('Is a')){
        computerWins++ , playerWins++
    };
    console.log(' Round 4:', round4)

    if ( round4.startsWith(' You Win')){
        playerWins++
    }else if (round4.startsWith(' You Lose')){
        computerWins++
    }else if (round4.startsWith('Is a')){
        computerWins++ , playerWins++
    };
    console.log(' Round 5:', round5)

    if ( round5.startsWith(' You Win')){
        playerWins++
    }else if (round5.startsWith(' You Lose')){
        computerWins++
    }else if (round5.startsWith('Is a')){
        computerWins++ , playerWins++
    };

    if ( playerWins > computerWins){
        return ' You Win the series Congrats!'
    }else if ( computerWins > playerWins){
        return ' You Lose the series Sorry'
    }else { return 'The series ended in a Tie'}
}

console.log(playGame(playerSelection,computerSelection))















