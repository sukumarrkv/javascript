import {cart, addToCart} from '../data/cart.js';
import { products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

//We need liver server inorder for modules to work
//One more way of importing
//import {cart as myCart} from '../data/cart.js';
//by doing this we can use cart varibale again in the below code with out any errors

//Benefits of modules:
//We don't get naming conflicts
//We don't need to follow order of files in the html

//console.log('Hello');
//Main Idea of Javascript:
//1) Save the data
//2) Generate the HTML
//3) Make it interactive

// const products = [{
//   image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//   name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//   rating: {
//     stars: 4.5,
//     count: 87
//   },
//   priceCents: 1090
// }, {
//   image:'images/products/intermediate-composite-basketball.jpg"',
//   name: 'Intermediate Size Basketball',
//   rating: {
//     stars: 4,
//     count: 127
//   },
//   priceCents: 2095
// }, {
//   image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//   name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//   rating: {
//     stars: 4.5,
//     count: 56
//   },
//   priceCents: 799
// }];

//we are getting this products from products.js
let productsHtml = '';
products.forEach((product) => {
  productsHtml += `
       <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button"
                  data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHtml;

//We might think moving this function into cart.js but that is wrong because we are using this function to update
//we page.So it must be inside this js file only
function updateCartQuantity(){
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    //console.log(cartQuantity);

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

//Now to find which product user has added to cart we will use data-attribute from HTML
//which uniquely identifies the each product
//Syntax rule for adding data-attribute in hmtl
//HTML attribute should start with data- and followed any any meaningful name (eg: see above)
//To get the data-attribute we should use dataset method
document.querySelectorAll('.js-add-to-cart-button').forEach((buttonElement) => {
  buttonElement.addEventListener('click', () =>  {
    // console.log("Added to cart");
    // console.log(buttonElement.dataset.productName);
    //data-attribute defined in kebab-case (data-product-id) will be converted into camel case (productId)
    const productId = buttonElement.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
  });
});