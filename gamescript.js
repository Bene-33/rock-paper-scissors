const selection = ["rock","paper","scissors"];
const playerChoice = "rock";
let computerSelection = computerChoice(selection);
let playerSelection = playerChoice.toLowerCase();
let playerScore = 0;
let computerScore = 0;

//this function pseudo random select a computer result
function computerChoice(string) {
    compChoice = Math.floor(Math.random() * string.length);
    return string[compChoice];
}

//game function to select who beets who
function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return "draw"
    }
        else if (computerSelection === "scissors" && playerSelection === "rock"){
            return "you won, rock beats scissors";
        }
        else if (computerSelection === "rock" && playerSelection === "paper"){
            return "you won, paper beats rock";
        }
        else if (computerSelection === "paper" && playerSelection === "scissors"){
            return "you won, scissors beats paper";
        }
        else if (computerSelection === "rock" && playerSelection === "scissors"){
            return "you lost, rock beats scissors";
        }
        else if (computerSelection === "paper" && playerSelection === "rock"){
            return "you lost, paper beats rock";
        }
        else if (computerSelection === "scissors" && playerSelection === "paper"){
            return "you lost, scissors beats paper";
        }
        else "error"
}


console.log(computerSelection, playerSelection)
console.log(playRound(computerSelection, playerSelection))
