require('./db-connect');

const Movie = require('./models/movieModel');

/*const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Director Name",
  actors: ["Actor 1", "Actor 2"],
  language: "Hindi",
  country: "India",
  rating: 7.5,
  plot: "Plot of the movie",
  awards: "Awards received",
  posterUrl: "<https://example.com/poster.jpg>",
  trailerUrl: "<https://example.com/trailer.mp4>",
};*/

/*async function createMovie(movieData) {
  try {
    const movie = new Movie(movieData);
    const savedMovie = await movie.save();   //saves it to database
    console.log("Created movie:", savedMovie);
  } catch (error) {
    throw error;
  }
}

createMovie(newMovie); */   //create a movie

/*async function readMovie(movieName) {
  try {
    const movie = await Movie.findOne({ title: movieName });

    if (movie) {
      console.log("Movie found:", movie);
    }
    else {
      console.log("Movie not found");
    }
  } catch (error) {
    console.error('Error reading movies:', error)
  }
}

readMovie("Dilwale Dulhania Le Jayenge");*/  //read a movie

/*async function readAllMovies(){
  try{
    const movies = await Movie.find();
    console.log("Movies found:", movies);
  }catch(error){
    console.error("Error reading movies:", error);
  }
}

readAllMovies()*/ //read all movies

/*async function getMoviesByActor(actorName) {
  try {
    const moviesByActor = await Movie.find({actors: actorName})
    console.log('Movies by actor:', moviesByActor)
  } catch (error) {
    console.error("Error getting movies by actor:", error);
  }
}

getMoviesByActor("Aamir Khan")*/ //read all movies by actor

/*async function getMoviesByDirector(directorName) {
  try {
    const moviesByDirector = await Movie.find({director: directorName})
    console.log('Movies by director:', moviesByDirector)
  } catch (error) {
    console.error("Error getting movies by director:", error);
  }
}

getMoviesByDirector("Rajkumar Hirani")*/ //read all movies by director

/*async function getMoviesByYear(givenYear) {
  try {
    const moviesByYear = await Movie.find({releaseYear: givenYear})
    console.log('Movies by year:', moviesByYear)
  } catch (error) {
    console.error("Error getting movies by year:", error);
  }
}

getMoviesByYear(2001)*/ //read all movies by year

/*async function getMoviesByGenre(genre) {
  try {
    const moviesByGenre = await Movie.find({genre: genre})
    console.log('Movies by genre:', moviesByGenre)
  } catch (error) {
    console.error("Error getting movies by genre:", error);
  }
}

getMoviesByGenre('Sports')*/ //read all movies by genre

/*async function updateMovie(movieId, updateData) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, updateData, { new: true });
    console.log("Updated Movie", updatedMovie);
  } catch (error) {
    console.error('Error updating movie:', error);
  }
  
  /*const selectedMovie = await Movie.findById(movieId)
  selectedMovie.rating = updatedRating
  selectedMovie.save()
}

updateMovie("653e1d61975111961d09525b", {title: "Lagaan"}) 
  //update a movie

async function deleteMovieById(movieId) {
  try {
    const deleteMovie = await Movie.findByIdAndDelete(movieId);
    if(deleteMovie){
      console.log('Deleted Movie', deleteMovie)
    }
    else{
      console.log('Movie not found')
    }
  } catch (error) {
    console.error('Error deleting Movie:', error)
  }
}

deleteMovieById('653e1d61975111961d09525b')*/ //delete a movie

async function getMoviesSortedByRating(){
  try{
    const movies = await Movie.find().sort({releaseYear: 1})
    console.log('Movies sorted by rating:', movies)
  }catch(error){
    console.error('Error sorting movies by rating:', error)
  }
}

getMoviesSortedByRating();
