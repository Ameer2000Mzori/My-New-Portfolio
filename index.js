// open burgermenu btn
const toggleHandler = document.getElementsByClassName("menubtn")[0];
const navLinks = document.getElementsByClassName("navlinks")[0];
const closeMenuBtn = document.getElementsByClassName("close-menubtn")[0];
const body = document.querySelector("body");

toggleHandler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleHandler.classList.add("deactive");
  body.classList.add("active");
  closeMenuBtn.classList.add("active");
});

// close burgermenu btn
const closeMenuHandler = document.getElementsByClassName("close-menubtn")[0];
closeMenuHandler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleHandler.classList.remove("deactive");
  body.classList.remove("active");
  closeMenuBtn.classList.remove("active");
});
