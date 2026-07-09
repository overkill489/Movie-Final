// http://www.omdbapi.com/?apikey=[7597afd]&
// http://img.omdbapi.com/?apikey=[7597afd]&
// https://www.omdbapi.com/?apikey=7597afd&s=fast
const movieListEl = document.querySelector(".movies");
let moviesData = []; 

async function movies() {
  const data = await fetch(`https://www.omdbapi.com/?apikey=7597afd&s=fast`);
  const result = await data.json();
  moviesData = result.Search;
  renderMovies(moviesData);
}
movies();

function renderMovies(list) {
  movieListEl.innerHTML = list.map((movie) => movieHTML(movie)).join("");
}

function filterMovies(event) {
  const sortType = event.target.value;
  let sorted = [...moviesData]; 

  if (sortType === "oldest-newest") {
    sorted.sort((a, b) => a.Year - b.Year);
  } else if (sortType === "newest-oldest") {
    sorted.sort((a, b) => b.Year - a.Year);
  }

  renderMovies(sorted);
}

function movieHTML(movie) {
  return `<div class="movie">
            <figure class="movie__img--wrapper">
              <img
                class="movie__img"
                src="${movie.Poster}"
                alt=""
              />
            </figure>
            <div class="movie__title">${movie.Title}</div>
            <div class="movie__year">
              ${movie.Year}
            </div>
          </div>`;
}