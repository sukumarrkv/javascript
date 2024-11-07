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

  //We can convert above for to forEach
  // todoObjectList.forEach(function(todoObject, index){
  //   const todoObjectHTML = `
  //   <div>
  //     ${todoObject.name}
  //   </div>
  //   <div>
  //     ${todoObject.dueDate}
  //   </div>
  //   <button onclick="
  //     todoObjectList.splice(${index},1);
  //     renderTodos();"
  //     class="todo-delete-button">Delete
  //   </button>
  //   `;

  //   finalTodoHTML = finalTodoHTML + todoObjectHTML;
  // });

  //console.log(finalTodoHTML);

  //Below code we can replace onclick with event listeners
  document.querySelector('.js-add-todo-button')
           .addEventListener('click', () => {
            addTodo();
           });
  
  //We should add below code after we display html (which contains delete button html code) on page
  //We can use querySelector method because we have more than one button with same class name
  //Inorder to select all button with same class name we should use querySelectorAll method
  document.querySelectorAll('.js-delete-todo-button')
          .forEach((eachDeleteButton, index) => {
            eachDeleteButton.addEventListener('click', () => {
              todoObjectList.splice(index,1);
              renderTodos();
            });
          });
  
  document.querySelector('.display-todo-object').innerHTML = finalTodoHTML;
}