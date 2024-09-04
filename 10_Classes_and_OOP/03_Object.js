// In javascript everything ('string', 'Array', 'function') everything is an object .
// ('String', 'Array', 'function') --> Object --> null


function multipleBy5(num) {
    return num * 5 ;
}
multipleBy5.power = 2

// console.log(multipleBy5(4));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype)


// Understanding new keyword

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

//? Adding our own method

createUser.prototype.printMe = function () {
    console.log(`Hello, ${this.username}`)
}

// calling our function

// const user = createUser("Saurav Jha", 25)

// user.printMe();

//! The above code which prints the message won't work because it does not know how to link `createUser` with our `printMe` method.

//? So how we will link 'creatUser' with our 'printMe' method ?
//* It's really simple we will use 'new' keyword

// calling our function with 'new' keyword

const user = new createUser("Saurav Jha", 25)

user.printMe();

/*

! Here's what happens behind the scenes when the new keyword is used:

? A new object is created : The new keyword initiates the creation of a new JavaScript object.

* A prototype is linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

? The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

* The new object is returned : After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/