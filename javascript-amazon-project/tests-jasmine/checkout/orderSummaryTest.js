import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';

describe('Test Suite: Order Summary', () => {
  it('Displays order summary', () => {
    //Here we are getting js-test-container html and add div with class js-order-summary
    //We actually render most of the html using this class. Hence it must be present in the container we want to test.
    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
    `;
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: 1
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId: 3
      }]);
    }); 
    loadFromStorage();
  });

  renderOrderSummary();
})