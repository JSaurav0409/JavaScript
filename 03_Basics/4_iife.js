// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that executes immediately after it is defined, creating a new scope.
// IIFEs help avoid polluting the global scope with variables.

// Regular Function
function chai() {
    console.log('DB Connected'); // Output when called
}
chai(); // Call the regular function

// How to execute IIFE: (function definition)()

// Named IIFE

(function chai() {
    console.log('DB Connected'); // This IIFE is invoked immediately
})(); // We have to terminate the IIFE with a semicolon to avoid issues. 

// Unnamed IIFE

(() => {
    console.log('DB2 Connected'); // This IIFE uses an arrow function and runs immediately
})();

// Passing parameters to an unnamed IIFE

((name) => {
    console.log(`DB3 Connected, ${name}`); // Output will include the passed parameter
})('Saurav Jha'); // Invoking the IIFE with the argument 'Saurav Jha'

// Summary Notes for Interview Preparation:
//* 1. **Definition**: IIFE is a function that executes immediately, creating a new scope.
//* 2. **Encapsulation**: Variables defined within an IIFE cannot be accessed outside of it.
//* 3. **Avoiding Global Pollution**: IIFEs prevent cluttering the global namespace with temporary variables.
//* 4. **Named vs. Unnamed**: Both named and unnamed IIFEs can be used, but unnamed IIFEs are more common.
//* 5. **Parameters**: You can pass arguments to IIFEs, enabling the execution of logic with dynamic data.