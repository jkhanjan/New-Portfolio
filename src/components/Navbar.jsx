import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-[100]">
      <div className="flex items-center justify-between z-[100] p-4">
        <button
          className="flex items-center rounded text-gray-200 hover:text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center items-center w-6 h-6">
            <div
              className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5 bg-white" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-black my-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5 bg-white" : ""
              }`}
            ></div>
          </div>
        </button>
      </div>

      <div
        className={`fixed flex-col right-[1%] top-0 rounded-3xl p-3 bg-gray-800 z-40 flex justify-center transition-all duration-300 ease-in-out ${
          isOpen ? "h-[40vh]" : "h-[0vh] translate-y-[-100%]"
        }`}
      >
        <ul className="flex  items-center text-white gap-6 justify-center">
          {["Home", "Works", "Contact"].map((item, index) => (
            <li key={item} className="overflow-hidden">
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-4xl sm:text-8xl hover:text-gray-300 transition-colors inline-block transform ${
                  isOpen ? "translate-y-[0%]" : "translate-y-[-100%]"
                } transition-all duration-500 ease-in-out`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex text-white gap-6 mt-4">
          {["LinkedIn", "GitHub", "WhatsApp"].map((item, index) => (
            <li key={item} className="overflow-hidden">
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-4xl sm:text-2xl hover:text-gray-300 transition-colors inline-block transform ${
                  isOpen ? "translate-y-[0%]" : "translate-y-[-100%]"
                } transition-all duration-500 ease-in-out`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  fontFamily: "MyCustomFont",
                }}
              >
                {item}
              </a>
            </li>
          ))}
          <a href=""></a>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
