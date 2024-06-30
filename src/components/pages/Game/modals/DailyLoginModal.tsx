import React from "react";

interface DailyLoginModalProps {
  onClose: () => void;
}

const DailyLoginModal: React.FC<DailyLoginModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col mx-auto max-w-md min-w-md text-white">
      <div className="flex flex-row justify-between w-full mb-2">
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            😃 <br /> DAY 1{" "}
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            😃 <br /> DAY 2{" "}
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            😃 <br /> DAY 3{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full mb-2">
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            😃 <br /> DAY 4
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            😃 <br /> DAY 5
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            😃 <br /> DAY 6
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mb-2">
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl w-full">Daily 7</button>
        </div>
      </div>
    </div>
  );
};

export default DailyLoginModal;
