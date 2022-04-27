////////////////////////////////////////

// // Values and Variables Assignment

// // Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country.
// let country = "United States";
// let continent = "North America";
// let population = 329.5;

// // Log their values to the console.
// console.log(country);
// console.log(continent);
// console.log(population);


////////////////////////////////////////


// // Data Type Assignment

// // Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.
// let isIsland = false;
// let language;

// // Log the types of 'isIsland', 'population', 'country' and 'language' to the console.
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


////////////////////////////////////////


// Let, Const, and Var Assignment

// Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one).
let language = "English";

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = "United States";
const continent = "North America";
let population = 329.5;
const isIsland = false;

// Try to change one of the changed variables now, and observe what happens.
const country = "United States II";
// Uncaught SyntaxError: Identifier 'country' has already been declared. Const can't be re-declared.

country = "United States II";
// Uncaught TypeError: Assignment to constant variable. Const can't be updated either.

population = 1000000000;
console.log(population);
// Population updated to 1,000,000,000 because it's a let assignment, meaning I can updated whenever I want. I just can't re-declare it like below.

let population = 1000000000;
console.log(population);
// Uncaught SyntaxError: Identifier 'population' has already been declared. Let can't be re-declared, only updated.


////////////////////////////////////////


// Basic Operators

