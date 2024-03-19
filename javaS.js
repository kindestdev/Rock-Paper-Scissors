// function getComputerChoice(){
//     let randomNumber = 1 + Math.floor(Math.random() * 3);
//     if (randomNumber == 1){
//         return 'rock'
//     }
//     if (randomNumber == 2){
//         return 'paper'
//     }
//     if (randomNumber == 3){
//         return 'scissors'
//     };
// };
// let playerSelection  = '';

// function handleClick(event) {
//     playerSelection = event.target.textContent.toLowerCase();
//     console.log(playerSelection);

//     const computerSelection = getComputerChoice();

//     const result = playRound(playerSelection, computerSelection);
//     console.log(result);

// }

// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener('click', handleClick);
// })

// const rock = document.querySelector('.rock');
// rock.addEventListener('click', () => {
//   playerSelection = rock.textContent;
//     console.log('rock')
// });


// const paper = document.querySelector('.paper');
// paper.addEventListener('click',() => {
//     playerSelection = paper.textContent;
//     console.log('paper')
// });
// const scissors = document.querySelector('.scissors');
// scissors.addEventListener('click', () => {
//     playerSelection = scissors.textContent;
//     console.log('scissors')
// });





// if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors'){
//     alert('Error! Reload page and  either  choose Rock,Paper or Scissors.')}

// const computerSelection = getComputerChoice()

// function playRound(playerSelection,computerSelection){
//     if (playerSelection == computerSelection){
//         return 'Is a TIE';
//     } else if (playerSelection == 'paper' && computerSelection == 'rock'){
//         return ' You Win, Paper beats Rock'
//     } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
//         return ' You Lose. Scissors beats Paper'
//     }else if (playerSelection == 'rock' && computerSelection == 'paper'){
//         return ' You Lose, Paper beats Rock'
//     }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
//         return ' You Win, Rock beats Scissors'
//     }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
//         return ' You Win, Scissors beats Paper'
//     }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
//         return ' You Lose, Rock beats Scissors'
//     }
// };
// console.log(playRound(playerSelection,computerSelection))

// function playGame(playerSelection,computerSelection){
//     let playerWins = 0;
//     let computerWins = 0;
//     const round1 = playRound(playerSelection,getComputerChoice())
//     const round2 = playRound(playerSelection,getComputerChoice())
//     const round3 = playRound(playerSelection,getComputerChoice())
//     const round4 = playRound(playerSelection,getComputerChoice())
//     const round5 = playRound(playerSelection,getComputerChoice())
//     console.log(' Round 1:', round1)
//     if ( round1.startsWith(' You Win')){
//         playerWins++
//     }else if (round1.startsWith(' You Lose')){
//         computerWins++
//     }else if (round1.startsWith('Is a')){
//         computerWins++ , playerWins++
//     };
//     console.log(' Round 2:', round2)

//     if ( round2.startsWith(' You Win')){
//         playerWins++
//     }else if (round2.startsWith(' You Lose')){
//         computerWins++
//     }else if (round2.startsWith('Is a')){
//         computerWins++ , playerWins++
//     };
//     console.log(' Round 3:', round3)

//     if ( round3.startsWith(' You Win')){
//         playerWins++
//     }else if (round3.startsWith(' You Lose')){
//         computerWins++
//     }else if (round3.startsWith('Is a')){
//         computerWins++ , playerWins++
//     };
//     console.log(' Round 4:', round4)

//     if ( round4.startsWith(' You Win')){
//         playerWins++
//     }else if (round4.startsWith(' You Lose')){
//         computerWins++
//     }else if (round4.startsWith('Is a')){
//         computerWins++ , playerWins++
//     };
//     console.log(' Round 5:', round5)

//     if ( round5.startsWith(' You Win')){
//         playerWins++
//     }else if (round5.startsWith(' You Lose')){
//         computerWins++
//     }else if (round5.startsWith('Is a')){
//         computerWins++ , playerWins++
//     };

//     if ( playerWins > computerWins){
//         return ' You Win the series Congrats!'
//     }else if ( computerWins > playerWins){
//         return ' You Lose the series Sorry'
//     }else { return 'The series ended in a Tie'}
// }

// console.log(playGame(playerSelection,computerSelection))


// BY me from 0


const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultsText = document.querySelector('#resultsText');
const btn = document.querySelectorAll('.btn');
let player;
let computer;
let results;

btn.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    computerSelection();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultsText.textContet = roundGame();
}));

function computerSelection(){
    const randomNumber = Math.floor(Math.random()*3)+1;

    switch(randomNumber){
        case 1:
            computer = 'rock';
            break;
        case 2:
            computer = 'paper';
            break;
        case 3:
            computer = 'scissors';
            break;
    }
    

};
function roundGame(){
    if (player == computer){
        resultsText.textContent = 'Results: DRAW '
    }else if (player == 'paper' && computer == 'rock'){
        resultsText.textContent = 'Results: You Win!! '
    }else if (player == 'rock' && computer == 'scissors'){
        resultsText.textContent = 'Results: You Win!! '
    }else if (player == 'scissors' && computer == 'paper'){
        resultsText.textContent = 'Results: You Win!! '
    }else {
        resultsText.textContent = 'Results: You Lose!! '
    }
};
