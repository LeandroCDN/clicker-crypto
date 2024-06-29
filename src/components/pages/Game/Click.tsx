"use client";
import { ChartPieIcon } from "@heroicons/react/outline";
import { useLoading } from "@/context/loadingContext";

const Click = () => {
  const { totalCoins, setTotalCoins }: any = useLoading();
  return (
    <div className="min-h-[300px] flex justify-center items-center">
      <div className=" mx-2  ">
        <button onClick={() => setTotalCoins(totalCoins + 1)}>
          <ChartPieIcon className="h-60 w-60" />
        </button>
      </div>
    </div>
  );
};
export default Click;
