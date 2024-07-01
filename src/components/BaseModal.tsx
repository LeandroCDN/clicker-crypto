import React, { ReactNode, useEffect } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Incluye children como una propiedad opcional
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el clic fue fuera del modal
      const modal = document.getElementById("modal-container");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    // Agregar evento de click al documento cuando se abre el modal
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Limpiar el evento cuando se desmonta el componente o se cierra el modal
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
      <div
        id="modal-container"
        className="relative bg-black bg-opacity-60 flex flex-col justify-center min-w-[350px] max-w-[350px] items-center border-gradient rounded-lg p-4"
      >
        <button
          className="absolute top-[-14px] right-[-14px] flex justify-center items-center bg-pink-500 rounded-full text-white min-w-7 max-h-7 text-lg"
          onClick={onClose}
        >
          X
        </button>

        {children}
      </div>
    </div>
  );
};

export default BaseModal;
