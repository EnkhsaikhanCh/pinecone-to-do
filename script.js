// Add title
let currentTarget = "toDoTasks";
let generatedId = 0;

function addTask() {
  const title = document.getElementById("inputTaskTitle").value;
  const description = document.getElementById("inputTaskDescription").value;
  const piority = document.getElementById("taskPiority").value;

  if ((title === "", description === "")) {
    alert("utga oruulnuu!");
  } else {
    generatedId++;
    const taskHtml = `
      <div id="task-${generatedId}">
            <div id="toDoTask" class="task">
              <div class="task-check">
                <i class="fa-regular fa-circle-check"></i>
              </div>
              <div class="task-content">
                <h4>${title}</h4>
                <p>${description}</p>
                <span class="piority">${piority}</span>
              </div>
              <div class="task-menu">
                <i class="fa-regular fa-circle-xmark" onclick="removeTask('task-${generatedId}')"></i
                ><i class="fa-regular fa-pen-to-square"></i>
              </div>
            </div>
      </div>
    `;

    const todoElement = document.getElementById(currentTarget);

    todoElement.innerHTML = todoElement.innerHTML + taskHtml;
  }
  hideModal();
  reset();
}

function showModal(targetId) {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  currentTarget = targetId;
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function removeTask(taskId) {
  document.getElementById(taskId).remove();
}

function reset() {
  document.getElementById("inputTaskTitle").value = "";
  document.getElementById("inputTaskDescription").value = "";
}
