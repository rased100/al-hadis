import Image from "next/image";
import React from "react";
import logo from "@/public/images/home-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import SupportBtn from "./SupportBtn";

const TopNavbar = () => {
  return (
    <div className="bg-[#ffffff]">
      <div className="flex items-cemter justify-between p-[16px]">
        <div className="flex items-center">
          <Image className="" src={logo} alt="ihadis" width={44} height={44} />
          <div className="pl-[24px]">
            <h3 className="text-[20px] text-gray-800 font-semibold">
              হাদিস সমূহ
            </h3>
            <p className="text-[14px] text-gray-800">
              হাদিস পড়ুন শিখুন এবং জানুন
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="absolute pl-3">
              <IoSearchOutline size={20} />
            </div>
            <input
              placeholder="Search hadith"
              className="h-[51px] w-[268px] bg-gray-100 rounded px-[38px] py-2 border border-gray-300"
            />
          </div>
          <div className="pl-[68px]">
            <SupportBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
