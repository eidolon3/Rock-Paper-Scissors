console.log("Hello World")

function getComputerChoice() {
    let number = Math.random();
    if (number >= 0.667) {
        return "Rock";
    }
    else if (number >= 0.33) {
        return "Paper";
    }
    else if (number >= 0) {
        return "Scissors";
    }


}

console.log(getComputerChoice())