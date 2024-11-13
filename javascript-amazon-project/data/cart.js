export const cart = [];

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