export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  // const matchingOrder = getOrder(order.orderId);
  // if(!matchingOrder){
    orders.unshift(order); //This will add the order at the start of orders array
    saveToLocalStorage();
  //}
}

function saveToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

// function getOrder(orderId) {
//   let matchingOrder;

//   orders.forEach((orderItem) => {
//     if(orderItem.orderId === orderId){
//       matchingOrder = orderItem;
//     }
//   });

//   return matchingOrder;
// }