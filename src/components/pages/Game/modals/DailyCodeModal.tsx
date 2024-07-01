import React, { useEffect, useState } from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useLoading } from "@/context/loadingContext";

interface DailyCodeModalProps {
  onClose: () => void;
}

const DailyCodeModal: React.FC<DailyCodeModalProps> = ({ onClose }) => {
  const correctCode = ["0", "1", "2", "3", "A", "B"]; // Código a adivinar
  const [userCode, setUserCode] = useState<string[]>([]); // Código ingresado por el usuario
  const [feedback, setFeedback] = useState<string[]>(
    Array(correctCode.length).fill("")
  ); // Feedback visual para el usuario
  const { totalCoins, setTotalCoins }: any = useLoading();

  const getReward = () => {
    setTotalCoins(totalCoins + 1000);
  };
  useEffect(() => {
    if (
      userCode.length === correctCode.length &&
      JSON.stringify(userCode) === JSON.stringify(correctCode)
    ) {
      getReward();
    }
  }, [userCode]);

  const handleIconClick = (char: string) => {
    if (userCode.length < correctCode.length) {
      const newUserCode = [...userCode, char];
      setUserCode(newUserCode);

      // Comparar con el código correcto y generar feedback visual
      const newFeedback = newUserCode.map((val, index) => {
        if (val === correctCode[index]) return val; // Coincide en valor y posición
        if (correctCode.includes(val)) return "❌"; // Coincide en valor pero no en posición
        return ""; // No coincide
      });
      setFeedback(newFeedback);
    }
  };

  const handleReset = () => {
    setUserCode([]);
  };

  // Función para obtener la imagen basada en el caracter
  const getIcon = (char: string) => {
    switch (char) {
      case "0":
        return (
          <Image
            src={"/codebuttons/left.png"}
            alt="Left Arrow"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        );
      case "1":
        return (
          <Image
            src={"/codebuttons/right.png"}
            alt="Right Arrow"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        );
      case "2":
        return (
          <Image
            src={"/codebuttons/up.png"}
            alt="Up Arrow"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        );
      case "3":
        return (
          <Image
            src={"/codebuttons/down.png"}
            alt="Down Arrow"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        );
      case "A":
        return (
          <Image
            src={"/codebuttons/A.png"}
            alt="A"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        );
      case "B":
        return (
          <Image
            src={"/codebuttons/B.png"}
            alt="B"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        );
      case "✔️":
        return <CheckIcon className="h-6 w-6 text-green-500" />;
      case "❌":
        return <XIcon className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col mx-auto max-w-md min-w-md text-white justify-center items-center w-full">
      <h2 className="text-white mb-2">Daily Code Content!</h2>

      {/* Celdas de código ingresado acertado */}
      <div className="flex flex-row justify-between space-x-4">
        {feedback.map((char, index) => (
          <div
            key={index}
            className="rounded-full min-w-8 min-h-8 bg-white bg-opacity-20 border-2 flex items-center justify-center"
          >
            {getIcon(char)}
          </div>
        ))}
      </div>

      {/* Feedback de resultado */}
      <div className="min-h-[200px] min-w-[80%] flex items-center justify-center text-white">
        {userCode.length === correctCode.length &&
          (JSON.stringify(userCode) === JSON.stringify(correctCode) ? (
            <Image
              src={"/GreenTick.png"}
              alt="Correct"
              className={``}
              width={120}
              height={120}
            />
          ) : (
            <Image
              src={"/RedX.png"}
              alt="Incorrect"
              className={``}
              width={120}
              height={120}
            />
          ))}
      </div>

      {/* Celdas de código ingresado */}
      <div className="flex flex-row justify-between space-x-4 mb-6">
        {userCode.map((char, index) => (
          <div
            key={index}
            className="min-w-8 min-h-8 border-gradient bg-white bg-opacity-10 flex items-center justify-center"
          >
            {getIcon(char)}
          </div>
        ))}
        {Array(correctCode.length - userCode.length)
          .fill("")
          .map((_, index) => (
            <div
              key={index + userCode.length}
              className="min-w-8 min-h-8 border-gradient"
            ></div>
          ))}
      </div>

      {/* Iconos para ingresar el código */}
      <div className="flex space-x-2 border-gradient p-2 bg-white bg-opacity-15">
        <button onClick={() => handleIconClick("0")}>
          <Image
            src={"/codebuttons/left.png"}
            alt="Left Arrow"
            className=""
            width={48}
            height={48}
          />
        </button>
        <button onClick={() => handleIconClick("1")}>
          <Image
            src={"/codebuttons/right.png"}
            alt="Right Arrow"
            className=""
            width={48}
            height={48}
          />
        </button>
        <button onClick={() => handleIconClick("2")}>
          <Image
            src={"/codebuttons/up.png"}
            alt="Up Arrow"
            className=""
            width={48}
            height={48}
          />
        </button>
        <button onClick={() => handleIconClick("3")}>
          <Image
            src={"/codebuttons/down.png"}
            alt="Down Arrow"
            className=""
            width={48}
            height={48}
          />
        </button>
        <button onClick={() => handleIconClick("A")}>
          <Image
            src={"/codebuttons/A.png"}
            alt="A"
            className=""
            width={48}
            height={48}
          />
        </button>
        <button onClick={() => handleIconClick("B")}>
          <Image
            src={"/codebuttons/B.png"}
            alt="B"
            className=""
            width={48}
            height={48}
          />
        </button>
      </div>

      {/* Botón de reinicio */}
      <button
        onClick={handleReset}
        className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default DailyCodeModal;
