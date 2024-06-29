import { CursorClickIcon } from "@heroicons/react/outline";
const Status = () => {
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r mb-2">
      <div className="flex flex-col items-center">
        <p> Power</p>
        <div className="min-h-12 min-w-[150px] flex justify-center bg-white bg-opacity-15 p-2  rounded-lg">
          <CursorClickIcon className="h-8 w-8 mr-2" />
          <button className="text-xl"> 5 CPT </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>Energy</p>
        <div className="min-h-12  min-w-[150px] flex justify-center bg-white bg-opacity-15 p-2   rounded-lg">
          <button className="text-xl">⚡️ 566/2000 </button>
        </div>
      </div>
    </div>
  );
};
export default Status;
