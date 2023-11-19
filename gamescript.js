const rounds = 5;
let playerScore = 0;
let computerScore = 0;

function game(){

    // play [rounds] of the game
    for(let i = 0; i < rounds; i++){
        const selection = [" rock"," paper"," scissors"]; // space to use it with the player prompt
        let playerChoice = prompt(`Choose between${selection} and beat the computer`,"");
        let computerSelection = computerChoice();
        let playerSelection = playerChoice.toLowerCase();

        //this function pseudo random select a computer result
        function computerChoice() {
            compChoice = Math.floor(Math.random() * selection.length);
            return selection[compChoice];
            }

        //game function to select who beets who
        function playRound(){
            if (computerSelection.substr(1) === playerSelection){
                return{
                    message: "draw",
                };
            }
            else if (computerSelection.substr(1) === "scissors" && playerSelection === "rock"){
                playerScore++;
                return{
                    message: "you won, rock beats scissors",
                };
            }
            else if (computerSelection.substr(1) === "rock" && playerSelection === "paper"){
                playerScore++;
                return{
                    message: "you won, paper beats rock",
                };
            }
            else if (computerSelection.substr(1) === "paper" && playerSelection === "scissors"){
                playerScore++;
                return{
                    message: "you won, scissors beats paper",
                };
            }
            else if (computerSelection.substr(1) === "rock" && playerSelection === "scissors"){
                computerScore++;
                return{
                    message: "you lost, rock beats scissors",
                };
            }
            else if (computerSelection.substr(1) === "paper" && playerSelection === "rock"){
                computerScore++;
                return{
                    message: "you lost, paper beats rock"
                };
            }
            else if (computerSelection.substr(1) === "scissors" && playerSelection === "paper"){
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
        
        const getRoundResult = playRound();
        let roundResult = getRoundResult.message;

        console.log(roundResult)
        console.log(computerSelection, playerSelection)
        console.log(i)
        console.log(playerScore)
        console.log(computerScore)
    }

    //announce the game winner 
    function announceResult(){
        if(i=rounds-1){
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
    const getAnnounceResult = announceResult();
    let finalResult = getAnnounceResult.message;
    console.log(finalResult)
} 

game()