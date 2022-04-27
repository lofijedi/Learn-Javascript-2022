// Let, Const, and Var

// var = old school way of doing it, problems existed.
// const = can't be updated OR re-declared. Try to use const as much as possible to avoid variable mutations in the code.
// let = can't be re-declared, but CAN be updated. Only use when you know the variable will need to be changed in the future.


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; 
// Uncaught TypeError: Assignment to constant variable.

// const job; 
// Uncaught SyntaxError: Missing initializer in const declaration. (Needs inital value to happen before statement, ex. job = Chef)

var job = "programmer";
job = "teacher";

lastName = "Werbenjägermanjensen";
console.log(lastName);