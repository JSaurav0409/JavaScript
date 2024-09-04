// let myName = "Saurav     "

// console.log(myName.trueLength)

//! trueLength is undefined , we will learn how to provide method to parent which is accessed by their childrens.


//? If we assign any method on parent (Object) it can access by its childs (string, array, function etc).
//! But on other hand if we assign any method on child (string, array, function etc) it cannot access by its parent(Object)

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "thunder",
    spiderman: "web",

    getSpiderPower: function () {
        console.log(`You get ${this.getSpiderPower} power`);
    }
}

//? Here we give methodOne method directly to parent(Object) which can access by childs (string, array, function etc)
Object.prototype.methodOne = function () {
    console.log("Hello Saurav, welcome to method one");
}


//? we assgned the methodOne here in parent
// heroPower.methodOne();

//? we can access methodOne here becaue it is in parent class
// myHeroes.methodOne();


// Here we give methodTwo method directly to child (string, array, function etc) which can not access by parents(Object)
Array.prototype.methodTwo = function () {
    console.log("Hello Saurav, welcome to method two");
}

// myHeroes.methodTwo();

//! heroPower(Parent) can not access method of their myHeros(child).
// heroPower.methodTwo();



//? Prototypal Inheritance in JavaScript
// Prototypal inheritance allows objects to inherit properties and methods from other objects.

// Define base objects
const User = {
    name: "Saurav",
    email: "saurav@gmail.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false
};

// Define TASupport with TeachingSupport as its prototype
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Old syntax for setting prototype
};

// Set Teacher as the prototype of TeachingSupport using modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode   ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUsername.trueLength()

"QuickLittleBrownFox".trueLength()