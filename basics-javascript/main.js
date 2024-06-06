//Log a statement using console.log()
console.log("Hello from main.js");

//Variables
//From the year 2022 we can define variables in two ways,
//1) Using let - we can reassign the value using let
//2) Using const - we must assign varable and cannot change the value once assigned
let age = 20;
console.log(age);

const number = 5;
console.log(number);

//Data Types - Specifies what data can be stored and manipulated within a program
//As per latest specification we have two major types - Primitive, Non Primitive
//Primitive - String, Number, Boolean, Undefined, Null, Bigint, Symbol
//Non Primitive - Objects

//String - Sequence of value that represents a text value. Surronded bu quotes.
const  name = 'Sukumar';

//Number  - Represents numbers and floating point numbers
const sum = 20;

//Boolean - True or False
const isPrimary = true;

//Undefined - Represents a value that is not assigned
let result;
console.log(result); // It will be undefined in console
//We can expicitly define undefined
const anotherResult = undefined;

//Null - Represents a value that is empty or unknown
const value = null; //We should always use null if the value is unknown rather than using undefined as mentioned above
 
//Bigint - Represents a number value greater than what Number data type can hold

//Symbol - Introduced in 2015, represents a value that is unique and unchangebale

//Objects - It is a complex datatype
const person = {
    firstName: "Bruce",
    lastName: 'Wayne',
    age: 30
} //This type of declaration is called object leteral (One way to store collection of data)
console.log(person.firstName);
//Another way to store collections of data is by usng Arrays
const oddNumbers = [1,3,5,7,9];
console.log(oddNumbers[0]);

//***Javascript is dynamically types language
//Which means you don;t have declara datatype while declaring a variable, they are converted automatically as neede during execution
let a =10;
a='abc';
a=true;
console.log(a);