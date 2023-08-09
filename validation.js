const SubmitBtn = document.getElementsByClassName("footer-btn")[0];
const email = document.getElementsByClassName("email-box-footer")[0];
const footerErrorMessage = document.getElementsByClassName("error-form")[0];

SubmitBtn.addEventListener("click", () => {
  const EmailVal = email.value;
  const checkEmail = (str) => str.trim() === str.trim().toLowerCase();

  if (!checkEmail(EmailVal)) {
    event.preventDefault();
    footerErrorMessage.textContent =
      "Please check if your email is in lowercase!";
  }
});
