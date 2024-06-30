import React, { useEffect } from "react";
import { useLoading } from "@/context/loadingContext";

interface BoostsModalProps {
  onClose: () => void;
}

const BoostsModal: React.FC<BoostsModalProps> = ({ onClose }) => {
  const {
    setPower,
    boostClickActive,
    setBoostClickActive,
    boostClickEndTime,
    setBoostClickEndTime,
    totalCoins,
    maxEnergy,
    setMaxEnergy,
    setTotalCoins,
    boostEnergyActive,
    setBoostEnergyActive,
    boostEnergyEndTime,
    setBoostEnergyEndTime,
    boostStaminaActive,
    setBoostStaminaActive,
    boostStaminaEndTime,
    setBoostStaminaEndTime,
  }: any = useLoading();

  const handleGetBoost = () => {
    const boostCost = 5; // Costo del boost

    if (!boostClickActive && totalCoins >= boostCost) {
      const endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 horas a partir de ahora
      setBoostClickEndTime(endTime);
      setBoostClickActive(true);
      setPower((prevPower: number) => prevPower * 2); // Doble el poder
      setTotalCoins(totalCoins - boostCost); // Descontar las coins
    }
  };

  const handleGetEnergyBoost = () => {
    const boostCost = 5; // Costo del boost

    if (!boostEnergyActive && totalCoins >= boostCost) {
      const endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 horas a partir de ahora
      setBoostEnergyEndTime(endTime);
      setBoostEnergyActive(true);
      setMaxEnergy(maxEnergy * 2);
      // Aplica el efecto del boost de energía, por ejemplo, doblando la energía máxima
      setTotalCoins(totalCoins - boostCost); // Descontar las coins
    }
  };

  const handleGetStaminaBoost = () => {
    const boostCost = 5; // Costo del boost

    if (!boostStaminaActive && totalCoins >= boostCost) {
      const endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 horas a partir de ahora
      setBoostStaminaEndTime(endTime);
      setBoostStaminaActive(true);
      // Aplica el efecto del boost de stamina, por ejemplo, doblando la tasa de recuperación de energía
      setTotalCoins(totalCoins - boostCost); // Descontar las coins
    }
  };

  useEffect(() => {
    if (boostClickActive) {
      const timer = setInterval(() => {
        if (Date.now() >= boostClickEndTime) {
          setBoostClickActive(false);
          setPower((prevPower: number) => prevPower / 2); // Revertir el poder
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [boostClickActive, boostClickEndTime, setPower, setBoostClickActive]);

  useEffect(() => {
    if (boostEnergyActive) {
      const timer = setInterval(() => {
        if (Date.now() >= boostEnergyEndTime) {
          setBoostEnergyActive(false);
          // Revertir el efecto del boost de energía si es necesario
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [boostEnergyActive, boostEnergyEndTime, setBoostEnergyActive]);

  useEffect(() => {
    if (boostStaminaActive) {
      const timer = setInterval(() => {
        if (Date.now() >= boostStaminaEndTime) {
          setBoostStaminaActive(false);
          // Revertir el efecto del boost de stamina si es necesario
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [boostStaminaActive, boostStaminaEndTime, setBoostStaminaActive]);

  return (
    <div className="flex flex-col justify-between items-center ">
      <h2 className="mb-4 text-4xl text-yellow-300">BOOSTS</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">Daily Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Double coins per click for the next 24hs
            </p>
          </div>
          <div>
            <button
              className={`text-xl px-4 mb-1 rounded-full ${
                boostClickActive
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              onClick={handleGetBoost}
              disabled={boostClickActive}
            >
              {boostClickActive ? "Active" : "Get"}
            </button>
            <p>😃 30,000</p>
          </div>
        </div>

        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">Energy Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Double max energy fot the next 24hs
            </p>
          </div>
          <div>
            <button
              className={`text-xl px-4 mb-1 rounded-full ${
                boostEnergyActive
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              onClick={handleGetEnergyBoost}
              disabled={boostEnergyActive}
            >
              {boostEnergyActive ? "Active" : "Get"}
            </button>
            <p>😃 5</p>
          </div>
        </div>
        <div className="min-h-12 flex justify-center items-center bg-white bg-opacity-15 p-2 mb-4 rounded-lg border-gradient">
          <div className="max-w-[50%] mr-2">
            <h3 className=" text-xl">Stamina Boost</h3>
            <p className="text-sm text-gray-400">
              {" "}
              Doubles energy recovery rate fot the next 24hs
            </p>
          </div>
          <div>
            <button
              className={`text-xl px-4 mb-1 rounded-full ${
                boostStaminaActive
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-customPink to-customBlue"
              }`}
              onClick={handleGetStaminaBoost}
              disabled={boostStaminaActive}
            >
              {boostStaminaActive ? "Active" : "Get"}
            </button>
            <p>😃 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoostsModal;
