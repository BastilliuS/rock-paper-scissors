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
console.log(getComputerChoice());