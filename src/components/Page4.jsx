import React from "react";
import img from '../../public/font/img3.avif'
const Page4 = () => {
  return (
    <div className="w-full h-screen sm:h-[160vh] relative overflow-hidden">
      <img
        src={img}
        className="filter grayscale brightness-[60%] w-full h-full object-cover z-[2]"
        data-scroll
        data-scroll-speed="-0.4"
        alt=""
        loading="lazy"
      />

      <h1
        className="absolute inset-0 flex justify-center items-center text-5xl sm:text-9xl text-white z-[100] uppercase"
        style={{ fontFamily: "MyCustomFont2", textAlign: "center" }}
        data-scroll
        data-scroll-speed="-0.0"
      >
        Need a design? I collaborate <br /> with talented designers and 3D{" "}
        <br /> artists to create unique <br /> solutions for your project.
      </h1>
    </div>
  );
};

export default Page4;
