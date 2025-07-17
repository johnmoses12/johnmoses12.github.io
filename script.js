// 🌙 Dark/Light Mode Toggle
document.getElementById('toggle-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Save mode in local storage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
    this.textContent = '☀️';
  } else {
    localStorage.setItem('mode', 'light');
    this.textContent = '🌙';
  }
});

// 🧠 Keep user’s theme even after refresh
window.onload = () => {
  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggle-mode').textContent = '☀️';
  }
};

// ✅ AOS Library Init for scroll animation
AOS.init({
  duration: 800,
  once: true
});
