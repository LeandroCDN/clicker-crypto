"use client";
import { useState } from "react";
import { useLoading } from "@/context/loadingContext";
import Image from "next/image";

const Click = () => {
  const { totalCoins, setTotalCoins, power, setEnergy, energy }: any =
    useLoading();
  const [iconSize, setIconSize] = useState("h-60 w-60");
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    if (energy >= power) {
      setTotalCoins(totalCoins + power);
      setEnergy(energy - power);

      // Reducir temporalmente el tamaño del ícono
      // setIconSize("h-48 w-48");
      // setTimeout(() => {
      //   setIconSize("h-60 w-60");
      // }, 500); // Restaurar tamaño original después de 500ms

      // Cambiar estado de presionado y cambiar la imagen
      setPressed(true);
      setTimeout(() => {
        setPressed(false);
      }, 200); // Restaurar estado de presionado después de 200ms

      // Reproducir sonido de tap
      const tapSound = new Audio("/sfx/tap.wav");
      tapSound.play();
    } else {
      // Manejo de caso donde no hay suficiente energy
      console.log("No tienes suficiente energy para realizar esta acción.");
    }
  };

  return (
    <div className="min-h-[300px] flex justify-center items-center">
      <div className="mx-2">
        <button
          onClick={handleClick}
          style={{ outline: "none", userSelect: "none" }}
        >
          <Image
            src={pressed ? "/CoinUnpressed.png" : "/CoinPress.png"}
            alt="Coin"
            className={iconSize}
            width={300}
            height={300}
            draggable="false"
          />
        </button>
      </div>
    </div>
  );
};

export default Click;
