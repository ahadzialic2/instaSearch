document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("search-input");
  const spinner = document.getElementById("spinner");
  let searchResults = document.getElementById("search-results");

  let typingTimer; // Timer identifier
  const typingDelay = 1500; // Delay in milliseconds (3 seconds)

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
});
