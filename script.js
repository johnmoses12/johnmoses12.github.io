// Toggle Dark Mode Button
const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const mode = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
  toggleBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
});

// Set initial mode from local storage
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      offset: 100,
    });
  }
});
