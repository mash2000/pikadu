// Меню-бургер
const menuToggle = document.querySelector('#menu-toggle');
// Боковое меню
const menu = document.querySelector('.sidebar');

// При нажатии выдвигается/задвигается боковое меню
menuToggle.addEventListener('click', event => {
    // Отключаем дейсвтие ссылок по умолч.
    event.preventDefault();
    // Удаляет/Добавляет класс 'visible'
    menu.classList.toggle('visible');
});