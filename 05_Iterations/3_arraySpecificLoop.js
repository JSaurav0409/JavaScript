// Array specific loops
// 1. for-of loop
// 2. for-in loop

// In array we can add object as well

// [{}, {}, {}]


let myArr = [1, 2, 3, 4, 5]

for (const index of myArr) {
    // console.log(index);   
}


const greetings = "Hello world !!"

for (const greet of greetings) {
    // console.log(greet);
}

// Map() : A Map is a built-in data structure in JavaScript 
// that stores key - value pairs, where both keys and values 
// can be of any data type. It stores unique values

const map = new Map();

map.set('IN', 'India')
map.set('UK', 'Unoted Kingdom')
map.set('RSA', 'Republic of South Africa')


// console.log(map);

// for (const key of map) {
//     console.log(key);
    //! This snippet will return the each value of map in the form of an array.
// }

//? To overcome the problem , we will use [] .

for (const [key, value] of map) {
    // console.log(`Key is ${key} and value is ${value}`)
}


const myGame = {
    'game1': "FIFA",
    'game2': "PUBG",
    'game3': "Fortnite"
}

// for (const [key, value] of myGame) {
//     console.log(`The available game is ${key} ${value}`);
    
// }

// ! Object is not iterable using for-of loop
