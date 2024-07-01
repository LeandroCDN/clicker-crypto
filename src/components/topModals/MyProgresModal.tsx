import React from "react";
import Image from "next/image";
interface MyProgresModalProps {
  onClose: () => void;
}

const getRandomProfileImage = () => {
  const numbers = [31, 32, 33, 34];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex].toString();
};
const MyProgresModal: React.FC<MyProgresModalProps> = ({ onClose }) => {
  const randomName = `Holly`;
  const randomImage = getRandomProfileImage();

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <h2 className="mb-4 text-6xl text-yellow-300">Airdrop</h2>
      {/* Profile*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center rounded-lg mb-4">
          <div className="flex items-center bg-gradient-to-r from-customPink to-customBlue rounded-full p-1 min-w-[64%]">
            <Image
              src={`/profile/${randomImage}.png`}
              alt="Coin"
              className={"mr-2"}
              width={36}
              height={36}
            />

            <span className="flex-grow text-center text-white text-4xl mr-4 ">
              {randomName}
            </span>
          </div>
          <div className="border-gradient text-3xl text-center min-w-[34%]">
            level 1
          </div>
        </div>
      </div>

      {/* Total Earnings*/}
      <div className="min-h-12 flex flex-col justify-center items-center p-1 px-4 mb-4 rounded-lg border-gradient w-full">
        <div className="flex flex-col items-center mr-2 mb-2 w-full">
          <h3 className="text-2xl">Total Earnings</h3>
          <div className="flex flex-row justify-evenly items-center bg-white bg-opacity-15 w-full rounded-lg p-2 ">
            <Image
              src={`/Coin.png`}
              alt="Coin"
              className={"mr-2"}
              width={36}
              height={36}
            />
            <p className="text-4xl text-white text-center">99,934,776</p>
          </div>
        </div>
      </div>

      {/* Progress*/}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center mb-4 rounded-lg border-gradient max-w-[48%] px-2">
          <div className="flex flex-col items-center w-full">
            <h3 className="text-xl text-center w-full">Friend Referred</h3>
            <div className="flex flex-row justify-evenly items-center w-full bg-white bg-opacity-15 mb-2 ">
              <Image
                src={`/DailyLogin.png`}
                alt="Coin"
                className={"mr-2"}
                width={42}
                height={42}
              />
              <p className="text-2xl text-white  text-center rounded-lg ">50</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mb-4 rounded-lg border-gradient max-w-[48%] px-2">
          <div className="flex flex-col items-center w-full">
            <h3 className="text-xl text-center w-full">Mission Completed</h3>
            <div className="flex flex-row justify-evenly items-center w-full bg-white bg-opacity-15 mb-2 p-1">
              <Image
                src={`/DailyMission.png`}
                alt="Coin"
                className={"mr-2"}
                width={38}
                height={38}
              />
              <p className="text-2xl text-white  text-center rounded-lg ">
                125
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons*/}
      <div></div>
    </div>
  );
};
export default MyProgresModal;
