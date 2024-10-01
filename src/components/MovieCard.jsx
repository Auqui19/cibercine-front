import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, genre, imageUrl, isEstreno}) => {
  return (
    <div className="relative w-full rounded-lg border border-yellow-500 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* Aquí está el texto "Estreno" */}
      {isEstreno && (
        <div className="absolute top-2 left-2 bg-red-500 text-white lg:text-sm text-2xl font-bold px-2 py-1 rounded">
          Estreno
        </div>
      )}

      <img className="rounded-t-lg w-full" src={imageUrl} alt={title} />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
        <p className="font-normal text-white dark:text-gray-400">{genre}</p>

        <Link to={`/detalle/${title.replace(/\s+/g, '-').toLowerCase()}`} className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white transition duration-300 font-bold py-2 rounded flex items-center justify-center gap-4">
          <i className="fa-sharp-duotone fa-solid fa-ticket"></i>
          Detalle
        </Link>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  isEstreno: PropTypes.bool,
};
export default MovieCard;
