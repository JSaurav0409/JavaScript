let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);

console.log(typeof (valueInNumber));

// Result

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0


let isLoggedIn = "hello";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Result

// 1 => true; 0 => false
// "" => false; "Hello" => True


let someNumber = 33

let someString = String(someNumber)
console.log(someString);
console.log(typeof(someString));
