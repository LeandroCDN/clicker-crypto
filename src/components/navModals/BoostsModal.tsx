import React from "react";

interface BoostsModalProps {
  onClose: () => void;
}

const BoostsModal: React.FC<BoostsModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between ">
      <h2 className="mb-4">Boosts</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4  border-2 border-yellow-400 rounded-lg border-gradient">
          <div className="max-w-[60%] mr-6">
            <h3 className=" text-xl">Daily Boost</h3>
            <p> Lorem ipsu dolor sit amet</p>
          </div>
          <div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 mb-1 rounded-full">
              Get
            </button>
            <p> 300000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoostsModal;
