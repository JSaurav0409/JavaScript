function User(email, password) {
    this._email = email;
    this._password = password;

    // Before the introduction of the get() and set() methods in ES6,
    // we used Object.defineProperty() on the prototype or directly on the object
    // to define getters and setters for encapsulating and controlling access
    // to object properties.
    
    // Define a getter and setter for the 'email' property
    Object.defineProperty(this, 'email', {
        // Getter: Returns the email in uppercase when accessed
        get: function () {
            return this._email.toUpperCase();
        },
        // Setter: Allows the email property to be modified
        set: function (value) {
            this._email = value;
        }
    });

    // Define a getter and setter for the 'password' property
    Object.defineProperty(this, 'password', {
        // Getter: Returns the password in uppercase when accessed
        get: function () {
            return this._password.toUpperCase();
        },
        // Setter: Allows the password property to be modified
        set: function (value) {
            this._password = value;
        }
    });
}

const userOne = new User("userOne@email.com", 'password123');
console.log(userOne.email);    // Output: USERONE@EMAIL.COM
console.log(userOne.password); // Output: PASSWORD123
