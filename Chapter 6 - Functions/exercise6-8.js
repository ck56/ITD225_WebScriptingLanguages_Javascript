/*
Set timeout order

Use the arrow format to create functions that output the values one and two to the
console.

Create a third function that outputs the value three to the console, and
then invokes the first two functions. Create a fourth function that outputs the word
four to the console and also use setTimeout() to invoke the first function
immediately and then the third function.

What does your output look like in the
console? Try to get the console to output:

	Four
	Three
	One
	Two
	One
*/	

let valueOne = (i) => {
	console.log(i);
}
valueOne("One");

let valueTwo = (i) => {
	console.log(i);
}
valueTwo("Two");

let valueThree = (i) => {
	console.log(i);
}
valueThree("Three");