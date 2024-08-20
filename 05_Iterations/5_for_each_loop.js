// forEach Loop : A JavaScript method that iterates over an array,
// executing a provided function for each element in the array.

const coding = ["js", "ruby", "java", "Python", "C++"]

//? Regular function

// coding.forEach(function (value) {
//     console.log(value)
// })

//? Arrow Function

// coding.forEach((value) => {
//     console.log(value)
// })

//? Passing Function reference in loop

function printMe(val) {
    // console.log(val);
}

coding.forEach(printMe);


//? For-each loop has the access of parameters like items, index and arr list.

coding.forEach((items, index, arr) => {
    // console.log(items, index, arr);
})

//? Iterations over array of an object

const codingLanguage = [
    {
    langName: "JavaScript",
    langExtension: "js",
    },
    {
    langName: "Java",
    langExtension: "java",
    },
    {
    langName: "Python",
    langExtension: "py",
    },

]


codingLanguage.forEach((lang) => {
    console.log(lang.langName, lang.langExtension);
    
})