import Image from "next/image";
import React from "react";
import helpicon from "@/public/images/help-hand.svg";

const SupportBtn = () => {
  return (
    <button className="flex items-center bg-[#2b9e76] h-[48px] w-[151px] pl-[20px] px-[16px] rounded-md">
      <div className="flex items-center">
        <p className="text-white">সাপোর্ট করুন</p>
        <Image
          className="pl-[5px]"
          src={helpicon}
          alt="support-icon"
          width={32}
          height={32}
        />
      </div>
    </button>
  );
};

export default SupportBtn;
