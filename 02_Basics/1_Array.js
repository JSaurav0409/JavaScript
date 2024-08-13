// Array : Stores a collection of multiple items in single variable .

const myArray = [0, 1, 2, 3, 4, 5]
const marvelHeroes = ["Ironman", "Captain America", "Hulk", "Spiderman"]
// console.log(myArray[1])
// console.log(marvelHeroes[2])

// Another way of declaring array are

const myArray2 = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArray2[3]);

// Array Methods

myArray.push(2) // Add new elements to the end of an array and returns it.
myArray.pop() // Removes the last element from an array and returns it.

myArray.unshift(12) // Inserts new elements at the start of an array and returns it.
myArray.shift() // Removes the first element from an array and returns it.

console.log(myArray.includes(12)); // Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(myArray.indexOf(2)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.


const newArr = myArray.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArray);
// console.log(typeof(myArray));

// console.log(newArr);
// console.log(typeof(newArr));


// Slice and Splice

console.log("A ", myArray);

const myn1 = (myArray.slice(1,3)) // Returns a copy of a section of an array.Doesn't affect original array
console.log(myn1);

console.log("B ", myArray);

const myn2 = (myArray.splice(1, 3)) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. Affects the original array
console.log(myn1);

console.log("C ", myArray);

