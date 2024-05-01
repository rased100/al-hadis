import Image from "next/image";
import React from "react";
import helpicon from "@/public/images/help-hand.svg";
import support from "@/public/support1.svg";

const SupportBtn = () => {
  return (
    <button className="xxxlblock hidden  items-center bg-[#2b9e76] h-[48px] w-[151px] pl-[20px] px-[16px] rounded-md">
      <div className="flex items-center">
        <p className="text-white text-[17px] pt-1">সাপোর্ট করুন</p>
        <Image
          className="pl-[5px]"
          // src={helpicon}
          src={support}
          alt="support-icon"
          width={29}
          height={29}
        />
      </div>
    </button>
  );
};

export default SupportBtn;
