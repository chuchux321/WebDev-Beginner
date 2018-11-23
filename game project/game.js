// create secretNumber
//ask user for guess
//check guess

var secretNumber = 4;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
// otherwise, check if higher
// otherwise, check if lower

else if(guess > secretNumber){
    alert("Too high. Guess again");
}

else {
    alert("Too low. Guess again");
}