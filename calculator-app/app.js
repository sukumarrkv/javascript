function display(value) {
  document.querySelector('.input').value += value;
}

function calculate() {
  let expression = document.querySelector('.input').value;
  const result = eval(expression);

  document.querySelector('.input').value = result;
}

function clearInput() {
  document.querySelector('.input').value = '';
}