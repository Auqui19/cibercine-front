import React from 'react';
import { useParams } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from './moviesData'; 

const Detail = () => {
  const { title } = useParams();

  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (movie) => movie.title.replace(/\s+/g, '-').toLowerCase() === title
  );

  if (!movie) {
    return <div className="text-white text-center">Película no encontrada</div>;
  }

  const additionalDetails = {
    synopsis: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño...",
    director: "Tobe Hooper",
    idioma: ["Subtitulada", "Doblada"],
    disponible: "Regular, 2D"
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center py-12">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10 items-center lg:items-start">

        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full max-w-xs h-auto rounded-lg shadow-lg"
          />
        </div>


        <div className="flex flex-col justify-start text-left w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">{movie.title}</h1>
          <p className="text-lg font-medium text-yellow-400 mb-4 text-center lg:text-left">{movie.genre}</p>

          <h2 className="text-2xl font-semibold mb-2">Sinopsis</h2>
          <p className="text-gray-300 mb-6">{additionalDetails.synopsis}</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Director</h3>
            <p className="text-yellow-400">{additionalDetails.director}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Idioma</h3>
            <div className="flex space-x-4">
              {additionalDetails.idioma.map((lang, index) => (
                <button
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition duration-300"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Disponible</h3>
            <p>{additionalDetails.disponible}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
