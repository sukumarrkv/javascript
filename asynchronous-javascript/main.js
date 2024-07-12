//Asynchronous Javascript - what and why?
//In a most basic-form, javascript is a synchronuos, blocking, single-threaded programming language.
//Explain above three terms - That is what
//Explain about problems - That is why - Like example if you are retriving data from database and what to execute
//another chunck of code it is not possible. Hence we need async javascript.

//Asynchronous Javascript - How?
//Javascript alone is not enough.
//We need new pieces which are outside of javascript to achieve thiswhich is were web browser come into play
//Web browsers define functions and API's that allow us to register functions that can be executed asynchronously.
//For example - The passage of time(setTimeout or setInterval), users interaction with mouse(addEventListner), or arrival of data over a network(callbaks, promises, async-await).

//Timeouts and Intervals - these are the traditional methods that javascript providesfor runninng code asynchronously.
//1)After a set timeperiod elapsed(Timeout), 2) At regular interval of time(Interval)
//Timeout(setTimeout()):
//This function executes a particular block of code once after a specified timehas elapsed
//Syntax - setTimeout(function, duration, param1, param2, ...)
function greet(){
    console.log('Hello');
}

setTimeout(greet, 2000);//Logs 'Hello after 2 seconds'

function greet1(name){
    console.log('Hello '+ name);
}

setTimeout(greet1,3000,'John');//Here is John is a argument to greet1 function
//To clear timeout, we can use the clearTimeout() function method passing the identifier returned by setTimeout as parameter
//cosnt clear = greet();
//clearTimeout(clear) //Nothing is logged in console

//Interval(setInterval()):
//This function repeateadly runs the same code over and over again at regular interval of time
//Syntax: setInterval(function,duration,param1,param2,...)
//Example of code is same as above. Use can pass greet function and it runs repeadeatly for set period of time.
//As this runs at regular interval we can use clearInterval() to stop the function execution

//Callbacks
//In Javascript, functions are first class objects
//Which means 1) Functions can be passed as an argument to a function
//2)A function can also be returned as values from other functions
function greet(name){
    console.log(`Hello ${name}`)
}

function greetSukumar(greetfn){
    const name = 'Sukumar';
    greetfn(name);
}
greetSukumar(greet);
//A function that is passed as an argument to another function is called a callback function
//The function which accepts a function as an argument or returns a function is called an higher order function
//In our example greet is an callback function and greetSukumar is an higher order function.

//Promise
//Do watch video about dinner scenario tp understand promise in layman terms

//Now we undersatnd What is Promise?
//A promise is simply an object in javascript
//A promise is always in one of the three states:
//pending: which is intial state, which is neither fulfilled nor rejected
//fullfilled: meaning that the operation completed successfully
//rejected: meaning that the operation is failed

//Now we undersatnd Why we need Promise?
//Promises help us deal with Asynchronous code in a far more simpler way compared to callbacks
//Callback hell can be avioded with Promises

//How to work with Promises?
//Lets go back to dinner scenario
//Dinner scenario                |  Javascript
//Your friend                    | Promise
//Can get tacos/Cannot get tacos | Promise Value 
//Can get tacos                  | Fullfill promise
//Cannot get tacos               | Reject promise 
//Setup Table                    | Success callback
//Cook Pasta                     | Failure callback

//How to create a Promise (Point 1)
//How to fullfill or reject a Promise (Point 2, 3 and 4)
//How to execute a callback function based on whetherthe promise is fullfilled or rejected (Point 5 and 6)

//How to create a Promise
const promise = new Promise();

//How to fullfill or reject a Promise
//Promise takes and function as argument and accepts two functions as argument, one if resolve function and other is reject function
//
// const resolvePromise = new Promise((resolve, reject) -> {
//    //When resolve is called changes the status of promise from pending to fullfilled
//    resolve();
// })

// const rejectPromise = new Promise((resolve, reject) -> {
//     //When reject is called changes the status of promise from pending to rejected
//     reject();
//  })

 //But both these functions are called after a async operation

//  const asyncResolve = new Promise((resolve, reject)->{
//     setTimeout(()->{
//         //Food truck found
//         //change the status from pending to fullfilled
//         resolve();//This function is called after 5 seconds
//     }, 5000)
//  })

//  const asyncReject = new Promise((resolve, reject)->{
//     setTimeout(()->{
//         //Food truck not found
//         //change the status from pending to rejected
//         reject();//This function is called after 5 seconds
//     }, 5000)
//  })

