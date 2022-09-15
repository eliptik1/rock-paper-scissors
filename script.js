function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
    let randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

const playerSelection = "PAPER";
const computerSelection = getComputerChoice();

console.log("player: "+ playerSelection.toLowerCase())
console.log("computer: "+ computerSelection)

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
    console.log("You won! Rock beats scissors.")
    return result = "win";
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
     console.log("You lost! Paper beats rock.")
     return result ="lost";
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
     console.log("Draw")
     return result = "draw";

    } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
    console.log("You lost! Scissors beats paper.")
    return result ="lost";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
     console.log("Draw")
     return result = "draw";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
     console.log("You won! Paper beats rock.")
     return result = "win";

    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
    console.log("Draw")
    return result = "draw";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
     console.log("You win! Scissors beats paper.")
     return result = "win";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
     console.log("You lost! Rock beats scissors.")
     return result ="lost";
} 
}

let result;

console.log(playRound(playerSelection, computerSelection));
