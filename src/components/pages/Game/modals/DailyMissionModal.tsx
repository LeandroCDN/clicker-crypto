import React from "react";

interface DailyMissionModalProps {
  onClose: () => void;
}

const DailyMissionModal: React.FC<DailyMissionModalProps> = ({ onClose }) => {
  return (
    <div>
      <h2 className="text-black">Daily Mission Modal Content</h2>
      {/* Aquí va el contenido específico del modal de Daily Login */}
    </div>
  );
};

export default DailyMissionModal;
