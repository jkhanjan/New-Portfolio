import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis"; // Import Lenis for smooth scrolling
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const container = useRef();
  const child1 = useRef();
  const child2 = useRef();
  const child1h1 = useRef();
  const child2h1 = useRef();
  const loadingRef = useRef();
  const buttonRef = useRef();
  const [showButton, setShowButton] = useState(false);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      // Initial setup - ensure elements are in their starting positions
      gsap.set([child1h1.current, child2h1.current], { opacity: 0 });
      gsap.set(loadingRef.current, { opacity: 0 });

      // Create main timeline with better easing
      const mainTl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
      });

      // Text reveal animation with slower timing
      mainTl.to([child1h1.current, child2h1.current], {
        opacity: 0.75,
        duration: 1,
        ease: "power2.out",
      });

      // Loading text animation
      const loadingText = loadingRef.current;
      loadingText.innerHTML = "Loading"
        .split("")
        .map((letter) => `<span class="inline-block">${letter}</span>`)
        .join("");

      mainTl
        .to(loadingText, {
          opacity: 1,
          duration: 0.5,
        })
        .fromTo(
          loadingText.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
              each: 0.1,
              ease: "power2.out",
            },
          },
          "<"
        );

      // Button reveal after loading
      setTimeout(() => {
        setShowButton(true);
        // Delay the animation slightly to ensure the button is mounted
        setTimeout(() => {
          if (buttonRef.current) {
            gsap.fromTo(
              buttonRef.current,
              {
                opacity: 0,
                y: 20,
              },
              {
                opacity: 0.75, // Match the opacity with the design
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              }
            );
          }
        }, 100); // Small delay to ensure button is in DOM
      }, 3000);
    }, container);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis when component unmounts
    };
  }, []);

  const handleClick = () => {
    // Create a new context for exit animations
    const ctx = gsap.context(() => {
      // Create exit timeline with smoother easing
      const exitTl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
          duration: 1.2,
        },
      });

      // Fade out loading elements with slight delay
      exitTl.to([loadingRef.current, buttonRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // Animate sections with better timing and easing
      exitTl.to(
        child1.current,
        {
          y: "-100%",
          force3D: true,
          onStart: () => {
            document.body.style.overflow = "hidden";
          },
        },
        0.2
      );

      exitTl.to(
        child2.current,
        {
          y: "100%",
          force3D: true,
          onComplete: () => {
            document.body.style.overflow = "";
          },
        },
        0.2
      );
    }, container);

    return () => ctx.revert();
  };

  return (
    <div
      ref={container}
      className="h-screen z-[100] relative overflow-hidden will-change-transform"
      style={{ fontFamily: "MyCustomFont2" }}
    >
      <div
        className="w-full h-[50%] absolute top-0 z-[1] bg-white will-change-transform"
        ref={child1}
      >
        <div className="flex items-center justify-center absolute h-full w-full overflow-hidden">
          <h1
            ref={child1h1}
            className="text-9xl sm:text-[20vh] text-black opacity-0 font-semibold tracking-wide absolute bottom-[-20%] sm:bottom-[-22%] will-change-transform"
          >
            KHANJAN
          </h1>
        </div>
      </div>

      <div
        className="w-full h-[50%] absolute bottom-0 z-[1] bg-white will-change-transform"
        ref={child2}
      >
        <div className="flex items-center justify-center absolute h-full w-full overflow-hidden">
          <h1
            ref={child2h1}
            className="text-9xl sm:text-[20vh] text-black opacity-0 font-semibold tracking-wide absolute top-[-16%] sm:top-[-18%] will-change-transform"
          >
            KHANJAN
          </h1>
        </div>
      </div>

      <div
        ref={loadingRef}
        className="absolute bottom-2 sm:text-5xl text-3xl uppercase z-[100] will-change-transform"
      >
        Loading
      </div>

      {showButton && (
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded z-[100] sm:text-5xl text-3xl border-b-2 border-black uppercase will-change-transform hover:opacity-100 transition-opacity"
          style={{ opacity: 0 }} // Set initial opacity in style
        >
          Click here
        </button>
      )}
    </div>
  );
};

export default Loader;
