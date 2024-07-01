"use client";
import { useState, useRef, useEffect } from "react";
import { CogIcon, MenuIcon } from "@heroicons/react/outline";
import BaseModal from "./BaseModal";
import Image from "next/image";
import ConfigModal from "./topModals/ConfigModal";
import MyProgresModal from "./topModals/MyProgresModal";
import ToolsModal from "./navModals/ToolsModal";
import BoostsModal from "./navModals/BoostsModal";
import FriendsModal from "./navModals/FriendsModal";
import DailyLoginModal from "../components/pages/Game/modals/DailyLoginModal";
import DailyCodeModal from "../components/pages/Game/modals/DailyCodeModal";
import DailyMissionModal from "../components/pages/Game//modals/DailyMissionModal";

const getRandomProfileImage = () => {
  const numbers = [31, 32, 33, 34];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex].toString();
};

const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showMyProgresModal, setShowMyProgresModal] = useState(false);
  const [showToolsModal, setShowToolsModal] = useState(false);
  const [showBoostsModal, setShowBoostsModal] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [showDailyLoginModal, setShowDailyLoginModal] = useState(false);
  const [showDailyCodeModal, setShowDailyCodeModal] = useState(false);
  const [showDailyMissionModal, setShowDailyMissionModal] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const randomImage = getRandomProfileImage();

  const openConfigModal = () => {
    setShowConfigModal(true);
    setShowMenu(false); // Cerrar el menú al abrir la configuración
  };

  const closeConfigModal = () => {
    setShowConfigModal(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openMyProgresModal = () => {
    setShowMyProgresModal(true);
    setShowMenu(false); // Cerrar el menú al abrir My Progress
  };

  const closeMyProgresModal = () => {
    setShowMyProgresModal(false);
  };

  const openToolsModal = () => {
    setShowToolsModal(true);
    setShowMenu(false);
  };

  const closeToolsModal = () => {
    setShowToolsModal(false);
  };

  const openBoostsModal = () => {
    setShowBoostsModal(true);
    setShowMenu(false);
  };

  const closeBoostsModal = () => {
    setShowBoostsModal(false);
  };
  const openFriendsModal = () => {
    setShowFriendsModal(true);
    setShowMenu(false);
  };

  const closeFriendsModal = () => {
    setShowFriendsModal(false);
  };

  const openDailyLoginModal = () => {
    setShowDailyLoginModal(true);
    setShowMenu(false);
  };

  const closeDailyLoginModal = () => {
    setShowDailyLoginModal(false);
  };

  const openDailyCodeModal = () => {
    setShowDailyCodeModal(true);
    setShowMenu(false);
  };

  const closeDailyCodeModal = () => {
    setShowDailyCodeModal(false);
  };

  const openDailyMissionModal = () => {
    setShowDailyMissionModal(true);
    setShowMenu(false);
  };

  const closeDailyMissionModal = () => {
    setShowDailyMissionModal(false);
  };

  const handleClickOutside = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const randomName = `Holly`;
  const level = 5;

  return (
    <div className="flex flex-row justify-between items-center rounded-lg mb-4">
      <div className="relative">
        <button
          ref={buttonRef}
          className="min-h-12 flex justify-center items-center cursor-pointer pr-6"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-10 w-10" />
        </button>
        {showMenu && (
          <div ref={menuRef}>
            <div className="absolute bg-black bg-opacity-90 flex flex-col min-w-[190px] items-center border-gradient rounded-lg p-4 mt-2">
              <ul className="text-left w-full">
                <li className="text-xl font-bold text-white">My Boosts</li>
                <ul className="list-disc list-inside">
                  <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
                    <span onClick={openToolsModal} className="cursor-pointer">
                      Tools
                    </span>
                  </li>
                  <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
                    <span onClick={openBoostsModal} className="cursor-pointer">
                      Boosts
                    </span>
                  </li>
                </ul>

                <li className="text-xl font-bold text-white mt-2">
                  My Rewards
                </li>
                <ul className="list-disc list-inside">
                  <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
                    <span
                      onClick={openDailyLoginModal}
                      className="cursor-pointer"
                    >
                      Daily Login
                    </span>
                  </li>
                  <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
                    <span
                      onClick={openDailyCodeModal}
                      className="cursor-pointer"
                    >
                      Daily Code
                    </span>
                  </li>
                  <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
                    <span
                      onClick={openDailyMissionModal}
                      className="cursor-pointer"
                    >
                      Daily Missions
                    </span>
                  </li>
                </ul>

                <li className="text-xl font-bold text-white hover:border-gradient cursor-pointer mt-2 py-2">
                  <span onClick={openFriendsModal} className="cursor-pointer">
                    My Friends
                  </span>
                </li>

                <li className="text-xl font-bold hover:border-gradient ">
                  <span onClick={openMyProgresModal} className="cursor-pointer">
                    My Progress
                  </span>
                </li>

                <li className="text-xl font-bold mt-2 text-gray-500">
                  My Wallet
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center bg-gradient-to-r from-customPink to-customBlue rounded-full w-3/4 px-4 py-2 shadow-md mx-2">
        <span className="text-2xl mr-2">
          <Image
            src={`/profile/${34}.png`}
            alt="Coin"
            className={"mr-2"}
            width={36}
            height={36}
          />
        </span>
        <span className="flex-grow text-center text-white text-2xl">
          {randomName}
        </span>
        <span className="ml-2 text-xl text-white">{`Lvl ${level}`}</span>
      </div>
      <div className="relative">
        <button
          className="min-h-12 flex justify-center items-center cursor-pointer pl-6"
          onClick={openConfigModal}
        >
          <CogIcon className="h-10 w-10" />
        </button>
      </div>

      <BaseModal isOpen={showConfigModal} onClose={closeConfigModal}>
        <ConfigModal onClose={closeConfigModal} />
      </BaseModal>

      <BaseModal isOpen={showMyProgresModal} onClose={closeMyProgresModal}>
        <MyProgresModal onClose={closeMyProgresModal} />
      </BaseModal>
      <BaseModal isOpen={showToolsModal} onClose={closeToolsModal}>
        <ToolsModal onClose={closeToolsModal} />
      </BaseModal>
      <BaseModal isOpen={showBoostsModal} onClose={closeBoostsModal}>
        <BoostsModal onClose={closeBoostsModal} />
      </BaseModal>
      <BaseModal isOpen={showFriendsModal} onClose={closeFriendsModal}>
        <FriendsModal onClose={closeFriendsModal} />
      </BaseModal>
      <BaseModal isOpen={showDailyLoginModal} onClose={closeDailyLoginModal}>
        <DailyLoginModal onClose={closeDailyLoginModal} />
      </BaseModal>
      <BaseModal isOpen={showDailyCodeModal} onClose={closeDailyCodeModal}>
        <DailyCodeModal onClose={closeDailyCodeModal} />
      </BaseModal>
      <BaseModal
        isOpen={showDailyMissionModal}
        onClose={closeDailyMissionModal}
      >
        <DailyMissionModal onClose={closeDailyMissionModal} />
      </BaseModal>
    </div>
  );
};

export default Top;
