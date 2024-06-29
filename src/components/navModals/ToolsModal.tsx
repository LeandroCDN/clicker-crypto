import React from "react";

interface ToolsModalProps {
  onClose: () => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between min-w-[90%]  mb-4 p-2">
      <h2 className="mb-4">Tools</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mb-4  border-2 border-yellow-400 rounded-lg">
          <button className="text-xl">Update max energy</button>
        </div>

        <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mb-4 border-2 border-yellow-400 rounded-lg">
          <button className="text-xl ">Update power </button>
        </div>
        <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mb-4 border-2 border-yellow-400 rounded-lg">
          <button className="text-xl">Update energy cooldown </button>
        </div>
      </div>
    </div>
  );
};
export default ToolsModal;
