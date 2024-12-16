//Class - Object generator
class Cart {
  cartItems;
  #localStorageKey; //Private field

  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  //Private method
  #loadFromStorage() { //This is same as loadFromStorage: function() {} //This is shorthand method syntax. This is also called as method (as it is present inside object)
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
    if(!this.cartItem){
      this.cartItems = [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: 1
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId: 3
    }];
    }
  }

  saveToLocalStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

 addToCart(productId){
    let matchedItem;
  
    this.cartItems.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchedItem = cartItem;
        }
      });
  
      //Truthy value if we have some object in matchedItem
      if(matchedItem){
        matchedItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: 1
        }); 
      }
  
      this.saveToLocalStorage();
  }

 removeFromCart(productIdToBeDeleted){
  this.cartItems.forEach((cartItem, index) => {
      if(cartItem.productId === productIdToBeDeleted){
        cart.splice(index,1);
      }
    });
  
    this.saveToLocalStorage();
  }

updateDeliveryOption(productId, deliveryOptionId){
    let matchedItem;
  
    this.cartItems.forEach((cartItem) => {
        if(productId == cartItem.productId){
          matchedItem = cartItem;
        }
      });
      matchedItem.deliveryOptionId = deliveryOptionId;
  
     this.saveToLocalStorage();
  }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

//This is setup code after creating a object, we will move thiss into constructor
// cart.localStorageKey = 'cart-oop';
// cart.localStorageKey = 'cart-business';

// cart.loadFromStorage();
// businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);