import Image from "next/image";
import React from "react";
import logo from "@/public/images/home-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import SupportBtn from "./SupportBtn";

const TopNavbar = () => {
  return (
    <div className="bg-[#ffffff]">
      <div className="flex items-cemter justify-between p-[15px]">
        <div className="flex items-center">
          <Image className="" src={logo} alt="ihadis" width={44} height={44} />
          <div className="xlblock hidden">
            <div className="pl-[24px]">
              <h3 className="text-[20px] text-gray-800 font-semibold">
                হাদিস সমূহ
              </h3>
              <p className="text-[14px] text-gray-800">
                হাদিস পড়ুন শিখুন এবং জানুন
              </p>
            </div>
          </div>
          {/* or */}
          <div className="smblock hidden">
            <h1 className="pl-[24px] text-[#2b9e76] text-3xl text-semibold">
              আল হাদিস
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="absolute pl-4 xlblock hidden">
              <IoSearchOutline size={19} />
            </div>
            <input
              placeholder="Search Hadith"
              className="xlblock hidden myEngFont text-md h-[51px] w-[268px] rounded-md pl-[40px] py-2 border border-gray-300 mr-[70px] focus:outline-none"
            />
          </div>
          {/* or */}
          <div className="xsblock hidden  pr-[16px]">
            <div className="flex items-center justify-center w-[41px] h-[41px] bg-[#f2f4f6] rounded-lg">
              <IoSearchOutline className="" color="black" size={22} />
            </div>
          </div>
          {/* support button */}
          <SupportBtn />
          {/* setting button */}
          <div className="xxlblock hidden">
            <div className="flex items-center justify-center w-[41px] h-[41px] bg-[#2b9e76] rounded-lg ">
              <RiSettings5Fill className="" color="#ffffff" size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
