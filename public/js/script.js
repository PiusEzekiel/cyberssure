const showPopupBtn = document.querySelector(".btnLogin-popup");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const logoutBtn = document.querySelector(".logout-btn");

const closeIcon = document.getElementById("closeIcon");


let token;

// Function to handle form submission for login
function submitLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const form = document.getElementById("signinForm");
  const formData = new FormData(form);
  console.log(formData);

  // Create AJAX request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:3000/login"); // Replace with your login URL

  // Handle response
  xhr.onload = function () {
    if (xhr.status === 201 || xhr.status === 200) {
      const response = xhr.responseText;
      const { token, id } = JSON.parse(response);
      console.log(response);
      document.cookie = `jwt=${token}`;
      token = token; // Store the token
      showLogoutButton(); // Show the logout button
    }
  };

  // Send form data
  xhr.send(formData);
}

// Function to handle logout
function logout() {
  // Perform logout actions
  document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  token = null; // Clear the token
  hideLogoutButton(); // Hide the logout button
}

// Function to toggle the visibility of the logout button
function toggleLogoutButton() {
  if (token) {
    showLogoutButton();
  } else {
    hideLogoutButton();
  }
}

// Function to show the logout button
function showLogoutButton() {
  logoutBtn.style.display = "block";
}

// Function to hide the logout button
function hideLogoutButton() {
  logoutBtn.style.display = "none";
}

// Attach submit event listener to the login form
const loginForm = document.getElementById("signinForm");
loginForm.addEventListener("submit", submitLogin);

// Show login popup
closeIcon.addEventListener("click", () => {
  window.location.href = "/";
});


showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Close login popup
hidePopupBtn.addEventListener("click", () => {
  document.body.classList.remove("show-popup");
});

// Add click event listener to logout button
logoutBtn.addEventListener("click", logout);

// Check if the user is already logged in (e.g., when the page loads)
toggleLogoutButton();