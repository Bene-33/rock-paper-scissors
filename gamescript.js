const rounds = 5;
let playerScore = 0;
let computerScore = 0;

const selection = ["rock","paper","scissors"]; 
let computerSelection = "";
let playerSelection = "";


const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissors');
const showPlayerSelection = document.querySelector('#playerSelection');
const showComputerSelection = document.querySelector('#computerSelection');
const showPlayerScore = document.querySelector('#playerScore');
const showComputerScore = document.querySelector('#computerScore');
const showRoundResult = document.querySelector('#roundResult');

buttonRock.addEventListener('click', () => {
    playerSelection ="rock";
    computerChoice();
    playRound();
    announceFinalResult();
    showPlayerSelection.textContent ="Rock";
    showComputerSelection.textContent = computerSelection;
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
    showRoundResult.textContent = playRound().message

});

buttonPaper.addEventListener('click', () => {
    playerSelection ="paper";
    computerChoice();
    playRound();
    announceFinalResult();
    showPlayerSelection.textContent ="Paper";
    showComputerSelection.textContent = computerSelection;
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
    showRoundResult.textContent = playRound().message
});

buttonScissors.addEventListener('click', () => {
    playerSelection ="scissors";
    computerChoice();
    playRound();
    announceFinalResult();
    showPlayerSelection.textContent ="Scissors";
    showComputerSelection.textContent = computerSelection;
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
    showRoundResult.textContent = playRound().message
});

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
    if (playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            alert("you won and smashed the computer")
        }
        else if(computerScore > playerScore){
            alert("you lost and got smashed")
        }
    }
}
