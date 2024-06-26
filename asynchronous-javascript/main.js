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

