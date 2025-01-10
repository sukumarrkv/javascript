export const orders = JSON.parse(localStorage.getItem('orders')) ||  [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
  //console.log("orders:"+ orders);
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((orderItem) => {
    if(orderItem.orderId == orderId) {
      matchingOrder = orderItem;
    }
  });

  return matchingOrder;
}