// manu bar open and hide

const barBtn = document.querySelector('.bar')
const mainMenu = document.querySelector('.menu')
barBtn.addEventListener('click',function(){
    this.querySelector('i').classList.toggle('fa-times-circle')
    mainMenu.classList.toggle('mainmenushow')
})