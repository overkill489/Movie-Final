// http://www.omdbapi.com/?apikey=[7597afd]&
// http://img.omdbapi.com/?apikey=[7597afd]&
// https://www.omdbapi.com/?apikey=7597afd&s=fast

async function movies() {
  const data = await fetch(`https://www.omdbapi.com/?apikey=7597afd&s=fast`);
  const moviesData = await data.json();
  moviesData
    .map(
      (movie) => ` <div class="movie">
                <figure class="movie__img--wrapper">
                  <img
                    class="movie__img"
                    src="${movie.Poster}"
                    alt=""
                  />
                </figure>
                <div class="movie__title">${movie.title}</div>
                <div class="movie__year">
                  ${movie.year}
                </div>
              </div>`,
    )
    .join("");
}

movies();
