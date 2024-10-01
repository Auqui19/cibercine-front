import PropTypes from 'prop-types';

const MovieCard = ({ title, genre, imageUrl }) => {
  return (
    <div className="relative max-w-sm rounded-lg border border-yellow-500 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2">
      <img className="rounded-t-lg w-full" src={imageUrl} alt={title} />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
        <p className="font-normal text-white dark:text-gray-400">{genre}</p>
        <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white transition duration-300 font-bold py-2 px-4 rounded flex items-center justify-center">
          {/* Añadimos las clases para alinear el icono */}
          <i className="fas fa-ticket-alt h-2.5 w-5 mr-3"></i>
          Detalle
        </button>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
export default MovieCard;
