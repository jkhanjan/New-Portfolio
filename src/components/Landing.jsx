import { motion, useAnimation } from "framer-motion";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const button = useRef(null);
  const parent = useRef(null);
  const para = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const parentElement = parent.current;
      const buttonElement = button.current;
      const paraElement = para.current;

      gsap.registerPlugin(ScrollTrigger);

      if (window.innerWidth > 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: buttonElement,
            start: "0% 78%",
            end: "0% 30%",
            pin: true,
            scrub: true,
          },
          ease: Power4.easeInOut,
        });

        tl.to(buttonElement, {
          scale: 1.15,
        });

        // Clean up function
        return () => {
          tl.kill(); // kill the timeline on unmount to free up resources
        };
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const transitionProps = {
    ease: [0.65, 0, 0.95, 1],
    duration: 1.2,
  };

  return (
    <div
      ref={parent}
      className="w-full h-[120vh] sm:h-[150vh] bg-zinc-900 relative overflow-hidden"
    >
      <motion.div
        initial={{ rotate: 0, height: "100%", opacity: 1, clipPath: "" }}
        animate={{
          rotate: 0,
          height: "0",
          opacity: 0.95,
          clipPath: " polygon(0 0, 100% 0%, 100% 73%, 0% 100%)",
        }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 1,
        }}
        className="absolute w-full h-screen bg-slate-50 z-[100]"
      ></motion.div>

      <motion.div className="picture w-full h-[120%] overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-0.6"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1492778297155-7be4c83960c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </motion.div>

      <div className="w-full absolute top-0">
        <div className="text max-w-screen-2xl h-full mx-auto px-5 sm:px-10 text-white">
          <div className="headings mt-56 sm:mt-40">
            <h1 className="text-7xl uppercase font-semibold sm:text-[10rem] tracking-[-5px] font-MyCustomFont italic">
              <span>a</span>
              <motion.span
                initial={{ rotate: 0, y: "50%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                y
              </motion.span>
              <motion.span
                initial={{ rotate: 30, y: "-60%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                u
              </motion.span>
              <span>r</span>
              <motion.span
                initial={{ rotate: 0, y: "60%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                v
              </motion.span>
              <span>e</span>
              <span>d</span>
              <motion.span
                initial={{ rotate: 0, y: "-80%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                i
              </motion.span>
              <motion.span
                initial={{ rotate: -50, y: "-70%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                c
              </motion.span>
            </h1>
            <h1 className="text-7xl uppercase font-bold sm:text-[10rem] tracking-[-4px] ">
              <motion.span
                initial={{ rotate: 0, x: "-60%", opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                w
              </motion.span>
              <span>e</span>
              <motion.span
                initial={{ rotate: 30, y: "-50%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                l
              </motion.span>
              <span>l</span>
              <motion.span
                initial={{ rotate: 30, y: "-80%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                n
              </motion.span>
              <span>e</span>
              <motion.span
                initial={{ rotate: 0, x: "50%", opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                s
              </motion.span>
              <motion.span
                initial={{ rotate: 0, x: "60%", opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                s
              </motion.span>
            </h1>
            <h1 className="text-7xl uppercase font-bold sm:text-[10rem] tracking-[-4px] ">
              <motion.span
                initial={{ rotate: 70, y: "-50%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                m
              </motion.span>
              <span>o</span>
              <motion.span
                initial={{ rotate: 70, y: 0, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                d
              </motion.span>
              <motion.span
                initial={{ rotate: -70, y: "0", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                e
              </motion.span>
              <span>r</span>
              <motion.span
                initial={{ rotate: -70, y: "-60%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                n
              </motion.span>
            </h1>
            <h1 className="text-7xl uppercase font-bold sm:text-[10rem] tracking-[-4px] ">
              <motion.span
                initial={{ rotate: -70, y: "10%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                t
              </motion.span>
              <span>a</span>
              <motion.span
                initial={{ rotate: 50, y: "0", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                s
              </motion.span>
              <span>t</span>
              <motion.span
                initial={{ rotate: 70, y: "10%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={transitionProps}
                className="inline-block origin-left"
              >
                e
              </motion.span>
            </h1>
          </div>

          <div
            ref={para}
            className="sm:w-1/2 sm:float-end para2 mt-14 sm:mt-24"
          >
            {[
              "premium herbal teas made from the finest",
              "natural ingredients, delivering authentic",
              "flavors and promoting wellness",
            ].map((item, index) => {
              const ref = useRef(null);
              const { ref: inViewRef, entry } = useInView({
                triggerOnce: true,
                threshold: 0.1, // only trigger once when 50% of the element is visible
              });

              return (
                <p
                  key={index}
                  className="sm:text-3xl text-[1rem] tracking-tight leading-none uppercase overflow-hidden"
                  ref={inViewRef}
                >
                  <motion.span
                    initial={{ rotate: 20, opacity: 0, y: "100%" }}
                    animate={{
                      rotate: 0,
                      opacity: entry?.isIntersecting ? 1 : 0,
                      y: entry?.isIntersecting ? 0 : "100%",
                    }}
                    transition={transitionProps}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}

            <motion.a
              ref={button}
              initial={{ y: "20%", scale: 0.85, opacity: 0 }}
              animate={{ y: 0, scale: 0.85, opacity: 1 }}
              transition={transitionProps}
              className="sm:absolute sm:top-[75vh] sm:right-[15vw]  sm:text-4xl sm:z-[1] mt-8 inline-block bg-blue-950 p-3 font-bold tracking-tighter rounded-xl"
              href="#"
            >
              SHOP NOW
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
