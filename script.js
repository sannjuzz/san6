// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task event
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    // Create a new list item
    const li = document.createElement("li");

    // Create text node
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Add "Complete" button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("completeBtn");
    li.appendChild(completeBtn);

    // Add "Delete" button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);

    // Add task item to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Complete task event
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Delete task event
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });
  } else {
    alert("Please enter a task!");
  }
});

// Optionally, you can add Enter key functionality to add tasks
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
