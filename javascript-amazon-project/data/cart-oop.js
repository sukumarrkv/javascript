//Object Oriented Programming
//Organising out code into objects (tries to represent the real world)
//Why do we write our code in OOP is we can relate our objects created in real worls scenarios
//Eg: A cart can have items, we add an item to add, remove an item from cart etc
const cart = {
  cartItems: undefined,

  loadFromStorage() { //This is same as loadFromStorage: function() {} //This is shorthand method syntax. This is also called as method (as it is present inside object)
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
  
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
  },

 saveToLocalStorage() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },

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
  },

 removeFromCart(productIdToBeDeleted){
  this.cartItems.forEach((cartItem, index) => {
      if(cartItem.productId === productIdToBeDeleted){
        cart.splice(index,1);
      }
    });
  
    this.saveToLocalStorage();
  },

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

cart.loadFromStorage();

//cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
//console.log(cart);

//The advantage of wrting oops code is we can create multiple objects. 
//Like normal amazon we have amazon business/. If we want to create a new cart for business we can use above created cart.
//Instead of copy pasting the code lets create a function which can generate a object

function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
  
    loadFromStorage() { //This is same as loadFromStorage: function() {} //This is shorthand method syntax. This is also called as method (as it is present inside object)
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
    
      if(!this.cartItem){
        console.log("Inside cart initialization");
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
    },
  
   saveToLocalStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
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
    },
  
   removeFromCart(productIdToBeDeleted){
    this.cartItems.forEach((cartItem, index) => {
        if(cartItem.productId === productIdToBeDeleted){
          cart.splice(index,1);
        }
      });
    
      this.saveToLocalStorage();
    },
  
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

  return cart;
}

const cart1 = Cart('cart-oop');
const businessCart = Cart('cart-business');
cart1.loadFromStorage();
//cart1.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
businessCart.loadFromStorage();

console.log(cart1);
console.log(businessCart);