//Lets understand how Async code with setTimeout executes in javascript runtime environment
//Lets say we have below code snippet

console.log('First');
setTimeout(()=>{
     console.log('Second');
}, 2000)
console.log('Third');

//Execution begins with global scope, hence global() function is pushed into callstack().
//Next first log is pushed into callstack. After lets say 1ms first is logged into console and first log function is popped out off callstack.
//Execution moves onto line number 5. At 2ms setTimeout(cb,2000) is pushed into callstack. As the setTimeout function is provided by web browser.
//So the cb,2000 is pushed into Web API's and the setTimeout function is popped out off callstack. Web API's will start a timer of 2s in background.
//At 3ms third log function is pushed onto callstack, third is printed into console and third log function is popped out of callstack.
//After 2s is passed by now the cb function is ready to be executed. But it will not be directly pished into callstack from WebAPI's and this for a goof reason.
//In callstack we will have functions that might be executing. As javascript can do one thing at a time, pushing this cb will cause total chaoes which will result in getting unexpected results.
//Hence Web API pushed the cb to callback queue. Now the cb is ready to be executed. The one who decides when the cb must be executed is Event Loop.
//The Event loop constantly checks callstack, if it is empty it pushes the functions from callback queue to callstack.
//In our example callstack is empty meaning no code is running in global scope, so Event loop pushes our cb onto callstack.
//One key point here is eventhough the callback queue just holds the function reference, the event loop pushes the cb into callback and executes it.
//In cb log statement is encountered, log function is pushed into callstack. Then Second is logged into console and second log function is popped out of callstack.
//As we don't have any code to be executed in cb, the cb is also popped out of callstack and so the global function.

//What happens we set 0 seconds in setTimeout function.
//All the above happens same till pusging the cb,0 into Web API's. Now as the timer is 0, Web API's immediately pushes the cb into callback queue.
//while this is happening in background, the execution may have gone into next line i.e onto line 8 in our case.
//So third log is pushed into console. The Event loop checks if the callback queue is empty, it is not. 
//Hence third is logged into console. After that cb is pushed into callstack and process continues.
//Run the samee above code with 0 delay see the code in action.

//As we can see 0ms in setTimeout function does not mean it will be executed immediately. It has to wait for its turn(In other words, callback needs to be empty).
//So the delay mentioned in setTimeout function is minimum delay and not gaurenteed deplay.