/*
Get your friend's full name: 

1. Using the Person class from exercise 1, add a method called fullname, 
   which returns the concatenated value of firstname and lastname when invoked. 

2. Create values for person1 and person2 using two friends' first and last names. 
3. Using the fullname method within the class, return the full name of one or 
   both people.
*/

class Person {
   constructor(firstName, lastName,) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   fullName() {
      console.log(this.firstName + " " + this.lastName);
   }
}

let p = new Person("Andy", "Northard");
let p2 = new Person("Rachel", "King");

p.fullName();
p2.fullName();