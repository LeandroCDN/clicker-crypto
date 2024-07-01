import React from "react";

interface ConfigModalProps {
  onClose: () => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <h2 className="mb-4 text-6xl text-yellow-300">Settings</h2>

      <div className="flex flex-col w-full justify-center">
        <div className="min-h-12 min-w-[90%] flex flex-col justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="w-full flex flex-row justify-between items-center mr-2 px-2">
            <h3 className=" text-xl mr-4">Volumen</h3>
            <p className="text-sm text-gray-400"> 100</p>
          </div>
        </div>
        <div className="min-h-12 min-w-[90%] flex flex-col justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="w-full flex flex-row justify-between items-center mr-2 px-2">
            <h3 className=" text-xl mr-4">Random Value</h3>
            <p className="text-sm text-gray-400"> 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfigModal;
