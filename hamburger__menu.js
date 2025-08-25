const hamMenu = document.querySelector('.ham__menu');
const offScreenMenu = document.querySelector('.off__screen__menu');

hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

