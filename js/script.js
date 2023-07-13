// Obtener elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);

// Agregar tarea a la lista
function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Eliminar</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    addDeleteEvent(taskItem);
  }
}

// Agregar evento para eliminar tarea
function addDeleteEvent(taskItem) {
  const deleteBtn = taskItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });
}
