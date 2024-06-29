"use client";
import { createContext, useContext, useState } from "react";

interface LoadingContextType {
  totalCoins: number;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
  power: number;
  setPower: React.Dispatch<React.SetStateAction<number>>;
  energy: number;
  setEnergy: React.Dispatch<React.SetStateAction<number>>;
  maxEnergy: number;
  setMaxEnergy: React.Dispatch<React.SetStateAction<number>>;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: any) => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [historicalCoins, setHistoricalCoins] = useState(0);
  const [totalCodes, setTotalCodes] = useState(0);
  const [totalMissions, setTotalMissions] = useState(0);
  const [lastLogin, setlastLogin] = useState(0);
  const [level, setLevel] = useState(0);
  const [power, setPower] = useState(1);
  const [maxEnergy, setMaxEnergy] = useState(500);
  const [energy, setEnergy] = useState(maxEnergy);
  const [energyCooldown, setEnergyCooldown] = useState(60);

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
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
