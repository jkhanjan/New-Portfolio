import React from "react";
import Scene3 from "../3Dscene/Scene3";
import Footer from "./Footer";

const Page5 = () => {
  return (
    <div className="w-full h-full relative block overflow-hidden">
      <div className="z-[2] w-full rounded-b-9xl">
        <h1
          className="text-8xl uppercase p-10 opacity-75 sm:text-[22vh]"
          style={{ fontFamily: "MyCustomFont2", textAlign: "center" }}
        >
          Let's create a website
        </h1>

        <div className=" h-[90vh] sm:h-[60vh]  w-full flex flex-col sm:flex-row  items-center">
          <Scene3 />

          <div className="flex flex-col gap-8 w-full items-center">
            <input
              type="text"
              style={{ fontFamily: "MyCustomFont" }}
              placeholder="Your Name *"
              className="text-2xl mb-2 border-b-2 items-center justify-center w-[80%] selection:border-none "
            />
            <input
              type="text"
              style={{ fontFamily: "MyCustomFont" }}
              placeholder="Your Email *"
              className="text-2xl mb-2 border-b-2 items-center justify-center w-[80%] selection:border-none"
            />
            <input
              type="text"
              style={{ fontFamily: "MyCustomFont" }}
              placeholder="Your Message *"
              className="text-2xl mb-2 border-b-2 items-center justify-center w-[80%] selection:border-none"
            />
            <button
              style={{ fontFamily: "MyCustomFont" }}
              className="bg-black opacity-80 sm:px-8 sm:py-4 text-white text-lg rounded-2xl px-4 py-2 mb-6 sm:mb-0"
            >
              SEND
            </button>
          </div>
        </div>
        <div className="w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] right-[-35%] sm:right-[-8%] sm:bottom-[20%] bottom-[20%]  absolute bg-gray-950 opacity-80 rounded-full"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Page5;
