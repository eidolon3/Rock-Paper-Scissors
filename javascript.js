

console.log("Hello World")

function getComputerChoice() {
    let number = Math.random();
    if (number >= 0.667) {
        return "Rock";
    }
    else if (number >= 0.33) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}



function getHumanChoice() {
    let result = prompt("Pick: Rock, Paper, or Scissors?: ", "");
    return result;
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    round = 0
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}`)
    function playRound() {
        round +=1
        console.log(`Round: ${round}`)
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log(`Tie! Both players played ${humanChoice}`);
        
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore +=1
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore += 1
        }

        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Paper beats Scissors!");
            computerScore += 1
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You Win! Rock beats Scissors!");
            humanScore += 1
        }

        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You Lose, Rock Beats Scissors!");
            computerScore += 1

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You Win! Scissors beats paper!");
            humanScore += 1
        }



        
    }

}

playGame()