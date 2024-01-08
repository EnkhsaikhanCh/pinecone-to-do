const tasks = [
  {
    id: -1,
    title: "Workout",
    description: "Outside running",
    piority: "low",
    status: "todo",
    position: 3,
  },
  {
    id: -2,
    title: "Homework",
    description: "Math homework",
    piority: "medium",
    status: "todo",
    position: 4,
  },
  {
    id: -3,
    title: "Reading book",
    description: "Atomic Habit",
    piority: "hard",
    status: "todo",
    position: 2,
  },
  {
    id: -4,
    title: "Running",
    description: "at National Park",
    piority: "hard",
    status: "todo",
    position: 1,
  },
];
let currentTarget = "todoTask";
let generatedId = 0;
let editingIndex;

function renderTasks() {
  const todoTaskElement = document.getElementById("todoTask");
  const inprogressTaskElement = document.getElementById("inprogressTasks");
  const stuckTaskElement = document.getElementById("stuckTasks");
  const doneTaskElement = document.getElementById("doneTasks");

  let todoResult = "";
  let inprogressResult = "";
  let stuckResult = "";
  let doneResult = "";

  tasks.sort((a1, a2) => {
    return a1.position - a2.position;
  });

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if ((task.title === "", task.description === "")) {
      alert("Ta utga oruulnuu");
    } else {
      generatedId++;
      const taskHTML = `
        <div id="task-${generatedId}" >
              <div id="toDoTask" class="task">
                <div class="task-check">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div class="task-content">
                  <h4>${task.title}</h4>
                  <p>${task.description}</p>
                  <div class="piority-status">
                  <span class="piority">${task.piority}</span>
                  <select class="statusSelect" onchange="changeStatus(${i}, this.value)">
                    <option ${
                      task.status === "todo" ? "selected" : ""
                    }>todo</option>
                    <option ${
                      task.status === "inprogress" ? "selected" : ""
                    }>inprogress</option>
                    <option ${
                      task.status === "stuck" ? "selected" : ""
                    }>stuck</option>
                    <option ${
                      task.status === "done" ? "selected" : ""
                    }>done</option>
                  </select>
                  </div>
                </div>
                <div class="task-menu">
                  <i class="fa-regular fa-circle-xmark" onclick="removeTask(${i})"></i
                  ><i class="fa-regular fa-pen-to-square" onclick="editTask(${i})"></i>
                </div>
              </div>
        </div>
        `;

      switch (task.status) {
        case "todo":
          todoResult += taskHTML;
          break;
        case "inprogress":
          inprogressResult += taskHTML;
          break;
        case "stuck":
          stuckResult += taskHTML;
          break;
        case "done":
          doneResult += taskHTML;
      }
    }
  }
  todoTaskElement.innerHTML = todoResult;
  inprogressTaskElement.innerHTML = inprogressResult;
  stuckTaskElement.innerHTML = stuckResult;
  doneTaskElement.innerHTML = doneResult;
}

function changeStatus(index, value) {
  tasks[index].status = value;
  renderTasks();
}

function addTask() {
  const title = document.getElementById("inputTaskTitle").value;
  const description = document.getElementById("inputTaskDescription").value;
  const status = document.getElementById("taskStatus").value;
  const piority = document.getElementById("taskPiority").value;

  tasks.push({
    id: generatedId++,
    title: title,
    description: description,
    piority: piority,
    status: status,
  });

  renderTasks();
  hideModal();
  resetForm();
}

function editTask(index) {
  showUpdateModal();

  document.getElementById("inputTaskTitle").value = tasks[index].title;
  document.getElementById("inputTaskDescription").value =
    tasks[index].description;
  document.getElementById("taskStatus").value = tasks[index].status;
  document.getElementById("taskPiority").value = tasks[index].piority;

  editingIndex = index;
}

function updateTask() {
  const title = document.getElementById("inputTaskTitle").value;
  const description = document.getElementById("inputTaskDescription").value;
  const status = document.getElementById("taskStatus").value;
  const piority = document.getElementById("taskPiority").value;

  tasks[editingIndex].title = title;
  tasks[editingIndex].description = description;
  tasks[editingIndex].status = status;
  tasks[editingIndex].piority = piority;

  renderTasks();
  hideModal();
  resetForm();
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("inputTaskDescription").focus();
  }
}

function removeTask(index) {
  if (confirm("Та устгахдаа итгэлтэй байна уу?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function resetForm() {
  document.getElementById("inputTaskTitle").value = "";
  document.getElementById("inputTaskDescription").value = "";
  document.getElementById("taskStatus").value = "";
  document.getElementById("taskPiority").value = "";
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
  resetForm();
}

function showModal(targetId) {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  currentTarget = targetId;
  const btn = document.querySelector("#updateTask");
  btn.style.display = "none";
  const btn1 = document.querySelector("#addTask");
  btn1.style.display = "flex";
}

function showUpdateModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  const btn = document.querySelector("#addTask");
  btn.style.display = "none";
  const btn1 = document.querySelector("#updateTask");
  btn1.style.display = "flex";
}

renderTasks();
