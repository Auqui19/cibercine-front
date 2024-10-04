import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from './moviesData'; 

const Detail = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (movie) => movie.title.replace(/\s+/g, '-').toLowerCase() === title
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  if (!movie) {
    return <div className="text-white text-center">Película no encontrada</div>;
  }

  // fechas consecutivas
  const today = new Date();
  const dates = [
    today,
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
  ];

  // horarios aleatorios 
  const generateUniqueTimes = () => {
    const times = new Set();
    while (times.size < 3) {
      const hour = Math.floor(Math.random() * 4) + 15; 
      times.add(`${hour}:00 pm`);
    }
    return [...times];
  };

  // fecha y hora seleccionada
  const handleTimeSelection = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
    navigate(`/seleccion-butacas?date=${date}&time=${time}&movie=${movie.title}`);
  };

  const additionalDetails = {
    synopsis: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño...",
    director: "Tobe Hooper",
    idioma: ["Subtitulada", "Doblada"],
    disponible: "Regular, 2D"
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        
        {/* Detalles de la película */}
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

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Disponible</h3>
            <p>{additionalDetails.disponible}</p>
          </div>
        </div>
      </div>

     
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto mt-12 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center lg:text-left mb-6">La función perfecta para ti.</h2>

       
        <div className="flex justify-between">
          {dates.map((date, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg lg:ml-4">
              <p className="font-semibold">{date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}</p>
              <p>Seleccione el horario:</p>
              <div className="mt-2 flex gap-2">
                {generateUniqueTimes().map((time, idx) => (
                  <button
                    key={idx}
                    className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 transition"
                    onClick={() => handleTimeSelection(date.toLocaleDateString(), time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
