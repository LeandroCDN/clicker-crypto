"use client";
import { CursorClickIcon } from "@heroicons/react/outline";
import { useLoading } from "@/context/loadingContext";
import Image from "next/image";
const Status = () => {
  const { power, energy, maxEnergy }: any = useLoading();
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r mb-2">
      <div className="flex flex-col items-center">
        <p> Power</p>
        <div className="min-h-12 min-w-[150px] flex justify-center border-gradient p-2  rounded-lg">
          <CursorClickIcon className="h-8 w-8 mr-2" />
          <button className="text-xl"> {power} CPT </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>Energy</p>
        <div className="min-h-12  min-w-[150px] flex justify-center border-gradient p-2   rounded-lg">
          <button className="text-xl">
            ⚡️ {energy}/{maxEnergy}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Status;
