//Async javascript recap:
//Javascript is a synchronous, blocking, single-threaded language.
//To make async programming possible, Javascript alone isn't enough. We also need browser.

//Lets understand what are the different parts we get from Javascript and browser whihc makes asynchronously possible
//JS runtime environment:

//First part of implementation is JS engine
//JS engine consists of a Memory Heap and Callstack(Imagine them as rectangular boxes side by side).
//Whenever we delacre  variables/functions memory is allocated in the memory heap.
//Whenever we execute the code the functions are pushed to callstack and when the function returns it is popped out of callsatck.
//A popular example of JS engine i V8 engine present in chrome

//Second part of the implementation is browser Web API's(setTimeout(), Promise, xhref, dom etc)
//Imagine this  Web API's as a rectangular box just beside of above two rectangualr boxes 
//This Web API's are implemented in javascript, they are provided by browser for which javascript ahs acess to.


//Third part of implementation is Callback queue/Task Queue or an message queue.
//Imagine this Callback queue/Task queue as a rectangular box just below above boxes.

//The fourth and final important part is Event Loop.
//Imagine this present in between Callback queue rectangular box and Callstack rectangular box as round (See video).
//The job of Event Loop is to check if Callstack is empty, if it is empty push an item from Callback queue to the callstack.

//Please do watch video for more clear understanding about diagram and explaination.