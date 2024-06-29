"use client";
import { createContext, useContext, useState } from "react";

interface LoadingContextType {
  totalCoins: number;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: any) => {
  const [totalCoins, setTotalCoins] = useState(0);

  return (
    <LoadingContext.Provider value={{ totalCoins, setTotalCoins }}>
      {children}
    </LoadingContext.Provider>
  );
};
