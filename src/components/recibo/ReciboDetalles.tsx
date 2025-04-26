"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Image from "next/image";

export default function ReciboDetalles() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    console.log("Guardando cambios...");
    closeModal();
  };
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <Image
                width={80}
                height={80}
                src="/images/user/owner.jpg"
                alt="usuario"
              />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                Recibo #001-2023
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fecha de emisión: 15/11/2023
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Estado: Pagado
                </p>
              </div>
            </div>
            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              <button className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3337 5.83333L13.3337 5.83333L13.3337 2.5L18.3337 2.5L18.3337 5.83333ZM18.3337 12.5L13.3337 12.5L13.3337 9.16667L18.3337 9.16667L18.3337 12.5ZM11.667 12.5L6.66699 12.5L6.66699 9.16667L11.667 9.16667L11.667 12.5ZM5.00033 5.83333L5.00033 2.5L10.0003 2.5L10.0003 5.83333L5.00033 5.83333ZM5.00033 12.5L1.66699 12.5L1.66699 9.16667L5.00033 9.16667L5.00033 12.5ZM1.66699 5.83333L1.66699 2.5L5.00033 2.5L5.00033 5.83333L1.66699 5.83333ZM11.667 5.83333L6.66699 5.83333L6.66699 2.5L11.667 2.5L11.667 5.83333ZM11.667 17.5L6.66699 17.5L6.66699 14.1667L11.667 14.1667L11.667 17.5ZM5.00033 17.5L1.66699 17.5L1.66699 14.1667L5.00033 14.1667L5.00033 17.5ZM18.3337 17.5L13.3337 17.5L13.3337 14.1667L18.3337 14.1667L18.3337 17.5Z"
                    fill=""
                  />
                </svg>
              </button>

              <button className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 4.16667H14.1667V2.5H5.83333V4.16667H2.5V5.83333H17.5V4.16667ZM4.16667 7.5V16.6667C4.16667 17.5833 4.91667 18.3333 5.83333 18.3333H14.1667C15.0833 18.3333 15.8333 17.5833 15.8333 16.6667V7.5H4.16667ZM7.5 9.16667H9.16667V15.8333H7.5V9.16667ZM12.5 9.16667H10.8333V15.8333H12.5V9.16667Z"
                    fill=""
                  />
                </svg>
              </button>

              <button className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8332 4.16666H12.4998V2.5H7.49984V4.16666H4.1665V5.83333H15.8332V4.16666ZM5.83317 7.5V15.8333C5.83317 16.75 6.58317 17.5 7.49984 17.5H12.4998C13.4165 17.5 14.1665 16.75 14.1665 15.8333V7.5H5.83317Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              />
            </svg>
            Editar
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Editar Detalles del Recibo
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Actualice los detalles del recibo para mantener la información actualizada.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Información del Recibo
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Número de Recibo</Label>
                    <Input
                      type="text"
                      defaultValue="001-2023"
                    />
                  </div>

                  <div>
                    <Label>Fecha de Emisión</Label>
                    <Input type="date" defaultValue="2023-11-15" />
                  </div>

                  <div>
                    <Label>Estado</Label>
                    <select className="w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-brand-500 active:border-brand-500 dark:border-gray-600 dark:text-gray-400">
                      <option value="pagado">Pagado</option>
                      <option value="pendiente">Pendiente</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </div>

                  <div>
                    <Label>Método de Pago</Label>
                    <select className="w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-brand-500 active:border-brand-500 dark:border-gray-600 dark:text-gray-400">
                      <option value="tarjeta">Tarjeta de Crédito</option>
                      <option value="efectivo">Efectivo</option>
                      <option value="transferencia">Transferencia</option>
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
    </>
  );
} 