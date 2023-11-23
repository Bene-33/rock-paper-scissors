const rounds = 5;
let playerScore = 0;
let computerScore = 0;

const selection = ["rock","paper","scissors"]; 
let computerSelection = "";
let playerSelection = "";


const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissors')

buttonRock.addEventListener('click', () => {
    playerSelection ="rock";
    computerChoice();
    playRound();
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(playerScore);
})

buttonPaper.addEventListener('click', () => {
    playerSelection ="paper";
    computerChoice();
    playRound();    
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(playerScore);
})

buttonScissors.addEventListener('click', () => {
    playerSelection ="scissors";
    computerChoice();
    playRound();    
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(playerScore);
})

//this function pseudo random select a computer result
function computerChoice() {
    compChoice = Math.floor(Math.random() * selection.length);
    computerSelection = selection[compChoice];
    }

//game function to select who beets who
function playRound(){
    if (computerSelection === playerSelection){
        return{
            message: "draw",
        };
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        playerScore++;
        return{
            message: "you won, rock beats scissors",
        };
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        playerScore++;
        return{
            message: "you won, paper beats rock",
        };
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        playerScore++;
        return{
            message: "you won, scissors beats paper",
        };
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        computerScore++;
        return{
            message: "you lost, rock beats scissors",
        };
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        computerScore++;
        return{
            message: "you lost, paper beats rock"
        };
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        computerScore++;
        return{
            message: "you lost, scissors beats paper"
        };
    }
    else {
        return{
            message: "something went wrong",
        };
    }      
}

//announce the game winner 
function announceFinalResult(){
    if(i=rounds-1){ //
        if(playerScore > computerScore){
            return{
                message: "you smashed the computer and won",
            };
        }
        else if(computerScore > playerScore){
            return{
                message: "the computer smashed you and won",
            };
        }
        else if(computerScore === playerScore){
            return{
                message: "its a draw and noone won",
            };
        }
    }
}
