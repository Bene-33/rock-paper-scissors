const selection = ["rock","paper","scissors"];
const playerChoice = "RoCk"
const cChoice = computerChoice(selection);
let pChoice = playerChoice.toLowerCase();

//this function pseudo random select a computer result
function computerChoice(string) {
    compChoice = Math.floor(Math.random() * string.length);
    return string[compChoice];
}

//game function to select who beets who
function playRound(cChoice, pChoice){
    if (cChoice === pChoice){
        return "draw"
    }
        else if (cChoice === "scissors" && pChoice === "rock"){
            return "you won, rock beats scissors";
        }
        else if (cChoice === "rock" && pChoice === "paper"){
            return "you won, paper beats rock";
        }
        else if (cChoice === "paper" && pChoice === "scissors"){
            return "you won, scissors beats paper";
        }
    else {
        return "computer won"
    }
}

console.log(cChoice)
console.log(pChoice)
console.log(playRound(cChoice, pChoice))