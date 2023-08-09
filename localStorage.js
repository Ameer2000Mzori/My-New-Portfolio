const form = document.querySelector("form");
const nameField = document.getElementsByClassName("name-box-footer")[0];
const emailField = document.getElementsByClassName("email-box-footer")[0];

form.addEventListener("submit", () => {
  const name = nameField.value;
  const email = emailField.value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
});

const savedName = localStorage.getItem("name");
const savedEmail = localStorage.getItem("email");

if (savedName && savedEmail) {
  nameField.value = savedName;
  emailField.value = savedEmail;
}
