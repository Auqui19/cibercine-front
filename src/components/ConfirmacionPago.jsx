import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const ConfirmacionPago = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const movie = queryParams.get('movie');
  const seats = queryParams.get('seats');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const combos = queryParams.get('combos');
  const method = queryParams.get('method');
  const totalPrice = queryParams.get('totalPrice');

  const [isLoading, setIsLoading] = useState(true);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  useEffect(() => {
    // Si ya se ha descargado el PDF, no hacer nada
    if (hasDownloaded) return;

    // Simulamos un tiempo de espera de confirmación de pago
    setTimeout(() => {
      setIsLoading(false);
      generarPDF();
    }, 3000);
  }, [location.search, hasDownloaded]);

  const generarPDF = () => {
    const doc = new jsPDF();

    // Título de la película
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(movie || 'Título no disponible', 80, 20); // Asegurarse de mostrar el título de la película

    // Número de Compra
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Nro. de Compra: WNXFT9K', 80, 30);

    // Código QR (Simulación)
    doc.setFontSize(10);
    doc.text('QR:', 10, 45);
    doc.rect(20, 40, 30, 30); // Simular un espacio para el código QR

    // Información de la sala y película
    doc.setFontSize(12);
    doc.text('Doblada', 80, 45);
    doc.setFontSize(10);
    doc.setTextColor(255, 0, 0);
    doc.text('Muestra el código QR desde tu celular para canjear tus combos e ingresar a la sala.', 10, 75);
    doc.text('No necesitas pasar por boletería ni imprimir este documento', 10, 80);

    // Información del cliente
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Cliente:', 10, 95);
    doc.setFont('helvetica', 'normal');
    doc.text('Luis Vásquez', 35, 95);

    // Detalles de la película
    doc.setFont('helvetica', 'bold');
    doc.text('Fecha:', 10, 105);
    doc.text('Hora:', 60, 105);
    doc.text('Sala:', 110, 105);

    doc.setFont('helvetica', 'normal');
    doc.text(date, 35, 105);
    doc.text(time, 80, 105);
    doc.text('8', 130, 105);

    // Butacas seleccionadas
    doc.setFont('helvetica', 'bold');
    doc.text('Tus butacas:', 10, 120);
    doc.setFont('helvetica', 'normal');
    doc.text(seats, 35, 120);

    // Información de las entradas
    doc.setFont('helvetica', 'bold');
    doc.text('Entradas', 10, 135);
    doc.setFont('helvetica', 'normal');
    doc.text(`${combos || 'VC PROM.ENTEL 2X1'}`, 10, 145); // Ejemplo de entrada

    // Subtotal y Total
    doc.setFont('helvetica', 'bold');
    doc.text(`Subtotal: S/ ${totalPrice}`, 140, 145);
    doc.setFontSize(14);
    doc.setTextColor(255, 0, 0);
    doc.text(`Total: S/ ${totalPrice}`, 140, 160);

    doc.save('COMPROBANTE.pdf');
    setHasDownloaded(true);
  };

  const handleReturnToHome = () => {
    setIsLoading(true);
    setHasDownloaded(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {isLoading ? (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Confirmando pago...</h2>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Pago realizado</h2>
          <p>El pago ha sido confirmado. Se ha generado tu PDF.</p>
          <button
            className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
            onClick={handleReturnToHome}
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmacionPago;
