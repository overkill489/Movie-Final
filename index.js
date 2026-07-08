// http://www.omdbapi.com/?apikey=[7597afd]&
// http://img.omdbapi.com/?apikey=[7597afd]&
// https://www.omdbapi.com/?apikey=7597afd&s=fast

const movieListEl = document.querySelector(".movie-list");

async function movies() {
  const data = await fetch(`https://www.omdbapi.com/?apikey=7597afd&s=fast`);
  const moviesData = await data.json();

  movieListEl.innerHTML = moviesData.Search.map((movie) =>
    movieHTML(movie),
  ).join("");
}
movies();

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
