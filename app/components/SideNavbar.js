import React from "react";
import Image from "next/image";
import bookIcon from "@/public/sidebar/book.svg";
// import bookIcon from "@/public/sidebar/bookIcon.svg";
import bookmarkIcon from "@/public/sidebar/bookmarkIcon.svg";
import gotoIcon from "@/public/sidebar/gotoIcon.svg";
import homeIcon from "@/public/sidebar/homeIcon.svg";
import othersIcon from "@/public/sidebar/othersIcon.svg";
import subjectIcon from "@/public/sidebar/subjectIcon.svg";
import Link from "next/link";

const SideNavbar = () => {
  return (
    <div className="pt-12 bg-white h-[80px] lg:h-full w-full lg:w-[96px] bottom-0 lg:left-0 fixed z-[-10]">
      <nav className="pt-5 flex lg:flex-col lg:h-lvh lg:justify-center justify-evenly items-center">
        <Link
          className="flex justify-center items-center w-[56px] h-[56px] rounded-md hover:bg-[#45ac85]"
          href={"/"}
        >
          <Image className="p-3" src={homeIcon} alt="book Icon" width={48} />
        </Link>
        <Link
          className="flex justify-center items-center mt-[26px] w-[56px] h-[56px] bg-[#45ac85] rounded-md hover:bg-[#45ac85]"
          href={"/"}
        >
          <Image className="p-3" src={bookIcon} alt="book Icon" width={48} />
        </Link>
        <Link
          className="flex justify-center items-center pt-4 my-[18px] w-[56px] h-[56px] rounded-md hover:bg-[#45ac85]"
          href={"/"}
        >
          <Image className="p-3" src={subjectIcon} alt="book Icon" width={48} />
        </Link>
        <Link
          className="flex justify-center items-center my-[18px] w-[56px] h-[56px] rounded-md hover:bg-[#45ac85]"
          href={"/"}
        >
          <Image
            className="p-3"
            src={bookmarkIcon}
            alt="book Icon"
            width={48}
          />
        </Link>
        <Link
          className="flex justify-center items-center my-[15px] w-[56px] h-[56px] rounded-md hover:bg-[#45ac85]"
          href={"/"}
        >
          <Image className="p-3" src={othersIcon} alt="book Icon" width={48} />
        </Link>
        <Link
          className="flex justify-center items-center my-[18px] w-[56px] h-[56px] rounded-md hover:bg-[#45ac85]"
          href={"/"}
        >
          <Image className="p-3" src={gotoIcon} alt="book Icon" width={48} />
        </Link>
      </nav>
    </div>
  );
};

export default SideNavbar;
