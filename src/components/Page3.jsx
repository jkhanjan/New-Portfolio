import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import img1 from "../../public/font/img1.png";
import img2 from "../../public/font/img2.png";
import img3 from "../../public/font/img3.png";
import img4 from "../../public/font/img4.png";
import img5 from "../../public/font/img5.png";
import img6 from "../../public/font/img6.png";

const Page3 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="w-full h-ful sm:h-[100vh] sm:p-10 p-6 sm:mt-6 mt-6 relative z-[100]">
      <h1
        style={{ fontFamily: "MyCustomFont2" }}
        className="sm:text-7xl text-5xl font-normal border-b-2 sm:border-b-2 border-gray-500 opacity-75"
      >
        RECENT WORKS
        
      </h1>

      <div className="w-full h-full mt-10 sm:mt-0 flex flex-col sm:gap-8 items-center justify-center sm:p-4 ">
        <div
          className="sm:w-full sm:h-[17vh] flex flex-col items-center overflow-hidden cursor-pointer h-[13vh]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className={`absolute object-fill w-[25vw] h-[20vh] sm:w-[30vw] sm:h-[40vh] right-[1%] sm:right-[3%] rounded-2xl transition-transform duration-500 ${
              isHovered ? "scale-100 duration-700 " : "scale-0 rotate-[20deg]"
            }`}
            src={img1}
            alt=""
          />
          <img
            className={`absolute object-fill w-[25vw] h-[20vh] sm:w-[30vw] sm:h-[40vh] sm:bottom-0 left-[0%] sm:left-[3%] rounded-2xl transition-transform duration-500 ${
              isHovered ? "scale-100 duration-700" : "scale-0 rotate-[-20deg]"
            }`}
            src={img2}
            alt=""
          />
          <div
            className={`transition-transform duration-500 hover:-translate-y-[100%] opacity-75`}
          >
            <h1
              style={{ fontFamily: "MyCustomFont2" }}
              className="sm:text-[20vh] w-full h-full leading-none opacity-75 text-7xl"
            >
              BLUE TEA
            </h1>
            <h1
              style={{ fontFamily: "MyCustomFont2" }}
              className="sm:text-[20vh] w-full h-full leading-none flex text-7xl"
            >
              BLUE TEA
              <LuArrowUpRight className="sm:text-7xl text-5xl text-black animate-pulse" />
            </h1>
          </div>
        </div>
        <div
          className="sm:w-full sm:h-[17vh]  flex flex-col items-center overflow-hidden cursor-pointer h-[13vh]"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <img
            className={`absolute w-[25vw] object-contain h-[20vh] sm:w-[30vw] sm:h-[40vh] right-[2%] rounded-2xl transition-transform duration-500 ${
              isHovered1 ? "scale-100 duration-700" : "scale-0 rotate-[-30deg]"
            }`}
            src={img3}
            alt=""
          />
          <img
            className={`absolute w-[25vw] object-contain h-[20vh] sm:w-[30vw] sm:h-[40vh] sm:bottom-0 top-[20%] left-[0%] sm:left-[4%] rounded-2xl transition-transform duration-500 ${
              isHovered1 ? "scale-100 duration-700" : "scale-0 rotate-[30deg]"
            }`}
            src={img4}
            alt=""
          />
          <div
            className={`transition-transform duration-500 hover:-translate-y-[100%] uppercase opacity-75`}
          >
            <h1
              href="https://samiti-reimagine-round1.vercel.app/"
              style={{ fontFamily: "MyCustomFont2" }}
              className="sm:text-[20vh] w-full h-full sm:leading-none opacity-70 text-7xl"
            >
              Jaguar
            </h1>
            <h1
              href="https://samiti-reimagine-round1.vercel.app/"
              style={{ fontFamily: "MyCustomFont2" }}
              className="sm:text-[20vh] w-full h-full sm:leading-none flex text-7xl"
            >
              jaguar
              <LuArrowUpRight className="sm:text-7xl text-5xl text-black animate-pulse" />
            </h1>
          </div>
        </div>
        <div
          className="sm:w-full sm:h-[17vh]  flex flex-col sm:items-center overflow-hidden cursor-pointer uppercase h-[13vh]"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <img
            className={`absolute w-[25vw] h-[20vh] sm:w-[30vw] sm:h-[40vh] right-[1%] sm:bottom-[0%] top-[30%] rounded-2xl transition-transform duration-700 ${
              isHovered2 ? "scale-100 duration-700" : "scale-0 rotate-[30deg]"
            }`}
            src={img5}
            alt=""
          />
          <img
            className={`absolute w-[25vw] h-[20vh] sm:w-[30vw] sm:h-[40vh] left-[0%] sm:left-[5%] bottom-[0%] sm:bottom-[20%] rounded-2xl transition-transform duration-700 ${
              isHovered2 ? "scale-100 duration-700" : "scale-0"
            }`}
            src={img6}
            alt=""
          />
          <div
            className={`transition-transform duration-500 hover:-translate-y-[100%] opacity-75`}
          >
            <h1
              style={{ fontFamily: "MyCustomFont2" }}
              className="sm:text-[20vh] w-full h-full leading-none opacity-70 text-7xl"
            >
              significo
            </h1>
            <h1
              style={{ fontFamily: "MyCustomFont2" }}
              className="sm:text-[20vh] w-full h-full leading-none flex text-7xl"
            >
              significo
              <LuArrowUpRight className="sm:text-7xl text-5xl text-black animate-pulse" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
