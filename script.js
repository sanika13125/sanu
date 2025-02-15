// Get the necessary elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add event listener for the "Add Task" button
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Get and trim the input value

    // If the input is not empty
    if (taskText !== '') {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the task text
        taskList.appendChild(li); // Add the new task to the list

        taskInput.value = ''; // Clear the input field
    }
});

// Optional: Add functionality to remove tasks when clicked
taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove(); // Remove the clicked task
    }
});