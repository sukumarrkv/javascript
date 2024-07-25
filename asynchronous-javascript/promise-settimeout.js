//Lets understand how Async code with Promise and setTimeout executes in javascript runtime environment
//Lets say we have below code snippet

setTimeout(()=>{
  console.log('First')
}, 0);

const promise = new Promise((resolve, reject)=>{
    resolve('Second');
});

promise.then((value)=>{
    console.log(value);
});

for(let i=0;i<3000;i++){
   
}

console.log('Third');

//Let us assume the for loop waits for around 3 seconds for execution.
//We will have same runtime model from previous example.
//global() is pushed onto the stack.
//setTimeout() is pushed into callstack. cb+0 is pushed into Web API's. As the time is 0ms, cb immediately sent to callback queue.
//cb thinks that it will be executed immediately in callstack but that is not rihgt.
//During this time of execution of settimeout function execution the execution have moved into line 8.
//Let us assume we have fetch API instead of new Promise.
//So the fetch(url) is passed into Web API's, it leaves a promise object in Memory.
//While this is happening the execution have moved into line 12. promise.then() is pushed into callstack.
//the cb from promise.then is set to onFullfillment array in promise object in Memory.
//Next while loop will start execution in callstack.
//Meanwhile fetch is executed it will set to promise object value.
//Once the value is available, the promise then immediately executes the onFullfillment array, in our case it is cb.
//As we already know it will not directly push into callstack, hence it will push cb+value into microtask queue.
//Meantime while would have executed, it will popped out of callstack.
//As we still have code to executed in execution thread, third console log is pushed into callstack(and not the cb+value or cb in queues).
//Third is logged into console, log function is popped out of callstack.
//Next event loop pushes cb+value into callstack, as Event loop gives more priority to microtask queue over callbackqueue.
//we have log function in cb, it is adde din callstack, Second is logged into console, second log is popped out of callstack.
//As we don't have anything to execute in cb, it is also popped of callstack.
//Finally cb from callback queue is push into callstack, log function gets executed, First is logged into console and first log is popped out of callstack.
//As we don't have any code to execute global() is also popped out of callstack.
