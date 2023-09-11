document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Function to create a new task item
    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);

        // Attach event listener to the complete button
        const completeButton = listItem.querySelector('.complete-button');
        completeButton.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        // Attach event listener to the delete button
        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTaskItem(taskText);
            taskInput.value = '';
        }
    }

    // Event listener for clicking the "Add" button
    addTaskButton.addEventListener('click', addTask);

    // Event listener for pressing Enter in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
