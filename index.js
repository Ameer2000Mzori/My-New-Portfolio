        // open menu btn 
let toggleHandler = document.getElementsByClassName('menubtn')[0]
let navLinks = document.getElementsByClassName('navlinks')[0]

toggleHandler.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    toggleHandler.classList.add('deactive');
})

        // close menu btn 
let closeMenuHandler = document.getElementsByClassName('close-menubtn')[0]
closeMenuHandler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleHandler.classList.remove('deactive');
})