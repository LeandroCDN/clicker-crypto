"use client";
import { useState } from "react";
import BaseModal from "./BaseModal";
import MyProgresModal from "./topModals/MyProgresModal";
const Top = () => {
  const [showMyProgresModal, setShowMyProgresModal] = useState(false);

  const openMyProgresModal = () => {
    setShowMyProgresModal(true);
  };

  const closeMyProgresModal = () => {
    setShowMyProgresModal(false);
  };
  return (
    <div className="absolute bg-black bg-opacity-90 flex flex-col min-w-[190px] items-center border-gradient rounded-lg p-4 mt-2">
      <ul className="text-left w-full">
        <li className="text-xl font-bold text-white">My Boosts</li>
        <ul className="list-disc list-inside">
          <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
            Tools
          </li>
          <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
            Boots
          </li>
        </ul>

        <li className="text-xl font-bold text-white mt-2">My Rewards</li>
        <ul className="list-disc list-inside">
          <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
            Daily Login
          </li>
          <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
            Daily Code
          </li>
          <li className="p-2 hover:border-gradient cursor-pointer text-gray-300">
            Daily Missions
          </li>
        </ul>
        <li className="text-xl font-bold text-white hover:border-gradient cursor-pointer mt-2 py-2">
          My Friends
        </li>

        <li className="text-xl font-bold  text-gray-500">
          <span onClick={openMyProgresModal} className="cursor-pointer">
            My Progress
          </span>
        </li>
        <li className="text-xl font-bold mt-2 text-gray-500">My Wallet</li>
      </ul>

      <BaseModal isOpen={showMyProgresModal} onClose={closeMyProgresModal}>
        <MyProgresModal onClose={closeMyProgresModal} />
      </BaseModal>
    </div>
  );
};
export default Top;
