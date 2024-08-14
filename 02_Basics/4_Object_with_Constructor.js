// const tinderuser = new Object() // Creates a singelton object.

const tinderuser = {}

    tinderuser.id = "123abc",
    tinderuser.name = "Saurav Jha",
    tinderuser.age = 23,
    tinderuser.gender = "Male", 
    tinderuser.location = "Mumbai"

// console.log(tinderuser)

const regularuser = {
    email: "tinderuser@gmail.com",
    fullname: {
        userfullname: {
            first: "Saurav",
            last: "Jha"
        }
    }
}

// Accessing nested properties using dot notation
// Dot notation allows you to drill down into nested objects to access specific properties
// console.log(regularuser.fullname.userfullname.first); // Output: "Saurav"

// Optional chaining (not used in this example) can make accessing deeply nested properties safer
// Example: console.log(regularuser.fullname?.userfullname?.first);
// This prevents errors if any intermediate property (e.g., fullname) is undefined or null


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj_together = {obj1, obj2}; // This method add obj2 as a single element in obj1.
// The Object.assign() method in JavaScript is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const obj_together = Object.assign({}, obj1, obj2, obj3); // The empty object {} serves as the target object into which the properties of obj1, obj2, and obj3 are copied.

const obj_together = {...obj1, ...obj2, ...obj3} // Mostly we use spread operator in object as well.

// console.log(obj_together); // Using {} ensures that obj_together is a new object that contains all the properties of the source objects, without altering any of the original objects.



const user = [
    {
        "id": 1,
        "email": "user1@gmail.com",
    },
    {
        "id": 2,
        "email": "user2@gmail.com",
    },
    {
        "id": 2,
        "email": "user3@gmail.com",
    }
]

// console.log(user[1].email);


// console.log(tinderuser);

console.log(Object.keys(tinderuser)); // Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(tinderuser)); // Returns an array of values of the enumerable properties of an object
console.log(Object.entries(tinderuser)); // Returns an array of key/values of the enumerable properties of an object

console.log(tinderuser.hasOwnProperty.call("user_name")); // Determines whether an object has a property with the specified name.





