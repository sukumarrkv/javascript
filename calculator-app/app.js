function display(input) {
  document.querySelector('.input').value += input;
}

function calculate() {
  const expression = document.querySelector('.input').value;
  let result = '';
  try {
    result = eval(expression);
  } catch(err) {
    alert(err.message);
  }

  document.querySelector('.input').value = result;
}

function clearInput() {
  document.querySelector('.input').value = '';
}