"use client";
import { CursorClickIcon } from "@heroicons/react/outline";
import { useLoading } from "@/context/loadingContext";
import Image from "next/image";
const Status = () => {
  const { power, energy, maxEnergy }: any = useLoading();
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r mb-2 w-full">
      <div className="flex flex-col items-center min-w-[50%]">
        <p> Power</p>
        <div className="min-h-12 min-w-[98%] flex justify-center border-gradient p-2 rounded-lg mr-1">
          <Image
            src={"/ClickIcon.png"}
            alt="Coin"
            className={"mr-2"}
            width={32}
            height={32}
          />
          <button className="text-xl"> {power} CPT </button>
        </div>
      </div>
      <div className="flex flex-col items-center min-w-[50%]">
        <p>Energy</p>
        <div className="min-h-12  min-w-[98%] flex justify-center border-gradient p-2 rounded-lg">
          <Image
            src={"/Linghtning.png"}
            alt="Coin"
            className={"mr-2"}
            width={32}
            height={32}
          />
          <button className="text-xl">
            {energy}/{maxEnergy}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Status;
