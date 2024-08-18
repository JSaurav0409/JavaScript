// 1. For Loop

// Loop from 0 to 10, printing each value
for (let index = 0; index <= 10; index++) {
    console.log(index); // Prints current index
}

// 2. for Loop with Condition

// Loop from 0 to 10
for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log("We reach at number 5."); // Special message when index is 5
    }
    console.log(index); // Prints current index
}

// 3. Nested for Loop

// Outer loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`); // Prints current value of outer loop
    
    // Inner loop from 1 to 10
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and outer loop value: ${i}`); // Shows current inner and outer loop values
        console.log(`${i} * ${j} = ${i*j}`); // Prints multiplication table
    }
}

// 4. Array Iteration

let myArr = ["Ironman", "Spiderman", "Superman"];

// Loop through array elements
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element); // Prints each superhero name
}



// Break and continue

// Break 


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`5 Detected`);
//         break; // Exit the loop when index is 5
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }

// Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 Detected`);
        continue; // Skip the rest of the loop when index is 5, continue with next iteration
    }
    console.log(`Value of i is ${index}`);
    
    
}