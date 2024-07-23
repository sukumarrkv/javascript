//Lets see how synchronous code executes in javascript runtime environment
//Lets say we have below three console.log statments
console.log('First');
console.log('Second');
console.log('Thrid');
//Lets walk thorugh the code as if runtime is executing

//The thread of execution always start in global scope. Hence global() is pushed into the callstack.
//Next first console log is pushed onto the callstack. Lets us assume it takes 1ms to execute. So after 1ms first is printed in console and the first log function is pushed off the callstack.
//Now execution come to line 4. Now second console log is pushed onto the callstack. Same as above but second log is popped out of callstack.
//Now execution come to line 5. Now third console log is pushed onto the callstack. Same as above but third log is popped out of callstack.
// There is no more code to execute now global() is popped out of callstack. 