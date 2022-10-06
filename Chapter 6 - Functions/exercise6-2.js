/*
  We are going to create a program that will randomly describe an inputted name.

  1. Create an array of descriptive words.

  2. Create a function that contains a prompt asking the user for a name.

  3. Select a random value from the array using Math.random.

  4. Output into the console the prompt value and the randomly selected array value.
     Invoke the function.
*/	 

let descWords = ["tall", "short", "young", "old"];

function adjName() {
  let name = prompt("Please enter a name: ");
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * descWords.length);
  let randomAdj = descWords[randomNumber];
  console.log(name + " is " + randomAdj);
} 

adjName();
