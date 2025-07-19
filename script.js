// Typing effect in hero
const roles = ["Frontend Developer", "Programmer"];
let charIndex = 0;
let roleIndex = 0;
let isDeleting = false;
const typedSpan = document.getElementById("typed");

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    typedSpan.textContent = currentRole.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 700);
    } else {
      setTimeout(typeRole, 40);
    }
  } else {
    charIndex++;
    typedSpan.textContent = currentRole.substring(0, charIndex);
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1000);
    } else {
      setTimeout(typeRole, 80);
    }
  }
}
typeRole();

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple contact form handler (demo)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! (Form demo only)");
  this.reset();
});
