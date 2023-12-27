function showModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function reset() {
  document.getElementById("inputTaskTitle").value = "";
  document.getElementById("inputTaskDescription").value = "";
}
// Add title
function addTask() {
  const title = document.getElementById("inputTaskTitle").value;
  const description = document.getElementById("inputTaskDescription").value;

  const toDoElement = document.getElementById("toDoElement");
  const toDoTask = document.getElementById("toDoTask");

  if ((title === "", description === "")) {
    alert("utga oruulnuu!");
  } else {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    div.innerHTML = toDoTask;
    h4.innerText = title;
    p.innerText = description;

    toDoElement.appendChild(div);
    toDoElement.appendChild(h4);
    toDoElement.appendChild(p);
  }

  hideModal();
  reset();
}
