// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Work filter
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    cards.forEach(card => {
      card.style.display =
        category === "all" || card.classList.contains(category)
          ? "block"
          : "none";
    });
  });
});
