/*
Create a class that contains properties for different animal species and the 
sound that each species makes, and create two (or more) animals: 

1. Create a method that prints a given animal and its sound. 

2. Add a prototype with another action for the animal. 

3. Output an entire animal object into the console.
*/

class Animal {
    constructor(species,fur, sound, feet, tail) {
        this.species = species;
        this.fur = fur;
        this.sound = sound;
        this.feet = feet;
        this.tail = tail;  
    }

    animalSound() {
        console.log(this.species + " makes this sound " + this.sound);
    }
}

Animal.prototype.teeth = "yes";

let a1 = new Animal("cat", "yes", "meow", "yes", "yes");

let a2 = new Animal("dog", "yes", "bark", "yes", "yes");

let a3 = new Animal("bird", "no", "chirp", "yes", "yes");



a3.teeth = "no";

a1.animalSound();
a2.animalSound();
a3.animalSound();

console.log(Animal);
console.log(a1);
console.log(a2);
console.log(a3);