import { orders } from "../data/order.js";


let ordersHTML = '';
orders.forEach((orderItem) => {
   ordersHTML += `
  <div class="order-container">
            
    <div class="order-header">
      <div class="order-header-left-section">
        <div class="order-date">
          <div class="order-header-label">Order Placed:</div>
          <div>${orderItem.orderedTime}</div>
        </div>
        <div class="order-total">
          <div class="order-header-label">Total:</div>
          <div>${orderItem.total}</div>
        </div>
      </div>

      <div class="order-header-right-section">
        <div class="order-header-label">Order ID:</div>
        <div>${orderItem.orderId}</div>
      </div>
    </div>

    <div class="order-details-grid">
    ${displayProductsFromOrders(orderItem)}
    </div>
  </div>
`;
});

function displayProductsFromOrders(orderItem) {
  let productsHTML = '';
  orderItem.products.forEach((productItem) => {
      productsHTML += `
      <div class="product-image-container">
          <img src=${productItem.image}>
        </div>
  
        <div class="product-details">
          <div class="product-name">
          ${productItem.name}
          </div>
          <div class="product-delivery-date">
          ${productItem.deliveryDate}
          </div>
          <div class="product-quantity">
            Quantity: ${productItem.quantity}
          </div>
          <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>
  
        <div class="product-actions">
          <a href="tracking.html">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
      </div>
      `;
    });

  return productsHTML;
}

document.querySelector('.js-order-grid').innerHTML = ordersHTML;