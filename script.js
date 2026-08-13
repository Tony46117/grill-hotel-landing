/* ============ Mean Grill — Landing Page JS ============ */

// Sticky navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Reservation form (front-end demo)
const form = document.getElementById("reserveForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  note.style.color = "#f0a55a";
  note.textContent = `🔥 Asante ${name.split(" ")[0]}! Your table for ${guests} is reserved for ${date} at ${time}. We'll confirm via ${phone}.`;

  // WhatsApp deep-link to confirm by message
  const msg = encodeURIComponent(
    `Hi Mean Grill! I'd like to confirm my reservation:\nName: ${name}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}`
  );
  setTimeout(() => {
    window.open(`https://wa.me/254758922294?text=${msg}`, "_blank");
  }, 1200);

  form.reset();
});
