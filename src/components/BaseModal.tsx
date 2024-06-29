import React, { ReactNode } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Incluye children como una propiedad opcional
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white bg-opacity-25 rounded-lg p-4 flex flex-col justify-center items-center">
        {children}

        <button
          className="flex justify-center items-center text-black bg-blue-500 p-1 rounded-xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BaseModal;
