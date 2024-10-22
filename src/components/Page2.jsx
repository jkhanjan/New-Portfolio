import gsap from "gsap";
import profile from "../../public/font/profile-pic.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";

// Throttle function
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const Page2 = () => {
  const parent = useRef(null);
  const img = useRef(null);
  const paraRefs = useRef([]);
  const aboutMeRefs = useRef([]);
  const letterRefs = useRef([]);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Connect GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Connect Lenis to RequestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Helper to assign refs (simplified)
  const addToRefs = useCallback((el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  }, []);

  const { timeline } = useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main timeline with a throttled function
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    });

    // Throttled GSAP animations
    const throttledAnimation = throttle(() => {
      tl.from(letterRefs.current, {
        translateY: "100%",
        ease: "power4.out",
        duration: 2.5,
        stagger: 0.1,
      })
        .from(
          img.current,
          {
            translateY: "110%",
            rotate: 10,
            ease: "power4.out",
            duration: 2.5,
          },
          "-=2.5"
        )
        .from(
          paraRefs.current,
          {
            opacity: 0,
            translateY: "120%",
            ease: "power4.out",
            duration: 2.5,
            stagger: 0.1,
          },
          "-=2.5"
        )
        .from(
          aboutMeRefs.current,
          {
            translateY: "100%",
            ease: "power4.out",
            duration: 0.5,
            stagger: 0.01,
          },
          "-=2.5"
        );
    }, 200); // Throttle the animation, 200ms limit

    // Execute throttled animation on scroll trigger
    throttledAnimation();

    return () => {
      // Clean up GSAP animations on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [parent, img, paraRefs, aboutMeRefs, letterRefs]);

  return (
    <div
      ref={parent}
      style={{ fontFamily: "MyCustomFont2" }}
      className="w-full h-full flex flex-col justify-center items-center z-[1] bg-transparent relative"
    >
      <div className="w-full h-fit flex items-center justify-center text-9xl overflow-hidden text-black opacity-75 relative sm:text-[68vh] sm:tracking-[7px]">
        {["H", "E", "L", "L", "O", "O", "O", "O", "O"].map((letter, index) => (
          <div key={index} ref={(el) => addToRefs(el, letterRefs)}>
            <h1>{letter}</h1>
          </div>
        ))}
        <img
          ref={img}
          className="w-[40vw] h-[33vh] object-cover absolute top-0 z-[10] sm:w-[35vw] sm:h-[60vh] sm:top-[4%]"
          src={profile}
          alt="Profile"
          loading="lazy"
        />
      </div>

      <div className="w-full sm:px-[6%] sm:flex sm:justify-around sm:items-center">
        <div
          style={{ fontFamily: "MyCustomFont" }}
          className="overflow-hidden sm:w-full"
        >
          <p
            className="p-4 text-[2.7vh] tracking-tight mt-[5vh] sm:w-[85%] sm:p-0 sm:tracking-wide sm:mt-[0vh]"
            ref={(el) => addToRefs(el, paraRefs)}
          >
            My name is Khanjan Jha, and I'm a front-end developer, who creates
            websites with a special focus on animations and user interactions.
          </p>
          <p
            className="p-4 sm:w-[85%] text-[2.7vh] tracking-tight sm:p-0 sm:tracking-normal"
            ref={(el) => addToRefs(el, paraRefs)}
          >
            I'm ready to bring your ideas to life and add a touch of originality
            to the online space.
          </p>
        </div>

        <div className="flex w-full justify-end absolute z-[100]">
          <div className="w-[120px] h-[120px] top-[12vh] left-[-15%] absolute bg-gray-950 opacity-80 rounded-full"></div>
        </div>

        <div
          style={{ fontFamily: "MyCustomFont" }}
          className="flex flex-col gap-4 w-full mt-[10vh] overflow-hidden sm:mt-[5vh]"
        >
          <div
            className="leading-none flex justify-end items-end"
            ref={(el) => addToRefs(el, paraRefs)}
          >
            <p className="w-[33%] flex sm:text-[2.3vh] sm:w-[20%]">
              Let's make your project special
            </p>
          </div>

          <div
            style={{ fontFamily: "MyCustomFont2" }}
            className="flex items-center text-5xl justify-center p-14 sm:p-0 sm:pt-20 overflow-hidden sm:justify-end sm:px-0 sm:text-5xl opacity-75"
          >
            {["M", "O", "R", "E", "A", "B", "O", "U", "T", "M", "E"].map(
              (letter, index) => (
                <div
                  key={index}
                  ref={(el) => addToRefs(el, aboutMeRefs)}
                  className={index === 3 || index === 9 ? "mr-1" : ""}
                >
                  <h1 className="border-b-2 border-black">{letter}</h1>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
