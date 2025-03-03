/*
function sayHello() {
  for(var i=0; i<5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHello();
//If we see above we can notice the the value of variable i can be accessed outside of for loop and 5 is pirnted in console.
//This is because of using var keyword
//If we use let we can avoid this behaviour

function sayHelloI(){
  for(let i=0;i<5;i++) {
    console.log(i);
  }
  console.log(i);
}

sayHelloI();//It will thorugh error

//Var are scoped to function in which they are defined
//let are scoped to blocks in which they are defined
*/




//Objects
const person = {
  name:'Sukumar',
  walk() {},
  talk() {} 
}

//We can access properties and methods using . notatoion
person.walk();
person.name = 'Test';
//Another way is use bracket notation. We can use this when we don't know the property we will be accesseing from object
let propertyToBeAccessed = 'name';
person[propertyToBeAccessed] = 'Test';

//this

const personThis = {
  name:'Sukumar',
  walk() {
    console.log(this);
  }
}

personThis.walk();

//Now lets do as below
const walk = personThis.walk; //reference for the walk method
walk(); //Here this points to the global this hence it will return window object

//Arrow functions:
const jobs = [
  {id:1, isActive:true},
  {id:2, isActive:true},
  {id:3, isActive:false}
];

const getActiveJobs = jobs.filter((job) => {
  return job.isActive;
});

console.log(getActiveJobs);