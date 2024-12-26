import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js'
//import '../data/cart-class.js'
//import '../data/backend-pratice.js'
import { loadProducts } from "../data/products.js";
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