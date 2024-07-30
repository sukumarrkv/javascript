//Nested scopes

let a=10;
function outer(){
    let b=20;
    function inner(){
        let c=30;
        console.log(a,b,c);
    }
    inner();
}
outer();//output: 10 20 30

//Closures

//Function without closures
function outer1(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner();
}

//outer1();
//outer1();
//Here output will be 1 1

function closure(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner; //As we are returning function here closures will come into picture.
}

const fn = closure();
fn();
fn();
//Here output will be 1 2

//Function currying
//function f(a,b,c) will be transformed into f(a)(b)(c)

function sum(a,b,c){
    return a+b+c;
}
console.log(sum(2,3,5));
//sum(2,3,5)->sum(2)(3)(5)

function curry(fn){
    return function first(a){
        return function second(b){
            return function three(c){
                return fn(a,b,c);
            }
        }
    }
}

let curriedSum = curry(sum)//Here sum is function we defined above
console.log(curriedSum(2)(3)(5));

//If above is cofusing let simply the code
let add2 = curriedSum(2);
let add3 = add2(3);
let add5 = add3(5);
console.log(add5);

//this keyword
//The value of this is determined how the function is called
//There are four ways we can invoke a function and determine the value of this
//Implicit binding, Explicit binding, new binidng, default binding

//Implicit binding:
const person = {
    name:'Sukumar',
    sayMayName: function(){
        console.log(`My name is ${this.name}`)
    }
}
person.sayMayName(); //this will be replaced by person

//Lets say we have sayMyName() defined outside

//Explicit binding
function sayMyName(){
    console.log(`My name from explicit is ${this.name}`)
}

sayMyName.call(person); //Explicit binding - every function will have call method where we can pass an reference, the passed refernce will be this

//New binding
//In javascript we can invoke a function with new keyword. In such scenarios an emtpy this will be invoked.
 function Person (name){
    //this = {}//Whenever we use new keyowrd, Javascript internally create a new empty this object for every person object we create uisng new keyword.
    this.name=name;
 }

 const p1 = new Person('Sukumar');
 const p2 = new Person('Superman');
 console.log(p1.name,p2.name);

 //Default binding - It is fallback binding if none of the above bindings matched.
 sayMyName();
//If we call sayMyName() function from line 89 we get out as "My name from explicit is undefined". This is deafult binding.
//As we don't have dot notation, call, new keyword it is deafult binding.
//It printed undefined because we don't have any value for name in global scope. If we have some value lets say 'Sukumar', it would print "My name from explicit is Sukumar".

//Prototype:  Share methods, properties across instances
function NewPerson(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new NewPerson('Bruce', 'Wayne');
const person2 = new NewPerson('Clark', 'Kent');

//As JS is dynamic language, we can attach properties at runtime.
// person1.getFullName =function(){
//     return this.firstName+" "+this.lastName;
// }

// console.log(person1.getFullName());
// console.log(person2.getFullName()); //throws errors as getFullName is only defined for person1

NewPerson.prototype.getFullName = function(){
    return this.firstName+" "+this.lastName;
}
console.log(person1.getFullName());
console.log(person2.getFullName());

//Prototypal Inheritance - One more use of prototype is inheritance
function Superhero(fName, lName){
    NewPerson.call(this,fName,lName); //Inherit properties from NewPerson
    this.superHero= true;
}
Superhero.prototype.fightCrime = function(){
    console.log("Fight crime");
}

//To inherit methods
Superhero.prototype=Object.create(NewPerson.prototype);
//First it will check methods available in SuperHero if not present it will check in NewPerson.
const superHero = new Superhero('Super', 'Man');
Superhero.prototype.construtor = Superhero; //This line will make sure that super hero object is created using Superhero and not NewPerson(As JS thinks)
console.log(superHero.getFullName());