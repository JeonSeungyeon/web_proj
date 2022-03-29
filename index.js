// 메뉴바 자바스크립트
const btn = document.querySelector('.menu-bar-btm')
const menu = document.querySelector('.menu-bar')


btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
});

    // 어두운 테마 자바스크립트
const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark')
});