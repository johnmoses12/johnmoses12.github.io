// Toggle dark/light mode
document.getElementById('toggle-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Animate on scroll (if using AOS or custom)
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.project, .experience-item, .skill-badge');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
});
