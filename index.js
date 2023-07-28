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