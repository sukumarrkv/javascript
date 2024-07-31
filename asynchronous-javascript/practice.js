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