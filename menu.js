function filterItems(category) {
  let items = document.querySelectorAll(".pizza-item");
  items.forEach((item) => {
    item.style.display =
      category === "all" || item.classList.contains(category)
        ? "block"
        : "none";
  });
}

// Search filter
document.getElementById("searchBox").addEventListener("keyup", function () {
  let query = this.value.toLowerCase();
  let items = document.querySelectorAll(".pizza-item");

  items.forEach((item) => {
    let text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
});
