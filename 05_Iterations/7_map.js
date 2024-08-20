/* map() in JavaScript:**

* Creates a new array.
* Applies a function to each element of an existing array.
* Does not change the original array.
* Returns a new array with the results of the applied function.
* Useful for transforming data in arrays.

? If you start a block scope you have to use return keyword.

*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const addTen = myNumbers.map((num) => num + 10)
// console.log(addTen);

//* USING FOR_EACH

const addTen = [];

myNumbers.forEach( (num) => {
    if (num) {
        addTen.push(num + 10)
    }
})



/*
*Chaining in JavaScript:**

* Calls multiple methods on an object in one line.
* Improves code readability and efficiency.
* Each method returns the object itself, allowing chaining. 
* Example: `object.method1().method2().method3();`

*/


const numsLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = numsLists
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter( (num) => num >= 25 )

    console.log(newNums);
    