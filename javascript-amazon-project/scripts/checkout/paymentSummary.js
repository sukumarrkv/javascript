import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";
import { addOrder } from "../../data/order.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function renderPaymentSummary(){
  let productPriceCents = 0;
  let deliveryChargeCents = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    deliveryChargeCents += deliveryOption.priceCents;
  });

  const totalCentsBeforTax = productPriceCents + deliveryChargeCents;
  const taxCents = totalCentsBeforTax * 0.1; //10% tax
  const totalCents = totalCentsBeforTax + taxCents;

  const paymentSummaryHtml = `
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatCurrency(deliveryChargeCents)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCentsBeforTax)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
      </div>

      <button class="place-order-button button-primary
                     js-place-order">
        Place your order
      </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;

  /*
  document.querySelector('.js-place-order')
  .addEventListener('click', async () => {
    try {
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cart: cart
        })
      });
  
      const order = await response.json();
      addOrder(order);

    } catch (error) {
      console.log('Unexcepted error occurred. Please try again later');
    }

    window.location.href = 'orders.html'; //file path to html you want to display
  });
  */

  document.querySelector('.js-place-order')
  .addEventListener('click', () => {
      const today = dayjs();
      const formattedDate = today.format('dddd, MMMM D');
      const randomId = "id"+ Math.floor(Math.random()*1000000);
      const order = {
        orderId: randomId,
        orderedTime: formattedDate,
        total: formatCurrency(totalCents),
        products: getAllProducts(cart)
      };
      console.log(order);
      addOrder(order);
      window.location.href = 'orders.html'; //file path to html you want to display
  });
 }



function getProductDetailsForOrdering(productId, quantity, deliveryDate) {
  const matchingProduct = getProduct(productId);
  const product = {
    name: matchingProduct.name,
    quantity: quantity,
    deliveryDate: deliveryDate,
    image: matchingProduct.image
  }
  return product;
}

function getAllProducts(cart) {
  const products = [];
  cart.forEach((cartItem) => {
    const today = dayjs();
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const formattedDate = deliveryDate.format('dddd, MMMM D');
    products.push(getProductDetailsForOrdering(cartItem.productId, cartItem.quantity, formattedDate));
  });
  return products;
}