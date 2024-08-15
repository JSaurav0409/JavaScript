// Example to demonstrate the usage of `this` in different contexts in JavaScript

const user = {
    username: 'Saurav Jha',
    email: 'sauravjha@gmail.com',

    // Method in an object where `this` refers to the object itself
    welcomeMessage: function () {
        console.log(`Welcome, ${this.username}!`); // `this.username` refers to `user.username`
        console.log(this); // `this` refers to the `user` object
    }
};

// user.welcomeMessage(); // Calls the method, `this` refers to `user` object
// user.username = 'RDJ';
// user.welcomeMessage(); // Now `this.username` refers to the updated `username` ('RDJ')

// Global context in different environments
// console.log(this); // Global context: `this` is `{}` in Node.js, `window` in the browser

// function chai() {
//     let username = 'RDJ';
//     console.log(this.username); // `this` refers to the global object (Node.js: `global`, Browser: `window`)
// }

// chai(); // Invoking the function in the global context

// const chai = function () {
//     let username = 'RDJ';
//     console.log(this.username); // `this` refers to the global object (Node.js: `
// }

// chai();


// Arrow Function : const name = () => {}


// const chai = () => {
//     let username = 'RDJ';
//     console.log(this); // `this` refers to the global object (Node.js: `
// }
//     chai();


// * Explicit Return

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(5, 7));

// * Implicit Return : Implicit return allows you to skip the return keyword when there's a single expression, making the code cleaner and more readable.

// const addTwo = (num1, num2) => (num1 + num2) // we can write this wven without parenthesis
// console.log(addTwo(5, 7)); // Output: 12

const addTwo = (num1, num2) => ({username: "hitesh"}) // we have to use () for object in Implicit return


console.log(addTwo(3, 4))