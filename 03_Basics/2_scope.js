// Scope: Scope refers to the accessibility or visibility of variables, functions, and objects in a particular part of your code during runtime.

// let a = 10;      // Global scope (block scoped for 'let')
// const b = 20;    // Global scope (block scoped for 'const')
// var c = 30;      // Global scope (function scoped for 'var')

// console.log(a);  // Output: 10
// console.log(b);  // Output: 20
// console.log(c);  // Output: 30

var c = 300;     // Re-declaring 'c' in global scope
let a = 200;     // Error: Cannot re-declare 'a' in the same scope

if (true) {
    let a = 10;       // Block scope (accessible only within this block)
    const b = 20;     // Block scope (accessible only within this block)
    var c = 30;       // Function scope (accessible outside this block)
    console.log("Inside let ", a);  // Output: 10
    console.log("Inside var ", c);   // Output: 30
}

// Outside block scope, 'b' and the inner 'a' are not accessible.
// 'c' is accessible since it was declared with 'var' inside the block.
console.log("Outside let ", a); // Output: 200 (global 'a')
console.log("Outside var ", c);  // Output: 30 (global 'c')

// This code demonstrates the concept of scope in JavaScript. 
// Variables 'a', 'b', and 'c' are declared globally. 
// 'let' and 'const' are block-scoped, meaning they are not accessible outside of their block, 
// while 'var' is function-scoped and can be accessed globally even if declared inside a block.
// The console logs show the accessibility of these variables inside and outside of the block.
// Avoid using "var" rather use "let" & "const"
