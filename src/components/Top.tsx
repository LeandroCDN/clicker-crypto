"use client";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { CogIcon, MenuIcon } from "@heroicons/react/outline";
import BaseModal from "./BaseModal";
import Image from "next/image";
import ConfigModal from "./navModals/ConfigModal";
import TopMenu from "./TopMenu";

const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openConfigModal = () => {
    setShowConfigModal(true);
  };

  const closeConfigModal = () => {
    setShowConfigModal(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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

  const randomEmoji = "😀";
  const randomName = `FranCrypto`;
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
            <TopMenu />
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
          className="min-h-12 flex justify-center items-center cursor-pointer pl-6"
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
