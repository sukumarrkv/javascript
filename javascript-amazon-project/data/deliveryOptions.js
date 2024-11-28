export const deliveryOptions = [{
  id: 1,
  deliveryDays: 7,
  priceCents: 0
},{
  id: 2,
  deliveryDays: 3,
  priceCents: 499
},{
  id: 3,
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId){
  let matchingDeliveryOption;

    deliveryOptions.forEach((deliveryOption) => {
      if(deliveryOptionId == deliveryOption.id){
        matchingDeliveryOption = deliveryOption;
      }
    });

    // || is default operator, return first delivery option if no matching delivery option found
    return matchingDeliveryOption || deliveryOptions[0];
}
