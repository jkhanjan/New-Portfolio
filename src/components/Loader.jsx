import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Loader = () => {
  const controls = useAnimation();
  const [percentage, setPercentage] = useState(0);
  const kjControls = useAnimation();

  // Function to animate the entire page upwards and set display to none on complete
  const handleUp = () => {
    controls.start({
      y: "-100vh", // Move the page up by 100% of the viewport height
      transition: { duration: 0.8, ease: "easeInOut" },
      transitionEnd: {
        display: "none",
      },
    });
  };

  // Increment percentage from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          kjControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Adjust speed of the counter (50ms gives around 5 seconds to reach 100%)
  }, [kjControls]);

  // Define animation variants for letters
  const letterVariants = {
    hidden: { y: 100 },
    visible: (i) => ({
      y: 0,
      transition: {
        delay: i * 0.1, // Delay each letter
        duration: 1.0,
        ease: "easeIn",
      },
    }),
  };

  // The letters for "LOADING"
  const loadingText = ["L", "O", "A", "D", "I", "N", "G"];

  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center z-[10] bg-white absolute"
      animate={controls} // Animate the entire page on click
    >
      {/* Percentage display */}
      {percentage < 100 ? (
        <motion.div
          className="text-[12vh]"
          style={{ fontFamily: "MyCustomFont2" }}
        >
          {percentage}%
        </motion.div>
      ) : (
        // KJ appears when percentage reaches 100
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initially hidden with downward offset
          animate={kjControls} // Controlled by useAnimation hook
          style={{ fontFamily: "MyCustomFont2" }}
          className="text-[12vh] flex flex-col items-center"
        >
          <p>KJ</p>
          <button
            onClick={handleUp}
            className="uppercase text-4xl border-b-2 border-black"
            style={{ fontFamily: "MyCustomFont2" }}
          >
            VISIT WEBSITE
          </button>
        </motion.div>
      )}

      <div
        className="flex absolute bottom-0 left-0 text-8xl"
        style={{ fontFamily: "MyCustomFont2" }}
      >
        {loadingText.map((letter, index) => (
          <motion.h1
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
          >
            {letter}
          </motion.h1>
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;
