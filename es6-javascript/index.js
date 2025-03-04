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

//Arrow functions with this
const personArrow = {
  talk() {
    setTimeout(function() {
      console.log('this', this);
    }, 1000);
  }
}

personArrow.talk();
//Without timeout this will print the reference to person obejct (deafult behaviour of this when called with object)
//Now with setTimeout the function (should not be a arrow function) we pass a first parameter is a separate/independant function. Hence when we this with setTimeout we get window object.

//To have this point to the object
//1) set a variable in talk() method var self = this; and call self in console.log statement
//2) Use arrow function in setTimepot instead of normal regular function

//Array.map

const colors = ["red", "green", "green"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//Object destructing

const address = {
  street:'',
  city: '',
  country: ''
}

//Lets say if we want to have street, city, country defined in separate variables we usallly do like below
// const street = address.street;
// const city = address.city;
// const country = address.country;

//But using object descturing we simply this

const {street, city, country} = address;
//We can have one or nore than one properties defined in above folower bracket
//We can have custom names lets say if we want to have street names st
const {street: st} = address;