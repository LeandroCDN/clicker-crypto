"use client";
import Link from "next/link";
import BaseModal from "./BaseModal";
import { useState } from "react";
import ToolsModal from "./navModals/ToolsModal";
import BoostsModal from "./navModals/BoostsModal";

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
      <div>
        <button
          className="min-h-12 flex justify-center items-center bg-green-500 bg-opacity-70 cursor-pointer px-6 rounded-lg"
          onClick={openBoostsModal}
        >
          <h3>Boosts</h3>
        </button>
      </div>
      <div>
        <button
          className="min-h-12 flex justify-center items-center bg-green-500 bg-opacity-70 cursor-pointer px-6 rounded-lg"
          onClick={openToolsModal}
        >
          <h3>Tools</h3>
        </button>
      </div>
      <div>
        <button
          className="min-h-12 flex justify-center items-center bg-green-500 bg-opacity-70 cursor-pointer px-6 rounded-lg"
          onClick={openToolsModal}
        >
          <h3>Friends</h3>
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
