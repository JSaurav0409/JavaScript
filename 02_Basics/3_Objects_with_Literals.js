const mysmb1 = Symbol("Key1");

const JS_User = {
    name: "Saurav Jha",
    "full name": "Saurav Jha",
    [mysmb1]: "Mykey1", // To insert any symbol we use []
    age: 23,
    location: "Mumbai",
    email: "saurav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Accessing properties
// console.log(JS_User.age); // Using dot notation
// console.log(JS_User["full name"]); // Using bracket notation for a property with a space
// console.log(JS_User[mysmb1]); // Accessing a symbol property using []
// console.log(typeof JS_User[mysmb1]); // Checking the type of the symbol property value


// How to change the value of element

JS_User.email = "saurav@openAI.com"

// Object.freeze(JS_User) // freeze the object, changes after this line do not applies

JS_User.email = "saurav@microsoft.com"
// console.log(JS_User);


JS_User.greeting = function () {
    console.log("Hello, JS_User")
}

JS_User.greetingTwo = function () {
    console.log(`Hello, JS_User, ${this.name}`)
}

console.log(JS_User.greeting());
console.log(JS_User.greetingTwo());

