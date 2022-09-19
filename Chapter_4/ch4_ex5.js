/*
Practice exercise 4.5

    1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
    2. Convert the prompt response to a number data type
    3. Create a variable to use for the output message containing the value "My Selection: "
    4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
    5. Use the switch break to add combined results for prizes
    6. Output the message back to the user by concatenating your prize variable strings and the output message string
*/

let prizeNumber = Number(prompt("Choose a number between 0 and 10:"));
let message = `My Selection: ${prizeNumber}`;

switch (prizeNumber) {
    case 0:
        console.log(`${message} - You win a Platinum Preppy!`);
        break;
    case 1:
        console.log(`${message} - You win a TWSBI Eco!`);
        break;   
    case 2:
        console.log(`${message} - You win a Sailor Pro Gear Slim!`);
        break;     
    case 3:
        console.log(`${message} - You win a Pilot Vanishing Point!`);
        break;
    case 4:
        console.log(`${message} - You win a Lamy Safari!`);
        break;
    case 5:
        console.log(`${message} - You win a Platinum 3776 Century!`);
    case 6:
        console.log(`${message} - You win a Platinum 3776 Century Special Edition!`);
        break;
    case 7:
        console.log(`${message} - You win a Pilot Kakuno!`);
    case 8:
        console.log(`${message} - You win a Pilot Metropolitan!`);
        break;
    case 9:
        console.log(`${message} - You win a Visconti Homo Sapiens Bronze Age!`);
        break;  
    case 10:
        console.log(`${message} - You win a Kaweco Sport!`);
        break;     
    default:
        console.log("Sorry, that's not a qualifying number. Please try again.");
        break;
}