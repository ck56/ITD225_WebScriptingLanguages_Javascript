/*
Exercise 4.6
Rock Paper Scissors game

This is a game between two computer players, where both will make a random selection of either Rock, Paper, or Scissors (alternatively, you could create a version using real player input!). 
Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. You can use JavaScript to create your own version of this game, applying the logic with an if statement. 
Since this project is a little more difficult, here are some suggested steps:

    1. Create an array that contains the variables Rock, Paper, and Scissors.
    2. Set up a variable that generates a random number 0-2 for player1 and then do the same for player 2's selection. The number represents the index values in the array of the 3 items.
    3. Create a variable to hold a response message to the game user. This can show the random results for both players and then also the result for the computer of the matching item from the array.
    4. Create a condition to handle player1's and player2's selections. If both are the same, this results in a tie.
    5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, 
    but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
    6. Add a new output message that shows each player's selection and the result of the game.
*/
gameOptions = ["Rock", "Paper", "Scissors"];

const gameOption1 = gameOptions.indexOf("Rock"); //0
const gameOption2 = gameOptions.indexOf("Paper"); //1
const gameOption3 = gameOptions.indexOf("Scissors"); //2

let player1Number = Math.random();
player1Number = player1Number * 3;
player1Number = Math.floor(player1Number);

let player2Number = Math.random();
player2Number = player2Number * 3;
player2Number = Math.floor(player2Number);

let player1Result = gameOptions[player1Number];
let player2Result = gameOptions[player2Number];

console.log(`Player 1 has chosen ${player1Result} and Player 2 has chosen ${player2Result}...`);

if (player1Result === player2Result) {
    console.log("The game is a tie!");
} else if(player1Result == "Rock" && player2Result == "Scissors"){
    console.log("Player 1 has won the game!");
} else if(player1Result == "Scissors" && player2Result == "Paper"){
    console.log("Player 1 has won the game!");
} else if(player1Result == "Paper" && player2Result == "Rock"){
    console.log("Player 1 has won the game!");
} else if(player1Result == "Scissors" && player2Result == "Rock"){
    console.log("Player 2 has won the game!");
} else if(player1Result == "Paper" && player2Result == "Scissors"){
    console.log("Player 2 has won the game!");
} else if(player1Result == "Rock" && player2Result == "Paper"){
    console.log("Player 2 has won the game!");
}