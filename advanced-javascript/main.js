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

//Class - Classes are just a syntactical sugar over what was already existing in javascript (especially 
// on prototype and protypal inheritance)
//Let convert above prototype and prototypal inheritance code into class
class PersonClass {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    //We will define other methods here insode class instead of defining separately using protytpe (line 139)
    sayMyName(){
        return this.firstName+ " " + this.lastName;
    }
}
const classP1 = new PersonClass('Bruce', 'Wayne');
console.log(classP1.sayMyName());
//Converting prototypal inheritance code
class NewSuperHero extends PersonClass{
    constructor(fName, lName){
        super(fName, lName);
        this.isSuperhero = true;
    }

    fightCrime(){
        console.log("Fights crime");
    }
}

const newSuperhero = new NewSuperHero('Clark', 'Kent');
console.log(newSuperhero.sayMyName());

//Iterables and Iteraters
//In Javascript we perform iteration using for loop(for eg) using i variable.
//This has two problems - 1) We need to figure out how to access each element in the string/array (We use i to do this)
//Accessing the element will be different for different datatypes (in String we use charAt, in array we use arr[i])
//We needed an abstraction on how to access elements and works across different data structres. Hence Iterables and Iteraters are introduced.
//To achieve this in 2015 two new protocols (Iterable and Iteraters) were introduced and ecided that some of teh data structers implement these protocols by default.
//They include string, array, map and set. One ierator example is for of loop.
//There are some of set of rules for the object to be iterable.
//Creating our own iterable
const obj = {
    [Symbol.iterator]: function(){
        let step = 0;
        const iterator = {
          next: function(){
            step++;
            if(step==1){
             return {value:'Hello', done: false};
            }else if(step == 2){
                return {value:'world', done: false}
            }
            return {value:undefined, done:true}
          }
        }
        return iterator;
    }
}

for(let word of obj){
    console.log(word);
}
//What we done right now Javascript does the same for string, array, map, set. That is how we use for of loop on them.

//Generators
//As we seen above creating our own iterables is verbose. Generator helps us in defining iterables in easy and simple way.
//Generators are special functions which are used to simply creating iterables in javascript.

function normalFunction(){ //Define normal functions
    console.log('Hello');
    console.log('World');
}
function* generatorFunctionDefination(){}//Defining generator function
//As we can see normal function uses run to completion model. That means it begins from start and ends at last line.
//If we want to exit from middle of execution we need to return from that line ot throw error.
//But generator allows us to stop and continue execution form where it stopped or in other words it will pause the execution.
//To achieve the behaviour we use yield keyword. Generators use this yield keyword and stops the execution.
function* generatorFunction(){
    yield 'Hello';
    yield 'World';
}

const resultObject = generatorFunction();
//The generator function returns a generator object which is nothing but an iterable
for(let word of resultObject){
    console.log(word);
}