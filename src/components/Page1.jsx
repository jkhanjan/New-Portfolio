import React, { useEffect } from "react";
import Scene2 from "../3Dscene/Scene2";
import Navbar from "./Navbar";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page1 = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Connect GSAP ScrollTrigger with Lenis
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);

    // Set up the parallax effect using GSAP
    gsap.to("h1.main-heading", {
      scrollTrigger: {
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });

    // Connect Lenis to RequestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      style={{ fontFamily: "MyCustomFont2" }}
      className="w-full h-screen flex flex-col justify-between items-center p-4 relative sm:px-10 sm:py-6 overflow-hidden z-[2]"
    >
      <nav className="flex w-full justify-between">
        <div>
          <h1 className="text-5xl text-black opacity-70">KHANJAN</h1>
        </div>
        <Navbar />
      </nav>

      <h1
        className="main-heading text-[6rem] tracking-tight text-black opacity-75 leading-none sm:text-[20rem] sm:tracking-[0px] sm:leading-1"
        data-speed="0.1"
      >
        FRONTEND DEVELOPER & FREELANCER
      </h1>

      <div
        className="flex w-full justify-end absolute z-[100] bottom-0"
        data-speed="0.5"
      >
        <div className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] bottom-[-17vh] right-[-40%] sm:right-[-14%] absolute bg-gray-950 opacity-80 rounded-full z-[10000]"></div>
      </div>

      <Scene2 />
    </div>
  );
};

export default Page1;
