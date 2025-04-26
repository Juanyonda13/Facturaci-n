"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function ReciboCliente() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    console.log("Guardando cambios del cliente...");
    closeModal();
  };
  
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-5 dark:border-gray-800 lg:p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Información del Cliente
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1921 2.47295C12.4116 1.69241 11.2345 1.69241 10.454 2.47295L3.61327 9.31366C3.34754 9.57939 3.16931 9.91943 3.09979 10.2882L2.5392 12.6353C2.49748 12.8102 2.5599 12.9937 2.70022 13.1341C2.84054 13.2744 3.02408 13.3368 3.19901 13.2951L5.54611 12.7345C5.91486 12.665 6.25491 12.4867 6.52064 12.221L13.3614 5.38031C14.1419 4.59977 14.1419 3.42272 13.3614 2.64218L13.1921 2.47295ZM11.1851 3.20377C11.5449 2.84401 12.1012 2.84401 12.461 3.20377L12.6303 3.373C12.99 3.73276 12.99 4.28973 12.6303 4.64949L12.0836 5.19615L10.6384 3.75092L11.1851 3.20377ZM9.90754 4.48175L3.9642 10.4251C3.84979 10.5395 3.77121 10.6878 3.7398 10.8465L3.36558 12.369L4.8881 11.9948C5.04681 11.9634 5.1951 11.8848 5.30951 11.7704L11.2528 5.82709L9.90754 4.48175Z"
              fill=""
            />
          </svg>
          Editar
        </button>
      </div>

      <div className="p-5 lg:p-7">
        <div className="mb-5 grid grid-cols-1 gap-4 border-b border-dashed border-gray-200 pb-5 last:mb-0 last:border-none last:pb-0 dark:border-gray-700 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              Nombre
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              Juan Carlos Pérez
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              Correo Electrónico
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              juanperez@ejemplo.com
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              Teléfono
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              +34 612 345 678
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              NIF/CIF
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              B12345678
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              Dirección
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              Calle Principal 123
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              Ciudad
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              Madrid
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              Código Postal
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              28001
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-500">
              País
            </span>
            <span className="block font-medium text-gray-800 dark:text-white/90">
              España
            </span>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Editar Información del Cliente
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Actualice los datos del cliente para este recibo.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="mb-8">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Datos Personales
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Nombre</Label>
                    <Input
                      type="text"
                      defaultValue="Juan Carlos Pérez"
                    />
                  </div>

                  <div>
                    <Label>Correo Electrónico</Label>
                    <Input type="email" defaultValue="juanperez@ejemplo.com" />
                  </div>

                  <div>
                    <Label>Teléfono</Label>
                    <Input type="tel" defaultValue="+34 612 345 678" />
                  </div>

                  <div>
                    <Label>NIF/CIF</Label>
                    <Input type="text" defaultValue="B12345678" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Dirección
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2">
                    <Label>Dirección</Label>
                    <Input
                      type="text"
                      defaultValue="Calle Principal 123"
                    />
                  </div>

                  <div>
                    <Label>Ciudad</Label>
                    <Input type="text" defaultValue="Madrid" />
                  </div>

                  <div>
                    <Label>Código Postal</Label>
                    <Input type="text" defaultValue="28001" />
                  </div>

                  <div>
                    <Label>País</Label>
                    <select className="w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-brand-500 active:border-brand-500 dark:border-gray-600 dark:text-gray-400">
                      <option value="España">España</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Francia">Francia</option>
                      <option value="Italia">Italia</option>
                      <option value="Alemania">Alemania</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-6">
              <Button variant="outline" onClick={closeModal}>
                Cancelar
              </Button>
              <Button onClick={handleSave}>Guardar Cambios</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
} 