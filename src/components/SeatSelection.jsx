import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from '../pages/details/moviesData';

const SeatSelection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const movieTitle = queryParams.get('movie');

  // Buscar la película seleccionada por el título
  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (m) => m.title === movieTitle
  );

  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalSeats = 48;

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center py-12">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10">
        
        {/* Asientos */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold mb-6">Selecciona tus butacas</h2>
          <div className="grid grid-cols-8 gap-4 justify-center">
            {Array.from({ length: totalSeats }, (_, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-md ${
                  selectedSeats.includes(i + 1)
                    ? 'bg-yellow-500'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => handleSeatClick(i + 1)}
                title={`Butaca ${Math.ceil((i + 1) / 8)}${String.fromCharCode(65 + (i % 8))}`} 
              >
                <span role="img" aria-label="seat">
                <i class="fa-solid fa-chair"></i>
                </span>
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-white bg-gray-500 px-4 py-2 rounded-lg inline-block">Pantalla</p>
          </div>
        </div>

        {/* Información de la película */}
        <div className="w-full lg:w-1/3 flex flex-col items-center bg-gray-700 p-6 rounded-lg">
          {movie && (
            <>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-auto max-w-xs mb-4 rounded-lg shadow-lg"
              />
              <h2 className="text-3xl font-bold">{movie.title}</h2>
              <div className="flex justify-between w-full mt-4">
                <p className="text-lg font-semibold">Fecha</p>
                <p>{date}</p>
              </div>
              <div className="flex justify-between w-full mt-2">
                <p className="text-lg font-semibold">Hora</p>
                <p>{time}</p>
              </div>
              <div className="flex justify-between w-full mt-4">
                <p className="text-lg font-semibold">Cantidad de entradas</p>
                <p>{selectedSeats.length} ticket(s)</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Butacas seleccionadas:</p>
                <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No has seleccionado ninguna butaca'}</p>
              </div>
              <div className="flex justify-between w-full mt-6">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">
                  Continuar
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Cancelar compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
