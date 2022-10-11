    let score = 0;
    let draw = 0;
    let lose = 0;
    let result = " ";

     const playerScore = document.querySelector("#playerScore")
     const computerScore = document.querySelector("#computerScore")
     const gameResult = document.querySelector("#gameResult")
     const gameResult2 = document.querySelector("#gameResult2")
     const playerMove = document.querySelector("#playerMove")
     const computerMove = document.querySelector("#computerMove")
     const scoreContainer = document.querySelector("#scoreTitle1")
     const scoreContainer1 = document.querySelector("#playerScore")
     const scoreContainer2 = document.querySelector("#scoreTitle2")
     const scoreContainer3 = document.querySelector("#computerScore")


     playerScore.textContent = `${score}`
     computerScore.textContent = `${lose}`
     gameResult.textContent = `${result}`
     
    const playerMoveImage = document.querySelector("#playerMove > img")
    const computerMoveImage = document.querySelector("#computerMove > img")
    
    const playRock = function(){
        playRound1("rock")  
        playerMoveImage.setAttribute("id","rock1")
        playerMoveImage.setAttribute("src", "./images/rock.png")
        playerMoveImage.setAttribute("alt", "rock")
    }

    const playPaper = function(){
        playRound1("paper")
        playerMoveImage.setAttribute("id","paper1")
        playerMoveImage.setAttribute("src", "./images/paper.png")
        playerMoveImage.setAttribute("alt", "paper")
    }

    const playScissors = function(){
        playRound1("scissors")
        playerMoveImage.setAttribute("id","scissors1")
        playerMoveImage.setAttribute("src", "./images/scissors.png")
        playerMoveImage.setAttribute("alt", "scissors")
    }
    
    function getComputerChoice() {
        const moves = ["rock", "paper", "scissors"]
        let randomMove = moves[Math.floor(Math.random() * moves.length)];
        computerMoveImage.setAttribute("id", `${randomMove}1`)
        computerMoveImage.setAttribute("src", `./images/${randomMove}.png`)
        computerMoveImage.setAttribute("alt", `${randomMove}`)
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
   
    restartBtn.style.display = "none"
    
    playerMoveImage.addEventListener("transitionend", myFunction)
    computerMoveImage.addEventListener("transitionend", myFunction)

    function myFunction(){
        playerMoveImage.classList.remove("win")
        computerMoveImage.classList.remove("win")
        scoreContainer.classList.remove("win1")
        scoreContainer1.classList.remove("win1")
        scoreContainer2.classList.remove("win1")
        scoreContainer3.classList.remove("win1")
        playerMoveImage.classList.remove("clicked")
        computerMoveImage.classList.remove("clicked")
    }

    function restartEvent(){
        score = 0;
        draw = 0;
        lose = 0;
        restartBtn.style.display = "none"
        playerScore.textContent = `${score}`
        computerScore.textContent = `${lose}`
        gameResult.textContent = " "
        gameResult2.textContent = " "

        playerMoveImage.setAttribute("class","question")
        playerMoveImage.setAttribute("src", "./images/question.png")
        playerMoveImage.setAttribute("alt", "question")

        computerMoveImage.setAttribute("class", "question")
        computerMoveImage.setAttribute("src", "./images/question.png")
        computerMoveImage.setAttribute("alt", "question")

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
        playerMoveImage.classList.add("win")
        scoreContainer.classList.add("win1")
        scoreContainer1.classList.add("win1")
        updateResults();
        
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        result = "You lose! Paper beats rock."
        lose +=1;
        computerMoveImage.classList.add("win")
        scoreContainer2.classList.add("win1")
        scoreContainer3.classList.add("win1")
        updateResults();
         
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
        draw += 1;
        playerMoveImage.classList.add("clicked")
        computerMoveImage.classList.add("clicked")
        result = "It's a tie"
        updateResults();
    
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        result = "You lose! Scissors beats paper."
        lose +=1;
        computerMoveImage.classList.add("win")
        scoreContainer2.classList.add("win1")
        scoreContainer3.classList.add("win1")
        updateResults();
        
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
        draw += 1;
        playerMoveImage.classList.add("clicked")
        computerMoveImage.classList.add("clicked")
        result = "It's a tie"
        updateResults();
         
        } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        score += 1;
        playerMoveImage.classList.add("win")
        scoreContainer.classList.add("win1")
        scoreContainer1.classList.add("win1")
        result = "You win! Paper beats rock." 
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        draw += 1;
        playerMoveImage.classList.add("clicked")
        computerMoveImage.classList.add("clicked")
       
        result = "It's a tie"
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        score += 1;
        playerMoveImage.classList.add("win")
        scoreContainer.classList.add("win1")
        scoreContainer1.classList.add("win1")
      
        result = "You win! Scissors beats paper."
        updateResults();

        } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        lose +=1;
        computerMoveImage.classList.add("win")
        scoreContainer2.classList.add("win1")
        scoreContainer3.classList.add("win1")
        result = "You lose! Rock beats scissors."
        updateResults();
    } 
    }
    
    function updateResults(){
        playerScore.textContent = `${score}`
        computerScore.textContent = `${lose}`
        gameResult.textContent = `${result}`

        if (score === 5){ 
            removeEvent()
            gameResult2.textContent = "Congratulations! You win the game!"
            gameResult2.style.color = "rgb(13, 255, 0)"
            restartBtn.style.display = "block"
        }

        if(lose === 5){
            removeEvent()
            gameResult2.textContent = "You lost the game :("
            gameResult2.style.color = "rgb(255, 142, 142)"
            restartBtn.style.display = "block"
        }
    };

   
