import React from "react";

interface DailyCodeModalProps {
  onClose: () => void;
}

const DailyCodeModal: React.FC<DailyCodeModalProps> = ({ onClose }) => {
  return (
    <div>
      <h2 className="text-black">Daily Code Content</h2>
      <p> Nito el diseño definitivo, pls</p>
      {/* Aquí va el contenido específico del modal de Daily Login */}
    </div>
  );
};

export default DailyCodeModal;
