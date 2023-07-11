// Obtener elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Evento de envío del formulario
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Crear un nuevo elemento de tarea
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });
    
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    
    return taskItem;
}
