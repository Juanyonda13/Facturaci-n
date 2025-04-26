"use client";
import React, { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import { Table, TableCell, TableHeader, TableRow } from "../ui/table";

// Tasa de conversión aproximada de EUR a COP
const TASA_EUR_COP = 4500;

// Función para formatear moneda colombiana
const formatCOP = (valor: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(valor);
};

export default function ReciboProductos() {
  const { isOpen, openModal, closeModal } = useModal();
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Servicio de diseño web",
      cantidad: 1,
      precio: 1200 * TASA_EUR_COP,
      impuesto: 19, // IVA en Colombia es 19%
      total: 1200 * TASA_EUR_COP * 1.19
    },
    {
      id: 2,
      nombre: "Hosting anual",
      cantidad: 1,
      precio: 120 * TASA_EUR_COP,
      impuesto: 19,
      total: 120 * TASA_EUR_COP * 1.19
    },
    {
      id: 3,
      nombre: "Dominio personalizado",
      cantidad: 1,
      precio: 15 * TASA_EUR_COP,
      impuesto: 19,
      total: 15 * TASA_EUR_COP * 1.19
    }
  ]);
  
  const subtotal = productos.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const impuestos = productos.reduce((sum, item) => sum + (item.precio * item.cantidad * item.impuesto / 100), 0);
  const total = subtotal + impuestos;
  
  const handleSave = () => {
    console.log("Guardando productos del recibo...");
    closeModal();
  };
  
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-5 dark:border-gray-800 lg:p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Productos y Servicios
        </h3>
        <button
          onClick={openModal}
          className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.33334V12.6667M3.33333 8.00001H12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Añadir Producto
        </button>
      </div>

      <div className="p-5 lg:p-7">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Producto
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Cantidad
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Precio
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  IVA (%)
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <tbody>
              {productos.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell className="py-4 text-start text-sm font-medium text-gray-800 dark:text-white/90">
                    {producto.nombre}
                  </TableCell>
                  <TableCell className="py-4 text-start text-sm font-medium text-gray-800 dark:text-white/90">
                    {producto.cantidad}
                  </TableCell>
                  <TableCell className="py-4 text-start text-sm font-medium text-gray-800 dark:text-white/90">
                    {formatCOP(producto.precio)}
                  </TableCell>
                  <TableCell className="py-4 text-start text-sm font-medium text-gray-800 dark:text-white/90">
                    {producto.impuesto}%
                  </TableCell>
                  <TableCell className="py-4 text-start text-sm font-medium text-gray-800 dark:text-white/90">
                    {formatCOP(producto.total)}
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
        
        <div className="mt-6 flex flex-col items-end gap-4">
          <div className="flex w-full max-w-xs flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Subtotal:
              </span>
              <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                {formatCOP(subtotal)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                IVA:
              </span>
              <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                {formatCOP(impuestos)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-gray-800 dark:text-white/90">
                Total:
              </span>
              <span className="text-base font-semibold text-gray-800 dark:text-white/90">
                {formatCOP(total)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Añadir Producto
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Agregue un nuevo producto o servicio al recibo.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div className="col-span-2">
                  <Label>Nombre del Producto</Label>
                  <Input
                    type="text"
                    placeholder="Ej: Servicio de consultoría"
                  />
                </div>

                <div>
                  <Label>Cantidad</Label>
                  <Input type="number" defaultValue="1" min="1" />
                </div>

                <div>
                  <Label>Precio Unitario (COP)</Label>
                  <Input type="number" placeholder="0" step={1000} min="0" />
                </div>

                <div>
                  <Label>IVA (%)</Label>
                  <select className="w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-brand-500 active:border-brand-500 dark:border-gray-600 dark:text-gray-400">
                    <option value="19">19%</option>
                    <option value="5">5%</option>
                    <option value="0">0% (Exento)</option>
                  </select>
                </div>

                <div>
                  <Label>Descuento (%)</Label>
                  <Input type="number" defaultValue="0" min="0" max="100" />
                </div>

                <div className="col-span-2">
                  <Label>Descripción</Label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-brand-500 active:border-brand-500 dark:border-gray-600 dark:text-gray-400"
                    rows={3}
                    placeholder="Descripción detallada del producto o servicio"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-6">
              <Button variant="outline" onClick={closeModal}>
                Cancelar
              </Button>
              <Button onClick={handleSave}>Añadir</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
} 