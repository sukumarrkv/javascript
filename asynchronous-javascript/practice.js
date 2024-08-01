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
