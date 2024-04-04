const showPopupBtn = document.querySelector(".btnLogin-popup");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

let token;

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const form = document.getElementById("signinForm");
  const formData = new FormData(form);
  console.log(formData)

  // Create AJAX request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:3000/login"); // Replace with your URL

  // Handle response
  xhr.onload = function () {
    if (xhr.status === 201 || xhr.status === 200) {
      const response = xhr.responseText;
      const { token, id } = JSON.parse(response);
      console.log(response);
      document.cookie = `jwt=${token}`;
    }
  };

  // Send form data
  xhr.send(formData);
}

// Attach submit event listener to the form
const form = document.getElementById("signinForm");
form.addEventListener("submit", submitForm);

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Close login popup
hidePopupBtn.addEventListener("click", () => {
  document.body.classList.remove("show-popup");
});

loginSignupLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList.toggle("show-signup", link.id === "signup-link");
  });
});