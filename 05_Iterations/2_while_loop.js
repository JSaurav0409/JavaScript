// let index = 0

// while (index <= 10) {
//     console.log(`Value of index ${index}`);
//     index = index + 2;
    
// }


// while loop in array

let myBasket = ["Apple", "Mango", "Orange", "Pineapple"]

let index = 0 
while (index < myBasket.length) {
    // console.log(`In my basket I have ${myBasket[index]}`);
    index = index + 1; // Here we can write arr++ as well
}

// do-while loop


let score = 1
do {
    // console.log(`Score is ${score}`);
    score = score + 1;
} while (score <= 10);

//? Q. What if the score is more than 10 ?
//* If score is more than 10, the loop still executes
//* once because the condition is checked after the first iteration.


let score_2 = 11;

do {
    // console.log(`The score is ${score_2}`);
    score_2 = score_2 + 1;
} while (score_2 <= 10);

