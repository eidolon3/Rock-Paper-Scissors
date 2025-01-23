let results = document.querySelector("#results")

function computerGo() {
    let choice;
    let value = Math.random()
    if (value < 0.33) {
        choice = "rock"

    }
    else if (value < 0.67) {
        choice = "paper"
    }

    else if (value < 1) {
        choice = "scissors"
    }

    return choice
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let tieScore = 0 
    let round = 0

    let rock = document.querySelector("#rock");
    rock.addEventListener("click", ()=> playRound("rock"));

    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", ()=> playRound("scissors"));

    let paper = document.querySelector("#paper");
    paper.addEventListener("click", ()=> playRound("paper"));







    function playRound(humanChoice) {
    let computerChoice = computerGo()

    let choices = document.createElement("div")
    choices.textContent = `Player chose ${humanChoice}, Computer chose ${computerChoice}`

    let score = document.createElement("div")
    
    let result = document.createElement("div");

    if (humanChoice == computerChoice) {
        tieScore += 1
        result.textContent = `It's a tie! Both players chose ${humanChoice} `
    }

    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore += 1;
    }
    else {result.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    humanScore += 1;}

    round += 1
    score.textContent = `Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`;
    results.innerHTML = '';

    results.append(choices, result, score, `Round: ${round}`);

}
}
playGame()