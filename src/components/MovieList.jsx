import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const chunkedMovies = [];

 
  for (let i = 0; i < movies.length; i += 5) {
    chunkedMovies.push(movies.slice(i, i + 5));
  }

  return (
    <div className="my-8 w-11/12 lg:w-10/12 max-w-screen-xl mx-auto">
     
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      

      <div>
        {chunkedMovies.map((movieChunk, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-4"
          >
            {movieChunk.map((movie, idx) => (
              <MovieCard
                key={idx}
                title={movie.title}
                genre={movie.genre}
                imageUrl={movie.imageUrl}
                isEstreno={movie.isEstreno}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title:PropTypes.string.isRequired,
  movies:PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isEstreno: PropTypes.bool,
  })
).isRequired,
}

export default MovieList;
