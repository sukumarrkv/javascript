import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
//The above type of importing without curly braces is called default importing.
//More info can be found in money.js
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary() {
  let orderSummaryHTML = '';

  //Testing dayjs features
  //More info on how to use dayjs can be found in official days documentation
  //console.log(dayjs());
  // const today = dayjs();
  // console.log(today);
  // const addSevenDays = today.add(7,'days');
  // console.log(addSevenDays);
  // //Formatting date
  // const formatDate =today.format('YYYY, MMMM, D');
  // console.log(formatDate);

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchedProduct = getProduct(productId);

      const deliveryOptionId = cartItem.deliveryOptionId;

      const matchingDeliveryOption = getDeliveryOption(deliveryOptionId);

      const today = dayjs();
      const deliveryDate = today.add(matchingDeliveryOption.deliveryDays, 'days');
      const formattedDate = deliveryDate.format('dddd, MMMM D');

    orderSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchedProduct.id}">
        <div class="delivery-date">
          Delivery date: ${formattedDate}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchedProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchedProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchedProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchedProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${generateDeliveryHTML(matchedProduct, cartItem)}
            </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  function generateDeliveryHTML(matchedProduct, cartItem){

    let html = '';
    const today = dayjs();

    deliveryOptions.forEach((deliveryOption) => {
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const formattedDate = deliveryDate.format('dddd, MMMM D');

    const isChecked = deliveryOption.id == cartItem.deliveryOptionId;

    const deliveryCharge = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `
      
      html +=`
      <div class="delivery-option js-delivery-option"
      data-product-id = "${matchedProduct.id}"
      data-delivery-option-id = "${deliveryOption.id}"
      >
        <input type="radio" 
        ${isChecked ? 'checked' : ''}
        class="delivery-option-input"
          name="delivery-option-${matchedProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${formattedDate}
        </div>
          <div class="delivery-option-price">
            ${deliveryCharge} Shipping
          </div>
        </div>
      </div>
    `
    });

    return html;
  }

  document.querySelector('.js-order-summary').innerHTML = orderSummaryHTML;

  //Two steps involved in deleting an item
  //1) Remove the item from cart
  //2) Update the DOM - this can be done by removing that particular order summary box from DOM
  //To do this we will add a special class with name involving productId which will help in identifying which item to remove from DOM
  document.querySelectorAll('.js-delete-link').forEach((deleteLink) => {
    deleteLink.addEventListener('click', () => {
      const productIdToBeDeleted = deleteLink.dataset.productId;
      removeFromCart(productIdToBeDeleted);
      document.querySelector(`.js-cart-item-container-${productIdToBeDeleted}`).remove();
      renderPaymentSummary();
    });
  });

  document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      const productId = element.dataset.productId;
      const deliveryOptionId = element.dataset.deliveryOptionId;
      //const {productId, deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}