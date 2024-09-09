function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-icon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.src = 'images/hearton2.png'; // Изображение для темной темы
    } else {
        icon.src = 'images/heartoff.png'; // Изображение для светлой темы
    }
}