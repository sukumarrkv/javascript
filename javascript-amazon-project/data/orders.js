export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order); //This will add the order at the start of orders array
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}