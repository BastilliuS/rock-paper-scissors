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
         else  if(choice>=7 && choice<10) {
         return c;
         }
}
function playRound(playerSelection,computerSelection){
     let msg="";
     computerSelection=getComputerChoice();
     playerSelection=prompt("Let's play!");
    if (playerSelection.toUpperCase()==="ROCK" && computerSelection==="Rock"){
            msg="Tie rock vs rock";
        }
        else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Paper"){
            msg="You lose paper beats rock";
        }
        else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Scissors"){
            msg="You win rock beats scissors";
        }
    
     if (playerSelection.toUpperCase()==="PAPER" && computerSelection==="Paper"){
            msg="Tie paper vs paper";
        }
        else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Scissors"){
            msg="You lose scissors beats paper";
        }
        else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Rock"){
            msg="You win paper beats rock";
        }
    
     if (playerSelection.toUpperCase()==="SCISSORS" && computerSelection==="Scissors"){
            msg="Tie scis vs scis";
        }
        else if(playerSelection.toUpperCase()==="SCISSORS" && computerSelection==="Rock"){
            msg="You lose rock beats scisssors";
        }
        else if(playerSelection.toUpperCase()==="SCISSORS" && computerSelection==="Paper"){
            msg="You win scissors beats paper";
        }
    return msg;
}
function game(){
    let player=0;
    let computer=0;
    let result="";
    for (let i=0;i<5; i++){
       result=playRound(playerSelection,computerSelection);
        if(result.includes("win")){
            player++;
        }
        else if(result.includes("lose")){
            computer++;
        }
      console.log(result);
      console.log(player);
      console.log(computer);
     
    }
    if(player>computer){
        return "You win!";
    }
    else if(player<computer){
        return "You lose, dumbo!";
    }
    else if(player===computer){
        return "Tie!";
    }
}
    

    
let playerSelection = 0;
let computerSelection = getComputerChoice();
console.log(game());