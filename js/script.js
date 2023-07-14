$(document).ready(function() {
  // Add task
  $(".add-task").on("click", function() {
    var task = $("<li><input type='checkbox' id='task'><label for='task'>New task</label></li>");
    $(".tasks").append(task);
  });

  // Check/uncheck task
  $(".tasks input").on("click", function() {
    var task = $(this).closest(".task");
    task.toggleClass("completed");
  });

  // Move task to later
  $(".tasks .completed").on("click", function() {
    var task = $(this).closest(".task");
    task.appendTo(".later");
  });
});
