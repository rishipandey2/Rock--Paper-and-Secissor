// Differn choices to choose
let choices = ['Rock', 'Paper','Scissor'];

// Choose it
let userChoice = prompt("Put your choice")

// Computer's choice
let computerChoice = (choices[Math.floor(Math.random()* choices.length)]);
if(userChoice=='Paper'&& computerChoice=='Scissor'){
    console.log("Ooh! Computer wins");

}else if(userChoice=='Rock'&& computerChoice=='Scissor'){
    console.log("Hurray! You win");

}else if(userChoice=='Paper'&& computerChoice=='Rock'){
    console.log("Hurray! You win");

}else if(userChoice=='Paper'&& computerChoice=='Paper'){
    console.log("It's Draw");

}else if(userChoice=='Rock'&& computerChoice=='Rock'){
    console.log("It's Draw");
    
}else if(userChoice=='Scissor'&& computerChoice=='Scissor'){
    console.log("It's Draw");
}
