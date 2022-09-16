function game(){
    function getComputerChoice() {
        const moves = ["rock", "paper", "scissors"]
        let randomMove = moves[Math.floor(Math.random() * moves.length)];
        return randomMove;
    }
    
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    
    console.log("player: "+ playerSelection.toLowerCase())
    console.log("computer: "+ computerSelection)
    
    function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        console.log("You won! Rock beats scissors.")
        score += 1;

        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        console.log("You lost! Paper beats rock.")
        lose +=1;
         
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
        console.log("Draw")
        draw += 1;
    
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        console.log("You lost! Scissors beats paper.")
        lose +=1;
        
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
        console.log("Draw")
        draw += 1;
         
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("You won! Paper beats rock.")
        score += 1;

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        console.log("Draw")
        draw += 1;

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats paper.")
        score += 1;

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        console.log("You lost! Rock beats scissors.")
        lose +=1;
        
    } 
    }
    
    
    
    console.log(playRound(playerSelection, computerSelection));
}
let score = 0;
let draw = 0;
let lose = 0;
let gameFinished = false;
do{
    game();
    if (score === 5){
        gameFinished = true;
        console.log("Congratulations! You won the game!")
        console.log("win:", score, " lose:", lose, " draw:", draw)
    } else if(lose === 5){
        gameFinished = true;
        console.log("You lost the game :(")
        console.log("win:", score, " lose:", lose, " draw:", draw)
    }
}
while (gameFinished === false);
