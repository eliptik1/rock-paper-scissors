const moves = ["Rock","Paper","Scissors"]
let randomMove = moves[Math.floor(Math.random() * moves.length)];

function getComputerChoice(){
   console.log(randomMove);
}
getComputerChoice();