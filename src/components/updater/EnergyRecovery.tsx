"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/context/loadingContext";

const EnergyRecovery = () => {
  const {
    energy,
    setEnergy,
    maxEnergy,
    energyCooldown,
    setEnergyCooldown,
    boostStaminaActive,
  }: any = useLoading();

  useEffect(() => {
    const interval = setInterval(() => {
      if (energy < maxEnergy) {
        setEnergy((prevEnergy: number) =>
          Math.min(prevEnergy + boostStaminaActive ? 2 : 1, maxEnergy)
        );
      }
    }, 1100); // Incrementar cada segundo

    return () => clearInterval(interval);
  }, [energy, maxEnergy]);

  return null; // No se renderiza ningún contenido visible
};

export default EnergyRecovery;
