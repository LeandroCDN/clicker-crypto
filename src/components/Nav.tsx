"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Link
          className="min-h-12 flex justify-center items-center bg-green-500 bg-opacity-70 cursor-pointer px-6 rounded-lg"
          href="/game"
        >
          <h3>Game</h3>
        </Link>
      </div>
      <div>
        <Link
          className="min-h-12 flex justify-center items-center bg-green-500 bg-opacity-70 cursor-pointer px-6 rounded-lg"
          href="/upgrades"
        >
          <h3>Upgrades</h3>
        </Link>
      </div>
      <div>
        <Link
          className="min-h-12 flex justify-center items-center bg-green-500 bg-opacity-70 cursor-pointer px-6 rounded-lg"
          href="/friends"
        >
          <h3>Friends</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
