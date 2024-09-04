// Static Property: A static property in JavaScript belongs to the class itself, not to instances of the class.
// This means you can access a static property directly using the class name, but not through instances of the class.

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    // Static method that belongs to the class, not to instances
    static createUniqueId() {
        return `123`;
    }
}

const userOne = new User("Saurav Jha");

// Accessing the static method using the class name
console.log(User.createUniqueId()); // Output: 123

// Attempting to access the static method through an instance will result in an error
// console.log(userOne.createUniqueId()); // This will throw an error: userOne.createUniqueId is not a function

class Teacher extends User {
    constructor(username, subject) { 
        super(username);
        this.subject = subject;
    }
}

const teacherOne = new Teacher("Hitesh Sir", "JavaScript");

// Accessing the inherited method from the parent class
teacherOne.logMe(); // Output: Username is Hitesh Sir

// Attempting to access the static method through an instance of the subclass will also result in an error
// console.log(teacherOne.createUniqueId()); // This will throw an error: teacherOne.createUniqueId is not a function

// Static methods are only accessible through the class itself, not through instances or subclasses
console.log(User.createUniqueId()); // Output: 123
console.log(Teacher.createUniqueId()); // Output: 123
