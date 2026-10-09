function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");
  
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  const taskText = document.createElement("span");
  taskText.textContent = input.value;

  checkbox.onchange = function() {
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  };

  const deleteButton= document.createElement("button");
  
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    li.remove();
  };
  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteButton);

  list.appendChild(li);
  
  
  input.value = "";
}