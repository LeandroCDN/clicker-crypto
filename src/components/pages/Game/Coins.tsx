"use client";
import { useLoading } from "@/context/loadingContext";

const Coins = () => {
  const { totalCoins }: any = useLoading();
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-yellow-700 to-yellow-300 rounded-lg mb-2">
      <div className="w-full flex justify-center mx-2">
        <p className="font-mono text-4xl p-4">😃 {totalCoins}</p>
      </div>
    </div>
  );
};
export default Coins;
