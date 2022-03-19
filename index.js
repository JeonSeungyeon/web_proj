const btn = document.querySelector('.menu-bar-btm')
const menu = document.querySelector('.menu-bar')
const search = document.querySelector('.search')

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
});


