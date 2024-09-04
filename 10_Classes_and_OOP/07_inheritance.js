// We already learned how inheritance works in JavaScript before the introduction of classes in ES6.
// Now, let's explore how we can use classes in ES6 for inheritance.
// In JavaScript after ES6, the introduction of classes brought some new keywords like extends and super, which simplify inheritance.

// extends: The extends keyword is used in class declarations or class expressions to create a child class.
// This child class is a subclass of another class, meaning it inherits all the properties and methods from the parent class.

// super: The super keyword is used to call the constructor of the parent class.
// It is required when you want to access the parent's properties and methods within the child class.
// We don't have to provide (this) 

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, subject) {
        // super() calls the constructor of the parent class (User)
        super(username);
        this.subject = subject;
    }

    // Additional methods can be added here specific to Teacher
    logSubject() {
        console.log(`${this.username} teaches ${this.subject}`);
    }
}

// Creating an instance of the Teacher class
const teacherOne = new Teacher("Saurav Jha", "Science");

// Calling methods from both the parent class (User) and child class (Teacher)
teacherOne.logMe();       // Output: Username is Saurav Jha
teacherOne.logSubject();  // Output: Saurav Jha teaches Mathematics


// Creating an instance of the User class

const userOne = new User("Saurav Jha");

userOne.logMe(); // Output: Username is Saurav Jha

// The following line would result in an error because the addCourse method does not exist in the User class or its prototype chain

// userOne.addCourse(); // Uncommenting this line will throw an error: .addCourse is not a function and cannot be accessed by userOne


// Output: false because its bring the instance
console.log(Teacher === User); 
console.log(userOne === User);
console.log(teacherOne === User);

// Using instanceof to check instances
console.log(teacherOne instanceof Teacher); // Output: true
console.log(teacherOne instanceof User);    // Output: true (inherits from User)
console.log(userOne instanceof User);       // Output: true
console.log(userOne instanceof Teacher);    // Output: false (userOne is not an instance of Teacher)