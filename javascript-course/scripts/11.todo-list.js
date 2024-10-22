let todoList = [];

function addTodo(){
  const todoInputElement = document.querySelector('.js-todo-input');
  const todo = todoInputElement.value;  
  todoList.push(todo);
  console.log(todoList);

  todoInputElement.value = '';
}

function addTodoVersion2(){
  const todoInputElement = document.querySelector('.js-todo-input2');
  const todoInputValue = todoInputElement.value;
  todoList.push(todoInputValue);

  let finalTodoHTML='';
  for(let i=0;i<todoList.length;i++){
    const todoHTML = `<p>${todoList[i]}<p>`;
    finalTodoHTML = finalTodoHTML+todoHTML;
  }

  document.querySelector('.display-todo').innerHTML = finalTodoHTML;

  todoInputElement.value='';
}