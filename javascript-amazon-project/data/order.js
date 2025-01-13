import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export let orders = JSON.parse(localStorage.getItem('orders'));

if(!orders) {
  const today = dayjs();
  const formattedDate = today.format('dddd, MMMM D');
  orders = [{
    orderId: 1,
    orderedTime: formattedDate,
    total: 58.01,
    products: [{
      name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
      quantity: 1,
      deliveryDate: formattedDate,
      image: "images/products/athletic-cotton-socks-6-pairs.jpg"
    }]
  }];
}

export function addOrder(order) {
  const matchingOrder = getOrder(order.orderId);
  if(!order) {
    orders.unshift(order);
    saveToStorage();
  }
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