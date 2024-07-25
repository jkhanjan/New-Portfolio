import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const transitionProps = {
    ease: [0.65, 0, 0.95, 1],
    duration: 0.7,
  };

  const controls = useAnimation();
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start((i) => {
            return { ...animations[i], opacity: 1 };
          });
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [controls]);

  const animations = [
    { rotate: [-30, 0], x: [-20, 0] },
    { y: [60, 0] },
    { rotate: [-30, 0], x: [10, 0] },
    { rotate: [-30, 0], y: [50, 0], scale: [0.5, 1] },
    { rotate: [0, 0], y: [50, 0] },
    { y: [-50, 0] },
    { rotate: [40, 0], x: [25, 0] },
  ];

  return (
    <div className="w-full h-fit relative overflow-hidden">
      <img
        data-scroll
        data-scroll-speed="-0.6"
        className=" sm:block h-full w-full absolute z-[1] opacity-10"
        src="https://images.unsplash.com/photo-1668733521099-c120aa4ebbdc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-fit flex justify-between p-4 sm:px-48 sm:mt-10">
        <div>
          <ul className="mb-2 text-2xl font-serif tracking-wider text-blue-800 sm:text-4xl">
            EXPLORE
          </ul>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            New Arrival{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Shop{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Blog{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Our Story{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Contact Us
          </p>
        </div>
        <div>
          <ul className="mb-2 text-2xl font-serif tracking-wider text-blue-800 sm:text-4xl">
            POLICIES
          </ul>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Terms & Conditions{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Cancellation & Refund Policies{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Privacy Policy{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            Shipping Policy{" "}
          </p>
          <p className="text-[0.9rem] tracking-tighter text-gray-700 sm:text-[1.4rem] italic">
            FAQ
          </p>
        </div>
      </div>

      <div
        className="flex text-6xl items-center w-fit mx-auto font-semibold text-blue-950 overflow-hidden sm:text-[15rem] leading-none"
        ref={textRef}
      >
        <img
          className="w-[15rem] opacity-100"
          src="https://bluetea.co.in/cdn/shop/files/Blue_tea_new_logo_150x150_303e39b1-2517-4a44-940d-b8fe915f4997_100x.png?v=1717096775"
          alt=""
        />
        {["B", "L", "U", "E", "T", "E", "A"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            custom={index}
            animate={controls}
            transition={{ ...transitionProps, delay: index * 0.1 }}
            className="inline-block origin-left"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="sm:flex sm:w-full sm:justify-between sm:px-40">
        <div className="mt-6 flex flex-col gap-4">
          <div className="overflow-hidden">
            <img
              data-scroll
              data-scroll-speed="-0.1"
              className="mx-auto sm:w-[130vw] sm:h-[50vh] sm:object-cover"
              src="https://images.unsplash.com/photo-1510682999913-847a6d3cf221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <h1 className="mx-auto text-3xl font-semibold text-blue-950 sm:text-6xl italic">
            Wanna try?
          </h1>
        </div>

        <div className="flex w-full mt-6 justify-between p-4 sm:px-40 sm:justify-center items-center sm:flex-col sm:gap-6">
          <h1 className="text-blue-900 text-4xl font-semibold sm:text-6xl">
            Follow Us
          </h1>
          <div className="flex gap-6">
            <RiInstagramLine className="text-gray-700 text-4xl sm:text-6xl  font-semibold hover:scale-110 hover:text-white" />
            <FaFacebookF className="text-gray-700 text-4xl sm:text-6xl font-semibold hover:scale-110 hover:text-white" />
            <FaYoutube className="text-gray-700 text-4xl sm:text-6xl font-semibold hover:scale-110 hover:text-white" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between sm:justify-center ">
        <h1 className="tracking-tighter text-gray-700 sm:text-2xl">
          2024 &copy; Blue Tea Company
        </h1>
        <h1 className="tracking-tighter text-gray-700 sm:hidden">
          2024 &copy; Webpage by Khanjan
        </h1>
      </div>
    </div>
  );
};

export default Footer;
