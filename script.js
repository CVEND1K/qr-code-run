// Функция для изменения темы
function changeTheme(event) {
    const theme = event.target.value;
    // Сохраняем выбранную тему в localStorage
    localStorage.setItem('theme', theme);
    // Применяем тему
    applyTheme(theme);
}

// Функция для применения сохраненной темы
function applyTheme(theme) {
    // Удаляем все классы темы
    document.body.classList.remove('dark', 'light', 'blue');
    // Добавляем выбранную тему
    document.body.classList.add(theme);

    // Применяем тему ко всем элементам, включая секции и изображения
    document.querySelectorAll('header, footer, nav ul li a, section.intro').forEach(el => {
        el.classList.remove('dark', 'light', 'blue');
        el.classList.add(theme);
    });

    // Обновляем тему в селекторе (если есть)
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.value = theme;
    }
}

// Функция для отображения/скрытия меню настроек
function toggleSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    if (settingsMenu.style.display === 'block') {
        settingsMenu.style.display = 'none';
    } else {
        settingsMenu.style.display = 'block';
    }
}

// При загрузке страницы применяем сохраненную тему (если она есть)
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Тема по умолчанию - темная
    applyTheme(savedTheme);
});
