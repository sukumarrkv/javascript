//setTimeout
function greet(name){
    console.log('Hello '+ name);
}

setTimeout(greet,1000,'Sukumar');

const timeout = setTimeout(greet, 2000, 'World');
clearTimeout(timeout); //clearing timeout

//setInterval
//setInterval(greet,1000,'Sukumar');
const interval = setTimeout(greet,2000,'World');
clearInterval(interval); //clearing interval

//Callback - Functions which are passed as an argument to other functions
//Synchronous callbacks - Normal functions passed as an argument  to other function
function greetUser(userName){
    console.log("Greet "+userName);
}

function greetSukumar(greetfn){
    const name = 'Sukumar';
    greetfn(name);
}
greetSukumar(greetUser);
//Here grretUser is callback function and greetSukumar is higher order function

//Asynchronuous callbacks
//These are used to pause the execution for certain period of time eg:cb passed setTimeout(line 6), eventlistener, data fetching.
//document.getElementById("").addEventListener("click", callback);
//$.get("url", callback)

//Promise
const resolvePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Bringing tacos');
    },2000)
})

const rejectPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Cannot bring tacos');
    },2000)
})

resolvePromise.then((value)=>{
    console.log(value);
    console.log('Set up the table for dinner');
})

rejectPromise.catch((error)=>{
    console.log(error);
    console.log('Start preparing pasta');
})
//We can have promise.then(onFullfillment, onRejection);
//We can chain promises like promise.then().then().then()..etc this will solve the callback hell problem
//Some important statis methods of Promise are .all(), allSettled(), race().

//Async await
//We can still improve writing promises, we can write synchronous looking code while performing asynchronous tasks behind the scenes.

//Async fuctions are the functions that always return promise.
async function asyncGreet(){
    return "Hello"; //Output will be Promise{'Hello'}
}
console.log(asyncGreet());

//await
//We can add this infront of promise based function to pause the code until that promise settles and returns a result.
//It only works inside async functions

async function awaitGreet(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hello')
        },1000)
    });

    const result = await promise;
    console.log(result);
}

awaitGreet();

//EventLoop
//The promise will always set the result to the promise value's object when it is done executing.
//Later it will be pushed into the microtask queue.
//Javascript gives more priority to microtask queue than callback queue hence the function present in microtask queue will be pushed into callstack first.
