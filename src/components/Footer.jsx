import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[10vh] bg-gray-950 opacity-80 flex justify-between items-center text-white sm:px-10 rounded-t-3xl px-6">
      <div
        style={{ fontFamily: "MyCustomFont2" }}
        className="font-normal text-2xl sm:text-5xl"
      >
        KHANJAN JHA
      </div>
      <div
        style={{ fontFamily: "MyCustomFont" }}
        className="flex gap-4 sm:gap-8 sm:text-1xl"
      >
        <a
          href="https://www.linkedin.com/in/khanjan-jha-07495723a/"
          alt="linkedin"
        >
          LinkedIn
        </a>
        <h1>WhatsApp</h1>
        <a href="https://github.com/jkhanjan" alt="github">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
