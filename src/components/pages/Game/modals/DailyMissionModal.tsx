"use client";
import React, { useState } from "react";
import Image from "next/image";

interface DailyMissionModalProps {
  onClose: () => void;
}

const DailyMissionModal: React.FC<DailyMissionModalProps> = ({ onClose }) => {
  // Estados para cada enlace
  const [link1Clicked, setLink1Clicked] = useState(false);
  const [link2Clicked, setLink2Clicked] = useState(false);
  const [link3Clicked, setLink3Clicked] = useState(false);
  const [link4Clicked, setLink4Clicked] = useState(false);

  // Funciones para manejar el clic en cada enlace
  const handleLinkClick = (linkNumber: number) => {
    switch (linkNumber) {
      case 1:
        setLink1Clicked(true);
        break;
      case 2:
        setLink2Clicked(true);
        break;
      case 3:
        setLink3Clicked(true);
        break;
      case 4:
        setLink4Clicked(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-between items-center min-w-[90%]">
      <h2 className="mb-4 text-5xl text-yellow-300">Daily Mission</h2>

      <div className="flex flex-col  justify-center min-w-full">
        <div className="min-h-12 flex flex-col justify-center items-center  p-2 px-4 mb-2 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-1">
            <h3 className="text-2xl">Subscribe to our channel</h3>
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
                src={"/Coin.png"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">5,000</p>
            </div>
            <a
              className={`text-xl px-4 rounded-full ${
                link1Clicked
                  ? "bg-green-500"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              target="_blank"
              href="https://www.youtube.com/@LadyOfCrypto"
              onClick={() => handleLinkClick(1)}
            >
              {link1Clicked ? "Success!" : "GO!"}
            </a>
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
                src={"/Coin.png"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">7,000</p>
            </div>
            <a
              className={`text-xl px-4 rounded-full ${
                link2Clicked
                  ? "bg-green-500"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              target="_blank"
              href="https://www.youtube.com/watch?v=GuPMJvOeMDg&t=3s&ab_channel=LadyOfCrypto"
              onClick={() => handleLinkClick(2)}
            >
              {link2Clicked ? "Success!" : "GO!"}
            </a>
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
                src={"/Coin.png"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">7,000</p>
            </div>
            <a
              className={`text-xl px-4 rounded-full ${
                link3Clicked
                  ? "bg-green-500"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              target="_blank"
              href="https://x.com/LadyofCrypto1"
              onClick={() => handleLinkClick(3)}
            >
              {link3Clicked ? "Success!" : "GO!"}
            </a>
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
                src={"/Coin.png"}
                alt="Coin"
                className={" mr-4"}
                width={24}
                height={24}
              />{" "}
              <p className="text-lg">10,000</p>
            </div>
            <a
              className={`text-xl px-4 rounded-full ${
                link4Clicked
                  ? "bg-green-500"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              target="_blank"
              href="https://ladyofcrypto.co/"
              onClick={() => handleLinkClick(4)}
            >
              {link4Clicked ? "Success!" : "GO!"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMissionModal;
