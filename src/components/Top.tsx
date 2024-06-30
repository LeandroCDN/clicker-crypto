"use client";
import { useState } from "react";
import { CogIcon, MenuIcon } from "@heroicons/react/outline";
import BaseModal from "./BaseModal";
import Image from "next/image";
import ConfigModal from "./navModals/ConfigModal";

const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const openConfigModal = () => {
    setShowConfigModal(true);
  };

  const closeConfigModal = () => {
    setShowConfigModal(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const toggleConfiguration = () => {
  //   setShowConfiguration(!showConfiguration);
  //   if (!showConfiguration && showMenu) {
  //     setShowMenu(false);
  //   }
  // };
  const randomEmoji = "😀";
  const randomName = `FranCrypto`;
  const level = 5;

  return (
    <div className="flex flex-row justify-between items-center rounded-lg mb-4">
      <div className="relative">
        <button
          className="min-h-12 flex justify-center items-center  cursor-pointer pr-6"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-10 w-10" />
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
      <div className="flex items-center bg-gradient-to-r from-customPink to-customBlue rounded-full w-3/4 px-4 py-2 shadow-md mx-2">
        <span className="text-2xl mr-2">{randomEmoji}</span>
        <span className="flex-grow text-center text-white">{randomName}</span>
        <span className="ml-2 text-xl text-white">{`Lvl ${level}`}</span>
      </div>
      <div className="relative">
        <button
          className="min-h-12 flex justify-center items-center  cursor-pointer pl-6"
          onClick={openConfigModal}
        >
          <CogIcon className="h-10 w-10" />
        </button>
      </div>

      <BaseModal isOpen={showConfigModal} onClose={closeConfigModal}>
        <ConfigModal onClose={closeConfigModal} />
      </BaseModal>
    </div>
  );
};

export default Top;
