/*
 * **Promise Concepts**:
 * 
 * - **`resolve()`**: A function used to mark the promise as fulfilled and provide the resolved value.
 * - **`.then()`**: A method to handle the fulfilled value of the promise. It can also chain multiple operations.
 * - **`reject()`**: A function used to mark the promise as failed and provide an error reason.
 * - **`.catch()`**: A method to handle errors if the promise is rejected.
 * - **`.finally()`**: A method that runs a callback after the promise is settled, regardless of its outcome.
 * - **Callback**: A function passed to another function to be executed after an operation completes.
 * - **Callback Hell**: A term describing deeply nested callbacks that make code harder to read and maintain.
 */

//! Promise 1: Creating a promise by storing it in a variable
const promiseOne = new Promise(function (resolve, reject) {

    // Simulating an asynchronous task
    setTimeout(function () {
        console.log("Async task is completed."); // Log message after 1 second
        resolve(); // Fulfill the promise, triggering the .then() method
    }, 1000);

});

// Handling the promise
promiseOne.then(function () {
    console.log("Promise is consumed"); // Log message when the promise is fulfilled
});

//! Promise 2: Creating and handling a promise without storing it in a variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2 is completed'); // Log message after 2 seconds
        resolve(); // Fulfill the promise, triggering the .then() method
    }, 2000);
}).then(function () {
    console.log('Promise 2 is consumed'); // Log message when the promise is fulfilled
});

//! Promise 3: Creating a promise with resolved data
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Resolve with an object containing user data after 3 seconds
        resolve({ username: "Saurav", email: "sauravjha@gmail.com" });
    }, 3000);
});

// Handling the promise
promiseThree.then(function (data) {
    // Log the resolved data
    console.log(data);
});

//! Promise 4: "Promise with Error Handling"

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Condition to determine whether to resolve or reject the promise
        let success = false; // Change this value to test both scenarios

        if (success) {
            // Resolve with user data if success is true
            resolve({ username: 'Saurav Jha', password: '123' });
        } else {
            // Reject with an error message if success is false
            reject("ERROR: Something went wrong");
        }
    }, 4000);
});

//? Handling the promise

promiseFour
    .then(function (user) {
        // Log the resolved user data and return the username for further processing
        console.log(user);
        return user.username;
    })
    .then(function (username) {
        // Log the username
        console.log(username);
    })
    .catch(function (err) {
        // Log the error message if the promise is rejected
        console.log(err);
    })
    .finally(function () {
        // Log a message to indicate the end of the promise chain
        console.log("Promise is either resolved or rejected");
    });


/*
 * **Promise 5: "Promise with Error Handling through async/await"**
 * 
 * - **`async` Function**: A function declared with the `async` keyword, which allows the use of `await` within it.
 * - **`await`**: Pauses the execution of the `async` function until the promise is resolved or rejected.
 * - **`try...catch`**: Used to handle errors in an `async` function, where `try` contains the code that might fail, and `catch` handles any errors.
 */

//? Creating a promise with error handling

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Condition to determine whether to resolve or reject the promise
        let success = false; // Change this value to test both scenarios

        if (success) {
            // Resolve with user data if success is true
            resolve({ username: 'JavaScript', password: '123' });
        } else {
            // Reject with an error message if success is false
            reject("ERROR: JS went wrong");
        }
    }, 5000);
});

//? Consuming the promise with async/await

async function consumedPromiseFive() {
    try {
        // Await the promise and store the resolved value
        const response = await promiseFive;
        // Log the resolved data
        console.log(response);
    } catch (error) {
        // Log the error message if the promise is rejected
        console.log(error);
    }
}

// Call the async function to execute the code
consumedPromiseFive();

// promiseFour and promiseFive basically doing same thing but using different approach.


//! Working on Dummy Data

/*
 * Fetches user data from an API and logs it.
 * Uses async/await for cleaner asynchronous code handling.
 */
// async function getAllData() {
//     try {
//         Fetch data from the API
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
//         Convert the response to JSON format
//         const data = await response.json(); // Await is used to ensure data is fully converted before proceeding
        
//         Log the fetched data
//         console.log(data);
//     } catch (error) {
//          Log any errors that occur during the fetch or data processing
//         console.log('Error:', error);
//     }
// }

// Call the async function to fetch and log the data
// getAllData();


//! Doing the same thing with .then() and .catch()


fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
    })
    .catch(function (err) {
        console.log('Error fetching data', err);
    });
