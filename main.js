// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Check if the input is not empty
  if (taskInput.value.trim() !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskInput.value;

    // Create buttons for remove
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Create buttons for strike-through
    const strikeButton = document.createElement("button");
    strikeButton.textContent = "Done";
    strikeButton.onclick = function () {
      listItem.classList.toggle("strikethrough");
    };

    // Append buttons to the list item
    listItem.appendChild(strikeButton);
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }
}
