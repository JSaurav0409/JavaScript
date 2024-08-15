function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

// sayMyName // It won't do anything because it just giving reference of function , rather than executing it.

// sayMyName(); // It will execute the function and print the name.

// function which add two value

// function addTwoValue(num1, num2) {
//     console.log(num1 + num2);
    
// }

// const result = addTwoValue(3, 4)
// console.log("Result: " + result);

// The `result` variable stores the value returned by the `addTwoValue` function,
// which is `undefined` because the function only logs the sum but doesn't return it.

// Important Concept: Difference Between `console.log()` and `return`
// - `console.log()` outputs the value to the console but doesn't return anything from the function.
// - `return` sends a value out of the function to wherever the function was called, making it available for further use.


function addTwoValue(num1, num2) {
    // let result = num1 + num2;
    // return result; // The function returns the value of `result`.
    // Code after return is unreachable.

    //another way of writing same code

    return num1 + num2;

}

const result = addTwoValue(3, 4)
// console.log("Result: " + result);

// Output: "Result: 7"
// Here, `result` holds the value returned by the `addTwoValue` function (which is 7),
// and this value is concatenated with the string "Result: " and logged to the console.

function loginuserMessage(userName = "User") { // what if user don't pass any argument , to avoid such case we will pre-defined the value
    return `${userName}, just logged in.`
}

// console.log(loginuserMessage());

// If you don't pass an argument it will show undefined

// ----------------------------------------------------------------------------- //


// REST OPERATOR : The rest operator (...) in JavaScript allows you to represent an indefinite number of elements as an array.

// In JavaScript, the three dots (...) serve a dual purpose: they can act as either the rest operator or the spread operator.
// Though they look the same, their behavior depends on the context in which they are used.


// Rest Operator (...): Allow you to collects indefinite elements into an array or object.
// Spread Operator (...): Spreads or expand elements from an array or object.


function addingItemsPriceInCart(...items) {
    return items
}

// console.log(addingItemsPriceInCart(200, 300, 500, 350))


function addingItemsPriceInCart2(val1, val2, ...items) {
    return items
}
// Interview Question : Which elements will store in val1, val2 and ...items
// console.log(addingItemsPriceInCart2(200, 300, 500, 350))

// Interview Answer : val1 stores the first argument, so it will store 200.
// val2 stores the second argument, so it will store 300.
// ...items uses the rest operator to collect the remaining arguments into an array, so it will store [500, 350].



// How to pass an object in function

let user = {
    name: "Saurav Jha",
    age: 23,
    occupation: "Software Engineer",
}

function objectHandling(anyObject) {
    console.log(`Username is ${anyObject.name}. He is ${anyObject.age} years old and he is ${anyObject.occupation} by profession`);
    
}

// objectHandling(user)

// Another Method : We can directly pass the value while calling the function.

/*
objectHandling({
    name: "Saurav Jha",
    age: 23,
    occupation: "Software Engineer",
})
*/



// How to pass an array in function

// Define an array of numbers
const myArray = [200, 300, 400, 600, 1000];

// Function to display the second value of the passed array
function displaySecondValue(getArray) {
    console.log(getArray[1]); // Accessing the second element (index 1) of the array, do not pass the generic name of an array . Here, we will pass the parameter name to the function
}

// Call the function and pass the array

// displaySecondValue(myArray); // Output: 300

// Another Method : We can directly pass the array while calling the function.

displaySecondValue([200, 500, 30, 600, 58, 600]); // Output:500






