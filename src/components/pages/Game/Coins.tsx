"use client";
import { useLoading } from "@/context/loadingContext";

const Coins = () => {
  const { totalCoins }: any = useLoading();
  return (
    <div className="flex flex-row justify-between border-gradient rounded-lg mb-2">
      <div className="w-full flex justify-center mx-2">
        <p className="font-mono text-4xl p-4">😃 {totalCoins}</p>
      </div>
    </div>
  );
};
export default Coins;
