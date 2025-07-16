const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
} else {
  toggleButton.textContent = '🌙';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});
