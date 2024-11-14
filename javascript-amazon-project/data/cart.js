export const cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}];

export function addToCart(productId){
  let matchedItem;

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchedItem = cartItem;
      }
    });

    //Truty value if we have some object in matchedItem
    if(matchedItem){
      matchedItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      }); 
    }
}