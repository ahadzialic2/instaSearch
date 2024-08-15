document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const sidebar = document.getElementById("side-nav");

  menu.addEventListener("click", (event) => {
    sidebar.style.left = sidebar.style.left === "-250px" ? "0" : "-250px";
  });
});
