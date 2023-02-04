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
function playRound(choice){
     let msg="";
     computerSelection=getComputerChoice();
     playerSelection=choice;
    if (playerSelection.toUpperCase()==="ROCK" && computerSelection==="Rock"){
            msg="Tie rock vs rock";
        }
        else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Paper"){
            msg="You lose paper beats rock";
            c++;
        }
        else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Scissors"){
            msg="You win rock beats scissors";
            p++;
        }
    
     if (playerSelection.toUpperCase()==="PAPER" && computerSelection==="Paper"){
            msg="Tie paper vs paper";
        }
        else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Scissors"){
            msg="You lose scissors beats paper";
            c++;
        }
        else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Rock"){
            msg="You win paper beats rock";
            p++;
        }
    
     if (playerSelection.toUpperCase()==="SCISSORS" && computerSelection==="Scissors"){
            msg="Tie scissors vs scissors";
        }
        else if(playerSelection.toUpperCase()==="SCISSORS" && computerSelection==="Rock"){
            msg="You lose rock beats scisssors";
            c++;
        }
        else if(playerSelection.toUpperCase()==="SCISSORS" && computerSelection==="Paper"){
            msg="You win scissors beats paper";
            p++;
        }
 
    return msg;
    
}
let p=0;
let c=0;
 const rock=document.createElement("button");
 rock.textContent="Rock";
 const paper=document.createElement("button");
 paper.textContent="Paper";
 const scissors=document.createElement("button");
 scissors.textContent="Scissors";
 const container=document.querySelector("#container");
 container.append(rock,paper,scissors);
 const results = document.querySelector("#results");
 rock.addEventListener("click",()=>{
    roundResult=playRound("rock");
    results.textContent="";
    computer.textContent="";
    computer.textContent="Computer:";
    player.textContent="Player:";
    computer.textContent+=c;
    player.textContent+=p;
    results.innerHTML+=roundResult;
    results.innerHTML+="<br>";
 })
 paper.addEventListener("click",()=>{
    roundResult=playRound("paper");
    results.textContent="";
    computer.textContent="";
    computer.style.cssText="margin=100px";
    computer.textContent="Computer:";
    player.textContent="Player:";
    computer.textContent+=c;
    player.textContent+=p;
    results.innerHTML+=roundResult;
    results.innerHTML+="<br>";
 })
 scissors.addEventListener("click",()=>{
    roundResult=playRound("scissors");
    results.textContent="";
    computer.textContent="";
    computer.textContent="Computer:";
    player.textContent="Player:";
    computer.textContent+=c;
    player.textContent+=p;
    results.innerHTML+=roundResult;
    results.innerHTML+="<br>";
 })
 const score=document.querySelector("#score");
 const computer=document.createElement("div");
 computer.style.cssText="margin=100px;";
 const player=document.createElement("div");
 const body=document.querySelector("body");
 body.style.cssText="display: flex; align-items: center; justify-content: space-around; flex-direction: column;"

 score.append(computer,player);
 console.log(container);
