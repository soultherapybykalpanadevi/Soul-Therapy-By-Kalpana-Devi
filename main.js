const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Front-end reference only: backend submission will be connected in the next phase.
const serviceSelect = document.querySelector("#service");
const selectedPrice = document.querySelector("#selectedPrice");
if (serviceSelect && selectedPrice) {
  const updatePrice = () => {
    const option = serviceSelect.options[serviceSelect.selectedIndex];
    selectedPrice.textContent = option && option.dataset.price ? "₹" + option.dataset.price : "தேர்வு செய்யவும்";
  };
  serviceSelect.addEventListener("change", updatePrice);
  updatePrice();
}

const demoForm = document.querySelector("#bookingForm");
if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#formStatus");
    if (status) {
      status.textContent = "இது வடிவமைப்பு முன்னோட்டம். அடுத்த கட்டத்தில் பாதுகாப்பான backend மற்றும் WhatsApp API இணைக்கப்படும்.";
      status.hidden = false;
      status.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}
