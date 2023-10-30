document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const activeTasks = document.getElementById("active-tasks");
    const completedTasks = document.getElementById("completed-tasks");
    const clearAllButton = document.getElementById("clear-all-button");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-button">Complete</button>
            `;
            activeTasks.appendChild(taskItem);
            taskInput.value = "";

            const completeButton = taskItem.querySelector("button.complete-button");
            completeButton.addEventListener("click", function () {
                taskItem.remove();
                const completedTaskItem = document.createElement("li");
                completedTaskItem.innerHTML = `<span>${taskText}</span>`;
                completedTasks.appendChild(completedTaskItem);
            });

            clearAllButton.addEventListener("click", function () {
                while (activeTasks.firstChild) {
                activeTasks.removeChild(activeTasks.firstChild);
            }
                while (completedTasks.firstChild) {
                completedTasks.removeChild(completedTasks.firstChild);
            }
         });

        }
    });
});