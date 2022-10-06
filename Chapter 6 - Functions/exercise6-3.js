/*
  Create a basic calculator that takes two numbers and one string value indicating an
  operation. If the operation equals add, the two numbers should be added. If the
  operation equals subtract, the two numbers should be subtracted from one another.
  If there is no option specified, the value of the option should be add.

The result of this function needs to be logged. Test your function by invoking it
with different addOrSubs and no op specified.

	1. Set up two variables containing number values.

	2. Set up a variable to hold an op, either + or -.

	3. Create a function that retrieves the two values and the op string value
	   within its parameters. Use those values with a condition to check if the
	 op is + or -, and add or subtract the values accordingly (remember if
	   not presented with a valid op, the function should default to
	   addition).

	4. Within console.log() , call the function using your variables and output the
	   response to the console.

	5. Update the op value to be the other op type— either plus or
	   minus— and call to the function again with the new updated arguments.
*/	   


let num1 = 1;
let num2 = 2;
let operation = "+";

function addOrSub(a, b, op) {
	if (op == "-") {
		let z = a - b;
		console.log(`${a} ${op} ${b} = ${z}`);
	} else {
		z = a + b;
		console.log(`${a} ${op} ${b} = ${z}`);
	}
}

addOrSub(num1, num2, operation);

operation = "-";
addOrSub(num1, num2, operation);