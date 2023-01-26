const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu-close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const setPercentage = document.querySelectorAll(".content-number");
const changePercentage = document.querySelectorAll(
  ".percentage-item__line span"
);

setPercentage.forEach(
  (item, index) => (changePercentage[index].style.width = item.innerHTML)
);
