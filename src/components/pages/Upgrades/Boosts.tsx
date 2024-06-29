import { useLoading } from "@/context/loadingContext";

const Boosts = () => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r from-purple-700 to-purple-300 rounded-lg mb-4 mx-1 p-4">
      <h2 className="mb-4">Boosts</h2>
      <div className="flex flex-row justify-center space-x-2">
        <div className="flex-1 min-h-12 flex justify-center bg-white bg-opacity-15 p-2 rounded-lg">
          <button className="text-xl">Free click</button>
        </div>

        <div className="flex-1 min-h-12 flex justify-center bg-white bg-opacity-15 p-2 rounded-lg">
          <button className="text-xl">no energy</button>
        </div>

        <div className="flex-1 min-h-12 flex justify-center bg-white bg-opacity-15 p-2 rounded-lg">
          <button className="text-xl">Hyper clicks</button>
        </div>
      </div>
    </div>
  );
};
export default Boosts;
