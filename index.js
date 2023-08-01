        // open menu btn 
let toggleHandler = document.getElementsByClassName('menubtn')[0]
let navLinks = document.getElementsByClassName('navlinks')[0]
let closeMenuBtn = document.getElementsByClassName('close-menubtn')[0]

toggleHandler.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    toggleHandler.classList.add('deactive');
    closeMenuBtn.classList.add('active');
})

        // close menu btn 
let closeMenuHandler = document.getElementsByClassName('close-menubtn')[0]
closeMenuHandler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleHandler.classList.remove('deactive');
    closeMenuBtn.classList.remove('active');
})

// open and close btn languages-list menu
let languagesWarp = document.getElementsByClassName("languages-warp")[0];
let languagesList = document.getElementsByClassName("languages-list")[0];
let languagesOnBtn = document.getElementsByClassName("languages-on-btn")[0];
languagesWarp.addEventListener("click", () => {
  languagesList.classList.toggle("activated");
  languagesWarp.classList.toggle("activated");
  languagesOnBtn.classList.toggle("activated");
});

// open and close btn languages-list menu
let frameworksWarp = document.getElementsByClassName("frameworks-warp")[0];
let frameworksList = document.getElementsByClassName("frameworks-list")[0];
let frameworksOnBtn = document.getElementsByClassName("frameworks-on-btn")[0];
frameworksWarp.addEventListener("click", () => {
  frameworksList.classList.toggle("activated");
  frameworksWarp.classList.toggle("activated");
  frameworksOnBtn.classList.toggle("activated");
});

// open and close btn skills-list menu
let SkillsWarp = document.getElementsByClassName("Skills-warp")[0];
let SkillsList = document.getElementsByClassName("Skills-list")[0];
let SkillsOnBtn = document.getElementsByClassName("Skills-on-btn")[0];
SkillsWarp.addEventListener("click", () => {
  SkillsList.classList.toggle("activated");
  SkillsWarp.classList.toggle("activated");
  SkillsOnBtn.classList.toggle("activated");
});
