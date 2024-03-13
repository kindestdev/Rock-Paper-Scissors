function computerChoice(){
        let randomNumber= 1+Math.floor((Math.random() *3));
        let a='rock'; 
        let b='paper';
        let c='scissors';
        if(randomNumber==1){
            randomNumber=a;

        }else if (randomNumber==2){
            randomNumber=b;
        }else if (randomNumber==3){
            randomNumber=c;
        }
    return randomNumber;
};
function playerChoice (){
        let randomNumber= 1+Math.floor(Math.random()*3);
        let a='Rock'; 
        let b='Paper';
        let c='scissors';
        let choice
        if (randomNumber==1){
            choice=a;
        }else if (randomNumber==2){
            choice=b;
        }else if (randomNumber==3){
            choice=c;
        };
        return choice
}
function playRound(playerSelection,computerSelection){    
    playerSelection= playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return'empate'
    }else if (playerSelection==='paper' && computerSelection==='rock'){
        return 'You win! Paper Beats Rock!';

    }else if (playerSelection=== 'rock' && computerSelection==='scissors'){
        return'You win! Rock beats Scissors';

    }else if (playerSelection ==='scissors' && computerSelection==='paper'){
        return 'You win! Scissors beats paper';

    }else if( playerSelection ==='paper' && computerSelection==='scissors')
    { return 'You Lost! Scissors beats Paper';

    }else if (playerSelection === 'rock' && computerSelection==='paper'){
        return 'You Lost! Paper beats Rock';

    }else if (playerSelection=== 'scissors' && computerSelection==='rock') {
        return 'You Lost! Rock beats Scissors!';
    }
    };
    function playGame(playerSelection,computerSelection){
        const round1= playRound(playerSelection,computerChoice());
        const round2 = playRound(playerSelection,computerChoice());
        const round3 = playRound(playerSelection,computerChoice());
        const round4 = playRound(playerSelection,computerChoice());
        const round5 = playRound(playerSelection,computerChoice());
        let playerWins = 0;
        let computerWins = 0;
        console.log('Round 1:', round1);
        if (round1.startsWith('You win')){playerWins++
        }else {computerWins++;
        }
        console.log('Round 2:', round2);
        if (round2.startsWith('You win')){playerWins++
        }else {computerWins++;
        }
        console.log('Round 3:', round3);
        if (round3.startsWith('You win')){playerWins++
        }else {computerWins++;
        }
        console.log('Round 4:', round4);
        if (round4.startsWith('You win')){playerWins++
        }else {computerWins++;
        }
        console.log('Round 5:', round5);
        if (round5.startsWith('You win')){playerWins++
        }else {computerWins++;
        }
    



        if (playerWins > computerWins) {
            return "Player Wins the game"
        }else return 'Computer Wins the game';
    
    };
    const playerSelection=prompt('Rock,Paper or Scissors');
    
    const computerSelection = computerChoice();

    console.log(playGame(playerSelection,computerSelection))


// function game(str,computerChoice){
//     str=str.toLowerCase();
//     let resultado;
//     if(str === computerChoice){
//         return'empate'
//     }else if (str==='paper' && computerChoice==='rock'){
//         return 'You win! Paper Beats Rock!';

//     }else if (str=== 'rock' && computerChoice==='scissors'){
//         return'You win! Rock beats Scissors';

//     }else if (str ==='scissors' && computerChoice==='paper'){
//         return 'You win! Scissors beats paper';

//     }else if( str ==='paper' && computerChoice==='scissors')
//     { return 'You Lost! Scissors beats Paper';

//     }else if (str === 'rock' && computerChoice==='paper'){
//         return 'You Lost! Paper beats Rock';

//     }else if (str=== 'scissors' && computerChoice==='rock') {
//         return 'You Lost! Rock beats Scissors!';
//     };

// };