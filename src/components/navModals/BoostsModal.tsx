import React from "react";

interface BoostsModalProps {
  onClose: () => void;
}

const BoostsModal: React.FC<BoostsModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <h2 className="mb-4 text-4xl text-yellow-300">BOOSTS</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">Daily Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Double coins per click for the next 24hs
            </p>
          </div>
          <div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 mb-1 rounded-full">
              Get
            </button>
            <p>😃 30,000</p>
          </div>
        </div>
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">3-Day Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Double cins per click for the next 72hs
            </p>
          </div>
          <div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 mb-1 rounded-full">
              Active
            </button>
            <p>😃 80,000</p>
          </div>
        </div>
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">Energy Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Double max energy fot the next 24hs
            </p>
          </div>
          <div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 mb-1 rounded-full">
              Get
            </button>
            <p>😃 30,000</p>
          </div>
        </div>
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">Stamina Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Doubles energy recovery rate fot the next 24hs
            </p>
          </div>
          <div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 mb-1 rounded-full">
              Active
            </button>
            <p>😃 80,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoostsModal;
