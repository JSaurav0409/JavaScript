function setUsername(username) {
    // Simulate a complex DB calculation or operation
    this.username = username;
}

/*
function createUser(username, email, password) {
    setUsername(username); // This won't work as expected because the 'this' context is not correctly set

    this.email = email;
    this.password = password;
}
*/

//! The above code won't correctly set the 'username' because 'this' context is missing in 'setUsername'
//? To ensure 'setUsername' uses the correct context, use .call() to pass the current 'this'

function createUser(username, email, password) {
    setUsername.call(this, username); // Pass the current 'this' context to setUsername

    this.email = email;
    this.password = password;
}

const userOne = new createUser("Saurav Jha", "saurav@fb.com", 123);
console.log(userOne); // Output: { username: "Saurav Jha", email: "saurav@fb.com", password: 123 }
