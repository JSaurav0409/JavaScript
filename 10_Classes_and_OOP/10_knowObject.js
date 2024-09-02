/*
As we know, the value of PI (π) is approximately 3.141592653589793 and is universally constant.
The question is whether we can change the value of PI in JavaScript.

If Yes, How? 
If No, Why?

* Displaying the value of PI
console.log(Math.PI);  // Output: 3.141592653589793

* Attempt to change the value of PI
Math.PI = 5;
console.log(Math.PI);  // Output: 3.141592653589793 (Value remains unchanged)

* Checking the property descriptor of PI
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

/*
The answer is No, we cannot change the value of PI. In JavaScript, `Math.PI` is a read-only property.
This is because JavaScript is built on top of lower-level languages like C++, and certain values are hardcoded into the language runtime.

{
    value: 3.141592653589793,  // The actual value of PI
    writable: false,           // The property cannot be modified
    enumerable: false,         // The property does not show up in enumeration
    configurable: false        // The property cannot be deleted or reconfigured
}
*/

// Example with a custom object
const chai = {
    name: 'chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log('Ordering Chai...');
    }
};

// Checking the property descriptor of 'name'
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Defining or modifying the properties of 'name' using Object.defineProperty
Object.defineProperty(chai, 'name', {
    writable: true,  // Allows the property 'name' to be modified
    enumerable: true // If set to false, 'name' won't show in loops or Object.entries()
});

// Iterating over the properties of the object
// The following loop throws an error because 'chai' is not iterable
// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// }

// To loop over the properties, use Object.entries(), which returns an array of key-value pairs
for (let [key, value] of Object.entries(chai)) {
    // Skip functions when displaying properties
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
