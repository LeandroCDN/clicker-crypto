import { useLoading } from "@/context/loadingContext";

const Tools = () => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r from-red-700 to-red-300 rounded-lg  mb-4 mx-1 p-4">
      <h2 className="mb-4">Tools</h2>

      <div className="flex flex-col  justify-center">
        <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mb-4  border-2 border-yellow-400 rounded-lg">
          <button className="text-xl">Update max energy</button>
        </div>

        <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mb-4 border-2 border-yellow-400 rounded-lg">
          <button className="text-xl ">Update power </button>
        </div>
        <div className="min-h-12 flex justify-center bg-white bg-opacity-15 p-2 mb-4 border-2 border-yellow-400 rounded-lg">
          <button className="text-xl">Update energy cooldown </button>
        </div>
      </div>
    </div>
  );
};
export default Tools;
