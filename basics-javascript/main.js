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

//***Javascript is dynamically typed language
//Which means you don't have declare datatype while declaring a variable, they are converted automatically as needed during execution
let a =10;
a='abc';
a=true;
console.log(a);

//Operators - Special symbol used to perform opeartion on values and variables
//Assigment
let x=10;
//Arthematic
let y=5;
console.log(x+y); //x-y,x*y,x/y,x%y,++x,--y etc
//Comparision
console.log(x==y); // Compares only values
console.log(x===y);//Compares values and datatype
//Other types !=, !==, >,>=,<,<= etc
//Logical - &&,||,!
//String
//Concatination(+) - If used with String it will concatinate, if used with number it will add
//Ternary operator - condition?true:false;


//Type Conversion
//Implicit conversion - also known as type coercion where javascript will automatically do
console.log(2+'3');//23
console.log(true+'3')//true3
console.log(true+3); // 4
console.log('4'-'3');//1
console.log('a'-'b')//NaN
console.log(5-null);//5
console.log(5-undefined)//NaN - undefined with any operator is NaN
//Explicit conversion - we must manually do
//For this we use predefined methods
console.log(Number('5'));//Converting string to number
console.log(parseInt('4'));
console.log(parseFloat('3.14'));
console.log(Number(null));// Will be zero for null,'',false and 1 for true

console.log(String('500'));//Conerting number to string
console.log(String(true));//Will be undefined same for null, false, true
console.log((500).toString()); //null and undefined don't work

console.log(Boolean(-9))//Will be true if other than zero and false only for 0, undefined, null, '' and NaN
console.log(Boolean(    ));//false

//Equality
//== (Allows coercion)
//=== (Doesn't allow coercion)
let var1 = 'test';
let var2 = 'test';
console.log(var1==var2);//true
console.log(var1===var2);//true
//If var1 is 10 and var2 is '10' first console will return true, second one false
//If we use null, undefined, '', 0 are are treated a false during coercion. Hence it if better to use === for comparision

//Conditional Statements
//if, else, else if, switch

//Looping code
//for, while, do while, for of
//for of - loop over collection of data (for eg arrays)
const array = [1,2,3,4,5];
for(const arr of array){
    console.log(arr);
}

//Functions - building blocks of javascript, it is a block of code designed to perform a perticular task
function greet(){
    console.log("Good morning");
}
greet();

function greet(username){
    console.log('Good morning '+ username);
}
greet('ABC');

function sumTwo(a,b){
    return a+b;
}
console.log(sumTwo(5,5));

//Arrow functions
const addNumbers = (a,b)=>{
    return a+b;
} // const addNumbers = (a,b)=>a+b;

console.log(addNumbers(10,15));

const addFive = num =>num+5;
console.log(addFive(5));

//Scope - determines accessability and visibility of variables
//Block scope - variables declared inside a block (let say a if block) can be accessed only in that block
//Function scope - variables declared inside a function can be accessed only in that function
//Glocal scope - Can be accessed in if block and function