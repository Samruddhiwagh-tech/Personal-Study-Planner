let tasks = [];

function addTask() {
  const subjectName = document.getElementById("subject-name").value;
  const topicName = document.getElementById("topic-name").value;
  
  if (subjectName && topicName) {
    const task = {
      subject: subjectName,
      topic: topicName,
      status: 'in-progress'  // Default status is in-progress
    };
    tasks.push(task);
    document.getElementById("subject-name").value = '';
    document.getElementById("topic-name").value = '';
    displayTasks();
    displayProgressTracker();
  }
}

function displayTasks() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `${task.subject} - ${task.topic}`;
    taskList.appendChild(li);
  });
}

function displayProgressTracker() {
  const trackerList = document.getElementById("tracker-list");
  trackerList.innerHTML = '';
  tasks.forEach(task => {
    const div = document.createElement("div");
    div.classList.add('tracker-item', task.status);
    div.innerHTML = `
      <span>${task.subject}: ${task.topic}</span>
      <input type="checkbox" onchange="toggleStatus(${tasks.indexOf(task)})" ${task.status === 'completed' ? 'checked' : ''}>
    `;
    trackerList.appendChild(div);
  });
}

function toggleStatus(index) {
  const task = tasks[index];
  task.status = task.status === 'in-progress' ? 'completed' : 'in-progress';
  displayProgressTracker();
}

// Toggle dark mode from settings
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
