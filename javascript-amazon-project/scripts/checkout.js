import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js'
//import '../data/cart-class.js'
//import '../data/backend-pratice.js'
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//Promises:
new Promise((resolve) => {
  console.log("Started promise");
  loadProducts(() => {
    console.log("Finished loading");
    resolve();
  })
}).then(() => {
  console.log("In the next step");
})

//Lets convert below callback into promises:
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  })
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

loadProducts(()  => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

//The advantages of using promises over callbacks are it aviods running inot callback hell and it makes our code more flat(readable).
//Lets try to see in action
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/

//Lets rewrite above code using promises:
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve(value1);
  })
}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  })
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary(); 
});
*/

//If we want we can load the products and cart at the same time using Promise.all
/*
Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("value1");
    })
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  })
]).then((values) => { //this values will capture all the parameters pased in all resolve function above as saves it as list
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary(); 
})
*/

/*
//Async and await:
//Async and await help us to write asynchronous code in better way
async function logMessage() {
  console.log('Hello from async function');
  return 'value from async function'; //this is same as resolve('value from async function') and will be available to then method as a parameter
}

//async functions always return a promise
//The above lines of code is equal to as below
// function logMessage() {
//   return new Promise((resolve) => {
//     console.log('Hello');
//     resolve();
//   });
// };

//We can use the logMessage function as we do with functions returning a promise
logMessage().then((value) => {
  console.log(value);
  console.log('Next Steps from async function')
});

//await keyword is used to write asynchronous code as normal code. It waits for the prmose to resolve then only it will allow next steps to execute.
//await must be used only inside async function

async function logTheMessage() {
  console.log('Hello from async await function')

  await loadProductsFetch();

  return 'value from async await function';
}

//The above code is equal to 
// function logMsg()  {
//   new Promise((resolve) => {
//     console.log('Hello from async await function');
//     resolve();
//   }).then(() => {
//     return loadProductsFetch();
//   }).then(() => {
//     return new Promise((resolve) => {
//       resolve('value from async await function');
//     });
//   });
// };

logTheMessage().then((value) => {
  console.log(value);
  console.log('Nexts steps from async await function');
});
*/

//Lets comment Promise.all code and use async await
async function loadPage() {
  try { //In async await we uae try cathc for error handling
    //throw 'error1'; //manually throwing error
    await loadProductsFetch();

    const result = await new Promise((resolve, reject) => {
      //throw 'error2'; //manually throwing error (in synchrnous way)
      //To throw error which might occur in future (asynchronous way) we use reject
      loadCart(() => {
        //reject('error3');
        resolve('value1'); //to access this we need to assign this promise to a variable
      })
    });
  } catch (error) {
    console.log('Unexpected error. Please try again later');
  }


  renderOrderSummary();
  renderPaymentSummary(); 
}

//Above code looks more cleaner and readable

loadPage();