"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface LoadingContextType {
  totalCoins: number;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
  power: number;
  setPower: React.Dispatch<React.SetStateAction<number>>;
  energy: number;
  setEnergy: React.Dispatch<React.SetStateAction<number>>;
  maxEnergy: number;
  setMaxEnergy: React.Dispatch<React.SetStateAction<number>>;
  energyCooldown: number;
  setEnergyCooldown: React.Dispatch<React.SetStateAction<number>>;
  boostClickActive: boolean;
  setBoostClickActive: React.Dispatch<React.SetStateAction<boolean>>;
  boostClickEndTime: number;
  setBoostClickEndTime: React.Dispatch<React.SetStateAction<number>>;
  boostEnergyActive: boolean;
  setBoostEnergyActive: React.Dispatch<React.SetStateAction<boolean>>;
  boostEnergyEndTime: number;
  setBoostEnergyEndTime: React.Dispatch<React.SetStateAction<number>>;
  boostStaminaActive: boolean;
  setBoostStaminaActive: React.Dispatch<React.SetStateAction<boolean>>;
  boostStaminaEndTime: number;
  setBoostStaminaEndTime: React.Dispatch<React.SetStateAction<number>>;
  toolLevels: number[];
  setToolLevels: React.Dispatch<React.SetStateAction<number[]>>;
  dailyLogin: boolean[];
  setDailyLogin: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: any) => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [power, setPower] = useState(1);
  const [maxEnergy, setMaxEnergy] = useState(50);
  const [energy, setEnergy] = useState(maxEnergy);
  const [energyCooldown, setEnergyCooldown] = useState(1);
  const [boostClickActive, setBoostClickActive] = useState(false);
  const [boostClickEndTime, setBoostClickEndTime] = useState(0);
  const [boostEnergyActive, setBoostEnergyActive] = useState(false);
  const [boostEnergyEndTime, setBoostEnergyEndTime] = useState(0);
  const [boostStaminaActive, setBoostStaminaActive] = useState(false);
  const [boostStaminaEndTime, setBoostStaminaEndTime] = useState(0);
  const [toolLevels, setToolLevels] = useState([1, 1, 1]);
  const [dailyLogin, setDailyLogin] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Función para incrementar la energía cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      if (energy < maxEnergy) {
        setEnergy((prevEnergy) => Math.min(prevEnergy + 1, maxEnergy));
      }
    }, 1000 / (boostStaminaActive ? 2 * (toolLevels[2] - 1) : 1 + (toolLevels[2] - 1))); // Incrementar cada segundo

    return () => clearInterval(interval);
  }, [energy, maxEnergy]);

  return (
    <LoadingContext.Provider
      value={{
        totalCoins,
        setTotalCoins,
        power,
        setPower,
        energy,
        setEnergy,
        maxEnergy,
        setMaxEnergy,
        energyCooldown,
        setEnergyCooldown,
        boostClickActive,
        setBoostClickActive,
        boostClickEndTime,
        setBoostClickEndTime,
        boostEnergyActive,
        setBoostEnergyActive,
        boostEnergyEndTime,
        setBoostEnergyEndTime,
        boostStaminaActive,
        setBoostStaminaActive,
        boostStaminaEndTime,
        setBoostStaminaEndTime,
        toolLevels,
        setToolLevels,
        dailyLogin,
        setDailyLogin,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
