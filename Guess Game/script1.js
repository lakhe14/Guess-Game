// GAME
let GameNUm = 25;
let Guess = prompt("Guess the game number");

while (GameNUm != Guess) {
  Guess = prompt("You have entered a wrong number.Guess Again");
}
console.log("Congratulation,you have entered a correct number");
