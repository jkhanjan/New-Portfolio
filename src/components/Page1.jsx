import React, { lazy, Suspense, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const Scene2 = lazy(() => import("../3Dscene/Scene2"));

const OptimizedTitle = React.memo(() => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      setTimeout(() => {
        el.style.opacity = "0.75";
        el.setAttribute("data-scroll", "");
        el.setAttribute("data-scroll-speed", "0.1");
      }, 100);
    }
  }, []);

  return (
    <h1
      ref={titleRef}
      className="text-[5rem] sm:text-[20rem] opacity-0 sm:tracking-[0px] leading-none"
    >
      FRONTEND DEVELOPER & FREELANCER
    </h1>
  );
});

const BackgroundCircle = React.memo(() => (
  <div
    className="flex w-full justify-end absolute z-[100] bottom-0"
    data-scroll
    data-scroll-speed="0.5"
  >
    <div className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] bottom-[-17vh] right-[-40%] sm:right-[-14%] absolute bg-gray-950 opacity-80 rounded-full"></div>
  </div>
));

const Page1 = () => {
  return (
    <div
      style={{ fontFamily: "MyCustomFont2" }}
      className="w-full h-screen flex flex-col justify-between items-center p-4 relative sm:px-10 sm:py-6 overflow-hidden z-[2]"
      data-scroll-section
    >
      <nav className="flex w-full justify-between">
        <h1 className="text-5xl text-black opacity-70">KHANJAN</h1>
        <Navbar />
      </nav>

      <OptimizedTitle />

      <BackgroundCircle />

      <Suspense fallback={<div>Loading 3D scene...</div>}>
        <Scene2 />
      </Suspense>
    </div>
  );
};

export default React.memo(Page1);
