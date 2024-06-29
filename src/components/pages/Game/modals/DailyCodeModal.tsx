import React, { useState } from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid"; // O @heroicons/react/outline
import { UserIcon } from "@heroicons/react/solid"; // Utilizaremos este icono para la letra A
import { AcademicCapIcon } from "@heroicons/react/solid"; // Utilizaremos este icono para la letra B

interface DailyCodeModalProps {
  onClose: () => void;
}

const DailyCodeModal: React.FC<DailyCodeModalProps> = ({ onClose }) => {
  const correctCode = ["0", "A", "B", "1", "2", "A"]; // Código a adivinar
  const [userCode, setUserCode] = useState<string[]>([]); // Código ingresado por el usuario
  const [feedback, setFeedback] = useState<string[]>(
    Array(correctCode.length).fill("")
  ); // Feedback visual para el usuario

  const handleIconClick = (char: string) => {
    if (userCode.length < correctCode.length) {
      const newUserCode = [...userCode, char];
      setUserCode(newUserCode);

      // Comparar con el código correcto y generar feedback visual
      const newFeedback = newUserCode.map((val, index) => {
        if (val === correctCode[index]) return "✔️"; // Coincide en valor y posición
        if (correctCode.includes(val)) return "❌"; // Coincide en valor pero no en posición
        return ""; // No coincide
      });
      setFeedback(newFeedback);
    }
  };

  const handleReset = () => {
    setUserCode([]);
    setFeedback(Array(correctCode.length).fill(""));
  };

  return (
    <div className="flex flex-col mx-auto max-w-md min-w-md text-black justify-center items-center w-full">
      <h2 className="text-white mb-2">Daily Code Content!</h2>

      {/* Celdas de código ingresado acertado */}
      <div className="flex flex-row justify-between space-x-4">
        {feedback.map((char, index) => (
          <div
            key={index}
            className="rounded-full min-w-6 min-h-6 border-2 flex items-center justify-center"
          >
            {char}
          </div>
        ))}
      </div>

      {/* Feedback de resultado */}
      <div className="min-h-[200px] min-w-[80%] flex items-center justify-center text-white">
        {userCode.length === correctCode.length &&
          (JSON.stringify(userCode) === JSON.stringify(correctCode)
            ? "Correct Code!"
            : "Incorrect Code")}
      </div>

      {/* Celdas de código ingresado */}
      <div className="flex flex-row justify-between space-x-4 mb-6">
        {userCode.map((char, index) => (
          <div
            key={index}
            className="min-w-8 min-h-8 border-gradient flex items-center justify-center"
          >
            {char}
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
      <div className="flex space-x-2 border-gradient p-2">
        <button onClick={() => handleIconClick("0")}>
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </button>
        <button onClick={() => handleIconClick("1")}>
          <ArrowRightIcon className="h-6 w-6 text-black" />
        </button>
        <button onClick={() => handleIconClick("2")}>
          <ArrowDownIcon className="h-6 w-6 text-black" />
        </button>
        <button onClick={() => handleIconClick("A")}>
          <UserIcon className="h-6 w-6 text-black" />
        </button>
        <button onClick={() => handleIconClick("B")}>
          <AcademicCapIcon className="h-6 w-6 text-black" />
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
