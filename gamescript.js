const selection = ["rock","paper","scissors"] 

function computerChoice(selection) {
    choice = Math.floor(Math.random() * selection.length);
    return selection[choice];
}

console.log(computerChoice(selection))