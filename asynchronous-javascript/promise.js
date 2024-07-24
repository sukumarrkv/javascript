//Lets understand how Async code with Promise executes in javascript runtime environment
//Lets say we have below code snippet

console.log('First');

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Second');
    }, 2000)
})

promise.then((value)=>{
    console.log(value);
})

console.log('Third');

//Lets us visualize how the code gets executed with promise.
//Apart from previous setup we need two more boxes one in memory(As we have promise variable define) 
//and one is micro task queue which will be inbetween callbak queue and event loop.

//Execution start with global scope, hence gobal is pushed into callstack, 
//later first log in pushed into callstack and logs the first and it is popped out of callstack.
//For more clear understanding let us assume we have fetch api used instead of new promise to return an promise.
//Next fetch(url) is pushed into callstack, as fetch is browser api, it is pushed into Web API's.
//Unlike setTimeout function fecth function leaves a varibale 'promise' in memory.
//So promise varibale in memory will have a value, onFullFillment, onRejection (See video explaination)
//Now fetch(url) starts executing in background, let us assume it takes 2s.
//Meanwhile the callstack is empty, hence promise.then(cb) is pushed into callstack. The cb is pushed into onFullFillement of promise variable in memory.
//Next third log is pushed into callstack, it logs Third in console and it is popped out of callstack.
//Two secinds have passed by, the fetch api will set that as promise value in the promsie variable.
//When the promise value is fullfilled, javascript will execute all function present in onFullfillment array.
//The cb function cannot directly pushed into callstack as it leads to chaoes, hence it is pushed into microtasks queue.
//Now Event loop checks if call stack is empty, if empty it pushed cb+value into callstack.
//So cb+value is pushed into callstack, second log is pushed into callstack, Second is logged into console, second log function is popped out of callstack and so is cb.
//In our exmample we assumed the promise will be fullfilled, if it failes onRejection is executed same as onFillfillment.
//As no more code to run, the memory is garbage collected.

//To understand why we need microtask queue, see promise-settimeout.js.