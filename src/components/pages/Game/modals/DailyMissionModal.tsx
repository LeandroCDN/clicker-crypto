import React from "react";
import Image from "next/image";

interface DailyMissionModalProps {
  onClose: () => void;
}

const DailyMissionModal: React.FC<DailyMissionModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between items-center min-w-[90%]">
      <h2 className="mb-4 text-5xl text-yellow-300">Daily Mission</h2>

      <div className="flex flex-col  justify-center min-w-full">
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-2 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-1">
            <h3 className="text-2xl">Subscribe to our chanel</h3>
          </div>
          <div className="flex flex-row  items-center w-full">
            <Image
              src={"/media/youtube.svg"}
              alt="Coin"
              className={" mr-2"}
              width={48}
              height={48}
            />
            <p className={" mr-2"}> X </p>
            <div className="flex flex-row items-center flex-grow text-center mr-4">
              <Image
                src={"/IconSvg/coin.svg"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">5,000</p>
            </div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 rounded-full">
              GO!
            </button>
          </div>
        </div>
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-2 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-1">
            <h3 className="text-2xl">Watch Today&apos;s Video</h3>
          </div>
          <div className="flex flex-row  items-center w-full">
            <Image
              src={"/media/youtube.svg"}
              alt="Coin"
              className={" mr-2"}
              width={48}
              height={48}
            />
            <p className={" mr-2"}> X </p>
            <div className="flex flex-row items-center flex-grow text-center mr-4">
              <Image
                src={"/IconSvg/coin.svg"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">7,000</p>
            </div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 rounded-full">
              GO!
            </button>
          </div>
        </div>
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-2 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-1">
            <h3 className="text-2xl">Follow Us On Twitter</h3>
          </div>
          <div className="flex flex-row  items-center w-full">
            <Image
              src={"/media/Twitter.svg"}
              alt="Coin"
              className={" mr-2"}
              width={48}
              height={48}
            />
            <p className={" mr-2"}> X </p>
            <div className="flex flex-row items-center flex-grow text-center mr-4">
              <Image
                src={"/IconSvg/coin.svg"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">7,000</p>
            </div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 rounded-full">
              GO!
            </button>
          </div>
        </div>
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-2 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-1">
            <h3 className="text-2xl">Join Us On Discord</h3>
          </div>
          <div className="flex flex-row  items-center w-full">
            <Image
              src={"/media/discord.svg"}
              alt="Coin"
              className={" mr-2"}
              width={42}
              height={42}
            />
            <p className={" mr-2"}> X </p>
            <div className="flex flex-row items-center flex-grow text-center mr-4">
              <Image
                src={"/IconSvg/coin.svg"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">10,000</p>
            </div>
            <button className="text-xl bg-gradient-to-r from-customPink to-customBlue px-4 rounded-full">
              GO!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMissionModal;
