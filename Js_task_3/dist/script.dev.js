'use strict';

var numberOfFilms = +prompt('How many films have you watched so far?');
var personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  "private": false
};

for (var i = 0; i < 2; i++) {
  var a = prompt('One of the last films you watched?', ''),
      b = prompt('How much would you rate it?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Quite a few movies watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('You are a classic spectator');
} else if (personalMovieDB.count >= 30) {
  console.log('You are a movie fan');
} else {
  console.log('An error has occurred');
}

console.log(personalMovieDB);