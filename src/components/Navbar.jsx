import { motion } from "framer-motion";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full absolute z-[9999]">
      <div className=" max-w-screen-2xl h-20 flex items-center justify-between mx-auto px-5 py-5 sm:py-10 sm:px-10 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: [], duration: 0.7 }}
          className="logo"
        >
          <img
          className="bg-blue-00 opacity-100"
            src="https://bluetea.co.in/cdn/shop/files/Blue_tea_new_logo_150x150_303e39b1-2517-4a44-940d-b8fe915f4997_100x.png?v=1717096775"
            alt=""
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: [], duration: 0.7 }}
          className="sm:hidden"
        >
          <IoMenuSharp />
        </motion.span>

        <motion.div className="links hidden sm:flex gap-10">
          {["Home", "About", "Pricing", "Contact"].map((item, index) => (
            <a key={index} className="text-xs font-light font-['TWK_Lausanne] sm:text-xl">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
