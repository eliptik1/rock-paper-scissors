    const playRock = function(){
        playRound1("rock")
    }

    const playPaper = function(){
        playRound1("paper")
    }

    const playScissors = function(){
        playRound1("scissors")
    }
    
    
    function getComputerChoice() {
        const moves = ["rock", "paper", "scissors"]
        let randomMove = moves[Math.floor(Math.random() * moves.length)];
        return randomMove;
    }   

    const rockBtn = document.querySelector("#rock")
    rockBtn.addEventListener("click", playRock)

    const paperBtn = document.querySelector("#paper")
    paperBtn.addEventListener("click", playPaper)

    const scissorsBtn = document.querySelector("#scissors")
    scissorsBtn.addEventListener("click", playScissors);

    const restartBtn = document.querySelector("#restart")
    restartBtn.addEventListener("click", restartEvent);

    function restartEvent(){
        score = 0;
        draw = 0;
        lose = 0;
        console.log("score: " + score)
        console.log("lose: " + lose)
        rockBtn.addEventListener("click", playRock)
        paperBtn.addEventListener("click", playPaper)
        scissorsBtn.addEventListener("click", playScissors)


    }
    
    function removeEvent(){
    rockBtn.removeEventListener("click", playRock)
    paperBtn.removeEventListener("click", playPaper)
    scissorsBtn.removeEventListener("click", playScissors)
    }


    let score = 0;
    let draw = 0;
    let lose = 0;
    

    
    function playRound1(playerSelection){

        const computerSelection = getComputerChoice();

        console.log("player: "+ playerSelection.toLowerCase())
        console.log("computer: "+ computerSelection)

        if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        console.log("You won! Rock beats scissors.")
        score += 1;
        updateResults();
        
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        console.log("You lost! Paper beats rock.")
        lose +=1;
        updateResults();
         
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
        console.log("Draw")
        draw += 1;
        updateResults();
    
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        console.log("You lost! Scissors beats paper.")
        lose +=1;
        updateResults();
        
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
        console.log("Draw")
        draw += 1;
        updateResults();
         
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("You won! Paper beats rock.")
        score += 1;
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        console.log("Draw")
        draw += 1;
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats paper.")
        score += 1;
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        console.log("You lost! Rock beats scissors.")
        lose +=1;
        updateResults();
    } 
    }
    
    function updateResults(){
        console.log("score: "+score)
        console.log("draw: "+draw)
        console.log("lose: "+lose)

        if (score === 5){
            
            console.log("Congratulations! You won the game!")
            console.log("win:", score, " lose:", lose, " draw:", draw)
            removeEvent()
        }

        if(lose === 5){
           
            console.log("You lost the game :(")
            console.log("win:", score, " lose:", lose, " draw:", draw)
            removeEvent()
        }
    };

   
