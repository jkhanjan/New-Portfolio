import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const container = useRef();
  const child1 = useRef();
  const child2 = useRef();
  const child1h1 = useRef();
  const child2h1 = useRef();
  const loadingRef = useRef();
  const buttonRef = useRef();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to delay animations until after the first paint
    requestAnimationFrame(() => {
      // Show "KHANJAN" text immediately
      gsap.to([child1h1.current, child2h1.current], {
        opacity: 0.75,
        duration: 0.5,
        delay: 0.1,
      });

      // Stagger effect on "Loading" text
      const loadingText = loadingRef.current;
      loadingText.innerHTML = ""; // Clear existing text
      const letters = "Loading".split("");

      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        loadingText.appendChild(span);
      });

      gsap.from(loadingText.children, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });

      // Show "Click here" button after 3 seconds
      const timer = setTimeout(() => {
        setShowButton(true);

        // Button appear animation
        gsap.from(buttonRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 3000);

      return () => clearTimeout(timer);
    });
  }, []);

  const handleClick = () => {
    // Hide loading text and button
    gsap.to([loadingRef.current, buttonRef.current], {
      opacity: 0,
      duration: 0.5,
    });

    // Create animation timeline
    const tl = gsap.timeline();

    // Move the first section up
    tl.to(child1.current, {
      y: "-100%", // Use y instead of translateY for smoother performance
      duration: 0.5,
      ease: "power2.inOut",
      display:"none"
    });

    // Move the second section down
    tl.to(
      child2.current,
      {
        y: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        display:'none'
      },
      "<"
    );
  };

  return (
    <div
      ref={container}
      className="h-screen z-[100] relative"
      style={{ fontFamily: "MyCustomFont2" }}
    >
      {/* First section */}
      <div
        className="w-full h-[50%] absolute top-0 z-[1] bg-white"
        ref={child1}
      >
        <div className="flex items-center justify-center absolute h-full w-full overflow-hidden">
          <h1
            ref={child1h1}
            className="text-9xl sm:text-[20vh] text-black opacity-0 font-semibold tracking-wide absolute bottom-[-20%] sm:bottom-[-22%]"
          >
            KHANJAN
          </h1>
        </div>
      </div>

      <div
        className="w-full h-[50%] absolute bottom-0 z-[1] bg-white"
        ref={child2}
      >
        <div className="flex items-center justify-center absolute h-full w-full overflow-hidden">
          <h1
            ref={child2h1}
            className="text-9xl sm:text-[20vh] text-black opacity-0 font-semibold tracking-wide absolute top-[-16%] sm:top-[-18%]"
          >
            KHANJAN
          </h1>
        </div>
      </div>

      {/* Loading text */}
      <div
        ref={loadingRef}
        className="absolute bottom-2 sm:text-5xl text-3xl uppercase z-[100]"
      >
        Loading
      </div>

      {/* Click here button */}
      {showButton && (
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="absolute bottom-16 opacity-75 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded z-[100] sm:text-5xl text-3xl border-b-2 border-black uppercase"
        >
          Click here
        </button>
      )}
    </div>
  );
};

export default Loader;
