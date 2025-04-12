let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Update task stats dynamically
function updateTaskStats() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const remainingTasks = totalTasks - completedTasks;
  const productivity = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  document.getElementById("completed-tasks").querySelector("span").textContent = completedTasks;
  document.getElementById("remaining-tasks").querySelector("span").textContent = remainingTasks;
  document.getElementById("productivity").querySelector("span").textContent = productivity + '%';
  updateProgressCircle(productivity);
}

// Update the circular progress tracker dynamically
function updateProgressCircle(progress) {
  const progressCircle = document.getElementById("progress-circle");
  const progressText = document.getElementById("progress-text");
  
  progressCircle.style.background = `conic-gradient(#2ecc71 ${progress}%, #e74c3c ${progress}%)`;  // Conic gradient for the circle
  progressText.textContent = `${progress}%`;
}

// Call the updateTaskStats function to initialize the stats when the page loads
updateTaskStats();
