const coding = ["js", "ruby", "java", "Python", "C++"]

//? What if I store foreach in variable ?

const values = coding.forEach((items) => {
    // console.log(items);
    return items
})

// console.log(values);

/* In JavaScript, the forEach loop is used to execute 
a provided function once for each array element.
However, forEach does not return values; it always returns undefined.
*/

//* filter : The filter() method in JavaScript is a powerful tool for selectively extracting elements from an array based on specified conditions.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* IMPLICIT RETURN

const myNums = nums.filter((num) => (num % 2 == 0))
// console.log(myNums);

//* EXPLICIT RETURN

const myNums2 = nums.filter((num) => {
    return num % 2 == 0
})

// console.log(myNums2);

//! If you start a block scope you have to use return keyword.


//? If we want to perform same thing in foreach

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNum = []

numList.forEach((num) => {
    if (num % 2 == 0) { 
        evenNum.push(num)
    }
})

// console.log(evenNum);


// Accessing Books from Database

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
    
let userBooks = books.filter((book_collection) => book_collection.genre === 'Science')

userBooks = books.filter((book_collection) => {
    return book_collection.publish >= 1995 && (book_collection.genre == 'Non-Fiction' || book_collection.edition > 2000)
})

console.log(userBooks);
