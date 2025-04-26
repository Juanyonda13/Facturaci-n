"use client";
import ReciboDetalles from "@/components/recibo/ReciboDetalles";
import ReciboCliente from "@/components/recibo/ReciboCliente";
import ReciboProductos from "@/components/recibo/ReciboProductos";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import 'jspdf-autotable';

export default function Recibo() {
  const reciboRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!reciboRef.current) return;

    try {
      // Mostrar mensaje de carga
      const loadingMsg = document.createElement('div');
      loadingMsg.style.position = 'fixed';
      loadingMsg.style.top = '50%';
      loadingMsg.style.left = '50%';
      loadingMsg.style.transform = 'translate(-50%, -50%)';
      loadingMsg.style.padding = '15px 20px';
      loadingMsg.style.background = 'rgba(0, 0, 0, 0.7)';
      loadingMsg.style.color = 'white';
      loadingMsg.style.borderRadius = '5px';
      loadingMsg.style.zIndex = '9999';
      loadingMsg.textContent = 'Generando PDF...';
      document.body.appendChild(loadingMsg);

      // Crear instancia de jsPDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Convertir el contenido a canvas
      const canvas = await html2canvas(reciboRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // Añadir imagen del canvas al PDF
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width
      const pageHeight = 295; // A4 height
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      // Añadir logo y título
      pdf.setFontSize(18);
      pdf.text('RECIBO', 105, 15, { align: 'center' });
      pdf.setFontSize(10);
      pdf.text('Generado el: ' + new Date().toLocaleDateString('es-ES'), 105, 22, { align: 'center' });

      // Añadir la imagen a partir de la posición 30mm del inicio
      pdf.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight);

      // Si la imagen es más grande que una página, añadir más páginas
      let heightLeft = imgHeight;
      position = 30;

      while (heightLeft > pageHeight - position) {
        position = 0;
        pdf.addPage();
        heightLeft -= (pageHeight - 30);
        pdf.addImage(imgData, 'PNG', 0, -(imgHeight - heightLeft - 30), imgWidth, imgHeight);
      }

      // Guardar PDF
      pdf.save(`Recibo_${new Date().toISOString().split('T')[0]}.pdf`);

      // Eliminar mensaje de carga
      document.body.removeChild(loadingMsg);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5 lg:mb-7">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recibo
          </h3>
          <button 
            onClick={handleExportPDF}
            className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            <svg 
              className="fill-current"
              width="18" 
              height="18" 
              viewBox="0 0 24 24"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                fill="currentColor"
              />
            </svg>
            Exportar a PDF
          </button>
        </div>
        <div className="space-y-6" ref={reciboRef}>
          <ReciboDetalles />
          <ReciboCliente />
          <ReciboProductos />
        </div>
      </div>
    </div>
  );
} 