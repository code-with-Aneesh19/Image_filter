function filterItems(category) {
  let items = document.querySelectorAll(".pizza-item");

  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  let buttons = document.querySelectorAll(".filter-btns button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
}

document.getElementById("searchBox").addEventListener("keyup", function () {
  let query = this.value.toLowerCase();
  let items = document.querySelectorAll(".pizza-item");

  items.forEach((item) => {
    let text = item.innerText.toLowerCase();
    if (text.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
