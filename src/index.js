import "./styles.css";

const form = document.getElementById("search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("input-show");
  const q = input.value;
  const url = `https://api.tvmaze.com/search/shows?q=${q}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //fetch the shows
      const c = document.getElementById("show-container");
      c.innerHTML = "";
      for (const show of data) {
        //for each show, put its info in a container
        const template = `
        <div class="show-data"> 
          <img src="${show.show.image ? show.show.image.medium : ""}"> 
          <div class="show-info"> 
            <h1>${show.show.name}</h1> 
            <p>${show.show.summary}</p> 
          </div> 
        </div>
      `;
        c.insertAdjacentHTML("beforeend", template);
      }
    });
});
