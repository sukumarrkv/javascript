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