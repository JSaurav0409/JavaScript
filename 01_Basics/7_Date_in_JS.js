// DATE

let myDate = new Date();

// console.log(myDate);
// Output: Tue Aug 13 2024 06:43:52 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toString());
// Returns a string representation of a date. The format of the string depends on the locale.
// Output: Tue Aug 13 2024 06:43:52

// console.log(myDate.toISOString());
// Returns a date as a string value in ISO format.
// Output: 2024-08-13T06:43:52.159Z

// console.log(myDate.getTime());
// Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
// Output: 1723531432159

// console.log(myDate.toJSON());
// Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
// Output: 2024-08-13T06:43:52.159Z

// console.log(myDate.getFullYear());
// Gets the year, using local time.
// Output: 2024

// console.log(myDate.toLocaleDateString());
// Returns the date tion of the date object in a format based on the locale.
// Output: 13/08/2024

// console.log(typeof (myDate));
// Type of Date is Object.

// let anotherDate = new Date(2024, 7, 13)
// console.log(anotherDate);
// console.log(anotherDate.toString());


// let anotherDate = new Date(2024, 7, 13, 12, 39, 4)
// console.log(anotherDate);
// console.log(anotherDate.toLocaleString());


// let myCreatedDate = new Date("2024-08-13") // (yyyy-mm-dd)
let myCreatedDate = new Date("08-13-2024") // (dd-mm-yyyy)
// console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// Conversion of milliseconds into seconds

// console.log(Date.now() / 1000); // Here , the problem is this gives values in decimals
// console.log(Math.floor(Date.now() / 1000)); // To solve the decimal problem we will use Math.round() or Math.floor()


// Date


let myNewDate = new Date();

console.log(myNewDate);
console.log(myNewDate.getMonth() + 1); // Here the index of the month is starts from 0.So we are going to use +1 so our end user didn't get confused
console.log(myNewDate.getDate());



console.log(myNewDate.toLocaleDateString('default', {
    weekday: 'long',
}));
// Returns the day of the week for the date in the locale-specific format.
// Output: [current day of the week, e.g., 'Tuesday']