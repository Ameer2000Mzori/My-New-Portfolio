// open burgermenu btn
const toggleHandler = document.getElementsByClassName("menubtn")[0];
const navLinks = document.getElementsByClassName("navlinks")[0];

toggleHandler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleHandler.classList.add("deactive");
});

// close burgermenu btn
const closeMenuHandler = document.getElementsByClassName("close-menubtn")[0];
closeMenuHandler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleHandler.classList.remove("deactive");
});

// open and close btn languages-list menu
const languagesWarp = document.getElementsByClassName("languages-warp")[0];
const languagesList = document.getElementsByClassName("languages-list")[0];
const languagesOnBtn = document.getElementsByClassName("languages-on-btn")[0];
languagesWarp.addEventListener("click", () => {
  languagesList.classList.toggle("activated");
  languagesWarp.classList.toggle("activated");
  languagesOnBtn.classList.toggle("activated");
});

// open and close btn languages-list menu
const frameworksWarp = document.getElementsByClassName("frameworks-warp")[0];
const frameworksList = document.getElementsByClassName("frameworks-list")[0];
const frameworksOnBtn = document.getElementsByClassName("frameworks-on-btn")[0];
frameworksWarp.addEventListener("click", () => {
  frameworksList.classList.toggle("activated");
  frameworksWarp.classList.toggle("activated");
  frameworksOnBtn.classList.toggle("activated");
});

// open and close btn skills-list menu
const SkillsWarp = document.getElementsByClassName("Skills-warp")[0];
const SkillsList = document.getElementsByClassName("Skills-list")[0];
const SkillsOnBtn = document.getElementsByClassName("Skills-on-btn")[0];
SkillsWarp.addEventListener("click", () => {
  SkillsList.classList.toggle("activated");
  SkillsWarp.classList.toggle("activated");
  SkillsOnBtn.classList.toggle("activated");
});
