"use client";
import { useState } from "react";
import { CogIcon, MenuIcon } from "@heroicons/react/outline";

const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfiguration, setShowConfiguration] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu && showConfiguration) {
      setShowConfiguration(false);
    }
  };

  const toggleConfiguration = () => {
    setShowConfiguration(!showConfiguration);
    if (!showConfiguration && showMenu) {
      setShowMenu(false);
    }
  };
  const randomEmoji = "😀";
  const randomName = `FranCrypto`;
  const level = 5;

  return (
    <div className="flex flex-row justify-between items-center p-4 rounded-lg m-2">
      <div className="relative">
        <button
          className="min-h-12 flex justify-center items-center hover:bg-yellow-500 hover:text-black cursor-pointer px-6"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        {showMenu && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#feb452] shadow-md rounded-md">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 3
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center bg-black rounded-full w-3/4 p-2 shadow-md mx-2">
        <span className="text-2xl mr-2">{randomEmoji}</span>
        <span className="flex-grow text-center text-white">{randomName}</span>
        <span className="ml-2 text-xl text-white">{`Lvl ${level}`}</span>
      </div>
      <div className="relative">
        <button
          className="min-h-12 flex justify-center items-center hover:bg-yellow-500 hover:text-black cursor-pointer px-6"
          onClick={toggleConfiguration}
        >
          <CogIcon className="h-6 w-6" />
        </button>
        {showConfiguration && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-[#feb452] shadow-md rounded-md">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Top;
