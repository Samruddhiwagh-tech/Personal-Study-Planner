let tasks = [];

// Add task to the list and update the dashboard with dynamic tasks
document.getElementById("add-task-btn").addEventListener("click", function() {
  const subject = document.getElementById("subject-input").value;
  const topic = document.getElementById("topic-input").value;
  if (subject && topic) {
    const task = { subject, topic, status: 'in-progress' };
    tasks.push(task);
    updateTaskList();
    document.getElementById("subject-input").value = '';
    document.getElementById("topic-input").value = '';
  } else {
    alert("Please fill in both subject and topic!");
  }
});

function updateTaskList() {
  const taskListElement = document.getElementById("tasks");
  taskListElement.innerHTML = ''; // Clear the task list

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.innerHTML = `
      <input type="checkbox" onclick="toggleTaskCompletion(${index})" ${task.status === 'completed' ? 'checked' : ''}>
      ${task.subject} - ${task.topic}
    `;
    taskListElement.appendChild(taskElement);
  });

  // Update the dashboard with the latest task information
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Store tasks in localStorage
}

function toggleTaskCompletion(index) {
  tasks[index].status = tasks[index].status === 'completed' ? 'in-progress' : 'completed';
  updateTaskList();
}
