const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTask);

function addTask() {
    const todoInput = document.getElementById('todo-input');
    const taskText = todoInput.value;
    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    
    taskItem.appendChild(taskText); // Bug: Incorrectly appending taskText instead of deleteButton
    taskItem.appendChild(deleteButton);
    
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(taskItem);
    
    todoInput.value = '';
  }
  
  function deleteTask(event) {
    const taskItem = event.target.parentElement;
    todoList.removeChild(taskItem);
  }
