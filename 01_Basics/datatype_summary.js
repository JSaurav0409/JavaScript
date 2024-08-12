// Datatypes are mainly of two type : Primitive and Reference(Non-Primitive)

// Primitive types consists 7 datatype
/*
 * String
 * Number    
 * Boolean
 * Null
 * undefined
 * Symbol
 * BigInt
*/

// String
let userName = "Saurav Jha"
console.log(typeof (userName)); // String

// Numbers
const score = 100
const scoreValue = 110.23
console.log(typeof (score)); // Numbers
console.log(typeof (scoreValue)); // Numbers

// Boolean
let isLoggedIn = false
console.log(typeof (isLoggedIn)); // Boolean

// Null
let outsideTemperatures = null
console.log(typeof (outsideTemperatures)); // Object


// Undefined
let userEmail;
console.log(typeof (userEmail)); // undefined


// Symbol 
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
console.log(typeof (id)); // Symbol
console.log(typeof (anotherId)); // Symbol


// BigInt
const bigIntValue = 1000000000000000000n
console.log(typeof (bigIntValue)); // bigint



// Reference Type (Non-Primitive type):
/*
 * Array
 * Object
 * Functions
*/

const Heroes = ["IronMan", "Captain America", "SpiderMan"];
console.log(typeof (Heroes)); // Object


let myObj = {
    name: "Saurav Jha",
    age: 23,
    isLoggedIn: false,
}
console.log(typeof (myObj)); // Object

const myFunc = function () {
    console.log("Hello World");
}

console.log(typeof (myFunc)); // Function

/**********************************************/

// Stack (Primitive Datatype), Heap (Non-Primitive Datatype)


let myYoutube = "Saurav Jha"

let anotherName = myYoutube
anotherName = "Daaku Roasting"

console.log(myYoutube);
console.log(anotherName);


let userOne = {
    name: "Saurav Jha",
    age: 22,
    UPI_id : "userone@ybl",
}

let userTwo = userOne



userTwo.UPI_id = "usertwo@ybl"
console.log(userOne);
console.log(userTwo);