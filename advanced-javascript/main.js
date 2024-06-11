//Nested function scope's
//Neted functions will have access to variables declared with in the function and also the variables declared in the outer functions
let a=10;
function outer(){
    let b=20;
    function inner(){
        let c=30;
        console.log(a,b,c);
    }
    inner();
}
outer();

//Closures - comes into picture when we return a function(inner) from a function(outer)
//Let see without closures
function outer1(){
    let counter=0;
    function inner1(){
        counter++;
        console.log(counter);
    }
    inner1();
}
outer1();
outer1();
//The output will be:
//1
//1
//What we coded is without a closure in javascript. We are just calling inner function inside outer function
//and finally calling outer function twice. For every function call javascript allocates a temporary memory
//for the function and variables and hence in the second funtion call the counter variable will have value 0 rather than 1

//Lets see with Closures

function outer2(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}
const fn = outer2();
fn();
fn();
//The output will be:
//1
//2
//As we are reuturning a funtion (inner) from a function (outer2), closure will come into picture. Now Closure will into picture.
//When we are returning a function from another function we are effectively returning function definition along with
//function's scope (memory of the variables declared). This combimation of function and it's scope chain is called closures in Javascript.

//Function Currying - Currying is a process in functional programming where we transform a function with multiple
//arguments into a sequence of nesting functions that take one argument at a time
//function(a,b,c)is transformed into f(a)(b)(c)

function sum(a,b,c){
    return a+b+c;
}
console.log(sum(2,3,5));
//sum(2,3,5)->sum(2)(3)(5)

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));
//Breaking down (If it is cinfusing)
const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);

//this keyword
//The javascript this keyword which is used as a function, refers to the object it belongs to
//It makes function reusable by letting you decide the object value
//The object value is determined entirely by how a function is called
//How to determine 'this'? - Implicit binding, Explicit binding, New binding, Default binding
//Implicit binding
const person ={
    name:'Sukumar',
    sayMyName: function(){
        console.log(`My Name is ${this.name}`);
    },
}
person.sayMyName();

//Explicit binding
//In Javascript we can use call method present in every function and pass the type
function sayMyName1(){
    console.log(`My name is ${this.name}`);
}

sayMyName1.call(person); //In above method this is replaced with person

//New binding
function newPerson(newName) {
    this.newName = newName;
}
const p1 = new newPerson('Sukumar'); //Constructor function
const p2 = new newPerson('Test');
console.log(p1.newName, p2.newName);

//Default binding  -if we don't have implicit, explicit and new keyword used 
//const name = 'Superman'; - If we are using browser
globalThis.name = 'Superman'; // As we are using node
function saymyName2(){
    console.log(`My name is ${this.name}`);
}

saymyName2(); //Output will be My name is undefined
//As we don't have global name variable defined it is undefined
//Let define global name variable (Line 112 - 113)
//Order of preference - new -> explicit -> implicit -> default

//Prototype

function AnotherPerson(fName, lName){
    this.fisrtName = fName;
    this.lastName = lName;
}
const person1 = new AnotherPerson('Bruce','Wayne');
const person2 = new AnotherPerson('Clark','kent')
//Lets say we need a function which returns full name
person1.fullName = function() {
    return this.fisrtName+" "+this.lastName;
}
console.log(person1.fullName());
//If we pass person2 in place of person1 we get error that person2.fullName is not a function.
//We wan't fullName function to be avaiable for all the objects defined for AnotherPerson.
//So we use prototype here to achieve this
AnotherPerson.prototype.fullName = function (){
    return this.fisrtName+" "+this.lastName;
}
console.log(person1.fullName());
console.log(person2.fullName());

//Prototypal Inheritance
//If we want to inherit variables and methods from other class we use Prototypal Inheritance
//Let's say we need to create a SuperMan which inherits from AnotherPerson

function SuperHero(fName, lName){
    AnotherPerson.call(this, fName, lName);//Inherting variables. Here this refers to SuperHero
    this.isSuperHero = true;
}
SuperHero.prototype = Object.create(AnotherPerson.prototype); //Inherting methods
const batman = new SuperHero('Brue','Wayne');
SuperHero.prototype.fightCrime = function (){
    console.log('Fighting crime');
}
console.log(batman.fullName());