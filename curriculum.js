// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal - (Ctrl + `) to open terminal
// -- Running a file
// -- Killing a file

// 3.0 Variables
// -- Hello world
// -- Console.log()
console.log("Hello World");
// -- Variables
const mySentence = "hello world";

let numberOfEggs = 4;
numberOfEggs = 4;

console.log(numberOfEggs + 6, mySentence);
// -- Code comments
// this is a comment
/* this is a comment */

// -- Assignment by reference
let newNumberOfEggs = numberOfEggs;

// 4.0 Data Types (init / read / write)
// -- Strings

let myString = "hello my name is nas";
let extendedString = myString + " and I am a software engineer";
console.log(extendedString);

console.log(myString[4]);

// -- Numbers

const favNumber = 10;
// -- Arrays

const groceryList = ["eggs", "milk", "bread"];
groceryList[0] = "cheese"; // write
console.log(groceryList);

// -- Objects
const dictionary = {
    ocean: 'A body of water between countries',
    sea: 'A different body of water',
    myFavNumber: 10,
}

const user = {
    name: 'Nas',
    password: '******',
}

console.log(user.name); //access using dot notation
console.log(dictionary['ocean']); //access using bracket notation

user.name = 'Nasir'; // write new value
console.log(user.name); //access using dot notation

dictionary['ocean'] = 'A large body of salt water'; // write new value
console.log(dictionary['ocean']); //access using bracket notation

// -- Null
const unknown = null; // null is an object
// -- Undefined
const undefinedValue = undefined; // undefined is a type
console.log(unknown, undefinedValue);

// -- Booleans (true/false)
const isNas = true;
let isAlive = false;

// 5.0 Recap

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 3 + 9;

const division = 12 / 5;

const remainder = 12 % 5;

console.log('SUM:', sum);
console.log('DIVISION:', division);
console.log('REMAINDER:', remainder);

// -- Logical operators (|| &&)


// -- Type of
const randomNumber = 101;
console.log(typeof randomNumber, typeof 'string', typeof true, typeof null, typeof undefined); 

// 7.0 Conditional Statements
// -- If else

const x = 21
if (x > 10 && x < 20) {
    // Whatever code is written here is conditionally executed
    console.log('The value is greater than 10, and also less than 20');
} else {
    console.log('The value is not greater than 10, or it is greater than 20');
}

if (x > 10 || x < 20) {
    // Whatever code is written here is conditionally executed
    console.log('The value is greater than 10, or also less than 20');
} else {
    console.log('The value is not greater than 10, or it is greater than 20');
}

// 8.0 Loops
// -- While loop
let i = 0;
while (i < 20) {
    console.log('The value of i is:', i);
    i = i + 1;
}

// -- For loop
for (let j = 0; j < 20; j++) {
    // this is repeateble code
    console.log('The value of j is:', j);
}

const animals = ['cat', 'dog', 'fish', 'bird'];

for (let k = 0; k < animals.length; k++) {
    console.log('The animal at index ' + k + ' is ' + animals[k]);
}

// -- Continue & break
for (let k = 0; k < animals.length; k++) {
    const currentAnimal = animals[k];
    if (currentAnimal === 'dog') {
        continue;
        //break;
    }
    console.log('The animal at index ' + k + ' is ' + currentAnimal);
}

// 9.0 Functions
// -- Create a function
// -- Invoke a function
// -- Return
// -- Default inputs
// -- Arrow functions
