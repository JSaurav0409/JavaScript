// Classes were introduced in JavaScript with ES6, providing a cleaner syntax for creating objects and working with inheritance.
// It's important to note that classes in JavaScript are just syntactic sugar over the existing prototype-based inheritance.

/*
    ! Syntax of Class in JavaScript
    class ClassName {
        constructor(parameters) {
            * Initialize properties here
        }

        * Define methods here
    }
*/

class User {
    constructor(username, email, password) {
        // Initializing instance properties
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method to return an encrypted version of the password
    encryptedPassword() {
        return `${this.password}123abc`;
    }

    // Method to capitalize the username
    capitalizeUsername() {
        return this.username.toUpperCase();
    }
}

// Creating a new instance of the User class
const userOne = new User("Saurav Jha", "sauravjha@mail.com", 1234);

// Output the encrypted password to the console
console.log(`Your encrypted password is ${userOne.encryptedPassword()}`);

// Output the capitalized username to the console
console.log(`Your username is ${userOne.capitalizeUsername()}`);

// Behind the scenes, the class is equivalent to the following prototype-based approach:

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Adding methods to the prototype
User.prototype.encryptedPassword = function() {
    return `${this.password}123abc`;
};

User.prototype.capitalizeUsername = function() {
    return this.username.toUpperCase();
};

// Creating a new instance using the constructor function
const userTwo = new User("User 2", "usertwo@mail.com", 1234);

// Output the capitalized username to the console
console.log(userTwo.capitalizeUsername());

// Output the encrypted password to the console
console.log(userTwo.encryptedPassword());
