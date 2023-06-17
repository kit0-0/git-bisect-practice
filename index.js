const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = todoInput.value;
  if (task) {
    addTask(task);
    todoInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
  todoList.appendChild(li);
}
