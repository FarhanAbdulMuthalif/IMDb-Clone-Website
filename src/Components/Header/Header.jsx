import React from "react";
import MenuIten from "./MenuIten";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between max-2 max-w-6xl items-center sm:mx-auto py-4">
      <div className="flex">
        <MenuIten title="Home" address="/" Icon={AiFillHome} />
        <MenuIten title="About" address="/About" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <div className="text-2xl ">
          <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
            IMDb
          </span>

          <span className="hidden sm:inline">Clone</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
