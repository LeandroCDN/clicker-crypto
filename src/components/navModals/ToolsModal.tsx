import React from "react";

interface ToolsModalProps {
  onClose: () => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between items-center min-w-[90%]">
      <h2 className="mb-4 text-5xl text-yellow-300">TOOLS</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">CPC Upgrade</h3>
            <p className="text-lg text-gray-400">
              {" "}
              Adds +1 to yout coins per click
            </p>
          </div>
          <div className="flex flex-row  items-center w-full">
            <div className="flex-none flex flex-col items-center justify-center border-gradient p-2 mr-4">
              <p className="text-lg">Level </p>
              <p className="text-lg">2</p>
            </div>
            <div className="flex-grow text-center mr-4">
              <p className="text-6xl">😃</p>
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <p className=" text-xl mb-2">😃 30,000</p>
              <button className="text-xl bg-green-600 px-4 rounded-full">
                Upgrade
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">Energy Upgrade</h3>
            <p className="text-lg text-gray-400">
              {" "}
              Permanently doubles max energy
            </p>
          </div>
          <div className="flex flex-row  items-center w-full">
            <div className="flex-none flex flex-col items-center justify-center border-gradient p-2 mr-4">
              <p className="text-lg">Level</p>
              <p className="text-lg">2</p>
            </div>
            <div className="flex-grow text-center mr-4">
              <p className="text-6xl">😃</p>
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <p className="text-xl mb-2">😃 30,000</p>
              <button className="text-xl bg-green-600 px-4 rounded-full">
                Upgrade
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">Stamina Upgrade</h3>
            <p className="text-sm text-gray-400 text-center">
              {" "}
              Permanently doubles recovery rate
            </p>
          </div>
          <div className="flex flex-row  items-center w-full">
            <div className="flex-none flex flex-col items-center justify-center border-gradient p-2 mr-4">
              <p>Level </p>
              <p>2</p>
            </div>
            <div className="flex-grow text-center mr-4">
              <p className="text-6xl">😃</p>
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <p className="text-xl mb-2">😃 30,000</p>
              <button className="text-xl bg-green-600 px-4 rounded-full">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToolsModal;
