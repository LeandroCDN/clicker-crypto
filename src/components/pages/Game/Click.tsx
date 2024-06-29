"use client";
import { ChartPieIcon } from "@heroicons/react/outline";
import { useLoading } from "@/context/loadingContext";
import { useState } from "react";

const Click = () => {
  const { totalCoins, setTotalCoins, power, setEnergy, energy }: any =
    useLoading();
  const [iconSize, setIconSize] = useState("h-60 w-60");

  const handleClick = () => {
    if (energy >= power) {
      setTotalCoins(totalCoins + power);
      setEnergy(energy - power);

      // Reducir temporalmente el tamaño del ícono
      setIconSize("h-48 w-48");
      setTimeout(() => {
        setIconSize("h-60 w-60");
      }, 200); // Restaurar tamaño original después de 200ms
    } else {
      // Manejo de caso donde no hay suficiente energy
      console.log("No tienes suficiente energy para realizar esta acción.");
    }
  };

  return (
    <div className="min-h-[300px] flex justify-center items-center">
      <div className=" mx-2  ">
        <button onClick={handleClick}>
          <ChartPieIcon
            className={`transition-transform duration-200 transform ${iconSize}`}
          />
        </button>
      </div>
    </div>
  );
};
export default Click;
