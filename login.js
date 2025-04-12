document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simple login validation
    if (username === "user" && password === "password123") {
      alert("Login successful!");
      window.location.href = "index.html";  // Redirect to homepage
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  