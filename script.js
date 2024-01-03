const tasks = [
  {
    id: -1,
    title: "Workout",
    description: "Outside running",
    piority: "low",
    status: "todo",
  },
  {
    id: -2,
    title: "Homework",
    description: "Math homework",
    piority: "medium",
    status: "inprogress",
  },
  {
    id: -3,
    title: "Reading book",
    description: "Atomic Habit",
    piority: "hard",
    status: "stuck",
  },
  {
    id: -3,
    title: "Reading book",
    description: "Atomic Habit",
    piority: "hard",
    status: "done",
  },
];

let currentTarget = "todoTask";
let generatedId = 0;

function renderTasks() {
  const todoTaskElement = document.getElementById("todoTask");
  const inprogressTaskElement = document.getElementById("inprogressTasks");
  const stuckTaskElement = document.getElementById("stuckTasks");
  const doneTaskElement = document.getElementById("doneTasks");

  let todoResult = "";
  let inprogressResult = "";
  let stuckResult = "";
  let doneResult = "";

  tasks.sort((a1, b1) => {
    const piorityNumbers = {
      hard: 1,
      medium: 2,
      low: 3,
    };
    if (piorityNumbers[a1.piority] > piorityNumbers[b1.piority]) {
      return 1;
    } else {
      return -1;
    }
  });

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if ((task.title === "", task.description === "")) {
      alert("Ta utga oruulnuu");
    } else {
      generatedId++;
      const taskHTML = `
        <div id="task-${generatedId}">
              <div id="toDoTask" class="task">
                <div class="task-check">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div class="task-content">
                  <h4>${task.title}</h4>
                  <p>${task.description}</p>
                  <span class="piority">${task.piority}</span>
                </div>
                <div class="task-menu">
                  <i class="fa-regular fa-circle-xmark" onclick="removeTask(${i})"></i
                  ><i class="fa-regular fa-pen-to-square"></i>
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

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function resetForm() {
  document.getElementById("inputTaskTitle").value = "";
  document.getElementById("inputTaskDescription").value = "";
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function showModal(targetId) {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
  currentTarget = targetId;
}

renderTasks();
