// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result2 = movies.filter(item => item.director === director); {
    console.log("EXERCICE 2 ->", result2);
  }
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {

  let moviesOfDirector = movies.filter(movie => movie.director === director);
   
  let puntuacionTotal = moviesOfDirector.reduce((total, movie) => total + movie.score, 0);

  let promedioPuntuacion = puntuacionTotal / moviesOfDirector.length;

  promedioPuntuacion = Math.round(promedioPuntuacion * 100) / 100;

  console.log("EJERCICIO 3 ->", promedioPuntuacion);
  return promedioPuntuacion;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let movieTitles = movies.map(movie => movie.title);

  // Ordenar alfabéticamente los títulos
    let sortedTitles = movieTitles.sort((a, b) => {
      let titleA = a.toLowerCase();
      let titleB = b.toLowerCase();
  
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  
    let top20movie = sortedTitles.slice (0,20)
    
    return top20movie;
  }
  

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let yearOrdered = [...movies].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      // Si los años son iguales, comparar por título (alfabéticamente)
      let titleA = a.title.toLowerCase();
      let titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
  });

  return yearOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {

  let categoryArray = movies.filter(movie => movie.genre.includes(genre));

  if (categoryArray.length === 0) {
    return 0; 
  }

  let totalScore = categoryArray.reduce((total, movie) => total + movie.score, 0);
  let averageScore = totalScore / categoryArray.length;

  averageScore = Math.round(averageScore * 100) / 100;

  return averageScore;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let timeMovies = movies.map(movie => {
    let durationParts = movie.duration.split(' '); 
    let hours = parseInt(durationParts[0]); 
    let minutes = 0;

    if (durationParts.length > 1) {
      minutes = parseInt(durationParts[1]); 
    }

    let totalMinutes = hours * 60 + minutes; 

    return {
      ...movie, 
      duration: totalMinutes 
    };
  });

  return timeMovies;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let moviesOfYear = movies.filter(movie => movie.year === year);

  let bestMovie = moviesOfYear.reduce((best, current) => {
    return best.score > current.score ? best : current;
  });

  return [bestMovie];;
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
