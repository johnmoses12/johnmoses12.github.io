// Get the toggle button and body
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('portfolio-theme');

// Apply saved theme on load
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
} else {
  toggleButton.textContent = '🌙';
}

// Toggle theme on click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? '☀️' : '🌙';

  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});
