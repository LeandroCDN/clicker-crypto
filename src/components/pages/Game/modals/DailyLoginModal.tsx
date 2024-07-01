import React from "react";
import Image from "next/image";
interface DailyLoginModalProps {
  onClose: () => void;
}

const DailyLoginModal: React.FC<DailyLoginModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col mx-auto max-w-md min-w-md text-white">
      <div className="flex flex-row justify-between w-full mb-2">
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            <Image
              src={"/DailyRewardCoins.png"}
              alt="Coin"
              className={``}
              width={120}
              height={120}
            />
            <p>DAY 1</p>
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            <Image
              src={"/DailyRewardCoins.png"}
              alt="Coin"
              className={``}
              width={120}
              height={120}
            />
            <p>DAY 2</p>
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            <Image
              src={"/GoldRewardChest.png"}
              alt="Coin"
              className={``}
              width={120}
              height={120}
            />
            <p>DAY 3</p>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full mb-2">
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            <Image
              src={"/DailyRewardCoins.png"}
              alt="Coin"
              className={``}
              width={120}
              height={120}
            />
            <p>DAY 4</p>
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            <Image
              src={"/GoldRewardChest.png"}
              alt="Coin"
              className={``}
              width={120}
              height={120}
            />
            <p>DAY 5</p>
          </button>
        </div>
        <div className="flex-1 flex justify-center p-2 mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl">
            <Image
              src={"/DailyRewardCoins.png"}
              alt="Coin"
              className={``}
              width={120}
              height={120}
            />
            <p>DAY 1</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mb-2">
        <div className="flex-1 flex justify-center mx-1 border-2 border-gradient rounded-lg">
          <button className="text-xl flex flex-row items-center justify-center w-full">
            <p className="mr-4">DAY 7</p>
            <Image
              src={"/DailyRewardBigChest.png"}
              alt="Coin"
              className={""}
              width={120}
              height={120}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyLoginModal;
