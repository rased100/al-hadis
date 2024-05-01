"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Sidebar = ({ books, chapters }) => {
  const [activeButton, setActiveButton] = useState("book");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const content = () =>
    activeButton === "book" ? (
      <div>
        {books.map((book) => (
          <div
            key={book.id}
            className="flex items-center bg-green-100 px-2 py-3 rounded-md"
          >
            <h1 className="hover:bg-slate-300 mr-2 py-1 font-bold px-3 rounded-md text-2xl">
              B
            </h1>
            <div>
              <h2 className="font-bold">{book.title}</h2>
              <p>সর্বমোট হাদিস - {book.number_of_hadis}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="flex items-center bg-green-100 px-2 py-3 rounded-md"
          >
            <h1 className="hover:bg-slate-300 mr-2 py-1 font-bold px-3 rounded-md text-2xl">
              {chapter.id}
            </h1>
            <div>
              <h2 className="font-bold">{chapter.title}</h2>
              <p>হদিসের রেন্জ - {chapter.hadis_range}</p>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="w-[350px] ">
      <div className="bg-white rounded-xl h-[calc(100svh-100px-15px)]">
        <div className="flex justify-evenly text-center items-center">
          <button
            className={`${
              activeButton === "book"
                ? "bg-[#45ac85] text-white"
                : "bg-white text-black"
            } w-1/2 py-3  rounded-tl-xl`}
            onClick={() => handleClick("book")}
          >
            <p className="text-xl">বই</p>
          </button>
          <button
            className={`${
              activeButton === "chapter"
                ? "bg-[#45ac85] text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tr-xl`}
            onClick={() => handleClick("chapter")}
          >
            <p className="text-xl">অধ্যায়</p>
          </button>
        </div>
        <hr />
        <div className="px-[16px]">
          {/* search */}
          <div className="flex items-center py-[18px]">
            <div className="absolute pl-4">
              <IoSearchOutline size={19} />
            </div>
            <input
              placeholder="Search For Filter"
              className="myEngFont text-md h-[51px] w-full rounded-md pl-[40px] py-2 border border-gray-300 focus:outline-none bg-[#f2f4f6]"
            />
          </div>
          {content()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
