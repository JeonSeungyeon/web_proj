const btn = document.querySelector('.menu-bar-btm')
const menu = document.querySelector('.menu-bar')
const search = document.querySelector('.search-box')

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
});


