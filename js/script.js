$(function() {
    // Add a new task when the "Add Task" button is clicked.
    $('.btn-primary').on('click', function() {
      // Get the task title from the input field.
      var taskTitle = prompt('Enter a task title:');
      // If the user entered a title, create a new task item and add it to the list.
      if (taskTitle) {
        var taskItem = $('<a href="#" class="list-group-item list-group-item-action">' +
          '<h5 class="list-group-item-heading">' + taskTitle + '</h5>' +
          '<p class="list-group-item-text">This is a task item.</p>' +
          '</a>');
        $('.list-group').append(taskItem);
      }
    });
  });
  