/*

? Object Literals:

* Object Literals are a simple and concise way to create objects in JavaScript.
* You define an object using curly braces {}, with key-value pairs inside.

*/

const user = {
    username: 'Saurav Jha',
    loginCount: 9, 
    signedIn: true,

    getUserDetails: function () {
        console.log(`Fetched user details: ${this.username}`);
    }
}

// console.log(user.username);
// user.getUserDetails();  

/*
? INSTANCES (.this, new):

* An instance is an individual object created using a constructor function or class. 
* Each instance has its own properties and methods, distinct from other instances.

* this : Refers to the current context or the object from which a method is called. In browser it shows window object and in node environment it shows { } .
* new : 'new' creates a new object, sets 'this' inside the constructor to refer to the new object, and returns the object.
*/

/*
? CONSTRUCTOR FUNCTION:

* Constructor functions are special functions used to create objects in JavaScript.
* They act as blueprints for creating multiple instances of objects with similar properties and methods.

* When a function is invoked with the `new` keyword, it becomes a constructor function.
* The `new` keyword creates a new object and sets `this` inside the constructor to refer to that new object.
* Constructor functions typically start with an uppercase letter to distinguish them from regular functions.
* It provide copy of instance and if we change anything in that copy nothing will happen the original one

Example:
*/

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Hello, ${this.username}!`)
    }

    return this
}

// const userOne = User("Saurav Jha", 12, true)
// const userTwo = User("Javascript", 23, false)
// console.log(userOne);

//! if we won't use new keyword the userTwo will override userOne value.


const userOne = new User("Saurav Jha", 12, true)
const userTwo = new User("Javascript", 23, false)
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.greetings());

//? 'new' keyword creates a new, independent instance, so changes to one instance do not affect others.
/*
* STEP 1 : Create a new instance / object
* STEP 2 : 'new' keyeord called constructor function. packs arguments and returns it
* STEP 3 : 'this' keyword refers/add to the new object created in step 1
* STEP 4 :  Gives the output
*/


console.log(userOne.constructor)