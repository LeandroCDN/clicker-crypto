import React from "react";

interface ToolsModalProps {
  onClose: () => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <h2 className="mb-4 text-6xl text-yellow-300">TOOLS</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex flex-col justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2">
            <h3 className=" text-xl">CPC Upgrade</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Adds +1 to yout coins per click
            </p>
          </div>
          <div className="flex flex-row  items-center w-full">
            <div className="flex-none">
              <p>Level 2</p>{" "}
            </div>
            <div className="flex-grow text-center">
              <p>Iconos</p>
            </div>
            <div className="flex-none flex flex-col items-center">
              <p>😃 30,000</p>
              <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 mb-1 rounded-full">
                Get
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToolsModal;
