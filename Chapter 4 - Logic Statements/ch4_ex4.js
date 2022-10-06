/*
Practice exercise 4.4

As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.random() will return a random number in 
the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the 
result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number 
between 0 and 9:

// random number between 0 and 1
let randomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10; 
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber); 

In this exercise, we'll create a Magic 8-Ball random answer generator:

    1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, 
    for 6 possible results. You can increase this number as you add more results.
    2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
    3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
    4. Create a variable to hold the end response, which should be a sentence printed for the user. 
    You can assign different string values for each case, assigning new values depending on the results from the random value.
    5. Output the user's original question, plus the randomly selected case response, 
    to the console after the user enters their question.
*/

let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

let question = prompt("What is your question for the Magic 8-Ball?");
switch (randomNumber) {
    case 0:
        let response0 = "Sure.";
        console.log(`${question} - ${response0}`);
        break;
    case 1:
        let response1 = "Yes.";
        console.log(`${question} - ${response1}`);
        break;
    case 2:
        let response2 = "No.";
        console.log(`${question} - ${response2}`);
        break;
    case 3:
        let response3 = "Maybe.";
        console.log(`${question} - ${response3}`);
        break;
    case 4:
        let response4 = "Doubtful.";
        console.log(`${question} - ${response4}`);
        break;
    case 5:
        let response5 = "It is certain.";
        console.log(`${question} - ${response5}`);
        break;
    default:
        console.log("Please try again.");
        break;                    
}