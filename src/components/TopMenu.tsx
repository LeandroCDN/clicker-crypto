"use client";

const Top = () => {
  return (
    <div className="absolute bg-black bg-opacity-90 flex flex-col  min-w-[250px] items-center border-gradient rounded-lg p-4 mt-2">
      <ul className="text-left w-full">
        <li className="font-bold text-white">My Boosts</li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Tools
        </li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Boots
        </li>

        <li className="font-bold text-white mt-4">My Rewards</li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Daily Login
        </li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Daily Code
        </li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Daily Missions
        </li>

        <li className="font-bold text-white mt-4">My Friends</li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Invite Friends
        </li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Friends Lists
        </li>

        <li className="font-bold text-white mt-4">My Progres</li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Total Earnings
        </li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Friends Referred
        </li>
        <li className="px-4 py-2 hover:border-gradient cursor-pointer">
          Mission completed
        </li>
      </ul>
    </div>
  );
};
export default Top;
