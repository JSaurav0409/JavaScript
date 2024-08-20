/*
* Reduces an array to a single value.
* Applies a function to each element and accumulates the result.
* Takes an optional initial value.
* Useful for calculations like sum, product, or creating objects.
* Example: array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
*/

// Regular function
const myNums = [1, 2, 3]

// const mySums = myNums.reduce(function (acc, currVal) {
//     console.log(`Accumulator : ${acc} Current Value : ${currVal}`);
//     return acc + currVal
// }, 0)

// console.log(mySums);

// accumulator is an empty space


// Arrow function

const mySums = myNums.reduce((acc, currVal) => acc + currVal, 0)

console.log(mySums); // Output: 6

// Adding total of shopping cart

const shoppingCart = [
    {
        courseName: "JS course",
        price: 2999
    },
    {
        courseName: "Python course",
        price: 999
    },
    {
        courseName: "Android course",
        price: 12999
    },
]

const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(Total);
