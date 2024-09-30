let todoList = [];

function addTodo(){
  const todoInputElement = document.querySelector('.js-todo-input');
  const todo = todoInputElement.value;  
  todoList.push(todo);
  console.log(todoList);

  todoInputElement.value = '';
}