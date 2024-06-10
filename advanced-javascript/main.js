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