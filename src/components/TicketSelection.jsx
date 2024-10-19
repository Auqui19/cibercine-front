import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from '../pages/details/moviesData';

const TicketSelection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedSeats = queryParams.get('seats').split(',');
  const movieTitle = queryParams.get('movie');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const navigate = useNavigate();

  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (m) => m.title === movieTitle
  );

  const [ticketCounts, setTicketCounts] = useState({
    general: 0,
    senior: 0,
    child: 0,
    member: 0,
    amex: 0,
  });

  const ticketPrices = {
    general: 21.5,
    senior: 19.5,
    child: 19.5,
    member: 12,
    amex: 10.75,
  };

  const totalSelectedTickets = Object.values(ticketCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const handleIncrement = (type) => {
    if (totalSelectedTickets < selectedSeats.length) {
      setTicketCounts((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  const handleDecrement = (type) => {
    setTicketCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] - 1),
    }));
  };

  const calculateTotal = () => {
    return Object.keys(ticketCounts).reduce(
      (total, type) => total + ticketCounts[type] * ticketPrices[type],
      0
    );
  };

  const handleContinue = () => {
    if (totalSelectedTickets === selectedSeats.length) {
      const selectedSeatsString = selectedSeats.join(',');
      const totalPrice = calculateTotal().toFixed(2);
      navigate(
        `/confiteria?movie=${movieTitle}&date=${date}&time=${time}&seats=${selectedSeatsString}&totalPrice=${totalPrice}`
      );
    } else {
      alert('Por favor, selecciona el número de entradas que coincida con las butacas seleccionadas.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center py-12">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10">
        {/* Sección de selección de entradas */}
        <div className="w-full lg:w-2/3 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Selecciona tus entradas</h2>
          <p className="mb-6">
            ¡Combínalas como prefieras! Recuerda que deben coincidir con el número de butacas que seleccionaste.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Entradas Generales */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Entradas Generales</h3>
              <div className="flex justify-between items-center mb-3">
                <span>General 2D OL - S/ {ticketPrices.general.toFixed(2)}</span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-l"
                    onClick={() => handleDecrement('general')}
                    disabled={ticketCounts.general === 0}
                  >
                    -
                  </button>
                  <span className="px-4">{ticketCounts.general}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-r"
                    onClick={() => handleIncrement('general')}
                    disabled={totalSelectedTickets >= selectedSeats.length}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Mayores 60 años 2D OL - S/ {ticketPrices.senior.toFixed(2)}</span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-l"
                    onClick={() => handleDecrement('senior')}
                    disabled={ticketCounts.senior === 0}
                  >
                    -
                  </button>
                  <span className="px-4">{ticketCounts.senior}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-r"
                    onClick={() => handleIncrement('senior')}
                    disabled={totalSelectedTickets >= selectedSeats.length}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Niños 2D OL - S/ {ticketPrices.child.toFixed(2)}</span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-l"
                    onClick={() => handleDecrement('child')}
                    disabled={ticketCounts.child === 0}
                  >
                    -
                  </button>
                  <span className="px-4">{ticketCounts.child}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-r"
                    onClick={() => handleIncrement('child')}
                    disabled={totalSelectedTickets >= selectedSeats.length}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Beneficios */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tus Beneficios</h3>
              <div className="flex justify-between items-center mb-3">
                <span>Entrada Socio Clásico OL - S/ {ticketPrices.member.toFixed(2)}</span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-l"
                    onClick={() => handleDecrement('member')}
                    disabled={ticketCounts.member === 0}
                  >
                    -
                  </button>
                  <span className="px-4">{ticketCounts.member}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-r"
                    onClick={() => handleIncrement('member')}
                    disabled={totalSelectedTickets >= selectedSeats.length}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>50% Promo Amex - S/ {ticketPrices.amex.toFixed(2)}</span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-l"
                    onClick={() => handleDecrement('amex')}
                    disabled={ticketCounts.amex === 0}
                  >
                    -
                  </button>
                  <span className="px-4">{ticketCounts.amex}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded-r"
                    onClick={() => handleIncrement('amex')}
                    disabled={totalSelectedTickets >= selectedSeats.length}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Total y botón continuar */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Total: S/ {calculateTotal().toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                Selecciona el número de entradas que coincide con las butacas seleccionadas.
              </p>
            </div>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handleContinue}
              disabled={totalSelectedTickets !== selectedSeats.length}
            >
              Continuar
            </button>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
