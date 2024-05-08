// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result2 = movies.filter(item => item.director === director);
  if (director === 'Quentin Tarantino') {
    console.log("EXERCICE 2 ->", result2);
  }
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {

  let moviesOfDirector = movies.filter(movie => movie.director === director);
  if (director === 'Quentin Tarantino'); 

  let puntuacionTotal = moviesOfDirector.reduce((total, movie) => total + movie.score, 0);

  let promedioPuntuacion = puntuacionTotal / moviesOfDirector.length;

  promedioPuntuacion = Math.round(promedioPuntuacion * 100) / 100;

  console.log("EJERCICIO 3 ->", promedioPuntuacion);
  return promedioPuntuacion;
}




// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
