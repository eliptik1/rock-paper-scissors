function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"]
    let randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("player: "+ playerSelection)
console.log("computer: "+ getComputerChoice())

function playRound(playerSelection, computerSelection){
}

//console.log(playRound(playerSelection, computerSelection));

