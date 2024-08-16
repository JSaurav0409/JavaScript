//* if-else statement allows you to execute different blocks of code based on whether a specified condition is true or false.

const temperature = 41; // Declare a constant variable 'temperature' with a value of 41

// Check if temperature is exactly 40
// if (temperature === 40) {
//     console.log("Temperature is 40"); // Executes if temperature is exactly 40
// } else {
//     console.log("Temperature is not 40"); // Executes if temperature is not 40
// }

// // Always executes after the if-else block
// console.log("Execute");

// Comparison Operators to remember:
// <, >, <=, >=  - Basic comparisons (less than, greater than, etc.)
// ==, !=        - Loose equality/inequality (compares value only, not type)
// ===, !==      - Strict equality/inequality (compares both value and type)


const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);


const balance = 1000;

// Bad Practice : if(balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("between 500 and 750");
// } else if (balance < 900) {
//     console.log("between 750 and 900");
// } else {
//     console.log("balance is greater than 900");
    
// }

const userloggedin = true;
const debitcard = true;

//? (&&) checks that all conditions are true
// if (condition1 && condition2) {
    // This block runs only if both condition1 and condition2 are true
// }

if (userloggedin && debitcard) {
    console.log("Allow to buy!"); // Executes if both userloggedin and debitcard are true
}

const loggedInFromGoogle = true;
const loggedinFromEmail = true;

//? (||) checks that at least one of the conditions is true
// if (condition1 || condition2) {
//  This block runs if either condition1 or condition2 (or both) are true
// }

if (loggedInFromGoogle || loggedinFromEmail) {
    console.log("User logged in"); // Executes if either loggedInFromGoogle or loggedinFromEmail is true
}
