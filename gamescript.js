const selection = ["rock","paper","scissors"] 

function computerChoice(selection) {
    compChoice = Math.floor(Math.random() * selection.length);
    return selection[compChoice];
}

console.log(computerChoice(selection))

function playersChoice(word){
    return word.toLowerCase()
    
}

console.log(playersChoice("rock"))