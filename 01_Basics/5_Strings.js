// String concatenation example
const name = "Saurav Jha";
const repoCount = 6;

// Using + for concatenation (less readable)
console.log(name + " " + repoCount); // Output: 'Saurav Jha 6'

// Using template literals for better readability
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);

// Create a new String object
const channelName = new String("Daaku's Roasting");

// Access and log the first character
console.log(channelName[0]); // Output: 'D'

// Log the prototype of the String object
console.log(channelName.__proto__); // Output: String { ... }

// Log the length of the string
console.log(channelName.length); // Output: 16

// Convert to uppercase
console.log(channelName.toUpperCase()); // Output: 'DAAKU'S ROASTING'

// Example of using charAt()
console.log(channelName.charAt(0)); // Output: 'D'
console.log(channelName.charAt(4)); // Output: 'u'

// Example of using indexOf()
console.log(channelName.indexOf("a")); // Output: 1

// Using substring() to extract characters
const newString = channelName.substring(0, 4);
console.log(newString); // Output: 'Daak'

// Using slice() with negative and positive indices
const anotherString = channelName.slice(-8, 8);
console.log(anotherString); // Output: 'ul_Name' (corrected)

// Using trim() to remove whitespace
const string_mail = "    user@mail.com    "; // Original string with spaces
console.log(string_mail.trim()); // Output: 'user@mail.com'

// URL manipulation
const URL = "https://www.saurav jha.com";
console.log(URL.replace(" ", "%20")); // Output: 'https://www.saurav%20jha.com'
console.log(URL.includes("mail")); // Output: false
console.log(URL.includes(" ")); // Output: true


const webname = "Saurav-sj-jha-dot-com";

// Split the string into an array using '-' as the delimiter
console.log(webname.split('-')); // .split('seperator', 'terminator')
// Output: ['Saurav', 'sj', 'jha', 'dot', 'com']
