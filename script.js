const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function updateCounter() {
  const count = document.querySelectorAll("#taskList li").length;
  document.getElementById("taskCounter").textContent =
    count + " Task" + (count !== 1 ? "s" : "");
}

function createTask(text, completed = false) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  const taskText = document.createElement("span");
  taskText.textContent = text;
  if (completed) {
    taskText.style.textDecoration = "line-through";
    taskText.style.opacity = "0.6";
  }

  checkbox.onchange = function () {
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    taskText.style.opacity = checkbox.checked ? "0.6" : "1";
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

function addTask() {
  const text = taskInput.value.trim();

  if (text.length > 100) {
    alert("Task cannot exceed 100 characters.");
    return;
  }

  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  createTask(text, false);
  saveTasks();
  taskInput.value = "";
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((item) => {
    tasks.push({
      text: item.querySelector("span").textContent,
      completed: item.querySelector("input").checked,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => createTask(task.text, task.completed));
  updateCounter();
}

function clearTasks() {
  if (!confirm("Are you sure you want to clear all tasks?")) {
    return;
  }
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
  updateCounter();
}

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

loadTasks();