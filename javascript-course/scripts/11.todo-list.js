let todoList = [];

let todoObjectList = [{
  name: 'Test',
  dueDate: '2024-10-24'
}];

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
    const todoHTML = `<p>${todoList[i]}</p>`;
    finalTodoHTML = finalTodoHTML+todoHTML;
  }

  document.querySelector('.display-todo').innerHTML = finalTodoHTML;

  todoInputElement.value='';
}

function addTodoVersion3() {
  const todoInputElement = document.querySelector('.js-todo-input3');
  const dueDateElement = document.querySelector('.js-duedate-input');

  const todoInputValue = todoInputElement.value;
  const dueDateValue = dueDateElement.value;

  todoObjectList.push({
    name: todoInputValue,
    dueDate: dueDateValue
  });

  renderTodos();
}

function renderTodos(){
  let finalTodoHTML='';
  for(let i=0;i<todoObjectList.length;i++){
    const todoObjectHTML = `
    <div>
      ${todoObjectList[i].name}
    </div>
    <div>
      ${todoObjectList[i].dueDate}
    </div>
    <button onclick="
      todoObjectList.splice(${i},1);
      renderTodos();"
      class="todo-delete-button">Delete
    </button>
    `;

    finalTodoHTML = finalTodoHTML + todoObjectHTML;
  }

  console.log(finalTodoHTML);
  
  document.querySelector('.display-todo-object').innerHTML = finalTodoHTML;
}