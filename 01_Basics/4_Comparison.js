// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Here , JavaScript compares after changing the datatypes
// console.log("2" > 1);
// console.log("02" > 1);

// Avoid this type of comparison
console.log(null > 0); // null is not converted to 0 for comparisons like this. Instead, null is considered as an empty value that is not greater than 0. False
console.log(null == 0); // In the case of the equality comparison ==, null is only loosely equal to undefined and not to any other value (including 0). False
console.log(null >= 0); // When JavaScript evaluates null >= 0, it converts null to 0 for the sake of comparison. Since 0 >= 0 is true, the result is true.


// undefined is not equal to any number, including 0.

console.log(undefined == 0); // undefined == 0 returns false.
console.log(undefined > 0); // The comparison undefined > 0 returns false.
console.log(undefined < 0); //  undefined < 0 returns false.

// === ; The === operator checks both the value and the type of the operands.It is known as "Strict Equality"

console.log("2" === 2);