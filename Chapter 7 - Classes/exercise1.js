/*
1. Create a class for Person including the constructor for firstname and 
   lastname. 

2. Create a variable and assign a value of the new Person object using your 
   friend's first and last names. 

3. Now add a second variable with another friend's name using their first name 
   and last name. 

4. Output both friends into the console with a greeting of hello .
*/

class Person {
   constructor(firstName, lastName,) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   greet() {
      console.log("Hi there, ", this.firstName);
   }
}

let p = new Person("Andy", "Northard");
let p2 = new Person("Rachel", "King");

p.greet();
p2.greet();