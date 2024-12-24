import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js'
//import '../data/cart-class.js'
//import '../data/backend-pratice.js'
import { loadProducts } from "../data/products.js";


loadProducts(()  => {
  renderOrderSummary();
  renderPaymentSummary();
});

