/*
* Getters and Setters in JavaScript are special methods that 
* allow you to get and set the values of an object's properties. 
* They provide a way to control access to the properties of an 
* object, enabling you to add additional logic when a property 
* is accessed or modified.
*/

class User {
    constructor(name, email, password) {
        this._name = name; // Using _name to indicate the internal property
        this._email = email;
        this._password = password;
    }

    // Getter for name: Adds custom logic when accessing the name
    get name() {
        return `${this._name}nhniks`; // Appends 'nhniks' to the name
    }

    // Setter for name: Allows modification of the internal _name property
    set name(value) { 
        this._name = value;
    }

    // Getter for password: Adds custom logic when accessing the password
    get password() {
        return `${this._password}mcnvm`; // Appends 'mcnvm' to the password
    }

    // Setter for password: Allows modification of the internal _password property
    set password(value) {
        this._password = value;
    }
}

const userOne = new User('Saurav Jha', 'saurav@gmail.com', 'password123');

console.log(userOne.name);      // Output: Saurav Jhanhniks
console.log(userOne.password);  // Output: password123mcnvm
