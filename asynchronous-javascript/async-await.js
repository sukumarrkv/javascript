//Async Await
//async/await keywords were intriduced in ES2017(ES8)
//These keyword allow us to write completely synchronous looking code while performing asynchronous tasks behind the scenes.

//async
//The async keyword is used to declare async functions
//Async functions are the functions that are instances of AsyncFunction constructor
//Unlike normal functions, async functions always return a promise
//Normal function
function greet(){
    return "Hello1";
 }
 
 console.log(greet());
 //Output will be
 //"Hello"
 
 //async function
 async function asyncGreet(){
     return "Hello2";
 }
 console.log(asyncGreet());
 //Outout will be
 //Promise{<fulfilled>:"Hello2"}
 
 //async function will automatically wrap the value in resolve function. So the above async function behind the scenes looks like below:
 async function asyncGreet1(){
     return Promise.resolve("Hello3");
 }
 //Now we can call then function to access the value - "Hello"
 asyncGreet().then((value)=>console.log(value));//output will be "Hello";
 
 //As you saw above when we use async keyword to a function it returns a promise, but it is more evident when we use async with await keyword
 
 //await
 //await keyword can be put infront of any async prmoise based function to pause your code until that promises settles and returns its result.
 //await keyword only works inside async functions,cannot use it in normal functions.
 
 async function awaitGreet(){
     let promise = new Promise((resolve, reject)=>{
         setTimeout(() => {
             resolve("Hello4");
         }, 1000);
     });
     let result = await promise;//Wait until promise resolves
     console.log(result);
 }
 awaitGreet();
 //As we used await the javascript pauses the execution for 1 second and prints result in console.
 //During this 1 second the greet function is paused for execution. We can do some other task meantime.
 
 //await helps in writing cleaner code and helps us with better exception handling
 //We can put await infornt of promise return values and use try catch for exception handling(See video)
 
 //Sequential vs concurrent vs parallel execution
 //This is important to understand as we unknowlingly slowly our code
 //Lets say we have below two functions

 function greetHello(){
    return new Promise((resolve) => {
        setTimeout(()=>{
             resolve("Hello");
        }, 2000)
    })
 }

 function greetWorld(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("World");
        }, 1000)
    })
 }

 //Sequential
 async function sequentialStart(){
    const hello = await greetHello();
    console.log(hello)//logs Hello after 2 seconds
    const world = await greetWorld();
    console.log(world)//logs World after 1 seconds
 }
 //sequentialStart();
 //Total time taken to log Hello World is 3 seconds

 //Concurrent
 async function concurrentStart(){
    const hello = greetHello();
    const world = greetWorld();

    console.log(await hello); //Logs after 2 seconds
    console.log(await world); //Logs after 2 seconds
 }
 //concurrentStart();
 //Total time taken to log Hello World is 2 seconds
 //We can use concurrent execution in case of loading page contents. Fire all the requests concurrently
 //and display inorder.

 //Parallel
 function parallelStart(){
    Promise.all([
        (async ()=>console.log(await greetHello()))(), //Logs after 2 seconds
        (async ()=>console.log(await greetWorld()))(), //Logs after 1 second
    ]);
 }
parallelStart();

//If above code confuses i have wriiten below code to simplyfy
async function functionHello(){
    const result = await greetHello();
    console.log(result);
}

async function functionWorld(){
    const result = await greetWorld();
    console.log(result);
}

function parallel(){
    Promise.all([
        (async ()=>await functionHello())(),
        (async ()=> await functionWorld())(),
    ])
}
parallel();
