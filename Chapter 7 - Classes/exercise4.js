/*
Employee tracking app 

Create a class to track the employees of a company: 

1. Use first names, last names, and the number of years worked as values in the 
   constructor. 

2. Create two or more people with values for their first names, last names, and 
   the number of years they've worked at the company. Add the people into an 
   array. 

3. Set up a prototype to return the details of the person's first and last names 
   and how long they've worked at the company. 

4. Iterate the contents of the array to output the results into the console, 
   adding some text to make the output a full sentence.
*/

class Employees {
   constructor(firstName, lastName, yearsWorked) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearsWorked = yearsWorked;
   }
} //end

Employees.prototype.introduce = function () {
   return this.firstName + " " + this.lastName + " has worked for the company " + this.yearsWorked + " years.";
} //end

let emp1 = new Employees("Carl", "Smith", "9");
let emp2 = new Employees("John", "Doe", "2");

let labels = ["First Name", "Last Name", "Years Worked"];

let employeeArray = [];
employeeArray.push(emp1, emp2);

console.table(employeeArray);

employeeArray.forEach((person) => {
   console.log(person.introduce());
});


