let input = document.getElementById("search-input");
const spinner = document.getElementById("spinner");
let searchResults = document.getElementById("search-results");
const menu = document.getElementById("menu");
const sidebar = document.getElementById("side-nav");

let typingTimer; // Timer identifier
const typingDelay = 3000; // Delay in milliseconds (3 seconds)

menu.addEventListener("click", (event) => {
  sidebar.style.left = sidebar.style.left === "-250px" ? "0" : "-250px";
});

input.addEventListener("keyup", handleSearchInput);

function handleSearchInput(event) {
  if (event.target.value.length === 0) {
    clearTimeout(typingTimer);
    searchResults.innerHTML = "";
    spinner.style.display = "none"; // Hide spinner
    return;
  }

  searchResults.innerHTML = "";
  clearTimeout(typingTimer);

  spinner.style.display = "block"; // Show spinner

  let query = event.target.value;

  // Set a new timer
  typingTimer = setTimeout(() => {
    if (!query) return;

    fetch(`/articles/search?query=${query}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((articles) => {
        //do somethig with articles
        let results = articles.results;
        if (!results.length) {
          spinner.style.display = "none"; // Hide spinner

          searchResults.innerHTML = "No results found";
          return;
        }
        searchResults.innerHTML = "";

        results.forEach((article) => {
          let li = document.createElement("li");
          li.textContent = article.name;
          searchResults.appendChild(li);
        });
        spinner.style.display = "none"; // Hide spinner
      });
  }, typingDelay);
}
