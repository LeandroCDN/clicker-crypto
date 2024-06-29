import React, { ReactNode } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Incluye children como una propiedad opcional
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
      <div className="relative bg-white bg-opacity-25 flex flex-col justify-center items-center border-gradient rounded-lg p-6">
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
