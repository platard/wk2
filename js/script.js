/*** Variables ***/
// 1. Rules for valid variable names in JavaScript:
// - Must start with a letter, $, or _
// - Can include letters, numbers, $, and _, but no spaces or special characters
// - Cannot begin with a number
// - Case-sensitive (e.g., 'name', 'Name', and 'nAme' are different variables)
// - Avoid using reserved keywords (e.g., 'let', 'const', 'var')
// - Be cautious of global variables in browsers (e.g., 'alert', 'document', 'window')

/*
const 2ndName = 'James' // invalid 
const first%Name = 'John' // invalid 
const first-name = 'John' // invalid 
*/
const first_name = 'John' // valid 
const _firstName = 'John' // valid 
const $firstName = 'John' // valid

// case-sensitive
const name = 'John' // This is a different variable ...
const Name = 'James' // ... from this variable ...
const nAme = 'Peter' // ... and this variable.

//Avoid Keywords https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
// reserved words that are part of the language

//Avoid variable names already assigned
// browsers define global standard variables like: alert, document, window



//2. let
// - Use 'let' for variables whose values are expected to change.
// - 'let' provides block scope and allows reassignment.
let currentStatus = "active" // valid - declaration and asignment
currentStatus = "inactive"   // valid - reasignment



// 3. const
// - Use 'const' for variables with values that should not change.
// - 'const' declarations must be initialized at declaration.
// - Attempting to reassign a 'const' variable will result in a runtime error.
 
const MAXIMUM = 5000 //valid - declaration and asignment
// MAXIMUM = 4711 // invalid -  reasignment is not allowed.

/*** Data types ***/
// 1. Strings
// - Strings are used for text. They can be enclosed in single quotes '', double quotes "", or backticks ``.
// - String concatenation can be done using the '+' operator or template literals for interpolation.

const firstName = 'John'    // single quotes
const lastName = "Doe"      // double quotes
const age = "22"            // not a number, but a string

// string concatenation
let message = 'My name is ' + firstName + ', I am ' + age + ' years old.'

// template literals using the backticks `` 
message = `My name is ${firstName}, I am ${age} years old.`

// 2. Number
// - Includes integers, decimals, negatives, and numeric separators

const number1 = 5          // integer
const number2 = 0.5        // decimal
const number3 = -22        // negative integer
const number4 = -0.9       // negative decimal
const number5 = 12_300     // separator for decimal representation

// JavaScript includes useful methods and functions for working with numbers.

// 3. Boolean
// - Boolean type represents logical values: true or false.
// - Commonly used in conditional statements and logical operations.

let isLoggedIn = true 
let isAdmin = false

// 4. Arrays
// - Arrays are ordered list of values.
// - They can store elements of different types.
// - Use square brackets for arrays [].
// - Access elements by their index, starting from 0.

const shoppingCart = [  // start of array definition
    'Record player',        // first entry
    2334,          // second entry
    false,         // third entry
    [ ]    // fourth entry
];                      // end of array definition

console.log( shoppingCart )     //display the whole array
console.log( shoppingCart[0] )  //display a specific element in the array
console.log( shoppingCart[1] )  

// Multidimensional Arrays
const shoppingCartMultidimensional = [      //opening the main array
    [
        'Record player',                   //first element in the first array
        99,                                 //second element in the first array
        'index-0'                           //third element in the first array
    ],
    [                                       //second entry - index 1
        'Loudspeaker',                      //first element in the second array
        120,                                //...
        'index-1'
    ]
]                                           //closing the main array

console.log( shoppingCartMultidimensional )         //display the whole array
console.log( shoppingCartMultidimensional[1][0] )  //display a specific element

// 5. Objects
// - Objects are collections of key-value pairs (properties).
// - They can store various types of data, including nested objects.
// - Use curly braces for objects {}.
// - Access object properties using dot notation '.' or square brackets [].

// object literal notation {}
const student = {
    firstName: 'Jane',
    lastName: 'Doe',
    isActive: false,
}


//Common use of arrays and objects
const students = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        isActive: false
    },
    {
        firstName: 'Emma',
        lastName: 'Anderson',
        isActive: true
    },
    {
        firstName: 'Liam',
        lastName: 'Jackson',
        isActive: true
    }
]

/*** Operators and Expressions ***/
// Arithmetic operators: +, -, *, /, and % for calculations.
// Shorthand operators: +=, -=, *=, /=, and %= for combined assignment and operation. 
// Comparison operators: ==, != for equality checks; ===, !== for strict equality checks.
// Logical operators: && (AND), || (OR), ! (NOT) for logical operations.
// Use parentheses for controlling the order of operations.


// 1. shorthand operators
let result = 5;

// Add a value to a variable and then assign the result back to that variable
result += 11; // result = result + 11; // the variable "result" now has a value of 16
result -= 1;  // result = result - 1 the variable now has a value of 15
console.log(result)
result /= 3;  // the variable now has a value of 5
console.log(result)
result *= 4;  // the variable now has a value of 20

result++
console.log(result); // result + 1 // the variable now has a value of 21

// 2. comparison operators
console.log(5 == '5')     // Output: true
console.log(5 === '5')     // Output: false
console.log(5 != '5')     // Output: false
console.log(5 !== '5')     // Output: true
console.log(5 != '8')    // true
console.log(10 > 5)       //true  
console.log(10 > 10)      //false
console.log(10 >= 10)       //true
console.log(10 <= 5)         //falase


// 3. logical operators
console.log( (5 > 3) && (10 > 5) ); //true AND operator 
console.log( (5 > 3) && (10 < 5) ); //false
console.log( (5 < 3) || (10 > 5) ); //true OR operator 
const isLoggedInAndAdmin = isLoggedIn && isAdmin; // false
const isLoggedInOrAdmin = isLoggedIn || isAdmin; //true
const isLoggedOut = !isLoggedIn; // negation
console.log(isLoggedInAndAdmin); 
console.log(isLoggedInOrAdmin); 
console.log(isLoggedOut);

console.log( false == 'David') //false
