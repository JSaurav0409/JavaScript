const score = 400;
// console.log(score); // Output: 400

const balance = new Number(100);
// console.log(balance); // Output: [Number: 100]

// Converts the number to a string and returns the length of the string
// console.log(balance.toString().length); // Output: 3

// The number with 2 decimal places
// console.log(balance.toFixed(2)); // Output: '100.00'

const otherNumber = 123.34345;
// Formats the number to 4 significant digits
// console.log(otherNumber.toPrecision(4)); // Output: '123.3'

const hundreds = 1000000;
// Formats the number according to the Indian locale, adding commas
// console.log(hundreds.toLocaleString('en-IN')); // Output: '10,00,000'


// -------------------------- MATHS -------------------------------------------------- //



console.log(Math); // Outputs the Math object, which provides mathematical functions and constants.

console.log(Math.abs(-5));
// Converts a negative number into its positive equivalent. Output: 5

console.log(Math.round(4.2));
// Rounds the number to the nearest integer. Output: 4

console.log(Math.floor(4.6));
// Rounds the number down to the nearest integer (toward negative infinity). Output: 4

console.log(Math.ceil(4.1));
// Rounds the number up to the nearest integer (toward positive infinity). Output: 5

console.log(Math.min(3, 4, 5, 6, 7));
// Returns the smallest value from the given numbers. Output: 3

console.log(Math.max(3, 4, 5, 6, 7));
// Returns the largest value from the given numbers. Output: 7

console.log(Math.pow(2, 3));
// Raises 2 to the power of 3 (2^3). Output: 8


console.log(Math.random()); 
// Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log(Math.round(Math.random() * 10 + 1)); 
// Generates a random integer between 1 and 11 by multiplying a random number by 10, adding 1, and then rounding.

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * 10 + min)); 
// Generates a random integer between 10 and 19 by multiplying a random number by 10, adding the minimum value (10), and then rounding down.