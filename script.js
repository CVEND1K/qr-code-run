// Функция для изменения темы
function changeTheme(event) {
    let selectedTheme = event.target.value;
    document.body.className = selectedTheme;

    // Оновлюємо кольори для всіх текстових елементів
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, footer").forEach(el => {
        el.style.color = getComputedStyle(document.body).getPropertyValue("--text-color");
    });

    // Зберігаємо тему
    localStorage.setItem('theme', selectedTheme);
}

// Функция для применения темы
function applyTheme(theme) {
    document.body.classList.remove('dark', 'light', 'blue');
    document.body.classList.add(theme);
    document.querySelector('header').classList.remove('dark', 'light', 'blue');
    document.querySelector('header').classList.add(theme);
    document.querySelector('footer').classList.remove('dark', 'light', 'blue');
    document.querySelector('footer').classList.add(theme);

    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('dark', 'light', 'blue');
        tab.classList.add(theme);
    });
}

// Перевірка теми при завантаженні
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.getElementById('themeSelect').value = savedTheme;
    applyTheme(savedTheme);
};

// Показ/приховування меню налаштувань
function toggleSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
}

// Показ/приховування вкладки
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active-tab');
}

// Навігація по вкладках
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".tab-content");

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));

            sections.forEach((section) => {
                section.classList.remove("active");
            });

            target.classList.add("active");
        });
    });

    if (sections.length > 0) {
        sections[0].classList.add("active");
    }

    // Додаємо обробник для скріншотів
    document.getElementById("screenshotToggle").addEventListener("click", function (e) {
        e.preventDefault();
        toggleScreenshot();
    });
});

// Показ/приховування блоку з кодом
function toggleCode(codeId) {
    const codeBlock = document.getElementById(codeId);
    if (codeBlock.style.display === "none" || codeBlock.style.display === "") {
        codeBlock.style.display = "block";
    } else {
        codeBlock.style.display = "none";
    }
}

// Показ/приховування скріншотів
function toggleScreenshot(id) {
    const screenshots = document.getElementById(id);
    if (screenshots.style.display === "none" || screenshots.style.display === "") {
        screenshots.style.display = "block";
    } else {
        screenshots.style.display = "none";
    }
}

// Універсальна функція для показу/приховування будь-якого блоку за ID
function toggleVisibility(id) {
    const block = document.getElementById(id);
    if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}

// Зміна favicon
function changeFavicon(iconPath) {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = iconPath;
    document.head.appendChild(link);
}
changeFavicon('images/code1.png');

// Модальне вікно для зображень
function openImage(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
