    let score = 0;
    let draw = 0;
    let lose = 0;
    let result = " ";

     const playerScore = document.querySelector("#playerScore")
     const computerScore = document.querySelector("#computerScore")
     const gameResult = document.querySelector("#gameResult")
     const playerMove = document.querySelector("#playerMove")
     const computerMove = document.querySelector("#computerMove")
     playerScore.textContent = `${score}`
     computerScore.textContent = `${lose}`
     gameResult.textContent = `${result}`
     

    
    const playRock = function(){
        playRound1("rock")
        playerMove.innerHTML =  `<img id="rock1" src="./images/rock.png" alt="rock">`

    }

    const playPaper = function(){
        playRound1("paper")
        playerMove.innerHTML = `<img id="paper1" src="./images/paper.png" alt="paper">`

    }

    const playScissors = function(){
        playRound1("scissors")
        playerMove.innerHTML = `<img id="scissors1" src="./images/scissors.png" alt="scissors">`
    }
    
    
    function getComputerChoice() {
        const moves = ["rock", "paper", "scissors"]
        let randomMove = moves[Math.floor(Math.random() * moves.length)];
        computerMove.innerHTML = `<img id="${randomMove}1" src="./images/${randomMove}.png" alt="${randomMove}">`;
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
        playerScore.textContent = `${score}`
        computerScore.textContent = `${lose}`
        gameResult.textContent = " "
        playerMove.innerHTML = `<img id="question" src="./images/question.png" alt="question">`
        computerMove.innerHTML = `<img id="question" src="./images/question.png" alt="question">`
        rockBtn.addEventListener("click", playRock)
        paperBtn.addEventListener("click", playPaper)
        scissorsBtn.addEventListener("click", playScissors)
    }
    
    function removeEvent(){
    rockBtn.removeEventListener("click", playRock)
    paperBtn.removeEventListener("click", playPaper)
    scissorsBtn.removeEventListener("click", playScissors)
    }

    function playRound1(playerSelection){

        const computerSelection = getComputerChoice();

        if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        result = "You win! Rock beats scissors."
        score += 1;
        updateResults();
        
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        result = "You lose! Paper beats rock."
        lose +=1;
        updateResults();
         
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
        draw += 1;
        result = "It's a tie"
        updateResults();
    
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        result = "You lose! Scissors beats paper."
        lose +=1;
        updateResults();
        
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
        draw += 1;
        result = "It's a tie"
        updateResults();
         
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        score += 1;
        result = "You win! Paper beats rock." 
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        draw += 1;
        result = "It's a tie"
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        score += 1;
        result = "You win! Scissors beats paper."
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        lose +=1;
        result = "You lose! Rock beats scissors."
        updateResults();
    } 
    }
    
    function updateResults(){
        playerScore.textContent = `${score}`
        computerScore.textContent = `${lose}`
        gameResult.textContent = `${result}`

        if (score === 5){
            gameResult.textContent = "Congratulations! You win the game!"
            removeEvent()
        }

        if(lose === 5){
            gameResult.textContent = "You lost the game :("
            removeEvent()
        }
    };

   
