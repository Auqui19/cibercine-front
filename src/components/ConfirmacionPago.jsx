import React, { useState, useEffect, useRef } from 'react';
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
  const totalPrice = parseFloat(queryParams.get('totalPrice')) || 0;

  const [isLoading, setIsLoading] = useState(true);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const downloadTriggered = useRef(false); // Ref para evitar doble descarga

  useEffect(() => {
    if (hasDownloaded || downloadTriggered.current) return;

    // Marcar como descargado para evitar múltiples descargas
    downloadTriggered.current = true;

    setTimeout(() => {
      setIsLoading(false);
      generarPDF();
    }, 3000);
  }, [hasDownloaded]); // Usar solo hasDownloaded para controlar el efecto

  const generarPDF = () => {
    const doc = new jsPDF();
    const subtotalButacas = totalPrice - (combos ? 23 : 0); // Ajustar este valor según el precio de los combos
    const subtotalCombos = combos ? 23 : 0; // Ajustar este valor según los combos seleccionados

    // Título de la película
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(movie || 'Título no disponible', 80, 20);
  
    // Número de Compra
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Nro. de Compra: WNXFT9K', 80, 30);
  
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
    doc.text(`VC PROM.ENTEL 2X1`, 10, 145);
    doc.text(`Cant. ${seats.split(',').length}`, 60, 145);
    doc.text(`S/ ${subtotalButacas.toFixed(2)}`, 140, 145);

    // Subtotal de las entradas
    doc.setFont('helvetica', 'bold');
    doc.text(`Subtotal: S/ ${subtotalButacas.toFixed(2)}`, 140, 155);

    // Información de los combos
    if (combos && subtotalCombos > 0) {
      doc.setFont('helvetica', 'bold');
      doc.text('Dulcería', 10, 170);
      doc.setFont('helvetica', 'normal');
      doc.text('Descripción', 10, 180);
      doc.text('Cantidad', 60, 180);
      doc.text('Total S/', 140, 180);
      doc.text(combos, 10, 190);
      doc.text('1', 60, 190);
      doc.text(`S/ ${subtotalCombos.toFixed(2)}`, 140, 190);

      // Subtotal de los combos
      doc.setFont('helvetica', 'bold');
      doc.text(`Subtotal: S/ ${subtotalCombos.toFixed(2)}`, 140, 200);
    }

    // Total a pagar
    const totalAPagar = subtotalButacas + subtotalCombos;
    doc.setFontSize(14);
    doc.setTextColor(255, 0, 0);
    doc.text(`Total: S/ ${totalAPagar.toFixed(2)}`, 140, 220);
  
    doc.save('COMPROBANTE.pdf');
    setHasDownloaded(true);
  };

  const handleReturnToHome = () => {
    setIsLoading(true);
    setHasDownloaded(false);
    downloadTriggered.current = false; // Restablecer la referencia para futuras descargas
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {isLoading ? (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Confirmando pago...</h2>
          <div className="loader">
            <i className="fa fa-spinner fa-spin text-white text-5xl"></i>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="animate-checkmark">
            <i className="fa fa-check-circle text-green-500 text-6xl mb-4"></i>
          </div>
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
