// Счётчик для демонстрации JavaScript
let count = 0;
const counterEl = document.getElementById('counter');
const btn = document.getElementById('clickBtn');

// Проверяем, что элементы существуют на странице
if (btn && counterEl) {
    btn.addEventListener('click', () => {
        count++;
        counterEl.textContent = count;
        
        // Эффект нажатия на кнопку
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    });
}

console.log('Портфолио Артёма загружено! 🚀');
