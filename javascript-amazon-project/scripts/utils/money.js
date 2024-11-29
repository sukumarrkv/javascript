export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

//Lets say you wan to export formatCurrency from money.js as default import, we need to write code as below line
//export deafult formatCurrency;
//By making export defalut we don't need to add curly braces
//Remember we can have only one deault export from a class
//If we are having more than one export we should use as mentioned above
//The syntax with curly braces is called named export