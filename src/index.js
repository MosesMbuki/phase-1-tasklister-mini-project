document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  let taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Append the new task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    document.getElementById("new-task-description").value = "";
  });
});
