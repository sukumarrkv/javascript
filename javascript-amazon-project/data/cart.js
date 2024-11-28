export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  console.log("Inside cart initialization");
 cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId: 1
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
  deliveryOptionId: 3
}];
}


//Variables are reset when click refresh or we go to new page. We should use localStorage to persist correct data
function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
  let matchedItem;

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchedItem = cartItem;
      }
    });

    //Truthy value if we have some object in matchedItem
    if(matchedItem){
      matchedItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: 1
      }); 
    }

    saveToLocalStorage();
}

export function removeFromCart(productIdToBeDeleted){
  cart.forEach((cartItem, index) => {
    if(cartItem.productId === productIdToBeDeleted){
      cart.splice(index,1);
    }
  });

  saveToLocalStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchedItem;

    cart.forEach((cartItem) => {
      if(productId == cartItem.productId){
        matchedItem = cartItem;
      }
    });
    matchedItem.deliveryOptionId = deliveryOptionId;

   saveToLocalStorage();
}