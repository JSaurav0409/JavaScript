/*
! Truthy Values:

* Definition: Truthy values are values that are considered true when evaluated in a boolean context.

? Examples:
* Non-zero numbers: 1, -1, 100
* Non-empty strings: "Hello", "false", "0"
* Objects: {}, []
* true
* Any non-null, non-undefined value, anything in string (' ', " ")

! Falsy Values:

* Definition: Falsy values are values that are considered false when evaluated in a boolean context.

? Examples:

* 0 (zero), -0
* "" (empty string)
* null
* undefined
* NaN (Not a Number)
* false
* Bigint 0n

*/

// const useremail = "user@mail.com"

// if (useremail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// How to check if an array is empty.

// const myArr = []

// if (myArr.length === 0) {
//     console.log("Array is empty");
// }

// How to check if an object is empty.

// const myObj = {}

// if (Object.keys(myObj).length === 0) {
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator ( ?? ) : null , undefined
/*
The Nullish Coalescing Operator (??) specifically checks 
whether the value on its left side is null or undefined. 
If it is, the operator returns the value on its right side. 
*/

let val1;

// val1 = 5 ?? 10 // return the first value
// val1 = null ?? 10 // return the second value
// val1 = undefined ?? 10 // return the second value

// val1 = null ?? 10 ?? 20 // return the first appearoing value

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 100"): console.log("greater than 80");
;

