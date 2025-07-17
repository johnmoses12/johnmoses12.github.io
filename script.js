document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-mode");
  const isDark = localStorage.getItem("dark-mode") === "true";

  if (isDark) {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const darkEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", darkEnabled);
    toggleButton.textContent = darkEnabled ? "☀️" : "🌙";
  });
});
