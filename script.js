function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  const newItem = document.createElement("li");
  const deleteButton= document.createElement("button");

  newItem.textContent = input.value + " ";
  
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    newItem.remove();
  };
    newItem.appendChild(deleteButton);
    
  list.appendChild(newItem);
  
  input.value = "";
}