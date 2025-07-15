// Confirm script is loaded
console.log("✅ Portfolio script loaded");

// ===== Resume Download Button =====
document.getElementById("download-resume").addEventListener("click", () => {
  window.open("Resume_JohnMosesEnje.pdf", "_blank");
});

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
