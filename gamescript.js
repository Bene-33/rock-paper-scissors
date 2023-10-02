const rounds = 5;

function game(){
for(let i = 0; i< rounds; i++){
    const selection = [" rock"," paper"," scissors"]; // space to use it with the player prompt 
    let playerChoice = "rock"; //prompt(`Choose between${selection} and beat the computer`,"")
    let computerSelection = " scissors"//computerChoice(selection);
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
        if (computerSelection.substr(1) === playerSelection){
            return "draw"
        }
            else if 
            (computerSelection.substr(1) === "scissors" && playerSelection === "rock"){
                return "you won, rock beats scissors";
                playerScore++;
                
            }
            else if (computerSelection.substr(1) === "rock" && playerSelection === "paper"){
                return "you won, paper beats rock";

            }
            else if (computerSelection.substr(1) === "paper" && playerSelection === "scissors"){
                return "you won, scissors beats paper";
                
            }
            else if (computerSelection.substr(1) === "rock" && playerSelection === "scissors"){
                return "you lost, rock beats scissors";
                
            }
            else if (computerSelection.substr(1) === "paper" && playerSelection === "rock"){
                return "you lost, paper beats rock";
                
            }
            else if (computerSelection.substr(1) === "scissors" && playerSelection === "paper"){
                return "you lost, scissors beats paper";
                
            }
            else {
                return "something went wrong";
            }

        }
    

console.log(computerSelection, playerSelection)
console.log(playRound(computerSelection, playerSelection))
console.log(playerScore)
console.log(computerScore)
console.log(i)
    }
    function announceResult(playerScore,computerScore){
        if(i=4){
            if(playerScore > computerScore){
                return "you smashed the computer and won"
            }
            else if(computerScore > playerScore){
                return "the computer smashed you and won"
            }
            else if(computerScore === playerScore){
                return "its a draw and noone won"
            }
            }
        }
        console.log(announceResult())
} 


game()
