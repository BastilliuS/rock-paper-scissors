function getComputerChoice(){
    let a="Rock";
    let b="Paper";
    let c="Scissors";
    let choice= Math.floor(Math.random()*10);
    if(choice>=0 && choice<4){
    return a;}
    else if(choice>=4 && choice<7){
        return b;
    }
         else return c;
    
}
function playRound(playerSelection,computerSelection){
     computerSelection =  getComputerChoice();
     let msg="";
    if (playerSelection.toUpperCase()==="ROCK"){
        if (computerSelection==="Rock"){
            msg="Tie";
        }
        else if(computerSelection==="Paper"){
            msg="You lose";
        }
        else if(computerSelection==="Scissors"){
            msg="You win";
        }
    }
    else if (playerSelection.toUpperCase()==="PAPER"){
        if (computerSelection==="Paper"){
            msg="Tie";
        }
        else if(computerSelection==="Scissors"){
            msg="You lose";
        }
        else if(computerSelection==="Rock"){
            msg="You win";
        }
    }
    else if (playerSelection.toUpperCase()==="SCISSORS"){
        if (computerSelection==="Scissors"){
            msg="Tie";
        }
        else if(computerSelection==="Rock"){
            msg="You lose";
        }
        else if(computerSelection==="Paper"){
            msg="You win";
        }
    }
    return msg;
}
    

console.log(getComputerChoice());
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));