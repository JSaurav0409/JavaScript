// Scope: Scope refers to the accessibility or visibility of variables, functions, and objects in a particular part of your code during runtime.

// let a = 10;      // Global scope (block scoped for 'let')
// const b = 20;    // Global scope (block scoped for 'const')
// var c = 30;      // Global scope (function scoped for 'var')

// console.log(a);  // Output: 10
// console.log(b);  // Output: 20
// console.log(c);  // Output: 30

var c = 300;     // Re-declaring 'c' in global scope
let a = 200;     // ! Error: Cannot re-declare 'a' in the same scope

if (true) {
    let a = 10;       // Block scope (accessible only within this block)
    const b = 20;     // Block scope (accessible only within this block)
    var c = 30;       // Function scope (accessible outside this block)
    // console.log("Inside let ", a);  // Output: 10
    // console.log("Inside var ", c);   // Output: 30
}

// Outside block scope, 'b' and the inner 'a' are not accessible.
// 'c' is accessible since it was declared with 'var' inside the block.
// console.log("Outside let ", a); // Output: 200 (global 'a')
// console.log("Outside var ", c);  // Output: 30 (global 'c')

//* This code demonstrates the concept of scope in JavaScript.
//* Variables 'a', 'b', and 'c' are declared globally.
//* 'let' and 'const' are block-scoped, meaning they are not accessible outside of their block,
//* while 'var' is function-scoped and can be accessed globally even if declared inside a block.
//* The console logs show the accessibility of these variables inside and outside of the block.
//! Avoid using "var" rather use "let" & "const"


// * NESTED SCOPE

function one() {
    const userName = "Saurav Jha";  // Variable in the outer function's scope

    function two() {
        const website = "YouTube";  // Variable in the inner function's scope
        console.log(userName);      // Inner function can access variables from the outer function's scope
    }

    // console.log(website); // Error: website is not defined (Outer function cannot access variables from the inner function's scope)
    
    two(); // Calling the inner function
// *Since 'two()' is not called, nothing happens here 
}

// one(); // Output: "Saurav Jha"



if (true) {
    const username = "Saurav Jha"
    if (true) { 
        const website = "YouTube"
        // console.log(username); // Output: "Saurav Jha"
    }
    // console.log(website); // Error: website is not defined (Inner if block cannot access
}

// console.log(username); // Error: username is not defined (Inner if block cannot access


// *This code demonstrates the concept of nested scope in JavaScript.
// *Variables 'username' and 'website' are declared inside if blocks.



//!----------------------- Hoisting --------------------------------------------------!//

// There are two ways to declare a function in JavaScript

//* 1. Function Declaration

function addOne(num) {
    return num + 1;
}

console.log(addOne(5)); // Output: 6

// In this method, we can execute the function before or after its definition. 
// This is possible because function declarations are hoisted, meaning the function definition is moved to the top of its scope at runtime.

//* 2. Function Expression
const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5)); // Output: 7

// In this method, the function must be executed after the initialization (i.e., after the function expression is assigned to the variable). 
// This is because function expressions are not hoisted like function declarations.
