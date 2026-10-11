const taskList = document.getElementById("taskList");

function updateCounter() {
  const count = document.querySelectorAll("#taskList li").length;

  document.getElementById("taskCounter").textContent = 
  count + " Task" + (count !== 1 ? "s" : "");
}
loadTasks();

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    createTask(input.value);

    saveTasks();

    input.value = "";
}

function createTask(task) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    checkbox.onchange = function () {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }

        saveTasks();
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
        saveTasks();
        updateCounter();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li); 
    updateCounter();
}

function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(item => {
        tasks.push({
            text: item.querySelector("span").textContent,
            completed: item.querySelector("input").checked
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(task => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }

        checkbox.onchange = function () {
            if (checkbox.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }

            saveTasks();
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {
            li.remove();
            saveTasks();
            updateCounter();
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li); 
        updateCounter();
    });
}
document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    updateCounter();

function clearTasks() {
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
  updateCounter();
}