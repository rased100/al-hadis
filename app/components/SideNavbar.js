import React from "react";
import Image from "next/image";
import bookIcon from "@/public/sidebar/book.svg";
// import bookIcon from "@/public/sidebar/bookIcon.svg";
import bookmarkIcon from "@/public/sidebar/bookmarkIcon.svg";
import gotoIcon from "@/public/sidebar/gotoIcon.svg";
import homeIcon from "@/public/sidebar/homeIcon.svg";
import othersIcon from "@/public/sidebar/othersIcon.svg";
import subjectIcon from "@/public/sidebar/subjectIcon.svg";
import support from "@/public/support1.svg";
import Link from "next/link";

const SideNavbar = () => {
  return (
    <div className=" bg-white h-[80px] lg:h-full w-full lg:w-[96px] bottom-0 lg:left-0 fixed lg:z-[-1]">
      <div className="pt-4 lg:pt-10">
        <div className="flex lg:flex-col lg:h-screen lg:justify-center justify-evenly items-center gap-7">
          <Link
            className="flex justify-center items-center w-[56px] h-[56px] rounded-md hover:bg-[#f2f4f6]"
            href={"/"}
          >
            <Image className="p-3" src={homeIcon} alt="book Icon" width={48} />
          </Link>
          <Link
            className="flex justify-center items-center w-[56px] h-[56px] bg-[#45ac85] rounded-md hover:bg-[#45ac85]"
            href={"/"}
          >
            <Image
              className="p-2 lg:p-3 w-[35px] lg:w-[50px]"
              src={bookIcon}
              alt="book Icon"
              // width={48}
            />
          </Link>
          <Link
            className="flex justify-center items-center w-[56px] h-[56px] rounded-md hover:bg-[#f2f4f6]"
            href={"/"}
          >
            <Image
              className="p-3"
              src={subjectIcon}
              alt="book Icon"
              width={48}
            />
          </Link>
          <Link
            className="flex justify-center items-center  w-[56px] h-[56px] rounded-md hover:bg-[#f2f4f6]"
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
            className=" justify-center items-center  w-[56px] h-[56px] rounded-md hover:bg-[#f2f4f6] lg:flex hidden"
            href={"/"}
          >
            <Image
              className="p-3"
              src={othersIcon}
              alt="book Icon"
              width={48}
            />
          </Link>
          <Link
            className="flex justify-center items-center w-[56px] h-[56px] rounded-md hover:bg-[#f2f4f6]"
            href={"/"}
          >
            <Image className="p-3" src={gotoIcon} alt="book Icon" width={48} />
          </Link>
          <Link
            className="helpblock hidden  w-[64px] h-[48px] rounded-md hover:bg-[#f2f4f6] bg-[#45ac85]"
            href={"/"}
          >
            <div className="flex items-center justify-center">
              <Image className="p-3" src={support} alt="book Icon" width={48} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
