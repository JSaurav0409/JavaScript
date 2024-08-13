const marvel_heroes = ["Iron-Man", "Captain America", "Spider-Man"]

const dc_heroes = ["SuperMan", "Green Lantern", "BatMan"]

marvel_heroes.push(dc_heroes) // Here the dc_heroes push as single element

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const all_heroes = marvel_heroes.concat(dc_heroes) // Here concat merge the individual elements of dc_heroes into marvel_heroes.
// console.log(all_heroes)

// Another better method to merge element of two different method is to spread it

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

const messey_array = [1, 2, 3, [4, 3, 2], 2, 3, 4, [2, 3, 4[2, 3, 4]]]

const usable_array = messey_array.flat(Infinity) // "Creates a new array by combining all the elements from sub-arrays into a single array. You can choose how deep into the nested sub-arrays it should go."
console.log(usable_array)

// console.log(Array.isArray("Hello, World!")) // checks if the given element is an array or not .
// console.log(Array.from("Hello, World!")) // Creates an array from an iterable object.
// console.log(Array.from({ name: "Saurav Jha" })) // interesting case


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // .of() : Returns a new array from a set of elements.
