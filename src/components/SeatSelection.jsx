import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from '../pages/details/moviesData';

const SeatSelection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const movieTitle = queryParams.get('movie');

  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (m) => m.title === movieTitle
  );

  const [selectedSeats, setSelectedSeats] = useState([]);
  const rows = 10; // Número de filas de asientos
  const cols = 8; // Número de columnas de asientos

  // Simulación de algunos asientos ocupados
  const occupiedSeats = ['A3', 'B5', 'C7', 'D1', 'F4'];

  const handleSeatClick = (seatId) => {
    if (occupiedSeats.includes(seatId)) return; // No permitir seleccionar asientos ocupados
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleContinue = () => {
    if (selectedSeats.length > 0) {
      const selectedSeatsString = selectedSeats.join(',');
      // Redirigir a la selección de entradas en lugar de la confitería
      navigate(`/ticket-selection?movie=${movieTitle}&date=${date}&time=${time}&seats=${selectedSeatsString}`);
    } else {
      alert('Por favor, selecciona al menos una butaca antes de continuar.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center py-12">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10">
        {/* Sección de Asientos */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold mb-6">Selecciona tus butacas</h2>
          <div className="grid grid-cols-[auto,repeat(8,1fr)] gap-x-2 gap-y-4 justify-center items-center">
            {/* Etiquetas de columnas */}
            <div></div> {/* Espacio en blanco para la esquina superior izquierda */}
            {Array.from({ length: cols }, (_, i) => (
              <div key={i} className="text-center text-gray-300">
                {i + 1}
              </div>
            ))}

            {/* Filas de asientos con etiquetas */}
            {Array.from({ length: rows }, (_, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {/* Etiqueta de fila */}
                <div className="text-center text-gray-300">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                {/* Asientos de la fila */}
                {Array.from({ length: cols }, (_, colIndex) => {
                  const seatId = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
                  const isOccupied = occupiedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);
                  return (
                    <button
                      key={seatId}
                      className={`w-10 h-10 rounded-full relative ${
                        isOccupied
                          ? 'bg-red-500 cursor-not-allowed'
                          : isSelected
                          ? 'bg-blue-500'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      onClick={() => handleSeatClick(seatId)}
                      disabled={isOccupied}
                    >
                      <span
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200"
                        style={{ whiteSpace: 'nowrap', fontSize: '1.25rem' }}
                      >
                        {seatId}
                      </span>
                      <span role="img" aria-label="seat">
                        <i className="fa-solid fa-chair"></i>
                      </span>
                    </button>
                  );
                })}
              </React.Fragment>
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
                <button
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
                  onClick={handleContinue}
                >
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
