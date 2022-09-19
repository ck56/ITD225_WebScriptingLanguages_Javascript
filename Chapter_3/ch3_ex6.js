/*
	Company product catalog
*/

//	1. Create an array to hold an inventory of store items.
let storeInventory = [];

/*2. Create three items, each having the properties of name, model, cost, and
	   quantity.*/

let item1 = {
	name: "Pilot",
	model: "Decimo",
	cost: 150,
	quantity: 1
};

let item2 = {
	name: "Platinum",
	model: "3776 Century",
	cost: 200,
	quantity: 1
};

let item3 = {
	name: "Sailor",
	model: "Pro Gear Slim",
	cost: 180,
	quantity: 1
};

// 3. Add all three objects to the main array using an array method, and then
// log the inventory array to the console.
storeInventory.push(item1, item2, item3);
console.log(storeInventory);

// 4. Access the quantity element of your third item, and log it to the console.
// 	   Experiment by adding and accessing more elements within your data structure.
console.log(storeInventory[2].quantity);
