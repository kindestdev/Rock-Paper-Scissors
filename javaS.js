// function getComputerChoice (){
//     let a='Rock'; 
//     let b='Paper';
//     let c='scissors';
//     return a || b || c;
// }
function getComputerChoice (str){
        let randomNumber= 1+Math.floor((Math.random() *3));
        let a='Rock'; 
        let b='Paper';
        let c='scissors';
        if(randomNumber==1){
            randomNumber=a;

        }else if (randomNumber==2){
            randomNumber=b;
        }else if (randomNumber==3){
            randomNumber=c;
        }
    return randomNumber;
}

console.log (
    getComputerChoice('Rock')
)
