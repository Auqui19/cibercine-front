import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { estrenoMovies, peliculasMovies } from '../pages/details/moviesData';

const MetodosPago = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedSeats = queryParams.get('seats');
  const movieTitle = queryParams.get('movie');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const combos = queryParams.get('combos');
  const initialTotalPrice = parseFloat(queryParams.get('totalPrice')) || 0;

  const movie = [...estrenoMovies, ...peliculasMovies].find(
    (m) => m.title === movieTitle
  );

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [inputValues, setInputValues] = useState({
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCVV: '',
    documentNumber: '',
    phoneNumber: '',
    documentType: 'DNI',
    cardType: 'Visa',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Permitir solo números para ciertos campos
    const numericFields = ['cardNumber', 'cardMonth', 'cardYear', 'cardCVV', 'documentNumber', 'phoneNumber'];
    if (numericFields.includes(name) && !/^\d*$/.test(value)) {
      return;
    }

    setInputValues({ ...inputValues, [name]: value });
  };

  const isPaymentDisabled = () => {
    if (selectedPaymentMethod === 'Tarjeta') {
      return (
        !inputValues.cardNumber ||
        !inputValues.cardMonth ||
        !inputValues.cardYear ||
        !inputValues.cardCVV ||
        !inputValues.documentNumber
      );
    } else if (selectedPaymentMethod === 'App agora' || selectedPaymentMethod === 'Billeteras Electrónicas') {
      return (
        !inputValues.phoneNumber ||
        !inputValues.documentNumber ||
        (selectedPaymentMethod === 'Billeteras Electrónicas' && !selectedWallet)
      );
    }
    return true;
  };

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method === selectedPaymentMethod ? '' : method);
    setSelectedWallet('');
  };

  const handleWalletSelection = (wallet) => {
    setSelectedWallet(wallet);
  };

  const handlePay = () => {
    if (!isPaymentDisabled()) {
      navigate(
        `/confirmacion-pago?movie=${movieTitle}&seats=${selectedSeats}&date=${date}&time=${time}&combos=${combos}&method=${selectedPaymentMethod}&wallet=${selectedWallet}&totalPrice=${initialTotalPrice.toFixed(2)}`
      );
    }
  };

  const renderPaymentFields = () => {
    const inputStyle = "w-full mb-2 p-2 text-black border rounded";

    switch (selectedPaymentMethod) {
      case 'Tarjeta':
        return (
          <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-120 mt-4 bg-gray-100 p-6 rounded shadow-md">
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Número de la tarjeta</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Número de la tarjeta"
                name="cardNumber"
                value={inputValues.cardNumber}
                onChange={handleInputChange}
                className={inputStyle}
                maxLength={16}
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-gray-700">Mes</label>
                <input
                  type="number"
                  placeholder="Mes"
                  name="cardMonth"
                  value={inputValues.cardMonth}
                  onChange={handleInputChange}
                  className={inputStyle}
                  min={1}
                  max={12}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Año</label>
                <input
                  type="number"
                  placeholder="Año"
                  name="cardYear"
                  value={inputValues.cardYear}
                  onChange={handleInputChange}
                  className={inputStyle}
                  min={new Date().getFullYear()} // Año actual
                  max={new Date().getFullYear() + 10} // Hasta 10 años en el futuro
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">CVV</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="CVV"
                  name="cardCVV"
                  value={inputValues.cardCVV}
                  onChange={handleInputChange}
                  className={inputStyle}
                  maxLength={4}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-gray-700">Tipo de documento</label>
                <select
                  name="documentType"
                  value={inputValues.documentType}
                  onChange={handleInputChange}
                  className={inputStyle}
                >
                  <option value="DNI">DNI</option>
                  <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Número de documento</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Número de documento"
                  name="documentNumber"
                  value={inputValues.documentNumber}
                  onChange={handleInputChange}
                  className={inputStyle}
                  maxLength={12}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Tipo de Tarjeta</label>
              <select
                name="cardType"
                value={inputValues.cardType}
                onChange={handleInputChange}
                className={inputStyle}
              >
                <option value="Visa">Visa</option>
                <option value="Amex">Amex</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Diners">Diners</option>
              </select>
            </div>
            <p className="text-sm text-gray-600 mb-2">* No se hacen cambios ni devoluciones</p>
            <p className="text-sm text-gray-600 mb-4">* Toda la información de pago es segura</p>
            <button
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full"
              onClick={handlePay}
              disabled={isPaymentDisabled()}
            >
              Pagar
            </button>
          </div>
        );
      case 'App agora':
        return (
          <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-96 mt-4 bg-gray-100 p-6 rounded shadow-md">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-gray-700">Tipo de documento</label>
                <select
                  name="documentType"
                  value={inputValues.documentType}
                  onChange={handleInputChange}
                  className={inputStyle}
                >
                  <option value="DNI">DNI</option>
                  <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Número de documento</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Número de documento"
                  name="documentNumber"
                  value={inputValues.documentNumber}
                  onChange={handleInputChange}
                  className={inputStyle}
                  maxLength={12}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Número de Celular</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Número de Celular"
                name="phoneNumber"
                value={inputValues.phoneNumber}
                onChange={handleInputChange}
                className={inputStyle}
                maxLength={9}
                required
              />
            </div>
          </div>
        );
      case 'Billeteras Electrónicas':
        return (
          <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-120 mt-4 bg-gray-100 p-6 rounded shadow-md">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-gray-700">Tipo de documento</label>
                <select
                  name="documentType"
                  value={inputValues.documentType}
                  onChange={handleInputChange}
                  className={inputStyle}
                >
                  <option value="DNI">DNI</option>
                  <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Número de documento</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Número de documento"
                  name="documentNumber"
                  value={inputValues.documentNumber}
                  onChange={handleInputChange}
                  className={inputStyle}
                  maxLength={12}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Número de Celular</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Número de Celular"
                name="phoneNumber"
                value={inputValues.phoneNumber}
                onChange={handleInputChange}
                className={inputStyle}
                maxLength={9}
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-gray-700 mb-2">Elige alguna de las opciones de pago</p>
              <div className="flex gap-4">
                <img
                  src="https://www.cineplanet.com.pe/images/yape_icon.png"
                  alt="Yape"
                  className={`w-20 h-20 cursor-pointer rounded-lg transition-all ${
                    selectedWallet === 'Yape' ? 'border-4 border-blue-500' : 'border border-gray-300'
                  }`}
                  onClick={() => handleWalletSelection('Yape')}
                />
                <img
                  src="https://www.cineplanet.com.pe/images/plin_icon.png"
                  alt="Plin"
                  className={`w-20 h-20 cursor-pointer rounded-lg transition-all ${
                    selectedWallet === 'Plin' ? 'border-4 border-blue-500' : 'border border-gray-300'
                  }`}
                  onClick={() => handleWalletSelection('Plin')}
                />
                <img
                  src="https://www.cineplanet.com.pe/images/tunki_icon.png"
                  alt="Tunki"
                  className={`w-20 h-20 cursor-pointer rounded-lg transition-all ${
                    selectedWallet === 'Tunki' ? 'border-4 border-blue-500' : 'border border-gray-300'
                  }`}
                  onClick={() => handleWalletSelection('Tunki')}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">* No se hacen cambios ni devoluciones</p>
            <p className="text-sm text-gray-600 mb-4">* Toda la información de pago es segura</p>
            <button
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full"
              onClick={handlePay}
              disabled={isPaymentDisabled()}
            >
              Pagar
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-screen-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Métodos de Pago</h1>
          <div className="flex flex-col gap-4">
            {/* Tarjeta */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePaymentMethodSelection('Tarjeta')}>
                <input
                  type="radio"
                  id="tarjeta"
                  name="payment"
                  checked={selectedPaymentMethod === 'Tarjeta'}
                  readOnly
                />
                <label htmlFor="tarjeta" className="flex items-center gap-2">
                  Tarjeta de Crédito o Débito
                  <div className="flex gap-2">
                    <img src="https://www.cineplanet.com.pe/images/visa-card_small.png" alt="Visa" className="w-8 h-8" />
                    <img src="https://www.cineplanet.com.pe/images/amex-card_small.png" alt="Amex" className="w-8 h-8" />
                    <img src="https://www.cineplanet.com.pe/images/master-card_small.png" alt="Mastercard" className="w-8 h-8" />
                    <img src="https://www.cineplanet.com.pe/images/diners-card_small.png" alt="Diners" className="w-8 h-8" />
                  </div>
                </label>
              </div>
              {selectedPaymentMethod === 'Tarjeta' && renderPaymentFields()}
            </div>
            {/* App agora */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePaymentMethodSelection('App agora')}>
                <input
                  type="radio"
                  id="agora"
                  name="payment"
                  checked={selectedPaymentMethod === 'App agora'}
                  readOnly
                />
                <label htmlFor="agora" className="flex items-center gap-2">
                  App agora
                  <img src="https://www.cineplanet.com.pe/images/agora_logo.png" alt="Agora" className="w-8 h-8" />
                </label>
              </div>
              {selectedPaymentMethod === 'App agora' && renderPaymentFields()}
            </div>
            {/* Billeteras Electrónicas */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePaymentMethodSelection('Billeteras Electrónicas')}>
                <input
                  type="radio"
                  id="billeteras"
                  name="payment"
                  checked={selectedPaymentMethod === 'Billeteras Electrónicas'}
                  readOnly
                />
                <label htmlFor="billeteras" className="flex items-center gap-2">
                  Billeteras Electrónicas
                  <div className="flex gap-2">
                    <img src="https://www.cineplanet.com.pe/images/logo_yape.png" alt="Yape" className="w-8 h-8" />
                    <img src="https://www.cineplanet.com.pe/images/logo_plin.png" alt="Plin" className="w-8 h-8" />
                    <img src="https://www.cineplanet.com.pe/images/logo_tunki.png" alt="Tunki" className="w-8 h-8" />
                  </div>
                </label>
              </div>
              {selectedPaymentMethod === 'Billeteras Electrónicas' && renderPaymentFields()}
            </div>
          </div>
        </div>

        {/* Sección de detalles de la película (se mantiene igual) */}
        {movie && (
          <div className="w-full lg:w-1/3 flex flex-col items-center bg-gray-700 p-6 rounded-lg">
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
              <p className="text-lg font-semibold">Butacas</p>
              <p>{selectedSeats}</p>
            </div>
            <div className="flex justify-between w-full mt-4">
              <p className="text-lg font-semibold">Combos seleccionados</p>
              <p>{combos || 'Ninguno'}</p>
            </div>
            <div className="flex justify-between w-full mt-4">
              <p className="text-lg font-semibold">Importe Total</p>
              <p>S/ {initialTotalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetodosPago;
