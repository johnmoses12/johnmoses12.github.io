// Get DOM elements
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Load theme from localStorage
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update button icon
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
    localStorage.setItem('portfolio-theme', 'dark');
  } else {
    toggleButton.textContent = '🌙';
    localStorage.setItem('portfolio-theme', 'light');
  }
});
<script src="script.js"></script>
