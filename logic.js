document.getElementById("add-task").onclick = function() {
  const txt = document.getElementById("task").value;
  const pri = document.getElementById("priority").value;
  const date = document.getElementById("deadline").value;

  if(txt.trim() === "") return;

  addTask(txt, pri, date);
  document.getElementById("task").value = ""; // Clear input
  document.getElementById("deadline").value = "";
}

function addTask(desc, pri, date) {
  const div = document.createElement("div");
  div.className = `task ${pri}`;

  div.innerHTML = `
    <div>
      <strong>${desc}</strong> <br>
      <span>Deadline: ${date ? date : "No Date"}</span>
    </div>
    <div class="actions">
      <button onclick="completeTask(this)"><span class="material-icons">check_circle</span></button>
      <button onclick="removeTask(this)"><span class="material-icons">delete</span></button>
    </div>
  `;
  document.getElementById("task-list").appendChild(div);
}

function completeTask(btn) {
  btn.closest('.task').style.textDecoration = "line-through";
}

function removeTask(btn) {
  btn.closest('.task').remove();
}
