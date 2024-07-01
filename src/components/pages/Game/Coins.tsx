"use client";
import { useLoading } from "@/context/loadingContext";
import Image from "next/image";

const Coins = () => {
  const { totalCoins }: any = useLoading();
  return (
    <div className="flex flex-row justify-between border-gradient rounded-lg mb-2">
      <div className="w-full flex justify-center items-center mx-2">
        <Image
          src={"/Coin.png"}
          alt="Coin"
          className={"mr-4 "}
          width={48}
          height={48}
        />
        <p className="text-center text-6xl p-1 pb-3">{totalCoins}</p>
      </div>
    </div>
  );
};
export default Coins;
