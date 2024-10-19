import React from "react";
import Scene2 from "../3Dscene/Scene2";
import Navbar from "./Navbar";

const Page1 = () => {
  return (
    <div
      style={{ fontFamily: "MyCustomFont2" }}
      className="w-full h-screen flex flex-col justify-between items-center p-4 relative sm:px-10 sm:py-6 overflow-hidden z-[2]"
      data-scroll-section
    >
      <nav className="flex w-full justify-between ">
        <div>
          <h1 className="text-5xl text-black opacity-70">KHANJAN</h1>
        </div>
        <Navbar />
      </nav>

      <h1
        className=" text-[12vh] tracking-tight font-medium text-black opacity-75 leading-none sm:text-[39vh] sm:tracking-[0px] sm:leading-1"
        data-scroll
        data-scroll-speed="0.1"
      >
        FRONTEND DEVELOPER & FREELANCER
      </h1>

      <div
        className="flex w-full justify-end absolute z-[100] bottom-0"
        data-scroll
        data-scroll-speed="0.5"
      >
        <div className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] bottom-[-17vh] right-[-40%] sm:right-[-14%] absolute bg-gray-950 opacity-80 rounded-full"></div>
      </div>
      <Scene2 />
    </div>
  );
};

export default Page1;
