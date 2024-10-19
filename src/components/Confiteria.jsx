import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from '../pages/details/moviesData'; // Importar los datos de las películas

const Confiteria = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCombos, setSelectedCombos] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const selectedSeats = queryParams.get('seats');
  const movieTitle = queryParams.get('movie'); // Cambié "movie" por "movieTitle" para mayor claridad
  const date = queryParams.get('date');
  const time = queryParams.get('time');

  // Buscar la película seleccionada por el título
  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (m) => m.title === movieTitle
  );

  const combos = [
    { name: 'Combo 1', description: 'Pop Mediano + Gaseosa', price: 20.0 },
    { name: 'Combo 2', description: '2 Pop Chicos + 2 Gaseosas', price: 22.5 },
    { name: 'Combo 3', description: 'Pop Grande + Nachos + Gaseosa', price: 30.0 },
    { name: 'Combo 1', description: 'Pop Mediano + Gaseosa', price: 20.0 },
    { name: 'Combo 2', description: '2 Pop Chicos + 2 Gaseosas', price: 22.5 },
    { name: 'Combo 3', description: 'Pop Grande + Nachos + Gaseosa', price: 30.0 },
  ];

  const addComboToOrder = (combo) => {
    setSelectedCombos([...selectedCombos, combo]);
  };

  const handleContinue = () => {
    const comboDetails = selectedCombos.map(combo => `${combo.name} S/ ${combo.price}`).join(', ');
    const queryString = `?movie=${movieTitle}&seats=${selectedSeats}&date=${date}&time=${time}&combos=${comboDetails}`;
    navigate(`/metodos-pago${queryString}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-screen-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10">
        
        {/* Sección de combos de confitería */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Confitería</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-bold">{combo.name}</p>
                <p className="text-sm text-gray-300">{combo.description}</p>
                <p className="text-yellow-400 font-semibold">S/ {combo.price.toFixed(2)}</p>
                <button
                  className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
                  onClick={() => addComboToOrder(combo)}
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de detalles de la película (aparecerá a la derecha) */}
        {movie && (
          <div className="w-full lg:w-1/3 flex flex-col items-center bg-gray-700 p-6 rounded-lg">
            <img
              src={movie.imageUrl} // Renderizar la URL de la imagen
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
              <p className="text-lg font-semibold">Butacas</p>
              <p>{selectedSeats}</p>
            </div>
            <div className="flex justify-between w-full mt-4">
              <p className="text-lg font-semibold">Combos seleccionados</p>
              <p>{selectedCombos.length > 0 ? selectedCombos.map(combo => combo.name).join(', ') : 'Ninguno'}</p>
            </div>
            <button
              className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
              onClick={handleContinue}
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confiteria;
