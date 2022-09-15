function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"]
    let randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log("player: "+ playerSelection)
console.log("computer: "+ computerSelection)

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "Scissors"){
    console.log("You won!rock beats scissors.")
    } else if(playerSelection === "rock" && computerSelection === "Paper"){
     console.log("You lost! paper beats rock.")
    } else if(playerSelection === "rock" && computerSelection === "Rock"){
     console.log("draw")

    } else if(playerSelection === "paper" && computerSelection === "Scissors"){
    console.log("You lost!scissors beats paper.")
    } else if(playerSelection === "paper" && computerSelection === "Paper"){
     console.log("draw")
    } else if(playerSelection === "paper" && computerSelection === "Rock"){
     console.log("You won! paper beats rock.")
     
    } else if(playerSelection === "scissors" && computerSelection === "Scissors"){
    console.log("draw")
    } else if(playerSelection === "scissors" && computerSelection === "Paper"){
     console.log("You win! scissors beats paper.")
    } else if(playerSelection === "scissors" && computerSelection === "Rock"){
     console.log("You lost! rock beats scissors.")
} 
}

playRound(playerSelection, computerSelection);