function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"]
    let randomMove = moves[Math.floor(Math.random() * moves.length)];
    console.log(randomMove);
}
getComputerChoice();