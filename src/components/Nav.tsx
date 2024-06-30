"use client";
import Link from "next/link";
import BaseModal from "./BaseModal";
import { useState } from "react";
import ToolsModal from "./navModals/ToolsModal";
import BoostsModal from "./navModals/BoostsModal";
import Image from "next/image";

const Nav = () => {
  const [showToolsModal, setShowToolsModal] = useState(false);
  const [showBoostsModal, setShowBoostsModal] = useState(false);
  const [showDailyMissionModal, setShowDailyMissionModal] = useState(false);

  const openToolsModal = () => {
    setShowToolsModal(true);
  };

  const closeToolsModal = () => {
    setShowToolsModal(false);
  };

  const openBoostsModal = () => {
    setShowBoostsModal(true);
  };

  const closeBoostsModal = () => {
    setShowBoostsModal(false);
  };

  return (
    <div className="flex flex-row justify-between">
      <button
        className="min-h-10 min-w-[115px] flex justify-evenly items-center bg-gradient-to-r from-customPink to-customBlue cursor-pointer px-2 rounded-lg"
        onClick={openBoostsModal}
      >
        <Image
          src={"/Boosts.png"}
          alt="Coin"
          className={"mr-2"}
          width={28}
          height={28}
        />
        <h3 className="text-lg">Boosts</h3>
      </button>

      <div>
        <button
          className="min-h-10 min-w-[115px] flex justify-evenly items-center bg-gradient-to-r from-customPink to-customBlue cursor-pointer px-2 rounded-lg"
          onClick={openToolsModal}
        >
          <Image
            src={"/Tools.png"}
            alt="Coin"
            className={"mr-2"}
            width={28}
            height={28}
          />
          <h3 className="text-lg">Tools</h3>
        </button>
      </div>
      <div>
        <button
          className="min-h-10 min-w-[115px] flex justify-evenly items-center bg-gradient-to-r from-customPink to-customBlue cursor-pointer px-2 rounded-lg"
          onClick={openToolsModal}
        >
          <Image
            src={"/Friends.png"}
            alt="Coin"
            className={"mr-2"}
            width={28}
            height={28}
          />
          <h3 className="text-lg">Friends</h3>
        </button>
      </div>

      <BaseModal isOpen={showToolsModal} onClose={closeToolsModal}>
        <ToolsModal onClose={closeToolsModal} />
      </BaseModal>
      <BaseModal isOpen={showBoostsModal} onClose={closeBoostsModal}>
        <BoostsModal onClose={closeBoostsModal} />
      </BaseModal>
    </div>
  );
};

export default Nav;
