"use client";
import React, { useState } from "react";
import BaseModal from "../../BaseModal";
import DailyLoginModal from "./modals/DailyLoginModal";
import DailyCodeModal from "./modals/DailyCodeModal";
import DailyMissionModal from "./modals/DailyMissionModal";
import Image from "next/image";

const Daily = () => {
  const [showDailyLoginModal, setShowDailyLoginModal] = useState(false);
  const [showDailyCodeModal, setShowDailyCodeModal] = useState(false);
  const [showDailyMissionModal, setShowDailyMissionModal] = useState(false);

  const openDailyLoginModal = () => {
    setShowDailyLoginModal(true);
  };

  const closeDailyLoginModal = () => {
    setShowDailyLoginModal(false);
  };

  const openDailyCodeModal = () => {
    setShowDailyCodeModal(true);
  };

  const closeDailyCodeModal = () => {
    setShowDailyCodeModal(false);
  };

  const openDailyMissionModal = () => {
    setShowDailyMissionModal(true);
  };

  const closeDailyMissionModal = () => {
    setShowDailyMissionModal(false);
  };

  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-customPink to-customBlue p-4 rounded-lg  mb-2">
      <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mx-1  rounded-lg">
        <button
          className="text-xl flex justify-center items-center flex-col"
          onClick={openDailyLoginModal}
        >
          <p>Daily Login 😃</p>
          {/* <Image
            src={"/DailyLogin.png"}
            alt="Coin"
            className={""}
            width={64}
            height={64}
          /> */}
        </button>
      </div>

      <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mx-1  rounded-lg">
        <button
          className="text-xl flex justify-center items-center flex-col"
          onClick={openDailyCodeModal}
        >
          <p> Daily code 😃 </p>
          {/* <Image
            src={"/DailyCode.png"}
            alt="Coin"
            className={""}
            width={64}
            height={64}
          /> */}
        </button>
      </div>
      <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mx-1  rounded-lg">
        <button
          className="text-xl flex justify-center items-center flex-col"
          onClick={openDailyMissionModal}
        >
          <p> Mission 😃</p>
          {/* <Image
            src={"/DailyMission.png"}
            alt="Coin"
            className={""}
            width={64}
            height={64}
          /> */}
        </button>
      </div>

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
export default Daily;
