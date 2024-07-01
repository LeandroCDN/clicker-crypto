import React from "react";
import { useLoading } from "@/context/loadingContext";
import Image from "next/image";
interface ToolsModalProps {
  onClose: () => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({ onClose }) => {
  const {
    totalCoins,
    setTotalCoins,
    power,
    setPower,
    maxEnergy,
    setMaxEnergy,
    toolLevels,
    setToolLevels,
  }: any = useLoading();

  const upgradeTool = (
    toolIndex: number,
    cost: number,
    attributeSetter: (value: any) => void,
    incrementValue: number
  ) => {
    if (totalCoins >= cost) {
      setTotalCoins(totalCoins - cost);
      setToolLevels((prevLevels: number[]) => {
        const newLevels = [...prevLevels];
        newLevels[toolIndex] += 1;
        return newLevels;
      });
      attributeSetter((prev: number) => prev + incrementValue);
    } else {
      console.log("Not enough coins to upgrade");
    }
  };

  const upgradeToolLevel = (toolIndex: number, cost: number) => {
    if (totalCoins >= cost) {
      setTotalCoins(totalCoins - cost);
      setToolLevels((prevLevels: number[]) => {
        const newLevels = [...prevLevels];
        newLevels[toolIndex] += 1;
        return newLevels;
      });
    } else {
      console.log("Not enough coins to upgrade");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center min-w-[90%]">
      <h2 className="mb-4 text-5xl text-yellow-300">TOOLS</h2>

      <div className="flex flex-col justify-center">
        {/* CPC Upgrade */}
        <div className="min-h-12 flex flex-col justify-center items-center p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">CPC Upgrade</h3>
            <p className="text-lg text-gray-400">
              Adds +1 to your coins per click
            </p>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="flex-none flex flex-col items-center justify-center border-gradient p-2 mr-4">
              <p className="text-lg">Level</p>
              <p className="text-lg">{toolLevels[0]}</p>
            </div>
            <div className="flex-grow text-center mr-4">
              <Image
                src={"/ClickIcon.png"}
                alt="Coin"
                className={" mr-2 text-white"}
                width={78}
                height={78}
              />
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <p className="text-xl mb-2">Cost: {toolLevels[0] * 10}</p>
              <button
                className="text-xl bg-green-600 px-4 rounded-full"
                onClick={() => upgradeTool(0, toolLevels[0] * 10, setPower, 1)}
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Energy Upgrade */}
        <div className="min-h-12 flex flex-col justify-center items-center p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">Energy Upgrade</h3>
            <p className="text-lg text-gray-400">
              Permanently doubles max energy
            </p>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="flex-none flex flex-col items-center justify-center border-gradient p-2 mr-4">
              <p className="text-lg">Level</p>
              <p className="text-lg">{toolLevels[1]}</p>
            </div>
            <div className="flex-grow text-center mr-4">
              <Image
                src={"/Linghtning.png"}
                alt="Coin"
                className={" mr-2 text-white"}
                width={78}
                height={78}
              />
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <p className="text-xl mb-2">Cost: {toolLevels[1] * 12}</p>
              <button
                className="text-xl bg-green-600 px-4 rounded-full"
                onClick={() =>
                  upgradeTool(
                    1,
                    toolLevels[1] * 12,
                    setMaxEnergy,
                    toolLevels[1] * 12
                  )
                }
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Energy recovery */}
        <div className="min-h-12 flex flex-col justify-center items-center p-2 px-4 mb-4 rounded-lg border-gradient">
          <div className="flex flex-col items-center mr-2 mb-2">
            <h3 className="text-2xl">Stamina Upgrade</h3>
            <p className="text-sm text-gray-400 text-center">
              Permanently doubles recovery rate
            </p>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="flex-none flex flex-col items-center justify-center border-gradient p-2 mr-4">
              <p className="text-lg">Level</p>
              <p className="text-lg">{toolLevels[2]}</p>
            </div>
            <div className="flex-grow text-center mr-4">
              <Image
                src={"/PingLightning.png"}
                alt="Coin"
                className={" mr-2 text-white"}
                width={78}
                height={78}
              />
            </div>
            <div className="flex-none flex flex-col items-center justify-between h-full">
              <p className="text-xl mb-2">Cost: {toolLevels[2] * 30}</p>
              <button
                className="text-xl bg-green-600 px-4 rounded-full"
                onClick={() => upgradeToolLevel(2, toolLevels[2] * 30)}
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsModal;

{
  /* <Image
                src={"/IconSvg/copy.svg"}
                alt="Coin"
                className={" mr-2 text-white"}
                width={32}
                height={32}
              /> */
}
