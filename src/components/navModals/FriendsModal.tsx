import React from "react";
import Image from "next/image";
interface FriendsModalProps {
  onClose: () => void;
}

const FriendsModal: React.FC<FriendsModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between items-center min-w-[90%]">
      <h2 className="mb-4 text-5xl text-yellow-300">Friends</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex flex-col justify-center items-center p-2 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center ">
            <h3 className="text-2xl">Invite Friends</h3>
            <p className="text-sm text-center text-gray-400">
              {" "}
              ... and get rewards when they join and every time they level up!
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            <Image
              src={"/IconSvg/coin.svg"}
              alt="Coin"
              className={" mr-2 text-white"}
              width={48}
              height={48}
            />

            <div className="flex-none flex flex-col items-center justify-center  p-2 mr-2">
              <p className="text-lg">You Get... </p>
              <p className="text-lg">They get...</p>
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <div className="flex flex-row">
                <Image
                  src={"/IconSvg/coin.svg"}
                  alt="Coin"
                  className={" mr-2 text-white"}
                  width={22}
                  height={22}
                />
                <p className=" text-xl "> 3,000</p>
              </div>
              <div className="flex flex-row">
                <Image
                  src={"/IconSvg/coin.svg"}
                  alt="Coin"
                  className={" mr-2 text-white"}
                  width={22}
                  height={22}
                />
                <p className=" text-xl "> 3,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">My Friends</h3>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex-none flex flex-row items-center justify-between bg-white rounded-full bg-opacity-20 w-full py-1 px-4 mb-1">
              <div className="flex flex-row items-center">
                <p className="text-xl text-customPink">1.</p>
                <p className="text-xl">😀 Holly</p>
              </div>
              <p className="text-xl text-customBlue">Lvl-12</p>
            </div>
            <div className="flex-none flex flex-row items-center justify-between bg-white rounded-full bg-opacity-20 w-full py-1 px-4 mb-1">
              <div className="flex flex-row items-center">
                <p className="text-xl text-customPink">1.</p>
                <p className="text-xl">😀 Louis</p>
              </div>
              <p className="text-xl text-customBlue">Lvl-10</p>
            </div>
            <div className="flex-none flex flex-row items-center justify-between bg-white rounded-full bg-opacity-20 w-full py-1 px-4 mb-1">
              <div className="flex flex-row items-center">
                <p className="text-xl text-customPink">1.</p>
                <p className="text-xl">😀 Nick</p>
              </div>
              <p className="text-xl text-customBlue">Lvl-5</p>
            </div>
            <div className="flex-none flex flex-row items-center justify-between bg-white rounded-full bg-opacity-20 w-full py-1 px-4 mb-1">
              <div className="flex flex-row items-center">
                <p className="text-xl text-customPink">1.</p>
                <p className="text-xl">😀 George</p>
              </div>
              <p className="text-xl text-customBlue">Lvl-1</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center rounded-full bg-gradient-to-r from-customPink to-customBlue">
          <a className="flex flex-row justify-center items-center p-2">
            <Image
              src={"/IconSvg/copy.svg"}
              alt="Coin"
              className={" mr-2 text-white"}
              width={32}
              height={32}
            />
            <h3 className="text-2xl">Copy Invite Code</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
export default FriendsModal;
